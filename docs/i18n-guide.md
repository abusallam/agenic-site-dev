# Internationalization (i18n) Guide

## Overview

This website supports English (en) and Arabic (ar) languages using Next.js built-in i18n features.

## Configuration

### Next.js Config
\`\`\`javascript
// next.config.mjs
const nextConfig = {
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    localeDetection: true,
  },
}
\`\`\`

### Translation Files
Translations are stored in \`lib/translations.json\`:

\`\`\`json
{
  "en": {
    "nav": {
      "home": "Home",
      "consulting": "Consulting"
    }
  },
  "ar": {
    "nav": {
      "home": "الرئيسية",
      "consulting": "الاستشارات"
    }
  }
}
\`\`\`

## Usage

### In Components
\`\`\`tsx
import { useTranslation } from '@/lib/i18n'

export function MyComponent() {
  const { t, locale, changeLanguage } = useTranslation()
  
  return (
    <div>
      <h1>{t('nav.home')}</h1>
      <button onClick={() => changeLanguage('ar')}>
        Switch to Arabic
      </button>
    </div>
  )
}
\`\`\`

### In Server Components
\`\`\`tsx
import { getStaticTranslations } from '@/lib/i18n'

export default function ServerComponent({ locale }: { locale: string }) {
  const t = getStaticTranslations(locale)
  
  return <h1>{t.nav.home}</h1>
}
\`\`\`

## RTL Support

### CSS Classes
For Arabic (RTL) support, use conditional classes:

\`\`\`tsx
<div className={locale === 'ar' ? 'rtl' : ''}>
  <div className="flex">
    {/* This will be flex-row-reverse in RTL */}
  </div>
</div>
\`\`\`

### Global RTL Styles
\`\`\`css
[dir="rtl"] {
  text-align: right;
}

[dir="rtl"] .flex {
  flex-direction: row-reverse;
}
\`\`\`

## Adding New Languages

1. **Add locale to Next.js config**:
   \`\`\`javascript
   locales: ['en', 'ar', 'fr'], // Add 'fr' for French
   \`\`\`

2. **Add translations**:
   \`\`\`json
   {
     "fr": {
       "nav": {
         "home": "Accueil",
         "consulting": "Conseil"
       }
     }
   }
   \`\`\`

3. **Update language switcher**:
   \`\`\`tsx
   <DropdownMenuItem onClick={() => changeLanguage('fr')}>
     🇫🇷 Français
   </DropdownMenuItem>
   \`\`\`

## Translation Keys Structure

### Naming Convention
- Use dot notation: \`section.subsection.key\`
- Keep keys descriptive but concise
- Group related translations together

### Example Structure
\`\`\`json
{
  "nav": {
    "home": "Home",
    "services": "Services"
  },
  "hero": {
    "title": "Transform Your Business",
    "description": "AI solutions for modern businesses"
  },
  "buttons": {
    "getStarted": "Get Started",
    "learnMore": "Learn More"
  }
}
\`\`\`

## Best Practices

### 1. Consistent Key Naming
- Use camelCase for keys
- Be descriptive but concise
- Group logically by component/section

### 2. Handle Missing Translations
The \`t()\` function returns the key if translation is missing:
\`\`\`tsx
t('missing.key') // Returns 'missing.key' if not found
\`\`\`

### 3. Pluralization
For complex pluralization, consider using a library like \`react-i18next\`:
\`\`\`json
{
  "items": {
    "zero": "No items",
    "one": "1 item",
    "other": "{{count}} items"
  }
}
\`\`\`

### 4. Date and Number Formatting
Use \`Intl\` APIs for locale-specific formatting:
\`\`\`tsx
const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat(locale).format(date)
}

const formatNumber = (number: number) => {
  return new Intl.NumberFormat(locale).format(number)
}
\`\`\`

### 5. Images and Media
Consider locale-specific images:
\`\`\`tsx
<Image 
  src={\`/images/hero-\${locale || "/placeholder.svg"}.jpg\`}
  alt={t('hero.imageAlt')}
/>
\`\`\`

## Testing Translations

### Manual Testing
1. Switch between languages using the language switcher
2. Verify all text is translated
3. Check RTL layout for Arabic
4. Test on different screen sizes

### Automated Testing
\`\`\`tsx
// Test translation function
describe('useTranslation', () => {
  it('returns correct translation', () => {
    const { t } = useTranslation()
    expect(t('nav.home')).toBe('Home')
  })
})
\`\`\`

## Common Issues

### 1. Missing Translations
- Always provide fallback text
- Use TypeScript for type safety
- Implement translation validation

### 2. RTL Layout Issues
- Test thoroughly with Arabic content
- Use logical properties (margin-inline-start vs margin-left)
- Consider text length differences

### 3. Font Support
- Ensure fonts support Arabic characters
- Consider different font weights for Arabic
- Test readability in both languages

## Deployment Considerations

### URL Structure
Next.js automatically handles locale-based routing:
- \`/\` - Default locale (English)
- \`/ar\` - Arabic version
- \`/ar/consulting\` - Arabic consulting page

### SEO
- Set appropriate \`lang\` attribute
- Use \`hreflang\` for alternate languages
- Translate meta tags and descriptions

### Performance
- Consider code splitting by locale
- Lazy load translation files
- Cache translations appropriately
\`\`\`

Now let's add some placeholder images and update the package.json:
