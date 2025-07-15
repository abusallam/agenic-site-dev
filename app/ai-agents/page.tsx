import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { CheckCircle, Lightbulb, Workflow, Scale, BarChart, Settings } from "lucide-react"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced"

export default function AIAgentsPage() {
  const { t, isRTL } = useEnhancedTranslation()

  return (
    <div className={`flex flex-col min-h-[100dvh] ${isRTL ? "rtl" : ""}`}>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              {t("nav.aiAgents")}
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl mt-4">{t("services.aiAgents.description")}</p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center mt-8">
              <Button className="bg-white text-blue-600 hover:bg-gray-100">{t("services.aiAgents.cta")}</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/20 bg-transparent">
                {t("ui.learnMore")}
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Lightbulb className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Workflow Automation</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  Automate repetitive tasks and complex workflows to free up your team for strategic initiatives.
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Workflow className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Decision Making AI</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  Leverage AI to make data-driven decisions, optimize processes, and improve outcomes.
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Scale className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Scalable Solutions</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  Our AI agents are designed to scale with your business, handling increasing demands seamlessly.
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                <BarChart className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Real-time Analytics</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  Gain instant insights into agent performance and business metrics with comprehensive dashboards.
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Settings className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Custom Training</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  Train AI agents with your specific data to ensure they understand your unique business context.
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                <CheckCircle className="h-12 w-12 text-teal-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Seamless Integration</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  Integrate AI agents effortlessly with your existing systems and applications.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl mt-4">
              Contact us today to discuss how our AI Agents can revolutionize your operations.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center mt-8">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">{t("nav.contact")}</Button>
              <Button variant="outline">{t("ui.bookDemo")}</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
