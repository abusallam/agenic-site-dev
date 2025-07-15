"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced"

export function EnhancedTestimonialsSection() {
  const { t, isRTL } = useEnhancedTranslation()

  const testimonials = [
    {
      name: "Jane Doe",
      title: "CEO, TechCorp",
      quote:
        "main.consulting.sa transformed our operations with their AI agents. The efficiency gains were incredible!",
      avatar: "/placeholder-user.jpg",
      rating: 5,
    },
    {
      name: "John Smith",
      title: "Head of Customer Service, GlobalConnect",
      quote:
        "Our chatbots provide seamless 24/7 support. Customer satisfaction has never been higher thanks to main.consulting.sa.",
      avatar: "/placeholder-user.jpg",
      rating: 5,
    },
    {
      name: "Sarah Lee",
      title: "Founder, InnovateX",
      quote:
        "The AI consulting from main.consulting.sa was invaluable. They helped us define a clear AI strategy and execute it flawlessly.",
      avatar: "/placeholder-user.jpg",
      rating: 5,
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900 dark:text-white">
            What Our Clients Say
          </h2>
          <p className="max-w-[700px] mx-auto text-gray-600 dark:text-gray-400 mt-4">
            Hear from businesses that have achieved remarkable success with our AI solutions and consulting services.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="flex flex-col items-center text-center">
                <Avatar className="h-16 w-16 mb-4">
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{testimonial.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{testimonial.title}</p>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
