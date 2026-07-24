import { Metadata } from 'next';
import { BlogHero } from '@/components/sections/blog-hero';
import { BlogList } from '@/components/sections/blog-list';
import { BlogShowcase } from '@/components/sections/blog-showcase';
import { getBlogPosts } from '@/lib/erpnext-blogs';

export const metadata: Metadata = {
  title: 'Legal Insights & Perspectives | Lexocrates Insights',
  description:
    'Explore practical insights on legal process outsourcing, legal research, litigation support, contract lifecycle management, compliance, legal technology, and evolving legal operations.',
  alternates: {
    canonical: '/blog',
  },
};

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  return (
    <main className="bg-background">
      <BlogHero />
      <div className="container-balanced">
        <BlogList posts={blogPosts} />
        <BlogShowcase />
      </div>
    </main>
  );
}
