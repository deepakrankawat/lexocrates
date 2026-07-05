# ERPNext blog integration

## 1. Configure local credentials

Fill these values in `.env.local`:

```env
ERPNEXT_URL=https://your-erpnext-domain.com
ERPNEXT_API_KEY=your-api-key
ERPNEXT_API_SECRET=your-api-secret
ERPNEXT_WEBHOOK_SECRET=a-long-random-secret
```

The ERPNext integration user needs create, read, and write access to `Blog
Post`, `Blog Category`, and `Blogger` for the initial migration. After the
migration, the website only needs read access.

Add the same environment variables to the deployed Next.js hosting
environment. Do not add `NEXT_PUBLIC_` to any secret.

## 2. Import the existing blogs

```bash
npm run migrate:blogs
```

The migration is safe to run again. It creates missing Blogger and Blog
Category records, then creates or updates each blog using its route as the
unique match.

## 3. Configure automatic refresh

Create an enabled ERPNext Webhook:

- DocType: `Blog Post`
- Doc Event: `on_update`
- Request Method: `POST`
- Request URL: `https://your-nextjs-domain.com/api/revalidate/erpnext`
- Webhook Secret: the same value as `ERPNEXT_WEBHOOK_SECRET`

Use a small JSON request body such as:

```json
{
  "doctype": "{{ doc.doctype }}",
  "name": "{{ doc.name }}",
  "published": "{{ doc.published }}"
}
```

Create an additional `on_trash` webhook with the same URL and secret if
deleted posts should disappear immediately. The five-minute fallback refresh
will still catch changes if a webhook is delayed.

Only Blog Posts with `Published` enabled are returned to the Next.js site.
