
'use client';

import Link from 'next/link';
import { Mail, Headset, User, Linkedin, MapPin, Clock, Train, Bus, Car } from 'lucide-react';

export function ContactDetails() {
  const jaipurAddress = "B-1402 Mangalam The Grand Residency, Near Teoler School, Sirsi Road, Jaipur, Rajasthan, India. Pin 302041";
  const jaipurMapQuery = "B-1402 Mangalam The Grand Residency, Sirsi Road, Jaipur, Rajasthan, 302041";

  return (
    <div className="space-y-8">
      <Link href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(jaipurMapQuery)}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
          <div className="bg-accent/10 p-3 rounded-full flex-shrink-0">
              <MapPin className="h-6 w-6 text-accent" />
          </div>
          <div>
              <h3 className="text-lg font-bold text-primary group-hover:text-accent font-roboto">Address</h3>
              <p className="text-foreground/80 group-hover:text-accent font-lato">{jaipurAddress}</p>
          </div>
      </Link>
      <Link href="mailto:Support@lexocrates.com" className="flex items-start gap-4 group">
          <div className="bg-accent/10 p-3 rounded-full flex-shrink-0">
              <Headset className="h-6 w-6 text-accent" />
          </div>
          <div>
              <h3 className="text-lg font-bold text-primary group-hover:text-accent font-roboto">Support</h3>
              <p className="text-foreground/80 group-hover:text-accent font-lato">Support@lexocrates.com</p>
          </div>
      </Link>
       <Link href="mailto:Sales@Lexocrates.com" className="flex items-start gap-4 group">
          <div className="bg-accent/10 p-3 rounded-full flex-shrink-0">
              <Mail className="h-6 w-6 text-accent" />
          </div>
          <div>
              <h3 className="text-lg font-bold text-primary group-hover:text-accent font-roboto">Sales</h3>
              <p className="text-foreground/80 group-hover:text-accent font-lato">Sales@Lexocrates.com</p>
          </div>
      </Link>
       <Link href="mailto:HR@lexocrates.com" className="flex items-start gap-4 group">
          <div className="bg-accent/10 p-3 rounded-full flex-shrink-0">
              <User className="h-6 w-6 text-accent" />
          </div>
          <div>
              <h3 className="text-lg font-bold text-primary group-hover:text-accent font-roboto">HR</h3>
              <p className="text-foreground/80 group-hover:text-accent font-lato">HR@lexocrates.com</p>
          </div>
      </Link>
      <Link href="#" className="flex items-start gap-4 group">
          <div className="bg-accent/10 p-3 rounded-full flex-shrink-0">
              <Linkedin className="h-6 w-6 text-accent" />
          </div>
          <div>
              <h3 className="text-lg font-bold text-primary group-hover:text-accent font-roboto">LinkedIn</h3>
              <p className="text-foreground/80 group-hover:text-accent font-lato">Follow us on LinkedIn</p>
          </div>
      </Link>
      <div>
        <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-4 font-roboto">
          <div className="bg-accent/10 p-3 rounded-full flex-shrink-0"><Clock className="h-6 w-6 text-accent" /></div>
          Office Hours
        </h3>
        <div className="ml-0 sm:ml-16 text-foreground/80 space-y-2 font-lato">
            <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM IST</p>
            <p><strong>Saturday:</strong> 9:00 AM - 1:00 PM IST</p>
            <p><strong>Sunday:</strong> Closed</p>
        </div>
      </div>
      <div>
          <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-4 font-roboto">
            <div className="bg-accent/10 p-3 rounded-full flex-shrink-0"><Car className="h-6 w-6 text-accent" /></div>
            Getting Here
          </h3>
          <div className="ml-0 sm:ml-16 text-foreground/80 space-y-4 font-lato">
              <div className="flex items-start gap-3"><Train className="h-5 w-5 text-accent flex-shrink-0 mt-1 sm:mt-0" /> <strong>By Train:</strong> Jaipur Junction Railway Station (15 min drive)</div>
              <div className="flex items-start gap-3"><Bus className="h-5 w-5 text-accent flex-shrink-0 mt-1 sm:mt-0" /> <strong>By Bus:</strong> Sirsi Road Bus Stop (5 min walk)</div>
              <div className="flex items-start gap-3"><Car className="h-5 w-5 text-accent flex-shrink-0 mt-1 sm:mt-0" /> <strong>By Car:</strong> Parking available in building</div>
          </div>
      </div>
    </div>
  );
}
