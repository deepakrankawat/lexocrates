import { NextRequest, NextResponse } from 'next/server';
import { getPilotLimit } from '@/data/pilot-config';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface EstimateParams {
  serviceType: string;
  jurisdiction: string;
  pageCount: number;
  urgency: 'standard' | 'expedited';
  currency: 'USD' | 'CAD' | 'GBP';
  notes?: string;
}

const SERVICE_RATES: Record<string, { basePageRateUSD: number; name: string; standardTurnaround: string }> = {
  'Litigation Support': {
    basePageRateUSD: 28,
    name: 'Litigation Support',
    standardTurnaround: '3–5 Business Days',
  },
  'Contract Review': {
    basePageRateUSD: 24,
    name: 'Contract Review',
    standardTurnaround: '3–5 Business Days',
  },
  'Legal Research & Writing': {
    basePageRateUSD: 26,
    name: 'Legal Research & Writing',
    standardTurnaround: '3–5 Business Days',
  },
  'eDiscovery & Document Review': {
    basePageRateUSD: 18,
    name: 'eDiscovery & Document Review',
    standardTurnaround: '3–5 Business Days',
  },
  'Contract Lifecycle Management (CLM)': {
    basePageRateUSD: 25,
    name: 'Contract Lifecycle Management (CLM)',
    standardTurnaround: '3–5 Business Days',
  },
  'Compliance & Regulatory Support': {
    basePageRateUSD: 28,
    name: 'Compliance & Regulatory Support',
    standardTurnaround: '3–5 Business Days',
  },
  'Paralegal & Virtual Legal Assistance': {
    basePageRateUSD: 20,
    name: 'Paralegal & Virtual Legal Assistance',
    standardTurnaround: '3–5 Business Days',
  },
  'Legal Operations Support': {
    basePageRateUSD: 25,
    name: 'Legal Operations Support',
    standardTurnaround: '3–5 Business Days',
  },
  // Legacy aliases
  'litigation-brief': { basePageRateUSD: 28, name: 'Litigation Support', standardTurnaround: '3–5 Business Days' },
  'contract-review': { basePageRateUSD: 24, name: 'Contract Review', standardTurnaround: '3–5 Business Days' },
  'legal-research': { basePageRateUSD: 26, name: 'Legal Research & Writing', standardTurnaround: '3–5 Business Days' },
  'ediscovery': { basePageRateUSD: 18, name: 'eDiscovery & Document Review', standardTurnaround: '3–5 Business Days' },
};

const CURRENCY_MULTIPLIERS: Record<string, { rate: number; symbol: string }> = {
  USD: { rate: 1.0, symbol: '$' },
  CAD: { rate: 1.38, symbol: 'CA$' },
  GBP: { rate: 0.79, symbol: '£' },
};

