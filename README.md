# Main Consulting Website

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://main.consulting.sa)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Professional AI consulting services and SaaS solutions website for Main Consulting, specializing in artificial intelligence, chatbots, AI agents, and digital transformation services.

## 🚀 Live Website

Visit our website: **[https://main.consulting.sa](https://main.consulting.sa)**

## 📋 About

Main Consulting provides cutting-edge AI consulting services including:

- **AI Strategy & Implementation** - Custom AI solutions for businesses
- **Chatbot Development** - Intelligent conversational AI systems
- **AI Agent Creation** - Autonomous AI agents for automation
- **Digital Transformation** - Modernizing business processes with AI
- **SaaS Solutions** - Scalable software-as-a-service platforms

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.1 with App Router
- **Language**: TypeScript 5.7.3
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Database**: Supabase
- **Deployment**: Vercel
- **Package Manager**: npm

## 🏗️ Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── auth/              # Authentication pages
│   ├── consulting/        # Consulting services
│   ├── contact/           # Contact page
│   ├── docs/              # Documentation
│   ├── pricing/           # Pricing page
│   ├── services/          # Services pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable React components
│   ├── ui/               # UI component library
│   └── *.tsx             # Feature components
├── lib/                  # Utility functions and configurations
├── public/               # Static assets
└── styles/               # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/main-consulting/website.git
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your environment variables in `.env.local`

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🌐 Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark/Light Mode** - Theme switching with next-themes
- **Internationalization** - Multi-language support (Arabic/English)
- **SEO Optimized** - Meta tags, Open Graph, and structured data
- **Performance** - Optimized images, fonts, and code splitting
- **Accessibility** - WCAG compliant components
- **Type Safety** - Full TypeScript implementation

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Contact Form
NEXT_PUBLIC_CONTACT_EMAIL=asim@main.consulting.sa
```

### Brand Configuration

Update brand settings in `lib/brand.ts`:

```typescript
export const brandConfig = {
  name: "Main Consulting",
  tagline: "AI Consulting & Digital Transformation",
  description: "Professional AI consulting services...",
  // ... other brand settings
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Asim Abu Salam**
- Email: asim@main.consulting.sa
- Website: [main.consulting.sa](https://main.consulting.sa)
- LinkedIn: [Main Consulting](https://linkedin.com/company/main-consulting)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)