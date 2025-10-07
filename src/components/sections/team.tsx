import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Laitman Harry',
    title: 'Senior Business Lawyer',
    image: PlaceHolderImages.find(img => img.id === 'lawyer-4'),
    slug: 'laitman-harry',
  },
  {
    name: 'Nada Geomorgant',
    title: 'Senior Criminal Lawyer',
    image: PlaceHolderImages.find(img => img.id === 'lawyer-2'),
    slug: 'nada-geomorgant',
  },
  {
    name: 'Desy Willy',
    title: 'Senior Family Lawyer',
    image: PlaceHolderImages.find(img => img.id === 'lawyer-3'),
    slug: 'desy-willy',
  },
  {
    name: 'Hernando Jully',
    title: 'Associate Attorney',
    image: PlaceHolderImages.find(img => img.id === 'lawyer-5'),
    slug: 'hernando-jully',
  },
];

export function Team() {
  return (
    <section id="team" className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <p className="font-body font-bold text-accent uppercase tracking-wider">Our Experts</p>
            <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold leading-tight text-primary">
                Professional Lawyers And Advisors With More Experience
            </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="group text-center">
              {member.image && (
                <div className="relative h-96 w-full overflow-hidden">
                  <Link href={`/lawyer/${member.slug}`}>
                    <Image
                      src={member.image.imageUrl}
                      alt={`Portrait of ${member.name}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={member.image.imageHint}
                    />
                  </Link>
                </div>
              )}
              <div className="p-6">
                <Link href={`/lawyer/${member.slug}`}>
                    <h3 className="font-headline text-2xl font-bold text-primary group-hover:text-accent transition-colors">{member.name}</h3>
                </Link>
                <p className="text-accent font-bold mt-1">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
