import type React from "react"
import type { Metadata } from "next"
import { Inter, Cairo } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider-enhanced"
import { TranslationProvider } from "@/lib/i18n-enhanced"
import { Toaster } from "@/components/ui/toaster"
import { brandConfig } from "@/lib/brand"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
})

export const metadata: Metadata = {
  title: {
    default: brandConfig.name,
    template: `%s | ${brandConfig.name}`,
  },
  description: brandConfig.description,
  keywords: ["AI", "Consulting", "Chatbots", "AI Agents", "Saudi Arabia", "Technology"],
  authors: [{ name: brandConfig.name }],
  creator: brandConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://main.consulting.sa",
    title: brandConfig.name,
    description: brandConfig.description,
    siteName: brandConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: brandConfig.name,
    description: brandConfig.description,
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
      <body className={`${inter.variable} ${cairo.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <TranslationProvider>
            {children}
            <Toaster />
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
