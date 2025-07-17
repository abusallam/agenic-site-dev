"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Briefcase, Award, DollarSign } from "lucide-react"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced"
import { cn } from "@/lib/utils"

export function EnhancedConsultingHero() {
  const { t, isRTL } = useEnhancedTranslation()

  const expertiseAreas = [
    t("consultingPage.hero.expertiseAreas.aiStrategy"),
    t("consultingPage.hero.expertiseAreas.mlImplementation"),
    t("consultingPage.hero.expertiseAreas.digitalTransformation"),
    t("consultingPage.hero.expertiseAreas.processAutomation"),
    t("consultingPage.hero.expertiseAreas.teamTraining"),
  ]

  const stats = [
    { number: "10+", label: t("consultingPage.hero.stats.yearsExperience"), icon: Award },
    { number: "200+", label: t("consultingPage.hero.stats.successfulProjects"), icon: Briefcase },
    { number: "300%", label: t("consultingPage.hero.stats.roiIncrease"), icon: DollarSign },
    { number: "50+", label: t("consultingPage.hero.stats.enterpriseClients"), icon: Users },
  ]

  const services = [
    {
      title: t("consultingPage.hero.services.aiStrategy.title"),
      description: t("consultingPage.hero.services.aiStrategy.description"),
      duration: "2-4 weeks",
      deliverables: [
        t("consultingPage.hero.services.aiStrategy.deliverables.assessment"),
        t("consultingPage.hero.services.aiStrategy.deliverables.opportunity"),
        t("consultingPage.hero.services.aiStrategy.deliverables.roadmap"),
        t("consultingPage.hero.services.aiStrategy.deliverables.roi"),
        t("consultingPage.hero.services.aiStrategy.deliverables.risk"),
      ],
    },
    {
      title: t("consultingPage.hero.services.implementation.title"),
      description: t("consultingPage.hero.services.implementation.description"),
      duration: "3-6 months",
      deliverables: [
        t("consultingPage.hero.services.implementation.deliverables.architecture"),
        t("consultingPage.hero.services.implementation.deliverables.training"),
        t("consultingPage.hero.services.implementation.deliverables.vendor"),
        t("consultingPage.hero.services.implementation.deliverables.project"),
        t("consultingPage.hero.services.implementation.deliverables.qa"),
      ],
    },
    {
      title: t("consultingPage.hero.services.digitalTransformation.title"),
      description: t("consultingPage.hero.services.digitalTransformation.description"),
      duration: "6-12 months",
      deliverables: [
        t("consultingPage.hero.services.digitalTransformation.deliverables.strategy"),
        t("consultingPage.hero.services.digitalTransformation.deliverables.change"),
        t("consultingPage.hero.services.digitalTransformation.deliverables.multiPhase"),
        t("consultingPage.hero.services.digitalTransformation.deliverables.performance"),
        t("consultingPage.hero.services.digitalTransformation.deliverables.optimization"),
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
