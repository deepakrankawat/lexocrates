import { Metadata } from 'next';
import { RegisterAuthContainer } from '@/components/auth/register-auth-container';
import { Scale } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/ui/logo';

export const metadata: Metadata = {
  title: 'Client Portal | Lexocrates Legal Workspace',
  description: 'Access your Lexocrates Client Workspace account or sign up to manage legal research, contract drafting, and litigation matters.',
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Background Architectural Design */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(184,134,11,0.15)_0%,transparent_60%)]" />
        <div className="absolute top-1/4 right-1/4 opacity-[0.05]">
          <Scale size={450} strokeWidth={0.5} color="white" />
        </div>
      </div>

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden relative z-10 border border-white/20 my-8">
        {/* Header */}
        <div className="bg-slate-900 p-8 text-white text-center border-b border-white/10 relative">
          <Link href="/" className="inline-block mb-4 hover:scale-105 transition-transform">
            <Logo variant="light" className="h-10 w-auto mx-auto" />
          </Link>
          <h1 className="font-montserrat text-2xl font-black text-white">Client Portal Access</h1>
          <p className="text-xs text-white/70 font-medium mt-1">
            Sign up or sign in to your Lexocrates Client Workspace.
          </p>
        </div>

        {/* Tabbed Auth Container (Sign Up & Sign In) */}
        <div className="p-6 sm:p-8">
          <RegisterAuthContainer />
        </div>
      </div>
    </div>
  );
}
