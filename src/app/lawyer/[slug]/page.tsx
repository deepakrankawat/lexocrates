import { teamMembers } from '@/lib/team-data';
import { notFound } from 'next/navigation';
import { Check, Calendar, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default async function LawyerDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const awaitedParams = await params;
  const lawyer = teamMembers.find((member) => member.slug === awaitedParams.slug);

  if (!lawyer) {
    notFound();
  }

  return (
    <main className="bg-background">
      <section className="relative text-white pt-28 pb-16 sm:pt-36 sm:pb-20 bg-primary">
        <div className="container-balanced">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/team" className="hover:text-white transition-colors">
              Leadership
            </Link>
            <span>/</span>
            <span className="text-white/60">{lawyer.name}</span>
          </div>

          <div className="text-left max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-3">
              Leadership Profile
            </p>
            <h1 className="font-montserrat text-3xl sm:text-5xl font-black leading-tight">
              {lawyer.name}
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-white/80 font-medium">
              {lawyer.title}
              {(lawyer.degree || lawyer.qualification) && (
                <span className="text-accent font-semibold ml-2">
                  ({lawyer.degree || lawyer.qualification})
                </span>
              )}
            </p>
          </div>
        </div>
      </section>

      <div className="container-balanced">
        <section className="py-14 sm:py-20">
          <div className="grid md:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Simple Circular Portrait Card */}
            <div className="md:col-span-5 lg:col-span-4">
              <Card className="sticky top-28 bg-secondary/30 border border-black/5 rounded-3xl p-6 sm:p-8 text-center shadow-sm">
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden ring-4 ring-white shadow-lg mx-auto mb-6 shrink-0 bg-secondary">
                  <Image
                    src={lawyer.image}
                    alt={lawyer.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 160px, 192px"
                    className="object-cover object-center"
                  />
                </div>

                <CardContent className="p-0 space-y-5">
                  <div>
                    <h3 className="font-opensans text-2xl font-bold text-primary">
                      {lawyer.name}
                    </h3>
                    {(lawyer.degree || lawyer.qualification) && (
                      <p className="text-xs font-semibold text-foreground/60 mt-1">
                        {lawyer.degree || lawyer.qualification}
                      </p>
                    )}
                    <p className="text-accent font-extrabold uppercase tracking-widest text-xs mt-1.5">
                      {lawyer.title}
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
                {lawyer.tagline ? (
                  <h2 className="font-montserrat text-2xl sm:text-3xl font-black text-primary tracking-tight mb-6 leading-snug">
                    {lawyer.tagline}
                  </h2>
                ) : (
                  <h2 className="font-lato text-3xl font-black text-primary tracking-tight mb-4">
                    About {lawyer.name}
                  </h2>
                )}

                <div className="text-base sm:text-lg text-foreground/80 leading-relaxed space-y-4 font-medium">
                  <p>{lawyer.bio}</p>
                  {!lawyer.noteParagraphs && (
                    <p>
                      {lawyer.name} works closely with US, UK, and Canadian law firms and corporate legal departments, delivering reliable legal process support under strict institutional security and ethical controls.
                    </p>
                  )}
                </div>
              </div>

              {/* Note / Statement Section (e.g. for Ambika Shekhawat) */}
              {lawyer.noteParagraphs && lawyer.noteParagraphs.length > 0 && (
                <div className="pt-8 border-t border-black/10 space-y-6">
                  {lawyer.noteHeading && (
                    <h3 className="font-montserrat text-2xl font-black text-primary tracking-tight">
                      {lawyer.noteHeading}
                    </h3>
                  )}

                  <div className="p-7 sm:p-9 rounded-3xl bg-secondary/40 border border-black/5 text-foreground/85 space-y-5 leading-relaxed text-base sm:text-lg font-medium">
                    {lawyer.noteParagraphs.map((para, idx) => (
                      <p key={idx} className="text-foreground/80">
                        {para}
                      </p>
                    ))}

                    <div className="pt-6 border-t border-black/10 space-y-1">
                      <p className="font-montserrat font-black text-xl text-primary">
                        {lawyer.name}
                      </p>
                      <p className="text-xs font-extrabold uppercase tracking-widest text-accent">
                        {lawyer.title}
                      </p>
                      {lawyer.noteSignoffOrg ? (
                        <p className="text-xs font-semibold text-foreground/60 pt-1">
                          {lawyer.noteSignoffOrg}
                        </p>
                      ) : lawyer.qualification ? (
                        <p className="text-xs font-semibold text-foreground/60 pt-1">
                          {lawyer.qualification}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              )}

              {/* Only show generic expertise if member does not have custom note */}
              {(!lawyer.noteParagraphs || lawyer.noteParagraphs.length === 0) &&
                lawyer.expertise &&
                lawyer.expertise.length > 0 && (
                  <div className="pt-6 border-t border-black/5">
                    <h3 className="font-roboto text-2xl font-bold text-primary tracking-tight mb-6">
                      Key Responsibilities &amp; Expertise
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {lawyer.expertise.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3.5 p-4 bg-secondary/30 rounded-2xl border border-black/5"
                        >
                          <div className="mt-0.5 shrink-0">
                            <Check className="h-5 w-5 text-accent" />
                          </div>
                          <span className="text-sm font-medium text-foreground/80 leading-snug">
                            {item}
                          </span>
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
