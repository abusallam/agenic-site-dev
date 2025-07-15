import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Settings, TrendingUp } from "lucide-react"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced"

export default function AIAgentsPage() {
  const { t, isRTL } = useEnhancedTranslation()

  return (
    <div className={`flex flex-col min-h-[100dvh] ${isRTL ? "rtl" : ""}`}>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              {t("nav.aiAgents")}
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              {t("hero.features.aiAgents.description")}
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center mt-8">
              <Button className="bg-white text-blue-600 hover:bg-gray-100">{t("hero.primaryCta")}</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/20 bg-transparent">
                {t("hero.secondaryCta")}
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Lightbulb className="w-8 h-8 text-blue-500 mb-2" />
                  <CardTitle>Intelligent Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Automate repetitive tasks and complex workflows with AI agents that learn and adapt.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Settings className="w-8 h-8 text-purple-500 mb-2" />
                  <CardTitle>Seamless Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Integrate AI agents effortlessly with your existing systems and applications.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <TrendingUp className="w-8 h-8 text-green-500 mb-2" />
                  <CardTitle>Scalable Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Scale your operations with AI agents that handle increasing workloads efficiently.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to transform your business?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Contact us today to learn how AI agents can revolutionize your operations.
            </p>
            <Button className="mt-8">{t("nav.contact")}</Button>
          </div>
        </section>
      </main>
    </div>
  )
}
