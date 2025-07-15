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
      image: "/placeholder-user.jpg",
      rating: 5,
      quote:
        "Their AI consulting transformed our operations. We saw a 30% increase in efficiency within months. Truly exceptional!",
    },
    {
      name: "John Smith",
      title: "Founder, InnovateX",
      image: "/placeholder-user.jpg",
      rating: 5,
      quote:
        "The AI chatbot solution is a game-changer for our customer support. Our customers love the instant responses.",
    },
    {
      name: "Sarah Lee",
      title: "CTO, GlobalSoft",
      image: "/placeholder-user.jpg",
      rating: 4,
      quote:
        "Implementing their AI agents streamlined our data processing. The team was highly professional and supportive.",
    },
  ]

  return (
    <section className={`w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900 ${isRTL ? "rtl" : ""}`}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Hear from businesses that have transformed with our AI solutions and expert consulting.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardContent className="flex flex-col items-center text-center p-6">
                <Avatar className="w-20 h-20 mb-4">
                  <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                  <AvatarFallback>
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{testimonial.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{testimonial.title}</p>
                <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
