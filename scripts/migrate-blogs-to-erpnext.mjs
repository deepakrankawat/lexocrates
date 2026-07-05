import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import ts from 'typescript';

const root = process.cwd();

async function loadEnvFile() {
  const envPath = resolve(root, '.env.local');
  const contents = await readFile(envPath, 'utf8');

  for (const rawLine of contents.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;

    const separator = line.indexOf('=');
    if (separator === -1) continue;

    const key = line.slice(0, separator).trim();
    let value = line.slice(separator + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

async function loadLegacyBlogPosts() {
  const sourcePath = resolve(root, 'src/lib/blog-data.ts');
  const source = await readFile(sourcePath, 'utf8');
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
    fileName: sourcePath,
  }).outputText;
  const module = { exports: {} };
  const execute = new Function('module', 'exports', compiled);
  execute(module, module.exports);
  return module.exports.blogPosts;
}

function getConfig() {
  const baseUrl = process.env.ERPNEXT_URL?.trim().replace(/\/+$/, '');
  const apiKey = process.env.ERPNEXT_API_KEY?.trim();
  const apiSecret = process.env.ERPNEXT_API_SECRET?.trim();
  const bloggerShortName =
    process.env.ERPNEXT_BLOGGER_SHORT_NAME?.trim() ||
    'lexocrates-research-desk';
  const bloggerFullName =
    process.env.ERPNEXT_BLOGGER_FULL_NAME?.trim() ||
    'Lexocrates Research Desk';

  if (!baseUrl || !apiKey || !apiSecret) {
    throw new Error(
      'Fill ERPNEXT_URL, ERPNEXT_API_KEY, and ERPNEXT_API_SECRET in .env.local before running this migration.'
    );
  }

  const parsedUrl = new URL(baseUrl);
  if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
    throw new Error('ERPNEXT_URL must start with http:// or https://.');
  }

  return {
    baseUrl,
    authorization: `token ${apiKey}:${apiSecret}`,
    bloggerShortName,
    bloggerFullName,
  };
}

async function apiRequest(config, path, options = {}) {
  const response = await fetch(`${config.baseUrl}${path}`, {
    ...options,
    headers: {
      Accept: 'application/json',
      Authorization: config.authorization,
      ...(options.body ? { 'Content-Type': 'application/json' } : {}),
      ...options.headers,
    },
  });

  const text = await response.text();
  let payload;
  try {
    payload = text ? JSON.parse(text) : {};
  } catch {
    payload = { message: text };
  }

  if (!response.ok) {
    const details =
      payload?._server_messages || payload?.exception || payload?.message || text;
    throw new Error(
      `${options.method || 'GET'} ${path} failed (${response.status}): ${String(
        details
      ).slice(0, 1000)}`
    );
  }

  return payload;
}

async function findRecord(config, doctype, filters, fields = ['name']) {
  const search = new URLSearchParams({
    filters: JSON.stringify(filters),
    fields: JSON.stringify(fields),
    limit_page_length: '1',
  });
  const payload = await apiRequest(
    config,
    `/api/resource/${encodeURIComponent(doctype)}?${search.toString()}`
  );
  return payload.data?.[0];
}

async function createRecord(config, doctype, data) {
  const payload = await apiRequest(
    config,
    `/api/resource/${encodeURIComponent(doctype)}`,
    {
      method: 'POST',
      body: JSON.stringify(data),
    }
  );
  return payload.data;
}

async function updateRecord(config, doctype, name, data) {
  const payload = await apiRequest(
    config,
    `/api/resource/${encodeURIComponent(doctype)}/${encodeURIComponent(name)}`,
    {
      method: 'PUT',
      body: JSON.stringify(data),
    }
  );
  return payload.data;
}

async function ensureBlogger(config) {
  const existing = await findRecord(
    config,
    'Blogger',
    [['short_name', '=', config.bloggerShortName]],
    ['name', 'full_name']
  );

  if (existing) {
    console.log(`Blogger exists: ${existing.full_name}`);
    return existing.name;
  }

  const created = await createRecord(config, 'Blogger', {
    short_name: config.bloggerShortName,
    full_name: config.bloggerFullName,
    disabled: 0,
  });
  console.log(`Created blogger: ${created.full_name}`);
  return created.name;
}

async function ensureCategory(config, title) {
  const existing = await findRecord(
    config,
    'Blog Category',
    [['title', '=', title]],
    ['name', 'title']
  );
  if (existing) return existing.name;

  const created = await createRecord(config, 'Blog Category', {
    title,
    published: 1,
  });
  console.log(`Created category: ${title}`);
  return created.name;
}

function toERPNextDate(displayDate) {
  const parsed = new Date(`${displayDate} UTC`);
  if (Number.isNaN(parsed.getTime())) {
    throw new Error(`Invalid blog date: ${displayDate}`);
  }
  return parsed.toISOString().slice(0, 10);
}

function takeawayMarker(takeaways) {
  const encoded = Buffer.from(
    JSON.stringify(takeaways || []),
    'utf8'
  ).toString('base64');
  return `\n<!--LEXOCRATES_KEY_TAKEAWAYS_BASE64:${encoded}-->`;
}

async function upsertBlog(config, post, bloggerName, categoryName) {
  const existing = await findRecord(
    config,
    'Blog Post',
    [['route', '=', post.slug]],
    ['name', 'route']
  );
  const data = {
    title: post.title,
    route: post.slug,
    blogger: bloggerName,
    blog_category: categoryName,
    blog_intro: post.excerpt.slice(0, 200),
    content_type: 'HTML',
    content_html: `${post.fullContent}${takeawayMarker(post.keyTakeaways)}`,
    published_on: toERPNextDate(post.date),
    published: 1,
    meta_title: post.title.slice(0, 60),
    meta_description: post.excerpt.slice(0, 140),
  };

  if (existing) {
    await updateRecord(config, 'Blog Post', existing.name, data);
    console.log(`Updated blog: ${post.title}`);
    return 'updated';
  }

  await createRecord(config, 'Blog Post', data);
  console.log(`Created blog: ${post.title}`);
  return 'created';
}

async function main() {
  await loadEnvFile();
  const config = getConfig();
  const posts = await loadLegacyBlogPosts();

  console.log(`Preparing to migrate ${posts.length} blogs to ${config.baseUrl}`);
  const bloggerName = await ensureBlogger(config);
  const categoryNames = new Map();

  for (const category of [...new Set(posts.map((post) => post.category))]) {
    categoryNames.set(
      category,
      await ensureCategory(config, category)
    );
  }

  const totals = { created: 0, updated: 0 };
  for (const post of posts) {
    const result = await upsertBlog(
      config,
      post,
      bloggerName,
      categoryNames.get(post.category)
    );
    totals[result] += 1;
  }

  console.log(
    `Migration complete: ${totals.created} created, ${totals.updated} updated.`
  );
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
