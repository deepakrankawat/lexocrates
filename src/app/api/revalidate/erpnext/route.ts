import { createHmac, timingSafeEqual } from 'node:crypto';
import { revalidatePath, revalidateTag } from 'next/cache';
import { BLOG_CACHE_TAG } from '@/lib/erpnext-blogs';

function signaturesMatch(payload: string, receivedSignature: string): boolean {
  const secret = process.env.ERPNEXT_WEBHOOK_SECRET?.trim();
  if (!secret) return false;

  const expectedSignature = createHmac('sha256', secret)
    .update(payload)
    .digest('base64');
  const expected = Buffer.from(expectedSignature);
  const received = Buffer.from(receivedSignature);

  return expected.length === received.length && timingSafeEqual(expected, received);
}

export async function POST(request: Request) {
  const payload = await request.text();
  const signature = request.headers.get('x-frappe-webhook-signature');

  if (!signature || !signaturesMatch(payload, signature)) {
    return Response.json({ error: 'Invalid webhook signature' }, { status: 401 });
  }

  revalidateTag(BLOG_CACHE_TAG, 'max');
  revalidatePath('/');
  revalidatePath('/blog');
  revalidatePath('/blog/[...slug]', 'page');

  return Response.json({ revalidated: true });
}
