
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string | null;
    const company = formData.get('company') as string | null;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    
    if (!fullName || !email || !subject || !message) {
      return NextResponse.json({ success: false, message: 'Missing required fields.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    
    const emailBody = `
      <h1 style="color: #0c2b56;">New Contact Form Submission</h1>
      <p>You have received a new message from your website's contact form.</p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr style="background-color: #f2f2f2;">
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; color: #0c2b56;">Full Name</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${fullName}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; color: #0c2b56;">Email</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${email}</td>
        </tr>
        ${phone ? `
        <tr style="background-color: #f2f2f2;">
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; color: #0c2b56;">Phone</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${phone}</td>
        </tr>
        ` : ''}
        ${company ? `
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; color: #0c2b56;">Company</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${company}</td>
        </tr>
        ` : ''}
        <tr style="background-color: #f2f2f2;">
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; color: #0c2b56;">Subject</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${subject}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; color: #0c2b56;">Message</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${message}</td>
        </tr>
      </table>
    `;

    // Main email to business
    await transporter.sendMail({
      from: `"${fullName}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Inquiry: ${subject}`,
      html: emailBody,
    });

    // Confirmation email to user
    await transporter.sendMail({
      from: `"Lexocrates" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for your inquiry!',
      html: `<p>Dear ${fullName},</p>
<p>Thank you for contacting us. We have received your message and a member of our team will get back to you shortly.</p>
<p>Best regards,<br>The Lexocrates Team</p>`,
    });

    return NextResponse.json({ success: true, message: 'Form submitted successfully!' });

  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ success: false, message: `Failed to send email: ${errorMessage}` }, { status: 500 });
  }
}
