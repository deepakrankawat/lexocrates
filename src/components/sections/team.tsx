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
  {
    name: 'Lydia Dary',
    title: 'Paralegal',
    image: PlaceHolderImages.find(img => img.id === 'lawyer-6'),
    slug: 'lydia-dary',
  },
  {
    name: 'Smilly Ilani',
    title: 'Legal Assistant',
    image: PlaceHolderImages.find(img => img.id === 'lawyer-1'),
    slug: 'smilly-ilani',
  },
];

export function Team() {
  return (
    <section id="team" className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h3 className="text-primary font-medium mb-2">Lawyer</h3>
            <h2 className="font-headline text-5xl font-bold leading-tight text-primary">
                Professional Services
                <br/>
                Prepared To Be Your
                <br/>
                Lawyer Firm
            </h2>
        </div>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <Link href={`/lawyer/${member.slug}`} key={member.name} className="text-center group">
              {member.image && (
                <div className="relative h-[500px] w-full mb-6 overflow-hidden">
                  <Image
                    src={member.image.imageUrl}
                    alt={`Portrait of ${member.name}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={member.image.imageHint}
                  />
                </div>
              )}
              <h3 className="font-headline text-2xl font-bold text-primary group-hover:text-accent">{member.name}</h3>
              <p className="text-foreground/80 mt-1">{member.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
