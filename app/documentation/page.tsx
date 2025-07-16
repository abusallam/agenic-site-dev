"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EnhancedNavigation } from "@/components/navigation-enhanced"
import { EnhancedFooter } from "@/components/footer-enhanced"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced"
import {
  Book,
  Code,
  Rocket,
  Settings,
  Users,
  Zap,
  ArrowRight,
  ExternalLink,
  FileText,
  Video,
  MessageSquare,
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function DocumentationPage() {
  const { t, isRTL } = useEnhancedTranslation()

  const quickActions = [
    {
      icon: Rocket,
      title: "Quick Start Guide",
      description: "Get up and running in minutes",
      href: "/docs/quick-start",
      badge: "Popular",
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Complete API documentation",
      href: "/docs/api",
      badge: "Technical",
    },
    {
      icon: Settings,
      title: "Configuration",
      description: "Setup and configuration options",
      href: "/docs/config",
      badge: "Setup",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Working with teams and permissions",
      href: "/docs/teams",
      badge: "New",
    },
  ]

  const documentationSections = [
    {
      category: "Getting Started",
      items: [
        { title: "Introduction", href: "/docs/intro", type: "guide" },
        { title: "Installation", href: "/docs/installation", type: "guide" },
        { title: "First Steps", href: "/docs/first-steps", type: "guide" },
        { title: "Basic Configuration", href: "/docs/basic-config", type: "guide" },
      ],
    },
    {
      category: "AI Agents",
      items: [
        { title: "Creating AI Agents", href: "/docs/ai-agents/create", type: "tutorial" },
        { title: "Agent Configuration", href: "/docs/ai-agents/config", type: "reference" },
        { title: "Training & Fine-tuning", href: "/docs/ai-agents/training", type: "tutorial" },
        { title: "Deployment", href: "/docs/ai-agents/deploy", type: "guide" },
      ],
    },
    {
      category: "Chatbots",
      items: [
        { title: "Building Chatbots", href: "/docs/chatbots/build", type: "tutorial" },
        { title: "Natural Language Processing", href: "/docs/chatbots/nlp", type: "reference" },
        { title: "Integration Guide", href: "/docs/chatbots/integration", type: "guide" },
        { title: "Analytics & Monitoring", href: "/docs/chatbots/analytics", type: "guide" },
      ],
    },
    {
      category: "API & Integration",
      items: [
        { title: "REST API", href: "/docs/api/rest", type: "reference" },
        { title: "GraphQL API", href: "/docs/api/graphql", type: "reference" },
        { title: "Webhooks", href: "/docs/api/webhooks", type: "reference" },
        { title: "SDKs & Libraries", href: "/docs/api/sdks", type: "reference" },
      ],
    },
    {
      category: "Advanced Topics",
      items: [
        { title: "Custom Models", href: "/docs/advanced/models", type: "tutorial" },
        { title: "Performance Optimization", href: "/docs/advanced/performance", type: "guide" },
        { title: "Security Best Practices", href: "/docs/advanced/security", type: "guide" },
        { title: "Scaling & Architecture", href: "/docs/advanced/scaling", type: "guide" },
      ],
    },
  ]

  const resources = [
    {
      icon: FileText,
      title: "PDF Guides",
      description: "Downloadable comprehensive guides",
      action: "Download",
      href: "/resources/guides.pdf",
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video walkthroughs",
      action: "Watch",
      href: "/resources/videos",
    },
    {
      icon: MessageSquare,
      title: "Community Forum",
      description: "Get help from the community",
      action: "Join",
      href: "/community",
    },
    {
      icon: ExternalLink,
      title: "GitHub Repository",
      description: "Source code and examples",
      action: "View",
      href: "https://github.com/main-consulting",
    },
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "tutorial":
        return <Zap className="h-4 w-4" />
      case "reference":
        return <Book className="h-4 w-4" />
      case "guide":
        return <FileText className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const getTypeBadge = (type: string) => {
    const variants = {
      tutorial: "default",
      reference: "secondary",
      guide: "outline",
    } as const
    return variants[type as keyof typeof variants] || "outline"
  }

  return (
    <div className="flex flex-col min-h-screen">
      <EnhancedNavigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold font-heading gradient-text">Documentation Hub</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to build, deploy, and scale AI solutions with our platform. From quick start guides
                to advanced tutorials.
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full px-4 py-3 rounded-lg border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button size="sm" className="absolute right-2 top-1/2 -translate-y-1/2">
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold font-heading mb-8 text-center">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickActions.map((action, index) => (
                  <Card key={index} className="hover-lift glass-effect border-0 bg-background/50 relative group">
                    {action.badge && (
                      <Badge
                        className={cn("absolute top-4 z-10", isRTL ? "left-4" : "right-4")}
                        variant={action.badge === "Popular" ? "default" : "secondary"}
                      >
                        {action.badge}
                      </Badge>
                    )}
                    <CardHeader className="pb-4">
                      <div className="p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                        <action.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{action.title}</CardTitle>
                      <CardDescription>{action.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                      >
                        <Link href={action.href} className="flex items-center justify-center gap-2">
                          Get Started
                          <ArrowRight
                            className={cn(
                              "h-4 w-4 transition-transform group-hover:translate-x-1",
                              isRTL && "group-hover:-translate-x-1",
                            )}
                          />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold font-heading mb-8 text-center">Documentation</h2>

              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="all">All Docs</TabsTrigger>
                  <TabsTrigger value="guides">Guides</TabsTrigger>
                  <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
                  <TabsTrigger value="reference">Reference</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-8">
                  {documentationSections.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <h3 className="text-xl font-semibold mb-4">{section.category}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section.items.map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            href={item.href}
                            className="flex items-center gap-3 p-4 rounded-lg border bg-background/50 hover:bg-background transition-colors group"
                          >
                            <div className="p-2 rounded bg-muted/50 group-hover:bg-primary/10 transition-colors">
                              {getTypeIcon(item.type)}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium group-hover:text-primary transition-colors">
                                  {item.title}
                                </span>
                                <Badge variant={getTypeBadge(item.type)} className="text-xs">
                                  {item.type}
                                </Badge>
                              </div>
                            </div>
                            <ArrowRight
                              className={cn(
                                "h-4 w-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1",
                                isRTL && "group-hover:-translate-x-1",
                              )}
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="guides">
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">Guide-specific content would be filtered here.</p>
                  </div>
                </TabsContent>

                <TabsContent value="tutorials">
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">Tutorial-specific content would be filtered here.</p>
                  </div>
                </TabsContent>

                <TabsContent value="reference">
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">Reference documentation would be filtered here.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold font-heading mb-8 text-center">Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {resources.map((resource, index) => (
                  <Card key={index} className="hover-lift text-center">
                    <CardHeader>
                      <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-3">
                        <resource.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild variant="outline" className="w-full bg-transparent">
                        <Link href={resource.href} target={resource.href.startsWith("http") ? "_blank" : undefined}>
                          {resource.action}
                          {resource.href.startsWith("http") && <ExternalLink className="ml-2 h-4 w-4" />}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Support CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold font-heading">Need More Help?</h2>
              <p className="text-lg text-muted-foreground">
                Can't find what you're looking for? Our support team is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/community">Join Community</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <EnhancedFooter />
    </div>
  )
}
