'use client';

import React from 'react';
import { useWorkspace } from '@/lib/workspace-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User, Building, Globe, Mail, ShieldCheck } from 'lucide-react';

export default function ProfilePage() {
  const { user } = useWorkspace();

  return (
    <div className="space-y-6 pb-12 max-w-4xl mx-auto">
      <div>
        <h1 className="font-montserrat text-2xl sm:text-3xl font-black text-primary">Client Profile &amp; Firm Settings</h1>
        <p className="text-xs text-slate-500 font-medium">Manage your organizational profile and notification preferences.</p>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
          <div className="w-16 h-16 bg-primary text-accent font-montserrat font-black text-xl rounded-2xl flex items-center justify-center shadow-lg">
            {user.name ? user.name.slice(0, 2).toUpperCase() : 'JV'}
          </div>
          <div>
            <h2 className="font-montserrat text-xl font-black text-primary">{user.name || 'Johnathan Vance'}</h2>
            <p className="text-xs font-bold text-accent">{user.role || 'Managing Partner'} • {user.company}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="space-y-1">
            <label className="font-bold text-slate-500 uppercase text-[10px]">Work Email</label>
            <Input value={user.email || 'j.vance@vancelaw.co.uk'} readOnly className="bg-slate-50 font-semibold" />
          </div>
          <div className="space-y-1">
            <label className="font-bold text-slate-500 uppercase text-[10px]">Organization / Firm</label>
            <Input value={user.company || 'Vance & Partners LLP'} readOnly className="bg-slate-50 font-semibold" />
          </div>
          <div className="space-y-1">
            <label className="font-bold text-slate-500 uppercase text-[10px]">Country / Primary Jurisdiction</label>
            <Input value={user.country || 'United Kingdom'} readOnly className="bg-slate-50 font-semibold" />
          </div>
          <div className="space-y-1">
            <label className="font-bold text-slate-500 uppercase text-[10px]">Portal Security Level</label>
            <Input value="ISO 27001 Encrypted Workspace" readOnly className="bg-slate-50 font-semibold text-emerald-700" />
          </div>
        </div>
      </div>
    </div>
  );
}
