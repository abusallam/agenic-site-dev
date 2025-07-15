"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Award, Users, TrendingUp } from "lucide-react"
import { useSimpleTranslation } from "@/lib/i18n-simple"

export function ConsultingHero() {
  const { t } = useSimpleTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 sm:py-32">
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Asim Abu Salam
              </span>
              <br />
              AI Strategy & Implementation Expert
            </h1>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 sm:py-32">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6" variant="secondary">
            {t("consulting.badge")}
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t("consulting.title")}
            </span>
            <br />
            {t("consulting.subtitle")}
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{t("consulting.description")}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-3">
              {t("consulting.scheduleConsultation")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
              {t("consulting.viewPortfolio")}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border">
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">10+</h3>
              <p className="text-gray-600 text-center">{t("consulting.yearsExperience")}</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border">
              <Users className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">100+</h3>
              <p className="text-gray-600 text-center">{t("consulting.successfulProjects")}</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border">
              <TrendingUp className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">300%</h3>
              <p className="text-gray-600 text-center">{t("consulting.averageROI")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
