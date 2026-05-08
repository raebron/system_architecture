# Copilot Instructions for System Architecture Training App

## Slide Type Specification

All slides MUST conform to this TypeScript type:

```typescript
export interface Slide {
  id: string;                    // Unique identifier (e.g., "s1", "s2")
  title: string;                 // Display title
  narration: string;             // Speaker notes / narration text
  component: React.ComponentType<{ isPresenting: boolean }>;  // Slide content component
  duration?: number;             // Optional: suggested display duration in seconds
}
```

## Key Rules

1. **SVG-based visuals only** — no external images, all scenes rendered in SVG
2. **Framer Motion required** — all slides must animate in smoothly on mount
3. **Static export compatible** — no server actions, no dynamic imports, no fetch
4. **Presenter mode** — slides receive `isPresenting` prop to show/hide speaker notes
5. **Keyboard navigation** — arrow keys (← →), space, and enter to advance slides
6. **Deep linking** — URL query param `?slide=s3` must jump to the corresponding slide
7. **No external dependencies** — use only installed packages (Next.js, Tailwind, Framer Motion)

## Slide Component Pattern

```typescript
const SlideComponent: React.ComponentType<{ isPresenting: boolean }> = ({ isPresenting }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
    {/* SVG content or Tailwind layout */}
    {isPresenting && <div className="text-sm text-gray-600">{narration}</div>}
  </motion.div>
);
```

## File Organization

- `src/content/slides.ts` — Slide definitions and exports
- `src/components/DeckShell.tsx` — Main deck navigation & state management
- `src/components/SlideViewport.tsx` — Current slide renderer
- `src/app/page.tsx` — Root page with routing logic
- `next.config.js` — Static export config
- `tailwind.config.ts` — Tailwind configuration
- `tsconfig.json` — TypeScript strict mode
