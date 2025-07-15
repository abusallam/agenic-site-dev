"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CheckCircle, Briefcase, TrendingUp, Users } from "lucide-react"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced"

export function EnhancedConsultingHero() {
  const { t, isRTL } = useEnhancedTranslation()

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-green-50 via-white to-teal-50 dark:from-gray-950 dark:via-gray-900 dark:to-green-950">
      <div className="container px-4 md:px-6">
        <div className={`grid gap-10 lg:grid-cols-2 lg:gap-16 items-center ${isRTL ? "lg:grid-flow-col-dense" : ""}`}>
          <div className={`space-y-6 ${isRTL ? "text-right" : ""}`}>
            <Badge className="bg-green-100 dark:bg-green-950 text-green-800 dark:text-green-200 px-4 py-2 text-sm font-medium">
              {t("consulting.badge")}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-900 dark:text-white">
              {t("consulting.title")}
            </h1>
            <p className="max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl">{t("consulting.description")}</p>
            <div className={`flex flex-wrap gap-4 ${isRTL ? "justify-end" : ""}`}>
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                <Link href="/contact">{t("consulting.cta.primary")}</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/consulting/case-studies">{t("consulting.cta.secondary")}</Link>
              </Button>
            </div>
            <div
              className={`grid grid-cols-2 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700 mt-8 ${isRTL ? "text-right" : ""}`}
            >
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-green-600" />
                <span className="text-gray-600 dark:text-gray-400">{t("consulting.stats.experience")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-600 dark:text-gray-400">{t("consulting.stats.projects")}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span className="text-gray-600 dark:text-gray-400">{t("consulting.stats.roi")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-600" />
                <span className="text-gray-600 dark:text-gray-400">{t("consulting.stats.clients")}</span>
              </div>
            </div>
          </div>
          <div className={`flex justify-center ${isRTL ? "lg:order-first" : ""}`}>
            <Avatar className="h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 border-4 border-green-500 shadow-xl">
              <AvatarImage src="/placeholder-user.jpg" alt={t("consulting.name")} />
              <AvatarFallback>
                {t("consulting.name")
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  )
}
