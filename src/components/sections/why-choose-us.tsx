import { ShieldCheck, Scale, Users, Award } from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: '99% Success Rate',
        description: 'Our track record speaks for itself. We consistently achieve favorable outcomes for our clients.'
    },
    {
        icon: Scale,
        title: 'Expert Legal Team',
        description: 'Our attorneys are recognized leaders in their fields, bringing a wealth of knowledge to every case.'
    },
    {
        icon: Users,
        title: 'Client-Focused Approach',
        description: 'We prioritize your needs and goals, offering personalized strategies and transparent communication.'
    },
    {
        icon: Award,
        title: 'Award-Winning Firm',
        description: 'We have been recognized by numerous prestigious organizations for our legal excellence.'
    }
]

export function WhyChooseUs() {
    return (
        <section className="bg-secondary text-foreground py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col">
                        <p className="font-body font-bold text-accent uppercase tracking-wider">Why Choose Us</p>
                        <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold text-primary leading-tight">
                            Experience The Northman Law Difference
                        </h2>
                        <p className="mt-6 text-foreground/80">
                            When you choose Northman Law, you're not just hiring an attorney; you're partnering with a dedicated team committed to your success. We combine legal expertise with a deep understanding of our clients' needs to deliver unparalleled service and results.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-8">
                        {features.map((feature) => (
                            <div key={feature.title} className="flex flex-col gap-4">
                                <feature.icon className="h-10 w-10 text-accent" />
                                <h3 className="font-headline text-2xl font-bold text-primary">{feature.title}</h3>
                                <p className="text-foreground/80">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
