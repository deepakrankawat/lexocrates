'use client';

import React from 'react';
import { useWorkspace } from '@/lib/workspace-context';
import { Button } from '@/components/ui/button';
import { PackageCheck, ShieldCheck, Check, Sparkles, Clock, ArrowRight, Zap } from 'lucide-react';

export default function LexPacksPage() {
  const { lexPack, openNewProjectModal } = useWorkspace();

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-2">
          <PackageCheck className="w-4 h-4 text-accent" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">
            Monthly Legal Retainer &amp; Hours Pool
          </span>
        </div>
        <h1 className="font-montserrat text-2xl sm:text-3xl font-black text-primary">LexPacks Workspace Subscriptions</h1>
        <p className="text-xs text-slate-500 font-medium max-w-2xl mt-1">
          LexPacks give your law firm or corporate legal team a predictable monthly pool of dedicated lawyer and paralegal hours with priority SLA response.
        </p>
      </div>

      {/* Active LexPack Status Banner */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
            Current Active Subscription
          </span>
          <h2 className="font-montserrat text-2xl font-black text-primary">LexPack {lexPack.tier}</h2>
          <p className="text-sm font-bold text-accent">{lexPack.priceMonthly}</p>
          <p className="text-xs text-slate-400">Renews on {lexPack.renewalDate}</p>
        </div>

        <div className="space-y-2 md:border-l md:border-r border-slate-100 md:px-6">
          <div className="flex justify-between text-xs font-bold text-primary">
            <span>Remaining Hours Pool</span>
            <span className="text-accent font-black">{lexPack.remainingHours} / {lexPack.totalHours} hrs</span>
          </div>
          <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
            <div
              className="h-full bg-accent rounded-full transition-all duration-700"
              style={{ width: `${(lexPack.remainingHours / lexPack.totalHours) * 100}%` }}
            />
          </div>
          <p className="text-[11px] text-slate-500">
            12 hours consumed across active Contract Review &amp; Litigation Support matters this month.
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-center">
          <Button
            onClick={() => openNewProjectModal()}
            className="h-11 bg-primary hover:bg-primary/90 text-white font-montserrat font-black text-xs uppercase tracking-wider rounded-xl shadow-md"
          >
            Apply LexPack Hours to New Matter
          </Button>
        </div>
      </div>

      {/* LexPack Tier Comparison Grid - Matching PDF Page 3 */}
      <div>
        <h2 className="font-montserrat text-xl font-black text-primary mb-4">Choose or Upgrade Your LexPack Tier</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bronze */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <h3 className="font-montserrat text-xl font-black text-primary">LexPack Bronze</h3>
              <p className="text-3xl font-black text-primary">
                £800 <span className="text-xs text-slate-400 font-semibold">/ month</span>
              </p>
              <div className="p-2.5 bg-slate-50 rounded-xl text-xs font-bold text-accent">
                20 Dedicated Hours Pool
              </div>
              <ul className="space-y-2 text-xs text-slate-600 font-medium pt-2">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Contract Review &amp; Redlining</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Basic Case Law Research</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> 48-hour standard turnarounds</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Dedicated Account Manager</li>
              </ul>
            </div>

            <Button variant="outline" className="w-full h-11 rounded-xl font-bold text-xs">
              Choose Bronze
            </Button>
          </div>

          {/* Silver - Featured */}
          <div className="bg-gradient-to-b from-primary to-slate-900 text-white p-6 rounded-3xl shadow-xl relative flex flex-col justify-between space-y-6 border-2 border-accent">
            <div className="absolute -top-3 right-6 bg-accent text-accent-foreground text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-wider shadow-md">
              Most Popular / Active
            </div>

            <div className="space-y-3">
              <h3 className="font-montserrat text-xl font-black text-white">LexPack Silver</h3>
              <p className="text-3xl font-black text-accent">
                £1,850 <span className="text-xs text-white/60 font-semibold">/ month</span>
              </p>
              <div className="p-2.5 bg-white/10 rounded-xl text-xs font-bold text-accent">
                50 Dedicated Hours Pool
              </div>
              <ul className="space-y-2 text-xs text-white/80 font-medium pt-2">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> Full Contract Lifecycle Management</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> Multi-Jurisdiction Litigation Support</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> Priority 24-hour SLA turnaround</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> AI Legal Assistant &amp; Knowledge Vault</li>
              </ul>
            </div>

            <Button className="w-full h-11 bg-accent text-accent-foreground hover:bg-white hover:text-primary font-montserrat font-black text-xs uppercase tracking-wider rounded-xl shadow-lg">
              Active Tier
            </Button>
          </div>

          {/* Gold */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <h3 className="font-montserrat text-xl font-black text-primary">LexPack Gold</h3>
              <p className="text-2xl font-black text-primary">Custom Pricing</p>
              <div className="p-2.5 bg-slate-50 rounded-xl text-xs font-bold text-accent">
                100+ Hours &amp; Dedicated Pod
              </div>
              <ul className="space-y-2 text-xs text-slate-600 font-medium pt-2">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Dedicated Legal Associate Team</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Custom eDiscovery &amp; Document Review</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Same-day priority turnarounds</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Direct API &amp; Mattermost integration</li>
              </ul>
            </div>

            <Button variant="outline" className="w-full h-11 rounded-xl font-bold text-xs">
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
