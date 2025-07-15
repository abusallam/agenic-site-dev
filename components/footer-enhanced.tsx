"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function EnhancedFooter() {
  const { t, isRTL } = useEnhancedTranslation()

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 md:py-16">
      <div className="container grid grid-cols-1 md:grid-cols-5 gap-8 px-4 md:px-6">
        <div className="col-span-1 md:col-span-2">
          <Link href="#" className="flex items-center gap-2 font-bold text-lg mb-4" prefetch={false}>
            <span className="text-blue-600 dark:text-blue-400">main.consulting.sa</span>
          </Link>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t("footer.description")}</p>
          <div className={`mt-6 space-y-3 ${isRTL ? "text-right" : ""}`}>
            <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
              <Mail className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <a href="mailto:info@main.consulting.sa" className="text-gray-600 dark:text-gray-400 hover:underline">
                info@main.consulting.sa
              </a>
            </div>
            <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
              <Phone className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <a href="tel:+966XXXXXXXXXX" className="text-gray-600 dark:text-gray-400 hover:underline">
                +966 XX XXX XXXX
              </a>
            </div>
            <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
              <MapPin className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-600 dark:text-gray-400">Saudi Arabia</span>
            </div>
            <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
              <Clock className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-600 dark:text-gray-400">Mon-Fri, 9AM-6PM AST</span>
            </div>
          </div>
        </div>

        <div className={`grid grid-cols-2 gap-8 md:col-span-3 ${isRTL ? "text-right" : ""}`}>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">{t("footer.services")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ai-agents" className="text-gray-600 dark:text-gray-400 hover:underline" prefetch={false}>
                  {t("nav.aiAgents")}
                </Link>
              </li>
              <li>
                <Link href="/chatbots" className="text-gray-600 dark:text-gray-400 hover:underline" prefetch={false}>
                  {t("nav.chatbots")}
                </Link>
              </li>
              <li>
                <Link href="/consulting" className="text-gray-600 dark:text-gray-400 hover:underline" prefetch={false}>
                  {t("nav.consulting")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">{t("footer.company")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:underline" prefetch={false}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 dark:text-gray-400 hover:underline" prefetch={false}>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:underline" prefetch={false}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">{t("footer.support")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/documentation"
                  className="text-gray-600 dark:text-gray-400 hover:underline"
                  prefetch={false}
                >
                  {t("nav.documentation")}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 dark:text-gray-400 hover:underline" prefetch={false}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:underline" prefetch={false}>
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">{t("footer.legal")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:underline" prefetch={false}>
                  {t("footer.links.privacy")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:underline" prefetch={false}>
                  {t("footer.links.terms")}
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-600 dark:text-gray-400 hover:underline" prefetch={false}>
                  {t("footer.links.cookies")}
                </Link>
              </li>
            </ul>
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
