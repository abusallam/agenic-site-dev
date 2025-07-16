# Contributing to Main Consulting Website

Thank you for your interest in contributing to the Main Consulting website! This document provides guidelines and information for contributors.

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/main-consulting-website.git
   cd main-consulting-website
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🛠️ Development Workflow

### Running the Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Code Quality

Before submitting your changes:

1. **Run linting**:
   ```bash
   npm run lint
   ```

2. **Run type checking**:
   ```bash
   npm run type-check
   ```

3. **Test the build**:
   ```bash
   npm run build
   ```

## 📝 Code Style Guidelines

- Use **TypeScript** for all new code
- Follow **ESLint** rules configured in the project
- Use **Tailwind CSS** for styling
- Write **semantic HTML** with proper accessibility attributes
- Use **meaningful component and variable names**

## 🎨 UI/UX Guidelines

- Follow the existing design system and brand colors
- Ensure **responsive design** works on mobile, tablet, and desktop
- Maintain **accessibility standards** (WCAG 2.1 AA)
- Use **Radix UI** components when possible for consistency

## 📁 Project Structure

```
├── app/                    # Next.js app directory (pages)
├── components/            # Reusable React components
│   ├── ui/               # Base UI components
│   └── *.tsx             # Feature-specific components
├── lib/                  # Utility functions and configurations
├── public/               # Static assets
└── styles/               # Global styles
```

## 🔧 Component Guidelines

### Creating New Components

1. Use **TypeScript** with proper type definitions
2. Follow the **component naming convention**: `PascalCase`
3. Export components as **named exports**
4. Include **JSDoc comments** for complex components

Example:
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  onClick?: () => void
}

/**
 * Custom button component with brand styling
 */
export function CustomButton({ variant = 'primary', children, onClick }: ButtonProps) {
  return (
    <button 
      className={cn(
        "px-4 py-2 rounded-md font-medium",
        variant === 'primary' ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-900"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
```

## 🌐 Internationalization

- Support both **English** and **Arabic** languages
- Use the translation system in `lib/i18n-enhanced`
- Add new translation keys to both language files
- Test RTL (right-to-left) layout for Arabic

## 🚀 Submitting Changes

1. **Commit your changes** with descriptive messages:
   ```bash
   git commit -m "feat: add new contact form validation"
   ```

2. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request** on GitHub with:
   - Clear description of changes
   - Screenshots for UI changes
   - Reference to any related issues

## 🐛 Bug Reports

When reporting bugs, please include:

- **Browser and version**
- **Steps to reproduce**
- **Expected vs actual behavior**
- **Screenshots** if applicable
- **Console errors** if any

## 💡 Feature Requests

For new features:

- **Describe the use case** and problem it solves
- **Provide mockups** or examples if applicable
- **Consider the impact** on existing functionality

## 📞 Questions?

If you have questions about contributing:

- Open an **issue** for discussion
- Contact **asim@main.consulting.sa**

Thank you for contributing to Main Consulting! 🙏