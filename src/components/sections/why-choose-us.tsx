import { ShieldCheck, Scale, Users, Award } from "lucide-react";
import { StaggerFadeIn } from "../animations/stagger-fade-in";
import { SlideIn } from "../animations/slide-in";

const features = [
    {
        icon: ShieldCheck,
        title: 'Confidentiality & Security',
        description: 'We adhere to the strictest data security protocols to ensure your information is always protected.'
    },
    {
        icon: Scale,
        title: 'Expert Legal Professionals',
        description: 'Our team consists of qualified legal experts with experience across diverse jurisdictions and industries.'
    },
    {
        icon: Users,
        title: 'Client-Centric Model',
        description: 'We tailor our solutions to your specific needs, integrating seamlessly with your existing workflows.'
    },
    {
        icon: Award,
        title: 'Commitment to Quality',
        description: 'Our rigorous quality assurance processes guarantee that all deliverables meet the highest standards.'
    }
]

export function WhyChooseUs() {
    return (
        <section className="bg-white text-foreground py-16 sm:py-24 overflow-hidden">
            <div className="mx-auto w-full px-5 sm:px-10 lg:px-20 max-w-[1400px] fhd:max-w-[1600px] qhd:max-w-[1800px]">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <SlideIn direction="right" className="text-center lg:text-left">
                        <div className="flex flex-col">
                            <p className="font-lato font-bold text-accent uppercase tracking-wider text-sm">Why Choose Lexocrates</p>
                            <h2 className="mt-4 font-lato text-3xl sm:text-4xl lg:text-5xl font-black text-primary leading-tight tracking-tight">
                                Experience the Lexocrates Advantage
                            </h2>
                            <p className="mt-6 text-base sm:text-lg text-foreground/80 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                                When you partner with Lexocrates, you gain a dedicated team committed to enhancing your legal operations. We combine specialized expertise with advanced technology to deliver unparalleled efficiency, accuracy, and value.
                            </p>
                        </div>
                    </SlideIn>
                    <StaggerFadeIn className="grid sm:grid-cols-2 gap-8 lg:gap-10">
                        {features.map((feature) => (
                            <div key={feature.title} className="flex flex-col gap-4 text-center sm:text-left">
                                <div className="mx-auto sm:mx-0 p-3 bg-accent/5 w-fit rounded-xl">
                                  <feature.icon className="h-8 w-8 sm:h-10 sm:w-10 text-accent" />
                                </div>
                                <h3 className="font-roboto text-xl sm:text-2xl font-black text-primary tracking-tight">{feature.title}</h3>
                                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed font-medium">{feature.description}</p>
                            </div>
                        ))}
                    </StaggerFadeIn>
                </div>
            </div>
        </section>
    )
}