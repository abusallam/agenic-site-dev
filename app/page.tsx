import { EnhancedHeroSection } from "@/components/hero-section-enhanced"
import { EnhancedServicesSection } from "@/components/services-section-enhanced"
import { EnhancedConsultingHero } from "@/components/consulting/consulting-hero-enhanced"
import { EnhancedTestimonialsSection } from "@/components/testimonials-section-enhanced"
import { EnhancedContactSection } from "@/components/contact-section-enhanced"

export const metadata = {
  title: "Home - AI Solutions & Expert Consulting",
  description:
    "Transform your business with professional AI consulting services and cutting-edge SaaS solutions for AI agents and chatbots.",
}

export default function HomePage() {
  return (
    <>
      <EnhancedHeroSection />
      <div id="services">
        <EnhancedServicesSection />
      </div>
      <EnhancedConsultingHero />
      <EnhancedTestimonialsSection />
      <EnhancedContactSection />
    </>
  )
}
