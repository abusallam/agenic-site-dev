import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ConsultingHero } from "@/components/consulting/consulting-hero"
import { ConsultingAbout } from "@/components/consulting/consulting-about"
import { ConsultingServices } from "@/components/consulting/consulting-services"
import { ConsultingCaseStudies } from "@/components/consulting/consulting-case-studies"
import { ConsultingContact } from "@/components/consulting/consulting-contact"
import { TestimonialsSection } from "@/components/testimonials-section"

export const metadata = {
  title: "AI Consulting Services - Asim Abu Salam | main.consulting.sa",
  description:
    "Expert AI consulting services by Asim Abu Salam. Strategic guidance for AI implementation, automation, and digital transformation with proven results.",
  keywords:
    "AI consulting, Asim Abu Salam, artificial intelligence strategy, digital transformation, automation consulting",
  openGraph: {
    title: "AI Consulting Services - Asim Abu Salam",
    description:
      "Expert AI consulting services with proven results. Strategic guidance for AI implementation and digital transformation.",
    url: "https://main.consulting.sa/consulting",
    images: [
      {
        url: "/consulting-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Asim Abu Salam - AI Consulting Expert",
      },
    ],
  },
}

export default function ConsultingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ConsultingHero />
      <ConsultingAbout />
      <ConsultingServices />
      <ConsultingCaseStudies />
      <TestimonialsSection />
      <ConsultingContact />
      <Footer />
    </div>
  )
}
