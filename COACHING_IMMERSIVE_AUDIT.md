# BRUTAL AUDIT: WHY THE LIFE COACHING PAGE STILL FEELS FLAT

## The Core Problem
The page uses the exact same visual DNA as every other page on the site: cream background → ScrollReveal text → hairline borders → section numbers. It is architecturally identical to the homepage but with less content. It feels like **scrolling on a piece of paper** because it IS scrolling on a piece of paper. There is zero environmental change as you move through it.

## What World-Class Immersive Pages Do Differently

### 1. ENVIRONMENTAL TRANSFORMATION (The page CHANGES as you scroll)
The homepage does this — background color shifts from cream → dark → cream. The Life Coaching page does NOT. It is a static cream rectangle from top to bottom. 
**Fix:** Scroll-linked background color transitions unique to this page.

### 2. PARALLAX DEPTH LAYERS (Creates the illusion of 3D space)
Currently: every element sits on the same flat plane. Nothing moves at a different speed.
**Fix:** Background elements that move slower than foreground text, creating physical depth.

### 3. SCROLL-DRIVEN SCALE SHIFTS (Elements that GROW as you approach them)
Currently: text fades in at a fixed size and stays there forever.
**Fix:** Key headline moments that scale from 80% → 100% as they enter the viewport center, creating a feeling of approaching something important.

### 4. CINEMATIC IMAGERY (The page has visual texture, not just text)
Currently: zero images. Pure text on cream. Every section looks identical.
**Fix:** Use the existing forest/nature assets as subtle, masked environmental layers between sections. Not as "hero images" but as atmospheric depth planes.

### 5. CURSOR-REACTIVE ENVIRONMENT (The space responds to YOU)
The homepage has this (ambient cursor glow). The Life Coaching page does NOT.
**Fix:** Add the ambient cursor-following gradient to make the environment feel alive.

### 6. A THEATRICAL MOMENT (One section that stops you dead)
Currently: the page is a smooth, even flow of similar-sized text. Nothing surprises.
**Fix:** A full-screen "breath" section — massive typography, vignette overlay, forced pause — like Scene 4 on the homepage.

---

## IMPLEMENTATION PLAN

### Phase 1: Scroll-Linked Environmental Color Bleed
Add `useScroll` + `useTransform` to shift the background through warm cream tones, with one dramatic moment where it deepens to a warm earth tone behind the Voices section.

### Phase 2: Ambient Cursor Glow
Port the homepage's mouse-tracking radial gradient system to this page so the light follows the user's cursor.

### Phase 3: Cinematic Image Layer in Hero
Add the forest image (already in `/public`) as a masked, low-opacity background layer in the hero — identical treatment to homepage but at even lower opacity for subtlety.

### Phase 4: The Theatrical Breath (Full-Screen Interstitial)
Insert a full-viewport pause between "The Essence" and the "Journey Timeline" — a single massive line of text with a vignette darkening effect, forcing the user to stop and feel.

### Phase 5: Parallax Text Scaling
Apply `useScroll` per-section to create scale-up effects on the three journey steps (01, 02, 03) so they grow slightly as they enter viewport center.

### Phase 6: Scroll Progress Indicator
A thin, elegant vertical line on the left edge that fills as the user scrolls, giving a sense of progression through the journey.
