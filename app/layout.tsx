import type React from "react"
import type { Metadata } from "next"
import { Bitter, Noto_Sans_Arabic } from "next/font/google"
import "./globals.css"
import "../styles/animations.css"
import { ThemeProvider } from "@/components/theme-provider-enhanced"
import { TranslationProvider } from "@/lib/i18n-enhanced"
import { Toaster } from "@/components/ui/toaster"
import { ErrorBoundary } from "@/components/error-boundary"
import PerformanceMonitor from "@/components/performance-monitor"
import { brandConfig } from "@/lib/brand"

const bitter = Bitter({
  subsets: ["latin"],
  variable: "--font-bitter",
  weight: ["300", "400", "500", "600", "700"],
})

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: {
    default: brandConfig.name,
    template: `%s | ${brandConfig.name}`,
  },
  description: brandConfig.description,
  keywords: ["AI", "Consulting", "Chatbots", "AI Agents", "Saudi Arabia", "Technology", "consulting.sa", "المستشار.السعودية"],
  authors: [{ name: brandConfig.name }],
  creator: brandConfig.name,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://consulting.sa",
    title: brandConfig.name,
    description: brandConfig.description,
    siteName: brandConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: brandConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: brandConfig.name,
    description: brandConfig.description,
    creator: "@consultingsa",
    images: ["/og-image.png"],
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
      <body className={`${bitter.variable} ${notoSansArabic.variable} font-sans antialiased`}>
        <ErrorBoundary>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <TranslationProvider>
              {children}
              <Toaster />
              <PerformanceMonitor />
            </TranslationProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
