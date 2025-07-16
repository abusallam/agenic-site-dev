import type { Metadata } from "next"
import ConsultingClientPage from "./ConsultingClientPage"
import { translations } from "@/lib/i18n-enhanced.tsx" // Import translations directly for metadata

// Function to generate metadata for each locale
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const locale = params.lang || "en"
  const t = (key: string) => {
    const translationsForLocale = translations[locale as keyof typeof translations];
    if (!translationsForLocale) {
      // Fallback to English if the locale doesn't exist
      return translations.en[key as keyof typeof translations.en] || key;
    }
    return translationsForLocale[key as keyof typeof translationsForLocale] || key;
  };
  return {
    title: t("nav.consulting"),
  };
}

export default function ConsultingPage() {
  return <ConsultingClientPage />
}
