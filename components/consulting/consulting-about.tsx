import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Lightbulb, Target, Zap } from "lucide-react"

export function ConsultingAbout() {
  const expertise = [
    {
      icon: Brain,
      title: "AI Strategy",
      description: "Comprehensive AI roadmaps tailored to your business objectives",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge solutions that drive competitive advantage",
    },
    {
      icon: Target,
      title: "Implementation",
      description: "Hands-on guidance from concept to successful deployment",
    },
    {
      icon: Zap,
      title: "Optimization",
      description: "Continuous improvement and performance enhancement",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="outline">
                About Asim
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Leading AI Transformation Across Industries
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over a decade of experience in artificial intelligence and machine learning, Asim Abu Salam has
                helped organizations across various industries harness the power of AI to drive innovation, efficiency,
                and growth.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From startups to Fortune 500 companies, Asim provides strategic guidance that transforms complex AI
                concepts into practical, profitable solutions.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-blue-600" />
                  <span className="text-gray-700">PhD in Computer Science, AI Specialization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-blue-600" />
                  <span className="text-gray-700">Former AI Research Lead at Tech Giants</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-blue-600" />
                  <span className="text-gray-700">Published Author on AI Implementation</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
