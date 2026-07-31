'use client';

import React from 'react';
import { useWorkspace } from '@/lib/workspace-context';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  FileSearch,
  FileSignature,
  FileCheck2,
  Gavel,
  FolderOpen,
  UserCheck,
  Plus,
  ArrowRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileText,
  MessageSquare,
  Upload,
  PackageCheck,
  ShieldCheck,
  Users,
  Calendar,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

const SERVICE_CARDS = [
  { id: 'Legal Research', title: 'Legal Research', icon: FileSearch, desc: 'Multi-jurisdictional legal memos & statutory research' },
  { id: 'Contract Drafting', title: 'Contract Drafting', icon: FileSignature, desc: 'Tailored MSAs, NDAs, SaaS terms & commercial agreements' },
  { id: 'Contract Review', title: 'Contract Review', icon: FileCheck2, desc: 'Redlining, risk matrix audit & clause analysis' },
  { id: 'Litigation Support', title: 'Litigation Support', icon: Gavel, desc: 'Trial prep, deposition digests, motion research' },
  { id: 'Document Review', title: 'Document Review', icon: FolderOpen, desc: 'eDiscovery, responsiveness classification & privilege logs' },
  { id: 'Virtual Legal Assistant', title: 'Virtual Legal Assistant', icon: UserCheck, desc: 'Dedicated Paralegal & Legal Assistant support' },
];

export default function DashboardHomePage() {
  const { user, matters, lexPack, openNewProjectModal } = useWorkspace();

  const activeMattersCount = matters.filter((m) => m.status === 'In Progress' || m.status === 'In Review').length;
  const awaitingApprovalCount = matters.filter((m) => m.status === 'Awaiting Approval' || m.status === 'Waiting For Documents').length;

  return (
    <div className="space-y-8 pb-12">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-primary via-primary/95 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 opacity-10 pointer-events-none">
          <Sparkles size={240} />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 mb-3">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">
                Customer Experience Layer Active
              </span>
            </div>
            <h1 className="font-montserrat text-2xl sm:text-4xl font-black text-white tracking-tight">
              Good Morning, {user.name || 'John'}
            </h1>
            <p className="text-sm text-white/80 font-medium mt-1 max-w-2xl">
              Welcome to your <span className="text-accent font-bold">Lexocrates Workspace</span> — GitHub for legal work. All active matters, documents, redlines, and communications in one place.
            </p>
          </div>

          <Button
            onClick={() => openNewProjectModal()}
            size="lg"
            className="h-13 bg-accent text-accent-foreground hover:bg-white hover:text-primary font-montserrat font-black text-xs uppercase tracking-widest px-8 rounded-2xl shadow-xl shadow-accent/20 transition-all hover:scale-105 flex-shrink-0"
          >
            <Plus className="w-5 h-5 mr-2 stroke-[3]" />
            Start New Matter
          </Button>
        </div>
      </div>

      {/* Metrics Bar - Matching PDF Page 6 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-montserrat font-black text-primary">{activeMattersCount}</p>
            <p className="text-xs font-semibold text-slate-500">Active Matters</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-montserrat font-black text-primary">{awaitingApprovalCount}</p>
            <p className="text-xs font-semibold text-slate-500">Awaiting Action</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-montserrat font-black text-primary">1</p>
            <p className="text-xs font-semibold text-slate-500">Invoice Due (£1,850)</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-amber-50 text-accent rounded-xl">
            <PackageCheck className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-montserrat font-black text-primary">{lexPack.tier}</p>
            <p className="text-xs font-semibold text-accent font-bold">{lexPack.remainingHours} Hours Remaining</p>
          </div>
        </div>
      </div>

      {/* Quick Action Grid: "What would you like to do today?" - Matching PDF Page 2 */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-montserrat text-xl font-black text-primary">What would you like to do today?</h2>
            <p className="text-xs text-slate-500 font-medium">Select a service card to launch a new legal matter immediately.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICE_CARDS.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                onClick={() => openNewProjectModal(srv.id)}
                className="bg-white hover:bg-slate-50/80 p-5 rounded-2xl border border-slate-200 hover:border-accent/50 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-3 rounded-xl bg-primary/5 group-hover:bg-accent group-hover:text-accent-foreground text-accent transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-full group-hover:bg-accent group-hover:text-white transition-colors">
                      Start Project
                    </span>
                  </div>
                  <h3 className="font-montserrat font-bold text-base text-primary mb-1 group-hover:text-accent transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-primary group-hover:text-accent">
                  <span>Launch Matter</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-accent" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Matters Section - Matching PDF Page 4 & 6 */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-montserrat text-xl font-black text-primary">Active Matters</h2>
            <p className="text-xs text-slate-500 font-medium">Real-time status, progress tracking, and team collaboration.</p>
          </div>
          <Link
            href="/dashboard/projects"
            className="text-xs font-bold text-accent hover:underline flex items-center gap-1"
          >
            View All Matters ({matters.length}) <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="space-y-4">
          {matters.map((matter) => (
            <div
              key={matter.id}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[11px] font-black text-accent uppercase tracking-wider bg-accent/10 px-2.5 py-0.5 rounded-md">
                      {matter.matterId}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">• {matter.serviceType}</span>
                    <span className="text-xs text-slate-400 font-semibold">• {matter.jurisdiction}</span>
                  </div>
                  <h3 className="font-montserrat font-bold text-lg text-primary">{matter.title}</h3>
                </div>

                {/* Status Badge */}
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold ${
                      matter.status === 'In Progress'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : matter.status === 'Waiting For Documents'
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : matter.status === 'Awaiting Approval'
                        ? 'bg-purple-50 text-purple-700 border border-purple-200'
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        matter.status === 'In Progress' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
                      }`}
                    />
                    {matter.status}
                  </span>
                </div>
              </div>

              {/* Progress & Details Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Progress Bar - Matching PDF Page 4 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold text-primary">
                    <span>Progress</span>
                    <span className="text-accent font-black">{matter.progress}%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-700"
                      style={{ width: `${matter.progress}%` }}
                    />
                  </div>
                </div>

                {/* Assigned Team */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2 overflow-hidden">
                    {matter.assignedTeam.map((member, i) => (
                      <img
                        key={i}
                        src={member.avatar}
                        alt={member.name}
                        className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                        title={`${member.name} (${member.role})`}
                      />
                    ))}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary block">Assigned Team</span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      {matter.assignedTeam.map((m) => m.name.split(' ')[0]).join(', ')}
                    </span>
                  </div>
                </div>

                {/* Deadline & Quick Links */}
                <div className="flex items-center justify-between md:justify-end gap-4 text-xs font-semibold text-slate-600">
                  <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span>Deadline: <strong className="text-primary">{matter.deadline}</strong></span>
                  </div>

                  <Link
                    href={`/dashboard/projects`}
                    className="h-9 px-4 bg-primary text-white hover:bg-primary/90 rounded-xl font-bold flex items-center justify-center transition-colors"
                  >
                    View Workspace
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
