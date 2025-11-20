import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog-data';
import { BlogDetailHero } from '@/components/sections/blog-detail-hero';
import { BlogDetailContent } from '@/components/sections/blog-detail-content';
import { Cta } from '@/components/sections/cta';
import { RelatedPosts } from '@/components/sections/related-posts';

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const awaitedParams = await params;
  const post = blogPosts.find((p) => p.slug === awaitedParams.slug);
  const related = blogPosts.filter((p) => p.slug !== awaitedParams.slug).slice(0, 3);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-background">
      <BlogDetailHero post={post} />
      <BlogDetailContent post={post} />
      <RelatedPosts posts={related} />
      <Cta />
    </main>
  );
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
