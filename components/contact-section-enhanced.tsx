"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced"

export function EnhancedContactSection() {
  const { t, isRTL } = useEnhancedTranslation()

  return (
    <section className={`w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950 ${isRTL ? "rtl" : ""}`}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Ready to transform your business with AI? Let's discuss your needs.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold">Email Us</h3>
                <p className="text-gray-600 dark:text-gray-400">info@main.consulting.sa</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold">Call Us</h3>
                <p className="text-gray-600 dark:text-gray-400">+966 XX XXX XXXX</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold">Our Location</h3>
                <p className="text-gray-600 dark:text-gray-400">Saudi Arabia</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold">Business Hours</h3>
                <p className="text-gray-600 dark:text-gray-400">Mon-Fri, 9AM-6PM AST</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              <div>
                <Label htmlFor="company">Company (Optional)</Label>
                <Input id="company" placeholder="Acme Corp" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={5} placeholder="Tell us about your project..." />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
