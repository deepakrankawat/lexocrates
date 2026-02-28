import { BlogHero } from '@/components/sections/blog-hero';
import { BlogList } from '@/components/sections/blog-list';
import { BlogShowcase } from '@/components/sections/blog-showcase';

export default function BlogPage() {
  return (
    <main className="bg-background">
      <BlogHero />
      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1400px] fhd:max-w-[1600px] qhd:max-w-[1800px]">
        <BlogList />
        <BlogShowcase />
      </div>
    </main>
  );
}
