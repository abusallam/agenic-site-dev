"use client"

import { useState, useEffect } from "react"

export type Locale = "en" | "ar"

// Enhanced translations with professional messaging
const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      aiAgents: "AI Agents",
      chatbots: "AI Chatbots",
      consulting: "Consulting",
      getStarted: "Get Started",
      signIn: "Sign In",
      signUp: "Sign Up",
      dashboard: "Dashboard",
      documentation: "Documentation",
      contact: "Contact",
    },

    // Hero Section
    hero: {
      badge: "Next-Generation AI Solutions",
      title: "Transform Your Business with",
      titleHighlight: "Intelligent AI Solutions",
      subtitle: "Professional AI consulting and cutting-edge SaaS platforms",
      description:
        "Empower your business with advanced AI agents, intelligent chatbots, and expert consulting services. From automation to customer engagement, we deliver solutions that drive real results.",
      primaryCta: "Start Free Trial",
      secondaryCta: "Schedule Demo",
      trustedBy: "Trusted by 500+ businesses worldwide",

      // Feature highlights
      features: {
        aiAgents: {
          title: "Intelligent AI Agents",
          description:
            "Autonomous agents that handle complex tasks, make decisions, and integrate seamlessly with your existing systems.",
        },
        chatbots: {
          title: "Advanced Chatbots",
          description:
            "24/7 customer support with natural language processing, multi-language support, and context awareness.",
        },
        consulting: {
          title: "Expert Consulting",
          description: "Strategic AI implementation guidance from industry experts with proven track records.",
        },
        security: {
          title: "Enterprise Security",
          description:
            "Bank-level security with end-to-end encryption, OAuth authentication, and compliance-ready infrastructure.",
        },
        performance: {
          title: "Lightning Fast",
          description: "Deploy AI solutions in minutes with our cloud-native platform and optimized performance.",
        },
        support: {
          title: "24/7 Support",
          description: "Round-the-clock technical support and dedicated account management for enterprise clients.",
        },
      },
    },

    // Services Section
    services: {
      title: "Our AI Solutions",
      subtitle: "Comprehensive AI services tailored to your business needs",

      aiAgents: {
        title: "AI Agents Platform",
        description: "Deploy intelligent agents that automate workflows, make decisions, and scale with your business.",
        features: [
          "Workflow Automation",
          "Decision Making AI",
          "System Integration",
          "Custom Training",
          "Real-time Analytics",
        ],
        pricing: "Starting at $99/month",
        cta: "Try AI Agents",
      },

      chatbots: {
        title: "AI Chatbot Solutions",
        description: "Advanced conversational AI that provides exceptional customer service around the clock.",
        features: [
          "Natural Language Processing",
          "Multi-language Support",
          "Context Awareness",
          "CRM Integration",
          "Analytics Dashboard",
        ],
        pricing: "Starting at $49/month",
        cta: "Try Chatbots",
      },

      consulting: {
        title: "AI Strategy Consulting",
        description: "Expert guidance from Asim Abu Salam to transform your business with strategic AI implementation.",
        features: [
          "AI Strategy Development",
          "Implementation Planning",
          "Team Training",
          "ROI Optimization",
          "Ongoing Support",
        ],
        pricing: "Custom pricing",
        cta: "Book Consultation",
      },
    },

    // Consulting Section (Asim Abu Salam)
    consulting: {
      badge: "Expert AI Consultant",
      name: "Asim Abu Salam",
      title: "AI Strategy & Implementation Expert",
      subtitle: "Transforming businesses through strategic AI adoption",
      description:
        "With over a decade of experience in artificial intelligence and machine learning, Asim Abu Salam helps organizations harness the power of AI to drive innovation, efficiency, and growth. From Fortune 500 companies to innovative startups, Asim provides strategic guidance that transforms complex AI concepts into practical, profitable solutions.",

      expertise: [
        "AI Strategy Development",
        "Machine Learning Implementation",
        "Digital Transformation",
        "Process Automation",
        "Team Training & Development",
      ],

      stats: {
        experience: "10+ Years Experience",
        projects: "200+ Successful Projects",
        roi: "300% Average ROI Increase",
        clients: "50+ Enterprise Clients",
      },

      cta: {
        primary: "Schedule Consultation",
        secondary: "View Case Studies",
        contact: "Get In Touch",
      },

      services: {
        strategy: {
          title: "AI Strategy Development",
          description: "Comprehensive AI roadmap aligned with your business objectives and market opportunities.",
          duration: "2-4 weeks",
          deliverables: [
            "Current state assessment",
            "AI opportunity identification",
            "Implementation roadmap",
            "ROI projections",
            "Risk assessment",
          ],
        },
        implementation: {
          title: "Implementation Consulting",
          description: "Hands-on guidance for successful AI project execution and deployment.",
          duration: "3-6 months",
          deliverables: [
            "Technical architecture design",
            "Team training and development",
            "Vendor selection guidance",
            "Project management support",
            "Quality assurance",
          ],
        },
        transformation: {
          title: "Digital Transformation",
          description: "Complete organizational transformation with AI at the core of your business strategy.",
          duration: "6-12 months",
          deliverables: [
            "Organization-wide AI strategy",
            "Change management support",
            "Multi-phase implementation",
            "Performance monitoring",
            "Continuous optimization",
          ],
        },
      },
    },

    // Common UI elements
    ui: {
      loading: "Loading...",
      error: "Something went wrong",
      retry: "Try Again",
      close: "Close",
      save: "Save",
      cancel: "Cancel",
      submit: "Submit",
      next: "Next",
      previous: "Previous",
      learnMore: "Learn More",
      readMore: "Read More",
      showLess: "Show Less",
      viewAll: "View All",
      getStarted: "Get Started",
      contactUs: "Contact Us",
      bookDemo: "Book Demo",
      startTrial: "Start Free Trial",
    },

    // Footer
    footer: {
      description:
        "Leading provider of AI solutions and expert consulting services. Transform your business with cutting-edge artificial intelligence technology.",
      quickLinks: "Quick Links",
      services: "Services",
      company: "Company",
      support: "Support",
      legal: "Legal",
      newsletter: {
        title: "Stay Updated",
        description: "Get the latest insights on AI trends and solutions.",
        placeholder: "Enter your email",
        subscribe: "Subscribe",
        success: "Thank you for subscribing!",
      },
      copyright: "© 2024 main.consulting.sa. All rights reserved.",
      links: {
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        cookies: "Cookie Policy",
      },
    },

    // Contact and Forms
    contact: {
      title: "Get In Touch",
      subtitle: "Ready to transform your business with AI? Let's discuss your needs.",
      form: {
        name: "Full Name",
        email: "Email Address",
        company: "Company",
        phone: "Phone Number",
        service: "Service Interest",
        message: "Message",
        submit: "Send Message",
        success: "Thank you! We'll get back to you within 24 hours.",
        error: "Something went wrong. Please try again.",
      },
      info: {
        email: "info@main.consulting.sa",
        phone: "+966 XX XXX XXXX",
        location: "Saudi Arabia",
        hours: "Available Mon-Fri, 9AM-6PM AST",
      },
    },
  },

  ar: {
    // Navigation - Arabic
    nav: {
      home: "الرئيسية",
      aiAgents: "وكلاء الذكاء الاصطناعي",
      chatbots: "روبوتات المحادثة الذكية",
      consulting: "الاستشارات",
      getStarted: "ابدأ الآن",
      signIn: "تسجيل الدخول",
      signUp: "إنشاء حساب",
      dashboard: "لوحة التحكم",
      documentation: "التوثيق",
      contact: "اتصل بنا",
    },

    // Hero Section - Arabic
    hero: {
      badge: "حلول الذكاء الاصطناعي من الجيل القادم",
      title: "حوّل أعمالك مع",
      titleHighlight: "حلول الذكاء الاصطناعي المتقدمة",
      subtitle: "استشارات احترافية في الذكاء الاصطناعي ومنصات SaaS متطورة",
      description:
        "قم بتمكين أعمالك من خلال وكلاء الذكاء الاصطناعي المتقدمين وروبوتات المحادثة الذكية وخدمات الاستشارات المتخصصة. من الأتمتة إلى تفاعل العملاء، نقدم حلولاً تحقق نتائج حقيقية.",
      primaryCta: "ابدأ التجربة المجانية",
      secondaryCta: "احجز عرضاً توضيحياً",
      trustedBy: "موثوق من قبل أكثر من 500 شركة حول العالم",

      features: {
        aiAgents: {
          title: "وكلاء الذكاء الاصطناعي الذكيون",
          description: "وكلاء مستقلون يتعاملون مع المهام المعقدة ويتخذون القرارات ويتكاملون بسلاسة مع أنظمتك الحالية.",
        },
        chatbots: {
          title: "روبوتات محادثة متقدمة",
          description: "دعم عملاء على مدار الساعة مع معالجة اللغة الطبيعية ودعم متعدد اللغات ووعي السياق.",
        },
        consulting: {
          title: "استشارات متخصصة",
          description: "إرشادات استراتيجية لتنفيذ الذكاء الاصطناعي من خبراء الصناعة ذوي السجل المثبت.",
        },
        security: {
          title: "أمان المؤسسات",
          description: "أمان على مستوى البنوك مع التشفير الشامل ومصادقة OAuth وبنية تحتية متوافقة مع المعايير.",
        },
        performance: {
          title: "سرعة البرق",
          description: "انشر حلول الذكاء الاصطناعي في دقائق مع منصتنا السحابية الأصلية والأداء المحسن.",
        },
        support: {
          title: "دعم على مدار الساعة",
          description: "دعم تقني على مدار الساعة وإدارة حسابات مخصصة لعملاء المؤسسات.",
        },
      },
    },

    // Services Section - Arabic
    services: {
      title: "حلولنا في الذكاء الاصطناعي",
      subtitle: "خدمات شاملة في الذكاء الاصطناعي مصممة خصيصاً لاحتياجات أعمالك",

      aiAgents: {
        title: "منصة وكلاء الذكاء الاصطناعي",
        description: "انشر وكلاء أذكياء يؤتمتون سير العمل ويتخذون القرارات وينمون مع أعمالك.",
        features: ["أتمتة سير العمل", "ذكاء اتخاذ القرارات", "تكامل الأنظمة", "تدريب مخصص", "تحليلات في الوقت الفعلي"],
        pricing: "يبدأ من 99 دولار شهرياً",
        cta: "جرب وكلاء الذكاء الاصطناعي",
      },

      chatbots: {
        title: "حلول روبوتات المحادثة الذكية",
        description: "ذكاء اصطناعي محادثي متقدم يوفر خدمة عملاء استثنائية على مدار الساعة.",
        features: ["معالجة اللغة الطبيعية", "دعم متعدد اللغات", "وعي السياق", "تكامل CRM", "لوحة تحكم التحليلات"],
        pricing: "يبدأ من 49 دولار شهرياً",
        cta: "جرب روبوتات المحادثة",
      },

      consulting: {
        title: "استشارات استراتيجية في الذكاء الاصطناعي",
        description: "إرشادات متخصصة من عاصم أبو سلام لتحويل أعمالك من خلال التنفيذ الاستراتيجي للذكاء الاصطناعي.",
        features: [
          "تطوير استراتيجية الذكاء الاصطناعي",
          "تخطيط التنفيذ",
          "تدريب الفريق",
          "تحسين العائد على الاستثمار",
          "الدعم المستمر",
        ],
        pricing: "تسعير مخصص",
        cta: "احجز استشارة",
      },
    },

    // Consulting Section - Arabic
    consulting: {
      badge: "خبير استشاري في الذكاء الاصطناعي",
      name: "عاصم أبو سلام",
      title: "خبير استراتيجية وتنفيذ الذكاء الاصطناعي",
      subtitle: "تحويل الأعمال من خلال التبني الاستراتيجي للذكاء الاصطناعي",
      description:
        "مع أكثر من عقد من الخبرة في الذكاء الاصطناعي والتعلم الآلي، يساعد عاصم أبو سلام المؤسسات على تسخير قوة الذكاء الاصطناعي لدفع الابتكار والكفاءة والنمو. من شركات Fortune 500 إلى الشركات الناشئة المبتكرة، يقدم عاصم إرشادات استراتيجية تحول مفاهيم الذكاء الاصطناعي المعقدة إلى حلول عملية ومربحة.",

      expertise: [
        "تطوير استراتيجية الذكاء الاصطناعي",
        "تنفيذ التعلم الآلي",
        "التحول الرقمي",
        "أتمتة العمليات",
        "تدريب وتطوير الفرق",
      ],

      stats: {
        experience: "أكثر من 10 سنوات خبرة",
        projects: "أكثر من 200 مشروع ناجح",
        roi: "300% متوسط زيادة العائد على الاستثمار",
        clients: "أكثر من 50 عميل مؤسسي",
      },

      cta: {
        primary: "احجز استشارة",
        secondary: "اعرض دراسات الحالة",
        contact: "تواصل معنا",
      },
    },

    // Common UI elements - Arabic
    ui: {
      loading: "جاري التحميل...",
      error: "حدث خطأ ما",
      retry: "حاول مرة أخرى",
      close: "إغلاق",
      save: "حفظ",
      cancel: "إلغاء",
      submit: "إرسال",
      next: "التالي",
      previous: "السابق",
      learnMore: "اعرف المزيد",
      readMore: "اقرأ المزيد",
      showLess: "عرض أقل",
      viewAll: "عرض الكل",
      getStarted: "ابدأ الآن",
      contactUs: "اتصل بنا",
      bookDemo: "احجز عرضاً توضيحياً",
      startTrial: "ابدأ التجربة المجانية",
    },

    // Footer - Arabic
    footer: {
      description:
        "مزود رائد لحلول الذكاء الاصطناعي وخدمات الاستشارات المتخصصة. حوّل أعمالك بتقنية الذكاء الاصطناعي المتطورة.",
      quickLinks: "روابط سريعة",
      services: "الخدمات",
      company: "الشركة",
      support: "الدعم",
      legal: "قانوني",
      newsletter: {
        title: "ابق على اطلاع",
        description: "احصل على أحدث الرؤى حول اتجاهات وحلول الذكاء الاصطناعي.",
        placeholder: "أدخل بريدك الإلكتروني",
        subscribe: "اشترك",
        success: "شكراً لك على الاشتراك!",
      },
      copyright: "© 2024 main.consulting.sa. جميع الحقوق محفوظة.",
      links: {
        privacy: "سياسة الخصوصية",
        terms: "شروط الخدمة",
        cookies: "سياسة ملفات تعريف الارتباط",
      },
    },

    // Contact and Forms - Arabic
    contact: {
      title: "تواصل معنا",
      subtitle: "مستعد لتحويل أعمالك بالذكاء الاصطناعي؟ دعنا نناقش احتياجاتك.",
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        company: "الشركة",
        phone: "رقم الهاتف",
        service: "الخدمة المطلوبة",
        message: "الرسالة",
        submit: "إرسال الرسالة",
        success: "شكراً لك! سنتواصل معك خلال 24 ساعة.",
        error: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
      },
      info: {
        email: "info@main.consulting.sa",
        phone: "+966 XX XXX XXXX",
        location: "المملكة العربية السعودية",
        hours: "متاح من الاثنين إلى الجمعة، 9 صباحاً - 6 مساءً بتوقيت السعودية",
      },
    },
  },
} as const

