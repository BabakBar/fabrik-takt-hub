# FabrikTakt Project Memory

See @README.md for project overview and @package.json for available npm commands.

## Project Overview

FabrikTakt is an AI-powered manufacturing intelligence platform with a sophisticated React/TypeScript frontend. The application features comprehensive bilingual support (English/Persian with RTL), advanced form handling with EmailJS integration, and a modern animation system using Motion library.

**Key Purpose**: Marketing and contact interface for an AI platform that helps manufacturing teams capture tribal knowledge, solve problems faster, and make data-driven decisions.

## Technology Stack

### Core Framework
- **React 18.3.1** with hooks, concurrent features, and modern patterns
- **TypeScript 5.5.3** with relaxed configuration (strict mode disabled for gradual adoption)
- **Vite 5.4.1** for ultra-fast build tooling and development
- **Bun** package manager for high-performance dependency management

### UI & Styling
- **TailwindCSS 3.4.11** with custom design system and CSS custom properties
- **Radix UI** primitives for accessible, composable components (40+ components)
- **Motion 12.18.1** (Framer Motion successor) for sophisticated animations
- **Lucide React** for modern, consistent iconography
- **Class Variance Authority (CVA)** for component variant management

### Forms & Validation
- **React Hook Form 7.53.0** with custom validation hooks
- **Zod 3.23.8** for schema validation
- **EmailJS** integration with rate limiting and security measures
- **Custom validation system** with real-time bilingual error messages

### State & Data Management
- **React Context** for global state (LanguageContext with 300+ translations)
- **TanStack Query 5.56.2** for server state management
- **React Router DOM 6.26.2** for client-side routing
- **Custom hooks** for form validation, animations, and submission handling

## Code Architecture

### Project Structure
```text
src/
├── components/
│   ├── ui/              # 40+ Radix-based primitives with CVA variants
│   ├── sections/        # Landing page sections (Hero, Problem, Solution, etc.)
│   ├── forms/           # Form components with validation
│   ├── layout/          # Header/Footer with language toggle
│   └── modals/          # Modal components (PilotModal)
├── pages/               # Route-level components (Index, Capabilities, Contact)
├── hooks/               # Custom React hooks (animations, validation, submission)
├── contexts/            # React Context providers (LanguageContext)
├── services/            # External integrations (EmailJS service)
├── data/                # Static data (capabilities)
└── styles/              # Global CSS with design system variables
```

### Component Patterns
- **Radix UI + CVA**: All UI components built on accessible Radix primitives with Class Variance Authority for variants
- **Composition over inheritance**: Prefer component composition and custom hooks
- **TypeScript interfaces**: Comprehensive interface definitions for all props and data structures
- **Motion integration**: Consistent animation patterns using custom animation hooks

## Development Guidelines

### Code Style & Standards

#### TypeScript Best Practices
- Use proper interface definitions for all components and data structures
- Leverage the `@/*` alias for imports (configured in tsconfig and vite)
- Follow existing type patterns in the codebase
- Prefer interfaces over types for object definitions
- Use generic types where appropriate for reusability

#### Component Development
```typescript
// Preferred component pattern
interface ComponentProps {
  title: string;
  description?: string;
  variant?: 'default' | 'primary' | 'secondary';
  onAction?: (data: ActionData) => void;
}

export const Component: React.FC<ComponentProps> = ({ 
  title, 
  description, 
  variant = 'default',
  onAction 
}) => {
  // Component logic
  return (
    <div className={cn('base-styles', variantStyles[variant])}>
      {/* JSX with proper accessibility */}
    </div>
  );
};
```

#### Styling Guidelines
- Use TailwindCSS utility classes exclusively
- Leverage CSS custom properties from the design system:
  - `--accent: #F9A825` (primary brand color - use sparingly)
  - `--primary-text, --text-secondary, --text-muted` for text colors
  - `--surface, --background` for background colors
- Follow mobile-first responsive design approach
- Use the `cn()` utility function for conditional class names
- Implement proper dark mode support using CSS custom properties

#### Animation Standards
- Use Motion library through the custom `useAnimations.ts` hooks
- Follow established animation patterns: `useRevealOnScroll`, `useCountUp`, `hoverVariants`
- Respect `prefers-reduced-motion` settings
- Optimize animations for 60fps performance using transform properties
- Use consistent easing curves: `[0.4, 0, 0.2, 1]` for standard transitions

### Form Development

