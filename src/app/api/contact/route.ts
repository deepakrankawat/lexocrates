
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    if (!fullName || !email || !message) {
      return NextResponse.json({ success: false, message: 'Missing required fields.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    
    const emailBody = `<h1>New Contact Form Submission</h1>
<p><strong>Full Name:</strong> ${fullName}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p><p>${message}</p>`;

    // Main email to business
    await transporter.sendMail({
      from: `"${fullName}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Inquiry from ${fullName}`,
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
