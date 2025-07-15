"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, useCallback, Fragment } from "react"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"

// Define the shape of your translation data
interface Translations {
  [key: string]: string | Translations
}

// Example translation data (replace with your actual translations)
const translations: { [key: string]: Translations } = {
  en: {
    nav: {
      home: "Home",
      aiAgents: "AI Agents",
      chatbots: "Chatbots",
      consulting: "Consulting",
      documentation: "Documentation",
      contact: "Contact",
      getStarted: "Get Started",
    },
    hero: {
      title: "Empowering Your Business with AI Solutions",
      subtitle: "Innovative AI consulting and development for a smarter future.",
      cta1: "Explore Services",
      cta2: "Get a Quote",
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive AI solutions tailored to your needs.",
      aiAgents: {
        title: "AI Agents Development",
        description: "Building intelligent autonomous agents for various tasks.",
      },
      chatbots: {
        title: "Custom Chatbot Solutions",
        description: "Developing conversational AI for enhanced customer experience.",
      },
      consulting: {
        title: "AI Strategy Consulting",
        description: "Guiding your AI journey from concept to implementation.",
      },
      dataScience: {
        title: "Data Science & Analytics",
        description: "Unlocking insights from your data for informed decisions.",
      },
    },
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Hear from businesses transformed by our AI expertise.",
      quote1: "Their AI solutions revolutionized our customer support. Highly recommend!",
      author1: "Jane Doe, CEO of TechCorp",
      quote2: "The consulting team provided invaluable insights that shaped our AI roadmap.",
      author2: "John Smith, CTO of InnovateX",
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Ready to transform your business with AI? Contact us today.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      address: "123 AI Street, Suite 400, Tech City, TX 78701",
      phone: "+1 (555) 123-4567",
      emailAddress: "info@main.consulting.sa",
    },
    footer: {
      copyright: "© 2024 main.consulting.sa. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    aiAgentsPage: {
      title: "AI Agents Development",
      description: "Building intelligent autonomous agents for various tasks.",
      hero: {
        title: "Intelligent AI Agents for Your Business",
        subtitle: "Automate complex tasks and enhance decision-making with custom AI agents.",
        cta: "Request a Demo",
      },
      features: {
        title: "Key Features",
        feature1: {
          title: "Task Automation",
          description: "Automate repetitive and complex tasks, freeing up human resources.",
        },
        feature2: {
          title: "Data Analysis",
          description: "Agents can analyze vast amounts of data to provide actionable insights.",
        },
        feature3: {
          title: "Predictive Modeling",
          description: "Leverage AI agents for accurate predictions and forecasting.",
        },
      },
      process: {
        title: "Our Development Process",
        step1: {
          title: "Discovery & Strategy",
          description: "Understanding your needs and defining the AI agent's objectives.",
        },
        step2: {
          title: "Design & Development",
          description: "Building and training the AI agent with cutting-edge technologies.",
        },
        step3: {
          title: "Deployment & Optimization",
          description: "Integrating the agent into your systems and continuous improvement.",
        },
      },
    },
    chatbotsPage: {
      title: "Custom Chatbot Solutions",
      description: "Developing conversational AI for enhanced customer experience.",
      hero: {
        title: "Engage Your Customers with Smart Chatbots",
        subtitle: "Deliver instant support and personalized interactions 24/7.",
        cta: "Get a Free Consultation",
      },
      benefits: {
        title: "Benefits of Custom Chatbots",
        benefit1: {
          title: "24/7 Customer Support",
          description: "Provide round-the-clock assistance to your customers.",
        },
        benefit2: {
          title: "Improved Efficiency",
          description: "Automate routine inquiries and reduce workload for human agents.",
        },
        benefit3: {
          title: "Personalized Interactions",
          description: "Tailor responses based on user history and preferences.",
        },
      },
      types: {
        title: "Types of Chatbots We Build",
        type1: {
          title: "Customer Service Bots",
          description: "Handle FAQs, order tracking, and basic support.",
        },
        type2: {
          title: "Sales & Marketing Bots",
          description: "Qualify leads, recommend products, and run campaigns.",
        },
        type3: {
          title: "Internal Support Bots",
          description: "Assist employees with HR, IT, and internal queries.",
        },
      },
    },
    documentationPage: {
      title: "Documentation",
      description: "Comprehensive guides and resources for our AI solutions.",
      hero: {
        title: "Comprehensive Documentation",
        subtitle: "Find guides, tutorials, and API references for our AI solutions.",
        cta: "Browse All Docs",
      },
      sections: {
        gettingStarted: {
          title: "Getting Started",
          description: "Learn how to set up and use our AI products.",
          link1: "Installation Guide",
          link2: "Quick Start Tutorial",
        },
        apiReference: {
          title: "API Reference",
          description: "Detailed documentation for our AI APIs.",
          link1: "Authentication",
          link2: "Agent API",
          link3: "Chatbot API",
        },
        troubleshooting: {
          title: "Troubleshooting",
          description: "Solutions to common issues and FAQs.",
          link1: "Common Errors",
          link2: "Debugging Tips",
        },
      },
    },
    consultingPage: {
      title: "AI Strategy Consulting",
      description: "Guiding your AI journey from concept to implementation.",
      hero: {
        title: "Strategic AI Consulting for Business Growth",
        subtitle: "Unlock the full potential of AI with expert guidance and tailored strategies.",
        cta: "Schedule a Consultation",
      },
      about: {
        title: "About Our Consulting Services",
        paragraph1:
          "At main.consulting.sa, we provide comprehensive AI strategy consulting to help businesses navigate the complexities of artificial intelligence. Our expert team works closely with you to identify opportunities, develop robust AI roadmaps, and ensure successful implementation.",
        paragraph2:
          "We believe that a well-defined AI strategy is crucial for competitive advantage. From initial assessment to post-implementation review, we are committed to delivering actionable insights and measurable results that drive innovation and efficiency.",
      },
      services: {
        title: "Our Consulting Approach",
        strategy: {
          title: "AI Strategy & Roadmap Development",
          description: "Crafting a clear vision and step-by-step plan for AI adoption.",
        },
        feasibility: {
          title: "Feasibility Studies & ROI Analysis",
          description: "Assessing the viability and potential returns of AI initiatives.",
        },
        implementation: {
          title: "Implementation Guidance & Oversight",
          description: "Ensuring smooth integration and deployment of AI solutions.",
        },
        ethics: {
          title: "AI Ethics & Governance",
          description: "Establishing responsible AI practices and compliance frameworks.",
        },
      },
      caseStudies: {
        title: "Success Stories",
        subtitle: "See how our AI consulting has transformed businesses.",
        case1: {
          title: "Optimizing Operations for a Logistics Giant",
          description: "Implemented predictive analytics to reduce delivery times by 15%.",
        },
        case2: {
          title: "Enhancing Customer Engagement for E-commerce",
          description: "Developed a personalized recommendation engine, boosting sales by 20%.",
        },
        case3: {
          title: "Streamlining Healthcare Diagnostics",
          description: "Integrated AI-powered image analysis for faster and more accurate diagnoses.",
        },
      },
      contact: {
        title: "Ready to Transform Your Business?",
        subtitle: "Let's discuss how AI can drive your strategic goals.",
        cta: "Contact Our Experts",
      },
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      aiAgents: "وكلاء الذكاء الاصطناعي",
      chatbots: "روبوتات الدردشة",
      consulting: "الاستشارات",
      documentation: "الوثائق",
      contact: "اتصل بنا",
      getStarted: "ابدأ الآن",
    },
    hero: {
      title: "تمكين عملك بحلول الذكاء الاصطناعي",
      subtitle: "استشارات وتطوير مبتكر للذكاء الاصطناعي لمستقبل أكثر ذكاءً.",
      cta1: "استكشف الخدمات",
      cta2: "احصل على عرض سعر",
    },
    services: {
      title: "خدماتنا",
      subtitle: "حلول ذكاء اصطناعي شاملة مصممة خصيصًا لاحتياجاتك.",
      aiAgents: {
        title: "تطوير وكلاء الذكاء الاصطناعي",
        description: "بناء وكلاء مستقلين أذكياء لمهام مختلفة.",
      },
      chatbots: {
        title: "حلول روبوتات الدردشة المخصصة",
        description: "تطوير ذكاء اصطناعي للمحادثة لتحسين تجربة العملاء.",
      },
      consulting: {
        title: "استشارات استراتيجية الذكاء الاصطناعي",
        description: "توجيه رحلتك في الذكاء الاصطناعي من المفهوم إلى التنفيذ.",
      },
      dataScience: {
        title: "علم البيانات والتحليلات",
        description: "استخلاص الرؤى من بياناتك لاتخاذ قرارات مستنيرة.",
      },
    },
    testimonials: {
      title: "ماذا يقول عملاؤنا",
      subtitle: "استمع من الشركات التي تحولت بفضل خبرتنا في الذكاء الاصطناعي.",
      quote1: "لقد أحدثت حلولهم في الذكاء الاصطناعي ثورة في دعم عملائنا. نوصي بشدة!",
      author1: "جين دو، الرئيس التنفيذي لشركة TechCorp",
      quote2: "قدم فريق الاستشارات رؤى لا تقدر بثمن شكلت خارطة طريقنا للذكاء الاصطناعي.",
      author2: "جون سميث، المدير التقني لشركة InnovateX",
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "هل أنت مستعد لتحويل عملك بالذكاء الاصطناعي؟ اتصل بنا اليوم.",
      name: "الاسم",
      email: "البريد الإلكتروني",
      message: "الرسالة",
      send: "إرسال الرسالة",
      address: "123 شارع الذكاء الاصطناعي، جناح 400، مدينة التكنولوجيا، تكساس 78701",
      phone: "+1 (555) 123-4567",
      emailAddress: "info@main.consulting.sa",
    },
    footer: {
      copyright: "© 2024 main.consulting.sa. جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
    },
    aiAgentsPage: {
      title: "تطوير وكلاء الذكاء الاصطناعي",
      description: "بناء وكلاء مستقلين أذكياء لمهام مختلفة.",
      hero: {
        title: "وكلاء ذكاء اصطناعي أذكياء لعملك",
        subtitle: "أتمتة المهام المعقدة وتعزيز اتخاذ القرار باستخدام وكلاء الذكاء الاصطناعي المخصصين.",
        cta: "طلب عرض توضيحي",
      },
      features: {
        title: "الميزات الرئيسية",
        feature1: {
          title: "أتمتة المهام",
          description: "أتمتة المهام المتكررة والمعقدة، مما يحرر الموارد البشرية.",
        },
        feature2: {
          title: "تحليل البيانات",
          description: "يمكن للوكلاء تحليل كميات هائلة من البيانات لتقديم رؤى قابلة للتنفيذ.",
        },
        feature3: {
          title: "النمذجة التنبؤية",
          description: "الاستفادة من وكلاء الذكاء الاصطناعي للتنبؤات الدقيقة.",
        },
      },
      process: {
        title: "عملية التطوير لدينا",
        step1: {
          title: "الاكتشاف والاستراتيجية",
          description: "فهم احتياجاتك وتحديد أهداف وكيل الذكاء الاصطناعي.",
        },
        step2: {
          title: "التصميم والتطوير",
          description: "بناء وتدريب وكيل الذكاء الاصطناعي بأحدث التقنيات.",
        },
        step3: {
          title: "النشر والتحسين",
          description: "دمج الوكيل في أنظمتك والتحسين المستمر.",
        },
      },
    },
    chatbotsPage: {
      title: "حلول روبوتات الدردشة المخصصة",
      description: "تطوير ذكاء اصطناعي للمحادثة لتحسين تجربة العملاء.",
      hero: {
        title: "تفاعل مع عملائك باستخدام روبوتات الدردشة الذكية",
        subtitle: "تقديم دعم فوري وتفاعلات مخصصة على مدار الساعة طوال أيام الأسبوع.",
        cta: "احصل على استشارة مجانية",
      },
      benefits: {
        title: "فوائد روبوتات الدردشة المخصصة",
        benefit1: {
          title: "دعم العملاء على مدار الساعة طوال أيام الأسبوع",
          description: "توفير مساعدة على مدار الساعة لعملائك.",
        },
        benefit2: {
          title: "تحسين الكفاءة",
          description: "أتمتة الاستفسارات الروتينية وتقليل عبء العمل على الوكلاء البشريين.",
        },
        benefit3: {
          title: "تفاعلات مخصصة",
          description: "تخصيص الردود بناءً على سجل المستخدم وتفضيلاته.",
        },
      },
      types: {
        title: "أنواع روبوتات الدردشة التي نبنيها",
        type1: {
          title: "روبوتات خدمة العملاء",
          description: "التعامل مع الأسئلة الشائعة وتتبع الطلبات والدعم الأساسي.",
        },
        type2: {
          title: "روبوتات المبيعات والتسويق",
          description: "تأهيل العملاء المحتملين، والتوصية بالمنتجات، وتشغيل الحملات.",
        },
        type3: {
          title: "روبوتات الدعم الداخلي",
          description: "مساعدة الموظفين في شؤون الموارد البشرية وتكنولوجيا المعلومات والاستفسارات الداخلية.",
        },
      },
    },
    documentationPage: {
      title: "الوثائق",
      description: "أدلة وموارد شاملة لحلول الذكاء الاصطناعي لدينا.",
      hero: {
        title: "وثائق شاملة",
        subtitle: "ابحث عن الأدلة والبرامج التعليمية ومراجع واجهة برمجة التطبيقات لحلول الذكاء الاصطناعي لدينا.",
        cta: "تصفح جميع الوثائق",
      },
      sections: {
        gettingStarted: {
          title: "البدء",
          description: "تعرف على كيفية إعداد واستخدام منتجات الذكاء الاصطناعي لدينا.",
          link1: "دليل التثبيت",
          link2: "برنامج تعليمي للبدء السريع",
        },
        apiReference: {
          title: "مرجع واجهة برمجة التطبيقات",
          description: "وثائق مفصلة لواجهات برمجة تطبيقات الذكاء الاصطناعي لدينا.",
          link1: "المصادقة",
          link2: "واجهة برمجة تطبيقات الوكيل",
          link3: "واجهة برمجة تطبيقات روبوت الدردشة",
        },
        troubleshooting: {
          title: "استكشاف الأخطاء وإصلاحها",
          description: "حلول للمشكلات الشائعة والأسئلة المتكررة.",
          link1: "الأخطاء الشائعة",
          link2: "نصائح تصحيح الأخطاء",
        },
      },
    },
    consultingPage: {
      title: "استشارات استراتيجية الذكاء الاصطناعي",
      description: "توجيه رحلتك في الذكاء الاصطناعي من المفهوم إلى التنفيذ.",
      hero: {
        title: "استشارات استراتيجية الذكاء الاصطناعي لنمو الأعمال",
        subtitle: "أطلق العنان للإمكانات الكاملة للذكاء الاصطناعي من خلال إرشادات الخبراء والاستراتيجيات المخصصة.",
        cta: "جدولة استشارة",
      },
      about: {
        title: "حول خدماتنا الاستشارية",
        paragraph1:
          "في main.consulting.sa، نقدم استشارات شاملة لاستراتيجية الذكاء الاصطناعي لمساعدة الشركات على التنقل في تعقيدات الذكاء الاصطناعي. يعمل فريق الخبراء لدينا عن كثب معك لتحديد الفرص، وتطوير خرائط طريق قوية للذكاء الاصطناعي، وضمان التنفيذ الناجح.",
        paragraph2:
          "نعتقد أن استراتيجية الذكاء الاصطناعي المحددة جيدًا أمر بالغ الأهمية للميزة التنافسية. من التقييم الأولي إلى مراجعة ما بعد التنفيذ، نحن ملتزمون بتقديم رؤى قابلة للتنفيذ ونتائج قابلة للقياس تدفع الابتكار والكفاءة.",
      },
      services: {
        title: "نهجنا الاستشاري",
        strategy: {
          title: "تطوير استراتيجية الذكاء الاصطناعي وخارطة الطريق",
          description: "صياغة رؤية واضحة وخطة خطوة بخطوة لاعتماد الذكاء الاصطناعي.",
        },
        feasibility: {
          title: "دراسات الجدوى وتحليل العائد على الاستثمار",
          description: "تقييم جدوى ومردود مبادرات الذكاء الاصطناعي المحتملة.",
        },
        implementation: {
          title: "إرشادات التنفيذ والإشراف",
          description: "ضمان التكامل والنشر السلس لحلول الذكاء الاصطناعي.",
        },
        ethics: {
          title: "أخلاقيات وحوكمة الذكاء الاصطناعي",
          description: "وضع ممارسات ذكاء اصطناعي مسؤولة وأطر امتثال.",
        },
      },
      caseStudies: {
        title: "قصص النجاح",
        subtitle: "شاهد كيف حولت استشاراتنا في الذكاء الاصطناعي الشركات.",
        case1: {
          title: "تحسين العمليات لعملاق لوجستي",
          description: "تم تنفيذ تحليلات تنبؤية لتقليل أوقات التسليم بنسبة 15%.",
        },
        case2: {
          title: "تعزيز مشاركة العملاء للتجارة الإلكترونية",
          description: "تم تطوير محرك توصيات مخصص، مما أدى إلى زيادة المبيعات بنسبة 20%.",
        },
        case3: {
          title: "تبسيط تشخيصات الرعاية الصحية",
          description: "تم دمج تحليل الصور المدعوم بالذكاء الاصطناعي لتشخيصات أسرع وأكثر دقة.",
        },
      },
      contact: {
        title: "هل أنت مستعد لتحويل عملك؟",
        subtitle: "دعنا نناقش كيف يمكن للذكاء الاصطناعي أن يدفع أهدافك الاستراتيجية.",
        cta: "اتصل بخبرائنا",
      },
    },
  },
}

