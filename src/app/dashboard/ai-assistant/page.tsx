'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles, Send, Bot, ShieldCheck, Scale, FileText } from 'lucide-react';

export default function AiAssistantPage() {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'Hello Johnathan. I am your Lexocrates AI Legal Assistant. I am trained on cross-border UK, Delaware, and Canadian jurisprudence. How can I assist your team today?',
    },
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userQ = query;
    setMessages((prev) => [...prev, { sender: 'user', text: userQ }]);
    setQuery('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: `Analysis for "${userQ}": Based on standard UK & Delaware commercial precedent, clause enforcement requires clear limitation caps and explicit carve-outs for intentional misrepresentation. Would you like me to draft a memo or redline for your active matter?`,
        },
      ]);
    }, 800);
  };

  return (
    <div className="space-y-6 pb-12 max-w-5xl mx-auto">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-2">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">
            Legal Knowledge Centre &amp; AI Engine
          </span>
        </div>
        <h1 className="font-montserrat text-2xl sm:text-3xl font-black text-primary">AI Research &amp; Drafting Assistant</h1>
        <p className="text-xs text-slate-500 font-medium">Ask jurisprudence queries, synthesize case law summaries, or draft standard agreement provisions.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4 min-h-[500px] flex flex-col justify-between">
        <div className="space-y-4 max-h-[420px] overflow-y-auto p-4 bg-slate-50 rounded-xl">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl text-xs space-y-1 ${
                m.sender === 'user'
                  ? 'bg-primary text-white ml-12'
                  : 'bg-white text-slate-800 border border-slate-200 mr-12 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2 text-[10px] font-bold opacity-80 mb-1">
                {m.sender === 'ai' ? <Bot className="w-4 h-4 text-accent" /> : <Scale className="w-4 h-4" />}
                <span>{m.sender === 'ai' ? 'Lexocrates AI Assistant' : 'You'}</span>
              </div>
              <p className="leading-relaxed font-medium">{m.text}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleSend} className="flex items-center gap-2 pt-2 border-t border-slate-100">
          <Input
            placeholder="Ask AI legal assistant e.g. 'Draft indemnity carve-out clause for UK SPA'..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-12 rounded-xl bg-slate-50 text-xs"
          />
          <Button type="submit" className="h-12 bg-accent text-accent-foreground px-6 font-bold rounded-xl">
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
