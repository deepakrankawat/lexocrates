'use client';

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useWorkspace } from '@/lib/workspace-context';
import { useRouter } from 'next/navigation';
import {
  Scale,
  FileSearch,
  FileSignature,
  FileCheck2,
  Gavel,
  FolderOpen,
  UserCheck,
  CheckCircle2,
  Upload,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Zap,
  ShieldCheck,
  X,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SERVICE_CARDS = [
  { id: 'Legal Research', title: 'Legal Research', icon: FileSearch, desc: 'Multi-jurisdictional case law, statutory analysis & legal memos' },
  { id: 'Contract Drafting', title: 'Contract Drafting', icon: FileSignature, desc: 'Tailored MSAs, NDAs, SaaS terms & commercial agreements' },
  { id: 'Contract Review', title: 'Contract Review', icon: FileCheck2, desc: 'Redlining, risk matrix audit & commercial clause analysis' },
  { id: 'Litigation Support', title: 'Litigation Support', icon: Gavel, desc: 'Trial prep, deposition digests, motion research & pleading drafts' },
  { id: 'Document Review', title: 'Document Review', icon: FolderOpen, desc: 'eDiscovery, responsiveness classification & privilege logs' },
  { id: 'Virtual Legal Assistant', title: 'Virtual Legal Assistant', icon: UserCheck, desc: 'Dedicated Paralegal & Legal Assistant support hours' },
];

export function NewProjectModal() {
  const { isNewProjectModalOpen, closeNewProjectModal, selectedServiceForNewProject, addMatter, lexPack } = useWorkspace();
  const router = useRouter();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedService, setSelectedService] = useState<string>('Contract Review');
  const [engagementType, setEngagementType] = useState<'onetime' | 'lexpack'>('onetime');
  const [selectedLexPack, setSelectedLexPack] = useState<'Bronze' | 'Silver' | 'Gold' | 'Skip'>('Silver');

  // Form Fields
  const [title, setTitle] = useState('');
  const [jurisdiction, setJurisdiction] = useState('United Kingdom / US');
  const [practiceArea, setPracticeArea] = useState('Corporate & Commercial');
  const [deadline, setDeadline] = useState('14 Aug 2026');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [createdMatterId, setCreatedMatterId] = useState<string | null>(null);

  useEffect(() => {
    if (selectedServiceForNewProject) {
      setSelectedService(selectedServiceForNewProject);
    }
  }, [selectedServiceForNewProject]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const uploaded = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...uploaded]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    setSubmitting(true);
    try {
      const newMatter = await addMatter(
        {
          title,
          serviceType: selectedService,
          jurisdiction,
          practiceArea,
          deadline,
          description: description || `Standard request for ${selectedService}.`,
        },
        files
      );
      setCreatedMatterId(newMatter.matterId);
      setStep(4); // Success step showing ERPNext silent trigger summary
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  const resetAndClose = () => {
    closeNewProjectModal();
    setStep(1);
    setTitle('');
    setDescription('');
    setFiles([]);
    setCreatedMatterId(null);
  };

  return (
    <Dialog open={isNewProjectModalOpen} onOpenChange={(open) => !open && resetAndClose()}>
      <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden bg-white border-0 shadow-2xl rounded-3xl max-h-[90vh] flex flex-col">
        {/* Top Header */}
        <div className="bg-primary p-6 text-white relative overflow-hidden flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-accent text-accent-foreground">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <span className="font-montserrat font-black tracking-[0.2em] text-[10px] text-accent uppercase block">
                  Lexocrates Workspace · Project Engine
                </span>
                <DialogTitle className="font-montserrat text-xl sm:text-2xl font-black text-white">
                  {step === 1 && 'What would you like?'}
                  {step === 2 && 'Choose Engagement Model'}
                  {step === 3 && 'Create Project Details'}
                  {step === 4 && 'Project Submitted Successfully!'}
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Create and submit new legal matter or project details to Lexocrates Workspace engine.
                </DialogDescription>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-xs font-bold text-accent">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Step {step} of 3</span>
            </div>
          </div>
        </div>

        {/* Step Body */}
        <div className="p-6 overflow-y-auto flex-grow">
          {step === 1 && (
            <div className="space-y-6">
              <p className="text-sm font-medium text-foreground/70">
                Select the legal service required for your matter. Our specialized teams across Canada, the UK & USA handle process-intensive workloads directly.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {SERVICE_CARDS.map((srv) => {
                  const Icon = srv.icon;
                  const isSelected = selectedService === srv.id;
                  return (
                    <div
                      key={srv.id}
                      onClick={() => setSelectedService(srv.id)}
                      className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-accent bg-accent/5 shadow-lg shadow-accent/10'
                          : 'border-black/10 hover:border-primary/40 bg-secondary/20'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-accent text-accent-foreground' : 'bg-primary/10 text-primary'}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        {isSelected && <CheckCircle2 className="w-5 h-5 text-accent" />}
                      </div>
                      <div>
                        <h4 className="font-montserrat font-bold text-sm text-primary mb-1">{srv.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{srv.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-end pt-2">
                <Button
                  onClick={() => setStep(2)}
                  className="h-12 bg-primary hover:bg-primary/90 text-white font-montserrat font-black text-xs uppercase tracking-widest px-8 rounded-xl shadow-lg shadow-primary/20 flex items-center gap-2"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4 text-accent" />
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="p-4 bg-secondary/50 rounded-2xl border border-black/5 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/20 text-accent">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-primary block uppercase tracking-wider">Selected Service</span>
                  <span className="text-sm font-black text-accent">{selectedService}</span>
                </div>
              </div>

              <div>
                <Label className="text-xs font-bold text-primary uppercase tracking-wider block mb-3">
                  Engagement Option
                </Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    onClick={() => setEngagementType('onetime')}
                    className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                      engagementType === 'onetime' ? 'border-accent bg-accent/5 shadow-md' : 'border-black/10 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-sm text-primary">One-time Project</span>
                      <input
                        type="radio"
                        name="engagement"
                        checked={engagementType === 'onetime'}
                        onChange={() => setEngagementType('onetime')}
                        className="accent-accent w-4 h-4"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Pay per matter with scoped deliverables, defined timelines, and fixed upfront milestones.
                    </p>
                  </div>

                  <div
                    onClick={() => setEngagementType('lexpack')}
                    className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                      engagementType === 'lexpack' ? 'border-accent bg-accent/5 shadow-md' : 'border-black/10 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-primary">Monthly LexPack</span>
                        <span className="text-[9px] bg-accent text-accent-foreground px-2 py-0.5 rounded-full font-black uppercase">
                          Best Value
                        </span>
                      </div>
                      <input
                        type="radio"
                        name="engagement"
                        checked={engagementType === 'lexpack'}
                        onChange={() => setEngagementType('lexpack')}
                        className="accent-accent w-4 h-4"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Dedicated monthly hours pool, discounted rates, priority 24/7 SLA turnaround.
                    </p>
                  </div>
                </div>
              </div>

              {engagementType === 'lexpack' && (
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-xs font-bold text-primary uppercase tracking-wider">
                      Select LexPack Tier
                    </Label>
                    <button
                      type="button"
                      onClick={() => {
                        setEngagementType('onetime');
                        setSelectedLexPack('Skip');
                      }}
                      className="text-xs text-accent font-bold hover:underline"
                    >
                      Skip for now (Continue with One-time Project)
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div
                      onClick={() => setSelectedLexPack('Bronze')}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                        selectedLexPack === 'Bronze' ? 'border-accent bg-accent/10' : 'border-black/10 bg-secondary/20'
                      }`}
                    >
                      <h5 className="font-bold text-xs text-primary">LexPack Bronze</h5>
                      <p className="text-lg font-black text-accent my-1">£800<span className="text-[10px] text-muted-foreground font-medium">/mo</span></p>
                      <p className="text-[11px] text-muted-foreground">20 Dedicated Hours</p>
                    </div>

                    <div
                      onClick={() => setSelectedLexPack('Silver')}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all relative ${
                        selectedLexPack === 'Silver' ? 'border-accent bg-accent/10' : 'border-black/10 bg-secondary/20'
                      }`}
                    >
                      <div className="absolute -top-2.5 right-3 bg-primary text-white text-[8px] font-black uppercase px-2 py-0.5 rounded-full">
                        Active
                      </div>
                      <h5 className="font-bold text-xs text-primary">LexPack Silver</h5>
                      <p className="text-lg font-black text-accent my-1">£1,850<span className="text-[10px] text-muted-foreground font-medium">/mo</span></p>
                      <p className="text-[11px] text-muted-foreground">50 Dedicated Hours</p>
                    </div>

                    <div
                      onClick={() => setSelectedLexPack('Gold')}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                        selectedLexPack === 'Gold' ? 'border-accent bg-accent/10' : 'border-black/10 bg-secondary/20'
                      }`}
                    >
                      <h5 className="font-bold text-xs text-primary">LexPack Gold</h5>
                      <p className="text-base font-black text-accent my-1">Custom</p>
                      <p className="text-[11px] text-muted-foreground">100+ Hours & SLA</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-4 border-t border-black/5">
                <Button variant="outline" onClick={() => setStep(1)} className="h-11 rounded-xl">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  className="h-11 bg-primary hover:bg-primary/90 text-white font-montserrat font-black text-xs uppercase tracking-widest px-8 rounded-xl shadow-lg flex items-center gap-2"
                >
                  <span>Enter Details</span>
                  <ArrowRight className="w-4 h-4 text-accent" />
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <Label className="text-xs font-bold text-primary uppercase tracking-wider">Project Title *</Label>
                <Input
                  placeholder="e.g. Master Services Agreement Redline & Risk Audit"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="h-11 rounded-xl bg-secondary/30 border-black/10 focus:border-accent text-sm"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-xs font-bold text-primary uppercase tracking-wider">Jurisdiction</Label>
                  <select
                    value={jurisdiction}
                    onChange={(e) => setJurisdiction(e.target.value)}
                    className="w-full h-11 px-3 rounded-xl bg-secondary/30 border border-black/10 text-xs font-medium focus:border-accent focus:outline-none"
                  >
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada (Ontario)">Canada (Ontario)</option>
                    <option value="USA (Delaware)">USA (Delaware)</option>
                    <option value="USA (New York)">USA (New York)</option>
                    <option value="Cross-Border Multi-Jurisdiction">Cross-Border</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-xs font-bold text-primary uppercase tracking-wider">Practice Area</Label>
                  <select
                    value={practiceArea}
                    onChange={(e) => setPracticeArea(e.target.value)}
                    className="w-full h-11 px-3 rounded-xl bg-secondary/30 border border-black/10 text-xs font-medium focus:border-accent focus:outline-none"
                  >
                    <option value="Corporate & Commercial">Corporate & Commercial</option>
                    <option value="Litigation & Disputes">Litigation & Disputes</option>
                    <option value="Intellectual Property">Intellectual Property</option>
                    <option value="Data Privacy & Compliance">Data Privacy & Compliance</option>
                    <option value="Real Estate">Real Estate</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-xs font-bold text-primary uppercase tracking-wider">Target Deadline</Label>
                  <Input
                    type="text"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    placeholder="e.g. 14 Aug 2026"
                    className="h-11 rounded-xl bg-secondary/30 border-black/10 text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs font-bold text-primary uppercase tracking-wider">Matter Description & Scope</Label>
                <Textarea
                  placeholder="Describe key requirements, governing law nuances, specific indemnities to flag, or background context..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="rounded-xl bg-secondary/30 border-black/10 focus:border-accent text-sm min-h-[90px]"
                />
              </div>

              {/* Upload Dropzone */}
              <div className="space-y-1.5">
                <Label className="text-xs font-bold text-primary uppercase tracking-wider">Upload Relevant Documents</Label>
                <div className="border-2 border-dashed border-black/20 hover:border-accent rounded-2xl p-4 text-center transition-colors bg-secondary/10 cursor-pointer relative">
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <Upload className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-xs font-bold text-primary">Click or drag files here to attach</p>
                  <p className="text-[10px] text-muted-foreground">PDF, DOCX, XLSX, ZIP up to 50MB per file</p>
                </div>

                {files.length > 0 && (
                  <div className="space-y-1.5 pt-2">
                    {files.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-accent/10 border border-accent/20 text-xs">
                        <div className="flex items-center gap-2 overflow-hidden">
                          <FileText className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="font-semibold text-primary truncate">{file.name}</span>
                          <span className="text-[10px] text-muted-foreground">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(idx)}
                          className="text-red-500 hover:text-red-700 p-1"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex justify-between pt-4 border-t border-black/5">
                <Button type="button" variant="outline" onClick={() => setStep(2)} className="h-11 rounded-xl">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="h-11 bg-accent hover:bg-accent/90 text-accent-foreground font-montserrat font-black text-xs uppercase tracking-widest px-8 rounded-xl shadow-lg shadow-accent/20 flex items-center gap-2"
                >
                  {submitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                      <span>Creating Project...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span>Submit Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </Button>
              </div>
            </form>
          )}

          {step === 4 && (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="font-montserrat text-2xl font-black text-primary mb-1">
                  Matter {createdMatterId} Created!
                </h3>
                <p className="text-xs text-muted-foreground max-w-md mx-auto">
                  Your project has been submitted to your Lexocrates Workspace.
                </p>
              </div>

              {/* Behind the scenes explanation matching PDF Page 4 */}
              <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10 text-left space-y-2 text-xs">
                <div className="flex items-center gap-2 text-accent font-bold uppercase tracking-wider text-[10px]">
                  <ShieldCheck className="w-4 h-4" />
                  Behind the scenes (ERPNext Operations Layer)
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Lexocrates platform automatically provisioned:
                </p>
                <ul className="grid grid-cols-2 gap-1.5 text-[11px] font-semibold text-primary pl-2">
                  <li>✓ Customer Profile Sync</li>
                  <li>✓ Engagement Contract</li>
                  <li>✓ Task & Workflows</li>
                  <li>✓ Sales Opportunity Log</li>
                  <li>✓ Team Notifications</li>
                  <li>✓ Matter Folder & ID ({createdMatterId})</li>
                </ul>
                <p className="text-[10px] text-muted-foreground italic pt-1 border-t border-black/5">
                  The client never realizes ERPNext is working behind the scenes.
                </p>
              </div>

              <div className="flex justify-center gap-3 pt-2">
                <Button
                  onClick={() => {
                    resetAndClose();
                    router.push('/dashboard/projects');
                  }}
                  className="h-12 bg-primary hover:bg-primary/90 text-white font-montserrat font-black text-xs uppercase tracking-widest px-8 rounded-xl shadow-lg"
                >
                  View Matter in Dashboard
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
