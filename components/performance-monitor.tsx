"use client"

import { useEffect } from "react"

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      parameters: Record<string, any>
    ) => void
  }
}

interface PerformanceMetrics {
  name: string
  value: number
  rating?: string
}

export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in browser environment and production
    if (typeof window === "undefined" || process.env.NODE_ENV !== "production") {
      return
    }

    const reportMetrics = (metrics: PerformanceMetrics[]) => {
      // Send to analytics service (Google Analytics, etc.)
      if (typeof window.gtag !== "undefined") {
        metrics.forEach(metric => {
          window.gtag!("event", "web_vitals", {
            event_category: "Performance",
            event_label: metric.name,
            value: Math.round(metric.value),
          })
        })
      }

      // Log to console in development
      if (process.env.NODE_ENV === "development") {
        console.table(metrics)
      }
    }

    // Basic performance monitoring using Performance API
    const measurePerformance = () => {
      if (typeof window.performance !== "undefined") {
        const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming
        
        if (navigation) {
          const metrics: PerformanceMetrics[] = [
            {
              name: "DOM_CONTENT_LOADED",
              value: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            },
            {
              name: "LOAD_COMPLETE",
              value: navigation.loadEventEnd - navigation.loadEventStart,
            },
            {
              name: "FIRST_BYTE",
              value: navigation.responseStart - navigation.requestStart,
            },
          ]

          reportMetrics(metrics.filter(m => m.value > 0))
        }
      }
    }

    // Measure performance after page load
    if (document.readyState === "complete") {
      measurePerformance()
    } else {
      window.addEventListener("load", measurePerformance)
    }

    // Cleanup
    return () => {
      window.removeEventListener("load", measurePerformance)
    }
  }, [])

  return null // This component doesn't render anything
}

export default PerformanceMonitor