import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { User } from 'lucide-react';
import { SlideIn } from '../animations/slide-in';
import { StaggerFadeIn } from '../animations/stagger-fade-in';

const teamMembers = [
  {
    name: 'Yashvardhan Singh',
    title: 'Chief Executive Officer',
    slug: 'yashvardhan-singh',
  },
  {
    name: 'Geetanjali',
    title: 'Chief Operating Officer',
    slug: 'geetanjali',
  },
  {
    name: 'Hameer Singh',
    title: 'Head of Legal Services',
    slug: 'hameer-singh',
  },
  {
    name: 'Sam Panwar',
    title: 'Head of Technology',
    slug: 'sam-panwar',
  },
];

export function Team() {
  return (
    <section id="team" className="bg-background text-foreground py-24 sm:py-32">
      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1800px]">
        <SlideIn className="text-center mb-20">
            <p className="font-lato font-black text-accent uppercase tracking-[0.3em] mb-4 text-sm">Our Leadership</p>
            <h2 className="font-lato text-4xl sm:text-6xl font-black leading-tight text-primary mb-6 tracking-tight">
                Global Visionary Team
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-medium">
              A collective of experienced professionals driving legal innovation and client success across borders.
            </p>
        </SlideIn>
        
        <StaggerFadeIn className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
              <Card key={member.name} className="group relative overflow-hidden bg-secondary/30 border-black/5 hover:border-accent/50 hover:shadow-2xl transition-all duration-500 rounded-3xl">
                  <CardContent className="p-10 flex flex-col items-center text-center">
                      <div className="p-6 bg-accent/10 rounded-full mb-8 group-hover:bg-accent transition-colors duration-500">
                          <User className="h-12 w-12 text-accent group-hover:text-white transition-colors duration-500" />
                      </div>
                      <Link href={`/lawyer/${member.slug}`} className="group/link">
                          <h4 className="font-opensans text-2xl font-bold text-primary group-hover/link:text-accent transition-colors duration-300 mb-2">
                            {member.name}
                          </h4>
                      </Link>
                      <p className="text-accent font-extrabold uppercase tracking-widest text-xs">
                        {member.title}
                      </p>
                  </CardContent>
              </Card>
          ))}
        </StaggerFadeIn>
      </div>
    </section>
  );
}