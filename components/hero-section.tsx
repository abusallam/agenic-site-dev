"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Zap, Shield, Play } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

export function HeroSection() {
  const { t, locale } = useTranslation()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollToServices = () => {
    const servicesElement = document.getElementById("services")
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!mounted) {
    return (
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 sm:py-32 min-h-screen flex items-center">
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-gray-900 mb-6">
              Transform Your Business with
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                AI Agents
              </span>
            </h1>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 sm:py-32 min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

      <div className="relative container mx-auto px-4">
        <div className={`text-center max-w-5xl mx-auto ${locale === "ar" ? "rtl" : ""}`}>
          {/* Badge */}
          <div className={`flex justify-center mb-6 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <div className="flex items-center space-x-2 bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Zap className="h-4 w-4" />
              <span>{t("hero.badge")}</span>
            </div>
          </div>

          {/* Main Title */}
          <h1
            className={`text-4xl sm:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-gray-900 mb-6 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
          >
            {t("hero.title")}
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              {t("hero.titleHighlight")}
            </span>
          </h1>

          {/* Description */}
          <p
            className={`text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed ${isVisible ? "animate-slide-up" : "opacity-0"}`}
          >
            {t("hero.description")}
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
          >
            <Button
              size="lg"
              className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              {t("hero.startTrial")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 bg-white/80 backdrop-blur-sm border-2 hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              onClick={scrollToServices}
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              {t("hero.watchDemo")}
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Bot,
                title: t("hero.smartAgents"),
                description: t("hero.smartAgentsDesc"),
                color: "text-blue-600",
                bgColor: "bg-blue-50",
              },
              {
                icon: Shield,
                title: t("hero.enterpriseSecurity"),
                description: t("hero.enterpriseSecurityDesc"),
                color: "text-green-600",
                bgColor: "bg-green-50",
              },
              {
                icon: Zap,
                title: t("hero.lightningFast"),
                description: t("hero.lightningFastDesc"),
                color: "text-purple-600",
                bgColor: "bg-purple-50",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 group ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              >
                <div
                  className={`h-16 w-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-heading">{feature.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
