export type CurrencyCode = 'CAD' | 'USD' | 'GBP';

export interface PilotMarketLimit {
  amount: number;
  symbol: string;
  formatted: string;
  currency: CurrencyCode;
}

/**
 * Single source of truth for Lexocrates Complimentary Pilot Engagement.
 * Allows easy reconfiguration of limits per market/currency without page redesign.
 */
export const COMPLIMENTARY_PILOT_CONFIG = {
  heading: 'Complimentary Pilot Engagement',
  subheading: 'Limited-Scope Assignment at No Cost',
  universalDescription:
    'Eligible new clients may begin with one limited-scope assignment, up to the applicable complimentary pilot value, at no charge.',
  rule: 'One complimentary pilot per client organisation, subject to Lexocrates scope approval.',
  commercialProposition: 'Lextimator™ → Complimentary Pilot Engagement → Pay Per Assignment OR LexPack™',
  limits: {
    CAD: { amount: 200, symbol: 'CA$', formatted: 'CA$200', currency: 'CAD' as CurrencyCode },
    USD: { amount: 150, symbol: '$', formatted: 'US$150', currency: 'USD' as CurrencyCode },
    GBP: { amount: 120, symbol: '£', formatted: '£120', currency: 'GBP' as CurrencyCode },
  },
};

export const TRIAL_THRESHOLDS = COMPLIMENTARY_PILOT_CONFIG.limits;

/**
 * Helper to retrieve market threshold by currency code (CAD / USD / GBP)
 */
export function getPilotLimit(currency?: string): PilotMarketLimit {
  const code = (currency || 'CAD').toUpperCase() as CurrencyCode;
  return COMPLIMENTARY_PILOT_CONFIG.limits[code] || COMPLIMENTARY_PILOT_CONFIG.limits.CAD;
}
