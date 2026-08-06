import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Multi-Currency LexPack Bundle Matrix (Amounts in Cents / Pence)
export const PRICING_TIERS: Record<
  string,
  {
    name: string;
    description: string;
    prices: Record<
      'USD' | 'GBP' | 'CAD',
      { oneTime: number }
    >;
  }
> = {
  starter: {
    name: 'Starter LexPack Bundle (100 LP)',
    description: '100 LexPoints capacity for boutique law firms and AI LPO contract reviews.',
    prices: {
      USD: { oneTime: 29900 },
      GBP: { oneTime: 23900 },
      CAD: { oneTime: 39900 },
    },
  },
  'starter-bundle': {
    name: 'Starter LexPack Bundle (100 LP)',
    description: '100 LexPoints capacity for boutique law firms and AI LPO contract reviews.',
    prices: {
      USD: { oneTime: 29900 },
      GBP: { oneTime: 23900 },
      CAD: { oneTime: 39900 },
    },
  },
  growth: {
    name: 'Growth LexPack Bundle (350 LP)',
    description: '350 LexPoints capacity with 14% discount for active law firms.',
    prices: {
      USD: { oneTime: 89900 },
      GBP: { oneTime: 71900 },
      CAD: { oneTime: 119900 },
    },
  },
  'growth-bundle': {
    name: 'Growth LexPack Bundle (350 LP)',
    description: '350 LexPoints capacity with 14% discount for active law firms.',
    prices: {
      USD: { oneTime: 89900 },
      GBP: { oneTime: 71900 },
      CAD: { oneTime: 119900 },
    },
  },
  professional: {
    name: 'Professional LexPack Bundle (900 LP)',
    description: '900 LexPoints capacity with 26% discount for corporate legal departments.',
    prices: {
      USD: { oneTime: 199900 },
      GBP: { oneTime: 159900 },
      CAD: { oneTime: 269900 },
    },
  },
  'prof-bundle': {
    name: 'Professional LexPack Bundle (900 LP)',
    description: '900 LexPoints capacity with 26% discount for corporate legal departments.',
    prices: {
      USD: { oneTime: 199900 },
      GBP: { oneTime: 159900 },
      CAD: { oneTime: 269900 },
    },
  },
  business: {
    name: 'Business LexPack Bundle (2,000 LP)',
    description: '2,000 LexPoints enterprise capacity with maximum 33% discount.',
    prices: {
      USD: { oneTime: 399900 },
      GBP: { oneTime: 319900 },
      CAD: { oneTime: 539900 },
    },
  },
  'business-bundle': {
    name: 'Business LexPack Bundle (2,000 LP)',
    description: '2,000 LexPoints enterprise capacity with maximum 33% discount.',
    prices: {
      USD: { oneTime: 399900 },
      GBP: { oneTime: 319900 },
      CAD: { oneTime: 539900 },
    },
  },
  enterprise: {
    name: 'Enterprise Custom Bundle',
    description: 'Custom LexPoints volume with dedicated commercial terms and SLAs.',
    prices: {
      USD: { oneTime: 0 },
      GBP: { oneTime: 0 },
      CAD: { oneTime: 0 },
    },
  },
  'enterprise-bundle': {
    name: 'Enterprise Custom Bundle',
    description: 'Custom LexPoints volume with dedicated commercial terms and SLAs.',
    prices: {
      USD: { oneTime: 0 },
      GBP: { oneTime: 0 },
      CAD: { oneTime: 0 },
    },
  },
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { tierId, currency = 'USD', userEmail } = body;

    const normalizedTierId = tierId?.toLowerCase();

    if (normalizedTierId === 'enterprise' || normalizedTierId === 'enterprise-bundle') {
      return NextResponse.json({
        success: true,
        mode: 'contact_sales',
        url: '/contact',
        message: 'Enterprise plan features custom commercial terms. Connecting to commercial sales team...',
      });
    }

    // 1. Validate Tier
    const tier = PRICING_TIERS[normalizedTierId];
    if (!tier) {
      return NextResponse.json(
        { error: `Invalid LexPack bundle: '${tierId}'. Expected one of: starter, growth, professional, business, enterprise.` },
        { status: 400 }
      );
    }

    // 2. Validate Currency (USD, GBP, CAD)
    const validCurrency = (['USD', 'GBP', 'CAD'].includes(currency.toUpperCase())
      ? currency.toUpperCase()
      : 'USD') as 'USD' | 'GBP' | 'CAD';

    // 3. Determine One-Time Price Amount
    const amount = tier.prices[validCurrency].oneTime;

    const currencySymbolMap: Record<string, string> = {
      USD: '$',
      GBP: '£',
      CAD: 'CA$',
    };

    const formattedAmount = `${currencySymbolMap[validCurrency]}${(amount / 100).toLocaleString()}`;

    // 4. Handle Stripe Checkout API Session Creation
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    const origin = req.headers.get('origin') || 'https://www.lexocrates.com';
    const successUrl = `${origin}/pricing?checkout=success&session_id={CHECKOUT_SESSION_ID}&tier=${tierId}&currency=${validCurrency}`;
    const cancelUrl = `${origin}/pricing?checkout=cancelled&tier=${tierId}`;

    if (!stripeSecretKey) {
      return NextResponse.json({
        success: true,
        mode: 'test_demo',
        url: successUrl.replace('{CHECKOUT_SESSION_ID}', 'demo_session_id_12345'),
        message: `Stripe Test Checkout Mode: Created simulated session for ${tier.name} (${formattedAmount} One-Time).`,
      });
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2025-02-24.acacia' as any,
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: userEmail || undefined,
      line_items: [
        {
          price_data: {
            currency: validCurrency.toLowerCase(),
            product_data: {
              name: `${tier.name} (${validCurrency})`,
              description: `${tier.description} - Pay-as-you-go capacity, points never expire.`,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        tierId,
        currency: validCurrency,
        billingCycle: 'one-time',
      },
    });

    return NextResponse.json({
      success: true,
      url: session.url,
      sessionId: session.id,
    });
  } catch (error: any) {
    console.error('[Stripe Checkout Error]:', error);
    return NextResponse.json(
      {
        error: error?.message || 'Failed to create Stripe Checkout session. Please try again.',
      },
      { status: 500 }
    );
  }
}
