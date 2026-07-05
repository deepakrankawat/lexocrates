import type { ContactLeadValues } from '@/lib/contact-schema';

type ERPNextLeadResponse = {
  data: {
    name: string;
  };
};

export class ERPNextLeadError extends Error {
  constructor(
    message: string,
    public readonly status: number
  ) {
    super(message);
    this.name = 'ERPNextLeadError';
  }
}

function getERPNextConfig() {
  const baseUrl = process.env.ERPNEXT_URL?.trim().replace(/\/+$/, '');
  const apiKey =
    process.env.ERPNEXT_LEAD_API_KEY?.trim() ||
    process.env.ERPNEXT_API_KEY?.trim();
  const apiSecret =
    process.env.ERPNEXT_LEAD_API_SECRET?.trim() ||
    process.env.ERPNEXT_API_SECRET?.trim();

  if (!baseUrl || !apiKey || !apiSecret) {
    throw new ERPNextLeadError(
      'ERPNext integration environment variables are missing.',
      500
    );
  }

  return {
    baseUrl,
    authorization: `token ${apiKey}:${apiSecret}`,
  };
}

function splitName(fullName: string): {
  firstName: string;
  lastName?: string;
} {
  const parts = fullName.trim().split(/\s+/);
  return {
    firstName: parts[0],
    lastName: parts.length > 1 ? parts.slice(1).join(' ') : undefined,
  };
}

function buildLeadNotes(values: ContactLeadValues): string {
  return [
    'Website Contact Enquiry',
    '',
    `Subject: ${values.subject}`,
    '',
    'Message:',
    values.message,
  ].join('\n');
}

export function buildERPNextLeadPayload(values: ContactLeadValues) {
  const { firstName, lastName } = splitName(values.fullName);
  const configuredSource = process.env.ERPNEXT_LEAD_SOURCE?.trim();

  return {
    lead_name: values.fullName,
    first_name: firstName,
    ...(lastName ? { last_name: lastName } : {}),
    email_id: values.email,
    ...(values.phone
      ? { phone: values.phone, mobile_no: values.phone }
      : {}),
    ...(values.company ? { company_name: values.company } : {}),
    ...(configuredSource ? { source: configuredSource } : {}),
    status: 'Lead',
    type: 'Client',
    request_type: 'Other',
    qualification_status: 'Unqualified',
    lead_notes: buildLeadNotes(values),
  };
}

export async function createERPNextLead(
  values: ContactLeadValues
): Promise<string> {
  const config = getERPNextConfig();
  const response = await fetch(`${config.baseUrl}/api/resource/Lead`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: config.authorization,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(buildERPNextLeadPayload(values)),
    cache: 'no-store',
  });
  const responseText = await response.text();

  if (!response.ok) {
    throw new ERPNextLeadError(
      `ERPNext Lead creation failed (${response.status}): ${responseText.slice(
        0,
        1000
      )}`,
      response.status
    );
  }

  const payload = JSON.parse(responseText) as ERPNextLeadResponse;
  return payload.data.name;
}
