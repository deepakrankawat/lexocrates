import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog-data';
import { BlogDetailHero } from '@/components/sections/blog-detail-hero';
import { BlogDetailContent } from '@/components/sections/blog-detail-content';
import { RelatedPosts } from '@/components/sections/related-posts';
import { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const awaitedParams = await params;
  const post = blogPosts.find((p) => p.slug === awaitedParams.slug);
  const related = blogPosts.filter((p) => p.slug !== awaitedParams.slug).slice(0, 3);

  if (!post) {
    notFound();
  }

  // JSON-LD Blog Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    datePublished: new Date(post.date).toISOString(),
    publisher: {
      '@type': 'Organization',
      name: 'Lexocrates',
      logo: {
        '@type': 'ImageObject',
        url: 'https://lexocrates.vercel.app/images/logo-dark.svg',
      },
    },
  };

  return (
    <main className="bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogDetailHero post={post} />
      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1400px] fhd:max-w-[1600px] qhd:max-w-[1800px]">
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
