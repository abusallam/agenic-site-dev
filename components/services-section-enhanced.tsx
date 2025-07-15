"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, MessageSquare, User } from "lucide-react"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced"
import { cn } from "@/lib/utils"

export function EnhancedServicesSection() {
  const { t, isRTL } = useEnhancedTranslation()

  const services = [
    {
      title: t("services.aiAgents.title"),
      description: t("services.aiAgents.description"),
      icon: Bot,
      href: "/ai-agents",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
    },
    {
      title: t("services.chatbots.title"),
      description: t("services.chatbots.description"),
      icon: MessageSquare,
      href: "/chatbots",
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
    },
    {
      title: t("services.consulting.title"),
      description: t("services.consulting.description"),
      icon: User,
      href: "/consulting",
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/20",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900 dark:text-white">
            Our Core Services
          </h2>
          <p className="max-w-[700px] mx-auto text-gray-600 dark:text-gray-400 mt-4">
            We offer a range of AI-powered solutions and expert consulting to help your business thrive.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={cn("h-16 w-16 rounded-full flex items-center justify-center mb-4", service.bgColor)}>
                <service.icon className={cn("h-8 w-8", service.color)} />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </CardDescription>
                <Button asChild variant="outline">
                  <Link href={service.href}>{service.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
