import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog-data';
import { BlogDetailHero } from '@/components/sections/blog-detail-hero';
import { BlogDetailContent } from '@/components/sections/blog-detail-content';
import { buildMeta } from '@/lib/seo';

type Params = { slug: string };

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lexocrates.com';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return buildMeta({
    title: `${post.title} | Lexocrates Blog`,
    description: post.excerpt ?? post.title,
    canonical: `${siteUrl}/blog/${post.slug}`,
  });
}

export default async function BlogDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-background">
      <BlogDetailHero post={post} />
      <BlogDetailContent post={post} />
    </main>
  );
}
