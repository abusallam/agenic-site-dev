import { EnhancedHeroSection } from "@/components/hero-section-enhanced"
import { ServicesSection } from "@/components/services-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <EnhancedHeroSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
