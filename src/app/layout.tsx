
'use client';

import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { PageTransition } from '@/components/animations/page-transition';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <title>Lexocrates</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@700&family=Open+Sans:wght@400;600&family=Roboto:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-opensans antialiased bg-gray-100">
        <Header />
        <PageTransition key={pathname}>
            <div className="bg-white shadow-2xl">
                {children}
            </div>
        </PageTransition>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
