# Lexocrates - Legal Process Outsourcing Website

## Project Overview

This project is a modern, fully-responsive corporate website for **Lexocrates**, a Legal Process Outsourcing (LPO) firm. It showcases the company's services, leadership team, blog, career opportunities, and contact information. The site is built with a focus on professional design, performance, and a seamless user experience, leveraging modern web technologies.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 14.x (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [ShadCN/UI](https://ui.shadcn.com/) for component primitives.
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for UI animations.
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) for validation.
- **Icons**: [Lucide React](https://lucide.dev/)
- **AI Features**: [Genkit](https://firebase.google.com/docs/genkit) for generative AI capabilities.
- **Contact Form Backend**: [Nodemailer](https://nodemailer.com/) via Next.js API Routes.

## System Requirements

- **Node.js**: `v20.x` or higher
- **Package Manager**: `npm`
- **Operating System**: macOS, Windows, or Linux

## Folder Structure

The project follows a standard Next.js App Router structure with some key conventions:

```
.
├── src/
│   ├── app/                # Main application routes (pages)
│   ├── components/         # Reusable React components
│   │   ├── animations/     # Animation components (Framer Motion, Lottie)
│   │   ├── forms/          # Form components (e.g., contact form)
│   │   ├── layout/         # Layout components (Header, Footer)
│   │   ├── sections/       # Large, reusable page sections (Hero, About, etc.)
│   │   └── ui/             # Core UI components from ShadCN/UI
│   ├── lib/                # Utility functions, data, and configs
│   ├── ai/                 # Genkit configuration and AI flows
│   └── hooks/              # Custom React hooks
├── public/                 # Static assets (images, fonts, Lottie files)
├── .env.local.example      # Example environment variables file
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── package.json            # Project dependencies and scripts
```

## Installation Guide

Follow these steps to get the development environment running.

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd <project-folder>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root of the project by copying the example file:

```bash
cp .env.local.example .env.local
```

Then, fill in the required values in `.env.local`. See the [Environment Variables](#environment-variables) section for more details.

### 4. Run the Development Server

This command starts the Next.js development server on `http://localhost:9002`.

```bash
npm run dev
```

### 5. Build for Production

This command creates an optimized production build of the application.

```bash
npm run build
```

### 6. Start the Production Server

This command starts the production server.

```bash
npm run start
```

## Environment Variables

The project requires the following environment variables to be set in a `.env.local` file for full functionality:

| Variable      | Description                                                 | Example                          |
|---------------|-------------------------------------------------------------|----------------------------------|
| `GEMINI_API_KEY` | Your API key for the Google AI (Gemini) service, used by Genkit. | `AIzaSy...`                      |
| `EMAIL_USER`  | The Gmail account username used by Nodemailer to send emails. | `your-email@gmail.com`           |
| `EMAIL_PASS`  | An [App Password](https://support.google.com/accounts/answer/185833) for the `EMAIL_USER` Gmail account. | `your-app-password`              |


**`.env.local.example`:**
```env
# Google AI API Key for Genkit
GEMINI_API_KEY=

# Nodemailer configuration for the contact form
# Use a Gmail account and generate an App Password
EMAIL_USER=
EMAIL_PASS=
```

## Available Scripts

The `package.json` file includes the following scripts:

- `npm run dev`: Starts the Next.js development server.
- `npm run genkit:dev`: Starts the Genkit development server for AI flows.
- `npm run build`: Creates a production-ready build.
- `npm run start`: Runs the production server.
- `npm run lint`: Lints the codebase using ESLint.
- `npm run typecheck`: Performs a TypeScript type check.

## Common Errors & Fixes

- **`EJSONPARSE` error on `npm install` or `npm run dev`**: This indicates that your `package.json` is malformed. This can happen due to unresolved merge conflicts. Ensure the file is valid JSON.
- **Contact form fails to send**:
    - Check that `EMAIL_USER` and `EMAIL_PASS` are correctly set in `.env.local`.
    - Ensure you are using a Gmail **App Password**, not your regular account password.
    - Verify that "Less secure app access" is configured correctly for the sending Gmail account if not using 2FA.
- **AI features are not working**: Make sure the `GEMINI_API_KEY` is valid and has the necessary permissions.

## Best Practices

- **Component Structure**: Create reusable components in the `src/components` directory. Larger, page-specific components are organized into `sections`.
- **Styling**: Use Tailwind CSS utility classes for styling. For new reusable styles, consider creating a new component or extending the Tailwind theme in `tailwind.config.ts`.
- **Data Management**: Static data like blog posts and service descriptions are managed in the `src/lib` folder.
- **Code Quality**: Before committing, run `npm run lint` and `npm run typecheck` to catch errors and maintain code consistency.
