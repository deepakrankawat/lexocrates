'use client';

import React, { useState } from 'react';
import { useWorkspace } from '@/lib/workspace-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageSquare, Send, Paperclip, CheckCircle2 } from 'lucide-react';

export default function MessagesPage() {
  const { matters, addMessageToMatter, user } = useWorkspace();
  const [activeMatterId, setActiveMatterId] = useState(matters[0]?.id || '');
  const [inputText, setInputText] = useState('');

  const activeMatter = matters.find((m) => m.id === activeMatterId) || matters[0];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !activeMatter) return;
    addMessageToMatter(activeMatter.id, inputText);
    setInputText('');
  };

  return (
    <div className="space-y-6 pb-12">
      <div>
        <h1 className="font-montserrat text-2xl sm:text-3xl font-black text-primary">Messages &amp; Communications</h1>
        <p className="text-xs text-slate-500 font-medium">Direct secure messaging with your assigned legal leads and associate attorneys.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 min-h-[500px] overflow-hidden">
        {/* Left Matter List */}
        <div className="lg:col-span-4 border-r border-slate-200 p-4 space-y-2 bg-slate-50/50">
          <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-2">Active Channels</p>
          {matters.map((m) => (
            <div
              key={m.id}
              onClick={() => setActiveMatterId(m.id)}
              className={`p-3.5 rounded-xl cursor-pointer transition-all ${
                activeMatter?.id === m.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-bold opacity-80 mb-1">
                <span>{m.matterId}</span>
                <span>{m.messages.length} msgs</span>
              </div>
              <p className="font-bold text-xs truncate">{m.title}</p>
            </div>
          ))}
        </div>

        {/* Right Chat Panel */}
        {activeMatter ? (
          <div className="lg:col-span-8 p-6 flex flex-col justify-between space-y-4">
            <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black text-accent uppercase tracking-wider">{activeMatter.matterId}</span>
                <h3 className="font-montserrat font-bold text-base text-primary">{activeMatter.title}</h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                <span>Assigned: {activeMatter.assignedTeam.map((t) => t.name).join(', ')}</span>
              </div>
            </div>

            {/* Chat History */}
            <div className="flex-1 space-y-3 overflow-y-auto max-h-[360px] p-3 bg-slate-50 rounded-xl border border-slate-100">
              {activeMatter.messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`p-4 rounded-2xl text-xs space-y-1 ${
                    msg.sender === 'user'
                      ? 'bg-primary text-white ml-12'
                      : 'bg-white text-slate-800 border border-slate-200 mr-12 shadow-sm'
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

            {/* Message Input */}
            <form onSubmit={handleSend} className="flex items-center gap-2 pt-2 border-t border-slate-100">
              <Input
                placeholder="Type your message or instruction..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="h-11 rounded-xl bg-slate-50 text-xs"
              />
              <Button type="submit" className="h-11 bg-accent text-accent-foreground px-6 font-bold rounded-xl">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
}
