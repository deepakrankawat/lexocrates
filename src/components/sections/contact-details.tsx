'use client';

import Link from 'next/link';
import { Mail, Headset, User, Linkedin, MapPin, Clock, Train, Bus, Car, ArrowRight } from 'lucide-react';

export function ContactDetails() {
  const departments = [
    { name: "Global Support", email: "Support@lexocrates.com", icon: Headset },
    { name: "Strategic Sales", email: "Sales@Lexocrates.com", icon: Mail },
    { name: "Careers & HR", email: "HR@lexocrates.com", icon: User }
  ];

  return (
    <div className="space-y-10 sm:space-y-12">
      <div className="grid gap-4 sm:gap-6">
        {departments.map((dept, i) => (
          <Link 
            key={i} 
            href={`mailto:${dept.email}`} 
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-6 sm:p-8 bg-secondary/30 rounded-3xl border border-black/5 hover:bg-white hover:shadow-xl hover:border-accent/50 transition-all duration-500 group"
          >
            <div className="bg-accent/10 p-4 rounded-2xl group-hover:bg-accent transition-colors duration-500 flex-shrink-0">
                <dept.icon className="h-6 w-6 sm:h-7 sm:w-7 text-accent group-hover:text-white transition-colors duration-500" />
            </div>
            <div className="flex-grow min-w-0">
                <h3 className="text-[9px] sm:text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-1">{dept.name}</h3>
                <p className="text-base sm:text-lg font-bold text-primary truncate sm:whitespace-normal">{dept.email}</p>
            </div>
            <ArrowRight className="h-5 w-5 text-accent hidden sm:block opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500" />
          </Link>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 pt-8 border-t border-black/5">
        <div className="text-center sm:text-left">
          <h4 className="flex items-center justify-center sm:justify-start gap-3 text-[11px] sm:text-xs font-black text-primary uppercase tracking-[0.2em] mb-6">
            <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
            Office Hours
          </h4>
          <div className="space-y-3 text-foreground/70 font-medium text-sm">
              <div className="flex justify-between border-b border-black/5 pb-2">
                <span>Mon - Fri</span>
                <span className="text-primary font-bold">9:00 - 18:00 IST</span>
              </div>
              <div className="flex justify-between border-b border-black/5 pb-2">
                <span>Saturday</span>
                <span className="text-primary font-bold">9:00 - 13:00 IST</span>
              </div>
              <div className="flex justify-between text-destructive/70">
                <span>Sunday</span>
                <span className="font-bold">Closed</span>
              </div>
          </div>
        </div>

        <div className="text-center sm:text-left">
            <h4 className="flex items-center justify-center sm:justify-start gap-3 text-[11px] sm:text-xs font-black text-primary uppercase tracking-[0.2em] mb-6">
              <Car className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
              Getting Here
            </h4>
            <div className="space-y-4 text-foreground/70 font-medium text-sm">
                <div className="flex items-center justify-center sm:justify-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Train className="h-4 w-4 text-accent" />
                  </div>
                  <p>15 min from Jaipur Junction</p>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Bus className="h-4 w-4 text-accent" />
                  </div>
                  <p>5 min walk from Sirsi Stop</p>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="h-4 w-4 text-accent" />
                  </div>
                  <Link href="https://www.linkedin.com/company/lexocrates-legal-services-pvt-ltd/" className="hover:text-accent transition-colors font-bold">Follow Our Updates</Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
