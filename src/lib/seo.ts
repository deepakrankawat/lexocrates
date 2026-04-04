import type { Metadata } from 'next';

type MetaInput = {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  keywords?: string[];
};

/**
 * Shared helper for consistent Metadata API usage across pages.
 */
export function buildMeta({ title, description, canonical, ogImage, keywords }: MetaInput): Metadata {
  const image = ogImage ?? '/images/og-image.jpg';
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
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Lexocrates',
      images: [{ url: image, width: 1200, height: 630 }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
