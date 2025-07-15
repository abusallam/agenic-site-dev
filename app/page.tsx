import { EnhancedHeroSection } from "@/components/hero-section-enhanced"
import { ServicesSection } from "@/components/services-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"

export const metadata = {
  title: "Home - AI Solutions & Expert Consulting",
  description:
    "Transform your business with professional AI consulting services and cutting-edge SaaS solutions for AI agents and chatbots.",
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <EnhancedHeroSection />
      <div id="services">
        <ServicesSection />
      </div>
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
