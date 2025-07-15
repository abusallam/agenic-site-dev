"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Briefcase, Award, Users, Clock } from "lucide-react"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced"
import Image from "next/image"

export function EnhancedConsultingSection() {
  const { t, isRTL } = useEnhancedTranslation()

  const expertiseAreas = [
    "AI Strategy Development",
    "Machine Learning Implementation",
    "Digital Transformation",
    "Process Automation",
    "Team Training & Development",
  ]

  const stats = [
    { number: "10+", label: "Years Experience", icon: Clock },
    { number: "200+", label: "Successful Projects", icon: Briefcase },
    { number: "300%", label: "Average ROI Increase", icon: Award },
    { number: "50+", label: "Enterprise Clients", icon: Users },
  ]

  const servicesOffered = [
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
    <section className={`w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950 ${isRTL ? "rtl" : ""}`}>
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200 px-4 py-2 rounded-full">
              {t("consulting.badge")}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{t("consulting.name")}</h1>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">{t("consulting.title")}</h2>
            <p className="text-gray-600 dark:text-gray-300 md:text-xl/relaxed leading-relaxed">
              {t("consulting.description")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertiseAreas.map((area, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                {t("consulting.cta.primary")}
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/case-studies">{t("consulting.cta.secondary")}</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/placeholder-user.jpg"
              width={500}
              height={500}
              alt="Asim Abu Salam"
              className="rounded-lg shadow-xl object-cover aspect-square"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200 dark:border-gray-700">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-2">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-12">Consulting Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesOffered.map((service, index) => (
              <Card key={index} className="flex flex-col h-full">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{service.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                    Duration: {service.duration}
                  </div>
                  <h5 className="text-md font-semibold mb-2">Key Deliverables:</h5>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                    {service.deliverables.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
