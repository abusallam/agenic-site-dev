"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Bot, MessageSquare, User } from "lucide-react"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced"

export function EnhancedServicesSection() {
  const { t, isRTL } = useEnhancedTranslation()

  const services = [
    {
      id: "ai-agents",
      icon: Bot,
      title: t("hero.features.aiAgents.title"),
      description: t("hero.features.aiAgents.description"),
      features: [
        "Workflow Automation",
        "Decision Making AI",
        "System Integration",
        "Custom Training",
        "Real-time Analytics",
      ],
      cta: "Try AI Agents",
      link: "/ai-agents",
    },
    {
      id: "chatbots",
      icon: MessageSquare,
      title: t("hero.features.chatbots.title"),
      description: t("hero.features.chatbots.description"),
      features: [
        "Natural Language Processing",
        "Multi-language Support",
        "Context Awareness",
        "CRM Integration",
        "Analytics Dashboard",
      ],
      cta: "Try Chatbots",
      link: "/chatbots",
    },
    {
      id: "consulting",
      icon: User,
      title: t("hero.features.consulting.title"),
      description: t("hero.features.consulting.description"),
      features: [
        "AI Strategy Development",
        "Implementation Planning",
        "Team Training",
        "ROI Optimization",
        "Ongoing Support",
      ],
      cta: "Book Consultation",
      link: "/consulting",
    },
  ]

  return (
    <section
      id="services"
      className={`w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 ${isRTL ? "rtl" : ""}`}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our AI Solutions</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Comprehensive AI services tailored to your business needs.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="flex flex-col h-full">
              <CardHeader className="flex flex-col items-center text-center pb-4">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mb-4">
                  <service.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400 mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between p-6 pt-0">
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <Button asChild className="w-full">
                    <Link href={service.link}>{service.cta}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
