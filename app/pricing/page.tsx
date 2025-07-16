"use client"
import { EnhancedNavigation } from "@/components/navigation-enhanced"
import { EnhancedFooter } from "@/components/footer-enhanced"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced"

export default function PricingPage() {
  const { t } = useEnhancedTranslation()

  return (
    <div className="flex flex-col min-h-screen">
      <EnhancedNavigation />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold">{t("pricingPage.title")}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{t("pricingPage.description")}</p>
        </div>
      </main>
      <EnhancedFooter />
    </div>
  )
}
