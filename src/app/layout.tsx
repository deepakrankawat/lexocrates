
import type { Metadata } from 'next';
import './globals.css';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { LayoutProvider } from '@/components/layout/layout-provider';
import { Lato, Montserrat, Open_Sans, Roboto } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['700'],
});

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['400', '700'],
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700'],
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
  weight: ['400', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lexocrates.vercel.app'),
  title: 'Lexocrates | Expert Legal Process Outsourcing',
  description:
    'Lexocrates provides high-quality, cost-effective legal process outsourcing (LPO) services to law firms and corporations in the US, UK, and Canada. Specializing in contract management, legal research, and compliance.',
  keywords: [
    'Legal Process Outsourcing',
    'LPO',
    'Legal Outsourcing India',
    'Contract Management',
    'Legal Research',
    'Document Review',
    'Compliance Services',
  ],
  openGraph: {
    title: 'Lexocrates | Expert Legal Process Outsourcing',
    description:
      'Empowering legal teams with efficient, reliable, and secure outsourcing solutions from India.',
    url: 'https://www.lexocrates.com',
    siteName: 'Lexocrates',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lexocrates Logo and tagline',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lexocrates | Expert Legal Process Outsourcing',
    description:
      'Cost-effective and expert legal support for firms in the US, UK, and Canada.',
    images: ['/images/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${montserrat.variable} ${lato.variable} ${roboto.variable} ${openSans.variable} font-opensans antialiased bg-background`}
      >
        <LayoutProvider>{children}</LayoutProvider>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
