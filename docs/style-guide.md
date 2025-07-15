# Style Guide - Main Consulting Website

## Brand Colors

### Primary Colors
- **Primary Blue**: `hsl(220, 91%, 50%)` - #1e40af
- **Secondary Purple**: `hsl(262, 83%, 58%)` - #7c3aed
- **Accent Green**: `hsl(142, 76%, 36%)` - #059669

### Neutral Colors
- **Dark Gray**: `hsl(220, 13%, 18%)` - #1f2937
- **Light Gray**: `hsl(220, 13%, 91%)` - #f3f4f6
- **White**: `#ffffff`

### Usage Guidelines
- Use Primary Blue for main CTAs and primary actions
- Use Secondary Purple for highlights and gradients
- Use Accent Green for success states and positive metrics
- Maintain 4.5:1 contrast ratio for accessibility

## Typography

### Font Families
- **Headings**: Playfair Display (serif) - `font-heading`
- **Body Text**: Inter (sans-serif) - default
- **UI Elements**: Inter (sans-serif)

### Font Scales
- **Hero Title**: `text-4xl sm:text-6xl lg:text-7xl` (64px-112px)
- **Section Titles**: `text-3xl sm:text-4xl` (48px-56px)
- **Card Titles**: `text-xl` (20px)
- **Body Text**: `text-base` (16px)
- **Small Text**: `text-sm` (14px)

### Font Weights
- **Bold**: 700 - For headings and emphasis
- **Semibold**: 600 - For subheadings
- **Medium**: 500 - For UI elements
- **Regular**: 400 - For body text

## Spacing System

### Padding/Margin Scale
- **xs**: `0.25rem` (4px)
- **sm**: `0.5rem` (8px)
- **md**: `1rem` (16px)
- **lg**: `1.5rem` (24px)
- **xl**: `3rem` (48px)
- **2xl**: `5rem` (80px)

### Section Spacing
- **Section Padding**: `py-20` (80px vertical)
- **Container Padding**: `px-4` (16px horizontal)
- **Card Padding**: `p-6` or `p-8` (24px-32px)

## Components

### Buttons

#### Primary Button
\`\`\`tsx
<Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
  Primary Action
</Button>
\`\`\`

#### Secondary Button
\`\`\`tsx
<Button variant="outline" className="border-2 hover:bg-accent hover:shadow-lg transition-all duration-200 bg-transparent">
  Secondary Action
</Button>
\`\`\`

### Cards
\`\`\`tsx
<Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm">
  <CardContent className="p-6">
    {/* Card content */}
  </CardContent>
</Card>
\`\`\`

### Gradients
- **Primary Gradient**: `from-blue-600 to-purple-600`
- **Background Gradient**: `from-blue-50 via-white to-purple-50`
- **Accent Gradient**: `from-green-600 to-teal-600`

## Animations

### Hover Effects
- **Scale**: `hover:scale-105` (5% scale increase)
- **Shadow**: `hover:shadow-xl` (Enhanced shadow)
- **Color Transitions**: `transition-colors duration-200`

### Page Animations
- **Fade In**: `animate-fade-in` (0.6s ease-in-out)
- **Slide Up**: `animate-slide-up` (0.8s ease-out)
- **Scale In**: `animate-scale-in` (0.5s ease-out)

### Transition Timing
- **Fast**: `duration-200` (200ms) - For hover states
- **Medium**: `duration-300` (300ms) - For component changes
- **Slow**: `duration-500` (500ms) - For layout changes

## Responsive Design

### Breakpoints
- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

### Mobile-First Approach
Always design for mobile first, then enhance for larger screens:

\`\`\`tsx
<div className="text-lg sm:text-xl lg:text-2xl">
  Responsive text
</div>
\`\`\`

## Accessibility

### Color Contrast
- Maintain minimum 4.5:1 contrast ratio
- Use tools like WebAIM Contrast Checker

### Touch Targets
- Minimum 44px × 44px for interactive elements
- Adequate spacing between clickable items

### Focus States
- Visible focus indicators for keyboard navigation
- Custom focus styles: `focus-visible:ring-2 focus-visible:ring-primary`

### Screen Readers
- Semantic HTML elements
- Proper ARIA labels
- Alt text for images

## Code Style

### CSS Classes
- Use Tailwind utility classes
- Group related utilities together
- Use responsive prefixes consistently

### Component Structure
\`\`\`tsx
export function ComponentName() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Component content */}
        </div>
      </div>
    </section>
  )
}
\`\`\`

### File Naming
- Components: `PascalCase.tsx`
- Utilities: `kebab-case.ts`
- Pages: `kebab-case/page.tsx`

## Performance Guidelines

### Images
- Use Next.js Image component
- Provide width and height
- Use appropriate formats (WebP when possible)
- Implement lazy loading

### Code Splitting
- Dynamic imports for heavy components
- Separate vendor bundles
- Tree shaking for unused code

### Loading States
- Skeleton loaders for content
- Progressive enhancement
- Graceful degradation
