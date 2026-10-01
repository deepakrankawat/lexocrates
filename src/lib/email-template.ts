/**
 * Lexocrates Brand-Aligned Executive Email Template Generator
 * Matches the official website aesthetic: Midnight Navy (#0C2340), Warm Gold (#B8860B / #D4AF37),
 * Slate Card Surfaces, and Bank-Grade Legal Badges.
 */

export interface MatterEmailData {
  contactName: string;
  organizationName: string;
  organizationType?: string;
  estimateId: string;
  serviceType: string;
  jurisdiction?: string;
  pageCount: number | string;
  wordCount?: number | string;
  turnaround: string;
  statusHeading?: string;
  statusDescription?: string;
  approvedAmount?: string;
  valueAnnotation?: string;
  clientPortalUrl?: string;
}

export function escapeHtml(str: string): string {
  return String(str || '').replace(
    /[&<>"']/g,
    (m) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      })[m] || m
  );
}

export function generateLexocratesEmailHtml(data: MatterEmailData): string {
  const contactName = escapeHtml(data.contactName || 'Counsel');
  const orgName = escapeHtml(data.organizationName || 'Client Organisation');
  const orgType = escapeHtml(data.organizationType || 'Law Firm');
  const estimateId = escapeHtml(data.estimateId || 'EST-LEX-CONFIRMED');
  const serviceType = escapeHtml(data.serviceType || 'Legal Operations Support');
  const jurisdiction = escapeHtml(data.jurisdiction || 'Canada');
  const pageCount = escapeHtml(String(data.pageCount || 1));
  const wordCount = escapeHtml(String(data.wordCount || Number(data.pageCount || 1) * 280));
  const turnaround = escapeHtml(data.turnaround || '3–5 Business Days');
  const statusHeading = escapeHtml(data.statusHeading || 'Complimentary Pilot Engagement Confirmed');
  const statusDescription = escapeHtml(
    data.statusDescription ||
      'Eligible new clients may begin with one limited-scope assignment, up to the applicable complimentary pilot value, at no charge.'
  );
  const approvedAmount = escapeHtml(data.approvedAmount || '$0');
  const valueAnnotation = escapeHtml(data.valueAnnotation || 'Complimentary Pilot Scope');
  const clientPortalUrl = escapeHtml(data.clientPortalUrl || 'https://engine.lexocrates.com/client-login');

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="x-apple-disable-message-reformatting" />
  <title>Lexocrates — Legal Operations &amp; Matter Confirmation</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style type="text/css">
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }
    body { margin: 0; padding: 0; width: 100% !important; background-color: #F4F6F9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; color: #1E293B; }
    
    @media only screen and (max-width: 600px) {
      .email-container { width: 100% !important; max-width: 100% !important; margin: 0 auto !important; }
      .responsive-padding { padding-left: 20px !important; padding-right: 20px !important; }
      .cta-button { width: 100% !important; text-align: center !important; }
      .badge-cell { display: block !important; width: 100% !important; text-align: center !important; margin-bottom: 10px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #F4F6F9; -webkit-font-smoothing: antialiased;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F4F6F9; table-layout: fixed;">
    <tr>
      <td align="center" style="padding: 32px 16px 48px 16px;">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="email-container" style="max-width: 620px; background-color: #FFFFFF; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(12, 35, 64, 0.08); border: 1px solid #E2E8F0;">
          
          <!-- Top Decorative Brand Bar -->
          <tr>
            <td style="height: 6px; background: linear-gradient(90deg, #0C2340 0%, #B8860B 50%, #0C2340 100%); line-height: 6px; font-size: 6px;">&nbsp;</td>
          </tr>

          <!-- Header Section -->
          <tr>
            <td align="center" style="background-color: #0C2340; padding: 36px 32px 32px 32px; text-align: center;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto 18px auto;">
                <tr>
                  <td style="background-color: rgba(184, 134, 11, 0.15); border: 1px solid rgba(184, 134, 11, 0.4); border-radius: 9999px; padding: 6px 16px; text-align: center;">
                    <span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 11px; font-weight: 700; color: #E5C378; letter-spacing: 0.12em; text-transform: uppercase;">
                      🔒 BILATERAL NDA ENFORCED • PRIVILEGED
                    </span>
                  </td>
                </tr>
              </table>

              <h1 style="margin: 0; font-family: 'Cinzel', 'Georgia', -apple-system, BlinkMacSystemFont, serif; font-size: 28px; font-weight: 800; color: #FFFFFF; letter-spacing: 0.18em; text-transform: uppercase;">
                LEX<span style="color: #D4AF37;">OCRATES</span><span style="font-size: 16px; vertical-align: super; color: #D4AF37; margin-left: 2px;">™</span>
              </h1>
              <p style="margin: 6px 0 0 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; font-weight: 500; color: #94A3B8; letter-spacing: 0.14em; text-transform: uppercase;">
                Legal Operations &amp; Managed Capacity Delivery Center
              </p>
            </td>
          </tr>

          <!-- Notification Alert Header Bar -->
          <tr>
            <td style="background-color: #F8FAFC; border-bottom: 1px solid #E2E8F0; padding: 18px 32px; text-align: center;" class="responsive-padding">
              <span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; font-weight: 700; color: #0C2340; letter-spacing: 0.05em; text-transform: uppercase;">
                Matter Status: <span style="color: #059669; font-weight: 800;">✓ Scope Confirmed &amp; Activated</span>
              </span>
            </td>
          </tr>

          <!-- Main Body Content -->
          <tr>
            <td style="padding: 36px 32px 28px 32px;" class="responsive-padding">
              
              <h2 style="margin: 0 0 12px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 20px; font-weight: 800; color: #0C2340; letter-spacing: -0.01em;">
                Dear ${contactName},
              </h2>

              <p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.6; color: #334155;">
                Thank you for engaging Lexocrates. Your legal assignment for <strong>${orgName}</strong> has been formally received and processed through our <strong>Lextimator™ Estimation Engine</strong>.
              </p>

              <!-- Callout Box -->
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 26px; background-color: #FDFBF7; border: 1px solid #E5C378; border-left: 4px solid #B8860B; border-radius: 12px;">
                <tr>
                  <td style="padding: 18px 20px;">
                    <div style="font-size: 11px; font-weight: 800; color: #92400E; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 4px;">
                      ✦ Commercial Term Confirmation
                    </div>
                    <div style="font-size: 16px; font-weight: 800; color: #0C2340; margin-bottom: 4px;">
                      ${statusHeading}
                    </div>
                    <div style="font-size: 13px; line-height: 1.5; color: #475569;">
                      ${statusDescription}
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Detailed Matter Specifications Grid -->
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 28px; border: 1px solid #E2E8F0; border-radius: 14px; overflow: hidden; background-color: #FFFFFF;">
                <tr style="background-color: #0C2340;">
                  <td colspan="2" style="padding: 12px 20px; font-size: 11px; font-weight: 800; color: #FFFFFF; letter-spacing: 0.12em; text-transform: uppercase;">
                    Assignment Docket &amp; Technical Specifications
                  </td>
                </tr>
                
                <tr>
                  <td width="40%" style="padding: 12px 20px; font-size: 13px; font-weight: 600; color: #64748B; border-bottom: 1px solid #F1F5F9;">
                    Matter Reference ID
                  </td>
                  <td width="60%" style="padding: 12px 20px; font-size: 13px; font-weight: 700; color: #B8860B; font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace; border-bottom: 1px solid #F1F5F9;">
                    ${estimateId}
                  </td>
                </tr>

                <tr style="background-color: #F8FAFC;">
                  <td style="padding: 12px 20px; font-size: 13px; font-weight: 600; color: #64748B; border-bottom: 1px solid #F1F5F9;">
                    Client Organisation
                  </td>
                  <td style="padding: 12px 20px; font-size: 13px; font-weight: 700; color: #0C2340; border-bottom: 1px solid #F1F5F9;">
                    ${orgName} (${orgType})
                  </td>
                </tr>

                <tr>
                  <td style="padding: 12px 20px; font-size: 13px; font-weight: 600; color: #64748B; border-bottom: 1px solid #F1F5F9;">
                    Legal Service Category
                  </td>
                  <td style="padding: 12px 20px; font-size: 13px; font-weight: 700; color: #0C2340; border-bottom: 1px solid #F1F5F9;">
                    ${serviceType}
                  </td>
                </tr>

                <tr style="background-color: #F8FAFC;">
                  <td style="padding: 12px 20px; font-size: 13px; font-weight: 600; color: #64748B; border-bottom: 1px solid #F1F5F9;">
                    Governing Jurisdiction
                  </td>
                  <td style="padding: 12px 20px; font-size: 13px; font-weight: 600; color: #1E293B; border-bottom: 1px solid #F1F5F9;">
                    ${jurisdiction} (US / Canada / UK Alignment)
                  </td>
                </tr>

                <tr>
                  <td style="padding: 12px 20px; font-size: 13px; font-weight: 600; color: #64748B; border-bottom: 1px solid #F1F5F9;">
                    Document Density &amp; Pages
                  </td>
                  <td style="padding: 12px 20px; font-size: 13px; font-weight: 600; color: #1E293B; border-bottom: 1px solid #F1F5F9;">
                    ${pageCount} Pages • Approx. ${wordCount} Words
                  </td>
                </tr>

                <tr style="background-color: #F8FAFC;">
                  <td style="padding: 12px 20px; font-size: 13px; font-weight: 600; color: #64748B; border-bottom: 1px solid #F1F5F9;">
                    Delivery Timeframe
                  </td>
                  <td style="padding: 12px 20px; font-size: 13px; font-weight: 700; color: #059669; border-bottom: 1px solid #F1F5F9;">
                    ${turnaround}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 14px 20px; font-size: 13px; font-weight: 600; color: #64748B;">
                    Commercial Consideration
                  </td>
                  <td style="padding: 14px 20px;">
                    <span style="font-size: 18px; font-weight: 800; color: #059669;">
                      ${approvedAmount}
                    </span>
                    <span style="font-size: 12px; color: #64748B; margin-left: 6px;">
                      (${valueAnnotation})
                    </span>
                  </td>
                </tr>
              </table>

              <!-- Milestones -->
              <h3 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 800; color: #0C2340; text-transform: uppercase; letter-spacing: 0.08em;">
                Next Operating Milestones:
              </h3>
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 28px;">
                <tr>
                  <td style="padding: 6px 0; font-size: 14px; line-height: 1.5; color: #334155;">
                    <strong style="color: #0C2340;">1. Senior Legal Lead Alignment:</strong> Your assigned advocate conducts initial privilege validation and scope check.
                  </td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 14px; line-height: 1.5; color: #334155;">
                    <strong style="color: #0C2340;">2. Work Production &amp; QA:</strong> Work proceeds in our secure legal delivery environment under ISO 27001 data isolation.
                  </td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 14px; line-height: 1.5; color: #334155;">
                    <strong style="color: #0C2340;">3. Work-Product Delivery:</strong> Deliverables are uploaded directly to your encrypted Client Portal with full audit trails.
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 28px 0 16px 0;">
                <tr>
                  <td align="center">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="cta-button" style="margin: 0 auto;">
                      <tr>
                        <td align="center" style="border-radius: 12px; background-color: #0C2340; box-shadow: 0 6px 18px rgba(12, 35, 64, 0.25);">
                          <a href="${clientPortalUrl}" target="_blank" style="display: inline-block; padding: 16px 36px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; font-weight: 800; color: #FFFFFF; text-decoration: none; text-transform: uppercase; letter-spacing: 0.12em; border-radius: 12px;">
                            Access Client Portal &rarr;
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top: 10px;">
                    <span style="font-size: 12px; color: #64748B;">
                      Need immediate assistance? Reply directly to this email or contact <a href="mailto:support@lexocrates.com" style="color: #0C2340; font-weight: 700; text-decoration: underline;">support@lexocrates.com</a>
                    </span>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Trust Badges -->
          <tr>
            <td style="background-color: #F8FAFC; border-top: 1px solid #E2E8F0; border-bottom: 1px solid #E2E8F0; padding: 20px 24px;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td width="33.33%" align="center" class="badge-cell" style="padding: 4px;">
                    <div style="font-size: 12px; font-weight: 700; color: #0C2340;">⚖️ Multi-Jurisdiction</div>
                    <div style="font-size: 11px; color: #64748B; margin-top: 2px;">US • Canada • UK</div>
                  </td>
                  <td width="33.33%" align="center" class="badge-cell" style="padding: 4px;">
                    <div style="font-size: 12px; font-weight: 700; color: #0C2340;">🛡️ SOC-2 &amp; ISO 27001</div>
                    <div style="font-size: 11px; color: #64748B; margin-top: 2px;">Bank-Grade Isolation</div>
                  </td>
                  <td width="33.33%" align="center" class="badge-cell" style="padding: 4px;">
                    <div style="font-size: 12px; font-weight: 700; color: #0C2340;">🔒 Bilateral NDA</div>
                    <div style="font-size: 11px; color: #64748B; margin-top: 2px;">Zero Data Leakage</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #0C2340; padding: 32px 32px; text-align: center; color: #94A3B8;" class="responsive-padding">
              <div style="font-family: 'Cinzel', 'Georgia', serif; font-size: 16px; font-weight: 700; color: #FFFFFF; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 6px;">
                LEX<span style="color: #D4AF37;">OCRATES</span>
              </div>
              <div style="font-size: 11px; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 18px;">
                The Offshore Legal Operations Delivery Center
              </div>

              <div style="font-size: 12px; margin-bottom: 20px;">
                <a href="https://lexocrates.com" target="_blank" style="color: #D4AF37; text-decoration: none; margin: 0 10px; font-weight: 600;">Website</a>
                <span style="color: #475569;">•</span>
                <a href="https://lexocrates.com/pricing" target="_blank" style="color: #D4AF37; text-decoration: none; margin: 0 10px; font-weight: 600;">Pricing &amp; LexPack™</a>
                <span style="color: #475569;">•</span>
                <a href="https://engine.lexocrates.com" target="_blank" style="color: #D4AF37; text-decoration: none; margin: 0 10px; font-weight: 600;">Client Portal</a>
                <span style="color: #475569;">•</span>
                <a href="https://lexocrates.com/privacy-policy" target="_blank" style="color: #D4AF37; text-decoration: none; margin: 0 10px; font-weight: 600;">Privacy Policy</a>
              </div>

              <p style="margin: 0 0 14px 0; font-size: 10px; line-height: 1.5; color: #64748B; text-align: justify;">
                <strong>CONFIDENTIALITY NOTICE:</strong> This electronic transmission, including any attachments, contains information which may be confidential, legally privileged, and protected from disclosure under applicable legal professional standards. It is intended solely for the use of the individual or entity named as the recipient. If you are not the intended recipient, please immediately notify the sender, delete this transmission, and do not copy, distribute, or disclose its contents.
              </p>

              <p style="margin: 0; font-size: 11px; color: #64748B;">
                &copy; 2026 Lexocrates Inc. All rights reserved. Registered delivery center for law firms &amp; corporate legal teams.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
