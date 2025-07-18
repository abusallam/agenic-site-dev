# Main Consulting Website

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://main.consulting.sa)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

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

### Core Technologies
- **Framework**: Next.js 15.4.1 with App Router
- **Language**: TypeScript 5.7.3
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Database**: Supabase
- **Package Manager**: npm

### Development Tools
- **Code Quality**: ESLint, Prettier, Husky
- **Performance**: Bundle Analyzer, Image Optimization
- **Deployment**: Docker, Vercel
- **Monitoring**: Health Checks, Error Boundaries

## 🏗️ Project Structure

```
├── app/                    # Next.js app directory (App Router)
│   ├── about/             # About page
│   ├── api/               # API routes
│   │   └── health/        # Health check endpoint
│   ├── auth/              # Authentication pages
│   ├── consulting/        # Consulting services page
│   ├── contact/           # Contact page
│   ├── docs/              # Documentation pages
│   ├── documentation/     # API documentation
│   ├── privacy-policy/    # Privacy policy page
│   ├── services/          # Services pages
│   ├── test-auth/         # Authentication testing
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── loading.tsx        # Global loading UI
│   ├── error.tsx          # Global error UI
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── ui/               # Shadcn/ui component library
│   ├── consulting/       # Consulting-specific components
│   ├── *-enhanced.tsx    # Enhanced feature components
│   └── *.tsx             # Other components
├── lib/                  # Utility functions and configurations
│   ├── brand.ts          # Brand configuration
│   ├── i18n-enhanced.tsx # Internationalization
│   ├── supabase.ts       # Supabase client
│   └── utils.ts          # Utility functions
├── hooks/                # Custom React hooks
├── public/               # Static assets
│   ├── *.webp           # Optimized images
│   └── *.svg            # Vector graphics
├── styles/               # Additional styles
│   └── animations.css   # Custom animations
├── docs/                 # Project documentation
├── scripts/              # Build and deployment scripts
├── .github/              # GitHub workflows and templates
└── Docker files          # Container configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** 9+ or **yarn** 1.22+
- **Git** for version control
- **Docker** (optional, for containerized deployment)

### Quick Start

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
   
   Configure your environment variables:
   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   
   # Contact Configuration
   NEXT_PUBLIC_CONTACT_EMAIL=asim@main.consulting.sa
   
   # Analytics (optional)
   NEXT_PUBLIC_GA_ID=your_google_analytics_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

### Development
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm run start` - Start production server
- `npm run clean` - Clean build artifacts and cache

### Code Quality
- `npm run lint` - Run ESLint with auto-fix
- `npm run lint:check` - Check linting without fixing
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

### Analysis & Testing
- `npm run analyze` - Analyze bundle size with webpack-bundle-analyzer
- `npm run test` - Run tests (placeholder for future implementation)

### Docker Deployment
- `npm run docker:build` - Build Docker image
- `npm run docker:run` - Run Docker container
- `npm run docker:compose` - Run with Docker Compose

## 🌐 Features

### Core Features
- **🎨 Modern Design** - Clean, professional UI with glass morphism effects
- **📱 Responsive Design** - Mobile-first approach with Tailwind CSS
- **🌙 Dark/Light Mode** - Seamless theme switching with next-themes
- **🌍 Internationalization** - Multi-language support (Arabic/English)
- **⚡ Performance Optimized** - Image optimization, code splitting, lazy loading
- **♿ Accessibility** - WCAG 2.1 AA compliant components
- **🔒 Security** - Security headers, CSP, and best practices

### Technical Features
- **🚀 App Router** - Next.js 13+ App Router with server components
- **📊 SEO Optimized** - Meta tags, Open Graph, structured data
- **🎯 Type Safety** - Full TypeScript implementation
- **🔄 Error Handling** - Comprehensive error boundaries and fallbacks
- **📈 Analytics Ready** - Google Analytics integration
- **🐳 Docker Ready** - Multi-stage Docker build for production

### Business Features
- **💼 Consulting Services** - Comprehensive AI consulting showcase
- **📝 Privacy Policy** - GDPR-compliant privacy documentation
- **📞 Contact Forms** - Integrated contact and inquiry forms
- **🎯 Service Pages** - Detailed AI services and solutions
- **📚 Documentation** - API and integration documentation

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Yes | - |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | Yes | - |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact email address | No | asim@main.consulting.sa |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID | No | - |
| `ANALYZE` | Enable bundle analyzer | No | false |

### Brand Configuration

Customize your brand in `lib/brand.ts`:

