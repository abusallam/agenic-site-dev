"use client"

import { EnhancedNavigation } from "@/components/navigation-enhanced"
import { EnhancedFooter } from "@/components/footer-enhanced"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced.tsx"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Atom, Lightbulb, TrendingUp, MessageCircle, Zap, Users } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ServicesClientPage() {
  const { t, isRTL } = useEnhancedTranslation()

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <EnhancedNavigation />
      <main className="flex-1">
        <section className={cn("w-full py-12 md:py-24 lg:py-32", isRTL && "text-right")}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  {t("servicesPage.title")}
                </h1>
                <p className="max-w-[900px] text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("servicesPage.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <Tabs defaultValue="ai-agents" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="ai-agents">AI Agents</TabsTrigger>
            <TabsTrigger value="chatbots">Chatbots</TabsTrigger>
          </TabsList>
          <TabsContent value="ai-agents">
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
          </TabsContent>
          <TabsContent value="chatbots">
            <section className={cn("w-full py-12 md:py-24 lg:py-32", isRTL && "text-right")}>
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("chatbotsPage.benefits.title")}</h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      {t("services.chatbots.description")}
                    </p>
                  </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-3">
                  <Card>
                    <CardHeader className="flex flex-row items-center space-x-4">
                      <MessageCircle className="h-8 w-8 text-blue-500" />
                      <CardTitle>{t("chatbotsPage.benefits.benefit1.title")}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{t("chatbotsPage.benefits.benefit1.description")}</CardDescription>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center space-x-4">
                      <Zap className="h-8 w-8 text-blue-500" />
                      <CardTitle>{t("chatbotsPage.benefits.benefit2.title")}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{t("chatbotsPage.benefits.benefit2.description")}</CardDescription>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center space-x-4">
                      <Users className="h-8 w-8 text-blue-500" />
                      <CardTitle>{t("chatbotsPage.benefits.benefit3.title")}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{t("chatbotsPage.benefits.benefit3.description")}</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </main>
      <EnhancedFooter />
    </div>
  )
}
