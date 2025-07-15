"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, Bot, User, Home, MessageSquare, Globe, ChevronDown } from "lucide-react"
import { useSimpleTranslation } from "@/lib/i18n-simple"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentPath, setCurrentPath] = useState("/")
  const [mounted, setMounted] = useState(false)
  const { t, locale, changeLanguage } = useSimpleTranslation()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    const updatePath = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener("scroll", handleScroll)
    updatePath()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">MC</span>
            </div>
            <span className="font-bold text-xl">main.consulting.sa</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Button>Get Started</Button>
          </div>
        </div>
      </nav>
    )
  }

  const navItems = [
    { href: "/", label: t("nav.home"), icon: Home },
    { href: "/ai-agents", label: t("nav.aiAgents"), icon: Bot },
    { href: "/chatbots", label: t("nav.chatbots"), icon: MessageSquare },
    { href: "/consulting", label: t("nav.consulting"), icon: User },
  ]

  const isActive = (href: string) => {
    return currentPath === href
  }

  const handleLanguageChange = (newLocale: "en" | "ar") => {
    try {
      changeLanguage(newLocale)
    } catch (error) {
      console.error("Error changing language:", error)
    }
  }

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-sm"
          : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative h-10 w-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
            <span className="text-white font-bold text-sm">MC</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl font-heading bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              main.consulting.sa
            </span>
            <span className="text-xs text-muted-foreground -mt-1">AI Solutions & Consulting</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-1 text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 ${
                isActive(item.href) ? "text-primary font-semibold" : "text-muted-foreground"
              }`}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          ))}

          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">{locale.toUpperCase()}</span>
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-32">
              <DropdownMenuItem
                onClick={() => handleLanguageChange("en")}
                className={locale === "en" ? "bg-accent" : ""}
              >
                <span className="mr-2">🇺🇸</span>
                English
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleLanguageChange("ar")}
                className={locale === "ar" ? "bg-accent" : ""}
              >
                <span className="mr-2">🇸🇦</span>
                العربية
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
            {t("nav.getStarted")}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center space-x-2 md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <Globe className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleLanguageChange("en")}>🇺🇸 English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange("ar")}>🇸🇦 العربية</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-accent">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="flex items-center space-x-3 pb-4 border-b">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">MC</span>
                  </div>
                  <span className="font-bold text-lg">main.consulting.sa</span>
                </div>

                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-3 text-lg font-medium p-3 rounded-lg transition-colors hover:bg-accent ${
                      isActive(item.href) ? "bg-accent text-primary" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                ))}

                <Button className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  {t("nav.getStarted")}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
