import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { I18nProvider } from "@/lib/i18n"
import { ErrorBoundary } from "@/components/error-boundary"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Main Consulting - AI Solutions & Expert Consulting",
  description:
    "Professional AI consulting services and cutting-edge SaaS solutions for AI agents and chatbots by Asim Abu Salam",
  keywords: "AI consulting, chatbots, AI agents, SaaS, Asim Abu Salam, artificial intelligence, automation",
  authors: [{ name: "Asim Abu Salam" }],
  creator: "Main Consulting",
  publisher: "Main Consulting",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://main.consulting.sa",
    title: "Main Consulting - AI Solutions & Expert Consulting",
    description: "Professional AI consulting services and cutting-edge SaaS solutions for AI agents and chatbots",
    siteName: "Main Consulting",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Main Consulting - AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Main Consulting - AI Solutions & Expert Consulting",
    description: "Professional AI consulting services and cutting-edge SaaS solutions",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1e40af" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ErrorBoundary>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <I18nProvider>
              {children}
              <Toaster />
            </I18nProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
