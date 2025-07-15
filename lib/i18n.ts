"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import translations from "./translations.json"

export type Locale = "en" | "ar"

interface I18nContextType {
  locale: Locale
  t: (key: string) => string
  changeLanguage: (newLocale: Locale) => void
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")

  useEffect(() => {
    // Get locale from localStorage or browser language
    const savedLocale = localStorage.getItem("locale") as Locale
    const browserLocale = navigator.language.startsWith("ar") ? "ar" : "en"
    const initialLocale = savedLocale || browserLocale

    if (initialLocale === "ar" || initialLocale === "en") {
      setLocale(initialLocale)
      document.documentElement.lang = initialLocale
      document.documentElement.dir = initialLocale === "ar" ? "rtl" : "ltr"
    }
  }, [])

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[locale]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  const changeLanguage = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem("locale", newLocale)
    document.documentElement.lang = newLocale
    document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr"

    // Update page title and meta tags if needed
    const currentTitle = document.title
    if (currentTitle.includes("Main Consulting")) {
      document.title =
        newLocale === "ar"
          ? "الاستشارات الرئيسية - حلول الذكاء الاصطناعي والاستشارات المتخصصة"
          : "Main Consulting - AI Solutions & Expert Consulting"
    }
  }

  return <I18nContext.Provider value={{ locale, t, changeLanguage }}>{children}</I18nContext.Provider>
}

export function useTranslation() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within an I18nProvider")
  }
  return context
}

// For server-side usage
export function getStaticTranslations(locale: Locale) {
  return translations[locale] || translations.en
}
