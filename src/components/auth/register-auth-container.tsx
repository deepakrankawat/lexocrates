'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useWorkspace } from '@/lib/workspace-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, Mail, ArrowRight, UserPlus, LogIn, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { ClientRegistrationForm } from './client-registration-form';

export function RegisterAuthContainer() {
  const [tab, setTab] = useState<'signup' | 'signin'>('signup');
  const { login } = useWorkspace();
  const router = useRouter();

  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [showSignInPassword, setShowSignInPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

        // Credentials verified -> Activate Session & Navigate to Dashboard
        login({
          name: userName,
          email: formattedEmail,
          company: userCompany,
          country: userCountry,
        });
        router.push('/dashboard');
      } else {
        // Invalid Credentials or Auth Failure
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
    <div className="space-y-6">
      {/* Tab Switcher */}
      <div className="flex bg-secondary/50 p-1 rounded-2xl border border-black/5">
        <button
          type="button"
          onClick={() => {
            setErrorMessage(null);
            setTab('signup');
          }}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-montserrat font-bold transition-all flex items-center justify-center gap-2 ${
            tab === 'signup'
              ? 'bg-primary text-white shadow-md'
              : 'text-primary/70 hover:text-primary hover:bg-white/50'
          }`}
        >
          <UserPlus className="w-3.5 h-3.5" />
          <span>Sign Up</span>
        </button>
        <button
          type="button"
          onClick={() => {
            setErrorMessage(null);
            setTab('signin');
          }}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-montserrat font-bold transition-all flex items-center justify-center gap-2 ${
            tab === 'signin'
              ? 'bg-primary text-white shadow-md'
              : 'text-primary/70 hover:text-primary hover:bg-white/50'
          }`}
        >
          <LogIn className="w-3.5 h-3.5" />
          <span>Sign In</span>
        </button>
      </div>

      {tab === 'signup' ? (
        <ClientRegistrationForm onToggleSignIn={() => setTab('signin')} />
      ) : (
        <form onSubmit={handleSignInSubmit} className="space-y-4">
          {errorMessage && (
            <div className="flex items-center gap-2 p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 font-medium">
              <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-500" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="space-y-1.5">
            <Label className="text-xs font-bold text-primary uppercase tracking-wider">Work Email *</Label>
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
            <Label className="text-xs font-bold text-primary uppercase tracking-wider">Password *</Label>
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
                <span>Verifying Credentials...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <span>Sign In To Workspace</span>
                <ArrowRight className="w-4 h-4 text-accent" />
              </div>
            )}
          </Button>

          <div className="pt-3 border-t border-black/5 text-center">
            <button
              type="button"
              onClick={() => {
                setErrorMessage(null);
                setTab('signup');
              }}
              className="text-xs text-primary/80 hover:text-accent font-bold inline-flex items-center gap-1.5 transition-colors"
            >
              <UserPlus className="w-3.5 h-3.5 text-accent" />
              <span>Don't have an account? Create Free Account</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
