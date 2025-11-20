
import { Cta } from '@/components/sections/cta';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FileText } from 'lucide-react';
import Image from 'next/image';

export default function TermsAndConditionsPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-services');

  return (
    <main className="bg-background">
      <section className="relative text-white pt-32 pb-12 sm:pt-36 sm:pb-16">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                priority
                data-ai-hint={heroImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <FileText className="h-16 w-16 mx-auto text-accent mb-4" />
            <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl font-bold">Terms & Conditions</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-4xl mx-auto text-foreground/80">
            <h2>1. Introduction</h2>
            <p>Welcome to Lexocrates ("Company", "we", "our", "us"). These Terms and Conditions govern your use of our website located at https://lexocrates.vercel.app/ (the "Website"). By accessing or using our Website, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, then you may not access the Website.</p>

            <h2>2. Intellectual Property Rights</h2>
            <p>Other than the content you own, under these Terms, Lexocrates and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material contained on this Website.</p>

            <h2>3. User Responsibilities</h2>
            <p>You are responsible for your use of the Website. You agree not to use the Website for any unlawful purpose or in any way that could harm, disable, overburden, or impair the Website. Prohibited activities include, but are not limited to:</p>
            <ul>
                <li>Harassing, abusing, or harming another person.</li>
                <li>Using the Website to transmit any computer viruses, worms, defects, Trojan horses, or other items of a destructive nature.</li>
                <li>Violating any applicable laws or regulations.</li>
            </ul>

            <h2>4. Disclaimers</h2>
            <p>This Website is provided "as is," with all faults, and Lexocrates expresses no representations or warranties of any kind related to this Website or the materials contained on this Website. The information provided on the Website is for general informational purposes only and does not constitute legal advice. You should not rely upon the material or information on the Website as a basis for making any business, legal or any other decisions.</p>

            <h2>5. Limitation of Liability</h2>
            <p>In no event shall Lexocrates, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website, whether such liability is under contract. Lexocrates, including its officers, directors, and employees, shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Website.</p>

            <h2>6. Indemnification</h2>
            <p>You hereby agree to indemnify to the fullest extent Lexocrates from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these Terms.</p>

            <h2>7. Governing Law & Jurisdiction</h2>
            <p>These Terms will be governed by and interpreted in accordance with the laws of India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Jaipur, Rajasthan for the resolution of any disputes.</p>

            <h2>8. Changes to These Terms</h2>
            <p>We reserve the right to modify these Terms and Conditions at any time. We will notify you of any changes by posting the new Terms and Conditions on this page. You are advised to review this page periodically for any changes. Changes are effective when they are posted on this page.</p>

            <h2>9. Contact Us</h2>
            <p>If you have any questions about these Terms and Conditions, please contact us by visiting the contact page on our website.</p>
          </div>
        </div>
      </section>

      <Cta />
    </main>
  );
}
