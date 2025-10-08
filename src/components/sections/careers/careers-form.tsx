
'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { SlideIn } from "@/components/animations/slide-in";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  position: z.string().min(1, { message: "Please select a position." }),
  resume: z.any().refine(files => files?.length > 0, 'Resume is required.'),
  message: z.string().optional(),
});

const positions = [
  'Senior Legal Researcher',
  'Contract Management Specialist',
  'Compliance Analyst (GDPR)',
  'E-Discovery Project Manager'
];

export function CareersForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      position: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Here you would typically handle the form submission, e.g., by sending data to a backend API.
    // For this example, we'll just simulate a successful submission.
    console.log(values);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We will be in touch shortly.",
    });
    form.reset();
  }

  return (
    <section id="application-form" className="bg-secondary py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SlideIn className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Apply Now</h2>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/80">
            Ready to join our team? Fill out the form below to start your journey with Lexocrates.
          </p>
        </SlideIn>

        <div className="max-w-4xl mx-auto bg-background p-8 md:p-12">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john.doe@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Position Applied For</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a position" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {positions.map(pos => (
                          <SelectItem key={pos} value={pos}>{pos}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="resume"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Upload Resume</FormLabel>
                        <FormControl>
                            <Input 
                                type="file" 
                                accept=".pdf,.doc,.docx" 
                                onChange={(e) => field.onChange(e.target.files)}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cover Letter / Message (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us a little bit about yourself"
                        className="resize-none"
                        rows={6}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full">
                Submit Application
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
