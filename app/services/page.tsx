import type { Metadata } from "next"
import ServicesClientPage from "./ServicesClientPage"

export const metadata: Metadata = {
  title: "Services - Main Consulting",
  description: "Professional AI consulting services including chatbots, AI agents, and digital transformation solutions.",
}

export default function ServicesPage() {
  return <ServicesClientPage />
}
