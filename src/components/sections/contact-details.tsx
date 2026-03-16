
'use client';

import Link from 'next/link';
import { Mail, Headset, User, Linkedin, MapPin, Clock, Train, Bus, Car, ArrowRight } from 'lucide-react';

export function ContactDetails() {
  const jaipurAddress = "Floor 1, E-block, E-103, Ganpati Enclave, Sirsi Road, Jaipur, India. 302041";
  const jaipurMapQuery = "Floor 1, E-block, E-103, Ganpati Enclave, Sirsi Road, Jaipur, India. 302041";

  const departments = [
    { name: "Global Support", email: "Support@lexocrates.com", icon: Headset },
    { name: "Strategic Sales", email: "Sales@Lexocrates.com", icon: Mail },
    { name: "Careers & HR", email: "HR@lexocrates.com", icon: User }
  ];

  return (
    <div className="space-y-10">
      <div className="grid gap-6">
        {departments.map((dept, i) => (
          <Link 
            key={i} 
            href={`mailto:${dept.email}`} 
            className="flex items-center gap-6 p-6 bg-secondary/30 rounded-3xl border border-black/5 hover:bg-white hover:shadow-xl hover:border-accent/50 transition-all duration-500 group"
          >
            <div className="bg-accent/10 p-4 rounded-2xl group-hover:bg-accent transition-colors duration-500">
                <dept.icon className="h-7 w-7 text-accent group-hover:text-white transition-colors duration-500" />
            </div>
            <div className="flex-grow">
                <h3 className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-1">{dept.name}</h3>
                <p className="text-lg font-bold text-primary">{dept.email}</p>
            </div>
            <ArrowRight className="h-5 w-5 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500" />
          </Link>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-8 pt-6 border-t border-black/5">
        <div>
          <h4 className="flex items-center gap-3 text-sm font-black text-primary uppercase tracking-widest mb-6">
            <Clock className="h-5 w-5 text-accent" />
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

        <div>
            <h4 className="flex items-center gap-3 text-sm font-black text-primary uppercase tracking-widest mb-6">
              <Car className="h-5 w-5 text-accent" />
              Getting Here
            </h4>
            <div className="space-y-4 text-foreground/70 font-medium text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Train className="h-4 w-4 text-accent" />
                  </div>
                  <p>15 min from Jaipur Junction</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Bus className="h-4 w-4 text-accent" />
                  </div>
                  <p>5 min walk from Sirsi Stop</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="h-4 w-4 text-accent" />
                  </div>
                  <Link href="https://www.linkedin.com/company/lexocrates-legal-services-pvt-ltd/" className="hover:text-accent transition-colors">Follow Our Updates</Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