#### Form Architecture
- Use React Hook Form with custom validation hooks (`useFormValidation`)
- Implement real-time validation with proper error handling
- Follow bilingual validation patterns with LanguageContext
- Use established form components: `FormInput`, `FormError`, `SubmitButton`
- Integrate with EmailJS service following security patterns

#### Form Validation Pattern
```typescript
// Use the custom validation hook
const { errors, touched, validateForm, handleInputChange, handleInputBlur } = useFormValidation(
  validationRules,
  formData
);

// Validation rules pattern
const validationRules: ValidationRules = {
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  name: {
    required: true,
    minLength: 2
  }
};
```

#### EmailJS Integration
- Use the singleton `emailService` instance
- Implement proper rate limiting (3 submissions per 5 minutes)
- Include honeypot fields for spam protection
- Add timing validation to prevent bot submissions
- Handle both user confirmation and admin notification emails

### Internationalization (i18n)

#### Bilingual Support Requirements
- **Always** support both English and Persian languages
- Use the `useLanguage()` hook and `t()` function for all text
- Implement proper RTL (right-to-left) layout for Persian
- Test all components in both language directions
- Ensure font loading works correctly (Orbitron for display text)

#### Translation Pattern
```typescript
const { language, t } = useLanguage();

// Use translation keys consistently
<h1>{t('hero.title')}</h1>
<p>{t('hero.description')}</p>

// Handle direction-dependent styling
<div className={language === 'fa' ? 'text-right' : 'text-left'}>
```

### Performance Guidelines

#### Optimization Priorities
- **Bundle size**: Keep total bundle under 500KB
- **Core Web Vitals**: Target LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Animation performance**: Use GPU-accelerated transforms
- **Form performance**: Implement debounced validation
- **Context optimization**: Prevent unnecessary re-renders

#### Component Optimization
```typescript
// Use React.memo for expensive components
const ExpensiveComponent = React.memo(({ data }) => {
  // Component logic
});

// Optimize useCallback and useMemo usage
const memoizedHandler = useCallback((data) => {
  // Handler logic
}, [dependency]);

const memoizedValue = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);
```

## Common Commands & Workflows

### Development Commands
```bash
bun run dev              # Start development server (port 8080)
bun run build            # Production build
bun run build:dev        # Development build
bun run preview          # Preview production build
bun run lint             # ESLint code checking
bunx tsc --noEmit        # TypeScript compilation check
bunx prettier --write src/ # Format all source files
```

### Testing & Quality Assurance
```bash
# TypeScript checking
bunx tsc --noEmit --skipLibCheck

# Linting with auto-fix
bun run lint --fix

# Check for unused dependencies
bunx depcheck

# Analyze bundle size
bun run build && du -sh dist/

# Test responsive design (manual)
# Test both English and Persian languages
# Test form submissions end-to-end
# Verify accessibility with screen readers
```

### Git Workflow
```bash
git status                    # Check current changes
git add src/                  # Stage source changes
git commit -m "feat: ..."     # Conventional commits preferred
git push origin redesign-v1   # Current development branch
```

## Design System

### Color Palette
- **Primary Accent**: `#F9A825` (Saffron Gold) - use sparingly for CTAs and highlights
- **Text Colors**: `#ffffff` (primary), `#e2e8f0` (secondary), `#94a3b8` (muted)
- **Backgrounds**: `#1a1f2e` (primary), `#2d3748` (secondary), `#4a5568` (tertiary)
- **Semantic Colors**: Success, warning, error states using standard conventions

### Typography Scale
- **Headlines**: `clamp(3rem, 6vw, 4.5rem)` with Orbitron font for display text
- **Body Text**: `clamp(1rem, 1.5vw, 1.125rem)` with system fonts
- **Captions**: `clamp(0.875rem, 1vw, 1rem)` for secondary information

### Spacing System
- Follow 8px grid system: `8px, 16px, 24px, 32px, 48px, 64px`
- Use Tailwind spacing utilities: `p-2, m-4, gap-6, space-y-8`
- Maintain consistent vertical rhythm throughout the application

## Security & Privacy

### Security Measures
- **Rate limiting**: 3 form submissions per 5 minutes via localStorage
- **Spam protection**: Honeypot fields and timing validation
- **Input validation**: Comprehensive client-side and server-side validation
- **Environment variables**: Proper isolation of API keys and sensitive data
- **No telemetry**: Privacy-focused with disabled tracking

### File Protection
- **Never edit**: `.env` files, `bun.lockb`, `package-lock.json`, `.git/` directory
- **Read-only access**: Lock files and configuration that shouldn't be modified
- **Sensitive data**: Ensure no hardcoded API keys or secrets in source code

