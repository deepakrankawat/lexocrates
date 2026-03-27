import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { LayoutProvider } from '@/components/layout/layout-provider';
import { Lato, Montserrat, Open_Sans, Roboto } from 'next/font/google';
import Script from 'next/script';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '700', '900'],
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['400', '700', '900'],
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700'],
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
  weight: ['400', '600', '700'],
  display: 'swap',
});

const baseUrl = 'https://lexocrates.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Lexocrates | AI-Powered Legal Process Outsourcing (LPO)',
    template: '%s | Lexocrates AI LPO',
  },
  description:
    'Lexocrates is a premier AI-powered Legal Process Outsourcing (LPO) firm. We combine elite Indian legal expertise with advanced Generative AI to provide legal research, contract drafting, and eDiscovery for law firms in the US, UK, and Canada.',
  keywords: [
    'AI Legal Process Outsourcing',
    'AI-powered LPO India',
    'Legal Tech Outsourcing',
    'AI Legal Research Services',
    'Automated Contract Management',
    'AI Document Review eDiscovery',
    'Law Firm Automation Support',
    'Offshore Legal Services',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Lexocrates',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lexocrates - Elite Legal Process Outsourcing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lexocrates | Expert Legal Process Outsourcing',
    description: 'Transforming legal workflows with elite Indian expertise and advanced technology.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  // JSON-LD Organization Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lexocrates Legal Services',
    url: baseUrl,
    logo: `${baseUrl}/images/logo-dark.svg`,
    description: 'Elite Legal Process Outsourcing firm serving law firms in Canada, US, and UK.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Floor 1, E-block, E-103, Ganpati Enclave, Sirsi Road',
      addressLocality: 'Jaipur',
      addressRegion: 'Rajasthan',
      postalCode: '302041',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'Support@lexocrates.com',
    },
  };

  return (
    <html lang="en" className="!scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${lato.variable} ${roboto.variable} ${openSans.variable} font-opensans antialiased bg-background`}
      >
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        <LayoutProvider>
          {children}
        </LayoutProvider>
        <Toaster />
      </body>
    </html>
  );
}
