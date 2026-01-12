
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
import { Loader2, CheckCircle } from 'lucide-react';

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
        <div className="flex flex-col items-center justify-center h-full text-center bg-secondary p-8 md:p-12 rounded-lg shadow-lg">
            <CheckCircle className="h-20 w-20 text-green-500 mb-6" />
            <h2 className="font-roboto text-3xl font-medium text-primary mb-3">Form Submitted Successfully!</h2>
            <p className="text-foreground/80 max-w-md mx-auto">
                Thank you for your message. A confirmation email has been sent to you. We will get back to you shortly.
            </p>
        </div>
    );
  }

  const FormField = ({ name, children }: { name: keyof FormValues, children: React.ReactNode }) => (
    <div className="space-y-2">
        {children}
        {errors[name] && (
            <p className="text-sm font-medium text-destructive">{errors[name]?.message}</p>
        )}
    </div>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-secondary p-8 rounded-lg shadow-lg">
        <div className="text-center mb-8">
            <p className="font-lato font-bold text-accent uppercase tracking-wider">Get In Touch</p>
            <h2 className="mt-4 font-lato text-4xl md:text-5xl font-bold text-primary">Send Us a Message</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField name="fullName">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" placeholder="John Doe" {...register('fullName')} />
            </FormField>
            <FormField name="email">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" {...register('email')} />
            </FormField>
            <FormField name="phone">
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input id="phone" placeholder="+1 (555) 123-4567" {...register('phone')} />
            </FormField>
            <FormField name="company">
                <Label htmlFor="company">Company Name (Optional)</Label>
                <Input id="company" placeholder="Acme Inc." {...register('company')} />
            </FormField>
            <div className="md:col-span-2">
                <FormField name="subject">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Inquiry about..." {...register('subject')} />
                </FormField>
            </div>
            <div className="md:col-span-2">
                <FormField name="message">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message..." {...register('message')} rows={6} />
                </FormField>
            </div>
        </div>

        <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-montserrat font-bold" disabled={isLoading}>
            {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : 'Send Message'}
        </Button>
    </form>
  );
}
