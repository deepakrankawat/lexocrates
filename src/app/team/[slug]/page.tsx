import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { teamMembers } from '@/lib/team-data';
import { buildMeta } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';
import { Check, ArrowLeft, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

type Params = { slug: string };

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lexocrates.com';

export function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);
  if (!member) return {};

  return buildMeta({
    title: `${member.name} | ${member.title} | Lexocrates Leadership`,
    description: member.bio || `${member.name}, ${member.title} at Lexocrates.`,
    canonical: `${siteUrl}/team/${member.slug}`,
    ogImage: member.image,
  });
}

export default async function TeamMemberPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  const profileJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: member.name,
      jobTitle: member.title,
      image: member.image.startsWith('http')
        ? member.image
        : `${siteUrl}${member.image.startsWith('/') ? '' : '/'}${member.image}`,
      description: member.bio,
      worksFor: {
        '@type': 'Organization',
        name: 'Lexocrates',
        url: siteUrl,
      },
      url: `${siteUrl}/team/${member.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Leadership Team',
        item: `${siteUrl}/team`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: member.name,
        item: `${siteUrl}/team/${member.slug}`,
      },
    ],
  };

  return (
    <main className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 bg-primary text-white">
        <div className="container-balanced">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/team" className="hover:text-white transition-colors">
              Team
            </Link>
            <span>/</span>
            <span className="text-white/60">{member.name}</span>
          </div>

          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-3">
              Leadership Profile
            </p>
            <h1 className="font-montserrat text-3xl sm:text-5xl font-black leading-tight">
              {member.name}
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-white/80 font-medium">
              {member.title}
              {(member.degree || member.qualification) && (
                <span className="text-accent font-semibold ml-2">
                  ({member.degree || member.qualification})
                </span>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Profile Details */}
      <section className="py-14 sm:py-20">
        <div className="container-balanced">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Circular Portrait Card */}
            <div className="md:col-span-5 lg:col-span-4">
              <Card className="sticky top-28 bg-secondary/30 border border-black/5 rounded-3xl p-6 sm:p-8 text-center shadow-sm">
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden ring-4 ring-white shadow-lg mx-auto mb-6 shrink-0 bg-secondary">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 160px, 192px"
                    className="object-cover object-center"
                  />
                </div>

                <CardContent className="p-0 space-y-5">
                  <div>
                    <h3 className="font-opensans text-2xl font-bold text-primary">
                      {member.name}
                    </h3>
                    {(member.degree || member.qualification) && (
                      <p className="text-xs font-semibold text-foreground/60 mt-1">
                        {member.degree || member.qualification}
                      </p>
                    )}
                    <p className="text-accent font-extrabold uppercase tracking-widest text-xs mt-1.5">
                      {member.title}
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-accent text-primary font-montserrat font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-primary transition-colors shadow-sm"
                    >
                      <Calendar className="h-4 w-4" />
                      Book Consultation
                    </Link>

                    <Link
                      href="/team"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-6 rounded-full border border-black/10 text-foreground/80 font-montserrat font-bold text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back to Team
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Narrative & Details */}
            <div className="md:col-span-7 lg:col-span-8 space-y-10">
              <div>
                {member.tagline ? (
                  <h2 className="font-montserrat text-2xl sm:text-3xl font-black text-primary tracking-tight mb-6 leading-snug">
                    {member.tagline}
                  </h2>
                ) : (
                  <h2 className="font-lato text-3xl font-black text-primary tracking-tight mb-4">
                    About {member.name}
                  </h2>
                )}

                <div className="text-base sm:text-lg text-foreground/80 leading-relaxed space-y-4 font-medium">
                  <p>{member.bio}</p>
                </div>
              </div>

              {/* Note / Statement Section (e.g. for Ambika Shekhawat) */}
              {member.noteParagraphs && member.noteParagraphs.length > 0 && (
                <div className="pt-8 border-t border-black/10 space-y-6">
                  {member.noteHeading && (
                    <h3 className="font-montserrat text-2xl font-black text-primary tracking-tight">
                      {member.noteHeading}
                    </h3>
                  )}

                  <div className="p-7 sm:p-9 rounded-3xl bg-secondary/40 border border-black/5 text-foreground/85 space-y-5 leading-relaxed text-base sm:text-lg font-medium">
                    {member.noteParagraphs.map((para, idx) => (
                      <p key={idx} className="text-foreground/80">
                        {para}
                      </p>
                    ))}

                    <div className="pt-6 border-t border-black/10 space-y-1">
                      <p className="font-montserrat font-black text-xl text-primary">
                        {member.name}
                      </p>
                      <p className="text-xs font-extrabold uppercase tracking-widest text-accent">
                        {member.title}
                      </p>
                      {member.qualification && (
                        <p className="text-xs font-semibold text-foreground/60 pt-1">
                          {member.qualification}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Only show generic expertise if member does not have custom note */}
              {(!member.noteParagraphs || member.noteParagraphs.length === 0) &&
                member.expertise &&
                member.expertise.length > 0 && (
                  <div className="pt-6 border-t border-black/5">
                    <h3 className="font-roboto text-2xl font-bold text-primary tracking-tight mb-6">
                      Key Responsibilities &amp; Expertise
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {member.expertise.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3.5 p-4 bg-secondary/30 rounded-2xl border border-black/5"
                        >
                          <div className="mt-0.5 shrink-0">
                            <Check className="h-5 w-5 text-accent" />
                          </div>
                          <span className="text-sm font-medium text-foreground/80 leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
