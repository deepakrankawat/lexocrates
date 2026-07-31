'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useWorkspace } from '@/lib/workspace-context';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Briefcase,
  MessageSquare,
  FileText,
  PackageCheck,
  FolderLock,
  Sparkles,
  HelpCircle,
  User,
  Plus,
  LogOut,
  Menu,
  X,
  Bell,
  Scale,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { AuthModal } from '@/components/auth/auth-modal';
import { NewProjectModal } from '@/components/dashboard/new-project-modal';

const navItems = [
  { href: '/dashboard', label: 'Home', icon: LayoutDashboard },
  { href: '/dashboard/projects', label: 'Projects / Matters', icon: Briefcase },
  { href: '/dashboard/messages', label: 'Messages', icon: MessageSquare },
  { href: '/dashboard/invoices', label: 'Invoices', icon: FileText },
  { href: '/dashboard/lexpacks', label: 'LexPacks', icon: PackageCheck },
  { href: '/dashboard/documents', label: 'Documents', icon: FolderLock },
  { href: '/dashboard/ai-assistant', label: 'Knowledge Centre', icon: Sparkles },
  { href: '/dashboard/support', label: 'Support', icon: HelpCircle },
  { href: '/dashboard/profile', label: 'Profile', icon: User },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, lexPack, logout, openNewProjectModal } = useWorkspace();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (href: string) => (href === '/dashboard' ? pathname === href : pathname.startsWith(href));

  React.useEffect(() => {
    if (!user.isLoggedIn) {
      router.push('/register');
    }
  }, [user.isLoggedIn, router]);

  if (!user.isLoggedIn) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center p-6 text-white text-center">
        <div className="space-y-4 max-w-md">
          <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="font-montserrat font-bold text-sm">Protected Workspace Access. Redirecting to Registration...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-opensans text-foreground">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-primary text-white border-b border-white/10 shadow-md">
        <div className="mx-auto flex items-center justify-between px-4 sm:px-8 py-3 max-w-[1920px]">
          {/* Logo & Portal Title */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-xl"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <Link href="/" className="flex items-center gap-3 group">
              <Logo variant="light" className="h-10 w-auto" />
              <div className="hidden sm:block border-l border-white/20 pl-3">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-accent block">
                  Client Workspace
                </span>
                <span className="text-xs font-semibold text-white/80 block">
                  {user.company || 'Legal Services Platform'}
                </span>
              </div>
            </Link>
          </div>

          {/* Quick Action Controls */}
          <div className="flex items-center gap-3">
            {/* Active LexPack Badge */}
            {lexPack.tier !== 'None' && (
              <Link
                href="/dashboard/lexpacks"
                className="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 px-3 py-1.5 rounded-full text-xs transition-colors"
              >
                <PackageCheck className="w-4 h-4 text-accent" />
                <span className="font-bold text-white">LexPack {lexPack.tier}</span>
                <span className="text-accent font-black">({lexPack.remainingHours}h remaining)</span>
              </Link>
            )}

            {/* + New Matter Button */}
            <Button
              onClick={() => openNewProjectModal()}
              className="h-10 bg-accent text-accent-foreground hover:bg-white hover:text-primary font-montserrat font-black text-xs uppercase tracking-wider px-4 sm:px-6 rounded-full shadow-lg shadow-accent/20 flex items-center gap-2 transition-all hover:scale-105"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span className="hidden sm:inline">New Matter</span>
            </Button>

            {/* Notifications */}
            <button className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full relative transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-accent animate-pulse" />
            </button>

            {/* Profile Dropdown */}
            <div className="flex items-center gap-2 pl-2 border-l border-white/10">
              <div className="w-9 h-9 rounded-full bg-accent text-accent-foreground font-black flex items-center justify-center text-xs shadow-md">
                {user.name ? user.name.slice(0, 2).toUpperCase() : 'JD'}
              </div>
              <div className="hidden xl:block text-left">
                <p className="text-xs font-bold text-white truncate max-w-[120px]">{user.name || 'John Vance'}</p>
                <p className="text-[10px] text-white/60 truncate max-w-[120px]">{user.company || 'Vance & Partners'}</p>
              </div>
              <button
                onClick={() => {
                  logout();
                  router.push('/');
                }}
                title="Sign Out"
                className="p-1.5 text-white/60 hover:text-red-400 hover:bg-white/10 rounded-lg transition-colors ml-1"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="flex-1 flex max-w-[1920px] w-full mx-auto">
        {/* Sidebar Navigation - Desktop */}
        <aside className="hidden lg:block w-64 bg-white border-r border-slate-200 p-4 flex-shrink-0 min-h-[calc(100vh-65px)]">
          <div className="space-y-1">
            <div className="px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
              Navigation
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-bold transition-all',
                    active
                      ? 'bg-primary text-white shadow-md shadow-primary/20 font-extrabold'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-primary'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={cn('w-4 h-4', active ? 'text-accent' : 'text-slate-400')} />
                    <span>{item.label}</span>
                  </div>
                  {active && <ChevronRight className="w-4 h-4 text-accent" />}
                </Link>
              );
            })}
          </div>

          {/* LexPack Sidebar Widget */}
          {lexPack.tier !== 'None' && (
            <div className="mt-8 p-4 bg-primary/5 border border-primary/10 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider text-accent">Active Subscription</span>
                <ShieldCheck className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h5 className="font-montserrat font-bold text-sm text-primary">LexPack {lexPack.tier}</h5>
                <p className="text-xs text-slate-500 font-medium">{lexPack.priceMonthly}</p>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-bold text-slate-700">
                  <span>Hours Pool</span>
                  <span>{lexPack.remainingHours} / {lexPack.totalHours} hrs</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-500"
                    style={{ width: `${(lexPack.remainingHours / lexPack.totalHours) * 100}%` }}
                  />
                </div>
              </div>

              <Link
                href="/dashboard/lexpacks"
                className="block text-center text-xs font-bold text-accent hover:underline pt-1"
              >
                Manage LexPack &amp; Upgrade →
              </Link>
            </div>
          )}

          {/* Operation Layer Note */}
          <div className="mt-6 p-3 bg-secondary/80 rounded-xl text-[10px] text-muted-foreground border border-black/5">
            <span className="font-bold text-primary block mb-0.5">ERPNext Operations Layer:</span>
            <span>Running silently behind the scenes. Zero client ERP exposure.</span>
          </div>
        </aside>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden flex">
            <div className="w-4/5 max-w-xs bg-white h-full p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <Logo variant="dark" className="h-8 w-auto" />
                  <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-500">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <nav className="space-y-1">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold',
                          active ? 'bg-primary text-white' : 'text-slate-600 hover:bg-slate-100'
                        )}
                      >
                        <Icon className={cn('w-5 h-5', active ? 'text-accent' : 'text-slate-400')} />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openNewProjectModal();
                }}
                className="w-full h-12 bg-accent text-accent-foreground font-black text-xs uppercase"
              >
                + Start New Matter
              </Button>
            </div>
            <div className="flex-1" onClick={() => setIsMobileMenuOpen(false)} />
          </div>
        )}

        {/* Main Content View */}
        <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
          {children}
        </main>
      </div>

      <AuthModal />
      <NewProjectModal />
    </div>
  );
}
