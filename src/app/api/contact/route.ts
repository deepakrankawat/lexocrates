<<<<<<< HEAD
=======

>>>>>>> 6f76f247f64bd3ad8604e8351438b371dea4b2a1
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
<<<<<<< HEAD
    const formData = await request.formData();
    
    const queryType = formData.get('queryType') as string;
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    
    // Simple validation
    if (!queryType || !fullName || !email) {
      return NextResponse.json({ success: false, message: 'Missing required fields.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
=======
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
>>>>>>> 6f76f247f64bd3ad8604e8351438b371dea4b2a1
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

<<<<<<< HEAD
    const getRecipientEmail = () => {
      switch (queryType) {
        case 'HR':
          return 'hr@yourdomain.com';
        case 'Service':
          return 'service@yourdomain.com';
        case 'Support':
          return 'support@yourdomain.com';
        default:
          return process.env.EMAIL_USER; // Fallback
      }
    };

    const recipientEmail = getRecipientEmail();
    
    let emailBody = `<h1>New Contact Form Submission</h1>
<p><strong>Query Type:</strong> ${queryType}</p>
<p><strong>Full Name:</strong> ${fullName}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${formData.get('phone') || 'N/A'}</p>
<hr>`;

    const attachments = [];

    // Add conditional fields to email body
    if (queryType === 'HR') {
        const resume = formData.get('resume') as File;
        if(resume && resume.size > 0) {
            attachments.push({
                filename: resume.name,
                content: Buffer.from(await resume.arrayBuffer()),
            });
        }
        emailBody += `<h2>HR Details</h2>
<p><strong>Position Applied For:</strong> ${formData.get('positionAppliedFor') || 'N/A'}</p>
<p><strong>LinkedIn Profile:</strong> ${formData.get('linkedinProfile') || 'N/A'}</p>
<p><strong>Expected Salary:</strong> ${formData.get('expectedSalary') || 'N/A'}</p>
<p><strong>Cover Letter:</strong></p><p>${formData.get('message') || 'N/A'}</p>`;

    } else if (queryType === 'Service') {
        const attachment = formData.get('attachment') as File;
        if(attachment && attachment.size > 0) {
            attachments.push({
                filename: attachment.name,
                content: Buffer.from(await attachment.arrayBuffer()),
            });
        }
        emailBody += `<h2>Service Request Details</h2>
<p><strong>Service Type:</strong> ${formData.get('serviceType') || 'N/A'}</p>
<p><strong>Budget Range:</strong> ${formData.get('budgetRange') || 'N/A'}</p>
<p><strong>Project Deadline:</strong> ${formData.get('projectDeadline') || 'N/A'}</p>
<p><strong>Project Description:</strong></p><p>${formData.get('message') || 'N/A'}</p>`;

    } else if (queryType === 'Support') {
        const screenshot = formData.get('screenshot') as File;
        if(screenshot && screenshot.size > 0) {
            attachments.push({
                filename: screenshot.name,
                content: Buffer.from(await screenshot.arrayBuffer()),
            });
        }
        emailBody += `<h2>Support Request Details</h2>
<p><strong>Issue Category:</strong> ${formData.get('issueCategory') || 'N/A'}</p>
<p><strong>Order/Reference ID:</strong> ${formData.get('referenceId') || 'N/A'}</p>
<p><strong>Priority Level:</strong> ${formData.get('priorityLevel') || 'N/A'}</p>
<p><strong>Issue Description:</strong></p><p>${formData.get('message') || 'N/A'}</p>`;
    }
    
    // Universal fields
    emailBody += `<hr><h2>Preferences</h2>
<p><strong>Preferred Contact Method:</strong> ${formData.get('contactMethod') || 'N/A'}</p>
<p><strong>Best Time to Reach:</strong> ${formData.get('contactTime') || 'N/A'}</p>
<p><strong>Subscribed to Newsletter:</strong> ${formData.get('subscribeNewsletter') === 'on' ? 'Yes' : 'No'}</p>`;


    // Main email to business
    await transporter.sendMail({
      from: `"${fullName}" <${process.env.EMAIL_USER}>`,
      to: recipientEmail,
      subject: `New ${queryType} Inquiry from ${fullName}`,
      html: emailBody,
      attachments: attachments,
    });

    // Confirmation email to user
    await transporter.sendMail({
      from: `"Lexocrates" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for your inquiry!',
      html: `<p>Dear ${fullName},</p>
<p>Thank you for contacting us. We have received your inquiry and a member of our team will get back to you shortly.</p>
<p>Here's a copy of your submission:</p>
<hr>
${emailBody}
<hr>
<p>Best regards,<br>The Lexocrates Team</p>`,
    });

    return NextResponse.json({ success: true, message: 'Form submitted successfully!' });

  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ success: false, message: `Failed to send email: ${errorMessage}` }, { status: 500 });
  }
}
=======
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

    
>>>>>>> 6f76f247f64bd3ad8604e8351438b371dea4b2a1
