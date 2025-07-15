"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Bot, MessageSquare, User } from "lucide-react"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced"

export function EnhancedServicesSection() {
  const { t, isRTL } = useEnhancedTranslation()

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className={`flex flex-col items-center justify-center space-y-4 text-center ${isRTL ? "rtl" : ""}`}>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("services.title")}</h2>
            <p className="max-w-[900px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("services.subtitle")}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-3 lg:gap-12">
          <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <Bot className="h-10 w-10 text-blue-600 mb-4" />
              <CardTitle>{t("services.aiAgents.title")}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-gray-600 dark:text-gray-400 mb-4">{t("services.aiAgents.description")}</p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                {t("services.aiAgents.features")
                  .split(",")
                  .map((feature, index) => (
                    <li key={index} className={`flex items-center ${isRTL ? "flex-row-reverse text-right" : ""}`}>
                      <Check className={`h-4 w-4 text-green-500 ${isRTL ? "ml-2" : "mr-2"}`} />
                      {feature.trim()}
                    </li>
                  ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{t("services.aiAgents.pricing")}</div>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/ai-agents">{t("services.aiAgents.cta")}</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <MessageSquare className="h-10 w-10 text-purple-600 mb-4" />
              <CardTitle>{t("services.chatbots.title")}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-gray-600 dark:text-gray-400 mb-4">{t("services.chatbots.description")}</p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                {t("services.chatbots.features")
                  .split(",")
                  .map((feature, index) => (
                    <li key={index} className={`flex items-center ${isRTL ? "flex-row-reverse text-right" : ""}`}>
                      <Check className={`h-4 w-4 text-green-500 ${isRTL ? "ml-2" : "mr-2"}`} />
                      {feature.trim()}
                    </li>
                  ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{t("services.chatbots.pricing")}</div>
              <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                <Link href="/chatbots">{t("services.chatbots.cta")}</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <User className="h-10 w-10 text-green-600 mb-4" />
              <CardTitle>{t("services.consulting.title")}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-gray-600 dark:text-gray-400 mb-4">{t("services.consulting.description")}</p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                {t("services.consulting.features")
                  .split(",")
                  .map((feature, index) => (
                    <li key={index} className={`flex items-center ${isRTL ? "flex-row-reverse text-right" : ""}`}>
                      <Check className={`h-4 w-4 text-green-500 ${isRTL ? "ml-2" : "mr-2"}`} />
                      {feature.trim()}
                    </li>
                  ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{t("services.consulting.pricing")}</div>
              <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                <Link href="/consulting">{t("services.consulting.cta")}</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
