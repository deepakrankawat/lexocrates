import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: 'Eleanor Vance',
    title: 'Managing Partner',
    image: PlaceHolderImages.find(img => img.id === 'lawyer-1'),
  },
  {
    name: 'Marcus Thorne',
    title: 'Senior Partner, Corporate Law',
    image: PlaceHolderImages.find(img => img.id === 'lawyer-2'),
  },
  {
    name: 'Isabella Rossi',
    title: 'Senior Associate, Family Law',
    image: PlaceHolderImages.find(img => img.id === 'lawyer-3'),
  },
  {
    name: 'Julian Adler',
    title: 'Associate, Real Estate',
    image: PlaceHolderImages.find(img => img.id === 'lawyer-4'),
  },
];

export function Team() {
  return (
    <section id="team" className="bg-secondary py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold text-primary md:text-5xl">
            Meet Our Attorneys
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Our team of dedicated and experienced lawyers is the cornerstone of our success.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader className="p-0">
                {member.image && (
                  <div className="aspect-square relative">
                    <Image
                      src={member.image.imageUrl}
                      alt={`Portrait of ${member.name}`}
                      fill
                      className="object-cover"
                      data-ai-hint={member.image.imageHint}
                    />
                  </div>
                )}
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                <CardDescription className="text-accent mt-1">{member.title}</CardDescription>
                <div className="mt-4 flex justify-center space-x-3">
                  <a href="#" className="text-foreground/60 hover:text-primary"><Linkedin size={20} /></a>
                  <a href="#" className="text-foreground/60 hover:text-primary"><Twitter size={20} /></a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
