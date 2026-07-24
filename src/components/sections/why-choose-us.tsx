import { ShieldCheck, Scale, Users, Award, Zap, Globe2 } from "lucide-react";
import { StaggerFadeIn } from "../animations/stagger-fade-in";
import { SlideIn } from "../animations/slide-in";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
  {
    icon: Scale,
    title: 'Experienced Legal Professionals',
    description: 'Every engagement is staffed by people who bring real legal knowledge and judgment to the work — not just process execution.'
  },
  {
    icon: Award,
    title: 'Quality Built Into the Workflow',
    description: 'Independent review is a standard step in every matter, not an afterthought — so issues get caught before they reach you.'
  },
  {
    icon: ShieldCheck,
    title: 'Confidentiality as a Baseline',
    description: "Every matter is handled under strict confidentiality and secure processes. This isn't a differentiator for us; it's the minimum bar."
  },
  {
    icon: Users,
    title: 'Engagement Models That Flex with You',
    description: 'Project-based, ongoing, or somewhere in between — our setup adapts to how you actually need to work, not a fixed package.'
  },
  {
    icon: Zap,
    title: 'Capacity That Scales Without Compromise',
    description: 'Take on more volume without a corresponding drop-in turnaround time or consistency.'
  },
  {
    icon: Globe2,
    title: 'Cross-Border Fluency',
    description: 'Jurisdiction-aware support across Canada, the UK, and the USA — built by professionals who understand that the details differ by market, not just the time zones.'
  }
];

export function WhyChooseUs() {
  return (
    <section className="bg-white text-foreground py-16 sm:py-24 overflow-hidden">
      <div className="container-balanced">
        <div className="flex flex-col mb-12 text-center lg:text-left">
          <SlideIn direction="right">
            <p className="font-lato font-bold text-accent uppercase tracking-wider text-sm">
              WHY CHOOSE LEXOCRATES
            </p>
            <h2 className="mt-4 font-lato text-3xl sm:text-4xl lg:text-5xl font-black text-primary leading-tight tracking-tight">
              What Working with Us Actually Looks Like
            </h2>
            <p className="mt-6 text-base sm:text-lg text-foreground/80 leading-relaxed font-medium max-w-3xl">
              We combine legal expertise with structured process to deliver support that&apos;s reliable enough to build on. Here&apos;s what that means in practice.
            </p>
          </SlideIn>
        </div>

        <StaggerFadeIn className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-12">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-4 text-center sm:text-left border-l-2 border-accent/30 pl-4">
              <div className="mx-auto sm:mx-0 p-3 bg-accent/5 w-fit rounded-xl">
                <feature.icon className="h-8 w-8 sm:h-10 sm:w-10 text-accent" />
              </div>
              <h3 className="font-roboto text-xl font-black text-primary tracking-tight">{feature.title}</h3>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed font-medium">{feature.description}</p>
            </div>
          ))}
        </StaggerFadeIn>

        <div className="mt-8 text-center lg:text-left">
          <Button asChild size="xl" className="w-full sm:w-auto bg-primary text-white hover:bg-primary/95 font-montserrat font-black text-xs uppercase tracking-[0.2em] px-8 sm:px-10 rounded-full">
            <Link href="/contact">Partner with Lexocrates</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
