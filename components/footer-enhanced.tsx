"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { cn } from "@/lib/utils"

export function EnhancedFooter() {
  const { t, isRTL } = useEnhancedTranslation()

  const servicesLinks = [
    { href: "/ai-agents", label: t("nav.aiAgents") },
    { href: "/chatbots", label: t("nav.chatbots") },
    { href: "/consulting", label: t("nav.consulting") },
  ]

  const companyLinks = [
    { href: "/about", label: "About Us" },
    { href: "/careers", label: "Careers" },
    { href: "/blog", label: "Blog" },
  ]

  const supportLinks = [
    { href: "/documentation", label: t("nav.documentation") },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: t("nav.contact") },
  ]

  const legalLinks = [
    { href: "/privacy", label: t("footer.links.privacy") },
    { href: "/terms", label: t("footer.links.terms") },
    { href: "/cookies", label: t("footer.links.cookies") },
  ]

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 md:py-16">
      <div className="container grid grid-cols-1 md:grid-cols-5 gap-8 px-4 md:px-6">
        <div className="md:col-span-2">
          <Link className="flex items-center gap-2 mb-4" href="/">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">main.consulting.sa</span>
          </Link>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">{t("footer.description")}</p>
          <div className="flex space-x-4">
            <Link className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" href="#">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" href="#">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" href="#">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" href="#">
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
        </div>

        <div className={cn("grid grid-cols-2 gap-8 md:col-span-3", isRTL && "text-right")}>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t("footer.services")}</h3>
            <nav className="space-y-2">
              {servicesLinks.map((link) => (
                <Link
                  key={link.href}
                  className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 block"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t("footer.company")}</h3>
            <nav className="space-y-2">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 block"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t("footer.support")}</h3>
            <nav className="space-y-2">
              {supportLinks.map((link) => (
                <Link
                  key={link.href}
                  className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 block"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t("footer.legal")}</h3>
            <nav className="space-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 block"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="container mt-12 border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">{t("footer.newsletter.title")}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 max-w-md mx-auto">
          {t("footer.newsletter.description")}
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-sm mx-auto">
          <Input
            type="email"
            placeholder={t("footer.newsletter.placeholder")}
            className="flex-1 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
          />
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
            {t("footer.newsletter.subscribe")}
          </Button>
        </form>
        <p className="text-gray-500 dark:text-gray-500 text-xs mt-8">{t("footer.copyright")}</p>
      </div>
    </footer>
  )
}
