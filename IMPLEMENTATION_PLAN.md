# COMPLETE IMPLEMENTATION PLAN: ABOUT & THE WORK PAGES
**Objective:** Transform both pages from flat documents into cinematic editorial experiences.
**Constraint:** Zero copy changes. Same theme, palette, typography.
**Reference:** All patterns are proven and running on `app/page.tsx`.

---

## PHASE 1: INFRASTRUCTURE (BOTH PAGES)
**Goal:** Bring both pages into the same architectural universe as the homepage.
**Estimated steps:** 5 per page

### Step 1.1 — Replace Imports
Both pages currently import only `motion`, `Navigation`, `Footer`, `ScrollReveal`, `LineReveal`, `Link`.

**Add these imports (copy from homepage):**
```tsx
import { useLenis } from "@studio-freight/react-lenis"
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { LineReveal } from "@/components/line-reveal"
import { Button } from "@/components/ui/button"
import { Section, Container } from "@/components/ui/section"
import { Magnetic } from "@/components/magnetic"
```

### Step 1.2 — Add Ambient Cursor Engine
Inside each page component function, add this block (simplified from homepage — no scroll-linked color bleed needed for interior pages):

```tsx
// Ambient Cursor
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    })
  }
  window.addEventListener("mousemove", handleMouseMove)
  return () => window.removeEventListener("mousemove", handleMouseMove)
}, [])

const ambientX = useMotionValue(0)
const ambientY = useMotionValue(0)
useEffect(() => {
  ambientX.set(mousePosition.x)
  ambientY.set(mousePosition.y)
}, [mousePosition, ambientX, ambientY])

const springConfig = { damping: 100, stiffness: 200 }
const mouseX = useSpring(ambientX, springConfig)
const mouseY = useSpring(ambientY, springConfig)
const ambientBg = useMotionTemplate`radial-gradient(circle at ${mouseX}% ${mouseY}%, oklch(0.45 0.08 145 / 0.08) 0%, transparent 40%)`
```

### Step 1.3 — Replace `<main>` with `<motion.main>`
**Current (both pages):**
```tsx
<main className="bg-background">
```
**Replace with:**
```tsx
<motion.main
  className="relative min-h-screen"
  style={{ backgroundColor: "oklch(0.98 0.005 85)" }}
>
```
This gives both pages the warm cream base tone instead of a flat white.

### Step 1.4 — Add Global Ambient Layer
Immediately after `<Navigation />`, add:
```tsx
{/* GLOBAL AMBIENT LAYER */}
<motion.div
  className="fixed inset-0 pointer-events-none z-0"
  style={{ background: ambientBg }}
/>
```

### Step 1.5 — Replace All Raw CTAs
**Current pattern (both pages):**
```tsx
<Link href="/the-work" className="inline-flex items-center gap-3 px-8 py-4 border border-primary ...">
  Explore The Work <span>→</span>
</Link>
```
**Replace with:**
```tsx
<Magnetic strength={0.3}>
  <Button variant="brand-outline" size="xl" asChild>
    <Link href="/the-work">Explore The Work</Link>
  </Button>
</Magnetic>
```

---

## PHASE 2: THE WORK PAGE SCENOGRAPHY
**File:** `app/the-work/page.tsx`
**Goal:** 11 scenes, each with its own architectural identity.

### Scene 1 — Hero: Monolithic Arrival
**Current:** `min-h-[60vh]`, text in a void, `max-w-4xl`.
**Target:** Full-viewport, centered text, bottom hairline, eyebrow label.

```tsx
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  <div className="relative z-10 w-full max-w-[900px] mx-auto px-8 md:px-12 text-center">
    <motion.p
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="mb-8 font-sans text-[10px] tracking-[0.45em] uppercase text-primary"
    >
      The Philosophy
    </motion.p>
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-foreground leading-[1.05] tracking-tight"
    >
      The Work
    </motion.h1>
    {/* Hairline separator */}
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="w-16 h-px bg-primary/25 mx-auto mt-10 origin-left"
    />
  </div>
  <div className="absolute bottom-0 left-0 right-0 h-px bg-foreground/[0.07]" />
</section>
```

### Scene 2 — "What This Is Not": Asymmetric Corridor
**Current:** Centered text with `bg-card`.
**Target:** `grid lg:grid-cols-[1fr_2fr]` with sticky label, hairline left border.

