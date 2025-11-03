
'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SlideIn } from "../animations/slide-in";
import { StaggerFadeIn } from "../animations/stagger-fade-in";

const faqs = [
    {
        question: "What is legal process outsourcing (LPO)?",
        answer: "Legal process outsourcing (LPO) is the practice of a law firm or corporation obtaining legal support services from an outside law firm or legal support services company. It helps businesses reduce costs, increase efficiency, and access specialized legal expertise."
    },
    {
        question: "How do you ensure data confidentiality and security?",
        answer: "We adhere to the strictest international data security standards, including GDPR and ISO 27001. All data is encrypted, and we use secure, access-controlled systems. Our team is also bound by comprehensive non-disclosure agreements."
    },
    {
        question: "What kind of legal tasks can be outsourced?",
        answer: "A wide range of tasks can be outsourced, including document review, legal research, contract management, e-discovery, compliance support, and intellectual property services. Essentially, any legal task that does not require in-person court appearance can be outsourced."
    },
    {
        question: "How does the pricing model work?",
        answer: "We offer flexible pricing models to suit your needs, including hourly rates, fixed-fee arrangements for specific projects, and dedicated full-time equivalent (FTE) professionals. We work with you to determine the most cost-effective solution."
    },
    {
        question: "How do I get started with Lexocrates?",
        answer: "Getting started is easy. Simply fill out our contact form to schedule a free, no-obligation consultation. We'll discuss your specific needs and challenges and provide a tailored proposal outlining how we can help."
    },
];

export function Faq() {
  return (
    <section className="bg-secondary text-foreground py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SlideIn className="text-center mb-16">
          <p className="font-lato font-bold text-accent uppercase tracking-wider">FAQs</p>
          <h2 className="mt-4 font-lato text-3xl md:text-4xl font-bold text-primary">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/80">
            Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </SlideIn>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <StaggerFadeIn>
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="bg-background px-6">
                        <AccordionTrigger className="text-left font-roboto text-xl text-primary hover:no-underline">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-foreground/80">
                        {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </StaggerFadeIn>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
