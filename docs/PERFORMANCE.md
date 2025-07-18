# Performance Optimization Guide

This guide covers performance optimization strategies implemented in the Main Consulting website.

## 🚀 Core Web Vitals

Our website is optimized for Google's Core Web Vitals:

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms  
- **CLS (Cumulative Layout Shift)**: < 0.1

## 📊 Performance Monitoring

### Built-in Monitoring

The website includes a performance monitoring component that tracks:

```typescript
// components/performance-monitor.tsx
import { PerformanceMonitor } from "@/components/performance-monitor"

// Add to your layout
<PerformanceMonitor />
```

### Metrics Tracked

- **Core Web Vitals**: LCP, FID, CLS, FCP, TTFB
- **Custom Metrics**: Page load times, API response times
- **User Experience**: Error rates, bounce rates

## 🖼️ Image Optimization

### Next.js Image Component

```typescript
import Image from "next/image"

<Image
  src="/hero-image.webp"
  alt="Description"
  width={1200}
  height={600}
  priority // For above-the-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### Image Formats

- **WebP**: Primary format for modern browsers
- **AVIF**: Next-gen format for supported browsers
- **JPEG/PNG**: Fallback for older browsers

### Optimization Settings

```javascript
// next.config.mjs
images: {
  formats: ['image/webp', 'image/avif'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
}
```

## 📦 Bundle Optimization

### Code Splitting

```typescript
// Dynamic imports for heavy components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />,
  ssr: false, // Client-side only if needed
})
```

### Bundle Analysis

```bash
# Analyze bundle size
npm run analyze

# View bundle composition
open .next/analyze/client.html
```

### Tree Shaking

```typescript
// Import only what you need
import { Button } from "@/components/ui/button"
// Instead of: import * as UI from "@/components/ui"
```

## ⚡ Loading Strategies

### Lazy Loading

```typescript
// Lazy load components
const LazyComponent = lazy(() => import('./Component'))

// Lazy load images
<Image
  src="/image.webp"
  loading="lazy" // Default behavior
  alt="Description"
/>
```

### Preloading

```typescript
// Preload critical resources
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="" />

// Prefetch next page
<link rel="prefetch" href="/about" />
```

## 🎨 CSS Optimization

### Tailwind CSS Purging

```javascript
// tailwind.config.ts
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  // Unused styles are automatically purged
}
```

### Critical CSS

```typescript
// Inline critical CSS for above-the-fold content
const criticalCSS = `
  .hero { /* critical styles */ }
  .navigation { /* critical styles */ }
`
```

## 🔄 Caching Strategies

### Static Assets

```javascript
// next.config.mjs
async headers() {
  return [
    {
      source: '/_next/static/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ]
}
```

### API Caching

```typescript
// API routes with caching
export async function GET() {
  const data = await fetchData()
  
  return Response.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
    },
  })
}
```

### Browser Caching

```typescript
// Service Worker (future implementation)
self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request)
      })
    )
  }
})
```

## 🚀 Runtime Optimization

### React Optimization

```typescript
// Memoization
const MemoizedComponent = memo(({ data }) => {
  return <div>{data}</div>
})

// Callback memoization
const handleClick = useCallback(() => {
  // Handle click
}, [dependency])

// Value memoization
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data)
}, [data])
```

### Virtual Scrolling

```typescript
// For large lists
import { FixedSizeList as List } from 'react-window'

const VirtualizedList = ({ items }) => (
  <List
    height={600}
    itemCount={items.length}
    itemSize={50}
  >
    {({ index, style }) => (
      <div style={style}>
        {items[index]}
      </div>
    )}
  </List>
)
```

## 📱 Mobile Optimization

### Responsive Images

```typescript
<Image
  src="/hero.webp"
  alt="Hero"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  fill
  priority
/>
```

### Touch Optimization

```css
/* Improve touch targets */
.button {
  min-height: 44px;
  min-width: 44px;
}

/* Reduce tap delay */
.interactive {
  touch-action: manipulation;
}
```

## 🔍 SEO Performance

### Meta Tags

```typescript
// app/layout.tsx
export const metadata = {
  title: 'Main Consulting - AI Solutions',
  description: 'Professional AI consulting services...',
  openGraph: {
    title: 'Main Consulting',
    description: 'AI consulting services...',
    images: ['/og-image.webp'],
  },
}
```

### Structured Data

```typescript
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Main Consulting",
  "url": "https://main.consulting.sa",
  "logo": "https://main.consulting.sa/logo.webp",
}
```

## 📈 Performance Monitoring

### Real User Monitoring (RUM)

```typescript
// Track Core Web Vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

getCLS(console.log)
getFID(console.log)
getFCP(console.log)
getLCP(console.log)
getTTFB(console.log)
```

### Performance Budget

| Metric | Budget | Current |
|--------|--------|---------|
| Bundle Size | < 250KB | ~180KB |
| LCP | < 2.5s | ~1.8s |
| FID | < 100ms | ~45ms |
| CLS | < 0.1 | ~0.05 |

## 🛠️ Tools & Testing

### Performance Testing

```bash
# Lighthouse CI
npm install -g @lhci/cli
lhci autorun

# WebPageTest
curl -X POST "https://www.webpagetest.org/runtest.php" \
  -d "url=https://main.consulting.sa" \
  -d "k=YOUR_API_KEY"
```

### Bundle Analysis

```bash
# Webpack Bundle Analyzer
npm run analyze

# Bundle Buddy
npx bundle-buddy .next/static/chunks/*.js
```

### Performance Profiling

```typescript
// React DevTools Profiler
import { Profiler } from 'react'

function onRenderCallback(id, phase, actualDuration) {
  console.log('Component:', id, 'Phase:', phase, 'Duration:', actualDuration)
}

<Profiler id="App" onRender={onRenderCallback}>
  <App />
</Profiler>
```

## 🎯 Performance Checklist

### Pre-deployment

- [ ] Run `npm run analyze` to check bundle size
- [ ] Test Core Web Vitals with Lighthouse
- [ ] Verify image optimization
- [ ] Check for unused dependencies
- [ ] Test on slow 3G connection
- [ ] Validate accessibility scores

### Post-deployment

- [ ] Monitor Core Web Vitals in production
- [ ] Set up performance alerts
- [ ] Track user experience metrics
- [ ] Regular performance audits
- [ ] Update performance budget

## 📚 Resources

- [Web.dev Performance](https://web.dev/performance/)
- [Next.js Performance](https://nextjs.org/docs/advanced-features/measuring-performance)
- [Core Web Vitals](https://web.dev/vitals/)
- [React Performance](https://react.dev/learn/render-and-commit)

---

**Last Updated**: January 2025