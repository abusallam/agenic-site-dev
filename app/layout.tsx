import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider-enhanced"
import { EnhancedNavigation } from "@/components/navigation-enhanced"
import { EnhancedFooter } from "@/components/footer-enhanced"
import { Toaster } from "@/components/ui/toaster"
import { brandConfig } from "@/lib/brand"

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
    default: `${brandConfig.name} - ${brandConfig.tagline}`,
    template: `%s | ${brandConfig.name}`,
  },
  description: brandConfig.description,
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
  ],
  authors: [{ name: brandConfig.founder }],
  creator: brandConfig.founder,
  publisher: brandConfig.name,
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
    siteName: brandConfig.name,
    title: `${brandConfig.name} - ${brandConfig.tagline}`,
    description: brandConfig.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${brandConfig.name} - AI Solutions & Expert Consulting`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brandConfig.name} - ${brandConfig.tagline}`,
    description: brandConfig.description,
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
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
          <div className="relative flex min-h-screen flex-col">
            <EnhancedNavigation />
            <main className="flex-1">{children}</main>
            <EnhancedFooter />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