export function useEnhancedTranslation() {
  const [locale, setLocale] = useState<Locale>("en")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    try {
      const savedLocale = localStorage.getItem("locale") as Locale
      const browserLocale = navigator.language.startsWith("ar") ? "ar" : "en"
      const initialLocale = savedLocale || browserLocale

      if (initialLocale === "ar" || initialLocale === "en") {
        setLocale(initialLocale)
        document.documentElement.lang = initialLocale
        document.documentElement.dir = initialLocale === "ar" ? "rtl" : "ltr"
        document.documentElement.className = initialLocale === "ar" ? "rtl" : "ltr"
      }
    } catch (error) {
      console.warn("Error setting initial locale:", error)
      setLocale("en")
    }
  }, [])

  const t = (key: string): string => {
    try {
      const keys = key.split(".")
      let value: any = translations[locale]

      for (const k of keys) {
        value = value?.[k]
      }

      return value || key
    } catch (error) {
      console.warn("Translation error for key:", key, error)
      return key
    }
  }

  const changeLanguage = (newLocale: Locale) => {
    try {
      setLocale(newLocale)
      if (isClient) {
        localStorage.setItem("locale", newLocale)
        document.documentElement.lang = newLocale
        document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr"
        document.documentElement.className = newLocale === "ar" ? "rtl" : "ltr"
      }
    } catch (error) {
      console.warn("Error changing language:", error)
    }
  }

  return { locale, t, changeLanguage, isRTL: locale === "ar" }
}

// For server-side usage
export function getStaticTranslations(locale: Locale) {
  return translations[locale] || translations.en
}
