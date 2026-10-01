import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { createERPNextLead } from '@/lib/erpnext-leads';
import { getPilotLimit } from '@/data/pilot-config';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      })[character] || character
  );
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      estimateId = `EST-LEX-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
      serviceType = 'Legal Work Estimation',
      organizationName,
      organizationType = 'Law Firm',
      contactName,
      email,
      phone,
      jurisdiction = 'Canada',
      finalPriceCad = 0,
      estimatedPrice = 0,
      currency = 'CAD',
      turnaround = '3–5 Business Days',
      pageCount = 1,
      notes = '',
    } = body;

    // Validate required fields
    if (!organizationName?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Organization or Law Firm name is required.' },
        { status: 400 }
      );
    }

    if (!contactName?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Contact person / counsel name is required.' },
        { status: 400 }
      );
    }

    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'A valid work email address is required.' },
        { status: 400 }
      );
    }

    if (!phone?.trim()) {
      return NextResponse.json(
        { success: false, error: 'A valid phone / direct contact number is required.' },
        { status: 400 }
      );
    }

    // Dynamic currency validation rule from centralized pilot config
    const thresholdObj = getPilotLimit(currency);
    const priceNum = Number(estimatedPrice) || Number(finalPriceCad) || 0;

    if (priceNum > thresholdObj.amount) {
      return NextResponse.json(
        {
          success: false,
          error: `This assignment scope exceeds the ${thresholdObj.formatted} Complimentary Pilot Value Limit (Estimated: ${thresholdObj.symbol}${priceNum}). Standard Pay-Per-Assignment or LexPack capacity applies.`,
        },
        { status: 400 }
      );
    }

    // 1. Create lead in ERPNext with generic "Complimentary Pilot Value Limit" field
    try {
      await createERPNextLead({
        fullName: contactName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        company: organizationName.trim(),
        subject: `[COMPLIMENTARY PILOT - ${thresholdObj.formatted}] ${organizationName.trim()} - Ref: ${estimateId}`,
        message: [
          `=== COMPLIMENTARY PILOT ENGAGEMENT REGISTRATION ===`,
          `Organization Name: ${organizationName.trim()}`,
          `Organization Type: ${organizationType}`,
          `Lead Counsel / Contact: ${contactName.trim()}`,
          `Official Email: ${email.trim()}`,
          `Phone: ${phone.trim()}`,
          `Jurisdiction: ${jurisdiction}`,
          `Service: ${serviceType}`,
          `Estimate ID: ${estimateId}`,
          `Document Scope: ${pageCount} pages`,
          `Turnaround: ${turnaround}`,
          `Complimentary Pilot Value Limit: ${thresholdObj.formatted} ${thresholdObj.currency}`,
          `Approved Scope Cost: ${thresholdObj.symbol}0 (Valued at ${thresholdObj.symbol}${priceNum} ${thresholdObj.currency})`,
          `Governance Rule: One complimentary pilot per client organisation, subject to Lexocrates scope approval.`,
          `Client Notes: ${notes.trim() || 'No additional instructions provided'}`,
        ].join('\n'),
      });
    } catch (erpErr) {
      console.warn('[Trial Registration ERPNext warning]:', erpErr);
      // Non-fatal: continue with notification email and response
    }

    // 2. Send email notification via nodemailer if configured
    const emailUser = process.env.EMAIL_USER?.trim();
    const emailPass = process.env.EMAIL_PASS?.trim();

    if (emailUser && emailPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: emailUser,
            pass: emailPass,
          },
        });

        const htmlContent = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
            <div style="background-color: #0c2b56; padding: 18px 24px; border-radius: 8px; text-align: center;">
              <h1 style="color: #b8860b; font-size: 20px; margin: 0; text-transform: uppercase; letter-spacing: 1px;">
                🎉 Complimentary Pilot Engagement — Registration
              </h1>
              <p style="color: #ffffff; font-size: 13px; margin: 6px 0 0 0;">
                Lexocrates Legal Matter Pilot Program (${thresholdObj.formatted} Market Limit)
              </p>
            </div>

            <div style="padding: 20px 0;">
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr style="border-bottom: 1px solid #edf2f7;">
                  <td style="padding: 10px 0; font-weight: bold; color: #4a5568;">Estimate ID:</td>
                  <td style="padding: 10px 0; color: #b8860b; font-family: monospace; font-weight: bold;">${escapeHtml(estimateId)}</td>
                </tr>
                <tr style="border-bottom: 1px solid #edf2f7;">
                  <td style="padding: 10px 0; font-weight: bold; color: #4a5568;">Organization:</td>
                  <td style="padding: 10px 0; color: #1a202c; font-weight: bold;">${escapeHtml(organizationName)} (${escapeHtml(organizationType)})</td>
                </tr>
                <tr style="border-bottom: 1px solid #edf2f7;">
                  <td style="padding: 10px 0; font-weight: bold; color: #4a5568;">Contact Name:</td>
                  <td style="padding: 10px 0; color: #1a202c;">${escapeHtml(contactName)}</td>
                </tr>
                <tr style="border-bottom: 1px solid #edf2f7;">
                  <td style="padding: 10px 0; font-weight: bold; color: #4a5568;">Email:</td>
                  <td style="padding: 10px 0; color: #1a202c;"><a href="mailto:${escapeHtml(email)}" style="color: #0c2b56;">${escapeHtml(email)}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #edf2f7;">
                  <td style="padding: 10px 0; font-weight: bold; color: #4a5568;">Phone:</td>
                  <td style="padding: 10px 0; color: #1a202c;">${escapeHtml(phone)}</td>
                </tr>
                <tr style="border-bottom: 1px solid #edf2f7;">
                  <td style="padding: 10px 0; font-weight: bold; color: #4a5568;">Jurisdiction:</td>
                  <td style="padding: 10px 0; color: #1a202c;">${escapeHtml(jurisdiction)}</td>
                </tr>
                <tr style="border-bottom: 1px solid #edf2f7;">
                  <td style="padding: 10px 0; font-weight: bold; color: #4a5568;">Service:</td>
                  <td style="padding: 10px 0; color: #1a202c;">${escapeHtml(serviceType)}</td>
                </tr>
                <tr style="border-bottom: 1px solid #edf2f7;">
                  <td style="padding: 10px 0; font-weight: bold; color: #4a5568;">Scope & Pages:</td>
                  <td style="padding: 10px 0; color: #1a202c;">${escapeHtml(String(pageCount))} Pages</td>
                </tr>
                <tr style="border-bottom: 1px solid #edf2f7;">
                  <td style="padding: 10px 0; font-weight: bold; color: #4a5568;">Turnaround:</td>
                  <td style="padding: 10px 0; color: #1a202c;">${escapeHtml(turnaround)}</td>
                </tr>
                <tr style="border-bottom: 1px solid #edf2f7;">
                  <td style="padding: 10px 0; font-weight: bold; color: #4a5568;">Complimentary Pilot Value Limit:</td>
                  <td style="padding: 10px 0; color: #1a202c; font-weight: bold;">${thresholdObj.formatted} ${thresholdObj.currency}</td>
                </tr>
                <tr style="border-bottom: 1px solid #edf2f7;">
                  <td style="padding: 10px 0; font-weight: bold; color: #4a5568;">Pilot Cost:</td>
                  <td style="padding: 10px 0; color: #2e7d32; font-weight: bold;">${thresholdObj.symbol}0 (Valued at ${thresholdObj.symbol}${escapeHtml(String(priceNum))} ${thresholdObj.currency})</td>
                </tr>
                <tr style="border-bottom: 1px solid #edf2f7;">
                  <td style="padding: 10px 0; font-weight: bold; color: #4a5568;">Policy:</td>
                  <td style="padding: 10px 0; color: #4a5568;">One complimentary pilot per client organisation, subject to Lexocrates scope approval.</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #4a5568; vertical-align: top;">Notes:</td>
                  <td style="padding: 10px 0; color: #1a202c;">${escapeHtml(notes || 'None')}</td>
                </tr>
              </table>
            </div>

            <div style="background-color: #f7fafc; padding: 14px; border-radius: 8px; font-size: 12px; color: #718096; text-align: center;">
              This inquiry was generated from Lextimator™ Complimentary Pilot Engagement Program at lexocrates.com.
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: `"Lexocrates Pilot Desk" <${emailUser}>`,
          to: emailUser,
          replyTo: email,
          subject: `[COMPLIMENTARY PILOT - ${thresholdObj.formatted}] ${organizationName} - Ref: ${estimateId}`,
          html: htmlContent,
        });
      } catch (mailErr) {
        console.warn('[Trial Registration Email warning]:', mailErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Organization registered and Complimentary Pilot Engagement activated successfully.',
      trialReference: `PILOT-${estimateId}`,
      organizationName,
      estimateId,
    });
  } catch (error: any) {
    console.error('[Trial Registration Error]:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to complete pilot registration' },
      { status: 500 }
    );
  }
}
