
import { User, UserRound } from 'lucide-react';

export function Welcome() {
  return (
    <section className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 w-80 sm:h-96 sm:w-96 justify-self-center bg-secondary flex items-center justify-center">
            <UserRound className="h-32 w-32 sm:h-48 sm:w-48 text-accent/80" />
          </div>
          <div>
            <p className="font-body font-bold text-accent uppercase tracking-wider">A Message from Our Founder</p>
            <h2 className="mt-4 font-headline text-3xl md:text-5xl font-bold text-primary leading-tight">
              A Commitment to Partnership and Excellence
            </h2>
            <div className="mt-6 space-y-4 text-foreground/80">
                <p className="italic text-base sm:text-lg">
                    As a public interest litigator, I have spent my career championing causes that shape communities and protect the rights of individuals. From challenging unlawful toll collections to advocating for fair water distribution, my work in the Supreme Court of India has been guided by the belief that the law must serve justice above all. Lexocrates Legal Services was founded on that same principle. In an increasingly interconnected world, legal professionals must focus on what they do best—strategic counsel and client advocacy—while trusting capable partners to handle the complex, time-intensive processes that run in the background. Our team is trained in US, UK, and Canadian legal systems, equipped with advanced legal technology, and committed to the highest standards of confidentiality and precision. Whether assisting a law firm in New York with litigation support, aiding a London corporate in contract management, or helping a Canadian practice with compliance documentation, our mission is clear: to be a seamless extension of your legal team. I invite you to explore how Lexocrates can bring value, efficiency, and integrity to your practice.
                </p>
                <p className="font-bold text-primary">— Yashvardhan Singh<br/>Founder & CEO, Lexocrates Legal Services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
