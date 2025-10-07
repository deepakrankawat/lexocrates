import { BlogHero } from '@/components/sections/blog-hero';
import { BlogList } from '@/components/sections/blog-list';
import { Cta } from '@/components/sections/cta';

export default function BlogPage() {
  return (
    <main className="bg-background">
      <BlogHero />
      <BlogList />
      <Cta />
    </main>
  );
}
