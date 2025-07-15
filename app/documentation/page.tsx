import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, Zap, Shield, ArrowRight, ExternalLink, FileText, Settings, Users, Globe } from "lucide-react"

export const metadata = {
  title: "Documentation - API References & Guides",
  description:
    "Complete documentation for main.consulting.sa AI solutions including API references, integration guides, and best practices.",
}

export default function DocumentationPage() {
  const sections = [
    {
      title: "Getting Started",
      description: "Quick start guides and basic setup instructions",
      icon: Zap,
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      items: [
        { title: "Quick Start Guide", href: "/docs/quick-start" },
        { title: "Installation", href: "/docs/installation" },
        { title: "Authentication", href: "/docs/authentication" },
        { title: "First API Call", href: "/docs/first-api-call" },
      ],
    },
    {
      title: "AI Agents",
      description: "Complete guide to deploying and managing AI agents",
      icon: Settings,
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      items: [
        { title: "Agent Configuration", href: "/docs/agents/configuration" },
        { title: "Workflow Automation", href: "/docs/agents/workflows" },
        { title: "Custom Actions", href: "/docs/agents/actions" },
        { title: "Monitoring & Analytics", href: "/docs/agents/monitoring" },
      ],
    },
    {
      title: "Chatbots",
      description: "Build and deploy intelligent chatbots",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      items: [
        { title: "Chatbot Setup", href: "/docs/chatbots/setup" },
        { title: "Natural Language Processing", href: "/docs/chatbots/nlp" },
        { title: "Multi-language Support", href: "/docs/chatbots/i18n" },
        { title: "Integration Channels", href: "/docs/chatbots/channels" },
      ],
    },
    {
      title: "API Reference",
      description: "Complete API documentation and examples",
      icon: Code,
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      items: [
        { title: "REST API", href: "/docs/api/rest" },
        { title: "GraphQL API", href: "/docs/api/graphql" },
        { title: "Webhooks", href: "/docs/api/webhooks" },
        { title: "SDKs & Libraries", href: "/docs/api/sdks" },
      ],
    },
    {
      title: "Security",
      description: "Security best practices and compliance",
      icon: Shield,
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-950/20",
      items: [
        { title: "Authentication & Authorization", href: "/docs/security/auth" },
        { title: "Data Encryption", href: "/docs/security/encryption" },
        { title: "Compliance (SOC 2)", href: "/docs/security/compliance" },
        { title: "Security Best Practices", href: "/docs/security/best-practices" },
      ],
    },
    {
      title: "Integrations",
      description: "Connect with third-party services and platforms",
      icon: Globe,
      color: "text-teal-600",
      bgColor: "bg-teal-50 dark:bg-teal-950/20",
      items: [
        { title: "CRM Integration", href: "/docs/integrations/crm" },
        { title: "E-commerce Platforms", href: "/docs/integrations/ecommerce" },
        { title: "Communication Tools", href: "/docs/integrations/communication" },
        { title: "Custom Integrations", href: "/docs/integrations/custom" },
      ],
    },
  ]

  const quickLinks = [
    { title: "API Status", href: "/status", icon: Shield, status: "Operational" },
    { title: "Changelog", href: "/changelog", icon: FileText, status: "Updated" },
    { title: "Support Center", href: "/support", icon: Users, status: "24/7" },
    { title: "Community Forum", href: "/community", icon: Globe, status: "Active" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,black,rgba(0,0,0,0.6))]" />

        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-6 py-3 text-sm font-medium">
              <BookOpen className="h-4 w-4 mr-2" />
              Documentation Hub
            </Badge>

            <h1 className="text-4xl sm:text-6xl font-bold font-heading tracking-tight text-gray-900 dark:text-white mb-6">
              Developer
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Everything you need to integrate and build with our AI solutions. From quick start guides to advanced API
              references.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Get Started
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
                <Code className="h-5 w-5 mr-2" />
                API Reference
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="h-12 w-12 rounded-xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <link.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{link.title}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {link.status}
                  </Badge>
                  <Button variant="ghost" size="sm" className="mt-3 w-full">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              Complete Documentation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive guides, tutorials, and references to help you build amazing AI-powered applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 bg-white dark:bg-gray-900"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div
                      className={`h-12 w-12 rounded-xl ${section.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <section.icon className={`h-6 w-6 ${section.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                        {section.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 mb-6 text-base leading-relaxed">
                    {section.description}
                  </CardDescription>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Button
                          variant="ghost"
                          className="w-full justify-start p-2 h-auto text-left hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          <ArrowRight className="h-4 w-4 mr-2 text-gray-400" />
                          <span className="text-gray-700 dark:text-gray-300">{item.title}</span>
                        </Button>
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
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">Need Help Getting Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our support team is here to help you integrate our AI solutions into your applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100"
            >
              Contact Support
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Join Community
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
