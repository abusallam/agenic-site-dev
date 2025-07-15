"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  FileText,
  Book,
  Code,
  Zap,
  Shield,
  Settings,
  ArrowRight,
  ExternalLink,
  Download,
  Play,
  CheckCircle,
} from "lucide-react"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced"

export default function DocumentationPage() {
  const { t, isRTL } = useEnhancedTranslation()
  const [activeSection, setActiveSection] = useState("getting-started")

  const documentationSections = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: Play,
      description: "Quick start guide to get you up and running",
      content: {
        overview:
          "Welcome to main.consulting.sa! This guide will help you get started with our AI solutions and consulting services.",
        steps: [
          {
            title: "1. Choose Your Service",
            description: "Select from AI Agents, Chatbots, or Consulting services based on your needs.",
            details: [
              "AI Agents: For workflow automation and intelligent decision making",
              "Chatbots: For customer service and engagement",
              "Consulting: For strategic AI implementation guidance",
            ],
          },
          {
            title: "2. Sign Up for Free Trial",
            description: "Create your account and start with our 14-day free trial.",
            details: [
              "No credit card required for trial",
              "Full access to all features",
              "Dedicated onboarding support",
            ],
          },
          {
            title: "3. Configure Your Solution",
            description: "Set up your AI solution using our intuitive interface.",
            details: ["Drag-and-drop configuration", "Pre-built templates available", "Custom integration options"],
          },
          {
            title: "4. Deploy and Monitor",
            description: "Launch your solution and track performance in real-time.",
            details: ["One-click deployment", "Real-time analytics dashboard", "24/7 monitoring and alerts"],
          },
        ],
      },
    },
    {
      id: "ai-agents",
      title: "AI Agents",
      icon: Zap,
      description: "Complete guide to deploying and managing AI agents",
      content: {
        overview:
          "AI Agents are autonomous systems that can perform complex tasks, make decisions, and integrate with your existing workflows.",
        features: [
          "Intelligent workflow automation",
          "Decision-making capabilities",
          "System integrations",
          "Custom training options",
          "Real-time analytics",
        ],
        useCases: [
          "Customer service automation",
          "Data processing and analysis",
          "Sales lead qualification",
          "Content management",
          "Process optimization",
        ],
      },
    },
    {
      id: "chatbots",
      title: "Chatbots",
      icon: FileText,
      description: "How to create and deploy intelligent chatbots",
      content: {
        overview:
          "Our chatbot platform enables you to create conversational AI that understands context and provides exceptional customer experiences.",
        features: [
          "Natural language processing",
          "Multi-language support",
          "Context awareness",
          "CRM integrations",
          "Analytics dashboard",
        ],
        integrations: ["Website widget", "WhatsApp Business", "Facebook Messenger", "Slack", "Microsoft Teams"],
      },
    },
    {
      id: "consulting",
      title: "Consulting Services",
      icon: Book,
      description: "Expert AI consulting and implementation guidance",
      content: {
        overview:
          "Our consulting services provide strategic guidance for AI implementation, led by industry expert Asim Abu Salam.",
        services: [
          "AI strategy development",
          "Implementation planning",
          "Team training",
          "ROI optimization",
          "Ongoing support",
        ],
        process: [
          "Initial assessment",
          "Strategy development",
          "Implementation roadmap",
          "Execution support",
          "Performance monitoring",
        ],
      },
    },
    {
      id: "api",
      title: "API Reference",
      icon: Code,
      description: "Technical documentation for developers",
      content: {
        overview:
          "Our REST API provides programmatic access to all platform features with comprehensive documentation and examples.",
        endpoints: [
          "Authentication",
          "Agent management",
          "Chatbot configuration",
          "Analytics data",
          "Webhook integration",
        ],
        examples: [
          "Creating an AI agent",
          "Deploying a chatbot",
          "Retrieving analytics",
          "Managing webhooks",
          "Error handling",
        ],
      },
    },
    {
      id: "security",
      title: "Security & Compliance",
      icon: Shield,
      description: "Security measures and compliance information",
      content: {
        overview:
          "We maintain the highest security standards with enterprise-grade protection and compliance certifications.",
        features: [
          "End-to-end encryption",
          "SOC 2 Type II compliance",
          "GDPR compliance",
          "Role-based access control",
          "Audit logging",
        ],
        certifications: ["SOC 2 Type II", "ISO 27001", "GDPR compliant", "CCPA compliant", "HIPAA ready"],
      },
    },
  ]

  const quickLinks = [
    { title: "API Documentation", href: "/api-docs", icon: Code },
    { title: "Video Tutorials", href: "/tutorials", icon: Play },
    { title: "Community Forum", href: "/community", icon: FileText },
    { title: "Support Center", href: "/support", icon: Settings },
  ]

  const currentSection = documentationSections.find((section) => section.id === activeSection)

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 ${isRTL ? "rtl" : ""}`}
    >
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,black,rgba(0,0,0,0.6))]" />

        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200 px-6 py-3 text-sm font-medium">
              <FileText className="h-4 w-4 mr-2" />
              Documentation
            </Badge>

            <h1 className="text-4xl sm:text-6xl font-bold font-heading tracking-tight text-gray-900 dark:text-white mb-6">
              Complete
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about deploying, managing, and optimizing your AI solutions. From quick start
              guides to advanced configurations.
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 ${isRTL ? "flex-row-reverse" : ""}`}>
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                Get Started
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
                <Download className="h-5 w-5 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Documentation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 bg-white dark:bg-gray-800 border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-lg">Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-2">
                    {documentationSections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full text-left p-3 rounded-lg transition-colors flex items-center space-x-3 ${
                          activeSection === section.id
                            ? "bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200"
                            : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
                        } ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}
                      >
                        <section.icon className="h-5 w-5" />
                        <div>
                          <div className="font-medium">{section.title}</div>
                          <div className="text-xs opacity-75">{section.description}</div>
                        </div>
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="mt-6 bg-white dark:bg-gray-800 border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {quickLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className={`flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}
                      >
                        <link.icon className="h-4 w-4" />
                        <span>{link.title}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {currentSection && (
                <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl">
                  <CardHeader>
                    <div className={`flex items-center space-x-4 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}>
                      <div className="h-12 w-12 rounded-xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center">
                        <currentSection.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                          {currentSection.title}
                        </CardTitle>
                        <CardDescription className="text-base">{currentSection.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-8">
                    {/* Overview */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Overview</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {currentSection.content.overview}
                      </p>
                    </div>

                    <Separator />

                    {/* Dynamic Content Based on Section */}
                    {currentSection.id === "getting-started" && currentSection.content.steps && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Quick Start Steps</h3>
                        <div className="space-y-6">
                          {currentSection.content.steps.map((step, index) => (
                            <Card key={index} className="bg-gray-50 dark:bg-gray-900 border-0">
                              <CardContent className="p-6">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                  {step.title}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{step.description}</p>
                                <ul className="space-y-2">
                                  {step.details.map((detail, detailIndex) => (
                                    <li
                                      key={detailIndex}
                                      className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400"
                                    >
                                      <CheckCircle className="h-4 w-4 text-green-600" />
                                      <span>{detail}</span>
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Features */}
                    {currentSection.content.features && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {currentSection.content.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg"
                            >
                              <CheckCircle className="h-5 w-5 text-green-600" />
                              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Use Cases */}
                    {currentSection.content.useCases && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Use Cases</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {currentSection.content.useCases.map((useCase, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-3 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg"
                            >
                              <ArrowRight className="h-5 w-5 text-blue-600" />
                              <span className="text-gray-700 dark:text-gray-300">{useCase}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Services */}
                    {currentSection.content.services && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Our Services</h3>
                        <div className="space-y-3">
                          {currentSection.content.services.map((service, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-3 p-4 bg-purple-50 dark:bg-purple-950 rounded-lg"
                            >
                              <CheckCircle className="h-5 w-5 text-purple-600" />
                              <span className="text-gray-700 dark:text-gray-300">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Integrations */}
                    {currentSection.content.integrations && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                          Available Integrations
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {currentSection.content.integrations.map((integration, index) => (
                            <div key={index} className="p-4 bg-green-50 dark:bg-green-950 rounded-lg text-center">
                              <span className="text-gray-700 dark:text-gray-300 font-medium">{integration}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Certifications */}
                    {currentSection.content.certifications && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                          Certifications & Compliance
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {currentSection.content.certifications.map((cert, index) => (
                            <div key={index} className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg text-center">
                              <Shield className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                              <span className="text-gray-700 dark:text-gray-300 font-medium">{cert}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <Separator />

                    {/* CTA */}
                    <div className="text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-2xl">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Need Help Getting Started?
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Our team is here to help you succeed with your AI implementation.
                      </p>
                      <div
                        className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? "flex-row-reverse" : ""}`}
                      >
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                          Contact Support
                        </Button>
                        <Button variant="outline">Schedule Demo</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
