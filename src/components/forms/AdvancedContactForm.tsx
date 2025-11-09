'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AnimatePresence, motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Loader2, CheckCircle } from 'lucide-react';

const queryTypes = ['HR', 'Service', 'Support'] as const;

// Schemas
const baseSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }).optional().or(z.literal('')),
  queryType: z.enum(queryTypes),
  contactMethod: z.enum(['Email', 'Phone', 'WhatsApp']),
  contactTime: z.string().optional(),
  subscribeNewsletter: z.boolean().default(false),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms and privacy policy.',
  }),
});

const hrSchema = baseSchema.extend({
  positionAppliedFor: z.string().min(2, 'Position is required.'),
  resume: z.any().refine((files) => files?.length > 0, 'Resume is required.'),
  linkedinProfile: z.string().url('Please enter a valid URL.').optional().or(z.literal('')),
  expectedSalary: z.coerce.number().min(0, 'Salary must be a positive number.').optional().or(z.literal('')),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

const serviceSchema = baseSchema.extend({
  serviceType: z.enum(['Web Development', 'App Development', 'Legal Outsourcing', 'Marketing']),
  budgetRange: z.enum(['₹10k–₹25k', '₹25k–₹50k', '₹50k+']),
  projectDeadline: z.string().refine((date) => new Date(date) > new Date(), { message: 'Deadline must be in the future.' }),
  attachment: z.any().optional(),
  message: z.string().min(10, 'Description must be at least 10 characters.'),
});

const supportSchema = baseSchema.extend({
  issueCategory: z.enum(['Technical', 'Account', 'Payment', 'Other']),
  referenceId: z.string().optional(),
  screenshot: z.any().optional(),
  priorityLevel: z.enum(['Low', 'Medium', 'High']),
  message: z.string().min(10, 'Description must be at least 10 characters.'),
});

const conditionalSchema = z.discriminatedUnion('queryType', [
    hrSchema.extend({ queryType: z.literal('HR') }),
    serviceSchema.extend({ queryType: z.literal('Service') }),
    supportSchema.extend({ queryType: z.literal('Support') }),
]);


type FormValues = z.infer<typeof conditionalSchema>;

export function AdvancedContactForm() {
  const [queryType, setQueryType] = useState<typeof queryTypes[number] | undefined>();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(conditionalSchema),
    defaultValues: {
        agreeToTerms: false,
        subscribeNewsletter: false,
        contactMethod: 'Email',
    }
  });

  const watchedQueryType = watch('queryType');

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
        if (key === 'resume' || key === 'attachment' || key === 'screenshot') {
            if (value && (value as FileList).length > 0) {
                formData.append(key, (value as FileList)[0]);
            }
        } else if (value !== undefined && value !== null) {
            formData.append(key, String(value));
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
      } else {
        toast({
          variant: 'destructive',
          title: 'Submission Failed',
          description: result.message || 'An unknown error occurred.',
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Submission Error',
        description: 'Could not connect to the server. Please try again.',
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

  const fieldAnimation = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.3, ease: 'easeInOut' },
  };
  
  const FormField = ({ name, children, className }: { name: string, children: React.ReactNode, className?: string }) => (
    <div className={`space-y-2 ${className}`}>
        {children}
        {errors[name as keyof FormValues] && (
            <p className="text-sm font-medium text-destructive">{errors[name as keyof FormValues]?.message as string}</p>
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
                <Label htmlFor="fullName">Full Name*</Label>
                <Input id="fullName" placeholder="John Doe" {...register('fullName')} />
            </FormField>
            <FormField name="email">
                <Label htmlFor="email">Email Address*</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" {...register('email')} />
            </FormField>
            <FormField name="phone">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+91 12345 67890" {...register('phone')} />
            </FormField>
            <FormField name="queryType">
                <Label>Query Type*</Label>
                 <Select onValueChange={(value) => control.setValue('queryType', value as any)} defaultValue={queryType}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select a category..." />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="HR">HR / Careers</SelectItem>
                        <SelectItem value="Service">Service Inquiry</SelectItem>
                        <SelectItem value="Support">Customer Support</SelectItem>
                    </SelectContent>
                </Select>
            </FormField>
        </div>

        <AnimatePresence mode="wait">
            {watchedQueryType === 'HR' && (
                <motion.div {...fieldAnimation} className="space-y-6 border-t border-border pt-6 mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField name="positionAppliedFor">
                            <Label htmlFor="positionAppliedFor">Position Applied For*</Label>
                            <Input id="positionAppliedFor" placeholder="e.g., Senior Legal Researcher" {...register('positionAppliedFor')} />
                        </FormField>
                        <FormField name="resume">
                            <Label htmlFor="resume">Resume Upload*</Label>
                            <Input id="resume" type="file" {...register('resume')} accept=".pdf,.doc,.docx" />
                        </FormField>
                        <FormField name="linkedinProfile">
                            <Label htmlFor="linkedinProfile">LinkedIn Profile URL</Label>
                            <Input id="linkedinProfile" placeholder="https://linkedin.com/in/johndoe" {...register('linkedinProfile')} />
                        </FormField>
                         <FormField name="expectedSalary">
                            <Label htmlFor="expectedSalary">Expected Salary (₹, Annual)</Label>
                            <Input id="expectedSalary" type="number" placeholder="e.g., 800000" {...register('expectedSalary')} />
                        </FormField>
                    </div>
                     <FormField name="message">
                        <Label htmlFor="message-hr">Cover Letter / Message*</Label>
                        <Textarea id="message-hr" placeholder="Tell us why you're a great fit..." {...register('message')} rows={5} />
                    </FormField>
                </motion.div>
            )}
            
            {watchedQueryType === 'Service' && (
                <motion.div {...fieldAnimation} className="space-y-6 border-t border-border pt-6 mt-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField name="serviceType">
                            <Label>Service Type*</Label>
                             <Select onValueChange={(value) => control.setValue('serviceType', value as any)}>
                                <SelectTrigger><SelectValue placeholder="Select a service..." /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Web Development">Web Development</SelectItem>
                                    <SelectItem value="App Development">App Development</SelectItem>
                                    <SelectItem value="Legal Outsourcing">Legal Outsourcing</SelectItem>
                                    <SelectItem value="Marketing">Marketing</SelectItem>
                                </SelectContent>
                            </Select>
                        </FormField>
                        <FormField name="budgetRange">
                            <Label>Budget Range*</Label>
                             <Select onValueChange={(value) => control.setValue('budgetRange', value as any)}>
                                <SelectTrigger><SelectValue placeholder="Select your budget..." /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="₹10k–₹25k">₹10k–₹25k</SelectItem>
                                    <SelectItem value="₹25k–₹50k">₹25k–₹50k</SelectItem>
                                    <SelectItem value="₹50k+">₹50k+</SelectItem>
                                </SelectContent>
                            </Select>
                        </FormField>
                        <FormField name="projectDeadline">
                            <Label htmlFor="projectDeadline">Project Deadline*</Label>
                            <Input id="projectDeadline" type="date" {...register('projectDeadline')} />
                        </FormField>
                         <FormField name="attachment">
                            <Label htmlFor="attachment">Attachment Upload</Label>
                            <Input id="attachment" type="file" {...register('attachment')} />
                        </FormField>
                    </div>
                     <FormField name="message">
                        <Label htmlFor="message-service">Project Description*</Label>
                        <Textarea id="message-service" placeholder="Describe your project requirements..." {...register('message')} rows={5} />
                    </FormField>
                </motion.div>
            )}

            {watchedQueryType === 'Support' && (
                <motion.div {...fieldAnimation} className="space-y-6 border-t border-border pt-6 mt-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <FormField name="issueCategory">
                            <Label>Issue Category*</Label>
                             <Select onValueChange={(value) => control.setValue('issueCategory', value as any)}>
                                <SelectTrigger><SelectValue placeholder="Select an issue..." /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Technical">Technical</SelectItem>
                                    <SelectItem value="Account">Account</SelectItem>
                                    <SelectItem value="Payment">Payment</SelectItem>
                                    <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </FormField>
                         <FormField name="referenceId">
                            <Label htmlFor="referenceId">Order / Reference ID</Label>
                            <Input id="referenceId" placeholder="e.g., #12345" {...register('referenceId')} />
                        </FormField>
                         <FormField name="screenshot">
                            <Label htmlFor="screenshot">Screenshot Upload</Label>
                            <Input id="screenshot" type="file" {...register('screenshot')} accept="image/*" />
                        </FormField>
                        <FormField name="priorityLevel">
                            <Label>Priority Level*</Label>
                             <RadioGroup onValueChange={(value) => control.setValue('priorityLevel', value as any)} className="flex items-center space-x-4 pt-2">
                                <div className="flex items-center space-x-2"><RadioGroupItem value="Low" id="p-low" /><Label htmlFor="p-low">Low</Label></div>
                                <div className="flex items-center space-x-2"><RadioGroupItem value="Medium" id="p-medium" /><Label htmlFor="p-medium">Medium</Label></div>
                                <div className="flex items-center space-x-2"><RadioGroupItem value="High" id="p-high" /><Label htmlFor="p-high">High</Label></div>
                            </RadioGroup>
                        </FormField>
                    </div>
                     <FormField name="message">
                        <Label htmlFor="message-support">Issue Description*</Label>
                        <Textarea id="message-support" placeholder="Describe the issue you are facing..." {...register('message')} rows={5} />
                    </FormField>
                </motion.div>
            )}
        </AnimatePresence>

        {watchedQueryType && <div className="space-y-8 border-t border-border pt-6 mt-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField name="contactMethod">
                    <Label>Preferred Contact Method*</Label>
                    <RadioGroup onValueChange={(value) => control.setValue('contactMethod', value as any)} defaultValue="Email" className="flex items-center space-x-4 pt-2">
                        <div className="flex items-center space-x-2"><RadioGroupItem value="Email" id="c-email" /><Label htmlFor="c-email">Email</Label></div>
                        <div className="flex items-center space-x-2"><RadioGroupItem value="Phone" id="c-phone" /><Label htmlFor="c-phone">Phone</Label></div>
                        <div className="flex items-center space-x-2"><RadioGroupItem value="WhatsApp" id="c-whatsapp" /><Label htmlFor="c-whatsapp">WhatsApp</Label></div>
                    </RadioGroup>
                </FormField>
                 <FormField name="contactTime">
                    <Label htmlFor="contactTime">Best Time to Reach You</Label>
                    <Input id="contactTime" type="time" {...register('contactTime')} />
                </FormField>
            </div>
            
            <FormField name="subscribeNewsletter" className="flex flex-row items-start space-x-3 space-y-0">
                 <Checkbox id="subscribeNewsletter" {...register('subscribeNewsletter')} />
                 <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="subscribeNewsletter" className="font-normal">Subscribe to our newsletter for updates.</Label>
                </div>
            </FormField>
            <FormField name="agreeToTerms" className="flex flex-row items-start space-x-3 space-y-0">
                 <Checkbox id="agreeToTerms" {...register('agreeToTerms')} />
                <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="agreeToTerms" className="font-normal">I agree to the <a href="#" className="underline text-primary">Terms & Privacy Policy</a>.*</Label>
                </div>
            </FormField>

            {/* Placeholder for reCAPTCHA */}
            <div className="p-4 bg-gray-200 border border-gray-300 rounded-md text-center text-sm text-gray-500">
                reCAPTCHA will be displayed here.
            </div>

             <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-montserrat font-bold" disabled={isLoading}>
                {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : 'Send Message'}
            </Button>
        </div>}
    </form>
  );
}
