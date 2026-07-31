'use client';

import React from 'react';
import { useWorkspace } from '@/lib/workspace-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FolderLock, FileText, Upload, Search, Download, Eye, ExternalLink, ShieldCheck } from 'lucide-react';

export default function DocumentsPage() {
  const { matters } = useWorkspace();

  const allFiles = matters.flatMap((m) =>
    m.files.map((f) => ({
      ...f,
      matterId: m.matterId,
      matterTitle: m.title,
    }))
  );

  return (
    <div className="space-y-6 pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-2">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">
              Encrypted Document Vault
            </span>
          </div>
          <h1 className="font-montserrat text-2xl sm:text-3xl font-black text-primary">Documents Repository</h1>
          <p className="text-xs text-slate-500 font-medium">
            Secure cloud vault for your agreements, discovery disclosures, and legal deliverables.
          </p>
        </div>

        <label className="h-11 bg-accent text-accent-foreground hover:bg-white hover:text-primary font-montserrat font-black text-xs uppercase tracking-wider px-6 rounded-full shadow-lg shadow-accent/20 flex items-center gap-2 cursor-pointer transition-all">
          <Upload className="w-4 h-4" /> Upload Document
          <input type="file" className="hidden" />
        </label>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
          <Input placeholder="Search documents by filename or matter..." className="pl-10 h-10 rounded-xl bg-slate-50 text-xs" />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[10px] font-extrabold">
              <tr>
                <th className="p-4">Document Name</th>
                <th className="p-4">Associated Matter</th>
                <th className="p-4">Size</th>
                <th className="p-4">Uploaded</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {allFiles.map((file) => (
                <tr key={file.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent/10 text-accent">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-primary">{file.name}</p>
                        <p className="text-[10px] text-slate-400 uppercase font-semibold">{file.type}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-[10px] font-black text-accent uppercase tracking-wider bg-accent/10 px-2 py-0.5 rounded">
                      {file.matterId}
                    </span>
                    <p className="text-xs text-slate-600 truncate max-w-[200px]">{file.matterTitle}</p>
                  </td>
                  <td className="p-4 text-slate-500">{file.size}</td>
                  <td className="p-4 text-slate-500">{file.uploadedAt}</td>
                  <td className="p-4 text-right space-x-2">
                    <button className="p-2 text-slate-500 hover:text-primary rounded-lg hover:bg-slate-100">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-slate-500 hover:text-primary rounded-lg hover:bg-slate-100">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