// Define the context type
interface TranslationContextType {
  t: (key: string) => string
  locale: string
  changeLanguage: (newLocale: string) => void
  isRTL: boolean
}

// Create the context
const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

// TranslationProvider component
export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [locale, setLocale] = useState<string>(() => {
    // Initialize locale from URL or default to 'en'
    const pathParts = pathname.split("/")
    const detectedLocale = pathParts[1]
    return Object.keys(translations).includes(detectedLocale) ? detectedLocale : "en"
  })

  useEffect(() => {
    // Update locale if URL changes (e.g., direct navigation or browser back/forward)
    const pathParts = pathname.split("/")
    const detectedLocale = pathParts[1]
    if (Object.keys(translations).includes(detectedLocale) && detectedLocale !== locale) {
      setLocale(detectedLocale)
    }
  }, [pathname, locale])

  useEffect(() => {
    // Set dir attribute on html tag for RTL languages
    document.documentElement.dir = isRTL ? "rtl" : "ltr"
  }, [locale])

  const getTranslation = useCallback(
    (key: string): string => {
      const keys = key.split(".")
      let current: Translations | string = translations[locale] || translations.en // Fallback to English

      for (const k of keys) {
        if (typeof current === "object" && current !== null && k in current) {
          current = (current as Translations)[k]
        } else {
          return `Missing translation for ${key}` // Fallback if key not found
        }
      }
      return typeof current === "string" ? current : `Missing translation for ${key}`
    },
    [locale],
  )

  const changeLanguage = useCallback(
    (newLocale: string) => {
      if (Object.keys(translations).includes(newLocale)) {
        setLocale(newLocale)
        // Update the URL without full page reload
        const pathParts = pathname.split("/")
        pathParts[1] = newLocale // Replace the locale segment
        const newPath = pathParts.join("/")
        router.replace(newPath)
      }
    },
    [pathname, router],
  )

  const isRTL = locale === "ar" // Arabic is RTL

  const value = {
    t: getTranslation,
    locale,
    changeLanguage,
    isRTL,
  }

  return (
    <TranslationContext.Provider value={value}>
      <Fragment>{children}</Fragment>
    </TranslationContext.Provider>
  )
}

// Custom hook to use the translation context
export function useEnhancedTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error("useEnhancedTranslation must be used within a TranslationProvider")
  }
  return context
}
