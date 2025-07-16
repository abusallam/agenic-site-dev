"use client"

import type React from "react"

import { useState, useEffect, createContext, useContext } from "react"

export type Locale = "en" | "ar"

export interface TranslationContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  isRTL: boolean
}

export const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.consulting": "Consulting",
    "nav.documentation": "Documentation",
    "nav.contact": "Contact",
    "nav.login": "Login",
    "nav.signup": "Sign Up",
    "nav.dashboard": "Dashboard",
    "nav.profile": "Profile",
    "nav.settings": "Settings",
    "nav.logout": "Logout",

    // Hero Section
    "hero.title": "Transform Your Business with AI Solutions",
    "hero.subtitle": "Professional AI consulting services and cutting-edge SaaS solutions for modern businesses",
    "hero.cta.primary": "Get Started",
    "hero.cta.secondary": "Learn More",
    "hero.stats.clients": "Happy Clients",
    "hero.stats.projects": "Projects Completed",
    "hero.stats.experience": "Years Experience",
    "hero.stats.satisfaction": "Client Satisfaction",

    // Services
    "services.title": "Our AI Solutions",
    "services.subtitle": "Comprehensive AI services to accelerate your digital transformation",
    "services.aiAgents.title": "AI Agents",
    "services.aiAgents.description": "Intelligent automation solutions",
    "services.chatbots.title": "Chatbots",
    "services.chatbots.description": "Conversational AI interfaces",
    "services.consulting.title": "AI Consulting",
    "services.consulting.description": "Strategic AI implementation guidance",

    // Footer
    "footer.company": "Company",
    "footer.services": "Services",
    "footer.resources": "Resources",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",

    // Auth
    "auth.login.title": "Welcome Back",
    "auth.login.subtitle": "Sign in to your account",
    "auth.login.email": "Email",
    "auth.login.password": "Password",
    "auth.login.remember": "Remember me",
    "auth.login.forgot": "Forgot password?",
    "auth.login.submit": "Sign In",
    "auth.login.noAccount": "Don't have an account?",
    "auth.login.signUp": "Sign up",

    "auth.signup.title": "Create Account",
    "auth.signup.subtitle": "Join our platform today",
    "auth.signup.firstName": "First Name",
    "auth.signup.lastName": "Last Name",
    "auth.signup.email": "Email",
    "auth.signup.company": "Company",
    "auth.signup.password": "Password",
    "auth.signup.confirmPassword": "Confirm Password",
    "auth.signup.agree": "I agree to the Terms of Service",
    "auth.signup.submit": "Create Account",
    "auth.signup.hasAccount": "Already have an account?",
    "auth.signup.signIn": "Sign in",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.consulting": "الاستشارات",
    "nav.documentation": "التوثيق",
    "nav.contact": "اتصل بنا",
    "nav.login": "تسجيل الدخول",
    "nav.signup": "إنشاء حساب",
    "nav.dashboard": "لوحة التحكم",
    "nav.profile": "الملف الشخصي",
    "nav.settings": "الإعدادات",
    "nav.logout": "تسجيل الخروج",

    // Hero Section
    "hero.title": "حوّل عملك بحلول الذكاء الاصطناعي",
    "hero.subtitle": "خدمات استشارية احترافية للذكاء الاصطناعي وحلول SaaS متطورة للشركات الحديثة",
    "hero.cta.primary": "ابدأ الآن",
    "hero.cta.secondary": "اعرف المزيد",
    "hero.stats.clients": "عميل راضٍ",
    "hero.stats.projects": "مشروع مكتمل",
    "hero.stats.experience": "سنوات خبرة",
    "hero.stats.satisfaction": "رضا العملاء",

    // Services
    "services.title": "حلول الذكاء الاصطناعي",
    "services.subtitle": "خدمات شاملة للذكاء الاصطناعي لتسريع التحول الرقمي",
    "services.aiAgents.title": "وكلاء الذكاء الاصطناعي",
    "services.aiAgents.description": "حلول الأتمتة الذكية",
    "services.chatbots.title": "روبوتات المحادثة",
    "services.chatbots.description": "واجهات الذكاء الاصطناعي التحاورية",
    "services.consulting.title": "استشارات الذكاء الاصطناعي",
    "services.consulting.description": "إرشادات تنفيذ الذكاء الاصطناعي الاستراتيجية",

    // Footer
    "footer.company": "الشركة",
    "footer.services": "الخدمات",
    "footer.resources": "الموارد",
    "footer.contact": "اتصل بنا",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الخدمة",

    // Auth
    "auth.login.title": "مرحباً بعودتك",
    "auth.login.subtitle": "سجل دخولك إلى حسابك",
    "auth.login.email": "البريد الإلكتروني",
    "auth.login.password": "كلمة المرور",
    "auth.login.remember": "تذكرني",
    "auth.login.forgot": "نسيت كلمة المرور؟",
    "auth.login.submit": "تسجيل الدخول",
    "auth.login.noAccount": "ليس لديك حساب؟",
    "auth.login.signUp": "إنشاء حساب",

    "auth.signup.title": "إنشاء حساب",
    "auth.signup.subtitle": "انضم إلى منصتنا اليوم",
    "auth.signup.firstName": "الاسم الأول",
    "auth.signup.lastName": "اسم العائلة",
    "auth.signup.email": "البريد الإلكتروني",
    "auth.signup.company": "الشركة",
    "auth.signup.password": "كلمة المرور",
    "auth.signup.confirmPassword": "تأكيد كلمة المرور",
    "auth.signup.agree": "أوافق على شروط الخدمة",
    "auth.signup.submit": "إنشاء حساب",
    "auth.signup.hasAccount": "لديك حساب بالفعل؟",
    "auth.signup.signIn": "تسجيل الدخول",
  },
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function useEnhancedTranslation() {
  const context = useContext(TranslationContext)
  if (!context) {
    // Fallback for when context is not available
    return {
      locale: "en" as Locale,
      setLocale: () => {},
      t: (key: string) => translations.en[key as keyof typeof translations.en] || key,
      isRTL: false,
    }
  }
  return context
}

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")
  const isRTL = locale === "ar"

  const t = (key: string): string => {
    const translation = translations[locale][key as keyof (typeof translations)[typeof locale]]
    return translation || key
  }

  useEffect(() => {
    // Set document direction
    document.documentElement.dir = isRTL ? "rtl" : "ltr"
    document.documentElement.lang = locale
  }, [locale, isRTL])

  return <TranslationContext.Provider value={{ locale, setLocale, t, isRTL }}>{children}</TranslationContext.Provider>
}
