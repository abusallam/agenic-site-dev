"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Zap, Shield, Play } from "lucide-react"
import { useTranslation } from "@/lib/i18n"
import Image from "next/image"

const heroImages = [
  {
    src: "/hero-ai-consulting.jpg",
    alt: "AI Consulting Solutions",
    title: "Strategic AI Implementation",
  },
  {
    src: "/hero-saas-platform.jpg",
    alt: "SaaS AI Platform",
    title: "Cutting-edge AI Platform",
  },
  {
    src: "/hero-automation.jpg",
    alt: "Business Automation",
    title: "Intelligent Automation",
  },
]

export function HeroSection() {
  const { t, locale } = useTranslation()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Safe translation usage with fallbacks
  const fallbacks: Record<string, string> = {
    "hero.badge": "Next-Generation AI Solutions",
    "hero.title": "Transform Your Business with",
    "hero.titleHighlight": "AI Agents",
    "hero.description":
      "Powerful AI chatbots and intelligent agents that automate workflows, enhance customer experience, and drive business growth with cutting-edge technology.",
    "hero.startTrial": "Start Free Trial",
    "hero.watchDemo": "Watch Demo",
    "hero.smartAgents": "Smart AI Agents",
    "hero.smartAgentsDesc": "Intelligent automation that learns and adapts to your business needs",
    "hero.enterpriseSecurity": "Enterprise Security",
    "hero.enterpriseSecurityDesc": "Bank-level security with SSL encryption and data protection",
    "hero.lightningFast": "Lightning Fast",
    "hero.lightningFastDesc": "Deploy AI solutions in minutes, not months",
  }

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const scrollToServices = () => {
    const servicesElement = document.getElementById("services")
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 sm:py-32 min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

      {/* Background Images Carousel */}
      <div className="absolute inset-0 opacity-10">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              onError={(e) => {
                // Fallback to gradient background
                const target = e.target as HTMLImageElement
                target.style.display = "none"
              }}
            />
          </div>
        ))}
      </div>

      <div className="relative container mx-auto px-4">
        <div className={`text-center max-w-5xl mx-auto ${locale === "ar" ? "rtl" : ""}`}>
          {/* Badge */}
          <div className={`flex justify-center mb-6 animate-on-scroll ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <div className="flex items-center space-x-2 bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Zap className="h-4 w-4" />
              <span>{t("hero.badge") || fallbacks["hero.badge"]}</span>
            </div>
          </div>

          {/* Main Title */}
          <h1
            className={`text-4xl sm:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-gray-900 mb-6 animate-on-scroll ${isVisible ? "animate-slide-up" : "opacity-0"}`}
          >
            {t("hero.title") || fallbacks["hero.title"]}
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
              {t("hero.titleHighlight") || fallbacks["hero.titleHighlight"]}
            </span>
          </h1>

          {/* Description */}
          <p
            className={`text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-on-scroll ${isVisible ? "animate-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            {t("hero.description") || fallbacks["hero.description"]}
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-on-scroll ${isVisible ? "animate-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              {t("hero.startTrial") || fallbacks["hero.startTrial"]}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 bg-white/80 backdrop-blur-sm border-2 hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              onClick={scrollToServices}
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              {t("hero.watchDemo") || fallbacks["hero.watchDemo"]}
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Bot,
                title: t("hero.smartAgents") || fallbacks["hero.smartAgents"],
                description: t("hero.smartAgentsDesc") || fallbacks["hero.smartAgentsDesc"],
                color: "text-blue-600",
                bgColor: "bg-blue-50",
                delay: "0.6s",
              },
              {
                icon: Shield,
                title: t("hero.enterpriseSecurity") || fallbacks["hero.enterpriseSecurity"],
                description: t("hero.enterpriseSecurityDesc") || fallbacks["hero.enterpriseSecurityDesc"],
                color: "text-green-600",
                bgColor: "bg-green-50",
                delay: "0.8s",
              },
              {
                icon: Zap,
                title: t("hero.lightningFast") || fallbacks["hero.lightningFast"],
                description: t("hero.lightningFastDesc") || fallbacks["hero.lightningFastDesc"],
                color: "text-purple-600",
                bgColor: "bg-purple-50",
                delay: "1s",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 group animate-on-scroll ${isVisible ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: feature.delay }}
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

          {/* Image Indicators */}
          <div className="flex justify-center space-x-2 mt-12">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
