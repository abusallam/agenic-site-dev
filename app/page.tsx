import { EnhancedHeroSection } from "@/components/hero-section-enhanced"
import { EnhancedServicesSection } from "@/components/services-section-enhanced" // Assuming this component exists or will be created
import { EnhancedConsultingSection } from "@/components/consulting/consulting-hero-enhanced" // Assuming this component exists or will be created
import { EnhancedTestimonialsSection } from "@/components/testimonials-section-enhanced" // Assuming this component exists or will be created
import { EnhancedContactSection } from "@/components/contact-section-enhanced" // Assuming this component exists or will be created

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
        <EnhancedServicesSection />
      </div>
      <EnhancedConsultingSection />
      <EnhancedTestimonialsSection />
      <EnhancedContactSection />
    </div>
  )
}
