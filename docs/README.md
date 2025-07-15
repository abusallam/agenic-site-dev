# Main Consulting Website Documentation

## Project Overview

This is a modern, multilingual website for Main Consulting (main.consulting.sa), featuring AI solutions and expert consulting services by Asim Abu Salam.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom brand colors
- **UI Components**: shadcn/ui
- **Typography**: Google Fonts (Inter + Playfair Display)
- **Internationalization**: Next.js i18n (English/Arabic)
- **Database**: Supabase
- **Deployment**: Vercel
- **Icons**: Lucide React

## Project Structure

\`\`\`
├── app/                    # Next.js App Router pages
│   ├── consulting/         # Consulting page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── consulting/       # Consulting-specific components
│   ├── navigation.tsx    # Main navigation
│   ├── hero-section.tsx  # Hero component
│   └── ...
├── lib/                  # Utilities and configurations
│   ├── i18n.ts          # Internationalization
│   ├── supabase.ts      # Database client
│   └── utils.ts         # Utility functions
├── docs/                # Documentation
├── public/              # Static assets
└── scripts/             # Database scripts
\`\`\`

## Key Features

### 🌐 Multilingual Support
- English and Arabic languages
- RTL support for Arabic
- Dynamic language switching
- Localized content and navigation

### 🎨 Modern Design
- Responsive design (mobile-first)
- Custom brand colors from main.consulting.sa
- Smooth animations and transitions
- Accessibility-compliant (WCAG guidelines)

### 🚀 Performance
- Optimized images with Next.js Image
- Lazy loading for off-screen content
- Efficient bundle splitting
- SEO optimized with meta tags

### 🔒 Security
- HTTPS enabled
- Supabase Row Level Security (RLS)
- Input validation and sanitization
- Rate limiting protection

## Getting Started

1. **Clone the repository**
   \`\`\`bash
   git clone [repository-url]
   cd consulting-website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   # Add your Supabase credentials
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open [http://localhost:3000](http://localhost:3000)**

## Deployment

The site is automatically deployed to Vercel on every push to the main branch.

### Manual Deployment
\`\`\`bash
npm run build
vercel --prod
\`\`\`

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## Support

For technical support or questions, contact the development team or refer to the documentation in the `/docs` folder.
