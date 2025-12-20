
import { Cta } from '@/components/sections/cta';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Cookie } from 'lucide-react';
import Image from 'next/image';

export default function CookiesPolicyPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-services');

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
        <div className="mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <Cookie className="h-16 w-16 mx-auto text-accent mb-4" />
            <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl font-bold">Cookies Policy</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-4xl mx-auto text-foreground/80">
            <h2>1. What Are Cookies?</h2>
            <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>

            <h2>2. How We Use Cookies</h2>
            <p>We use cookies for several purposes. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Website. We use cookies for the following purposes:</p>
            <ul>
                <li><strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.</li>
                <li><strong>Performance and Analytics Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are.</li>
                <li><strong>Functionality Cookies:</strong> These cookies are used to recognize you when you return to our Website. This enables us to personalize our content for you and remember your preferences.</li>
            </ul>

            <h2>3. Your Choices Regarding Cookies</h2>
            <p>You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your web browser. Most browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you.</p>
            
            <h2>4. Changes to This Cookies Policy</h2>
            <p>We may update this Cookies Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookies Policy regularly to stay informed about our use of cookies and related technologies.</p>

            <h2>5. Contact Us</h2>
            <p>If you have any questions about our use of cookies or other technologies, please email us through our website's contact form.</p>
          </div>
        </div>
      </section>

      <Cta />
    </main>
  );
}
