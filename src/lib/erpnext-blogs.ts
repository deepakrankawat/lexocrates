import { marked } from 'marked';
import type { BlogPost } from '@/lib/blog-types';

type FrappeListResponse<T> = {
  data: T[];
};

type ERPNextBlogPost = {
  name: string;
  title: string;
  route?: string;
  blog_intro?: string;
  published: 0 | 1;
  published_on?: string;
  modified?: string;
  featured?: 0 | 1;
  meta_title?: string;
  meta_description?: string;
  meta_image?: string;
  blog_category: string;
  blogger: string;
  read_time?: number;
  content_type: 'Markdown' | 'Rich Text' | 'HTML';
  content?: string;
  content_md?: string;
  content_html?: string;
};

type ERPNextBlogCategory = {
  name: string;
  title: string;
  route?: string;
};

type ERPNextBlogger = {
  name: string;
  full_name: string;
  avatar?: string;
};

type ERPNextConfig = {
  baseUrl: string;
  authorization: string;
  revalidate: number;
};

const BLOG_CACHE_TAG = 'erpnext-blogs';
const TAKEAWAYS_PATTERN =
  /<!--LEXOCRATES_KEY_TAKEAWAYS_BASE64:([A-Za-z0-9+/=]+)-->/;

function getConfig(): ERPNextConfig | null {
  const baseUrl = process.env.ERPNEXT_URL?.trim().replace(/\/+$/, '');
  const apiKey = process.env.ERPNEXT_API_KEY?.trim();
  const apiSecret = process.env.ERPNEXT_API_SECRET?.trim();
  const configuredRevalidate = Number(
    process.env.ERPNEXT_BLOG_REVALIDATE_SECONDS || 300
  );

  if (!baseUrl || !apiKey || !apiSecret) {
    return null;
  }

  return {
    baseUrl,
    authorization: `token ${apiKey}:${apiSecret}`,
    revalidate:
      Number.isFinite(configuredRevalidate) && configuredRevalidate > 0
        ? configuredRevalidate
        : 300,
  };
}

async function getERPNextList<T>(
  doctype: string,
  fields: string[],
  options?: {
    filters?: unknown[];
    orderBy?: string;
  }
): Promise<T[]> {
  const config = getConfig();
  if (!config) return [];
  const search = new URLSearchParams({
    fields: JSON.stringify(fields),
    limit_page_length: '1000',
  });
  if (options?.filters) {
    search.set('filters', JSON.stringify(options.filters));
  }
  if (options?.orderBy) {
    search.set('order_by', options.orderBy);
  }
  const url = `${config.baseUrl}/api/resource/${encodeURIComponent(
    doctype
  )}?${search.toString()}`;
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      Authorization: config.authorization,
    },
    next: {
      revalidate: config.revalidate,
      tags: [BLOG_CACHE_TAG],
    },
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(
      `ERPNext ${doctype} request failed (${response.status}): ${details.slice(
        0,
        500
      )}`
    );
  }

  const payload = (await response.json()) as FrappeListResponse<T>;
  return payload.data;
}

function getHtmlContent(post: ERPNextBlogPost): string {
  if (post.content_type === 'Markdown') {
    return marked.parse(post.content_md || '', { async: false }) as string;
  }

  if (post.content_type === 'HTML') {
    return post.content_html || '';
  }

  return post.content || '';
}

function extractTakeaways(content: string): {
  content: string;
  takeaways: string[];
} {
  const match = content.match(TAKEAWAYS_PATTERN);
  if (!match) {
    return { content, takeaways: [] };
  }

  try {
    const decoded = Buffer.from(match[1], 'base64').toString('utf8');
    const parsed = JSON.parse(decoded);

    return {
      content: content.replace(match[0], ''),
      takeaways: Array.isArray(parsed)
        ? parsed.filter((item): item is string => typeof item === 'string')
        : [],
    };
  } catch {
    return { content: content.replace(match[0], ''), takeaways: [] };
  }
}

function formatPublishedDate(date?: string): string {
  if (!date) return '';

  const parsed = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return date;

  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(parsed);
}

function absoluteAssetUrl(baseUrl: string, asset?: string): string | undefined {
  if (!asset) return undefined;
  return new URL(asset, `${baseUrl}/`).toString();
}

