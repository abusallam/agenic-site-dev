"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  ArrowRight,
  CheckCircle,
  Bot,
  MessageSquare,
  User,
  FileText,
  Shield,
  Zap,
} from "lucide-react"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced"
import { brandConfig } from "@/lib/brand"
import { useToast } from "@/hooks/use-toast"

export function EnhancedFooter() {
  const { t, isRTL } = useEnhancedTranslation()
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)
  const { toast } = useToast()

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribing(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: t("footer.newsletter.success"),
      description: "You'll receive our latest updates and insights.",
      duration: 5000,
    })

    setEmail("")
    setIsSubscribing(false)
  }

  const footerSections = [
    {
      title: t("footer.services"),
      links: [
        { href: "/ai-agents", label: t("nav.aiAgents"), icon: Bot },
        { href: "/chatbots", label: t("nav.chatbots"), icon: MessageSquare },
        { href: "/consulting", label: t("nav.consulting"), icon: User, badge: "Expert" },
      ],
    },
    {
      title: t("footer.company"),
      links: [
        { href: "/about", label: "About Us" },
        { href: "/careers", label: "Careers" },
        { href: "/blog", label: "Blog" },
        { href: "/case-studies", label: "Case Studies" },
      ],
    },
    {
      title: t("footer.support"),
      links: [
        { href: "/documentation", label: t("nav.documentation"), icon: FileText },
        { href: "/contact", label: t("nav.contact") },
        { href: "/help", label: "Help Center" },
        { href: "/status", label: "System Status" },
      ],
    },
    {
      title: t("footer.legal"),
      links: [
        { href: "/privacy", label: t("footer.links.privacy") },
        { href: "/terms", label: t("footer.links.terms") },
        { href: "/cookies", label: t("footer.links.cookies") },
        { href: "/security", label: "Security" },
      ],
    },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 ${isRTL ? "text-right" : ""}`}>
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className={`flex items-center space-x-3 mb-6 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">{brandConfig.logo.text}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {brandConfig.logo.full}
                </span>
                <span className="text-xs text-gray-400">{brandConfig.tagline}</span>
              </div>
            </Link>

            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">{t("footer.description")}</p>

            {/* Social Links */}
            <div className={`flex space-x-4 mb-8 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}>
              {[
                { href: brandConfig.social.twitter, icon: Twitter, label: "Twitter" },
                { href: brandConfig.social.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: brandConfig.social.github, icon: Github, label: "GitHub" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div
                className={`flex items-center space-x-3 text-gray-400 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}
              >
                <Mail className="h-4 w-4 text-blue-400" />
                <span>{brandConfig.contact.email}</span>
              </div>
              <div
                className={`flex items-center space-x-3 text-gray-400 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}
              >
                <Phone className="h-4 w-4 text-blue-400" />
                <span>{brandConfig.contact.phone}</span>
              </div>
              <div
                className={`flex items-center space-x-3 text-gray-400 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}
              >
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>{brandConfig.contact.location}</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-lg mb-4 text-white">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className={`text-gray-400 hover:text-white transition-colors flex items-center space-x-2 group ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}
                        >
                          {link.icon && <link.icon className="h-4 w-4 group-hover:text-blue-400 transition-colors" />}
                          <span>{link.label}</span>
                          {link.badge && (
                            <Badge variant="secondary" className="text-xs">
                              {link.badge}
                            </Badge>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/*Newsletter Signup */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 dark:bg-gray-900 rounded-2xl p-6 border border-gray-700">
              <div className={`flex items-center space-x-2 mb-4 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}>
                <Zap className="h-5 w-5 text-blue-400" />
                <h3 className="font-semibold text-lg text-white">{t("footer.newsletter.title")}</h3>
              </div>

              <p className="text-gray-400 text-sm mb-4">{t("footer.newsletter.description")}</p>

              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder={t("footer.newsletter.placeholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                />
                <Button
                  type="submit"
                  disabled={isSubscribing}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  {isSubscribing ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Subscribing...</span>
                    </div>
                  ) : (
                    <div className={`flex items-center space-x-2 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}>
                      <span>{t("footer.newsletter.subscribe")}</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div
          className={`flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 ${isRTL ? "md:flex-row-reverse" : ""}`}
        >
          <div className="text-gray-400 text-sm">{t("footer.copyright")}</div>

          <div className={`flex items-center space-x-6 text-sm ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}>
            <div
              className={`flex items-center space-x-2 text-green-400 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}
            >
              <CheckCircle className="h-4 w-4" />
              <span>All systems operational</span>
            </div>
            <div
              className={`flex items-center space-x-2 text-blue-400 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}
            >
              <Shield className="h-4 w-4" />
              <span>SOC 2 Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
