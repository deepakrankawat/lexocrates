# Lexocrates

Live site: https://www.lexocrates.com/

Lexocrates is a modern corporate website for an AI-assisted Legal Process Outsourcing (LPO) firm. The site presents legal services, leadership profiles, long-form blog content, careers, contact workflows, SEO metadata, sitemap/robots support, and brand assets for a polished public web presence.

The application is built with Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui-style primitives, Framer Motion, Lottie, Three.js/react-globe.gl visuals, and a Nodemailer-powered contact API.

## Features

- Responsive public website for Lexocrates legal outsourcing services.
- App Router pages for home, about, services, service detail pages, blog, blog detail pages, team, team detail pages, lawyers, careers, contact, and legal policy pages.
- Static service, team, and blog content managed from `src/lib`.
- Contact form API at `src/app/api/contact/route.ts` using Gmail SMTP through Nodemailer.
- SEO metadata, Open Graph image support, JSON-LD organization schema, dynamic sitemap, and robots configuration.
- Google Analytics 4 support through `NEXT_PUBLIC_GA_ID`.
- Animation and media support through Framer Motion, Lottie, Three.js, and curated assets under `public`.
- Dockerfile and Firebase App Hosting configuration are included for deployment workflows.

## Tech Stack

- Next.js 16 with App Router
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui-style component structure with Radix UI primitives
- Framer Motion
- Lottie React
- Three.js, React Three Fiber, Drei, and react-globe.gl
- React Hook Form and Zod
- Nodemailer
- next-sitemap

## Requirements

- Node.js 20 or newer
- npm

## Quick Start

Install dependencies:

```bash
npm install
```

Create a `.env.local` file manually with the variables listed in the Environment Variables section below.

Start the development server:

```bash
npm run dev
```

The development server runs at:

```text
http://localhost:9002
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Environment Variables

| Variable | Required | Used by | Description |
| --- | --- | --- | --- |
| `EMAIL_USER` | Yes for contact form | `src/app/api/contact/route.ts` | Gmail account used to send contact notifications and confirmation emails. |
| `EMAIL_PASS` | Yes for contact form | `src/app/api/contact/route.ts` | Gmail app password for `EMAIL_USER`. Do not use a normal account password. |
| `NEXT_PUBLIC_GA_ID` | Optional | `src/app/layout.tsx` | Google Analytics 4 measurement ID. Analytics scripts load only when this value is set. |
| `NEXT_PUBLIC_SITE_URL` | Recommended | `src/app/sitemap.ts`, `src/app/robots.ts`, dynamic route metadata | Public site URL used for canonical sitemap, robots, and page metadata. Defaults to `https://www.lexocrates.com` in several app files. |

Example `.env.local`:

```env
EMAIL_USER=
EMAIL_PASS=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_SITE_URL=https://www.lexocrates.com
```

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Starts the Next.js development server on port `9002`. |
| `npm run build` | Creates a production build. |
| `npm run start` | Starts the production Next.js server. |
| `npm run lint` | Runs Next.js linting. |
| `npm run typecheck` | Runs TypeScript checks with `tsc --noEmit`. |

## Project Structure

```text
.
|-- src/
|   |-- app/                 # App Router routes, metadata, API routes, sitemap, robots
|   |-- components/
|   |   |-- animations/      # Motion, Lottie, and animation helpers
|   |   |-- forms/           # Contact form UI
|   |   |-- layout/          # Header, footer, and layout provider
|   |   |-- sections/        # Page-level website sections
|   |   `-- ui/              # Reusable UI primitives and shared components
|   |-- hooks/               # Custom React hooks
|   `-- lib/                 # Site data, utilities, SEO helpers, image metadata
|-- public/
|   |-- blog/                # Blog images
|   |-- images/              # Brand, hero, OG, and content images
|   `-- lottie/              # Lottie animation files
|-- docs/                    # Supporting documents and generated assets
|-- Dockerfile               # Standalone Next.js container build
|-- apphosting.yaml          # Firebase App Hosting configuration
|-- next-sitemap.config.js   # Postbuild sitemap generation settings
|-- next.config.ts           # Next.js configuration
|-- tailwind.config.ts       # Tailwind theme and plugin configuration
`-- package.json             # Scripts and dependencies
```

## Main Routes

| Route | Purpose |
| --- | --- |
| `/` | Home page |
| `/about` | Company overview |
| `/services` | Service listing |
| `/services/[slug]` | Individual service detail pages generated from `servicesList` |
| `/blog` | Blog listing |
| `/blog/[slug]` | Individual blog posts generated from `blogPosts` |
| `/team` | Team listing |
| `/team/[slug]` | Individual team profiles generated from `teamMembers` |
| `/lawyer` and `/lawyer/[slug]` | Lawyer listing and profile pages. The detail route currently keeps its profile data in the route file. |
| `/careers` | Careers page |
| `/contact` | Contact page and form |
| `/privacy-policy` | Privacy policy |
| `/terms-and-conditions` | Terms and conditions |
| `/cookies-policy` | Cookie policy |
| `/api/contact` | Contact form POST endpoint |

## Content Editing Guide

- Services are defined in `src/lib/services-data.ts`.
- Team profiles used by `/team/[slug]` are defined in `src/lib/team-data.ts`.
- Lawyer profiles used by `/lawyer/[slug]` are currently defined in `src/app/lawyer/[slug]/page.tsx`.
- Blog posts are defined in `src/lib/blog-data.ts`.
- Shared SEO helpers live in `src/lib/seo.ts`.
- Placeholder and content image metadata lives in `src/lib/placeholder-images.ts` and `src/lib/placeholder-images.json`.
- Header and footer navigation live under `src/components/layout`.
- Large page sections live under `src/components/sections`.

When adding a new service, team member, or blog post, update the relevant data file first. The dynamic routes and sitemap use those arrays to generate pages and URLs.

## Deployment

### Vercel or Node Hosting

Run:

```bash
npm run build
npm run start
```

Set the production environment variables in the hosting provider before deploying.

### Docker

The Dockerfile builds a standalone Next.js output using Node 20 Alpine:

```bash
docker build -t lexocrates .
docker run -p 3000:3000 --env-file .env.local lexocrates
```

The container exposes port `3000`.

### Firebase App Hosting

`apphosting.yaml` is included with `maxInstances: 1`. Add any required secrets and runtime configuration in Firebase before deploying.

## Current Notes

- Both `next.config.ts` and `next.config.mjs` are present. Treat `next.config.ts` as the richer current configuration and reconcile the files before making major configuration changes.
- The App Router generates `/sitemap.xml` and `/robots.txt` from `src/app/sitemap.ts` and `src/app/robots.ts`.

## Quality Checks

Before handing off or deploying changes, run:

```bash
npm run typecheck
npm run lint
npm run build
```

For contact form changes, also test a real form submission with valid Gmail app-password credentials in `.env.local`.

## Troubleshooting

### Contact form does not send

- Confirm `EMAIL_USER` and `EMAIL_PASS` are set.
- Use a Gmail app password for `EMAIL_PASS`.
- Check the server logs for the `/api/contact` response.

### Sitemap or robots URLs are wrong

- Set `NEXT_PUBLIC_SITE_URL` to the canonical production origin.
- Rebuild the project so the generated metadata routes use the latest environment.

### Build fails on lint or TypeScript

- `next.config.ts` currently enforces lint and TypeScript correctness during builds.
- Run `npm run typecheck` and `npm run lint` locally to isolate the failing file before rebuilding.
