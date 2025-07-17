"use client"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced"
import Image from "next/image"
import { Star } from "lucide-react"

export function EnhancedTestimonialsSection() {
  const { t } = useEnhancedTranslation()

  const testimonials = [
    {
      name: "John Doe",
      title: "CEO, Example Inc.",
      quote: "testimonials.quote1",
      avatar: "/placeholder-user.jpg",
    },
    {
      name: "Jane Smith",
      title: "CTO, Another Co.",
      quote: "testimonials.quote2",
      avatar: "/placeholder-user.jpg",
    },
    {
      name: "Sam Wilson",
      title: "Founder, Startup LLC",
      quote: "testimonials.quote3",
      avatar: "/placeholder-user.jpg",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading">{t("testimonials.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 rounded-lg border bg-muted/30">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary" fill="currentColor" />
                ))}
              </div>
              <p className="text-muted-foreground">{t(testimonial.quote)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
