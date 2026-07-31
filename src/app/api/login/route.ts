import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, usr, pwd } = body;

    const userEmail = (email || usr || '').trim().toLowerCase();
    const userPassword = password || pwd || '';

    if (!userEmail || !userPassword) {
      return NextResponse.json(
        { status: 'error', message: 'Please enter both Email and Password.' },
        { status: 400 }
      );
    }

    const payload = JSON.stringify({
      usr: userEmail,
      pwd: userPassword,
    });

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    let backendErrorMessage: string | null = null;

    // Attempt 1: Custom Server Script (login_client)
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch('https://portal.lexocrates.com/api/method/login_client', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          email: userEmail,
          password: userPassword,
          usr: userEmail,
          pwd: userPassword,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const text = await response.text();
      let data: any = null;
      try { data = JSON.parse(text); } catch (e) {}

      if (response.ok && data?.message?.status === 'success') {
        const resHeaders = new Headers();
        const setCookieHeader = response.headers.get('set-cookie');
        if (setCookieHeader) resHeaders.set('set-cookie', setCookieHeader);

        return NextResponse.json(
          {
            status: 'success',
            message: 'Logged In',
            user: data?.message?.user || { email: userEmail },
            data,
          },
          { status: 200, headers: resHeaders }
        );
      }

      if (data?.message?.status === 'error') {
        backendErrorMessage = data.message.message;
      }
    } catch (err) {}

    // Attempt 2: Native ERPNext Built-in Login API (frappe.auth.login)
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch('https://portal.lexocrates.com/api/method/login', {
        method: 'POST',
        headers,
        body: payload,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const text = await response.text();
      let data: any = null;
      try { data = JSON.parse(text); } catch (e) {}

      if (response.ok && (data?.message === 'Logged In' || data?.home_page)) {
        const resHeaders = new Headers();
        const setCookieHeader = response.headers.get('set-cookie');
        if (setCookieHeader) resHeaders.set('set-cookie', setCookieHeader);

        return NextResponse.json(
          {
            status: 'success',
            message: 'Logged In',
            user: data?.user || { email: userEmail },
            data,
          },
          { status: 200, headers: resHeaders }
        );
      }

      if (data?.exc_type === 'AuthenticationError' || data?.message === 'Invalid login credentials') {
        backendErrorMessage = 'Invalid email or password. Please verify your credentials.';
      }
    } catch (err) {}

    // Require strict backend Email and Password match!
    return NextResponse.json(
      {
        status: 'error',
        message: backendErrorMessage || 'Invalid email or password. Please verify your credentials.',
      },
      { status: 401 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { status: 'error', message: error.message || 'Login error occurred.' },
      { status: 500 }
    );
  }
}
