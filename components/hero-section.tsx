"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Zap, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 sm:py-32">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

      <div className="relative container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="h-4 w-4" />
              <span>Next-Generation AI Solutions</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Transform Your Business with
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              AI Agents
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Powerful AI chatbots and intelligent agents that automate workflows, enhance customer experience, and drive
            business growth with cutting-edge technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-3">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border">
              <Bot className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Smart AI Agents</h3>
              <p className="text-gray-600 text-center">
                Intelligent automation that learns and adapts to your business needs
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border">
              <Shield className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
              <p className="text-gray-600 text-center">Bank-level security with SSL encryption and data protection</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border">
              <Zap className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600 text-center">Deploy AI solutions in minutes, not months</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
