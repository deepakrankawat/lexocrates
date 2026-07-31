'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { HelpCircle, Mail, Phone, ShieldCheck, MessageSquare } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="space-y-6 pb-12 max-w-4xl mx-auto">
      <div>
        <h1 className="font-montserrat text-2xl sm:text-3xl font-black text-primary">Client Workspace Support</h1>
        <p className="text-xs text-slate-500 font-medium">Dedicated support desk for law firms and corporate legal teams.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="p-3 bg-accent/10 text-accent rounded-xl w-fit">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="font-montserrat font-bold text-lg text-primary">Dedicated Account Lead</h3>
          <p className="text-xs text-slate-500 font-medium">Sarah Jenkins, Senior Associate</p>
          <p className="text-xs font-bold text-accent">s.jenkins@lexocrates.com</p>
          <Button variant="outline" className="w-full rounded-xl text-xs font-bold">Email Account Manager</Button>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="p-3 bg-primary/10 text-primary rounded-xl w-fit">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-montserrat font-bold text-lg text-primary">24/7 Global Sync Desk</h3>
          <p className="text-xs text-slate-500 font-medium">Overnight turnaround support for US, UK &amp; Canadian law firms.</p>
          <p className="text-xs font-bold text-primary">Support Desk: +1 (800) 539-6272</p>
          <Button className="w-full bg-primary text-white rounded-xl text-xs font-bold">Call Support Desk</Button>
        </div>
      </div>
    </div>
  );
}
