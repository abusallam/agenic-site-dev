"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Bot,
  Zap,
  Shield,
  Play,
  Star,
  CheckCircle,
  Users,
  TrendingUp,
  MessageSquare,
  User,
} from "lucide-react"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced"
import { cn } from "@/lib/utils"

export function EnhancedHeroSection() {
  const { t, isRTL } = useEnhancedTranslation()
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  const features = [
    {
      icon: Bot,
      title: t("hero.features.aiAgents.title"),
      description: t("hero.features.aiAgents.description"),
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      icon: MessageSquare,
      title: t("hero.features.chatbots.title"),
      description: t("hero.features.chatbots.description"),
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      icon: User,
      title: t("hero.features.consulting.title"),
      description: t("hero.features.consulting.description"),
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      gradient: "from-green-600 to-teal-600",
    },
    {
      icon: Shield,
      title: t("hero.features.security.title"),
      description: t("hero.features.security.description"),
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      gradient: "from-orange-600 to-red-600",
    },
  ]

  useEffect(() => {
    setMounted(true)
    setIsVisible(true)

    const interval = setInterval(() => {
      setCurrentFeatureIndex((prev) => (prev + 1) % features.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [features.length])

  const scrollToServices = () => {
    const servicesElement = document.getElementById("services")
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!mounted) {
    return (
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 py-20 sm:py-32 min-h-screen flex items-center">
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-gray-900 dark:text-white mb-6">
              Transform Your Business with
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                AI Solutions
              </span>
            </h1>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 py-20 sm:py-32 min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,black,rgba(0,0,0,0.6))]" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000" />

      <div className="relative container mx-auto px-4">
        <div className={cn("text-center max-w-6xl mx-auto", isRTL && "rtl")}>
          {/* Badge */}
          <div className={cn("flex justify-center mb-6", isVisible ? "animate-fade-in" : "opacity-0")}>
            <Badge className="flex items-center space-x-2 bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200 px-6 py-3 text-sm font-medium shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <Zap className={cn("h-4 w-4", isRTL ? "ml-2" : "mr-2")} />
              <span>{t("hero.badge")}</span>
            </Badge>
          </div>

          {/* Main Title */}
          <h1
            className={cn(
              "text-4xl sm:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-gray-900 dark:text-white mb-6",
              isVisible ? "animate-slide-up" : "opacity-0",
            )}
          >
            {t("hero.title")}
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              {t("hero.titleHighlight")}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={cn(
              "text-lg sm:text-xl text-blue-600 dark:text-blue-400 font-medium mb-4",
              isVisible ? "animate-slide-up" : "opacity-0",
            )}
          >
            {t("hero.subtitle")}
          </p>

          {/* Description */}
          <p
            className={cn(
              "text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed",
              isVisible ? "animate-slide-up" : "opacity-0",
            )}
          >
            {t("hero.description")}
          </p>

          {/* Trust Indicators */}
          <div
            className={cn(
              "flex items-center justify-center space-x-6 mb-8",
              isVisible ? "animate-fade-in" : "opacity-0",
              isRTL && "flex-row-reverse space-x-reverse",
            )}
          >
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
              <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">4.9/5 rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-green-600" />
              <span className="text-sm text-gray-600 dark:text-gray-400">{t("hero.trustedBy")}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center mb-16",
              isVisible ? "animate-slide-up" : "opacity-0",
              isRTL && "flex-row-reverse",
            )}
          >
            <Button
              size="lg"
              className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              {t("hero.primaryCta")}
              <ArrowRight
                className={cn(
                  "h-5 w-5 group-hover:translate-x-1 transition-transform duration-200",
                  isRTL ? "rotate-180 group-hover:-translate-x-1" : "ml-2",
                )}
              />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 hover:bg-white dark:hover:bg-gray-800 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              onClick={scrollToServices}
            >
              <Play
                className={cn(
                  "h-5 w-5 group-hover:scale-110 transition-transform duration-200",
                  isRTL ? "ml-2" : "mr-2",
                )}
              />
              {t("hero.secondaryCta")}
            </Button>
          </div>

          {/* Feature Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={cn(
                  "overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm",
                  index === currentFeatureIndex ? "ring-2 ring-blue-500 shadow-xl scale-105" : "",
                  isVisible ? "animate-scale-in" : "opacity-0",
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={cn(
                      "h-16 w-16 rounded-2xl",
                      feature.bgColor,
                      "flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300",
                    )}
                  >
                    <feature.icon className={cn("h-8 w-8", feature.color)} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 font-heading text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200 dark:border-gray-700">
            {[
              { number: "500+", label: "Active Clients", icon: Users },
              { number: "99.9%", label: "Uptime", icon: CheckCircle },
              { number: "300%", label: "Average ROI", icon: TrendingUp },
              { number: "24/7", label: "Support", icon: Shield },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
