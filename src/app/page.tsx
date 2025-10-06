import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Partners } from '@/components/sections/partners';
import { Services } from '@/components/sections/services';
import { Team } from '@/components/sections/team';
import { Testimonials } from '@/components/sections/testimonials';
import { Blog } from '@/components/sections/blog';
import { Contact } from '@/components/sections/contact';

export default function HomePage() {
  return (
    <main className="bg-background">
      <Hero />
      <About />
      <Partners />
      <Services />
      <Team />
      <Testimonials />
      <Blog />
      <Contact />
    </main>
  );
}
