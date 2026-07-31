'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useWorkspace } from '@/lib/workspace-context';
import { useRouter } from 'next/navigation';
import { Scale, Lock, ArrowRight, Mail, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { ClientRegistrationForm } from './client-registration-form';

export function AuthModal() {
  const { isAuthModalOpen, closeAuthModal, login, authModalInitialTab } = useWorkspace();
  const router = useRouter();

  const [isSignUp, setIsSignUp] = useState(true);
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [showSignInPassword, setShowSignInPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  React.useEffect(() => {
    if (isAuthModalOpen) {
      setIsSignUp(authModalInitialTab === 'signup');
      setErrorMessage(null);
    }
  }, [isAuthModalOpen, authModalInitialTab]);

  const handleSignInSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!signInEmail || !signInPassword) {
      setErrorMessage('Please enter both Email and Password.');
      return;
    }

    setLoading(true);
    const formattedEmail = signInEmail.trim().toLowerCase();

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 35000);

      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: formattedEmail,
          password: signInPassword,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      let responseData: any = null;
      try {
        responseData = await response.json();
      } catch (err) {
        // Non-JSON response
      }

      if (response.ok && responseData?.status === 'success') {
        const userObj = responseData?.user || responseData?.data?.user || responseData?.message?.user || {};
        const userName =
          userObj.full_name ||
          responseData?.message?.full_name ||
          responseData?.data?.full_name ||
          formattedEmail.split('@')[0].replace('.', ' ').toUpperCase();
        const userCompany = userObj.company || responseData?.message?.company || 'Corporate Client';
        const userCountry = userObj.country || responseData?.message?.country || 'United Kingdom';

        login({
          name: userName,
          email: formattedEmail,
          company: userCompany,
          country: userCountry,
        });
        closeAuthModal();
        router.push('/dashboard');
      } else {
        const apiError =
          responseData?.message ||
          responseData?.details?.data?.message ||
          responseData?._error_message ||
          'Invalid email or password. Please verify your login credentials.';

        setErrorMessage(typeof apiError === 'string' ? apiError : 'Invalid email or password.');
      }
    } catch (error: any) {
      if (error.name === 'AbortError') {
        setErrorMessage('Authentication request timed out. Please try again.');
      } else {
        setErrorMessage('Unable to connect to authentication server. Please check your network or try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isAuthModalOpen} onOpenChange={(open) => !open && closeAuthModal()}>
      <DialogContent className="sm:max-w-[480px] p-0 overflow-hidden bg-white border-0 shadow-2xl rounded-3xl max-h-[90vh] overflow-y-auto">
        {/* Header background with Lexocrates styling */}
        <div className="bg-primary p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 opacity-10 pointer-events-none">
            <Scale size={180} color="white" />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 rounded-xl bg-accent text-accent-foreground">
              <Scale className="w-5 h-5" />
            </div>
            <span className="font-montserrat font-black tracking-[0.2em] text-xs text-accent uppercase">
              Lexocrates Client Workspace
            </span>
          </div>
          <DialogTitle className="font-montserrat text-2xl font-black text-white">
            {isSignUp ? 'Create Free Account' : 'Client Portal Sign In'}
          </DialogTitle>
          <DialogDescription className="text-white/80 text-xs mt-1 font-medium">
            {isSignUp
              ? 'Get instant access to your secure legal workspace. Done in 30 seconds.'
              : 'Sign in to track active matters, review documents, and manage LexPacks.'}
          </DialogDescription>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {isSignUp ? (
            <ClientRegistrationForm
              onSuccess={() => closeAuthModal()}
              onToggleSignIn={() => setIsSignUp(false)}
            />
          ) : (
            <form onSubmit={handleSignInSubmit} className="space-y-4">
              {errorMessage && (
                <div className="flex items-center gap-2 p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 font-medium">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-500" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="space-y-1.5">
                <Label className="text-xs font-bold text-primary uppercase tracking-wider">Work Email</Label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="name@firm.com"
                    value={signInEmail}
                    onChange={(e) => setSignInEmail(e.target.value)}
                    className="pl-10 h-11 rounded-xl bg-secondary/30 border-black/10 focus:border-accent text-sm"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs font-bold text-primary uppercase tracking-wider">Password</Label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-3.5 text-muted-foreground" />
                  <Input
                    type={showSignInPassword ? 'text' : 'password'}
                    placeholder="••••••••••••"
                    value={signInPassword}
                    onChange={(e) => setSignInPassword(e.target.value)}
                    className="pl-10 pr-10 h-11 rounded-xl bg-secondary/30 border-black/10 focus:border-accent text-sm"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowSignInPassword(!showSignInPassword)}
                    className="absolute right-3.5 top-3.5 text-muted-foreground hover:text-primary transition-colors"
                  >
                    {showSignInPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-montserrat font-black text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] mt-2"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Signing in...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <span>Sign In To Workspace</span>
                    <ArrowRight className="w-4 h-4 text-accent" />
                  </div>
                )}
              </Button>
            </form>
          )}

          <div className="pt-4 mt-4 border-t border-black/5 text-center">
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-xs text-primary/70 hover:text-accent font-semibold transition-colors"
            >
              {isSignUp ? 'Already have a Workspace account? Sign In' : "Don't have an account? Create Free Account"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
