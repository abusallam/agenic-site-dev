// Brand colors and design system for main.consulting.sa
export const brandColors = {
  // Primary brand colors
  primary: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6", // Main brand blue
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
  },
  // Secondary brand colors
  secondary: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7", // Brand purple
    600: "#9333ea",
    700: "#7c3aed",
    800: "#6b21a8",
    900: "#581c87",
  },
  // Accent colors
  accent: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981", // Success green
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
  },
  // Neutral colors
  neutral: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
  },
  // Status colors
  status: {
    success: "#10b981",
    warning: "#f59e0b",
    error: "#ef4444",
    info: "#3b82f6",
  },
} as const

export const brandConfig = {
  name: "main.consulting.sa",
  tagline: "AI Solutions & Expert Consulting",
  description: "Professional AI consulting services and cutting-edge SaaS solutions for AI agents and chatbots",
  founder: "Asim Abu Salam",
  logo: {
    text: "MC",
    full: "main.consulting.sa",
  },
  contact: {
    email: "info@main.consulting.sa",
    phone: "+966 XX XXX XXXX",
    location: "Saudi Arabia",
  },
  social: {
    twitter: "https://twitter.com/mainconsulting",
    linkedin: "https://linkedin.com/company/main-consulting",
    github: "https://github.com/main-consulting",
  },
} as const