```typescript
export const brandConfig = {
  name: "Main Consulting",
  tagline: "AI Consulting & Digital Transformation",
  description: "Professional AI consulting services and SaaS solutions",
  url: "https://main.consulting.sa",
  logo: {
    image: "/logo.webp",
    width: 40,
    height: 40,
  },
  contact: {
    email: "asim@main.consulting.sa",
    phone: "+966-XXX-XXXX",
  },
  social: {
    linkedin: "https://linkedin.com/company/main-consulting",
    twitter: "https://twitter.com/mainconsulting",
  },
}
```

### Tailwind Configuration

The project uses a custom Tailwind configuration with:
- **Custom Colors** - Brand-specific color palette
- **Typography** - Inter and Cairo fonts for multilingual support
- **Animations** - Custom keyframes and transitions
- **Components** - Utility classes for common patterns

## 🚢 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure environment variables** in Vercel dashboard
3. **Deploy** - Automatic deployments on push to main

### Docker Deployment

1. **Build the image**
   ```bash
   docker build -t main-consulting-website .
   ```

2. **Run the container**
   ```bash
   docker run -p 3000:3000 main-consulting-website
   ```

3. **Using Docker Compose**
   ```bash
   docker-compose up --build
   ```

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

## 📊 Performance Optimizations

### Image Optimization
- **WebP/AVIF formats** for modern browsers
- **Responsive images** with multiple sizes
- **Lazy loading** for better performance
- **Sharp** for server-side image processing

### Code Splitting
- **Automatic code splitting** by Next.js
- **Dynamic imports** for heavy components
- **Bundle analysis** with webpack-bundle-analyzer

### Caching Strategy
- **Static assets** cached for 1 year
- **API routes** with appropriate cache headers
- **Service worker** for offline functionality (future)

## 🔒 Security

### Headers
- **X-Frame-Options** - Prevent clickjacking
- **X-Content-Type-Options** - Prevent MIME sniffing
- **Referrer-Policy** - Control referrer information
- **Permissions-Policy** - Restrict browser features

### Content Security Policy
- **Strict CSP** for SVG content
- **Nonce-based** script execution
- **Trusted domains** for external resources

## 📱 Responsive Breakpoints

| Breakpoint | Size | Usage |
|------------|------|-------|
| `sm` | 640px+ | Small tablets |
| `md` | 768px+ | Tablets |
| `lg` | 1024px+ | Small desktops |
| `xl` | 1280px+ | Large desktops |
| `2xl` | 1536px+ | Extra large screens |

## 🧪 Testing

### Current Status
- **Unit Tests** - Not implemented (placeholder)
- **Integration Tests** - Not implemented (placeholder)
- **E2E Tests** - Not implemented (placeholder)

### Future Implementation
- **Jest** for unit testing
- **React Testing Library** for component testing
- **Playwright** for E2E testing

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run quality checks**
   ```bash
   npm run lint
   npm run type-check
   npm run format
   ```
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Code Style

- **TypeScript** for all new code
- **Functional components** with hooks
- **Tailwind CSS** for styling
- **ESLint + Prettier** for code formatting
- **Conventional commits** for commit messages

## 📚 Documentation

- **[Installation Guide](docs/installation.md)** - Detailed setup instructions
- **[Configuration Guide](docs/configuration.md)** - Environment and settings
- **[API Reference](docs/api-reference.md)** - API endpoints documentation
- **[Style Guide](docs/style-guide.md)** - Design system and components
- **[i18n Guide](docs/i18n-guide.md)** - Internationalization setup

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   - Check Node.js version (18+ required)
   - Clear cache: `npm run clean`
   - Reinstall dependencies: `rm -rf node_modules && npm install`

2. **Environment Variables**
   - Ensure `.env.local` exists and is configured
   - Restart development server after changes

3. **Docker Issues**
   - Check Docker daemon is running
   - Verify port 3000 is available
   - Check environment variables in docker-compose.yml

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact & Support

**Asim Abu Salam** - Lead Developer & AI Consultant
- **Email**: asim@main.consulting.sa
- **Website**: [main.consulting.sa](https://main.consulting.sa)
- **LinkedIn**: [Main Consulting](https://linkedin.com/company/main-consulting)

For technical support or business inquiries, please reach out via email or through our website contact form.

## 🙏 Acknowledgments

### Technologies
- **[Next.js](https://nextjs.org/)** - React framework for production
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Low-level UI primitives
- **[Lucide](https://lucide.dev/)** - Beautiful & consistent icons
- **[Supabase](https://supabase.com/)** - Open source Firebase alternative

### Inspiration
- **[Shadcn/ui](https://ui.shadcn.com/)** - Component design system
- **[Vercel](https://vercel.com/)** - Deployment and hosting platform
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and developer experience

---

**Built with ❤️ by Main Consulting Team**