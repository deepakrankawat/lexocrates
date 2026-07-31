import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { full_name, email, password, company_name, country } = body;

    const userEmail = (email || '').trim().toLowerCase();

    if (!userEmail || !password) {
      return NextResponse.json(
        { status: 'error', message: 'Email and password are required.' },
        { status: 400 }
      );
    }

    const payload = JSON.stringify({
      full_name: full_name || userEmail.split('@')[0],
      email: userEmail,
      password,
      company_name: company_name || full_name,
      country: country || 'United Kingdom',
    });

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    let erpNextError: string | null = null;

    // Attempt 1: Custom Server Script (register_client)
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);

      const response = await fetch('https://portal.lexocrates.com/api/method/register_client', {
        method: 'POST',
        headers,
        body: payload,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const text = await response.text();
      let data: any = null;
      try { data = JSON.parse(text); } catch (e) {}

      const resMsg = data?.message;

      if (response.ok && (resMsg?.status === 'success' || data?.status === 'success')) {
        return NextResponse.json(
          {
            status: 'success',
            message: 'User registered successfully on ERPNext',
            data,
          },
          { status: 200 }
        );
      }

      if (resMsg?.status === 'error' && resMsg?.message) {
        erpNextError = typeof resMsg.message === 'string' ? resMsg.message : JSON.stringify(resMsg.message);
      } else if (data?.exception) {
        erpNextError = typeof data.exception === 'string' ? data.exception : 'Registration failed on server.';
      }
    } catch (err: any) {
      erpNextError = err.message || 'Connection error to registration server.';
    }

    // Attempt 2: Native ERPNext Built-in Sign Up API
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);

      const response = await fetch('https://portal.lexocrates.com/api/method/frappe.core.doctype.user.user.sign_up', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          email: userEmail,
          full_name: full_name || userEmail.split('@')[0],
          redirect_to: '',
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const text = await response.text();
      let data: any = null;
      try { data = JSON.parse(text); } catch (e) {}

      if (response.ok && data?.message) {
        return NextResponse.json(
          {
            status: 'success',
            message: 'User registered successfully on ERPNext',
            data,
          },
          { status: 200 }
        );
      }
    } catch (err) {}

    // Return exact ERPNext server error if user creation failed on backend
    return NextResponse.json(
      {
        status: 'error',
        message: erpNextError || 'Failed to create user on ERPNext. Please check server script or input details.',
      },
      { status: 400 }
    );
  } catch (error: any) {
    return NextResponse.json({ status: 'error', message: error.message }, { status: 500 });
  }
}
