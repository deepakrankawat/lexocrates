import { Cta } from '@/components/sections/cta';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'Yashvardhan Singh',
    title: 'Chief Executive Officer',
    slug: 'yashvardhan-singh',
    image: PlaceHolderImages.find(img => img.id === 'lawyer-4'),
  },
  {
    name: 'Geetanjali',
    title: 'Chief Operating Officer',
    slug: 'geetanjali',
    image: PlaceHolderImages.find(img => img.id === 'lawyer-2'),
  },
  {
    name: 'Hameer Singh',
    title: 'Head of Legal Services',
    slug: 'hameer-singh',
    image: PlaceHolderImages.find(img => img.id === 'lawyer-3'),
  },
  {
    name: 'Sam Panwar',
    title: 'Head of Technology',
    slug: 'sam-panwar',
    image: PlaceHolderImages.find(img => img.id === 'lawyer-5'),
  },
];

export default async function LawyerDetailPage({ params }: { params: { slug: string } }) {
  const awaitedParams = await params;
  const lawyer = teamMembers.find(member => member.slug === awaitedParams.slug);

  if (!lawyer) {
    notFound();
  }

  return (
    <main className="bg-background">
      <section className="relative text-white pt-36 pb-16 sm:pt-48 sm:pb-24">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
              <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl font-bold">{lawyer.name}</h1>
              <p className="mt-4 text-lg text-white/80">{lawyer.title}</p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-1">
                    <Card className="group overflow-hidden text-center h-full bg-secondary">
                        <CardContent className="p-6 flex flex-col items-center">
                            <div className="p-4 bg-accent/10 rounded-full mb-4">
                                <User className="h-16 w-16 text-accent" />
                            </div>
                            <h4 className="font-opensans text-xl sm:text-2xl font-semibold text-primary">{lawyer.name}</h4>
                            <p className="text-accent font-bold mt-1">{lawyer.title}</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="md:col-span-2 space-y-6 text-foreground/80">
                    <h2 className="font-lato text-3xl sm:text-4xl font-bold text-primary">About {lawyer.name}</h2>
                    <p>An accomplished professional, {lawyer.name} has been a cornerstone of Lexocrates since its inception. With a sharp mind and a passion for excellence, {lawyer.name} specializes in {lawyer.title.replace('Senior ', '')}.</p>
                    <p>Clients appreciate a results-driven approach, combined with a deep sense of partnership and a commitment to achieving the best possible outcomes. When not leading the team, {lawyer.name} is an avid reader and a community volunteer.</p>
                    <h3 className="font-roboto text-2xl sm:text-3xl font-medium text-primary pt-8">Education & Certifications</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Juris Doctor, University of Law, 2010</li>
                        <li>Certified Legal Project Manager (CLPM)</li>
                        <li>Bachelor of Arts in Business Administration, State University, 2007</li>
                    </ul>
                     <h3 className="font-roboto text-2xl sm:text-3xl font-medium text-primary pt-8">Professional Admissions</h3>
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

export function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}
