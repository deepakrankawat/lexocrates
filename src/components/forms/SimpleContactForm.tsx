'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Loader2,
  SendHorizonal,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import {
  contactLeadSchema,
  type ContactLeadValues,
} from '@/lib/contact-schema';

const inputClassName =
  'h-12 rounded-xl border-black/10 bg-white px-4 font-semibold text-primary placeholder:text-black/30 focus:border-accent/50 focus:ring-accent/20 sm:h-14 sm:rounded-2xl sm:px-5';

function FieldError({ message }: { message?: string }) {
  if (!message) return null;

  return (
    <p className="ml-2 text-[9px] font-black uppercase tracking-widest text-destructive">
      {message}
    </p>
  );
}

function FieldLabel({
  htmlFor,
  children,
  optional = false,
}: {
  htmlFor: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <Label
      htmlFor={htmlFor}
      className="ml-2 text-[10px] font-black uppercase tracking-[0.18em] text-primary/75"
    >
      {children}
      {optional ? (
        <span className="ml-2 normal-case tracking-normal text-foreground/35">
          optional
        </span>
      ) : (
        <span className="ml-1 text-accent">*</span>
      )}
    </Label>
  );
}

export function SimpleContactForm() {
  const { toast } = useToast();
  const [leadReference, setLeadReference] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactLeadValues>({
    resolver: zodResolver(contactLeadSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
      faxNumber: '',
    },
  });

  async function onSubmit(values: ContactLeadValues) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        if (result.fieldErrors) {
          for (const [field, messages] of Object.entries(
            result.fieldErrors as Record<string, string[]>
          )) {
            if (messages?.[0]) {
              setError(field as keyof ContactLeadValues, {
                type: 'server',
                message: messages[0],
              });
            }
          }
        }

        toast({
          variant: 'destructive',
          title: 'Message not submitted',
          description:
            result.message || 'Please review the form and try again.',
        });
        return;
      }

      setLeadReference(result.reference || 'Enquiry recorded');
      reset();
    } catch {
      toast({
        variant: 'destructive',
        title: 'Connection error',
        description:
          'We could not send your message. Please try again or email sales@lexocrates.com.',
      });
    }
  }

  if (leadReference) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex min-h-[520px] flex-col items-center justify-center rounded-[2.5rem] border border-black/5 bg-white p-8 text-center shadow-2xl sm:p-12"
      >
        <div className="mb-8 rounded-full bg-emerald-100 p-6">
          <CheckCircle2 className="h-14 w-14 text-emerald-600" />
        </div>
        <p className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-accent">
          Message received
        </p>
        <h2 className="mb-4 font-montserrat text-3xl font-black tracking-tight text-primary">
          Thank you for contacting us
        </h2>
        <p className="max-w-md font-medium leading-relaxed text-foreground/60">
          Your enquiry has been added to our sales pipeline. Our team will
          contact you within one business day.
        </p>
        <div className="mt-8 rounded-2xl bg-secondary/50 px-6 py-4">
          <p className="text-[9px] font-black uppercase tracking-widest text-foreground/40">
            Lead reference
          </p>
          <p className="mt-1 font-mono text-sm font-bold text-primary">
            {leadReference}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setLeadReference(null)}
          className="mt-9 text-[10px] font-black uppercase tracking-[0.25em] text-accent hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      id="lpo-enquiry-form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-7"
    >
      <div>
        <div className="mb-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-accent">
          <ShieldCheck className="h-4 w-4" />
          Contact us
        </div>
        <h2 className="font-montserrat text-3xl font-black tracking-tight text-primary sm:text-4xl">
          How can we help?
        </h2>
        <p className="mt-3 text-sm font-medium leading-relaxed text-foreground/55 sm:text-base">
          Share a few details and our team will get back to you shortly.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <FieldLabel htmlFor="fullName">Full name</FieldLabel>
          <Input
            id="fullName"
            autoComplete="name"
            placeholder="John Doe"
            aria-invalid={Boolean(errors.fullName)}
            {...register('fullName')}
            className={inputClassName}
          />
          <FieldError message={errors.fullName?.message} />
        </div>

        <div className="space-y-2">
          <FieldLabel htmlFor="email">Email address</FieldLabel>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="john@example.com"
            aria-invalid={Boolean(errors.email)}
            {...register('email')}
            className={inputClassName}
          />
          <FieldError message={errors.email?.message} />
        </div>

        <div className="space-y-2">
          <FieldLabel htmlFor="phone" optional>
            Phone number
          </FieldLabel>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 (555) 000-0000"
            aria-invalid={Boolean(errors.phone)}
            {...register('phone')}
            className={inputClassName}
          />
          <FieldError message={errors.phone?.message} />
        </div>

        <div className="space-y-2">
          <FieldLabel htmlFor="company" optional>
            Company
          </FieldLabel>
          <Input
            id="company"
            autoComplete="organization"
            placeholder="Company name"
            aria-invalid={Boolean(errors.company)}
            {...register('company')}
            className={inputClassName}
          />
          <FieldError message={errors.company?.message} />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <FieldLabel htmlFor="subject">Subject</FieldLabel>
          <Input
            id="subject"
            placeholder="How can we help?"
            aria-invalid={Boolean(errors.subject)}
            {...register('subject')}
            className={inputClassName}
          />
          <FieldError message={errors.subject?.message} />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea
            id="message"
            rows={6}
            placeholder="Tell us about your requirement..."
            aria-invalid={Boolean(errors.message)}
            {...register('message')}
            className="resize-none rounded-2xl border-black/10 bg-white p-5 font-semibold leading-relaxed text-primary placeholder:text-black/30 focus:border-accent/50 focus:ring-accent/20 sm:rounded-3xl"
          />
          <FieldError message={errors.message?.message} />
        </div>
      </div>

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <Label htmlFor="faxNumber">Fax number</Label>
        <Input
          id="faxNumber"
          tabIndex={-1}
          autoComplete="off"
          {...register('faxNumber')}
        />
      </div>

      <Button
        type="submit"
        size="xl"
        disabled={isSubmitting}
        className="h-14 w-full rounded-full bg-primary font-montserrat text-xs font-black uppercase tracking-[0.3em] text-white shadow-2xl hover:bg-primary/95"
      >
        {isSubmitting ? (
          <Loader2 className="h-5 w-5 animate-spin text-accent" />
        ) : (
          <SendHorizonal className="h-5 w-5 text-accent" />
        )}
        <span>{isSubmitting ? 'Adding lead...' : 'Send message'}</span>
      </Button>
    </form>
  );
}
