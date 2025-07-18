"use client"

import { EnhancedNavigation } from "@/components/navigation-enhanced"
import { EnhancedFooter } from "@/components/footer-enhanced"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPolicyClientPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <EnhancedNavigation />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold font-heading mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground">
                Last updated: January 2025
              </p>
            </div>

            {/* Content */}
            <Card className="glass-effect border-0 bg-background/50">
              <CardContent className="p-8 space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      At Main Consulting, we collect information you provide directly to us, such as when you:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Contact us through our website forms</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Request consulting services</li>
                      <li>Participate in surveys or feedback</li>
                    </ul>
                    <p>
                      This may include your name, email address, phone number, company information, and any other information you choose to provide.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide, maintain, and improve our services</li>
                      <li>Respond to your inquiries and provide customer support</li>
                      <li>Send you technical notices, updates, and administrative messages</li>
                      <li>Communicate with you about products, services, and events</li>
                      <li>Process transactions and send related information</li>
                      <li>Monitor and analyze trends and usage</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>With service providers who assist us in operating our website and conducting business</li>
                      <li>When required by law or to protect our rights</li>
                      <li>In connection with a merger, acquisition, or sale of assets</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">5. Cookies and Tracking</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our website uses cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>You have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access and update your personal information</li>
                      <li>Request deletion of your personal information</li>
                      <li>Opt-out of marketing communications</li>
                      <li>Request a copy of your data</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">7. International Transfers</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      If you have any questions about this Privacy Policy, please contact us:
                    </p>
                    <ul className="list-none space-y-2">
                      <li><strong>Email:</strong> privacy@main.consulting.sa</li>
                      <li><strong>Website:</strong> https://main.consulting.sa</li>
                      <li><strong>Address:</strong> Saudi Arabia</li>
                    </ul>
                  </div>
                </section>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <EnhancedFooter />
    </div>
  )
}