import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request an LPO Consultation | Lexocrates',
  description: 'Scope legal research, litigation support, contract review, eDiscovery, compliance, or managed paralegal support with the Lexocrates legal operations team.',
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
