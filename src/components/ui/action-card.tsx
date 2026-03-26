'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SlideIn } from '@/components/animations/slide-in';
import { Card } from '@/components/ui/card';

interface ActionCardProps {
  title: React.ReactNode;
  description: string;
  buttonText: string;
  buttonHref: string;
  className?: string;
}

export function ActionCard({ title, description, buttonText, buttonHref, className }: ActionCardProps) {
  return (
    <SlideIn direction="left" className="h-full">
        <Card className="bg-primary text-white border-none rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl h-full flex flex-col justify-center p-8 sm:p-12 lg:p-20 relative group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -mr-48 -mt-48 transition-all duration-700 group-hover:scale-110" />
            
            <div className="relative z-10">
                <h3 className="font-montserrat text-2xl sm:text-4xl font-black mb-6 tracking-tighter">
                    {title}
                </h3>
                <p className="text-base sm:text-xl text-white/60 font-medium leading-relaxed mb-10 max-w-xl">
                    {description}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 max-w-xs mx-auto sm:mx-0">
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-white hover:text-primary font-montserrat font-black text-xs uppercase tracking-[0.3em] px-8 sm:px-12 rounded-full shadow-2xl transition-all duration-500 hover:scale-105 active:scale-95">
                        <Link href={buttonHref} className="flex items-center gap-3">
                            {buttonText} <ArrowRight className="w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </Card>
    </SlideIn>
  );
}