```
Layout:
┌──────────────┬────────────────────────────────────┐
│ WHAT THIS    │ Let us begin with clarity.          │
│ IS NOT       │                                     │
│ (sticky)     │ Not quick fixes.                    │
│              │ Not motivation hacks.               │
│  001         │ Not surface-level coaching.          │
│              │ Not another self-improvement program.│
│              │                                     │
│              │ [body paragraph]                    │
└──────────────┴────────────────────────────────────┘
```

**Key implementation details:**
- Section: `<Section size="content" background="transparent" className="relative z-10 border-t border-foreground/[0.07]">`
- Container: `<Container width="default" className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">`
- Left column: `<div className="lg:sticky lg:top-40">` with section label
- Right column: `<div className="lg:border-l lg:border-foreground/[0.09] lg:pl-16">` with `LineReveal` content
- Section number: `<div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12]">001</div>`

### Scene 3 — "What This Is": Asymmetric + Staggered Pillars
**Current:** Centered text + 2×2 grid of bordered items.
**Target:** Same asymmetric corridor, but the four pillars break free of the grid.

**Pillar layout change:**
```
Current: grid md:grid-cols-2 (boring 2×2)
Target:  space-y-16, each pillar full-width with border-t border-foreground/[0.05]
         Title large (text-2xl), description below
         Alternating left/right alignment for visual tension
```

### Scene 4 — Visual Break: Cinematic Vignette
**Current:** Raw `bg-image-placeholder` with 40% overlay.
**Target:** `<Image>` component with vignette and centered pull-quote watermark.

```tsx
<Section size="screen" background="transparent" className="relative z-10">
  <div className="absolute inset-0 pointer-events-none"
    style={{ background: "radial-gradient(ellipse 65% 55% at center, transparent 35%, oklch(0.12 0.02 145 / 0.055) 100%)" }}
  />
  <Image src="/golden-light-through-trees..." alt="..." fill className="object-cover" style={{ opacity: 0.3 }} />
  <Container width="wide" className="relative z-10 text-center flex items-center justify-center">
    <span className="font-serif text-[18vw] text-foreground/[0.04] tracking-tighter select-none">Weaving</span>
  </Container>
</Section>
```

### Scene 5 — "How Transformation Happens": Sticky Timeline
**Current:** Vertical list with `flex gap-8 items-start`.
**Target:** Homepage Scene 6 pattern — `grid lg:grid-cols-[1fr_2fr]` with sticky section label, then inner `grid lg:grid-cols-[1fr_3fr]` for each step with sticky step numbers. Space between entries: `space-y-32 md:space-y-[50vh]`.

### Scene 6 — "Who This Is For" Header
**Current:** Standalone section with just a heading.
**Target:** Delete as standalone section. Merge into Scene 7 as the umbrella label above the asymmetric corridors.

### Scenes 7–9 — For Creators / Entrepreneurs / Changemakers
**Current:** Three identical `py-32` sections with centered text.
**Target:** Three consecutive asymmetric corridors within a single `Section`, separated by hairlines.

```
Layout for each:
┌──────────────┬──────────────────────────────────────────┐
│ FOR          │ You are a maker, artist, writer...        │
│ CREATORS     │                                          │
│ (sticky)     │ The world right now asks creators to...   │
│              │                                          │
│              │ Many creators reach a point where...      │
│              │                                          │
│              │ "This work is about returning to..."     │
├──────────────┼──────────────────────────────────────────┤
│ FOR          │ You have a vision...                      │
│ ENTREPRENEURS│                                          │
│ (sticky)     │ ...                                      │
├──────────────┼──────────────────────────────────────────┤
│ FOR          │ You care deeply about something...        │
│ CHANGEMAKERS │                                          │
│ (sticky)     │ ...                                      │
└──────────────┴──────────────────────────────────────────┘
```

**Key:** All three live inside ONE `Section` with ONE `Container`. Separated by `<div className="border-t border-foreground/[0.05] my-32" />` hairlines.

### Scene 10 — Wholeness Quote: Full-Viewport Isolation
**Current:** `py-32 bg-card`, centered text.
**Target:** Full-viewport isolation (like homepage Breath scene).

```tsx
<Section size="screen" background="transparent" className="relative z-10 border-t border-foreground/[0.07]">
  {/* Vignette */}
  <div className="absolute inset-0 pointer-events-none"
    style={{ background: "radial-gradient(ellipse 65% 55% at center, transparent 35%, oklch(0.12 0.02 145 / 0.055) 100%)" }}
  />
  <Container width="wide" className="text-center flex flex-col justify-center items-center">
    <LineReveal
      as="blockquote"
      reveal="blur"
      lines={[
        '"I began to perceive the wholeness',
        'and interconnectedness of life,',
        'realizing that nothing exists in isolation."'
      ]}
      lineClassName="font-serif text-[8vw] md:text-[5vw] text-foreground leading-[1.1] tracking-tighter italic"
      focus={true}
    />
  </Container>
</Section>
```

