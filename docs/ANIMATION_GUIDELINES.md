# Animation Guidelines & Best Practices

## 🎯 Overview

This project uses **Motion for React** (formerly Framer Motion) for all animations. The implementation follows accessibility-first principles with performance optimization built-in.

## 🛠️ Core Hooks & Components

### `useRevealOnScroll(threshold, margin)`
- **Purpose**: Trigger animations when elements enter viewport
- **Default threshold**: 0.15 (15% of element visible)
- **Usage**: Section reveals, staggered grids
- **Performance**: Uses `once: true` to prevent re-triggering

### `useCountUp(end, duration, isVisible)`
- **Purpose**: Animate numbers from 0 to target value
- **Usage**: Statistics, counters, metrics
- **Accessibility**: Respects reduced motion preferences

### `hoverVariants`
- **Purpose**: Consistent hover behaviors across components
- **Includes**: button, secondaryButton, icon, sparkle variants
- **Performance**: Uses transform/opacity for 60fps

## 🎨 Animation Principles

### Timing & Easing
- **Duration**: 0.2s for micro-interactions, 0.6s for page transitions
- **Easing**: "easeOut" for entrance, "easeInOut" for bi-directional
- **Delays**: Stagger children by 0.1s for list animations

### Properties to Animate
✅ **Good**: `transform`, `opacity`, `scale`, `rotate`  
❌ **Avoid**: `width`, `height`, `top`, `left` (causes layout thrashing)

### Accessibility
- **Reduced Motion**: Automatically handled by Motion for React
- **Focus States**: Always include `whileFocus` variants
- **ARIA**: Use `role="alert"` and `aria-live="polite"` for error messages
- **Keyboard Navigation**: Ensure interactive elements have proper focus order

## 📱 Component Patterns

### Section Reveals
```tsx
const { ref, isInView } = useRevealOnScroll();

<motion.section 
  ref={ref}
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
```

### Staggered Lists
```tsx
<motion.div 
  variants={staggerVariants.container}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
>
  {items.map((item, i) => (
    <motion.div key={i} variants={staggerVariants.item}>
```

### Form Validation
```tsx
<motion.div
  animate={hasError ? { x: [-2, 2, -2, 0] } : {}}
  transition={{ duration: 0.3, ease: "easeInOut" }}
>
  {/* Input field */}
</motion.div>

{hasError && (
  <motion.div
    role="alert"
    aria-live="polite"
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: 'auto' }}
    exit={{ opacity: 0, height: 0 }}
  >
```

## 🚀 Performance Guidelines

### Bundle Size
- Motion for React: ~28kb gzipped
- Monitor bundle impact with `npm run analyze`
- Tree-shake unused animation features

### Runtime Performance
- **Target**: 60fps on mobile devices
- **Test on**: iPhone 7, Android mid-range devices
- **Tools**: Chrome DevTools Performance tab
- **Metrics**: Avoid >16ms frame times

### Memory Management
- Use `useEffect` cleanup for custom animations
- Avoid creating new variant objects in render
- Prefer `variants` over inline styles for complex animations

## 🧪 Testing Checklist

### Functional Testing
- [ ] All animations trigger correctly
- [ ] Reduced motion preference respected
- [ ] Keyboard navigation works with focus states
- [ ] Screen reader compatibility (test with VoiceOver/NVDA)

### Performance Testing
- [ ] No animation jank on 60Hz displays
- [ ] Mobile performance acceptable
- [ ] Memory usage stable over time
- [ ] Bundle size impact minimal

### Cross-Browser Testing
- [ ] Chrome (Blink engine)
- [ ] Firefox (Gecko engine)  
- [ ] Safari (WebKit engine)
- [ ] Edge (Chromium)

## 🔧 Debugging

### Common Issues
1. **Animation not triggering**: Check threshold values in `useRevealOnScroll`
2. **Performance problems**: Use transform/opacity instead of layout properties
3. **Accessibility issues**: Ensure ARIA attributes and reduced motion support
4. **Mobile touch issues**: Test hover states degrade gracefully

### Dev Tools
- **Motion DevTools**: Install browser extension for debugging
- **React DevTools Profiler**: Monitor component re-renders
- **Lighthouse**: Audit accessibility and performance

## 📚 References

- [Motion for React Docs](https://motion.dev/docs/react-quick-start)
- [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)

---

*Last updated: June 2025 - Keep this document current as animation patterns evolve*