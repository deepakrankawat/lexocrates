import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import {
  contactLeadSchema,
  type ContactLeadValues,
} from '@/lib/contact-schema';
import {
  createERPNextLead,
  ERPNextLeadError,
} from '@/lib/erpnext-leads';

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const submissionsByIp = new Map<
  string,
  { count: number; resetAt: number }
>();

function getClientIp(request: Request): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const current = submissionsByIp.get(ip);

  if (!current || current.resetAt <= now) {
    submissionsByIp.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

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

async function sendLeadEmails(
  values: ContactLeadValues,
  leadReference: string
): Promise<void> {
  const emailUser = process.env.EMAIL_USER?.trim();
  const emailPass = process.env.EMAIL_PASS?.trim();
  if (!emailUser || !emailPass) return;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });
  const safe = Object.fromEntries(
    Object.entries(values).map(([key, value]) => [
      key,
      escapeHtml(String(value)),
    ])
  );

  const internalEmail = `
    <h1 style="color:#0c2b56">New Website Lead: ${escapeHtml(leadReference)}</h1>
    <p>A contact-form enquiry has been created in the sales pipeline.</p>
    <table style="width:100%;border-collapse:collapse">
      <tr><td style="padding:10px;border:1px solid #ddd"><strong>Name</strong></td><td style="padding:10px;border:1px solid #ddd">${safe.fullName}</td></tr>
      <tr><td style="padding:10px;border:1px solid #ddd"><strong>Email</strong></td><td style="padding:10px;border:1px solid #ddd">${safe.email}</td></tr>
      <tr><td style="padding:10px;border:1px solid #ddd"><strong>Phone</strong></td><td style="padding:10px;border:1px solid #ddd">${safe.phone || 'Not provided'}</td></tr>
      <tr><td style="padding:10px;border:1px solid #ddd"><strong>Company</strong></td><td style="padding:10px;border:1px solid #ddd">${safe.company || 'Not provided'}</td></tr>
      <tr><td style="padding:10px;border:1px solid #ddd"><strong>Subject</strong></td><td style="padding:10px;border:1px solid #ddd">${safe.subject}</td></tr>
      <tr><td style="padding:10px;border:1px solid #ddd"><strong>Message</strong></td><td style="padding:10px;border:1px solid #ddd">${safe.message}</td></tr>
    </table>
  `;

  const results = await Promise.allSettled([
    transporter.sendMail({
      from: `"Lexocrates Website" <${emailUser}>`,
      to: emailUser,
      replyTo: values.email,
      subject: `New Website Lead: ${values.subject}`,
      html: internalEmail,
    }),
    transporter.sendMail({
      from: `"Lexocrates" <${emailUser}>`,
      to: values.email,
      subject: `We received your legal support enquiry — ${leadReference}`,
      html: `<p>Dear ${safe.fullName},</p>
        <p>Thank you for contacting Lexocrates. Your enquiry has been recorded as <strong>${escapeHtml(
          leadReference
        )}</strong>.</p>
        <p>Our legal operations team will review the scope and contact you within one business day.</p>
        <p>Best regards,<br>Lexocrates Legal Services</p>`,
    }),
  ]);

  for (const result of results) {
    if (result.status === 'rejected') {
      console.error('Lead email notification failed:', result.reason);
    }
  }
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        success: false,
        message: 'Too many submissions. Please try again in a few minutes.',
      },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();

    // Honeypot: bots commonly fill every field. Return a neutral success without
    // creating a CRM record.
    if (typeof body?.faxNumber === 'string' && body.faxNumber.trim()) {
      return NextResponse.json({ success: true });
    }

    const parsed = contactLeadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please review the highlighted fields.',
          fieldErrors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const leadReference = await createERPNextLead(parsed.data);
    await sendLeadEmails(parsed.data, leadReference);

    return NextResponse.json(
      {
        success: true,
        message: 'Your enquiry has been recorded successfully.',
        reference: leadReference,
      },
      { status: 201 }
    );
  } catch (error) {
    const status =
      error instanceof ERPNextLeadError && error.status === 409 ? 409 : 502;

    console.error(
      'Contact Lead submission failed:',
      error instanceof Error ? error.message : error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          status === 409
            ? 'An enquiry with this email already exists. Please contact sales@lexocrates.com for an update.'
            : 'We could not record your enquiry right now. Please try again or email sales@lexocrates.com.',
      },
      { status }
    );
  }
}
