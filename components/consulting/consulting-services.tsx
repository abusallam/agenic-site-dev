import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function ConsultingServices() {
  const services = [
    {
      title: "AI Strategy Development",
      description: "Comprehensive AI roadmap aligned with your business goals",
      price: "Starting at $5,000",
      features: [
        "Current state assessment",
        "AI opportunity identification",
        "Implementation roadmap",
        "ROI projections",
        "Risk assessment",
      ],
    },
    {
      title: "Implementation Consulting",
      description: "Hands-on guidance for AI project execution",
      price: "Starting at $10,000",
      features: [
        "Technical architecture design",
        "Team training and development",
        "Vendor selection guidance",
        "Project management support",
        "Quality assurance",
      ],
    },
    {
      title: "AI Transformation Program",
      description: "Complete organizational AI transformation",
      price: "Custom pricing",
      features: [
        "Organization-wide AI strategy",
        "Change management support",
        "Multi-phase implementation",
        "Ongoing optimization",
        "Executive coaching",
      ],
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Consulting Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored AI consulting solutions to meet your specific business needs and objectives
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
                <div className="text-2xl font-bold text-blue-600 mt-4">{service.price}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
