# ELITE UX AUDIT & REBUILD: POST-HERO RECOGNITION SCENE

## PART 1 — BRUTAL AUDIT

**Current "Four Doors" Implementation:** 
- *What is it trying to do?* Present 4 services as clickable horizontal/vertical slices that expand on hover.
- *Why does it feel wrong?* Hover-expanding physics interrupt reading flow. It forces the user to drag a cursor to discover what the offering actually is, turning a moment of reflection into a UI mini-game.
- *UX Laws Broken:* Law of Proximity (context is hidden behind a hover state). Fitts's Law (moving targets as accordion slices collapse and expand).
- *Immersion Break:* It abruptly shifts the site from a "cinematic, read-driven narrative" into a "dashboard UI selection." 

## PART 2 — THE ROOT PROBLEM

The real issue is that it is **choice-based UI** instead of a **recognition-based experience**. 
It asks: *“Which one do you want to click?”* 
Instead, it needs to ask: *“Which one of these are you?”*
It was too complex, heavily animated, and inherently *gimmicky*. Leaders and transformational clients do not want to "play" with the UI; they want to be seen by it.

---

## PART 3 — NEW EXPERIENCE CONCEPT: "THE MIRROR SCROLL"

**Concept:** "Where You Are"
Instead of a grid, a timeline, or an accordion. Just four massive, quiet statements stacked vertically. As the user scrolls, they encounter each state in complete isolation. The background color softly crossfades. There are no boxes, no borders, no cards. The text *is* the interface.

**Objective:**
→ The user feels seen.
→ No pressure interaction (no hovering required).
→ Reading is the only interaction needed.

---

## PART 4 — STORY-LED SERVICE DISCOVERY

**Transformational Life Coaching**
> "You have built the life you planned.
> Yet something sits quietly beneath it.
> Not outside.
> Within."

**Leadership Coaching**
> "You carry decisions others do not see.
> The isolation of the top is real.
> Clarity is no longer optional. It is everything."

**Creativity Coaching**
> "There is something inside you...
> that has not been expressed yet.
> Not a hobby. A channel."

**Movement Arts**
> "You have been living in your head.
> Carrying tension that does not belong to you.
> The body knows the way back."

---

## PART 5 — INTERACTION REDESIGN

**Removal:** 
- Delete hover expansion. Delete background color shifts based on cursor position. Delete flex-grow physics. 

**Replacement: "Scroll-Linked Transparency"**
- The interaction is entirely invisible. 
- As a user scrolls down, a block of text enters the center of the viewport, hits 100% opacity, and gently fades as they scroll past.
- It feels like walking through an art gallery, stopping at four distinct paintings. The only action required is scrolling.

---

## PART 6 — VISUAL REDESIGN (APPLE LEVEL)

**Layout:** Single column. Vertically centered. Full viewport height (`100vh`) dedicated to *each* statement so they never compete for attention.
**Spacing:** Obscene amounts of whitespace. 
**Typography:** Emphasized but restrained. Serif for the story. Sans-serif metadata for the tiny invisible link.
**Removal of Noise:** Zero borders, no cards, no decorative hairlines inside the text block.

---

## PART 7 — MOTION LANGUAGE

- **Scroll Reveal Only:** Text fades in line-by-line as it approaches the center of the screen.
- **Speed:** Slow, tethered explicitly to the scroll wheel.
- **Avoid:** Aggressive snapping, scale jumps, or positional shifting. The text stays perfectly still; only opacity and a microscopic Y-translate changes.

---

## PART 8 — NAVIGATION FLOW

Instead of a giant button, the navigation is subtle and inevitable. 
Below each story chunk, a quiet, hairline arrow and text:
> "Explore this path →"

The entire 100vh block does not need to be clickable, just the elegant text link at the base of the thought.

---

## PART 9 — UX PSYCHOLOGY

**Recognition over action.** 
By forcing the user to scroll through all four states one by one, we eliminate the paradox of choice. They read state 1. Is it me? No. Scroll. State 2. Is it me? Yes. They stop. 
This reduces cognitive load to zero and replaces UI navigation with emotional discovery.

---

## IMPLEMENTATION DIRECTIVE

1. Create a new component `components/recognition-paths.tsx`.
2. Implement the `useScroll` + `useTransform` logic to fade these 4 "paintings" in and out.
3. Replace `<PathsAccordion />` with `<RecognitionPaths />` in `app/page.tsx`.
