import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ConsultingHero } from "@/components/consulting/consulting-hero"
import { ConsultingAbout } from "@/components/consulting/consulting-about"
import { ConsultingServices } from "@/components/consulting/consulting-services"
import { ConsultingContact } from "@/components/consulting/consulting-contact"

export const metadata = {
  title: "AI Consulting Services - Asim Abu Salam | main.consulting.sa",
  description:
    "Expert AI consulting services by Asim Abu Salam. Strategic guidance for AI implementation, automation, and digital transformation.",
}

export default function ConsultingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ConsultingHero />
      <ConsultingAbout />
      <ConsultingServices />
      <ConsultingContact />
      <Footer />
    </div>
  )
}
