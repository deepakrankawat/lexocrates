import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Lexocrates AI Legal Solutions',
  description: 'Get in touch with Lexocrates to discover how our AI-powered legal process outsourcing (LPO) can scale your firm\'s efficiency and reduce operational costs.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
