'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2, CheckCircle, SendHorizonal } from 'lucide-react';
import { motion } from 'framer-motion';

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(3, { message: 'Subject must be at least 3 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;

export function SimpleContactForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
        if (value) {
            formData.append(key, value);
        }
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        reset();
      } else {
        toast({
          variant: 'destructive',
          title: 'Submission Failed',
          description: result.message || 'An unknown error occurred. Please try again.',
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Submission Error',
        description: 'Could not connect to the server. Please check your internet connection and try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  if (isSubmitted) {
    return (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center h-full text-center bg-white p-10 sm:p-12 rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl border border-black/5"
        >
            <div className="bg-green-100 p-6 rounded-full mb-8">
              <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-600" />
            </div>
            <h2 className="font-montserrat text-2xl sm:text-3xl font-black text-primary mb-4 tracking-tight">Message Received</h2>
            <p className="text-foreground/60 max-w-md mx-auto font-black leading-relaxed">
                Thank you for reaching out. Our strategic response team has been notified and will contact you within 24 business hours.
            </p>
            <button onClick={() => setIsSubmitted(false)} className="mt-8 text-accent font-black uppercase tracking-[0.3em] text-[10px] hover:underline transition-all">
              Send Another Message
            </button>
        </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <div className="space-y-2">
                <Label htmlFor="fullName" className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/80 ml-2 sm:ml-4">Full Name</Label>
                <Input 
                  id="fullName" 
                  placeholder="John Doe" 
                  {...register('fullName')} 
                  className="h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-white border-black/10 focus:border-accent/50 focus:ring-accent/20 transition-all px-4 sm:px-6 font-bold text-primary placeholder:text-black/30"
                />
                {errors.fullName && <p className="text-[9px] font-black text-destructive ml-2 uppercase tracking-widest">{errors.fullName.message}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/80 ml-2 sm:ml-4">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  {...register('email')} 
                  className="h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-white border-black/10 focus:border-accent/50 focus:ring-accent/20 transition-all px-4 sm:px-6 font-bold text-primary placeholder:text-black/30"
                />
                {errors.email && <p className="text-[9px] font-black text-destructive ml-2 uppercase tracking-widest">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="phone" className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/80 ml-2 sm:ml-4">Phone Number</Label>
                <Input 
                  id="phone" 
                  placeholder="+1 (555) 000-0000" 
                  {...register('phone')} 
                  className="h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-white border-black/10 focus:border-accent/50 focus:ring-accent/20 transition-all px-4 sm:px-6 font-bold text-primary placeholder:text-black/30"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="company" className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/80 ml-2 sm:ml-4">Company</Label>
                <Input 
                  id="company" 
                  placeholder="Lex Corp" 
                  {...register('company')} 
                  className="h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-white border-black/10 focus:border-accent/50 focus:ring-accent/20 transition-all px-4 sm:px-6 font-bold text-primary placeholder:text-black/30"
                />
            </div>

            <div className="sm:col-span-2 space-y-2">
                <Label htmlFor="subject" className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/80 ml-2 sm:ml-4">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="How can we help?" 
                  {...register('subject')} 
                  className="h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-white border-black/10 focus:border-accent/50 focus:ring-accent/20 transition-all px-4 sm:px-6 font-bold text-primary placeholder:text-black/30"
                />
                {errors.subject && <p className="text-[9px] font-black text-destructive ml-2 uppercase tracking-widest">{errors.subject.message}</p>}
            </div>

            <div className="sm:col-span-2 space-y-2">
                <Label htmlFor="message" className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/80 ml-2 sm:ml-4">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Describe your requirements..." 
                  {...register('message')} 
                  rows={6} 
                  className="rounded-2xl sm:rounded-3xl bg-white border-black/10 focus:border-accent/50 focus:ring-accent/20 transition-all p-4 sm:p-6 font-bold text-primary resize-none placeholder:text-black/30"
                />
                {errors.message && <p className="text-[9px] font-black text-destructive ml-2 uppercase tracking-widest">{errors.message.message}</p>}
            </div>
        </div>

        <div className="relative group pt-4">
          <Button 
            type="submit" 
            size="xl" 
            className="w-full h-14 bg-primary hover:bg-primary/95 text-white font-montserrat font-black text-xs uppercase tracking-[0.4em] rounded-full shadow-2xl transition-all duration-500 hover:scale-[1.02] active:scale-95 group/btn" 
            disabled={isLoading}
          >
              <div className="relative z-10 flex items-center justify-center gap-4">
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin text-accent" />
                ) : (
                  <SendHorizonal className="h-5 w-5 text-accent group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                )}
                <span>{isLoading ? 'Processing...' : 'Send Message'}</span>
              </div>
          </Button>
        </div>
    </form>
  );
}