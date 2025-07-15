import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Zap, Shield, BarChart3, ArrowRight, CheckCircle } from "lucide-react"

export const metadata = {
  title: "AI Agents - Intelligent Automation Solutions",
  description:
    "Deploy intelligent AI agents that learn and adapt to your business processes. Automate complex workflows with human-like decision making.",
}

export default function AIAgentsPage() {
  const features = [
    {
      icon: Bot,
      title: "Intelligent Automation",
      description:
        "AI agents that learn and adapt to your business processes, automating complex workflows with human-like decision making.",
      benefits: ["Reduces manual work by 80%", "24/7 operation", "Continuous learning"],
    },
    {
      icon: Zap,
      title: "Lightning Fast Deployment",
      description: "Get your AI agents up and running in minutes with our no-code platform and pre-built templates.",
      benefits: ["5-minute setup", "Pre-built templates", "Drag-and-drop interface"],
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level security with end-to-end encryption, OAuth authentication, and compliance-ready infrastructure.",
      benefits: ["SOC 2 compliant", "End-to-end encryption", "Role-based access"],
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time insights into agent performance, task completion rates, and ROI metrics.",
      benefits: ["Real-time dashboards", "Performance metrics", "ROI tracking"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,black,rgba(0,0,0,0.6))]" />

        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200 px-6 py-3 text-sm font-medium">
              <Bot className="h-4 w-4 mr-2" />
              AI Agents Platform
            </Badge>

            <h1 className="text-4xl sm:text-6xl font-bold font-heading tracking-tight text-gray-900 dark:text-white mb-6">
              Deploy Intelligent
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                AI Agents
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Automate complex workflows with AI agents that think, learn, and adapt. Transform your business operations
              with intelligent automation that scales with your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              Powerful AI Agent Capabilities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our AI agents combine advanced machine learning with intuitive automation to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 mb-4 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of businesses already using AI agents to automate their workflows and boost productivity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100"
            >
              Start Free Trial
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