const FALLBACK_ARTICLES: BlogPost[] = [
  {
    id: '1',
    title: 'The Anatomy of a Secure Legal Delivery Center',
    slug: 'the-anatomy-of-a-secure-legal-delivery-center',
    author: 'Lexocrates Research Desk',
    date: 'March 15, 2026',
    publishedOn: '2026-03-15',
    lastModified: '2026-03-15',
    category: 'DATA SECURITY',
    categorySlug: 'data-security',
    featured: true,
    readingMinutes: 5,
    readingTime: '5 min read',
    excerpt: 'What law firms and legal departments should expect from secure infrastructure, trained teams, access controls, monitoring, and delivery governance.',
    keyTakeaways: [
      'Secure infrastructure and access controls are fundamental for LPO operations.',
      'Continuous monitoring and delivery governance protect client data.',
    ],
    fullContent: 'What law firms and legal departments should expect from secure infrastructure, trained teams, access controls, monitoring, and delivery governance.',
  },
  {
    id: '2',
    title: 'How to Onboard an Offshore Legal Pod in 30 Days',
    slug: 'how-to-onboard-an-offshore-legal-pod-in-30-days',
    author: 'Lexocrates Research Desk',
    date: 'March 10, 2026',
    publishedOn: '2026-03-10',
    lastModified: '2026-03-10',
    category: 'LPO STRATEGY',
    categorySlug: 'lpo-strategy',
    featured: true,
    readingMinutes: 6,
    readingTime: '6 min read',
    excerpt: 'A practical 30-day roadmap for launching a legal outsourcing pod with scope, security, training, workflow integration, QA, and reporting.',
    keyTakeaways: [
      'Clear scope definition accelerates pod onboarding.',
      'Workflow integration and reporting ensure continuous alignment.',
    ],
    fullContent: 'A practical 30-day roadmap for launching a legal outsourcing pod with scope, security, training, workflow integration, QA, and reporting.',
  },
  {
    id: '3',
    title: 'Matter Intake Checklists for Outsourced Legal Work',
    slug: 'matter-intake-checklists-for-outsourced-legal-work',
    author: 'Lexocrates Research Desk',
    date: 'March 05, 2026',
    publishedOn: '2026-03-05',
    lastModified: '2026-03-05',
    category: 'LEGAL OPERATIONS',
    categorySlug: 'legal-operations',
    featured: false,
    readingMinutes: 4,
    readingTime: '4 min read',
    excerpt: 'The intake information law firms and legal departments should provide to improve speed, quality, confidentiality, and delivery accuracy.',
    keyTakeaways: [
      'Structured intake checklists minimize back-and-forth delays.',
      'Comprehensive documentation boosts initial accuracy and delivery speed.',
    ],
    fullContent: 'The intake information law firms and legal departments should provide to improve speed, quality, confidentiality, and delivery accuracy.',
  },
  {
    id: '4',
    title: 'The Role of Human Review in AI-Assisted Legal Work',
    slug: 'the-role-of-human-review-in-ai-assisted-legal-work',
    author: 'Lexocrates Research Desk',
    date: 'February 28, 2026',
    publishedOn: '2026-02-28',
    lastModified: '2026-02-28',
    category: 'AI GOVERNANCE',
    categorySlug: 'ai-governance',
    featured: false,
    readingMinutes: 5,
    readingTime: '5 min read',
    excerpt: 'Why legal AI creates value only when paired with trained reviewers, legal reasoning, citation checks, privilege analysis, and disciplined escalation.',
    keyTakeaways: [
      'AI tools augment legal analysis but cannot replace expert human review.',
      'Disciplined escalation and citation checks prevent legal hallucination risks.',
    ],
    fullContent: 'Why legal AI creates value only when paired with trained reviewers, legal reasoning, citation checks, privilege analysis, and disciplined escalation.',
  },
  {
    id: '5',
    title: 'Why AI Alone Cannot Replace Legal Process Discipline',
    slug: 'why-ai-alone-cannot-replace-legal-process-discipline',
    author: 'Lexocrates Research Desk',
    date: 'February 20, 2026',
    publishedOn: '2026-02-20',
    lastModified: '2026-02-20',
    category: 'AI GOVERNANCE',
    categorySlug: 'ai-governance',
    featured: false,
    readingMinutes: 5,
    readingTime: '5 min read',
    excerpt: 'Why legal teams need workflow design, supervision, QA, escalation, and accountability around AI-assisted legal delivery.',
    keyTakeaways: [
      'Workflow supervision is crucial for high-quality legal outputs.',
      'Process discipline ensures consistent accountability.',
    ],
    fullContent: 'Why legal teams need workflow design, supervision, QA, escalation, and accountability around AI-assisted legal delivery.',
  },
  {
    id: '6',
    title: 'A Practical QA Framework for Outsourced Legal Research',
    slug: 'a-practical-qa-framework-for-outsourced-legal-research',
    author: 'Lexocrates Research Desk',
    date: 'February 15, 2026',
    publishedOn: '2026-02-15',
    lastModified: '2026-02-15',
    category: 'LEGAL RESEARCH',
    categorySlug: 'legal-research',
    featured: false,
    readingMinutes: 6,
    readingTime: '6 min read',
    excerpt: 'What a multi-level quality control, source validation, adverse authority checks, and jurisdictional review make outsourced legal research more defensible.',
    keyTakeaways: [
      'Multi-level quality control builds defensible research briefs.',
      'Jurisdictional verification protects against adverse legal authority traps.',
    ],
    fullContent: 'What a multi-level quality control, source validation, adverse authority checks, and jurisdictional review make outsourced legal research more defensible.',
  },
];

