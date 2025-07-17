"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "CTO, TechCorp",
    company: "TechCorp Solutions",
    image: "/testimonial-1.jpg",
    rating: 5,
    content:
      "Working with Asim and his team transformed our business operations. The AI solutions they implemented increased our efficiency by 300% and reduced operational costs significantly.",
    results: "300% efficiency increase",
  },
  {
    id: 2,
    name: "Ahmed Al-Rashid",
    title: "CEO, Digital Innovations",
    company: "Digital Innovations Ltd",
    image: "/testimonial-2.jpg",
    rating: 5,
    content:
      "The AI chatbot solution has revolutionized our customer service. We now handle 10x more inquiries with better satisfaction rates. Exceptional expertise and support.",
    results: "10x more inquiries handled",
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    title: "Operations Director",
    company: "Global Manufacturing",
    image: "/testimonial-3.jpg",
    rating: 5,
    content:
      "The strategic AI consulting provided by Main Consulting helped us identify opportunities we never knew existed. ROI was achieved within 3 months.",
    results: "ROI in 3 months",
  },
  {
    id: 4,
    name: "David Chen",
    title: "Founder",
    company: "StartupX",
    image: "/testimonial-4.jpg",
    rating: 5,
    content:
      "As a startup, we needed AI solutions that could scale with us. The team delivered exactly what we needed - powerful, flexible, and cost-effective.",
    results: "Scalable AI implementation",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by leading companies worldwide to deliver exceptional AI solutions
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Content Side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Quote className="h-12 w-12 text-blue-600 mb-6 opacity-50" />

                  <div className="flex items-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  <div className="flex items-center space-x-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 p-0.5">
                      <div className="h-full w-full rounded-full bg-white flex items-center justify-center">
                        <Image
                          src={testimonials[currentIndex].image || "/placeholder.svg"}
                          alt={testimonials[currentIndex].name}
                          width={60}
                          height={60}
                          className="rounded-full object-cover"
                          onError={(e) => {
                            // Fallback to initials
                            e.currentTarget.style.display = "none"
                            const initials = testimonials[currentIndex].name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                            const nextElement = e.currentTarget.nextElementSibling as HTMLElement | null;
                            if (nextElement) {
                              nextElement.textContent = initials;
                            }
                            (e.currentTarget.nextElementSibling as HTMLElement)!.style.display = "flex"
                          }}
                        />
                        <span className="hidden text-blue-600 font-bold text-lg items-center justify-center h-full w-full"></span>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-lg">{testimonials[currentIndex].name}</div>
                      <div className="text-gray-600">{testimonials[currentIndex].title}</div>
                      <div className="text-sm text-blue-600 font-medium">{testimonials[currentIndex].company}</div>
                    </div>
                  </div>
                </div>

                {/* Results Side */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 lg:p-12 text-white flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Results Achieved</h3>
                  <div className="text-4xl font-bold mb-2">{testimonials[currentIndex].results}</div>
                  <p className="text-blue-100 mb-6">Measurable impact delivered through strategic AI implementation</p>
                  <div className="flex items-center space-x-2 text-sm text-blue-100">
                    <div className="h-2 w-2 rounded-full bg-green-400"></div>
                    <span>Verified Results</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 bg-transparent"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 bg-transparent"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            { number: "500+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "300%", label: "Average ROI Increase" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