### Scene 11 — CTA: Ceremony Close
```tsx
<Section size="default" className="relative z-10 border-t border-foreground/[0.07]">
  <Container width="prose" className="text-center">
    <ScrollReveal>
      <div className="flex items-center gap-8 mb-10 justify-center">
        <div className="h-px flex-1 max-w-[80px] bg-foreground/[0.07]" />
        <span className="font-sans text-[9px] tracking-[0.5em] uppercase text-foreground/30">Ready?</span>
        <div className="h-px flex-1 max-w-[80px] bg-foreground/[0.07]" />
      </div>
    </ScrollReveal>
    <ScrollReveal delay={0.15}>
      <Magnetic strength={0.4}>
        <Button variant="brand-outline" size="xl" asChild>
          <Link href="/offerings">View Offerings</Link>
        </Button>
      </Magnetic>
    </ScrollReveal>
  </Container>
</Section>
```

---

## PHASE 3: ABOUT PAGE SCENOGRAPHY
**File:** `app/about/page.tsx`
**Goal:** 10 scenes.

### Scene 1 — Hero: Cinematic Character Reveal
**Current:** 2-col grid with raw CSS `bg-url` image.
**Target:** Full-viewport with `<Image>` masked behind oversized typography.

```
Layout:
┌─────────────────────────────────────────────────────┐
│                                                     │
│   The Character Reveal (eyebrow, tracked)           │
│                                                     │
│   MEET                                              │
│   HARISH                (image masked behind,       │
│                          radial-gradient fade,       │
│                          0.28 opacity)               │
│                                                     │
│   ─── (hairline)                                    │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Implementation:** Use `<Image>` with `fill`, `object-cover`, and `radial-gradient` mask (same as homepage hero). Typography at `text-[7rem]` or larger.

### Scene 2 — "What I Stand Against": Asymmetric Corridor
**Target:** `grid lg:grid-cols-[1fr_2fr]`, sticky label, `LineReveal` at `text-2xl md:text-3xl lg:text-4xl` scale, `border-l` on right column. Section number `001`.

### Scene 3 — "Essence": Full-Viewport Isolation
**Current:** `bg-card`, small-scale list.
**Target:** Full-viewport (`size="screen"`). The five words — "A helper. A healer. A nurturer. A connector. A teacher." — rendered at monumental scale via `LineReveal` with `reveal="blur"` at `text-[10vw] md:text-[7vw]`. Vignette overlay.

### Scene 4 — "The Inner Journey": Asymmetric Corridor
**Target:** Same `[1fr_2fr]` corridor pattern. Sticky label "The Inner Journey". `LineReveal` on right at `text-3xl lg:text-4xl`. Body paragraph below. Section number `003`.

### Scene 5 — Visual Break: Cinematic Vignette
**Target:** Replace raw CSS background with optimized `<Image>`. Add vignette radial-gradient. Add centered ghost watermark word (e.g., "Journey" at `text-[18vw]`).

### Scene 6 — "The Alchemy Becoming Path": Sticky Timeline
**Current:** 5 items with `border-l-4 border-primary pl-6`.
**Target:** Homepage Scene 6 pattern.

```
Layout:
┌──────────────┬──────────────────────────────────────────┐
│ THE ALCHEMY  │  ┌─────────┬─────────────────────────┐   │
│ BECOMING     │  │ 01      │ Awakening               │   │
│ PATH         │  │ (sticky)│ Feeling the first tremor │   │
│ (sticky)     │  ├─────────┤                         │   │
│              │  │         │          [60vh gap]      │   │
│              │  │ 02      │ Pattern Dissolving       │   │
│              │  │ (sticky)│ Meeting the old stories  │   │
│              │  ├─────────┤                         │   │
│              │  │ 03      │ Embodied Integration     │   │
│              │  │ 04      │ Authentic Expression     │   │
│              │  │ 05      │ Expanded Impact          │   │
│              │  └─────────┴─────────────────────────┘   │
└──────────────┴──────────────────────────────────────────┘
```

**Space between entries:** `space-y-32 md:space-y-[50vh]`
**Stage names:** `text-[10px] tracking-[0.3em] text-primary lg:sticky lg:top-40 uppercase font-bold`

### Scene 7 — "The Calling": Reversed Asymmetric Corridor
**Current:** `bg-card`, centered paragraphs + italic closer.
**Target:** `grid lg:grid-cols-[2fr_1fr]` — text on left, italicized closing lines anchored on the right with `border-l`. Mirrors homepage Scene 5 ("This Space").

### Scene 8 — "Training & Lineage": Editorial Ledger
**Current:** Left-bordered list items + boxed quote.
**Target:** Full-width editorial table. Each teacher row separated by `border-t border-foreground/[0.05]`.

```
Layout:
┌────────────────────────────────────────────────────────────┐
│ TRAINING & LINEAGE                              005       │
├────────────────────────────────────────────────────────────┤
│ Eric Maisel              Creativity coaching,             │
│                          meaning-centered work            │
├─────────────────────── border-t ──────────────────────────┤
│ Jill Badonsky            Certified Master Kaizen-Muse     │
│                          Creativity Coach                 │
├─────────────────────── border-t ──────────────────────────┤
│ Leon VanderPol           Deep Transformational Coaching   │
├─────────────────────── border-t ──────────────────────────┤
│ ...                                                       │
└────────────────────────────────────────────────────────────┘
```

**Implementation:** `grid grid-cols-[1fr_2fr]` for each teacher row. `py-8 border-t border-foreground/[0.05]`. Teacher name in `font-serif text-lg text-foreground`, focus area in `text-muted-foreground text-sm`. Jill Badonsky quote stays below the ledger.

### Scene 9 — "Before This Work": Premium Credential Bar
**Current:** `grid-cols-2` with `text-sm text-muted-foreground`.
**Target:** Horizontal display. Each credential separated by a vertical hairline or `·` dot. Font: `font-sans text-xs tracking-[0.3em] uppercase`. This should feel like the footer of a luxury brand specification sheet.

```
Mechanical Engineering, Purdue University  ·  SAP Logistics & Supply Chain  ·  Years in the US corporate world  ·  Until the call became undeniable
```

### Scene 10 — CTA: Ceremony Close
Same pattern as Work Page Scene 11. Hairline rules + "Ready?" eyebrow + `Magnetic` + `Button`. Link to `/the-work`.

---

## EXECUTION SEQUENCE

| Step | Action | File | Time Est. |
| :--- | :--- | :--- | :--- |
| 1 | Phase 1 Infrastructure: The Work Page | `the-work/page.tsx` | 1 session |
| 2 | Phase 2 Scenes 1–5: Hero through Timeline | `the-work/page.tsx` | 1 session |
| 3 | Phase 2 Scenes 6–11: Audiences through CTA | `the-work/page.tsx` | 1 session |
| 4 | Build verification: The Work Page | Terminal | Quick check |
| 5 | Phase 1 Infrastructure: About Page | `about/page.tsx` | 1 session |
| 6 | Phase 3 Scenes 1–5: Hero through Visual Break | `about/page.tsx` | 1 session |
| 7 | Phase 3 Scenes 6–10: Path through CTA | `about/page.tsx` | 1 session |
| 8 | Build verification: About Page | Terminal | Quick check |
| 9 | Cross-page coherence check | Both files | Final polish |

---

## COMPONENT CHEAT SHEET

| Pattern | Props / Classes | Used For |
| :--- | :--- | :--- |
| `Section size="content" background="transparent"` | Standard narrative scene | Most sections |
| `Section size="screen" background="transparent"` | Full-viewport isolation | Essence, Wholeness Quote |
| `Section size="lg" background="transparent"` | Tall narrative with timeline | Becoming Path, Timeline |
| `Container width="default"` | `max-w-7xl` | Standard content |
| `Container width="narrow"` | `max-w-4xl` | Focused text, CTAs |
| `Container width="wide"` | `max-w-[1400px]` | Full-bleed moments |
| `grid lg:grid-cols-[1fr_2fr]` | Asymmetric corridor | Most scenes |
| `grid lg:grid-cols-[2fr_1fr]` | Reversed corridor | The Calling |
| `lg:sticky lg:top-40` | Pinned label | All corridors |
| `lg:border-l lg:border-foreground/[0.09] lg:pl-16` | Right column anchor | All corridors |
| `border-t border-foreground/[0.07]` | Scene boundary | Between all scenes |
| `absolute top-8 right-8 text-[9px] tracking-[0.5em] text-foreground/[0.12]` | Section number | Every scene |
| `<Magnetic strength={0.3}>` + `<Button variant="brand-outline" size="xl">` | Premium CTA | All CTAs |

---

**This plan is ready for execution. Say the word and I will begin with Phase 1 + Phase 2 on The Work page.**
