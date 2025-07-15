import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Book, FileText, Code, Search, HelpCircle } from "lucide-react"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced"

export default function DocumentationPage() {
  const { t, isRTL } = useEnhancedTranslation()

  return (
    <div className={`flex flex-col min-h-[100dvh] ${isRTL ? "rtl" : ""}`}>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              {t("nav.documentation")}
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl mt-4">
              Find comprehensive guides, API references, and tutorials to get started with our AI solutions.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center mt-8">
              <Button className="bg-white text-teal-600 hover:bg-gray-100">{t("ui.getStarted")}</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/20 bg-transparent">
                {t("ui.contactUs")}
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Book className="h-12 w-12 text-teal-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Getting Started Guides</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  Step-by-step instructions to set up and configure your AI agents and chatbots.
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                <FileText className="h-12 w-12 text-cyan-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">API Reference</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  Detailed documentation for our API endpoints, data models, and authentication.
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Code className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Code Examples</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  Practical code snippets and examples to help you integrate our solutions into your applications.
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Search className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Searchable Knowledge Base</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  Quickly find answers to common questions and troubleshooting tips.
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                <HelpCircle className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">FAQs and Troubleshooting</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  Answers to frequently asked questions and solutions for common issues.
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                <FileText className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Release Notes</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  Stay up-to-date with the latest features, improvements, and bug fixes.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Need More Help?</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl mt-4">
              Our support team is ready to assist you with any questions or issues.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center mt-8">
              <Button className="bg-teal-600 text-white hover:bg-teal-700">{t("nav.contact")}</Button>
              <Button variant="outline">{t("ui.bookDemo")}</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
