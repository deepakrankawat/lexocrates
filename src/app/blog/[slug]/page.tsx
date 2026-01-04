
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
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-full laptop:max-w-[1200px] fhd:max-w-[1400px] qhd:max-w-[1600px] uhd:max-w-[1800px]">
        <BlogDetailContent post={post} />
        <RelatedPosts posts={related} />
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
