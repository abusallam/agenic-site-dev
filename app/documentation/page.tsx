import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Code, Lightbulb } from "lucide-react"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced"

export default function DocumentationPage() {
  const { t, isRTL } = useEnhancedTranslation()

  return (
    <div className={`flex flex-col min-h-[100dvh] ${isRTL ? "rtl" : ""}`}>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-500 to-green-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              {t("nav.documentation")}
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Find comprehensive guides, API references, and tutorials to get started with our AI solutions.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center mt-8">
              <Button className="bg-white text-teal-600 hover:bg-gray-100">{t("nav.getStarted")}</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/20 bg-transparent">
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Book className="w-8 h-8 text-teal-500 mb-2" />
                  <CardTitle>Getting Started Guides</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Step-by-step tutorials to help you set up and configure your AI agents and chatbots.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Code className="w-8 h-8 text-green-500 mb-2" />
                  <CardTitle>API Reference</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Detailed documentation for our APIs, including endpoints, request formats, and examples.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Lightbulb className="w-8 h-8 text-blue-500 mb-2" />
                  <CardTitle>Best Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Learn how to optimize your AI solutions for performance, security, and scalability.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Can't find what you're looking for?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Our support team is ready to assist you.
            </p>
            <Button className="mt-8">{t("nav.contact")}</Button>
          </div>
        </section>
      </main>
    </div>
  )
}
