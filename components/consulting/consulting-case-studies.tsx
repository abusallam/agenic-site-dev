import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Users, Zap, Target } from "lucide-react"

export function ConsultingCaseStudies() {
  const caseStudies = [
    {
      title: "Global Manufacturing AI Transformation",
      client: "Fortune 500 Manufacturing Company",
      industry: "Manufacturing",
      challenge: "Manual quality control processes causing delays and inconsistencies",
      solution: "Implemented computer vision AI for automated quality inspection and predictive maintenance",
      results: [
        "85% reduction in quality control time",
        "40% decrease in defect rates",
        "$2.3M annual cost savings",
        "99.7% accuracy in defect detection",
      ],
      technologies: ["Computer Vision", "Machine Learning", "IoT Integration", "Predictive Analytics"],
      icon: Target,
      color: "from-blue-600 to-cyan-600",
    },
    {
      title: "Healthcare AI Diagnostic System",
      client: "Regional Healthcare Network",
      industry: "Healthcare",
      challenge: "Radiologist shortage and increasing diagnostic workload",
      solution: "Developed AI-powered diagnostic assistance system for medical imaging",
      results: [
        "60% faster diagnostic processing",
        "95% accuracy in early detection",
        "30% increase in patient throughput",
        "Reduced radiologist workload by 50%",
      ],
      technologies: ["Deep Learning", "Medical Imaging AI", "DICOM Integration", "Cloud Computing"],
      icon: Users,
      color: "from-green-600 to-teal-600",
    },
    {
      title: "Financial Services Fraud Detection",
      client: "Leading Regional Bank",
      industry: "Financial Services",
      challenge: "Rising fraud losses and false positive rates in transaction monitoring",
      solution: "Built real-time AI fraud detection system with advanced pattern recognition",
      results: [
        "78% reduction in fraud losses",
        "65% decrease in false positives",
        "Real-time transaction monitoring",
        "$5.2M prevented fraud annually",
      ],
      technologies: ["Anomaly Detection", "Real-time Processing", "Graph Analytics", "Risk Modeling"],
      icon: TrendingUp,
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "Retail AI Personalization Engine",
      client: "E-commerce Platform",
      industry: "Retail & E-commerce",
      challenge: "Low conversion rates and poor customer engagement",
      solution: "Implemented AI-driven personalization and recommendation system",
      results: [
        "180% increase in conversion rates",
        "45% boost in average order value",
        "90% improvement in customer retention",
        "3x increase in engagement metrics",
      ],
      technologies: ["Recommendation Systems", "NLP", "Customer Analytics", "A/B Testing"],
      icon: Zap,
      color: "from-orange-600 to-red-600",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="outline">
            Case Studies
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-4">
            Proven Results Across Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world success stories demonstrating the transformative power of strategic AI implementation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-0 bg-white"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`h-12 w-12 rounded-xl bg-gradient-to-r ${study.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <study.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {study.industry}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {study.title}
                </CardTitle>
                <CardDescription className="text-gray-600 font-medium">{study.client}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Challenge & Solution */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Results</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center space-x-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500 flex-shrink-0"></div>
                        <span className="text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t">
                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-200"
                  >
                    View Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join these successful companies and discover how AI can revolutionize your operations, reduce costs, and
              drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Schedule Strategy Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Download Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
