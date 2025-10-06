
import { Team } from '@/components/sections/team';
import { Cta } from '@/components/sections/cta';
import { Testimonials } from '@/components/sections/testimonials';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { notFound } from 'next/navigation';

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

export default function LawyerDetailPage({ params }: { params: { slug: string } }) {
  const lawyer = teamMembers.find(member => member.slug === params.slug);

  if (!lawyer) {
    notFound();
  }

  return (
    <main className="bg-background">
      <section className="relative bg-primary text-primary-foreground pt-36 pb-20 sm:pt-48 sm:pb-32">
          {lawyer.image && (
              <Image
                  src={lawyer.image.imageUrl}
                  alt={lawyer.image.description}
                  fill
                  className="object-cover opacity-20"
                  priority
                  data-ai-hint={lawyer.image.imageHint}
              />
          )}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
              <h1 className="font-headline text-6xl md:text-7xl font-bold">{lawyer.name}</h1>
              <p className="mt-4 text-lg text-primary-foreground/80">{lawyer.title}</p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-1">
                    {lawyer.image && (
                        <div className="relative h-[400px] w-full">
                        <Image
                            src={lawyer.image.imageUrl}
                            alt={`Portrait of ${lawyer.name}`}
                            fill
                            className="object-cover"
                            data-ai-hint={lawyer.image.imageHint}
                        />
                        </div>
                    )}
                </div>
                <div className="md:col-span-2 space-y-6 text-foreground/80">
                    <h2 className="font-headline text-4xl font-bold text-primary">About {lawyer.name}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie pellentesque urna libero velit porta. Velit pellentesque hac gravida pellentesque est semper. Duis lectus gravida ultricies eleifend in pharetra faucibus orci sem. Proin ac a cursus praesent. Malesuada risus amet nunc posuere rhoncus accumsan congue id dolor. Convallis maecenas sed in pellentesque.</p>
                    <p>Cum mattis mollis odio gravida adipiscing. Facilisis scelerisque non lacinia tincidunt faucibus tortor vel. Erat risus etiam quam pretium ornare. Semper orci arcu pulvinar adipiscing pretium. Erat facilisis dis arcu senectus sit mi fermentum eu aliquam. Felis neque posuere pharetra porttitor lacinia proin pretium. Et et pharetra tincidunt vel egestas risus sed mollis adipiscing. Lobortis risus mauris vitae pellentesque.</p>
                    <h3 className="font-headline text-3xl font-bold text-primary pt-8">Education</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Juris Doctor, University of Law, 2010</li>
                        <li>Bachelor of Arts in Political Science, State University, 2007</li>
                    </ul>
                     <h3 className="font-headline text-3xl font-bold text-primary pt-8">Bar Admissions</h3>
                     <ul className="list-disc list-inside space-y-2">
                        <li>State Bar, 2011</li>
                        <li>Federal District Court, 2012</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>
      
      <Cta />
      <Testimonials />
    </main>
  );
}
