'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SlideIn } from '../animations/slide-in';
import { teamMembers } from '@/lib/team-data';
import { User } from 'lucide-react';
import { useState } from 'react';

export function Team() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  return (
    <section id="team" className="bg-background text-foreground py-14 sm:py-24">
      <div className="container-balanced">
        <SlideIn className="text-center mb-16 max-w-4xl mx-auto" direction="up">
          <p className="font-lato font-black text-accent uppercase tracking-[0.3em] mb-4 text-xs sm:text-sm">
            LEADERSHIP TEAM
          </p>
          <h2 className="font-lato text-3xl sm:text-5xl lg:text-6xl font-black leading-tight text-primary mb-6 tracking-tight">
            The Team Leading Lexocrates
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-3xl mx-auto font-medium leading-relaxed">
            Our leadership team works closely with legal professionals, operations specialists, and technology
            experts to ensure every engagement reflects the quality, confidentiality, and consistency our clients
            expect from Lexocrates.
          </p>
        </SlideIn>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => {
            const hasError = imageErrors[member.slug];

            return (
              <Link
                key={member.slug}
                href={`/team/${member.slug}`}
                className="group relative flex flex-col items-center text-center overflow-hidden bg-secondary/30 hover:bg-white border border-black/5 hover:border-accent/40 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Circular Profile Image Container */}
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-white group-hover:ring-accent/40 shadow-md mb-6 shrink-0 bg-secondary transition-all duration-300">
                  {member.image && !hasError ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 144px, 160px"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      onError={() => setImageErrors((prev) => ({ ...prev, [member.slug]: true }))}
                      priority={member.slug === 'yashvardhan-singh'}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-accent/10">
                      <User className="h-16 w-16 text-accent" />
                    </div>
                  )}
                </div>

                {/* Member Details */}
                <h3 className="font-opensans text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300 mb-1">
                  {member.name}
                </h3>

                {(member.degree || member.qualification) && (
                  <p className="text-xs font-semibold text-foreground/60 tracking-wide mb-2.5">
                    {member.degree || member.qualification}
                  </p>
                )}

                <p className="text-accent font-extrabold uppercase tracking-widest text-xs mt-auto">
                  {member.title}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
