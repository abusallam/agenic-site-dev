import { EnhancedHeroSection } from "@/components/hero-section-enhanced"
import { EnhancedServicesSection } from "@/components/services-section-enhanced"
import { EnhancedConsultingHero } from "@/components/consulting/consulting-hero-enhanced"
import { EnhancedTestimonialsSection } from "@/components/testimonials-section-enhanced"
import { EnhancedContactSection } from "@/components/contact-section-enhanced"

export default function HomePage() {
  return (
    <>
      <EnhancedHeroSection />
      <EnhancedServicesSection />
      <EnhancedConsultingHero />
      <EnhancedTestimonialsSection />
      <EnhancedContactSection />
    </>
  )
}
