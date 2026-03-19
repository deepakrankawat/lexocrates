
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
});

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['400', '700', '900'],
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700'],
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lexocrates.vercel.app'),
  title: 'Lexocrates | Expert Legal Process Outsourcing',
  description:
    'Lexocrates provides high-quality, cost-effective legal process outsourcing (LPO) services to law firms and corporations in the US, UK, and Canada.',
  keywords: [
    'Legal Process Outsourcing',
    'LPO',
    'Legal Outsourcing India',
    'Contract Management',
    'Legal Research',
    'Document Review',
    'Compliance Services',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className="!scroll-smooth">
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
