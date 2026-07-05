# Website contact form to ERPNext Lead

The website submits contact enquiries to the server-side `/api/contact`
endpoint. API credentials are never exposed to the browser.

## ERPNext integration user

Use a dedicated ERPNext integration user with the `Sales User` role so it can
create Lead records:

```env
ERPNEXT_URL=https://your-erpnext-domain.com
ERPNEXT_LEAD_API_KEY=your-lead-user-api-key
ERPNEXT_LEAD_API_SECRET=your-lead-user-api-secret
```

If the lead-specific variables are not set, the integration falls back to
`ERPNEXT_API_KEY` and `ERPNEXT_API_SECRET`. A dedicated user is preferred so
blog and sales permissions remain separate.

An optional Lead Source can be configured after creating that value in
ERPNext:

```env
ERPNEXT_LEAD_SOURCE=Website
```

Leave this variable unset if the `Website` Lead Source record does not exist.

## Field mapping

| Website field | ERPNext Lead field |
|---|---|
| Full name | `lead_name`, `first_name`, `last_name` |
| Work email | `email_id` |
| Phone (optional) | `phone`, `mobile_no` |
| Company (optional) | `company_name` |
| Subject and message | `lead_notes` |

New records use `status = Lead`, `type = Client`, `request_type = Other`, and
`qualification_status = Unqualified`.
