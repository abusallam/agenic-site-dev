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
    "services.consulting.cta": "Get a Free Consultation",

    "ui.learnMore": "learn-more",

    "consultingPage.hero.expertiseAreas.aiStrategy": "AI Strategy Development",
    "consultingPage.hero.expertiseAreas.mlImplementation": "Machine Learning Implementation",
    "consultingPage.hero.expertiseAreas.digitalTransformation": "Digital Transformation",
    "consultingPage.hero.expertiseAreas.processAutomation": "Process Automation",
    "consultingPage.hero.expertiseAreas.teamTraining": "Team Training & Development",

    "consultingPage.hero.stats.yearsExperience": "Years Experience",
    "consultingPage.hero.stats.successfulProjects": "Successful Projects",
    "consultingPage.hero.stats.roiIncrease": "Average ROI Increase",
    "consultingPage.hero.stats.enterpriseClients": "Enterprise Clients",

    "consultingPage.hero.services.aiStrategy.title": "AI Strategy Development",
    "consultingPage.hero.services.aiStrategy.description": "Comprehensive AI roadmap aligned with your business objectives and market opportunities.",
    "consultingPage.hero.services.aiStrategy.deliverables.assessment": "Current state assessment",
    "consultingPage.hero.services.aiStrategy.deliverables.opportunity": "AI opportunity identification",
    "consultingPage.hero.services.aiStrategy.deliverables.roadmap": "Implementation roadmap",
    "consultingPage.hero.services.aiStrategy.deliverables.roi": "ROI projections",
    "consultingPage.hero.services.aiStrategy.deliverables.risk": "Risk assessment",

    "consultingPage.hero.services.implementation.title": "Implementation Consulting",
    "consultingPage.hero.services.implementation.description": "Hands-on guidance for successful AI project execution and deployment.",
    "consultingPage.hero.services.implementation.deliverables.architecture": "Technical architecture design",
    "consultingPage.hero.services.implementation.deliverables.training": "Team training and development",
    "consultingPage.hero.services.implementation.deliverables.vendor": "Vendor selection guidance",
    "consultingPage.hero.services.implementation.deliverables.project": "Project management support",
    "consultingPage.hero.services.implementation.deliverables.qa": "Quality assurance",

    "consultingPage.hero.services.digitalTransformation.title": "Digital Transformation",
    "consultingPage.hero.services.digitalTransformation.description": "Complete organizational transformation with AI at the core of your business strategy.",
    "consultingPage.hero.services.digitalTransformation.deliverables.strategy": "Organization-wide AI strategy",
    "consultingPage.hero.services.digitalTransformation.deliverables.change": "Change management support",
    "consultingPage.hero.services.digitalTransformation.deliverables.multiPhase": "Multi-phase implementation",
    "consultingPage.hero.services.digitalTransformation.deliverables.performance": "Performance monitoring",
    "consultingPage.hero.services.digitalTransformation.deliverables.optimization": "Continuous optimization",

    "consultingPage.about.title": "About Our Consulting Services",
    "consultingPage.about.paragraph1": "Our AI consulting services are designed to help businesses of all sizes harness the power of artificial intelligence. We work closely with you to understand your unique challenges and opportunities, developing tailored strategies that drive innovation and efficiency.",
    "consultingPage.about.paragraph2": "From initial strategy development to hands-on implementation and ongoing optimization, our team of experts provides end-to-end support. We ensure that your AI initiatives are not only technically sound but also strategically aligned with your long-term business goals, delivering measurable results and a competitive edge.",

    "consultingPage.services.title": "Our Consulting Services",
    "consultingPage.services.subtitle": "Comprehensive AI consulting services to help you navigate the complexities of artificial intelligence and achieve your business goals.",
    "consultingPage.services.strategy.title": "AI Strategy & Roadmap",
    "consultingPage.services.strategy.description": "Develop a clear AI strategy and roadmap tailored to your business objectives, identifying key opportunities and potential challenges.",
    "consultingPage.services.feasibility.title": "Feasibility Studies & POCs",
    "consultingPage.services.feasibility.description": "Assess the viability of AI solutions for your specific needs through detailed feasibility studies and proof-of-concept development.",
    "consultingPage.services.implementation.title": "AI Implementation & Integration",
    "consultingPage.services.implementation.description": "Seamlessly integrate AI solutions into your existing systems and workflows, ensuring smooth deployment and minimal disruption.",
    "consultingPage.services.ethics.title": "AI Ethics & Governance",
    "consultingPage.services.ethics.description": "Establish robust ethical guidelines and governance frameworks for your AI initiatives, ensuring responsible and compliant AI adoption.",

    "consultingPage.caseStudies.title": "Case Studies",
    "consultingPage.caseStudies.subtitle": "Explore how we've helped businesses like yours achieve their goals with our AI consulting services.",
    "consultingPage.caseStudies.case1.title": "AI-Powered Automation for a Leading E-commerce Platform",
    "consultingPage.caseStudies.case1.description": "We helped a major e-commerce platform automate their customer service with AI-powered chatbots, resulting in a 40% reduction in response times and a 25% increase in customer satisfaction.",
    "consultingPage.caseStudies.case2.title": "Machine Learning for a Financial Services Firm",
    "consultingPage.caseStudies.case2.description": "Our team developed a machine learning model that helped a financial services firm improve their fraud detection capabilities by 60%, saving them millions in potential losses.",
    "consultingPage.caseStudies.case3.title": "Digital Transformation for a Healthcare Provider",
    "consultingPage.caseStudies.case3.description": "We guided a healthcare provider through a digital transformation, implementing AI-powered solutions that improved patient outcomes and operational efficiency.",

    "consultingPage.contact.title": "Ready to Transform Your Business?",
    "consultingPage.contact.subtitle": "Contact us today to learn more about our AI consulting services and how we can help you achieve your business goals.",
    "consultingPage.contact.cta": "Contact Us",

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

    "pricingPage.title": "Pricing",
    "pricingPage.description": "Choose the plan that's right for you.",

    // Testimonials
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "We are proud to have helped so many businesses succeed. Here's what some of our clients have to say about us.",
    "testimonials.quote1": "POTS has been a game-changer for our business. Their AI-powered solutions have helped us automate our workflows and improve our efficiency.",
    "testimonials.quote2": "The team at POTS is top-notch. They are experts in their field and have been a pleasure to work with. I would highly recommend them to anyone looking for IT consulting services.",
    "testimonials.quote3": "We were looking for a way to engage with our customers more effectively, and POTS delivered. Their chatbots have helped us improve our customer satisfaction and increase our sales.",

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
    "services.consulting.cta": "احصل على استشارة مجانية",

    "ui.learnMore": "اعرف-المزيد",

    "consultingPage.hero.expertiseAreas.aiStrategy": "تطوير استراتيجية الذكاء الاصطناعي",
    "consultingPage.hero.expertiseAreas.mlImplementation": "تنفيذ التعلم الآلي",
    "consultingPage.hero.expertiseAreas.digitalTransformation": "التحول الرقمي",
    "consultingPage.hero.expertiseAreas.processAutomation": "أتمتة العمليات",
    "consultingPage.hero.expertiseAreas.teamTraining": "تدريب وتطوير الفريق",

    "consultingPage.hero.stats.yearsExperience": "سنوات الخبرة",
    "consultingPage.hero.stats.successfulProjects": "مشاريع ناجحة",
    "consultingPage.hero.stats.roiIncrease": "متوسط زيادة العائد على الاستثمار",
    "consultingPage.hero.stats.enterpriseClients": "عملاء الشركات",

    "consultingPage.hero.services.aiStrategy.title": "تطوير استراتيجية الذكاء الاصطناعي",
    "consultingPage.hero.services.aiStrategy.description": "خارطة طريق شاملة للذكاء الاصطناعي تتماشى مع أهداف عملك وفرص السوق.",
    "consultingPage.hero.services.aiStrategy.deliverables.assessment": "تقييم الوضع الحالي",
    "consultingPage.hero.services.aiStrategy.deliverables.opportunity": "تحديد فرص الذكاء الاصطناعي",
    "consultingPage.hero.services.aiStrategy.deliverables.roadmap": "خارطة طريق التنفيذ",
    "consultingPage.hero.services.aiStrategy.deliverables.roi": "توقعات العائد على الاستثمار",
    "consultingPage.hero.services.aiStrategy.deliverables.risk": "تقييم المخاطر",

    "consultingPage.hero.services.implementation.title": "استشارات التنفيذ",
    "consultingPage.hero.services.implementation.description": "إرشادات عملية لتنفيذ ونشر مشاريع الذكاء الاصطناعي بنجاح.",
    "consultingPage.hero.services.implementation.deliverables.architecture": "تصميم البنية التقنية",
    "consultingPage.hero.services.implementation.deliverables.training": "تدريب وتطوير الفريق",
    "consultingPage.hero.services.implementation.deliverables.vendor": "إرشادات اختيار البائعين",
    "consultingPage.hero.services.implementation.deliverables.project": "دعم إدارة المشاريع",
    "consultingPage.hero.services.implementation.deliverables.qa": "ضمان الجودة",

    "consultingPage.hero.services.digitalTransformation.title": "التحول الرقمي",
    "consultingPage.hero.services.digitalTransformation.description": "تحول تنظيمي كامل مع الذكاء الاصطناعي في صميم استراتيجية عملك.",
    "consultingPage.hero.services.digitalTransformation.deliverables.strategy": "استراتيجية الذكاء الاصطناعي على مستوى المنظمة",
    "consultingPage.hero.services.digitalTransformation.deliverables.change": "دعم إدارة التغيير",
    "consultingPage.hero.services.digitalTransformation.deliverables.multiPhase": "تنفيذ متعدد المراحل",
    "consultingPage.hero.services.digitalTransformation.deliverables.performance": "مراقبة الأداء",
    "consultingPage.hero.services.digitalTransformation.deliverables.optimization": "التحسين المستمر",

    "consultingPage.about.title": "حول خدماتنا الاستشارية",
    "consultingPage.about.paragraph1": "تم تصميم خدماتنا الاستشارية في مجال الذكاء الاصطناعي لمساعدة الشركات من جميع الأحجام على تسخير قوة الذكاء الاصطناعي. نعمل معك عن كثب لفهم تحدياتك وفرصك الفريدة، وتطوير استراتيجيات مخصصة تدفع الابتكار والكفاءة.",
    "consultingPage.about.paragraph2": "من تطوير الاستراتيجية الأولية إلى التنفيذ العملي والتحسين المستمر، يقدم فريق الخبراء لدينا دعمًا شاملاً. نضمن أن مبادرات الذكاء الاصطناعي الخاصة بك ليست سليمة تقنيًا فحسب، بل تتماشى أيضًا استراتيجيًا مع أهداف عملك طويلة الأجل، مما يحقق نتائج قابلة للقياس وميزة تنافسية.",

    "consultingPage.services.title": "خدماتنا الاستشارية",
    "consultingPage.services.subtitle": "خدمات استشارية شاملة في مجال الذكاء الاصطناعي لمساعدتك على التنقل في تعقيدات الذكاء الاصطناعي وتحقيق أهداف عملك.",
    "consultingPage.services.strategy.title": "استراتيجية الذكاء الاصطناعي وخارطة الطريق",
    "consultingPage.services.strategy.description": "تطوير استراتيجية واضحة للذكاء الاصطناعي وخارطة طريق مخصصة لأهداف عملك، وتحديد الفرص الرئيسية والتحديات المحتملة.",
    "consultingPage.services.feasibility.title": "دراسات الجدوى وإثبات المفاهيم",
    "consultingPage.services.feasibility.description": "تقييم جدوى حلول الذكاء الاصطناعي لاحتياجاتك الخاصة من خلال دراسات جدوى مفصلة وتطوير إثبات المفهوم.",
    "consultingPage.services.implementation.title": "تنفيذ وتكامل الذكاء الاصطناعي",
    "consultingPage.services.implementation.description": "تكامل سلس لحلول الذكاء الاصطناعي في أنظمتك وسير عملك الحالي، مما يضمن نشرًا سلسًا وأقل قدر من التعطيل.",
    "consultingPage.services.ethics.title": "أخلاقيات وحوكمة الذكاء الاصطناعي",
    "consultingPage.services.ethics.description": "وضع مبادئ توجيهية أخلاقية قوية وأطر حوكمة لمبادرات الذكاء الاصطناعي الخاصة بك، مما يضمن اعتمادًا مسؤولًا ومتوافقًا للذكاء الاصطناعي.",

    "consultingPage.caseStudies.title": "دراسات الحالة",
    "consultingPage.caseStudies.subtitle": "اكتشف كيف ساعدنا الشركات مثل شركتك على تحقيق أهدافها من خلال خدماتنا الاستشارية في مجال الذكاء الاصطناعي.",
    "consultingPage.caseStudies.case1.title": "الأتمتة المدعومة بالذكاء الاصطناعي لمنصة تجارة إلكترونية رائدة",
    "consultingPage.caseStudies.case1.description": "ساعدنا منصة تجارة إلكترونية كبرى على أتمتة خدمة العملاء الخاصة بها باستخدام روبوتات محادثة تعمل بالذكاء الاصطناعي، مما أدى إلى تقليل أوقات الاستجابة بنسبة 40٪ وزيادة رضا العملاء بنسبة 25٪.",
    "consultingPage.caseStudies.case2.title": "التعلم الآلي لشركة خدمات مالية",
    "consultingPage.caseStudies.case2.description": "طور فريقنا نموذجًا للتعلم الآلي ساعد شركة خدمات مالية على تحسين قدراتها في الكشف عن الاحتيال بنسبة 60٪، مما وفر عليها الملايين من الخسائر المحتملة.",
    "consultingPage.caseStudies.case3.title": "التحول الرقمي لمقدم رعاية صحية",
    "consultingPage.caseStudies.case3.description": "لقد قمنا بتوجيه مقدم رعاية صحية خلال التحول الرقمي، وتنفيذ حلول تعمل بالذكاء الاصطناعي أدت إلى تحسين نتائج المرضى والكفاءة التشغيلية.",

    "consultingPage.contact.title": "هل أنت مستعد لتحويل أعمالك؟",
    "consultingPage.contact.subtitle": "اتصل بنا اليوم لمعرفة المزيد عن خدماتنا الاستشارية في مجال الذكاء الاصطناعي وكيف يمكننا مساعدتك في تحقيق أهداف عملك.",
    "consultingPage.contact.cta": "اتصل بنا",

    "servicesPage.title": "خدماتنا",
    "servicesPage.description": "نحن نقدم مجموعة واسعة من الخدمات التي تعمل بالذكاء الاصطناعي لمساعدتك على تحويل أعمالك.",
    "aiAgentsPage.features.title": "ميزات وكيل الذكاء الاصطناعي",
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
    "chatbotsPage.benefits.benefit3.description": "زيادة رضا العملاء بالدعم الفوري.",

    "pricingPage.title": "الأسعار",
    "pricingPage.description": "اختر الخطة المناسبة لك.",

    // Testimonials
    "testimonials.title": "ماذا يقول عملاؤنا",
    "testimonials.subtitle": "نحن فخورون بمساعدة العديد من الشركات على النجاح. إليك ما يقوله بعض عملائنا عنا.",
    "testimonials.quote1": "لقد كان POTS بمثابة تغيير جذري في أعمالنا. لقد ساعدتنا حلولهم التي تعمل بالذكاء الاصطناعي على أتمتة سير العمل لدينا وتحسين كفاءتنا.",
    "testimonials.quote2": "فريق POTS من الطراز الأول. إنهم خبراء في مجالهم وكان من دواعي سروري العمل معهم. أوصي بهم بشدة لأي شخص يبحث عن خدمات استشارات تكنولوجيا المعلومات.",
    "testimonials.quote3": "كنا نبحث عن طريقة للتفاعل مع عملائنا بشكل أكثر فعالية ، وقد نجحت POTS في ذلك. لقد ساعدتنا روبوتات الدردشة الخاصة بهم على تحسين رضا عملائنا وزيادة مبيعاتنا.",

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
