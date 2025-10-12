
import { Cta } from '@/components/sections/cta';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { User } from 'lucide-react';

const teamMembers = [
  {
    name: 'Laitman Harry',
    title: 'Head of Corporate Solutions',
    image: PlaceHolderImages.find(img => img.id === 'lawyer-4'),
    slug: 'laitman-harry',
  },
  {
    name: 'Nada Geomorgant',
    title: 'Lead, Contract Management',
    image: PlaceHolderImages.find(img => img.id === 'lawyer-2'),
    slug: 'nada-geomorgant',
  },
  {
    name: 'Desy Willy',
    title: 'Director of Compliance',
    image: PlaceHolderImages.find(img => img.id === 'lawyer-3'),
    slug: 'desy-willy',
  },
  {
    name: 'Hernando Jully',
    title: 'Senior Legal Researcher',
    image: PlaceHolderImages.find(img => img.id === 'lawyer-5'),
    slug: 'hernando-jully',
  },
  {
    name: 'Lydia Dary',
    title: 'Document Review Specialist',
    image: PlaceHolderImages.find(img => img.id === 'lawyer-6'),
    slug: 'lydia-dary',
  },
  {
    name: 'Smilly Ilani',
    title: 'Founder & CEO',
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
                  className="object-cover opacity-10"
                  priority
                  data-ai-hint={lawyer.image.imageHint}
              />
          )}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
              <h1 className="font-headline text-5xl md:text-6xl font-bold">{lawyer.name}</h1>
              <p className="mt-4 text-lg text-primary-foreground/80">{lawyer.title}</p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-1">
                  <div className="relative h-[25rem] w-full overflow-hidden bg-secondary flex items-center justify-center">
                    <User className="h-36 w-36 text-primary/10" />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-6 text-foreground/80">
                    <h2 className="font-headline text-4xl font-bold text-primary">About {lawyer.name}</h2>
                    <p>An accomplished professional, {lawyer.name} has been a cornerstone of Lexocrates since its inception. With a sharp mind and a passion for excellence, {lawyer.name} specializes in {lawyer.title.replace('Senior ', '')}.</p>
                    <p>Clients appreciate a results-driven approach, combined with a deep sense of partnership and a commitment to achieving the best possible outcomes. When not leading the team, {lawyer.name} is an avid reader and a community volunteer.</p>
                    <h3 className="font-headline text-3xl font-bold text-primary pt-8">Education & Certifications</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Juris Doctor, University of Law, 2010</li>
                        <li>Certified Legal Project Manager (CLPM)</li>
                        <li>Bachelor of Arts in Business Administration, State University, 2007</li>
                    </ul>
                     <h3 className="font-headline text-3xl font-bold text-primary pt-8">Professional Admissions</h3>
                     <ul className="list-disc list-inside space-y-2">
                        <li>State Bar, 2011</li>
                        <li>International Association for Contract & Commercial Management (IACCM)</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>
      
      <Cta />
    </main>
  );
}
