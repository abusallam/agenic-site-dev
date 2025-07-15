import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { MessageCircle, Languages, Brain, Database, BarChart, Settings } from "lucide-react"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced"

export default function ChatbotsPage() {
  const { t, isRTL } = useEnhancedTranslation()

  return (
    <div className={`flex flex-col min-h-[100dvh] ${isRTL ? "rtl" : ""}`}>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              {t("nav.chatbots")}
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl mt-4">{t("services.chatbots.description")}</p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center mt-8">
              <Button className="bg-white text-purple-600 hover:bg-gray-100">{t("services.chatbots.cta")}</Button>
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
                <MessageCircle className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Natural Language Processing</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  Our chatbots understand and respond to natural language, providing a seamless conversational
                  experience.
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Languages className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Multi-language Support</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  Serve a global audience with chatbots that support multiple languages, including Arabic.
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Brain className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Context Awareness</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  Chatbots maintain context throughout conversations, leading to more relevant and helpful responses.
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Database className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">CRM Integration</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  Seamlessly integrate with your existing CRM systems for personalized customer interactions.
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                <BarChart className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Analytics Dashboard</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  Monitor chatbot performance, user engagement, and identify areas for improvement with detailed
                  analytics.
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Settings className="h-12 w-12 text-teal-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Customizable Responses</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  Tailor chatbot responses and flows to match your brand voice and specific business needs.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Enhance Your Customer Experience
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl mt-4">
              Deploy intelligent chatbots that provide instant support and improve customer satisfaction.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center mt-8">
              <Button className="bg-purple-600 text-white hover:bg-purple-700">{t("nav.contact")}</Button>
              <Button variant="outline">{t("ui.bookDemo")}</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
