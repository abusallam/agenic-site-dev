"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function EnhancedContactSection() {
  const { t, isRTL } = useEnhancedTranslation()

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className={`grid gap-10 lg:grid-cols-2 lg:gap-16 ${isRTL ? "lg:grid-flow-col-dense" : ""}`}>
          <div className={`space-y-6 ${isRTL ? "text-right" : ""}`}>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
              {t("contact.title")}
            </h2>
            <p className="max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl">{t("contact.subtitle")}</p>
            <div className="space-y-4">
              <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                <Mail className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">{t("contact.info.email")}</p>
                </div>
              </div>
              <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                <Phone className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">{t("contact.info.phone")}</p>
                </div>
              </div>
              <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                <MapPin className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">{t("contact.info.location")}</p>
                </div>
              </div>
              <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                <Clock className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Business Hours</h3>
                  <p className="text-gray-600 dark:text-gray-400">{t("contact.info.hours")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <form className="grid gap-4 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="grid gap-2">
                <Label htmlFor="name">{t("contact.form.name")}</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">{t("contact.form.email")}</Label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company">{t("contact.form.company")}</Label>
                <Input id="company" placeholder="Acme Inc." />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">{t("contact.form.phone")}</Label>
                <Input id="phone" placeholder="+1 (555) 123-4567" type="tel" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="service">{t("contact.form.service")}</Label>
                <Select>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ai-agents">{t("nav.aiAgents")}</SelectItem>
                    <SelectItem value="chatbots">{t("nav.chatbots")}</SelectItem>
                    <SelectItem value="consulting">{t("nav.consulting")}</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">{t("contact.form.message")}</Label>
                <Textarea id="message" placeholder="Your message..." className="min-h-[100px]" />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                {t("contact.form.submit")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
