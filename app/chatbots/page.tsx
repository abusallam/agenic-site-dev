import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Zap, BarChart } from "lucide-react"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced"

export default function ChatbotsPage() {
  const { t, isRTL } = useEnhancedTranslation()

  return (
    <div className={`flex flex-col min-h-[100dvh] ${isRTL ? "rtl" : ""}`}>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 to-pink-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              {t("nav.chatbots")}
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              {t("hero.features.chatbots.description")}
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center mt-8">
              <Button className="bg-white text-purple-600 hover:bg-gray-100">{t("hero.primaryCta")}</Button>
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
                  <MessageCircle className="w-8 h-8 text-purple-500 mb-2" />
                  <CardTitle>24/7 Customer Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Provide instant support to your customers around the clock with intelligent chatbots.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="w-8 h-8 text-pink-500 mb-2" />
                  <CardTitle>Natural Language Understanding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Chatbots powered by advanced NLP to understand and respond naturally.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart className="w-8 h-8 text-blue-500 mb-2" />
                  <CardTitle>Performance Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Monitor chatbot performance and gain insights with comprehensive analytics.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Enhance your customer experience
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Discover how our AI chatbot solutions can transform your customer service.
            </p>
            <Button className="mt-8">{t("nav.contact")}</Button>
          </div>
        </section>
      </main>
    </div>
  )
}
