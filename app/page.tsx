import { EnhancedNavigation } from "@/components/navigation-enhanced"
import { EnhancedHeroSection } from "@/components/hero-section-enhanced"
import { EnhancedServicesSection } from "@/components/services-section-enhanced"
import { EnhancedFooter } from "@/components/footer-enhanced"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <EnhancedNavigation />
      <main className="flex-1">
        <EnhancedHeroSection />
        <EnhancedServicesSection />
      </main>
      <EnhancedFooter />
    </div>
  )
}
