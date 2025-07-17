"use client"

import type React from "react"

import { useState, useEffect, createContext, useContext } from "react"

export type Locale = "en" | "ar"

export interface TranslationContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  isRTL: boolean
}

export const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.consulting": "Consulting",
    "nav.documentation": "Documentation",
    "nav.pricing": "Pricing",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.login": "Login",
    "nav.signup": "Sign Up",
    "nav.dashboard": "Dashboard",
    "nav.profile": "Profile",
    "nav.settings": "Settings",
    "nav.logout": "Logout",

    // Hero Section
    "hero.title": "Transform Your Business with AI Solutions",
    "hero.subtitle": "Professional AI consulting services and cutting-edge SaaS solutions for modern businesses",
    "hero.cta.primary": "Get Started",
    "hero.cta.secondary": "Learn More",
    "hero.stats.clients": "Happy Clients",
    "hero.stats.projects": "Projects Completed",
    "hero.stats.experience": "Years Experience",
    "hero.stats.satisfaction": "Client Satisfaction",

    // Services
    "services.title": "Our AI Solutions",
    "services.subtitle": "Comprehensive AI services to accelerate your digital transformation",
    "services.aiAgents.title": "AI Agents",
    "services.aiAgents.description": "Intelligent automation solutions",
    "services.chatbots.title": "Chatbots",
    "services.chatbots.description": "Conversational AI interfaces",
    "services.consulting.title": "AI Consulting",
    "services.consulting.description": "Strategic AI implementation guidance",

    // Testimonials
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "We are proud to have helped so many businesses succeed. Here's what some of our clients have to say about us.",
    "testimonials.quote1": "POTS has been a game-changer for our business. Their AI-powered solutions have helped us automate our workflows and improve our efficiency.",
    "testimonials.quote2": "The team at POTS is top-notch. They are experts in their field and have been a pleasure to work with. I would highly recommend them to anyone looking for IT consulting services.",
    "testimonials.quote3": "We were looking for a way to engage with our customers more effectively, and POTS delivered. Their chatbots have helped us improve our customer satisfaction and increase our sales.",

    // Services Page
    "servicesPage.title": "Our Services",
    "servicesPage.description": "We offer a wide range of AI-powered services to help you transform your business.",
    "aiAgentsPage.features.title": "AI Agent Features",
    "aiAgentsPage.features.feature1.title": "Automation",
    "aiAgentsPage.features.feature1.description": "Automate repetitive tasks and workflows.",
    "aiAgentsPage.features.feature2.title": "Intelligence",
    "aiAgentsPage.features.feature2.description": "Leverage AI to make smarter decisions.",
    "aiAgentsPage.features.feature3.title": "Scalability",
    "aiAgentsPage.features.feature3.description": "Scale your operations with AI-powered agents.",
    "chatbotsPage.benefits.title": "Chatbot Benefits",
    "chatbotsPage.benefits.benefit1.title": "Engagement",
    "chatbotsPage.benefits.benefit1.description": "Engage with your customers in real-time.",
    "chatbotsPage.benefits.benefit2.title": "Efficiency",
    "chatbotsPage.benefits.benefit2.description": "Improve your team's efficiency with AI-powered chatbots.",
    "chatbotsPage.benefits.benefit3.title": "Satisfaction",
    "chatbotsPage.benefits.benefit3.description": "Increase customer satisfaction with instant support.",

    // Pricing Page
    "pricingPage.title": "Pricing",
    "pricingPage.description": "Choose the plan that's right for you.",

    // Consulting Page
    "services.consulting.cta": "Book a Consultation",
    "ui.learnMore": "Learn More",

    "consultingPage.about.title": "About Our Consulting Services",
    "consultingPage.about.paragraph1": "We are a team of experienced AI consultants dedicated to helping businesses leverage the power of artificial intelligence. Our mission is to provide you with the expertise and guidance you need to succeed in the digital age.",
    "consultingPage.about.paragraph2": "With a focus on practical solutions and measurable results, we partner with you to develop and implement AI strategies that drive growth, improve efficiency, and create a competitive advantage.",

    "consultingPage.services.title": "Our Consulting Services",
    "consultingPage.services.subtitle": "We offer a range of consulting services to help you at every stage of your AI journey.",
    "consultingPage.services.strategy.title": "AI Strategy",
    "consultingPage.services.strategy.description": "Develop a comprehensive AI strategy aligned with your business goals.",
    "consultingPage.services.feasibility.title": "Feasibility Studies",
    "consultingPage.services.feasibility.description": "Assess the technical and business feasibility of your AI projects.",
    "consultingPage.services.implementation.title": "Implementation Support",
    "consultingPage.services.implementation.description": "Get expert guidance and support during the implementation of your AI solutions.",
    "consultingPage.services.ethics.title": "AI Ethics & Governance",
    "consultingPage.services.ethics.description": "Ensure your AI solutions are developed and used responsibly.",

    "consultingPage.caseStudies.title": "Case Studies",
    "consultingPage.caseStudies.subtitle": "See how we've helped other businesses succeed with our AI consulting services.",
    "consultingPage.caseStudies.case1.title": "AI-Powered Automation for Retail",
    "consultingPage.caseStudies.case1.description": "Increased efficiency by 40% through the implementation of an AI-powered inventory management system.",
    "consultingPage.caseStudies.case2.title": "Predictive Analytics for Finance",
    "consultingPage.caseStudies.case2.description": "Improved risk assessment accuracy by 25% with a custom predictive analytics model.",
    "consultingPage.caseStudies.case3.title": "NLP for Customer Support",
    "consultingPage.caseStudies.case3.description": "Reduced customer support response times by 60% with a natural language processing-powered chatbot.",

    "consultingPage.contact.title": "Ready to Get Started?",
    "consultingPage.contact.subtitle": "Contact us today to learn more about our AI consulting services and how we can help your business succeed.",
    "consultingPage.contact.cta": "Contact Us",

    // Footer
    "footer.company": "Company",
    "footer.services": "Services",
    "footer.resources": "Resources",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",

    // Auth
    "auth.login.title": "Welcome Back",
    "auth.login.subtitle": "Sign in to your account",
    "auth.login.email": "Email",
    "auth.login.password": "Password",
    "auth.login.remember": "Remember me",
    "auth.login.forgot": "Forgot password?",
    "auth.login.submit": "Sign In",
    "auth.login.noAccount": "Don't have an account?",
    "auth.login.signUp": "Sign up",

    "auth.signup.title": "Create Account",
    "auth.signup.subtitle": "Join our platform today",
    "auth.signup.firstName": "First Name",
    "auth.signup.lastName": "Last Name",
    "auth.signup.email": "Email",
    "auth.signup.company": "Company",
    "auth.signup.password": "Password",
    "auth.signup.confirmPassword": "Confirm Password",
    "auth.signup.agree": "I agree to the Terms of Service",
    "auth.signup.submit": "Create Account",
    "auth.signup.hasAccount": "Already have an account?",
    "auth.signup.signIn": "Sign in",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.consulting": "الاستشارات",
    "nav.documentation": "التوثيق",
    "nav.pricing": "الأسعار",
    "nav.about": "من نحن",
    "nav.contact": "اتصل بنا",
    "nav.login": "تسجيل الدخول",
    "nav.signup": "إنشاء حساب",
    "nav.dashboard": "لوحة التحكم",
    "nav.profile": "الملف الشخصي",
    "nav.settings": "الإعدادات",
    "nav.logout": "تسجيل الخروج",

    // Hero Section
    "hero.title": "حوّل عملك بحلول الذكاء الاصطناعي",
    "hero.subtitle": "خدمات استشارية احترافية للذكاء الاصطناعي وحلول SaaS متطورة للشركات الحديثة",
    "hero.cta.primary": "ابدأ الآن",
    "hero.cta.secondary": "اعرف المزيد",
    "hero.stats.clients": "عميل راضٍ",
    "hero.stats.projects": "مشروع مكتمل",
    "hero.stats.experience": "سنوات خبرة",
    "hero.stats.satisfaction": "رضا العملاء",

    // Services
    "services.title": "حلول الذكاء الاصطناعي",
    "services.subtitle": "خدمات شاملة للذكاء الاصطناعي لتسريع التحول الرقمي",
    "services.aiAgents.title": "وكلاء الذكاء الاصطناعي",
    "services.aiAgents.description": "حلول الأتمتة الذكية",
    "services.chatbots.title": "روبوتات المحادثة",
    "services.chatbots.description": "واجهات الذكاء الاصطناعي التحاورية",
    "services.consulting.title": "استشارات الذكاء الاصطناعي",
    "services.consulting.description": "إرشادات تنفيذ الذكاء الاصطناعي الاستراتيجية",

    // Testimonials
    "testimonials.title": "ماذا يقول عملاؤنا",
    "testimonials.subtitle": "نحن فخورون بمساعدة العديد من الشركات على النجاح. إليك ما يقوله بعض عملائنا عنا.",
    "testimonials.quote1": "لقد كان POTS بمثابة تغيير جذري في أعمالنا. لقد ساعدتنا حلولهم التي تعمل بالذكاء الاصطناعي على أتمتة سير العمل لدينا وتحسين كفاءتنا.",
    "testimonials.quote2": "فريق POTS من الطراز الأول. إنهم خبراء في مجالهم وكان من دواعي سروري العمل معهم. أوصي بهم بشدة لأي شخص يبحث عن خدمات استشارات تكنولوجيا المعلومات.",
    "testimonials.quote3": "كنا نبحث عن طريقة للتفاعل مع عملائنا بشكل أكثر فعالية ، وقد نجحت POTS في ذلك. لقد ساعدتنا روبوتات الدردشة الخاصة بهم على تحسين رضا عملائنا وزيادة مبيعاتنا.",

    // Services Page
    "servicesPage.title": "خدماتنا",
    "servicesPage.description": "نحن نقدم مجموعة واسعة من الخدمات التي تعمل بالذكاء الاصطناعي لمساعدتك على تحويل أعمالك.",
    "aiAgentsPage.features.title": "ميزات وكلاء الذكاء الاصطناعي",
    "aiAgentsPage.features.feature1.title": "الأتمتة",
    "aiAgentsPage.features.feature1.description": "أتمتة المهام وسير العمل المتكررة.",
    "aiAgentsPage.features.feature2.title": "الذكاء",
    "aiAgentsPage.features.feature2.description": "استفد من الذكاء الاصطناعي لاتخاذ قرارات أكثر ذكاءً.",
    "aiAgentsPage.features.feature3.title": "قابلية التوسع",
    "aiAgentsPage.features.feature3.description": "قم بتوسيع نطاق عملياتك باستخدام وكلاء يعملون بالذكاء الاصطناعي.",
    "chatbotsPage.benefits.title": "فوائد روبوتات المحادثة",
    "chatbotsPage.benefits.benefit1.title": "المشاركة",
    "chatbotsPage.benefits.benefit1.description": "تفاعل مع عملائك في الوقت الفعلي.",
    "chatbotsPage.benefits.benefit2.title": "الكفاءة",
    "chatbotsPage.benefits.benefit2.description": "حسّن كفاءة فريقك باستخدام روبوتات المحادثة التي تعمل بالذكاء الاصطناعي.",
    "chatbotsPage.benefits.benefit3.title": "الرضا",
    "chatbotsPage.benefits.benefit3.description": "زيادة رضا العملاء من خلال الدعم الفوري.",

    // Pricing Page
    "pricingPage.title": "الأسعار",
    "pricingPage.description": "اختر الخطة المناسبة لك.",

    // Consulting Page
    "services.consulting.cta": "احجز استشارة",
    "ui.learnMore": "اعرف المزيد",

    "consultingPage.about.title": "حول خدماتنا الاستشارية",
    "consultingPage.about.paragraph1": "نحن فريق من مستشاري الذكاء الاصطناعي ذوي الخبرة والمكرسين لمساعدة الشركات على الاستفادة من قوة الذكاء الاصطناعي. مهمتنا هي تزويدك بالخبرة والإرشادات التي تحتاجها للنجاح في العصر الرقمي.",
    "consultingPage.about.paragraph2": "مع التركيز على الحلول العملية والنتائج القابلة للقياس ، نتشارك معك لتطوير وتنفيذ استراتيجيات الذكاء الاصطناعي التي تدفع النمو وتحسن الكفاءة وتخلق ميزة تنافسية.",

    "consultingPage.services.title": "خدماتنا الاستشارية",
    "consultingPage.services.subtitle": "نحن نقدم مجموعة من الخدمات الاستشارية لمساعدتك في كل مرحلة من مراحل رحلتك في مجال الذكاء الاصطناعي.",
    "consultingPage.services.strategy.title": "استراتيجية الذكاء الاصطناعي",
    "consultingPage.services.strategy.description": "تطوير استراتيجية شاملة للذكاء الاصطناعي تتماشى مع أهداف عملك.",
    "consultingPage.services.feasibility.title": "دراسات الجدوى",
    "consultingPage.services.feasibility.description": "تقييم الجدوى الفنية والتجارية لمشاريع الذكاء الاصطناعي الخاصة بك.",
    "consultingPage.services.implementation.title": "دعم التنفيذ",
    "consultingPage.services.implementation.description": "احصل على إرشادات ودعم الخبراء أثناء تنفيذ حلول الذكاء الاصطناعي الخاصة بك.",
    "consultingPage.services.ethics.title": "أخلاقيات وحوكمة الذكاء الاصطناعي",
    "consultingPage.services.ethics.description": "تأكد من تطوير واستخدام حلول الذكاء الاصطناعي الخاصة بك بشكل مسؤول.",

    "consultingPage.caseStudies.title": "دراسات الحالة",
    "consultingPage.caseStudies.subtitle": "انظر كيف ساعدنا الشركات الأخرى على النجاح من خلال خدماتنا الاستشارية في مجال الذكاء الاصطناعي.",
    "consultingPage.caseStudies.case1.title": "الأتمتة التي تعمل بالذكاء الاصطناعي للبيع بالتجزئة",
    "consultingPage.caseStudies.case1.description": "زيادة الكفاءة بنسبة 40٪ من خلال تطبيق نظام إدارة المخزون الذي يعمل بالذكاء الاصطناعي.",
    "consultingPage.caseStudies.case2.title": "التحليلات التنبؤية للتمويل",
    "consultingPage.caseStudies.case2.description": "تحسين دقة تقييم المخاطر بنسبة 25٪ باستخدام نموذج تحليلات تنبؤية مخصص.",
    "consultingPage.caseStudies.case3.title": "البرمجة اللغوية العصبية لدعم العملاء",
    "consultingPage.caseStudies.case3.description": "تقليل أوقات استجابة دعم العملاء بنسبة 60٪ باستخدام روبوت محادثة يعمل بمعالجة اللغة الطبيعية.",

    "consultingPage.contact.title": "هل أنت مستعد للبدء؟",
    "consultingPage.contact.subtitle": "اتصل بنا اليوم لمعرفة المزيد عن خدماتنا الاستشارية في مجال الذكاء الاصطناعي وكيف يمكننا مساعدة عملك على النجاح.",
    "consultingPage.contact.cta": "اتصل بنا",

    // Footer
    "footer.company": "الشركة",
    "footer.services": "الخدمات",
    "footer.resources": "الموارد",
    "footer.contact": "اتصل بنا",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الخدمة",

    // Auth
    "auth.login.title": "مرحباً بعودتك",
    "auth.login.subtitle": "سجل دخولك إلى حسابك",
    "auth.login.email": "البريد الإلكتروني",
    "auth.login.password": "كلمة المرور",
    "auth.login.remember": "تذكرني",
    "auth.login.forgot": "نسيت كلمة المرور؟",
    "auth.login.submit": "تسجيل الدخول",
    "auth.login.noAccount": "ليس لديك حساب؟",
    "auth.login.signUp": "إنشاء حساب",

    "auth.signup.title": "إنشاء حساب",
    "auth.signup.subtitle": "انضم إلى منصتنا اليوم",
    "auth.signup.firstName": "الاسم الأول",
    "auth.signup.lastName": "اسم العائلة",
    "auth.signup.email": "البريد الإلكتروني",
    "auth.signup.company": "الشركة",
    "auth.signup.password": "كلمة المرور",
    "auth.signup.confirmPassword": "تأكيد كلمة المرور",
    "auth.signup.agree": "أوافق على شروط الخدمة",
    "auth.signup.submit": "إنشاء حساب",
    "auth.signup.hasAccount": "لديك حساب بالفعل؟",
    "auth.signup.signIn": "تسجيل الدخول",
  },
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function useEnhancedTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error("useEnhancedTranslation must be used within a TranslationProvider")
  }
  return context
}

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")
  const isRTL = locale === "ar"

  const t = (key: string): string => {
    const translation = translations[locale][key as keyof (typeof translations)[typeof locale]]
    return translation || key
  }

  useEffect(() => {
    // Set document direction
    document.documentElement.dir = isRTL ? "rtl" : "ltr"
    document.documentElement.lang = locale
  }, [locale, isRTL])

  return <TranslationContext.Provider value={{ locale, setLocale, t, isRTL }}>{children}</TranslationContext.Provider>
}
