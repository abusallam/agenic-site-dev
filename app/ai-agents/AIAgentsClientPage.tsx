"use client"

import { EnhancedNavigation } from "@/components/navigation-enhanced"
import { EnhancedFooter } from "@/components/footer-enhanced"
import { translations } from "@/lib/i18n-enhanced"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Atom, Lightbulb, TrendingUp } from "lucide-react"

export default function AIAgentsClientPage() {
  // This component is a Server Component, so useEnhancedTranslation cannot be called directly here.
  // We pass the locale from params to client components if needed, or fetch translations directly for static content.
  // For dynamic content that needs client-side translation, use useEnhancedTranslation in a client component.

  // For this example, we'll assume the content is mostly static and translated via metadata or passed down.
  // If interactive elements need translation, they should be in a 'use client' component.

  // Since this is a server component, we can directly access translations for static content.
  const currentLocale = "en" // This will be replaced by the actual locale from params in a real setup
  const t = (key: string) => {
    const keys = key.split(".")
    let current: any = translations[currentLocale] || translations.en
    for (const k of keys) {
      if (current && typeof current === "object" && k in current) {
        current = current[k]
      } else {
        return `Missing translation for ${key}`
      }
    }
    return typeof current === "string" ? current : `Missing translation for ${key}`
  }

  const isRTL = currentLocale === "ar" // Assuming 'ar' is the only RTL locale

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <EnhancedNavigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className={cn("w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary-500 to-primary-700 text-primary-foreground", isRTL && "text-right")}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  {t("aiAgentsPage.hero.title")}
                </h1>
                <p className="max-w-[900px] text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("aiAgentsPage.hero.subtitle")}
                </p>
              </div>
              <Button asChild className="bg-primary-foreground text-primary-600 hover:bg-primary-100">
                <Link href={`/${currentLocale}/contact`}>{t("aiAgentsPage.hero.cta")}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={cn("w-full py-12 md:py-24 lg:py-32", isRTL && "text-right")}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {t("aiAgentsPage.features.title")}
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {t("services.aiAgents.description")}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center space-x-4">
                  <Atom className="h-8 w-8 text-primary-500" />
                  <CardTitle>{t("aiAgentsPage.features.feature1.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{t("aiAgentsPage.features.feature1.description")}</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center space-x-4">
                  <Lightbulb className="h-8 w-8 text-primary-500" />
                  <CardTitle>{t("aiAgentsPage.features.feature2.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{t("aiAgentsPage.features.feature2.description")}</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center space-x-4">
                  <TrendingUp className="h-8 w-8 text-primary-500" />
                  <CardTitle>{t("aiAgentsPage.features.feature3.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{t("aiAgentsPage.features.feature3.description")}</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={cn("w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800", isRTL && "text-right")}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {t("aiAgentsPage.process.title")}
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {t("services.aiAgents.description")}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>{t("aiAgentsPage.process.step1.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{t("aiAgentsPage.process.step1.description")}</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{t("aiAgentsPage.process.step2.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{t("aiAgentsPage.process.step2.description")}</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{t("aiAgentsPage.process.step3.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{t("aiAgentsPage.process.step3.description")}</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <EnhancedFooter />
    </div>
  )
}\
