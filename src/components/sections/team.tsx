import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const teamMembers = [
  {
    name: 'Jeniffer Smith',
    title: 'Senior Business Lawyer',
    image: PlaceHolderImages.find(img => img.id === 'lawyer-1'),
  },
  {
    name: 'Nada Geomorgant',
    title: 'Senior Business Lawyer',
    image: PlaceHolderImages.find(img => img.id === 'lawyer-2'),
  },
  {
    name: 'Desy Willy',
    title: 'Senior Business Lawyer',
    image: PlaceHolderImages.find(img => img.id === 'lawyer-3'),
  },
];

export function Team() {
  return (
    <section id="team" className="bg-primary text-primary-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
                <h3 className="text-accent font-medium mb-2">Lawyer</h3>
                <h2 className="font-headline text-5xl font-bold leading-tight">
                    Professional Lawyers And Advisors With More Experience
                </h2>
            </div>
            <div className="flex items-center">
                <p className="text-primary-foreground/80">
                    Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie pellentesque urna libero velit porta. Velit pellentesque hac gravida pellentesque est semper. Duis lectus gravida ultricies eleifend in.
                </p>
            </div>
        </div>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              {member.image && (
                <div className="relative h-[400px] w-full mb-6">
                  <Image
                    src={member.image.imageUrl}
                    alt={`Portrait of ${member.name}`}
                    fill
                    className="object-cover"
                    data-ai-hint={member.image.imageHint}
                  />
                </div>
              )}
              <h3 className="font-headline text-2xl font-bold">{member.name}</h3>
              <p className="text-primary-foreground/80 mt-1">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
