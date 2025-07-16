"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Briefcase, Award, DollarSign } from "lucide-react"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced.tsx"
import { cn } from "@/lib/utils"

export function EnhancedConsultingHero() {
  const { t, isRTL } = useEnhancedTranslation()

  const expertiseAreas = [
    "AI Strategy Development",
    "Machine Learning Implementation",
    "Digital Transformation",
    "Process Automation",
    "Team Training & Development",
  ]

  const stats = [
    { number: "10+", label: "Years Experience", icon: Award },
    { number: "200+", label: "Successful Projects", icon: Briefcase },
    { number: "300%", label: "Average ROI Increase", icon: DollarSign },
    { number: "50+", label: "Enterprise Clients", icon: Users },
  ]

  const services = [
    {
      title: "AI Strategy Development",
      description: "Comprehensive AI roadmap aligned with your business objectives and market opportunities.",
      duration: "2-4 weeks",
      deliverables: [
        "Current state assessment",
        "AI opportunity identification",
        "Implementation roadmap",
        "ROI projections",
        "Risk assessment",
      ],
    },
    {
      title: "Implementation Consulting",
      description: "Hands-on guidance for successful AI project execution and deployment.",
      duration: "3-6 months",
      deliverables: [
        "Technical architecture design",
        "Team training and development",
        "Vendor selection guidance",
        "Project management support",
        "Quality assurance",
      ],
    },
    {
      title: "Digital Transformation",
      description: "Complete organizational transformation with AI at the core of your business strategy.",
      duration: "6-12 months",
      deliverables: [
        "Organization-wide AI strategy",
        "Change management support",
        "Multi-phase implementation",
        "Performance monitoring",
        "Continuous optimization",
      ],
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-600 to-teal-600 text-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          {t("services.consulting.title")}
        </h2>
        <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
          {t("services.consulting.description")}
        </p>
        <div
          className={cn("flex flex-col gap-2 min-[400px]:flex-row justify-center mt-8", isRTL && "flex-row-reverse")}
        >
          <Button className="bg-white text-green-600 hover:bg-gray-100">{t("services.consulting.cta")}</Button>
          <Button variant="outline" className="text-white border-white hover:bg-white/20 bg-transparent">
            <Link href={`/${t("ui.learnMore")}`}>{t("ui.learnMore")}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
