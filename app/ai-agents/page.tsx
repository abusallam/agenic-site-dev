"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Bot,
  Zap,
  Shield,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Users,
  Database,
  Globe,
  MessageSquare,
} from "lucide-react"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced"

export default function AIAgentsPage() {
  const { t, isRTL } = useEnhancedTranslation()
  const [selectedPlan, setSelectedPlan] = useState("professional")

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

  const useCases = [
    {
      title: "Customer Service Automation",
      description: "Handle customer inquiries, process returns, and manage support tickets automatically.",
      icon: MessageSquare,
      metrics: { efficiency: 85, satisfaction: 92, cost_reduction: 60 },
    },
    {
      title: "Data Processing & Analysis",
      description: "Automatically process large datasets, generate reports, and identify trends.",
      icon: Database,
      metrics: { efficiency: 95, satisfaction: 88, cost_reduction: 70 },
    },
    {
      title: "Sales Lead Qualification",
      description: "Qualify leads, schedule meetings, and nurture prospects through the sales funnel.",
      icon: Users,
      metrics: { efficiency: 78, satisfaction: 85, cost_reduction: 45 },
    },
    {
      title: "Content Management",
      description: "Organize, categorize, and distribute content across multiple platforms automatically.",
      icon: Globe,
      metrics: { efficiency: 90, satisfaction: 87, cost_reduction: 55 },
    },
  ]

  const pricingPlans = [
    {
      id: "starter",
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for small businesses getting started with AI automation",
      features: [
        "Up to 5 AI agents",
        "1,000 tasks per month",
        "Basic analytics",
        "Email support",
        "Pre-built templates",
      ],
      popular: false,
    },
    {
      id: "professional",
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Ideal for growing businesses with complex automation needs",
      features: [
        "Up to 25 AI agents",
        "10,000 tasks per month",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
        "API access",
        "Team collaboration",
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
        "Unlimited AI agents",
        "Unlimited tasks",
        "Custom analytics",
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
      className={`min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 ${isRTL ? "rtl" : ""}`}
    >
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

            <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 ${isRTL ? "flex-row-reverse" : ""}`}>
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
            <div
              className={`flex items-center justify-center space-x-8 text-sm text-gray-600 dark:text-gray-400 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}
            >
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

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how businesses across industries are using AI agents to transform their operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-900"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-xl bg-purple-100 dark:bg-purple-950 flex items-center justify-center">
                      <useCase.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                        {useCase.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 mb-6 text-base">
                    {useCase.description}
                  </CardDescription>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600 dark:text-gray-400">Efficiency Gain</span>
                        <span className="font-semibold text-green-600">{useCase.metrics.efficiency}%</span>
                      </div>
                      <Progress value={useCase.metrics.efficiency} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600 dark:text-gray-400">Customer Satisfaction</span>
                        <span className="font-semibold text-blue-600">{useCase.metrics.satisfaction}%</span>
                      </div>
                      <Progress value={useCase.metrics.satisfaction} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600 dark:text-gray-400">Cost Reduction</span>
                        <span className="font-semibold text-purple-600">{useCase.metrics.cost_reduction}%</span>
                      </div>
                      <Progress value={useCase.metrics.cost_reduction} className="h-2" />
                    </div>
                  </div>
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
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Start with our free trial and scale as your business grows. All plans include our core AI agent features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? "ring-2 ring-blue-500 shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950"
                    : "hover:shadow-xl bg-white dark:bg-gray-800"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm font-medium">
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
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                        : "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100"
                    }`}
                    size="lg"
                    onClick={() => setSelectedPlan(plan.id)}
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of businesses already using AI agents to automate their workflows and boost productivity.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? "flex-row-reverse" : ""}`}>
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
