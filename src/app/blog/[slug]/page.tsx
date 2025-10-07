import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog-data';
import { BlogDetailHero } from '@/components/sections/blog-detail-hero';
import { BlogDetailContent } from '@/components/sections/blog-detail-content';
import { Cta } from '@/components/sections/cta';
import { RelatedPosts } from '@/components/sections/related-posts';

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  const related = blogPosts.filter((p) => p.slug !== params.slug).slice(0, 3);

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