## Animation Guidelines

### Motion Library Usage
- Import from `motion/react` (not framer-motion)
- Use the custom animation hooks from `useAnimations.ts`
- Follow established animation variants: `hoverVariants`, `staggerVariants`, `pageVariants`
- Implement scroll-triggered animations with `useRevealOnScroll`

### Performance-Optimized Animations
```typescript
// Preferred animation pattern
const variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]  // Optimized easing
    }
  }
};

// Use transform properties for better performance
transform: 'translateY(20px)' // Better than top/left
```

## AI Development Assistant Setup

### Claude Code Configuration
- **Optimized settings**: See `.claude/settings.json` for complete configuration
- **Specialized subagents**: `react-developer`, `code-reviewer`, `debugger`, `performance-optimizer`
- **Auto-formatting hooks**: Prettier, ESLint, JSON, Markdown formatting after saves
- **Command logging**: All bash commands logged for debugging and audit

### Recommended Launch
```bash
# Use the optimized launcher script
./scripts/claude-launcher.sh

# With auto-approve for faster workflow
./scripts/claude-launcher.sh -y

# Resume previous session
./scripts/claude-launcher.sh -r

# Manual launch (alternative)
claude --model sonnet
```

### Subagent Usage Patterns
- **react-developer**: For component development, TypeScript issues, UI work
- **code-reviewer**: For quality assurance after any code changes
- **debugger**: For systematic troubleshooting and error resolution
- **performance-optimizer**: For bundle analysis and optimization

## Common Patterns & Anti-Patterns

### ✅ Preferred Patterns
- Use Radix UI primitives as base components
- Implement proper TypeScript interfaces for all props
- Follow the established component composition patterns
- Use the custom hooks for validation, animation, and form submission
- Test in both English and Persian languages
- Implement proper accessibility with ARIA labels and keyboard navigation

### ❌ Anti-Patterns to Avoid
- Don't use `any` types - prefer proper TypeScript interfaces
- Don't hardcode text strings - always use the translation system
- Don't bypass the validation system - use the established patterns
- Don't implement custom animations - use the Motion library and custom hooks
- Don't modify lock files or sensitive configuration
- Don't skip accessibility considerations

## Quality Standards

### Code Review Checklist
- [ ] TypeScript compilation passes without errors
- [ ] ESLint rules pass (run `bun run lint`)
- [ ] Components work in both English and Persian
- [ ] Responsive design tested on mobile and desktop
- [ ] Accessibility features implemented (ARIA labels, keyboard navigation)
- [ ] Form validation works correctly with real-time feedback
- [ ] Animations respect reduced motion preferences
- [ ] No hardcoded strings (all text uses translation system)
- [ ] Performance impact considered (bundle size, re-renders)

### Performance Targets
- **Bundle Size**: < 500KB total (currently ~800KB uncompressed)
- **Loading Performance**: LCP < 2.5s, FID < 100ms
- **Development Experience**: Fast HMR, quick TypeScript compilation
- **Runtime Performance**: Smooth 60fps animations, responsive interactions

## Documentation Standards

### Component Documentation
```typescript
/**
 * ContactForm component with bilingual validation and EmailJS integration
 * 
 * @param variant - Form type: 'general' | 'support'
 * @param className - Additional CSS classes
 * @param title - Custom form title (optional)
 * @param description - Custom form description (optional)
 */
```

### Function Documentation
- Document complex business logic with clear comments
- Explain non-obvious TypeScript type usage
- Include examples for custom hooks and utilities
- Document performance considerations for expensive operations

## Deployment & Build

### Build Configuration
- **Production**: `bun run build` creates optimized bundle in `dist/`
- **Development**: `bun run build:dev` for development builds
- **Preview**: `bun run preview` to test production build locally
- **Analysis**: Check bundle size with `du -sh dist/` after builds

### Environment Variables
```bash
# Required for EmailJS integration
VITE_EMAILJS_PUBLIC_KEY=your-key-here
VITE_EMAILJS_USER_TEMPLATE=template-id
VITE_EMAILJS_ADMIN_TEMPLATE=admin-template-id

# Optional for analytics
VITE_UMAMI_URL=https://analytics.example.com/script.js
VITE_UMAMI_WEBSITE_ID=website-id
```

---

**This memory file provides comprehensive guidance for developing the FabrikTakt codebase. Always prioritize accessibility, performance, and the bilingual user experience while maintaining the high-quality standards established in this React/TypeScript application.**
