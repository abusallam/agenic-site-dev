import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { TranslationProvider } from "@/lib/i18n-enhanced"
import { EnhancedNavigation } from "@/components/navigation-enhanced"
import { EnhancedFooter } from "@/components/footer-enhanced"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "main.consulting.sa - AI Solutions & Expert Consulting",
    template: "%s | main.consulting.sa",
  },
  description:
    "Professional AI consulting services and cutting-edge SaaS solutions for AI agents and chatbots by Asim Abu Salam",
  keywords: [
    "AI consulting",
    "artificial intelligence",
    "machine learning",
    "AI agents",
    "chatbots",
    "automation",
    "digital transformation",
    "Saudi Arabia",
    "consulting services",
    "Asim Abu Salam",
  ],
  authors: [{ name: "Asim Abu Salam" }],
  creator: "Asim Abu Salam",
  publisher: "main.consulting.sa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://main.consulting.sa"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "ar-SA": "/ar",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_SA",
    url: "https://main.consulting.sa",
    siteName: "main.consulting.sa",
    title: "main.consulting.sa - AI Solutions & Expert Consulting",
    description: "Professional AI consulting services and cutting-edge SaaS solutions for AI agents and chatbots",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "main.consulting.sa - AI Solutions & Expert Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "main.consulting.sa - AI Solutions & Expert Consulting",
    description: "Professional AI consulting services and cutting-edge SaaS solutions",
    images: ["/og-image.jpg"],
    creator: "@mainconsulting",
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <TranslationProvider>
            <div className="relative flex min-h-screen flex-col">
              <EnhancedNavigation />
              <main className="flex-1">{children}</main>
              <EnhancedFooter />
            </div>
            <Toaster />
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
