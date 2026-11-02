import type { Metadata } from 'next';

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lexocrates.com').replace(/\/+$/, '');

type MetaInput = {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  keywords?: string[];
};

/**
 * Shared helper for consistent Metadata API usage across pages.
 * Guarantees fully-qualified canonical and OpenGraph URLs for search engines.
 */
export function buildMeta({ title, description, canonical, ogImage, keywords }: MetaInput): Metadata {
  const absoluteCanonical = canonical.startsWith('http')
    ? canonical
    : `${SITE_URL}${canonical.startsWith('/') ? '' : '/'}${canonical}`;

  const image = ogImage ?? '/images/og-image.jpg';
  const absoluteImage = image.startsWith('http')
    ? image
    : `${SITE_URL}${image.startsWith('/') ? '' : '/'}${image}`;

  const keywordList =
    keywords ??
    [
      title,
      'legal process outsourcing',
      'AI contract review',
      'ediscovery automation',
      'outsourced paralegal services',
    ];

  return {
    title,
    description,
    keywords: keywordList,
    alternates: { canonical: absoluteCanonical },
    openGraph: {
      title,
      description,
      url: absoluteCanonical,
      siteName: 'Lexocrates',
      images: [{ url: absoluteImage, width: 1200, height: 630, alt: title }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
