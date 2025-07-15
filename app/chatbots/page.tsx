"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  MessageSquare,
  Zap,
  Globe,
  BarChart3,
  Settings,
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  Brain,
} from "lucide-react"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced"

export default function ChatbotsPage() {
  const { t, isRTL } = useEnhancedTranslation()
  const [selectedDemo, setSelectedDemo] = useState("customer-service")

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

  const useCases = [
    {
      id: "customer-service",
      title: "Customer Service",
      description: "Handle customer inquiries, resolve issues, and provide 24/7 support across all channels.",
      icon: MessageSquare,
      metrics: { resolution_rate: 92, satisfaction: 89, response_time: 95 },
      demo: {
        messages: [
          { type: "user", text: "Hi, I need help with my order #12345" },
          { type: "bot", text: "I'd be happy to help you with order #12345! Let me look that up for you." },
          {
            type: "bot",
            text: "I can see your order was shipped yesterday and should arrive by tomorrow. Would you like tracking information?",
          },
          { type: "user", text: "Yes, please!" },
          {
            type: "bot",
            text: "Here's your tracking number: 1Z999AA1234567890. You can track it at ups.com. Is there anything else I can help you with?",
          },
        ],
      },
    },
    {
      id: "sales",
      title: "Sales Assistant",
      description: "Qualify leads, answer product questions, and guide prospects through the sales funnel.",
      icon: Users,
      metrics: { conversion_rate: 78, lead_quality: 85, engagement: 92 },
      demo: {
        messages: [
          { type: "user", text: "I'm interested in your AI chatbot solutions" },
          { type: "bot", text: "Great! I'd love to help you find the perfect solution. What's your primary use case?" },
          { type: "user", text: "Customer support for our e-commerce site" },
          {
            type: "bot",
            text: "Perfect! Our e-commerce package includes 24/7 support, order tracking, and return processing. How many customers do you serve monthly?",
          },
          { type: "user", text: "About 10,000" },
          {
            type: "bot",
            text: "Based on your needs, I recommend our Professional plan at $299/month. Would you like to schedule a demo?",
          },
        ],
      },
    },
    {
      id: "support",
      title: "Technical Support",
      description: "Provide technical assistance, troubleshooting guides, and escalate complex issues.",
      icon: Settings,
      metrics: { resolution_rate: 87, satisfaction: 91, escalation_rate: 15 },
      demo: {
        messages: [
          { type: "user", text: "My app keeps crashing when I try to upload files" },
          { type: "bot", text: "I'm sorry to hear about the app crashes. Let me help you troubleshoot this issue." },
          {
            type: "bot",
            text: "First, let's check: What device are you using and what's the file size you're trying to upload?",
          },
          { type: "user", text: "iPhone 14, trying to upload a 50MB video" },
          {
            type: "bot",
            text: "The issue might be the file size limit. Our current limit is 25MB. Try compressing the video or uploading in smaller segments. Would you like me to show you how?",
          },
        ],
      },
    },
    {
      id: "booking",
      title: "Appointment Booking",
      description: "Schedule appointments, manage calendars, and send automated reminders.",
      icon: Clock,
      metrics: { booking_rate: 94, no_show_rate: 8, satisfaction: 88 },
      demo: {
        messages: [
          { type: "user", text: "I'd like to book a consultation" },
          {
            type: "bot",
            text: "I'd be happy to help you schedule a consultation! What type of consultation are you looking for?",
          },
          { type: "user", text: "AI strategy consultation" },
          {
            type: "bot",
            text: "Great choice! I have availability this week. Would you prefer Tuesday at 2 PM or Thursday at 10 AM?",
          },
          { type: "user", text: "Thursday at 10 AM works" },
          {
            type: "bot",
            text: "Perfect! I've booked your AI strategy consultation for Thursday at 10 AM. You'll receive a confirmation email with the meeting link shortly.",
          },
        ],
      },
    },
  ]

  const pricingPlans = [
    {
      id: "starter",
      name: "Starter",
      price: "$49",
      period: "per month",
      description: "Perfect for small businesses starting with chatbot automation",
      features: ["1 chatbot", "1,000 conversations/month", "Basic NLP", "Email support", "Web widget integration"],
      popular: false,
    },
    {
      id: "professional",
      name: "Professional",
      price: "$149",
      period: "per month",
      description: "Ideal for growing businesses with advanced chatbot needs",
      features: [
        "5 chatbots",
        "10,000 conversations/month",
        "Advanced NLP",
        "Priority support",
        "Multi-channel deployment",
        "Custom integrations",
        "Analytics dashboard",
      ],
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations requiring unlimited scale and customization",
      features: [
        "Unlimited chatbots",
        "Unlimited conversations",
        "Custom AI training",
        "Dedicated support",
        "White-label solution",
        "On-premise deployment",
        "SLA guarantee",
      ],
      popular: false,
    },
  ]

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950 ${isRTL ? "rtl" : ""}`}
    >
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

            <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 ${isRTL ? "flex-row-reverse" : ""}`}>
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
            <div
              className={`flex items-center justify-center space-x-8 text-sm text-gray-600 dark:text-gray-400 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}
            >
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

      {/* Interactive Demo Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              See Our Chatbots in Action
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience how our AI chatbots handle real conversations across different use cases.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Tabs value={selectedDemo} onValueChange={setSelectedDemo} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                {useCases.map((useCase) => (
                  <TabsTrigger key={useCase.id} value={useCase.id} className="flex items-center space-x-2">
                    <useCase.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{useCase.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {useCases.map((useCase) => (
                <TabsContent key={useCase.id} value={useCase.id}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Chat Demo */}
                    <Card className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border-0 shadow-xl">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <useCase.icon className="h-5 w-5 text-purple-600" />
                          <span>{useCase.title} Demo</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4 max-h-96 overflow-y-auto">
                          {useCase.demo.messages.map((message, index) => (
                            <div
                              key={index}
                              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                            >
                              <div
                                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                                  message.type === "user"
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                                }`}
                              >
                                {message.text}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Metrics */}
                    <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl">
                      <CardHeader>
                        <CardTitle>Performance Metrics</CardTitle>
                        <CardDescription>{useCase.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {Object.entries(useCase.metrics).map(([key, value]) => (
                            <div key={key}>
                              <div className="flex justify-between text-sm mb-2">
                                <span className="text-gray-600 dark:text-gray-400 capitalize">
                                  {key.replace("_", " ")}
                                </span>
                                <span className="font-semibold text-purple-600">{value}%</span>
                              </div>
                              <Progress value={value} className="h-2" />
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
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

      {/* Pricing Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include our core chatbot features with no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? "ring-2 ring-purple-500 shadow-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950"
                    : "hover:shadow-xl bg-white dark:bg-gray-800"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <CardHeader className={plan.popular ? "pt-12" : ""}>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</CardTitle>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>
                  </div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                        : "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100"
                    }`}
                    size="lg"
                  >
                    {plan.id === "enterprise" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
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

          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? "flex-row-reverse" : ""}`}>
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
