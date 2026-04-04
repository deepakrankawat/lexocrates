import { Metadata } from 'next';
import { BlogHero } from '@/components/sections/blog-hero';
import { BlogList } from '@/components/sections/blog-list';
import { BlogShowcase } from '@/components/sections/blog-showcase';

export const metadata: Metadata = {
  title: 'Legal Insights & LPO Trends | Lexocrates Blog',
  description: 'Stay updated with the latest trends in legal process outsourcing, data security in law, and AI-driven legal operations.',
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  return (
    <main className="bg-background">
      <BlogHero />
      <div className="container-balanced">
        <BlogList />
        <BlogShowcase />
      </div>
    </main>
  );
}
