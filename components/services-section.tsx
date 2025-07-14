import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Bot, MessageSquare, User } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const services = [
    {
      icon: Bot,
      title: "AI Agents",
      description:
        "Intelligent autonomous agents that can handle complex tasks, make decisions, and integrate with your existing systems.",
      features: ["Task Automation", "Decision Making", "System Integration", "Learning Capabilities"],
      href: "/ai-agents",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: MessageSquare,
      title: "AI Chatbots",
      description:
        "Advanced conversational AI that provides 24/7 customer support with natural language understanding.",
      features: ["Natural Language Processing", "24/7 Availability", "Multi-language Support", "Context Awareness"],
      href: "/chatbots",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: User,
      title: "Expert Consulting",
      description:
        "Professional AI consulting services by Asim Abu Salam to help you strategize and implement AI solutions.",
      features: ["Strategy Development", "Implementation Planning", "Technical Guidance", "Best Practices"],
      href: "/consulting",
      color: "from-green-600 to-teal-600",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div
                  className={`h-16 w-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"
                >
                  <Link href={service.href}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