function calculateFallbackEstimate(params: EstimateParams) {
  const service = SERVICE_RATES[params.serviceType] || SERVICE_RATES['Litigation Support'];
  const currencyInfo = CURRENCY_MULTIPLIERS[params.currency] || CURRENCY_MULTIPLIERS['CAD'];
  const thresholdObj = getPilotLimit(params.currency);

  const pages = Math.max(1, Math.min(params.pageCount || 10, 500));
  const urgencyMultiplier =
    params.urgency === 'expedited'
      ? 1.25
      : 1.0;

  // Volume discount tiers for larger matters
  let volumeDiscount = 1.0;
  if (pages > 50) volumeDiscount = 0.85;
  else if (pages > 20) volumeDiscount = 0.92;

  // Document pricing calculation with flexible floor for trial scopes
  const calculatedUSD = pages * service.basePageRateUSD * urgencyMultiplier * volumeDiscount;
  const basePriceUSD = Math.max(25, Math.round(calculatedUSD));
  const finalPrice = Math.round(basePriceUSD * currencyInfo.rate);

  // Compute CAD equivalent and currency trial qualification (CA$200 / US$150 / £120)
  const usdToCad = CURRENCY_MULTIPLIERS['CAD'].rate;
  const finalPriceCad = params.currency === 'CAD'
    ? finalPrice
    : Math.round(basePriceUSD * usdToCad);
  const isTrialEligible = finalPrice <= thresholdObj.amount;

  const turnaround =
    params.urgency === 'expedited'
      ? '2–3 Business Days (Subject to Confirmation)'
      : '3–5 Business Days (Standard)';

  const complexity = pages > 30 ? 'Complex Multi-Issue' : pages > 12 ? 'Moderate' : 'Standard';
  const estimatedHours = Number((pages * 0.45 * (urgencyMultiplier > 1 ? 0.9 : 1)).toFixed(1));

  return {
    success: true,
    source: 'estimator_engine',
    estimateId: `EST-LEX-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
    serviceType: service.name,
    jurisdiction: params.jurisdiction,
    currency: params.currency,
    currencySymbol: currencyInfo.symbol,
    pageCount: pages,
    wordCount: pages * 280, // Approx 280 words/page legal standard
    estimatedHours: Math.max(1.5, estimatedHours),
    estimatedPrice: finalPrice,
    finalPriceCad,
    isTrialEligible,
    isPilotEligible: isTrialEligible,
    pilotValueLimit: thresholdObj.formatted,
    pilotValueLimitAmount: thresholdObj.amount,
    trialLimitAmount: thresholdObj.amount,
    trialLimitFormatted: thresholdObj.formatted,
    trialLimitCad: 200,
    priceAmount: `${currencyInfo.symbol}${finalPrice.toLocaleString()}`,
    turnaround,
    complexity,
    oversightTier: 'Senior Advocate Review + Multi-Tier QA',
    summary: `${service.name} scope for ${pages} pages with ${turnaround.toLowerCase()} delivery. Timeline confirmed prior to commencement.`,
  };
}

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || '';
    const n8nWebhookUrl = process.env.N8N_ESTIMATOR_WEBHOOK_URL;

    // Case 1: FormData (File Upload with or without metadata)
    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData();
      const file = formData.get('file') as File | null;
      const rawService = (formData.get('service') as string) || (formData.get('serviceType') as string) || 'Litigation Support';
      const email = (formData.get('email') as string) || '';
      const clientReference = (formData.get('client_reference') as string) || (formData.get('fullName') as string) || '';
      const turnaround = (formData.get('turnaround') as string) || 'Standard (3-5 Business Days)';
      const urgency: 'standard' | 'expedited' =
        turnaround.includes('Priority') || turnaround.includes('expedited')
          ? 'expedited'
          : 'standard';
      const jurisdiction = (formData.get('jurisdiction') as string) || 'US';
      const currency = ((formData.get('currency') as string) || 'CAD') as 'USD' | 'CAD' | 'GBP';

      // Forward to n8n if webhook URL is configured and a file is present
      if (n8nWebhookUrl && file) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 35000);

          const n8nFormData = new FormData();
          n8nFormData.append('file', file, file.name);
          n8nFormData.append('service', rawService);
          n8nFormData.append('email', email);
          n8nFormData.append('turnaround', turnaround);
          if (clientReference) {
            n8nFormData.append('client_reference', clientReference);
          }

          const n8nResponse = await fetch(n8nWebhookUrl, {
            method: 'POST',
            body: n8nFormData,
            signal: controller.signal,
          });

          clearTimeout(timeoutId);

          if (n8nResponse.ok) {
            const n8nData = await n8nResponse.json();

            if (n8nData.status === 'success') {
              const usdToCad = Number(n8nData.usd_to_cad) || 1.38;
              const n8nFinalPriceCad = Number(n8nData.final_price_cad) || 0;

              // Direct estimate directly from n8n webhook
              let finalPrice = n8nFinalPriceCad;
              let priceAmountFormatted = n8nData.price_amount || `CA$${n8nFinalPriceCad} CAD`;

              if (currency === 'USD') {
                finalPrice = Math.max(1, Math.round(n8nFinalPriceCad / usdToCad));
                priceAmountFormatted = `$${finalPrice.toLocaleString()}`;
              } else if (currency === 'GBP') {
                finalPrice = Math.max(1, Math.round((n8nFinalPriceCad / usdToCad) * 0.79));
                priceAmountFormatted = `£${finalPrice.toLocaleString()}`;
              } else {
                finalPrice = n8nFinalPriceCad;
                const rawClean = n8nData.price_amount
                  ? (n8nData.price_amount.includes('CA$') ? n8nData.price_amount : n8nData.price_amount.replace('$', 'CA$'))
                  : `CA$${finalPrice.toLocaleString()}`;
                priceAmountFormatted = rawClean.replace(/\s*(CAD|USD|GBP)/gi, '').trim();
              }

              const currencyInfo = CURRENCY_MULTIPLIERS[currency] || CURRENCY_MULTIPLIERS['CAD'];
              const thresholdObj = getPilotLimit(currency);
              const isTrialEligible = finalPrice <= thresholdObj.amount;

              return NextResponse.json({
                success: true,
                source: 'n8n',
                estimateId: n8nData.estimate_id,
                serviceType: n8nData.service || n8nData.service_text || rawService,
                jurisdiction,
                currency,
                currencySymbol: currencyInfo.symbol,
                pageCount: n8nData.pages || 1,
                estimatedHours: n8nData.estimated_hours,
                estimatedPrice: finalPrice,
                rawPriceCad: n8nData.raw_price_cad,
                finalPriceCad: n8nFinalPriceCad,
                isTrialEligible,
                isPilotEligible: isTrialEligible,
                pilotValueLimit: thresholdObj.formatted,
                pilotValueLimitAmount: thresholdObj.amount,
                trialLimitAmount: thresholdObj.amount,
                trialLimitFormatted: thresholdObj.formatted,
                trialLimitCad: 200,
                priceAmount: priceAmountFormatted,
                turnaround: n8nData.turnaround || n8nData.turnaround_text,
                turnaroundMultiplier: n8nData.turnaround_multiplier,
                volumeText: n8nData.volume_text,
                rateText: n8nData.rate_text,
                fixedRateCad: n8nData.fixed_rate_cad,
                fixedRateUsd: n8nData.fixed_rate_usd,
                fxText: n8nData.fx_text,
                pageCountSource: n8nData.page_count_source,
                calculationText: n8nData.calculation_text,
                roundingRule: n8nData.rounding_rule,
                fileName: file.name,
                fileSizeKb: Math.round(file.size / 1024),
              });
            } else if (n8nData.error_message || n8nData.status === 'error') {
              return NextResponse.json({
                success: false,
                error: n8nData.error_message || 'Could not calculate estimate from n8n pipeline.',
              }, { status: 400 });
            }
          }
        } catch (n8nErr) {
          console.warn('[n8n Webhook Error, falling back to local estimator]:', n8nErr);
        }
      }

      // Fallback: If n8n is not set or failed, approximate page count from input or file size
      let approxPages = Number(formData.get('pageCount')) || 10;
      if (file && !formData.get('pageCount')) {
        // Average PDF page is ~80-120 KB
        approxPages = Math.max(1, Math.min(Math.round(file.size / (95 * 1024)), 100));
      }

      const estimate = calculateFallbackEstimate({
        serviceType: rawService,
        jurisdiction,
        pageCount: approxPages,
        urgency,
        currency,
      });

      return NextResponse.json({
        ...estimate,
        fileName: file ? file.name : undefined,
        fileSizeKb: file ? Math.round(file.size / 1024) : undefined,
        notice: n8nWebhookUrl
          ? 'Estimated via Lextimator™ AI-powered legal work estimation engine (n8n pipeline fallback).'
          : 'Estimated via Lextimator™ AI-powered legal work estimation engine.',
      });
    }

    // Case 2: JSON Payload (Manual Sliders & Selection)
    let body: Record<string, any> = {};
    try {
      body = await req.json();
    } catch {
      body = {};
    }

    const serviceType = body.serviceType || 'litigation-brief';
    const jurisdiction = body.jurisdiction || 'US';
    const pageCount = Number(body.pageCount) || 12;
    const urgency = (body.urgency || 'standard') as 'standard' | 'expedited';
    const currency = (body.currency || 'USD') as 'USD' | 'CAD' | 'GBP';

    // If n8n webhook URL is configured, forward manual brief data
    if (n8nWebhookUrl) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000);

        const n8nResponse = await fetch(n8nWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            mode: 'manual',
            serviceType,
            jurisdiction,
            pageCount,
            urgency,
            currency,
            notes: body.notes,
          }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (n8nResponse.ok) {
          const n8nData = await n8nResponse.json();
          return NextResponse.json({
            success: true,
            source: 'n8n',
            ...n8nData,
          });
        } else {
          console.warn(
            `[n8n Webhook returned HTTP ${n8nResponse.status}, falling back to local estimator]`
          );
        }
      } catch (n8nErr) {
        console.warn('[n8n Webhook Error, falling back to local estimator]:', n8nErr);
      }
    }

    // Standard high-fidelity calculation
    const estimate = calculateFallbackEstimate({
      serviceType,
      jurisdiction,
      pageCount,
      urgency,
      currency,
      notes: body.notes,
    });

    return NextResponse.json(estimate);
  } catch (error: unknown) {
    console.error('[Matter Estimator API Exception]:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to calculate estimate',
      },
      { status: 500 }
    );
  }
}
