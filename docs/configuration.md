# Configuration Guide

This guide explains how to configure the application.

## Environment Variables

Create a `.env.local` file in the root of the project with the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

- `NEXT_PUBLIC_SUPABASE_URL`: The URL of your Supabase project.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: The anonymous key for your Supabase project.

## Brand Configuration

You can customize the brand information in `lib/brand.ts`. This includes the company name, tagline, and other brand-related settings.
