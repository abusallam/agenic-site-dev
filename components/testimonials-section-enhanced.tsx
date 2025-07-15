"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced"

export function EnhancedTestimonialsSection() {
  const { t, isRTL } = useEnhancedTranslation()

  const testimonials = [
    {
      name: "Ahmed Al-Farsi",
      title: "CEO, Tech Innovations",
      quote:
        "Working with main.consulting.sa transformed our customer support. Their AI chatbots are incredibly effective and have significantly reduced our response times.",
      avatar: "/placeholder-user.jpg",
      rating: 5,
    },
    {
      name: "Fatima Zahra",
      title: "Operations Director, Global Logistics",
      quote:
        "The AI agents implemented by Asim Abu Salam streamlined our supply chain operations, leading to remarkable efficiency gains and cost savings. Highly recommended!",
      avatar: "/placeholder-user.jpg",
      rating: 5,
    },
    {
      name: "Khalid bin Saud",
      title: "Founder, E-commerce Solutions",
      quote:
        "Asim's consulting expertise was invaluable. He helped us develop a clear AI strategy that perfectly aligns with our business goals. A true visionary.",
      avatar: "/placeholder-user.jpg",
      rating: 5,
    },
    {
      name: "Noura Al-Mansour",
      title: "Head of Marketing, Digital Growth",
      quote:
        "The insights provided by their AI analytics have been a game-changer for our marketing campaigns. We're seeing much higher engagement and conversion rates.",
      avatar: "/placeholder-user.jpg",
      rating: 4,
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className={`flex flex-col items-center justify-center space-y-4 text-center ${isRTL ? "rtl" : ""}`}>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
            <p className="max-w-[900px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from businesses that have achieved remarkable results with our AI solutions and consulting.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-2 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex-1">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gray-300 dark:text-gray-600" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </CardContent>
              <div className={`flex items-center p-6 border-t dark:border-gray-800 ${isRTL ? "flex-row-reverse" : ""}`}>
                <Avatar className={`h-12 w-12 ${isRTL ? "ml-4" : "mr-4"}`}>
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                  <AvatarFallback>
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className={isRTL ? "text-right" : ""}>
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
