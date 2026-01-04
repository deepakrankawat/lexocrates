
import { Services } from '@/components/sections/services';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { Team } from '@/components/sections/team';
import { Blog } from '@/components/sections/blog';

export default function HomePage() {
  return (
    <main className="bg-white">
      <Services />
      <WhyChooseUs />
      <Team />
      <Blog />
    </main>
  );
}
