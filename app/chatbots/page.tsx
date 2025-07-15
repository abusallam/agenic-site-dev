import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Zap, Globe, BarChart3, ArrowRight, CheckCircle, Brain } from "lucide-react"

export const metadata = {
  title: "Chatbots - Intelligent Customer Service Solutions",
  description:
    "Deploy AI-powered chatbots that understand context, speak multiple languages, and provide exceptional customer experiences 24/7.",
}

export default function ChatbotsPage() {
  const features = [
    {
      icon: Brain,
      title: "Natural Language Processing",
      description: "Advanced NLP that understands context, intent, and sentiment for human-like conversations.",
      benefits: ["Context awareness", "Sentiment analysis", "Multi-turn conversations"],
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Communicate with customers in their preferred language with real-time translation capabilities.",
      benefits: ["50+ languages", "Real-time translation", "Cultural adaptation"],
    },
    {
      icon: Zap,
      title: "Instant Responses",
      description: "Lightning-fast responses with 99.9% uptime ensure your customers never wait.",
      benefits: ["<100ms response time", "99.9% uptime", "Auto-scaling"],
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive insights into customer interactions, satisfaction, and conversation patterns.",
      benefits: ["Real-time analytics", "Conversation insights", "Performance metrics"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,black,rgba(0,0,0,0.6))]" />

        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-200 px-6 py-3 text-sm font-medium">
              <MessageSquare className="h-4 w-4 mr-2" />
              AI Chatbot Solutions
            </Badge>

            <h1 className="text-4xl sm:text-6xl font-bold font-heading tracking-tight text-gray-900 dark:text-white mb-6">
              Intelligent Chatbots
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 bg-clip-text text-transparent">
                That Actually Help
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Deploy AI-powered chatbots that understand context, speak multiple languages, and provide exceptional
              customer experiences 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
                Try Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>No coding required</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>24/7 support</span>
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
              Advanced Chatbot Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our chatbots are powered by cutting-edge AI technology to deliver exceptional customer experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 bg-white dark:bg-gray-900"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-xl bg-purple-100 dark:bg-purple-950 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">Ready to Deploy Your AI Chatbot?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of businesses providing exceptional customer service with our AI chatbots.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-4 bg-white text-purple-600 hover:bg-gray-100"
            >
              Start Free Trial
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
