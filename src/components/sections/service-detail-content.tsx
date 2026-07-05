import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Database,
  FileCheck2,
  FileText,
  Gavel,
  Gauge,
  LockKeyhole,
  PackageCheck,
  Search,
  ShieldCheck,
  Target,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
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

export function ServiceDetailContent({ service }: { service: Service }) {
  const ServiceIcon = iconMap[service.iconName] || Search;

  return (
    <div className="bg-background text-foreground">
      <section className="py-20 sm:py-28">
        <div className="container-balanced">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.7fr] lg:gap-20">
            <div>
              <p className="mb-4 text-[10px] font-black uppercase tracking-[0.28em] text-accent">
                What this service covers
              </p>
              <h2 className="max-w-3xl font-montserrat text-3xl font-black leading-tight tracking-tight text-primary sm:text-5xl">
                Structured execution with legal judgment kept in the right
                hands
              </h2>
              <p className="mt-8 max-w-4xl text-base font-medium leading-8 text-foreground/65 sm:text-lg">
                {service.longDescription}
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {service.keyAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-start gap-3 rounded-2xl border border-black/5 bg-secondary/25 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-sm font-bold leading-relaxed text-primary/80">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-[2.5rem] bg-primary p-8 text-white sm:p-10">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15">
                <Target className="h-7 w-7 text-accent" />
              </div>
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.26em] text-accent">
                Best suited for
              </p>
              <h3 className="font-montserrat text-2xl font-black">
                When this model creates the most value
              </h3>
              <ul className="mt-8 space-y-5">
                {service.bestFor.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="text-sm font-medium leading-relaxed text-white/70">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section
        id="service-process"
        className="relative overflow-hidden bg-primary py-20 text-white sm:py-28"
      >
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="container-balanced relative">
          <div className="mx-auto mb-14 max-w-4xl text-center sm:mb-20">
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-accent">
              End-to-end workflow
            </p>
            <h2 className="font-montserrat text-3xl font-black tracking-tight sm:text-5xl">
              How {service.name} works
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-relaxed text-white/60 sm:text-lg">
              Every engagement begins with explicit scope, access, quality,
              escalation, and attorney-supervision rules.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {service.process.map((step, index) => (
              <article
                key={step.title}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 transition-colors hover:bg-white/[0.075] sm:p-9"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-montserrat text-4xl font-black text-accent/30">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <Workflow className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-montserrat text-xl font-black text-white sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-7 text-white/60 sm:text-base">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-balanced">
          <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <div>
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                <PackageCheck className="h-7 w-7 text-accent" />
              </div>
              <p className="mb-4 text-[10px] font-black uppercase tracking-[0.28em] text-accent">
                Tangible outputs
              </p>
              <h2 className="font-montserrat text-3xl font-black tracking-tight text-primary sm:text-4xl">
                Typical deliverables
              </h2>
              <p className="mt-5 text-base font-medium leading-relaxed text-foreground/60">
                The exact package is configured around your matter, systems,
                templates, and attorney-review model.
              </p>
              <ul className="mt-8 space-y-4">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-black/5 pb-4"
                  >
                    <FileCheck2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-sm font-bold leading-relaxed text-primary/75">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-[10px] font-black uppercase tracking-[0.28em] text-accent">
                Business impact
              </p>
              <h2 className="font-montserrat text-3xl font-black tracking-tight text-primary sm:text-4xl">
                What your team gains
              </h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {service.benefits.map((benefit, index) => (
                  <article
                    key={benefit.title}
                    className="rounded-[2rem] border border-black/5 bg-secondary/25 p-7 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                  >
                    <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                      {index % 2 === 0 ? (
                        <Gauge className="h-5 w-5 text-accent" />
                      ) : (
                        <BadgeCheck className="h-5 w-5 text-accent" />
                      )}
                    </div>
                    <h3 className="font-montserrat text-lg font-black text-primary">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-sm font-medium leading-7 text-foreground/60">
                      {benefit.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/25 py-20 sm:py-28">
        <div className="container-balanced">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-accent">
              Quality and defensibility
            </p>
            <h2 className="font-montserrat text-3xl font-black tracking-tight text-primary sm:text-5xl">
              How work is checked before it reaches you
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {service.qualityControls.map((control) => (
              <div
                key={control}
                className="flex items-start gap-4 rounded-2xl border border-black/5 bg-background p-6"
              >
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-bold leading-relaxed text-primary/75">
                  {control}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-balanced">
          <div className="overflow-hidden rounded-[2.5rem] bg-primary text-white sm:rounded-[3.5rem]">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
              <div className="relative border-b border-white/10 p-8 sm:p-12 lg:border-b-0 lg:border-r">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/15">
                  <LockKeyhole className="h-8 w-8 text-accent" />
                </div>
                <p className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-accent">
                  Security and confidentiality
                </p>
                <h2 className="font-montserrat text-3xl font-black tracking-tight sm:text-4xl">
                  Sensitive legal work stays controlled
                </h2>
                <p className="mt-6 text-sm font-medium leading-7 text-white/60 sm:text-base">
                  {service.securitySummary}
                </p>
              </div>

              <div className="grid gap-px bg-white/10 sm:grid-cols-2">
                {service.securityControls.map((control) => (
                  <article
                    key={control.title}
                    className="bg-primary p-8 sm:p-10"
                  >
                    <ShieldCheck className="mb-6 h-6 w-6 text-accent" />
                    <h3 className="font-montserrat text-lg font-black text-white">
                      {control.title}
                    </h3>
                    <p className="mt-3 text-sm font-medium leading-7 text-white/55">
                      {control.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="container-balanced">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-accent">
              Flexible delivery model
            </p>
            <h2 className="font-montserrat text-3xl font-black tracking-tight text-primary sm:text-5xl">
              Choose the engagement structure that fits
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {service.engagementModels.map((model, index) => (
              <article
                key={model.title}
                className="rounded-[2rem] border border-black/5 bg-secondary/25 p-8"
              >
                <div className="mb-7 flex items-center justify-between">
                  <BriefcaseBusiness className="h-6 w-6 text-accent" />
                  <span className="font-montserrat text-3xl font-black text-accent/20">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-montserrat text-xl font-black text-primary">
                  {model.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-7 text-foreground/60">
                  {model.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-[2.5rem] border border-black/5 bg-secondary/30 p-8 text-center sm:p-12">
            <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
              <ServiceIcon className="h-7 w-7 text-accent" />
            </div>
            <h2 className="font-montserrat text-3xl font-black tracking-tight text-primary sm:text-4xl">
              Let&apos;s scope a safe starting point
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-foreground/60">
              Tell us the matter type, jurisdiction, volume, deadline, systems,
              and supervision requirements. We&apos;ll recommend a pilot or
              delivery model without asking for confidential documents at the
              initial stage.
            </p>
            <Button
              asChild
              size="xl"
              className="mt-8 w-full rounded-full bg-primary px-5 font-montserrat text-[10px] font-black uppercase tracking-[0.12em] text-white hover:bg-accent sm:w-auto sm:px-10 sm:text-xs sm:tracking-[0.2em]"
            >
              <Link href="/contact#lpo-enquiry-form">
                Request a scoped consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
