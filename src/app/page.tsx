
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { Experience } from '@/components/sections/experience';
import { Team } from '@/components/sections/team';
import { Blog } from '@/components/sections/blog';
import { Cta } from '@/components/sections/cta';
import { About } from '@/components/sections/about';
import { WhyChooseUs } from '@/components/sections/why-choose-us';

export default function HomePage() {
  return (
    <main className="bg-white">
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Experience />
      <Team />
      <Blog />
      <Cta />
    </main>
  );
}
