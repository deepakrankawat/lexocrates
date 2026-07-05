import { z } from 'zod';

const optionalPhone = z
  .string()
  .trim()
  .max(30, 'Phone number is too long.')
  .refine(
    (value) => !value || (/^[+\d][\d\s().-]+$/.test(value) && value.length >= 7),
    'Enter a valid phone number.'
  );

export const contactLeadSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Enter your full name.')
    .max(100, 'Name is too long.'),
  email: z
    .string()
    .trim()
    .email('Enter a valid email address.')
    .max(140, 'Email address is too long.'),
  phone: optionalPhone.optional(),
  company: z
    .string()
    .trim()
    .max(150, 'Company name is too long.')
    .optional(),
  subject: z
    .string()
    .trim()
    .min(3, 'Enter a short subject.')
    .max(150, 'Subject is too long.'),
  message: z
    .string()
    .trim()
    .min(10, 'Please enter at least 10 characters.')
    .max(4000, 'Message must be under 4,000 characters.'),
  faxNumber: z.string().optional(),
});

export type ContactLeadValues = z.infer<typeof contactLeadSchema>;
