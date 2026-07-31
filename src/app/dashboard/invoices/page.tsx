'use client';

import React from 'react';
import { useWorkspace } from '@/lib/workspace-context';
import { Button } from '@/components/ui/button';
import { FileText, Download, CheckCircle2, AlertCircle, CreditCard } from 'lucide-react';

export default function InvoicesPage() {
  const { lexPack } = useWorkspace();

  const invoices = [
    { id: 'INV-2026-081', date: '28 Jul 2026', title: 'LexPack Silver Monthly Retainer', amount: '£1,850.00', status: 'Due', dueDate: '10 Aug 2026' },
    { id: 'INV-2026-044', date: '28 Jun 2026', title: 'LexPack Silver Monthly Retainer', amount: '£1,850.00', status: 'Paid', dueDate: '10 Jul 2026' },
    { id: 'INV-2026-012', date: '28 May 2026', title: 'Ad-Hoc M&A Due Diligence Project', amount: '£1,200.00', status: 'Paid', dueDate: '10 Jun 2026' },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-montserrat text-2xl sm:text-3xl font-black text-primary">Invoices &amp; Billing</h1>
          <p className="text-xs text-slate-500 font-medium">Transparent billing, downloaded receipts, and LexPack statement history.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[10px] font-extrabold">
            <tr>
              <th className="p-4">Invoice #</th>
              <th className="p-4">Description</th>
              <th className="p-4">Issue Date</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium">
            {invoices.map((inv) => (
              <tr key={inv.id} className="hover:bg-slate-50/80">
                <td className="p-4 font-bold text-accent">{inv.id}</td>
                <td className="p-4 font-bold text-primary">{inv.title}</td>
                <td className="p-4 text-slate-500">{inv.date}</td>
                <td className="p-4 font-black text-primary">{inv.amount}</td>
                <td className="p-4">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-[10px] font-black uppercase ${
                      inv.status === 'Paid' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                    }`}
                  >
                    {inv.status === 'Paid' ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                    {inv.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <Button variant="outline" size="sm" className="h-8 text-xs font-bold gap-1 rounded-lg">
                    <Download className="w-3.5 h-3.5" /> PDF
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
