"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  Bot,
  User,
  Home,
  MessageSquare,
  Globe,
  ChevronDown,
  FileText,
  Phone,
  LogIn,
  UserPlus,
  Sun,
  Moon,
} from "lucide-react"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced"
import { brandConfig } from "@/lib/brand"
import { useTheme } from "next-themes"

export function EnhancedNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentPath, setCurrentPath] = useState("/")
  const [mounted, setMounted] = useState(false)
  const { t, locale, changeLanguage, isRTL } = useEnhancedTranslation()
  const { theme, setTheme } = useTheme()
  const router = useRouter()

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

  if (!mounted) {
    return (
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">{brandConfig.logo.text}</span>
            </div>
            <span className="font-bold text-xl">{brandConfig.logo.full}</span>
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
    {
      href: "/consulting",
      label: t("nav.consulting"),
      icon: User,
      badge: "Expert",
    },
    { href: "/documentation", label: t("nav.documentation"), icon: FileText },
    { href: "/contact", label: t("nav.contact"), icon: Phone },
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

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-lg"
          : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`flex items-center space-x-3 group ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}
        >
          <div className="relative h-10 w-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-lg">
            <span className="text-white font-bold text-sm">{brandConfig.logo.text}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl font-heading bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {brandConfig.logo.full}
            </span>
            <span className="text-xs text-muted-foreground -mt-1">{brandConfig.tagline}</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className={`hidden lg:flex items-center space-x-6 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}>
          {navItems.slice(0, 4).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-1 text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 relative ${
                isActive(item.href) ? "text-primary font-semibold" : "text-muted-foreground"
              } ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
              {item.badge && (
                <Badge variant="secondary" className="ml-1 text-xs">
                  {item.badge}
                </Badge>
              )}
              {isActive(item.href) && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
              )}
            </Link>
          ))}

          {/* More Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                <span className="text-sm font-medium">More</span>
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {navItems.slice(4).map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href} className="flex items-center space-x-2">
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-9 w-9 hover:bg-accent transition-colors"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">{locale.toUpperCase()}</span>
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-36">
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

          {/* Auth Buttons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="flex items-center space-x-1">
              <LogIn className="h-4 w-4" />
              <span>{t("nav.signIn")}</span>
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <UserPlus className="h-4 w-4 mr-1" />
              {t("nav.getStarted")}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`flex items-center space-x-2 lg:hidden ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}>
          {/* Theme Toggle Mobile */}
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9">
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          {/* Language Toggle Mobile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Globe className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleLanguageChange("en")}>🇺🇸 English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange("ar")}>🇸🇦 العربية</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-accent h-9 w-9">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side={isRTL ? "left" : "right"} className="w-80">
              <div className="flex flex-col space-y-6 mt-8">
                {/* Mobile Logo */}
                <div
                  className={`flex items-center space-x-3 pb-4 border-b ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}
                >
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{brandConfig.logo.text}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg">{brandConfig.logo.full}</span>
                    <span className="text-xs text-muted-foreground">{brandConfig.tagline}</span>
                  </div>
                </div>

                {/* Mobile Navigation Items */}
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-3 text-lg font-medium p-3 rounded-lg transition-colors hover:bg-accent ${
                      isActive(item.href) ? "bg-accent text-primary" : ""
                    } ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                    {item.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                ))}

                <DropdownMenuSeparator />

                {/* Mobile Auth Buttons */}
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start bg-transparent" size="lg">
                    <LogIn className="h-4 w-4 mr-2" />
                    {t("nav.signIn")}
                  </Button>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    size="lg"
                  >
                    <UserPlus className="h-4 w-4 mr-2" />
                    {t("nav.getStarted")}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
