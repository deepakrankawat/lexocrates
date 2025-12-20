
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { User } from 'lucide-react';

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
    <section id="team" className="bg-background text-foreground py-12 sm:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <p className="font-lato font-bold text-accent uppercase tracking-wider">Our Experts</p>
            <h2 className="mt-4 font-lato text-3xl md:text-4xl font-bold leading-tight text-primary">
                Our Leadership Team
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-foreground/80">
              Experienced professionals leading our mission
            </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
              <Card key={member.name} className="group overflow-hidden text-center h-full bg-secondary">
                  <CardContent className="p-6 flex flex-col items-center">
                      <div className="p-4 bg-accent/10 rounded-full mb-4">
                          <User className="h-10 w-10 text-accent" />
                      </div>
                      <Link href={`/lawyer/${member.slug}`}>
                          <h4 className="font-opensans text-xl font-semibold text-primary group-hover:text-accent transition-colors">{member.name}</h4>
                      </Link>
                      <p className="text-accent font-bold mt-1 text-sm">{member.title}</p>
                  </CardContent>
              </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
