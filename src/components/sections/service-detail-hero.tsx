import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Database,
  FileText,
  Gavel,
  LockKeyhole,
  Search,
  ShieldCheck,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Service } from '@/lib/services-data';
import { Button } from '@/components/ui/button';

const iconMap: Record<string, LucideIcon> = {
  Search,
  Gavel,
  FileText,
  ShieldCheck,
  Users,
  Database,
};

export function ServiceDetailHero({ service }: { service: Service }) {
  const heroImage = PlaceHolderImages.find(
    (image) => image.id === 'hero-services'
  );
  const ServiceIcon = iconMap[service.iconName] || Search;

  return (
    <section className="relative flex min-h-[72vh] items-center overflow-hidden bg-primary pb-20 pt-28 text-white sm:pb-24 sm:pt-36">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt=""
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(184,134,11,0.22),transparent_36%)]" />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container-balanced relative z-10">
        <Link
          href="/services"
          className="mb-10 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.24em] text-white/55 transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          All services
        </Link>

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.42fr] lg:gap-20">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur-xl">
              <ServiceIcon className="h-4 w-4 text-accent" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">
                Detailed service architecture
              </span>
            </div>
            <h1 className="max-w-5xl font-montserrat text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {service.name}
            </h1>
            <p className="mt-8 max-w-3xl border-l-2 border-accent/40 pl-6 text-base font-medium leading-relaxed text-white/70 sm:text-xl">
              {service.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="xl"
                className="rounded-full bg-accent px-9 font-montserrat text-xs font-black uppercase tracking-[0.2em] text-primary hover:bg-white"
              >
                <Link href="/contact#lpo-enquiry-form">
                  Scope this service <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="rounded-full border-white/15 bg-white/5 px-9 font-montserrat text-xs font-black uppercase tracking-[0.2em] text-white hover:bg-white hover:text-primary"
              >
                <Link href="#service-process">See our process</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.055] p-7 backdrop-blur-xl sm:p-9">
            <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/15">
              <ServiceIcon className="h-8 w-8 text-accent" />
            </div>
            <div className="space-y-5">
              {[
                {
                  icon: Workflow,
                  label: 'Process-led delivery',
                },
                {
                  icon: BadgeCheck,
                  label: 'Human quality control',
                },
                {
                  icon: LockKeyhole,
                  label: 'Security by design',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0"
                >
                  <item.icon className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm font-bold text-white/80">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
