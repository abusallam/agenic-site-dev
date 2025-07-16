"use client"
import { EnhancedNavigation } from "@/components/navigation-enhanced"
import { EnhancedFooter } from "@/components/footer-enhanced"
import { useEnhancedTranslation } from "@/lib/i18n-enhanced.tsx"
import Image from "next/image"
import { Users, Target, Rocket } from "lucide-react"

export default function AboutPage() {
  const { t } = useEnhancedTranslation()

  return (
    <div className="flex flex-col min-h-screen">
      <EnhancedNavigation />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold font-heading gradient-text">{t("aboutPage.title")}</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("aboutPage.description")}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                  <p className="text-muted-foreground mb-4">
                    POTS was founded with the mission to provide businesses with the tools and expertise they need to
                    succeed in the digital age. We believe that technology should be a force for good, and we are
                    committed to helping our clients use technology to make a positive impact on the world.
                  </p>
                  <p className="text-muted-foreground">
                    Our team is made up of experienced engineers, designers, and consultants who are passionate about
                    technology and its potential to transform businesses. We are dedicated to providing our clients
                    with the highest quality services and support.
                  </p>
                </div>
                <div>
                  <Image
                    src="/placeholder.jpg"
                    alt="Our Team"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                  <Rocket className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To empower businesses with innovative technology solutions that drive growth and success.
                  </p>
                </div>
                <div className="p-6">
                  <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the leading provider of online technology services for businesses of all sizes.
                  </p>
                </div>
                <div className="p-6">
                  <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Our Team</h3>
                  <p className="text-muted-foreground">
                    A dedicated team of experts passionate about helping you succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <EnhancedFooter />
    </div>
  )
}
