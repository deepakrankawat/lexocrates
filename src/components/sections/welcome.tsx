
import { User } from 'lucide-react';

export function Welcome() {
  return (
    <section className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 w-96 justify-self-center overflow-hidden bg-secondary flex items-center justify-center">
            <User className="h-48 w-48 text-accent/20" />
          </div>
          <div>
            <p className="font-body font-bold text-accent uppercase tracking-wider">A Message from Our Founder</p>
            <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold text-primary leading-tight">
              A Commitment to Partnership and Excellence
            </h2>
            <div className="mt-6 space-y-4 text-foreground/80">
                <p className="italic text-lg">
                    “Welcome to Lexocrates. We built this firm on the principle of partnership—working as an extension of your team to achieve shared goals. Our commitment is to deliver excellence in every task, enabling you to thrive.”
                </p>
                <p className="font-bold text-primary">- Smilly Ilani, Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
