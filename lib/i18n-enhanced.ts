"use client"

import type React from "react"
import { useState, useEffect, createContext, useContext } from "react"

type Locale = "en" | "ar"

interface TranslationContextType {
  locale: Locale
  t: (key: string) => string
  changeLanguage: (locale: Locale) => void
  isRTL: boolean
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.aiAgents": "AI Agents",
    "nav.chatbots": "Chatbots",
    "nav.consulting": "Consulting",
    "nav.documentation": "Documentation",
    "nav.contact": "Contact",
    "nav.signIn": "Sign In",
    "nav.getStarted": "Get Started",

    // Hero Section
    "hero.badge": "🚀 Leading AI Solutions Provider",
    "hero.title": "Transform Your Business with",
    "hero.titleHighlight": "AI Solutions",
    "hero.subtitle": "by Asim Abu Salam",
    "hero.description":
      "Professional AI consulting services and cutting-edge SaaS solutions for AI agents and chatbots. Automate workflows, enhance customer experience, and drive growth with intelligent automation.",
    "hero.primaryCta": "Start Free Trial",
    "hero.secondaryCta": "Watch Demo",
    "hero.trustedBy": "Trusted by 500+ companies",

    // Hero Features
    "hero.features.aiAgents.title": "AI Agents",
    "hero.features.aiAgents.description": "Intelligent automation that learns and adapts to your business processes",
    "hero.features.chatbots.title": "Smart Chatbots",
    "hero.features.chatbots.description": "24/7 customer support with natural language understanding",
    "hero.features.consulting.title": "Expert Consulting",
    "hero.features.consulting.description": "Strategic AI implementation guidance from industry experts",
    "hero.features.security.title": "Enterprise Security",
    "hero.features.security.description": "Bank-level security with SOC 2 compliance and encryption",

    // Footer
    "footer.services": "Services",
    "footer.company": "Company",
    "footer.support": "Support",
    "footer.legal": "Legal",
    "footer.description":
      "Leading provider of AI solutions and consulting services. We help businesses transform through intelligent automation and strategic AI implementation.",
    "footer.newsletter.title": "Stay Updated",
    "footer.newsletter.description": "Get the latest AI insights and updates delivered to your inbox.",
    "footer.newsletter.placeholder": "Enter your email",
    "footer.newsletter.subscribe": "Subscribe",
    "footer.newsletter.success": "Successfully subscribed!",
    "footer.copyright": "© 2024 main.consulting.sa. All rights reserved.",
    "footer.links.privacy": "Privacy Policy",
    "footer.links.terms": "Terms of Service",
    "footer.links.cookies": "Cookie Policy",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.aiAgents": "وكلاء الذكاء الاصطناعي",
    "nav.chatbots": "روبوتات المحادثة",
    "nav.consulting": "الاستشارات",
    "nav.documentation": "التوثيق",
    "nav.contact": "اتصل بنا",
    "nav.signIn": "تسجيل الدخول",
    "nav.getStarted": "ابدأ الآن",

    // Hero Section
    "hero.badge": "🚀 مزود حلول الذكاء الاصطناعي الرائد",
    "hero.title": "حول عملك مع",
    "hero.titleHighlight": "حلول الذكاء الاصطناعي",
    "hero.subtitle": "بواسطة عاصم أبو سلام",
    "hero.description":
      "خدمات استشارية احترافية للذكاء الاصطناعي وحلول SaaS متطورة لوكلاء الذكاء الاصطناعي وروبوتات المحادثة. أتمتة سير العمل وتحسين تجربة العملاء ودفع النمو بالأتمتة الذكية.",
    "hero.primaryCta": "ابدأ تجربة مجانية",
    "hero.secondaryCta": "شاهد العرض التوضيحي",
    "hero.trustedBy": "موثوق به من قبل أكثر من 500 شركة",

    // Hero Features
    "hero.features.aiAgents.title": "وكلاء الذكاء الاصطناعي",
    "hero.features.aiAgents.description": "أتمتة ذكية تتعلم وتتكيف مع عمليات عملك",
    "hero.features.chatbots.title": "روبوتات محادثة ذكية",
    "hero.features.chatbots.description": "دعم العملاء على مدار الساعة مع فهم اللغة الطبيعية",
    "hero.features.consulting.title": "استشارات خبراء",
    "hero.features.consulting.description": "إرشادات تنفيذ الذكاء الاصطناعي الاستراتيجية من خبراء الصناعة",
    "hero.features.security.title": "أمان المؤسسات",
    "hero.features.security.description": "أمان على مستوى البنوك مع امتثال SOC 2 والتشفير",

    // Footer
    "footer.services": "الخدمات",
    "footer.company": "الشركة",
    "footer.support": "الدعم",
    "footer.legal": "قانوني",
    "footer.description":
      "مزود رائد لحلول الذكاء الاصطناعي وخدمات الاستشارات. نساعد الشركات على التحول من خلال الأتمتة الذكية والتنفيذ الاستراتيجي للذكاء الاصطناعي.",
    "footer.newsletter.title": "ابق محدثاً",
    "footer.newsletter.description": "احصل على أحدث رؤى الذكاء الاصطناعي والتحديثات في صندوق الوارد الخاص بك.",
    "footer.newsletter.placeholder": "أدخل بريدك الإلكتروني",
    "footer.newsletter.subscribe": "اشترك",
    "footer.newsletter.success": "تم الاشتراك بنجاح!",
    "footer.copyright": "© 2024 main.consulting.sa. جميع الحقوق محفوظة.",
    "footer.links.privacy": "سياسة الخصوصية",
    "footer.links.terms": "شروط الخدمة",
    "footer.links.cookies": "سياسة ملفات تعريف الارتباط",
  },
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function useEnhancedTranslation() {
  const context = useContext(TranslationContext)
  if (!context) {
    // Fallback for when context is not available
    return {
      locale: "en" as Locale,
      t: (key: string) => translations.en[key as keyof (typeof translations)["en"]] || key,
      changeLanguage: () => {},
      isRTL: false,
    }
  }
  return context
}

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Get saved language from localStorage or browser preference
    const savedLocale = localStorage.getItem("locale") as Locale
    const browserLocale = navigator.language.startsWith("ar") ? "ar" : "en"
    setLocale(savedLocale || browserLocale)
  }, [])

  const t = (key: string): string => {
    const translation = translations[locale][key as keyof (typeof translations)[typeof locale]]
    return translation || key
  }

  const changeLanguage = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem("locale", newLocale)
    document.documentElement.lang = newLocale
    document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr"
  }

  const isRTL = locale === "ar"

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <TranslationContext.Provider value={{ locale, t, changeLanguage, isRTL }}>{children}</TranslationContext.Provider>
  )
}
