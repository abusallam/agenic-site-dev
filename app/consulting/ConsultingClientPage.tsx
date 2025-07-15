"use client"

import { EnhancedConsultingHero } from "@/components/consulting/consulting-hero-enhanced"
import { EnhancedConsultingAbout } from "@/components/consulting/consulting-about-enhanced"
import { EnhancedConsultingServices } from "@/components/consulting/consulting-services-enhanced"
import { EnhancedConsultingCaseStudies } from "@/components/consulting/consulting-case-studies-enhanced"
import { EnhancedConsultingContact } from "@/components/consulting/consulting-contact-enhanced"

export default function ConsultingClientPage() {
  return (
    <>
      <EnhancedConsultingHero />
      <EnhancedConsultingAbout />
      <EnhancedConsultingServices />
      <EnhancedConsultingCaseStudies />
      <EnhancedConsultingContact />
    </>
  )
}
