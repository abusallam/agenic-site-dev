import type { Metadata } from "next"
import { translations } from "@/lib/i18n-enhanced"
import AIAgentsClientPage from "./AIAgentsClientPage"

// Function to generate metadata for each locale
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale || "en"
  const t = (key: string) => {
    const keys = key.split(".")
    let current: any = translations[locale] || translations.en
    for (const k of keys) {
      if (current && typeof current === "object" && k in current) {
        current = current[k]
      } else {
        return `Missing translation for ${key}`
      }
    }
    return typeof current === "string" ? current : `Missing translation for ${key}`
  }

  return {
    title: t("aiAgentsPage.title"),
    description: t("aiAgentsPage.description"),
  }
}

export default function AIAgentsPage() {
  return <AIAgentsClientPage />
}
