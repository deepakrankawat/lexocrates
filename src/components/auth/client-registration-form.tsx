'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useWorkspace } from '@/lib/workspace-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Scale, Lock, ArrowRight, Building, Globe, Mail, User, CheckCircle2, AlertCircle, LogIn, Eye, EyeOff } from 'lucide-react';

interface ClientRegistrationFormProps {
  onSuccess?: () => void;
  onToggleSignIn?: () => void;
  className?: string;
}

export function ClientRegistrationForm({ onSuccess, onToggleSignIn, className = '' }: ClientRegistrationFormProps) {
  const router = useRouter();
  const { login, openAuthModal } = useWorkspace();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [country, setCountry] = useState('United Kingdom');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!fullName || !email || !password || !companyName || !country) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setLoading(true);

    const formattedEmail = email.trim().toLowerCase();

    // Primary Live ERPNext Whitelisted API Endpoint
    const registerEndpoint = 'https://portal.lexocrates.com/api/method/register_client';

    const payload = {
      full_name: fullName,
      email: formattedEmail,
      password,
      company_name: companyName,
      country,
    };

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 35000);

      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
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
        // Registration successful on ERPNext -> Activate Session & Navigate to Dashboard
        login({
          name: fullName,
          email: formattedEmail,
          company: companyName,
          country,
        });

        if (onSuccess) onSuccess();
        router.push('/dashboard');
      } else {
        // Registration Failed on ERPNext -> BLOCK entrance to Dashboard
        const apiError =
          responseData?.message ||
          responseData?.details?.data?.message ||
          'Failed to create account on ERPNext. Please verify your details and try again.';

        setErrorMessage(typeof apiError === 'string' ? apiError : JSON.stringify(apiError));
      }
    } catch (error: any) {
      if (error.name === 'AbortError') {
        setErrorMessage('Registration request timed out. Please try again.');
      } else {
        setErrorMessage('Network connection error. Account creation not completed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSignInClick = () => {
    if (onToggleSignIn) {
      onToggleSignIn();
    } else {
      openAuthModal('signin');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {errorMessage && (
        <div className="flex items-center gap-2 p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 font-medium">
          <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-500" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="space-y-1.5">
        <Label className="text-xs font-bold text-primary uppercase tracking-wider">Full Name *</Label>
        <div className="relative">
          <User className="w-4 h-4 absolute left-3.5 top-3.5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="e.g. Johnathan Vance"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="pl-10 h-11 rounded-xl bg-secondary/30 border-black/10 focus:border-accent text-sm"
            required
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label className="text-xs font-bold text-primary uppercase tracking-wider">Work Email *</Label>
        <div className="relative">
          <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-muted-foreground" />
          <Input
            type="email"
            placeholder="name@firm.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10 pr-10 h-11 rounded-xl bg-secondary/30 border-black/10 focus:border-accent text-sm"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3.5 top-3.5 text-muted-foreground hover:text-primary transition-colors"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-primary uppercase tracking-wider">Company / Firm Name *</Label>
          <div className="relative">
            <Building className="w-4 h-4 absolute left-3 top-3.5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Vance & Partners LLP"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="pl-9 h-11 rounded-xl bg-secondary/30 border-black/10 focus:border-accent text-xs"
              required
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-primary uppercase tracking-wider">Country *</Label>
          <div className="relative">
            <Globe className="w-4 h-4 absolute left-3 top-3.5 text-muted-foreground" />
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full pl-9 h-11 rounded-xl bg-secondary/30 border border-black/10 text-xs font-medium focus:border-accent focus:outline-none"
              required
            >
              <option value="United Kingdom">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="USA">USA</option>
              <option value="Australia">Australia</option>
              <option value="India">India</option>
              <option value="Other Global">Other Global</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 p-3 bg-accent/10 border border-accent/20 rounded-xl text-[11px] text-primary/80 font-medium">
        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
        <span>Verified registration required for Lexocrates Workspace access.</span>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-montserrat font-black text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
      >
        {loading ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Verifying &amp; Creating User...</span>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <span>Register Account &amp; Access Dashboard</span>
            <ArrowRight className="w-4 h-4 text-accent" />
          </div>
        )}
      </Button>

      {/* Already have an account Sign In link */}
      <div className="pt-3 border-t border-black/5 text-center">
        <button
          type="button"
          onClick={handleSignInClick}
          className="text-xs text-primary/80 hover:text-accent font-bold inline-flex items-center gap-1.5 transition-colors"
        >
          <LogIn className="w-3.5 h-3.5 text-accent" />
          <span>Already have a Workspace account? Sign In</span>
        </button>
      </div>
    </form>
  );
}
