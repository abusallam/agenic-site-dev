# Gemini Project Overview

This document provides a summary of the `consulting-sa-website` project, generated by Gemini.

## Project Description

The project is a professional website for `consulting.sa` (المستشار.السعودية), offering AI consulting services and SaaS solutions. The website is built with Next.js and utilizes a modern tech stack for a performant and scalable user experience.

## Key Technologies

- **Framework:** [Next.js](https://nextjs.org/) (v15.4.1)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with [Shadcn/ui](https://ui.shadcn.com/) components
- **Backend:** [Supabase](https://supabase.io/) for authentication and database services
- **Deployment:** [Vercel](https://vercel.com/) and [Docker](https://www.docker.com/)

## Project Structure

The project follows a standard Next.js `app` directory structure.

- `app/`: Contains the application's pages and API routes.
- `components/`: Reusable React components, including UI elements from Shadcn.
- `lib/`: Utility functions, Supabase client, and other shared logic.
- `public/`: Static assets like images and fonts.
- `styles/`: Global CSS styles.
- `docs/`: Project documentation.

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run the development server:**
    ```bash
    npm run dev
    ```
3.  **Build for production:**
    ```bash
    npm run build
    ```
4.  **Run in production mode:**
    ```bash
    npm start
    ```

## Available Scripts

- `dev`: Starts the development server.
- `build`: Creates a production build.
- `start`: Starts the production server.
- `lint`: Lints the codebase using ESLint.
- `type-check`: Checks for TypeScript errors.
- `format`: Formats the code with Prettier.
- `docker:build`: Builds a Docker image for the application.
- `docker:run`: Runs the Docker container.
- `docker:compose`: Runs the application using Docker Compose.

## Continuous Integration

The project uses GitHub Actions for CI/CD. The workflow is defined in `.github/workflows/ci.yml` and includes the following steps:

1.  **Checkout code**
2.  **Setup Node.js** (versions 18.x and 20.x)
3.  **Install dependencies** (`npm ci`)
4.  **Run linting** (`npm run lint`)
5.  **Run type checking** (`npm run type-check`)
6.  **Build project** (`npm run build`)
7.  **Deploy to Vercel** on push to the `main` branch.

## Supabase Integration

The project uses Supabase for its backend. The Supabase client is initialized in `lib/supabase.ts`. The integration includes helper functions for:

- **Authentication:** Sign up, sign in, sign out, get current user, reset password.
- **Database:** Submit contact forms, subscribe to the newsletter, manage user profiles.

The following database tables are used:

- `contact_submissions`
- `newsletter_subscriptions`
- `user_profiles`
