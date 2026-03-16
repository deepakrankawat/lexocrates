
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { notFound } from 'next/navigation';
import { User, Check } from 'lucide-react';
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

const yashvardhanSinghExpertise = [
    'Sets the company’s strategic vision and direction',
    'Leads business development and key client relationships',
    'Drives company growth and market expansion',
    'Represents the company in the legal and business communities',
    'Ensures financial performance and operational excellence',
    'Champions the company’s mission and ethical values',
];

const geetanjaliExpertise = [
    'Manages day-to-day operations and service delivery',
    'Implements operational policies and procedures',
    'Ensures quality control and client satisfaction',
    'Oversees resource allocation and workflow management',
    'Drives process optimization and efficiency improvements',
    'Manages cross-functional teams to achieve business goals',
];

const hameerSinghExpertise = [
    'Manages and supervises the legal services teams',
    'Ensures the quality and accuracy of all legal work',
    'Serves as the primary point of contact for complex legal matters',
    'Develops and implements training programs for legal staff',
    'Stays abreast of changes in international law and regulations',
    'Oversees compliance with legal best practices',
];

const samPanwarExpertise = [
    'Leads all technology initiatives at Lexocrates',
    'Oversees product development and technical strategy',
    'Ensures security, scalability, and system reliability',
    'Coordinates with legal and operations teams for tech-driven solutions',
    'Drives innovation, automation, and digital transformation',
    'Manages the engineering team and tech infrastructure',
];

const expertiseMap: { [key: string]: string[] } = {
    'yashvardhan-singh': yashvardhanSinghExpertise,
    'geetanjali': geetanjaliExpertise,
    'hameer-singh': hameerSinghExpertise,
    'sam-panwar': samPanwarExpertise,
};

export default async function TeamDetailPage({ params }: { params: { slug: string } }) {
  const awaitedParams = await params;
  const lawyer = teamMembers.find(member => member.slug === awaitedParams.slug);

  if (!lawyer) {
    notFound();
  }

  const expertise = expertiseMap[lawyer.slug];

  return (
    <main className="bg-background">
      <section className="relative text-white pt-24 pb-12 sm:pt-32 sm:pb-16 bg-primary">
        <div className="absolute inset-0 bg-black/40" />
        <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1400px] relative">
          <div className="text-center">
              <h1 className="font-montserrat text-3xl sm:text-5xl font-black tracking-tight">{lawyer.name}</h1>
              <p className="mt-3 text-sm sm:text-lg font-medium text-white/80 uppercase tracking-widest">{lawyer.title}</p>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1400px] fhd:max-w-[1600px] qhd:max-w-[1800px]">
        <section className="py-12 sm:py-20">
              <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
                  <div className="md:col-span-1">
                      <Card className="group overflow-hidden bg-secondary/50 border-none rounded-[2rem] shadow-sm">
                          <CardContent className="p-10 flex flex-col items-center">
                              <div className="p-6 bg-accent/10 rounded-full mb-6">
                                  <User className="h-16 w-16 text-accent" />
                              </div>
                              <h4 className="font-opensans text-xl font-black text-primary">{lawyer.name}</h4>
                              <p className="text-accent font-black uppercase tracking-widest text-[10px] mt-2">{lawyer.title}</p>
                          </CardContent>
                      </Card>
                  </div>
                  <div className="md:col-span-2 space-y-8 text-foreground/70">
                      <h2 className="font-lato text-3xl font-black text-primary tracking-tight">About {lawyer.name}</h2>
                      <div className="prose prose-lg max-w-none text-foreground/70 space-y-6">
                        <p>An accomplished professional, {lawyer.name} has been a cornerstone of Lexocrates since its inception. With a sharp mind and a passion for excellence, {lawyer.name} specializes in {lawyer.title.replace('Head of ', '')}.</p>
                        <p>Clients appreciate a results-driven approach, combined with a deep sense of partnership and a commitment to achieving the best possible outcomes. When not leading the team, {lawyer.name} is an avid reader and a community volunteer.</p>
                      </div>
                      
                      {expertise && expertise.length > 0 && (
                          <div className="pt-8">
                              <h3 className="font-roboto text-2xl font-black text-primary tracking-tight mb-6">Expertise &amp; Responsibilities</h3>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  {expertise.map((item, index) => (
                                      <li key={index} className="flex items-start gap-4 p-5 bg-secondary/30 rounded-xl">
                                          <div className="flex-shrink-0 mt-0.5">
                                              <Check className="h-5 w-5 text-accent" />
                                          </div>
                                          <span className="text-sm font-medium text-foreground/80">{item}</span>
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      )}
                  </div>
              </div>
        </section>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}
