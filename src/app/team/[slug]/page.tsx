import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { teamMembers } from '@/lib/team-data';
import { buildMeta } from '@/lib/seo';
import Link from 'next/link';

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
    title: `${member.name} | Lexocrates Leadership`,
    description: `${member.name}, ${member.title} at Lexocrates.`,
    canonical: `${siteUrl}/team/${member.slug}`,
  });
}

export default async function TeamMemberPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  return (
    <main className="bg-background text-foreground">
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 bg-primary text-white">
        <div className="mx-auto max-w-5xl px-6 sm:px-12">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-accent mb-4">Leadership Profile</p>
          <h1 className="font-montserrat text-4xl sm:text-5xl font-black leading-tight">{member.name}</h1>
          <p className="mt-4 text-lg text-white/80">{member.title}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent text-primary font-bold text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-primary transition-colors"
            >
              Book a consultation
            </Link>
            <Link
              href="/team"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/30 text-white font-bold text-sm uppercase tracking-[0.2em] hover:bg-white/10 transition-colors"
            >
              Back to team
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-12 space-y-8 text-foreground/80">
          <p>
            {member.name} leads Lexocrates with a focus on operational excellence and client trust. This profile page
            exists to give search engines and clients a canonical, crawlable source for leadership details while we
            expand full biographies and media assets.
          </p>
          <p>
            For speaking engagements, media inquiries, or partnership discussions, reach out through our contact page or
            call our front desk. We typically respond within one business day.
          </p>
        </div>
      </section>
    </main>
  );
}
