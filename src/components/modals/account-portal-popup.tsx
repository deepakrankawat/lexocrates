'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { ArrowRight, ExternalLink, X, Lock } from 'lucide-react';

export function AccountPortalPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show slider popup on homepage after 1.2s
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1200);

    const handleTrigger = () => setIsOpen(true);
    window.addEventListener('lex-show-account-popup', handleTrigger);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('lex-show-account-popup', handleTrigger);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={(open) => (!open ? handleClose() : setIsOpen(true))}>
      <SheetContent
        side="right"
        className="fixed inset-y-0 right-0 h-full w-full sm:w-[420px] sm:max-w-[420px] p-8 pt-12 border-l border-[#E5A91E]/30 bg-[#0B1736] text-white shadow-2xl z-[100] flex flex-col justify-between text-center overflow-hidden"
      >
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-0 right-0 w-56 h-40 bg-[#E5A91E]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Floating Close Button */}
        <SheetClose asChild>
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200"
          >
            <X className="w-4 h-4" />
            <span className="sr-only">Close</span>
          </button>
        </SheetClose>

        {/* Main Content Area */}
        <div className="flex flex-col items-center justify-center flex-1 my-auto relative z-10 py-6">
          {/* Top: Official Brand Logo Only */}
          <div className="flex justify-center mb-6">
            <Logo variant="light" className="h-12 sm:h-14 w-auto" />
          </div>

          {/* Title */}
          <SheetTitle className="text-2xl sm:text-3xl font-montserrat font-black text-white tracking-tight">
            Create Client Account
          </SheetTitle>

          {/* Minimal 1-line Subtitle */}
          <SheetDescription className="text-xs text-slate-300 mt-2.5 mb-8 leading-relaxed max-w-[280px] mx-auto">
            Access your secure legal operations workspace on our engine portal.
          </SheetDescription>

          {/* Primary CTA Hyperlink Button */}
          <div className="w-full space-y-4">
            <Button
              asChild
              className="w-full h-12 bg-[#E5A91E] hover:bg-amber-400 text-[#0B1736] font-montserrat font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-[#E5A91E]/20 transition-all flex items-center justify-center gap-2 group"
            >
              <Link
                href="https://engine.lexocrates.com/client-registration"
                onClick={handleClose}
                className="flex items-center justify-center gap-2"
              >
                <span>Create Account</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            {/* Minimal Sign In Link */}
            <div className="flex items-center justify-center gap-1 text-xs text-slate-400 pt-1">
              <span>Already have an account?</span>
              <Link
                href="https://engine.lexocrates.com/client-login"
                onClick={handleClose}
                className="font-bold text-[#E5A91E] hover:underline inline-flex items-center gap-1"
              >
                <span>Sign In</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Subtle Security Badge at Bottom */}
        <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-center gap-1.5 text-[10px] font-mono text-slate-400 relative z-10">
          <Lock className="w-3 h-3 text-[#E5A91E]" />
          <span>256-Bit SSL Encrypted • engine.lexocrates.com</span>
        </div>
      </SheetContent>
    </Sheet>
  );
}