export async function getBlogPosts(): Promise<BlogPost[]> {
  const config = getConfig();
  if (!config) return FALLBACK_ARTICLES;
  const [posts, categories, bloggers] = await Promise.all([
    getERPNextList<ERPNextBlogPost>('Blog Post', [
      'name',
      'title',
      'route',
      'blog_intro',
      'published',
      'published_on',
      'modified',
      'featured',
      'meta_title',
      'meta_description',
      'meta_image',
      'blog_category',
      'blogger',
      'read_time',
      'content_type',
      'content',
      'content_md',
      'content_html',
    ], {
      filters: [['published', '=', 1]],
      orderBy: 'published_on desc',
    }),
    getERPNextList<ERPNextBlogCategory>('Blog Category', [
      'name',
      'title',
      'route',
    ]),
    getERPNextList<ERPNextBlogger>('Blogger', [
      'name',
      'full_name',
      'avatar',
    ]),
  ]);

  const categoryByName = new Map(
    categories.map((category) => [category.name, category.title])
  );
  const bloggerByName = new Map(
    bloggers.map((blogger) => [blogger.name, blogger])
  );

  return posts
    .filter((post) => Boolean(post.published && post.route && post.published_on))
    .map((post) => {
      const parsedContent = extractTakeaways(getHtmlContent(post));
      const category = categories.find(
        (item) => item.name === post.blog_category
      );
      const blogger = bloggerByName.get(post.blogger);
      const readingMinutes = post.read_time || 1;

      return {
        id: post.name,
        title: post.title,
        slug: post.route!,
        author: blogger?.full_name || post.blogger,
        date: formatPublishedDate(post.published_on),
        publishedOn: post.published_on || '',
        lastModified: post.modified || post.published_on || '',
        category: categoryByName.get(post.blog_category) || post.blog_category,
        categorySlug: category?.route || category?.name || post.blog_category,
        featured: Boolean(post.featured),
        readingMinutes,
        readingTime: `${readingMinutes} min read`,
        excerpt: post.blog_intro || '',
        keyTakeaways: parsedContent.takeaways,
        fullContent: parsedContent.content,
        metaTitle: post.meta_title,
        metaDescription: post.meta_description,
        metaImage: absoluteAssetUrl(config.baseUrl, post.meta_image),
        authorAvatar: absoluteAssetUrl(config.baseUrl, blogger?.avatar),
      };
    })
    .sort(
      (left, right) =>
        Number(right.featured) - Number(left.featured) ||
        right.publishedOn.localeCompare(left.publishedOn)
    );
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug);
}

export { BLOG_CACHE_TAG };
