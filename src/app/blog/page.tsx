import { BlogHero } from '@/components/sections/blog-hero';
import { BlogList } from '@/components/sections/blog-list';
import { Cta } from '@/components/sections/cta';
import { BlogShowcase } from '@/components/sections/blog-showcase';

export default function BlogPage() {
  return (
    <main className="bg-background">
      <BlogHero />
      <BlogList />
      <BlogShowcase />
      <Cta />
    </main>
  );
}
