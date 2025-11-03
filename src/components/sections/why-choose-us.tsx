
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
        <section className="bg-white text-foreground py-20 sm:py-28 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <SlideIn direction="right">
                        <div className="flex flex-col">
                            <p className="font-lato font-bold text-accent uppercase tracking-wider">Why Choose Lexocrates</p>
                            <h2 className="mt-4 font-lato text-4xl md:text-5xl font-bold text-primary leading-tight">
                                Experience the Lexocrates Advantage
                            </h2>
                            <p className="mt-6 text-foreground/80">
                                When you partner with Lexocrates, you gain a dedicated team committed to enhancing your legal operations. We combine specialized expertise with advanced technology to deliver unparalleled efficiency, accuracy, and value.
                            </p>
                        </div>
                    </SlideIn>
                    <StaggerFadeIn className="grid sm:grid-cols-2 gap-8">
                        {features.map((feature) => (
                            <div key={feature.title} className="flex flex-col gap-4">
                                <feature.icon className="h-10 w-10 text-accent" />
                                <h3 className="font-roboto text-2xl font-medium text-primary">{feature.title}</h3>
                                <p className="text-foreground/80">{feature.description}</p>
                            </div>
                        ))}
                    </StaggerFadeIn>
                </div>
            </div>
        </section>
    )
}
