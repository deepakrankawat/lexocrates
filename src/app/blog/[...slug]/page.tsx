import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogDetailHero } from '@/components/sections/blog-detail-hero';
import { BlogDetailContent } from '@/components/sections/blog-detail-content';
import { buildMeta } from '@/lib/seo';
import { getBlogPosts } from '@/lib/erpnext-blogs';

type Params = { slug: string[] };

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lexocrates.com';

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const blogPosts = await getBlogPosts();
  return blogPosts.map((post) => ({ slug: post.slug.split('/') }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug: slugParts } = await params;
  const slug = slugParts.join('/');
  const blogPosts = await getBlogPosts();
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return buildMeta({
    title: post.metaTitle || `${post.title} | Lexocrates Blog`,
    description: post.metaDescription || post.excerpt || post.title,
    canonical: `${siteUrl}/blog/${post.slug}`,
    ogImage: post.metaImage,
  });
}

export default async function BlogDetailPage({ params }: { params: Promise<Params> }) {
  const { slug: slugParts } = await params;
  const slug = slugParts.join('/');
  const blogPosts = await getBlogPosts();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-background">
      <BlogDetailHero post={post} />
      <BlogDetailContent
        post={post}
        recommendedPosts={blogPosts.filter((item) => item.id !== post.id).slice(0, 3)}
      />
    </main>
  );
}
