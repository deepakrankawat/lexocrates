

import { Services } from '@/components/sections/services';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { Team } from '@/components/sections/team';
import { Blog } from '@/components/sections/blog';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';

export default function HomePage() {
  return (
    <main className="bg-white">
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Team />
      <Blog />
    </main>
  );
}
