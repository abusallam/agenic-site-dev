"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/theme-provider-enhanced"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MenuIcon, GlobeIcon } from "lucide-react"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export function EnhancedNavigation() {
  const { t, locale, changeLanguage, isRTL } = useEnhancedTranslation()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/ai-agents", label: t("nav.aiAgents") },
    { href: "/chatbots", label: t("nav.chatbots") },
    { href: "/consulting", label: t("nav.consulting") },
    { href: "/documentation", label: t("nav.documentation") },
    { href: "/contact", label: t("nav.contact") },
  ]

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2" href="/">
            <span className="text-lg font-bold">main.consulting.sa</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} className="text-sm font-medium hover:underline underline-offset-4" href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link className="flex items-center gap-2" href={`/${locale}/`}>
          <span className="text-lg font-bold">main.consulting.sa</span>
        </Link>
        <nav className={cn("hidden md:flex items-center gap-6", isRTL && "flex-row-reverse")}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className={cn(
                "text-sm font-medium hover:underline underline-offset-4",
                pathname === `/${locale}${link.href}` && "text-primary",
              )}
              href={`/${locale}${link.href}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={cn("flex items-center gap-4", isRTL && "flex-row-reverse")}>
          <DropdownMenu dir={isRTL ? "rtl" : "ltr"}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                {/* Corrected: Wrap children in a span to ensure a single direct child for asChild */}
                <span className="flex items-center justify-center">
                  <GlobeIcon className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">Toggle language</span>
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={isRTL ? "end" : "start"}>
              <DropdownMenuItem onClick={() => changeLanguage("en")}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage("ar")}>العربية</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
          <Button asChild>
            <Link href={`/${locale}/contact`}>{t("nav.getStarted")}</Link>
          </Button>
          <Sheet dir={isRTL ? "rtl" : "ltr"}>
            <SheetTrigger asChild>
              <Button className="md:hidden bg-transparent" size="icon" variant="outline">
                {/* Wrap children in a span to ensure a single direct child for asChild */}
                <span className="flex items-center justify-center">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </span>
              </Button>
            </SheetTrigger>
            <SheetContent side={isRTL ? "right" : "left"}>
              <div className="grid gap-2 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    className={cn(
                      "flex w-full items-center py-2 text-lg font-semibold",
                      pathname === `/${locale}${link.href}` && "text-primary",
                    )}
                    href={`/${locale}${link.href}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
