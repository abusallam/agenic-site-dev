import type { Metadata } from "next"
import { EnhancedNavigation } from "@/components/navigation-enhanced"
import { EnhancedFooter } from "@/components/footer-enhanced"
import { translations } from "@/lib/i18n-enhanced"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Code, LifeBuoy } from "lucide-react"

// Function to generate metadata for each locale
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale || "en"
  const t = (key: string) => {
    const keys = key.split(".")
    let current: any = translations[locale] || translations.en
    for (const k of keys) {
      if (current && typeof current === "object" && k in current) {
        current = current[k]
      } else {
        return `Missing translation for ${key}`
      }
    }
    return typeof current === "string" ? current : `Missing translation for ${key}`
  }

  return {
    title: t("documentationPage.title"),
    description: t("documentationPage.description"),
  }
}

export default function DocumentationPage() {
  // This component is a Server Component, so useEnhancedTranslation cannot be called directly here.
  // We pass the locale from params to client components if needed, or fetch translations directly for static content.
  // For dynamic content that needs client-side translation, use useEnhancedTranslation in a client component.

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
        <section
          className={cn(
            "w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-500 to-green-700 text-white",
            isRTL && "text-right",
          )}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  {t("documentationPage.hero.title")}
                </h1>
                <p className="max-w-[900px] text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("documentationPage.hero.subtitle")}
                </p>
              </div>
              <Button asChild className="bg-white text-green-600 hover:bg-green-100">
                <Link href={`/${currentLocale}/documentation`}>{t("documentationPage.hero.cta")}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Sections */}
        <section className={cn("w-full py-12 md:py-24 lg:py-32", isRTL && "text-right")}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {t("documentationPage.sections.title")}
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {t("documentationPage.description")}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center space-x-4">
                  <Book className="h-8 w-8 text-green-500" />
                  <CardTitle>{t("documentationPage.sections.gettingStarted.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{t("documentationPage.sections.gettingStarted.description")}</CardDescription>
                  <ul className="mt-4 space-y-2">
                    <li>
                      <Link
                        className="text-green-600 hover:underline"
                        href={`/${currentLocale}/documentation/installation`}
                      >
                        {t("documentationPage.sections.gettingStarted.link1")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-green-600 hover:underline"
                        href={`/${currentLocale}/documentation/quick-start`}
                      >
                        {t("documentationPage.sections.gettingStarted.link2")}
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center space-x-4">
                  <Code className="h-8 w-8 text-green-500" />
                  <CardTitle>{t("documentationPage.sections.apiReference.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{t("documentationPage.sections.apiReference.description")}</CardDescription>
                  <ul className="mt-4 space-y-2">
                    <li>
                      <Link
                        className="text-green-600 hover:underline"
                        href={`/${currentLocale}/documentation/api/authentication`}
                      >
                        {t("documentationPage.sections.apiReference.link1")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-green-600 hover:underline"
                        href={`/${currentLocale}/documentation/api/agent`}
                      >
                        {t("documentationPage.sections.apiReference.link2")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-green-600 hover:underline"
                        href={`/${currentLocale}/documentation/api/chatbot`}
                      >
                        {t("documentationPage.sections.apiReference.link3")}
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center space-x-4">
                  <LifeBuoy className="h-8 w-8 text-green-500" />
                  <CardTitle>{t("documentationPage.sections.troubleshooting.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{t("documentationPage.sections.troubleshooting.description")}</CardDescription>
                  <ul className="mt-4 space-y-2">
                    <li>
                      <Link
                        className="text-green-600 hover:underline"
                        href={`/${currentLocale}/documentation/troubleshooting/common-errors`}
                      >
                        {t("documentationPage.sections.troubleshooting.link1")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-green-600 hover:underline"
                        href={`/${currentLocale}/documentation/troubleshooting/debugging-tips`}
                      >
                        {t("documentationPage.sections.troubleshooting.link2")}
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <EnhancedFooter />
    </div>
  )
}
