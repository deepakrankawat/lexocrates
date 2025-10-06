import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Cta() {
  return (
    <section className="bg-primary text-primary-foreground py-20 sm:py-28">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <h2 className="font-headline text-5xl font-bold">
          We Help You With Quality Legal Lawyer
        </h2>
        <p className="mt-4 max-w-2xl text-primary-foreground/80">
          Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie pellentesque urna libero velit porta. Velit pellentesque hac gravida pellentesque est semper. Duis lectus gravida ultricies eleifend in pharetra faucibus orci sem.
        </p>
        <Button asChild size="lg" variant="secondary" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="#contact">Get Started</Link>
        </Button>
      </div>
    </section>
  );
}
