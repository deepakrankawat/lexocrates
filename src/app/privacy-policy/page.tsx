

import { Cta } from '@/components/sections/cta';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function PrivacyPolicyPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-home');

  return (
    <main className="bg-background">
      <section className="relative text-white pt-32 pb-12 sm:pt-36 sm:pb-16">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={heroImage.width}
                height={heroImage.height}
                sizes="100vw"
                className="object-cover absolute inset-0 w-full h-full"
                priority
                data-ai-hint={heroImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-full laptop:max-w-[1200px] fhd:max-w-[1400px] qhd:max-w-[1600px] uhd:max-w-[1800px] relative text-center">
            <ShieldCheck className="h-16 w-16 mx-auto text-accent mb-4" />
            <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl font-bold">Privacy Policy</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
        </div>
      </section>

      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-full laptop:max-w-[1200px] fhd:max-w-[1400px] qhd:max-w-[1600px] uhd:max-w-[1800px]">
        <section className="py-12 sm:py-16">
          <div className="prose prose-lg max-w-4xl mx-auto text-foreground/80">
            <h2>1. Introduction</h2>
            <p>Lexocrates ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://lexocrates.vercel.app/. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>

            <h2>2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <h3>Personal Data</h3>
            <p>Personally identifiable information, such as your name, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.</p>
            <h3>Derivative Data</h3>
            <p>Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</p>

            <h2>3. Use of Your Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
            <ul>
              <li>Create and manage your account.</li>
              <li>Email you regarding your account or order.</li>
              <li>Respond to customer service requests.</li>
              <li>Analyze usage and trends to improve your experience with the Site.</li>
              <li>Send you our newsletter, promotional materials, and other information about our services.</li>
            </ul>

            <h2>4. Disclosure of Your Information</h2>
            <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
            <ul>
              <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
              <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including data analysis, email delivery, hosting services, and customer service.</li>
            </ul>

            <h2>5. Security of Your Information</h2>
            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

            <h2>6. Policy for Children</h2>
            <p>We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.</p>

            <h2>7. Your Privacy Rights</h2>
            <p>Depending on your location, you may have rights under data protection laws, such as GDPR or CCPA. These may include the right to access, correct, or delete your personal information. To exercise these rights, please contact us.</p>
            
            <h2>8. Contact Us</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us through the contact form on our website.</p>
          </div>
        </section>
      </div>

    </main>
  );
}
