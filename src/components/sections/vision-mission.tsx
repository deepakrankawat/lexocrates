
import { Eye, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeIn } from '../animations/fade-in';

export function VisionMission() {
  return (
    <section className="bg-secondary text-foreground py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-background text-center">
              <CardHeader className="items-center">
                <div className="p-4 bg-accent/10 text-accent rounded-full mb-4">
                  <Eye className="h-8 w-8" />
                </div>
                <CardTitle className="font-roboto text-3xl font-medium text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  To be the world&apos;s leading legal outsourcing partner, recognized for our unwavering commitment to quality, innovation, and client success.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background text-center">
              <CardHeader className="items-center">
                <div className="p-4 bg-accent/10 text-accent rounded-full mb-4">
                  <Target className="h-8 w-8" />
                </div>
                <CardTitle className="font-roboto text-3xl font-medium text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                To empower our clients by providing superior legal support services that enhance efficiency, reduce costs, and allow them to focus on their core strategic objectives.
                </p>
              </CardContent>
            </Card>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
