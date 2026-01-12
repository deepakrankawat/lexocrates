
import { BlogHero } from '@/components/sections/blog-hero';
import { BlogList } from '@/components/sections/blog-list';
import { Cta } from '@/components/sections/cta';
import { BlogShowcase } from '@/components/sections/blog-showcase';

export default function BlogPage() {
  return (
    <main className="bg-background">
      <BlogHero />
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-full laptop:max-w-[1200px] fhd:max-w-[1400px] qhd:max-w-[1600px] uhd:max-w-[1800px]">
        <BlogList />
        <BlogShowcase />
      </div>
    </main>
  );
}
