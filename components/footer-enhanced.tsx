"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced"
import Image from "next/image"

export function EnhancedFooter() {
  const { t, isRTL } = useEnhancedTranslation()

  return (
    <footer className={`bg-gray-100 dark:bg-gray-900 py-12 md:py-16 ${isRTL ? "rtl" : ""}`}>
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div className="col-span-full lg:col-span-2">
          <Link href="#" className="flex items-center gap-2 mb-4" prefetch={false}>
            <Image
              src="/placeholder-logo.svg"
              alt="main.consulting.sa Logo"
              width={32}
              height={32}
              className="dark:invert"
            />
            <span className="text-xl font-bold">main.consulting.sa</span>
          </Link>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">{t("footer.description")}</p>
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-3">{t("footer.newsletter.title")}</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{t("footer.newsletter.description")}</p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder={t("footer.newsletter.placeholder")}
                className="flex-1 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
              />
              <Button type="submit">{t("footer.newsletter.subscribe")}</Button>
            </form>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">{t("footer.services")}</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/ai-agents"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
                prefetch={false}
              >
                {t("nav.aiAgents")}
              </Link>
            </li>
            <li>
              <Link
                href="/chatbots"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
                prefetch={false}
              >
                {t("nav.chatbots")}
              </Link>
            </li>
            <li>
              <Link
                href="/consulting"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
                prefetch={false}
              >
                {t("nav.consulting")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">{t("footer.company")}</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
                prefetch={false}
              >
                {t("nav.home")} {/* Using home as a placeholder for About Us */}
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
                prefetch={false}
              >
                {t("nav.contact")}
              </Link>
            </li>
            <li>
              <Link
                href="/documentation"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
                prefetch={false}
              >
                {t("nav.documentation")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">{t("footer.legal")}</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/privacy"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
                prefetch={false}
              >
                {t("footer.links.privacy")}
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
                prefetch={false}
              >
                {t("footer.links.terms")}
              </Link>
            </li>
            <li>
              <Link
                href="/cookies"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
                prefetch={false}
              >
                {t("footer.links.cookies")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-8 pt-8 border-t border-gray-300 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400 text-sm">
        {t("footer.copyright")}
      </div>
    </footer>
  )
}
