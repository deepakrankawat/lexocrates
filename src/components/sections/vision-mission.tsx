

import { Eye, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeIn } from '../animations/fade-in';

export function VisionMission() {
  return (
    <section className="bg-secondary/30 text-foreground py-12 sm:py-24 rounded-[2rem] sm:rounded-[3rem] my-12 sm:my-16">
      <div className="container-balanced">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="bg-background text-center p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-black/5">
              <CardHeader className="items-center pb-4">
                <div className="p-3 sm:p-4 bg-accent/10 text-accent rounded-2xl mb-3 sm:mb-4">
                  <Eye className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <p className="font-lato font-bold text-accent uppercase tracking-wider text-xs mb-2">OUR VISION</p>
                <CardTitle className="font-roboto text-xl sm:text-3xl font-bold text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 font-medium text-sm sm:text-base leading-relaxed">
                  To be a trusted global legal process outsourcing partner, recognised for delivering quality, innovation, and dependable legal support that empowers law firms and corporate legal departments to succeed.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background text-center p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-black/5">
              <CardHeader className="items-center pb-4">
                <div className="p-3 sm:p-4 bg-accent/10 text-accent rounded-2xl mb-3 sm:mb-4">
                  <Target className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <p className="font-lato font-bold text-accent uppercase tracking-wider text-xs mb-2">OUR MISSION</p>
                <CardTitle className="font-roboto text-xl sm:text-3xl font-bold text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 font-medium text-base leading-relaxed">
                  To help law firms and corporate legal departments strengthen their legal operations through reliable, high-quality legal process outsourcing solutions that enhance efficiency, ensure consistency, and enable them to focus on strategic legal work.
                </p>
              </CardContent>
            </Card>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
