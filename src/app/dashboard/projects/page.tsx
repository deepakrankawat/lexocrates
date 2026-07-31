'use client';

import React, { useState } from 'react';
import { useWorkspace, Matter } from '@/lib/workspace-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Briefcase,
  Search,
  Plus,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileText,
  MessageSquare,
  Upload,
  User,
  Calendar,
  Send,
  ArrowRight,
  ShieldCheck,
  Paperclip
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  const { matters, openNewProjectModal, addMessageToMatter, addFileToMatter } = useWorkspace();
  const [filter, setFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMatter, setSelectedMatter] = useState<Matter | null>(matters[0] || null);

  const [messageInput, setMessageInput] = useState('');

  const filteredMatters = matters.filter((m) => {
    const matchesFilter =
      filter === 'All'
        ? true
        : filter === 'Active'
        ? m.status === 'In Progress' || m.status === 'In Review'
        : filter === 'Action Required'
        ? m.status === 'Waiting For Documents' || m.status === 'Awaiting Approval'
        : m.status === 'Completed';

    const matchesSearch =
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.matterId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.serviceType.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const activeMatter = selectedMatter || matters[0];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim() || !activeMatter) return;
    addMessageToMatter(activeMatter.id, messageInput);
    setMessageInput('');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0 && activeMatter) {
      const file = e.target.files[0];
      addFileToMatter(activeMatter.id, file.name, `${(file.size / 1024 / 1024).toFixed(1)} MB`);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-montserrat text-2xl sm:text-3xl font-black text-primary">Projects &amp; Matters</h1>
          <p className="text-xs text-slate-500 font-medium">
            Manage your legal matters, collaborate with assigned teams, redline documents, and track progress.
          </p>
        </div>

        <Button
          onClick={() => openNewProjectModal()}
          className="h-11 bg-accent text-accent-foreground hover:bg-white hover:text-primary font-montserrat font-black text-xs uppercase tracking-wider px-6 rounded-full shadow-lg shadow-accent/20 flex items-center gap-2"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>+ New Matter</span>
        </Button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
          {['All', 'Active', 'Action Required', 'Completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                filter === tab
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
          <Input
            placeholder="Search by title, ID, service..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-10 rounded-xl bg-slate-50 border-slate-200 text-xs"
          />
        </div>
      </div>

      {/* Main Grid: Matters List + Active Detail Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Matters List Sidebar */}
        <div className="lg:col-span-5 space-y-3">
          {filteredMatters.map((m) => {
            const isSelected = activeMatter && activeMatter.id === m.id;
            return (
              <div
                key={m.id}
                onClick={() => setSelectedMatter(m)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-3 ${
                  isSelected
                    ? 'bg-white border-accent shadow-md ring-2 ring-accent/20'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-black text-accent uppercase tracking-wider bg-accent/10 px-2 py-0.5 rounded">
                      {m.matterId}
                    </span>
                    <h3 className="font-montserrat font-bold text-base text-primary mt-1.5 leading-snug">
                      {m.title}
                    </h3>
                  </div>
                  <span
                    className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full ${
                      m.status === 'In Progress'
                        ? 'bg-emerald-50 text-emerald-700'
                        : m.status === 'Waiting For Documents'
                        ? 'bg-amber-50 text-amber-700'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {m.status}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-semibold text-slate-500">
                    <span>Progress</span>
                    <span>{m.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${m.progress}%` }} />
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span>Target: {m.deadline}</span>
                  <span>{m.files.length} Files • {m.messages.length} Messages</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Matter Detail Workspace */}
        {activeMatter ? (
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6 flex flex-col justify-between">
            <div>
              {/* Top Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-black text-accent uppercase tracking-wider">
                      {activeMatter.matterId}
                    </span>
                    <span className="text-xs text-slate-400">• {activeMatter.practiceArea}</span>
                  </div>
                  <h2 className="font-montserrat text-xl font-black text-primary">{activeMatter.title}</h2>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs bg-slate-100 px-3 py-1 rounded-full font-bold text-slate-700">
                    Status: {activeMatter.status}
                  </span>
                </div>
              </div>

              {/* Scope & Team Info */}
              <div className="grid grid-cols-2 gap-4 my-4 p-4 bg-slate-50 rounded-xl text-xs">
                <div>
                  <span className="font-bold text-slate-500 block uppercase text-[10px]">Jurisdiction</span>
                  <span className="font-bold text-primary">{activeMatter.jurisdiction}</span>
                </div>
                <div>
                  <span className="font-bold text-slate-500 block uppercase text-[10px]">Deadline</span>
                  <span className="font-bold text-primary">{activeMatter.deadline}</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-medium mb-6">
                {activeMatter.description}
              </p>

              {/* Files Section */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <h4 className="font-montserrat font-bold text-sm text-primary">Matter Files ({activeMatter.files.length})</h4>
                  <label className="text-xs text-accent font-bold cursor-pointer hover:underline flex items-center gap-1">
                    <Upload className="w-3.5 h-3.5" /> Upload File
                    <input type="file" onChange={handleFileUpload} className="hidden" />
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeMatter.files.map((file) => (
                    <div key={file.id} className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5 overflow-hidden">
                        <FileText className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="font-bold text-primary truncate max-w-[160px]">{file.name}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-semibold">{file.size}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Messages / Discussion Tab */}
              <div className="space-y-3">
                <h4 className="font-montserrat font-bold text-sm text-primary">Team Discussion &amp; Redlines</h4>
                <div className="space-y-3 max-h-64 overflow-y-auto p-3 bg-slate-50/50 rounded-xl border border-slate-100">
                  {activeMatter.messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`p-3.5 rounded-2xl text-xs space-y-1 ${
                        msg.sender === 'user'
                          ? 'bg-primary text-white ml-8'
                          : 'bg-white text-slate-800 border border-slate-200 mr-8 shadow-sm'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] opacity-75 font-bold">
                        <span>{msg.author}</span>
                        <span>{msg.timestamp}</span>
                      </div>
                      <p className="leading-relaxed font-medium">{msg.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Message Input */}
            <form onSubmit={handleSendMessage} className="flex items-center gap-2 pt-4 border-t border-slate-100">
              <Input
                placeholder="Send a instruction or message to assigned team..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                className="h-11 rounded-xl bg-slate-50 border-slate-200 text-xs"
              />
              <Button type="submit" className="h-11 bg-accent text-accent-foreground px-5 rounded-xl font-bold">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        ) : (
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-400">
            Select a matter to view workspace details.
          </div>
        )}
      </div>
    </div>
  );
}
