# ⚡ ELITE AUDIT & REBUILD PLAN: NAVIGATION SYSTEM

## CORE OBJECTIVE
Create an Apple-level, deeply immersive navigation architecture that feels like a seamless "control layer" rather than a utility menu. It must prioritize user agency, spatial orientation, and zero-friction transitions without breaking the cinematic tone of the brand.

---

## PART 1 — MOBILE MENU (IMMERSIVE REDESIGN)

### 1. Experience Concept: "The Spatial Quiet Room"
The mobile menu is not a list of links that slides down. It is a full-screen, atmospheric layer that steps the user *out* of the narrative timeline and into a quiet control space. It must feel like entering a private soundproof room to make a decision.

### 2. Structure & Layout
*   **Massive Topography:** Using `clamp(3rem, 10vw, 5rem)` serif font. Links are no longer small utilities; they are giant, confidence-inducing thresholds.
*   **Layout:** Centered vertical stack with immense breathing room. A strict, sequential reading order: Recognition (The Work) → Action (Offerings) → Authority (Leaders/Voices).
*   **The Container:** Full screen `100dvh` to ensure zero mobile browser toolbar awkwardness.

### 3. Interaction Design
*   **The Open:** Not a rigid slide-in. It will use a staggered stagger-children GSAP-style stagger where the background blurs deeply, and the items drift up into place.
*   **The Close:** A subtle recession into the background before routing executes, preventing "flashy" page loads.
*   **Hover states (touch hold):** Subtle shifts in spacing or tracking on focus. 

### 4. Motion Design
*   **Cinematic Softness:** Fast slides feel cheap. We will use a `duration: 0.7, ease: [0.32, 0.72, 0, 1]` (Apple's custom easing curve) to create movement that feels heavy and deliberate, not flicky.
*   **Background:** Intense `backdrop-blur-xl` combined with a 90% opacity dark overlay to completely silence the site underneath without entirely hiding it.

---

## PART 2 — DESKTOP NAVIGATION (STICKY SYSTEM FIX)

### 1. The Context & Failure
On deep-scroll pages (like The Work), the standard fixed navigation either breaks immersion by always blocking the top of the viewport or disappears incorrectly due to layering/scroll contexts. 

### 2. Sticky Navigation Design: Option B (Smart-Hide)
**Decision:** We will use **Smart-Hide (Scroll Directional)**. 
*   **Scroll Down:** The menu smoothly translates `y: -100%` and hides. This gives the user 100% of the viewport for narrative immersion.
*   **Scroll Up (even 1px):** The menu instantly and softly drops back down, granting immediate control.

### 3. Visual Behavior
*   **Top of Page:** Totally transparent background. It blends perfectly into the Hero.
*   **Scrolled (When Visible):** It assumes a `backdrop-blur-md` glassmorphism card structure. It detaches slightly from the top edge (e.g., `top-4`) and floats subtly, framing the content without crushing it.

### 4. Consistency System
The menu will be isolated into a strict `<Navigation />` client component that manages its own intersection observers and scroll state. This guarantees it works identically across a stark white page (`Leadership`) or a pitch-black cinematic timeline (`The Work`).

---

## PART 3 — IMPLEMENTATION ROADMAP

*   **Phase 1 — Smart-Hide Desktop Logic:** Implement `useScroll` and `useMotionValueEvent` to track scroll velocity/direction accurately, replacing the static `fixed top-0` setup.
*   **Phase 2 — The Floating Glass State:** Redesign the Desktop visual to detach as a floating pill when scrolled, rather than spanning 100% viewport width.
*   **Phase 3 — Mobile Spatial Menu:** Destroy the traditional mobile hamburger array. Build the full-screen atmospheric "Quiet Room," implementing the Apple easing curve for the menu list items.
*   **Phase 4 — Routing Flow:** Integrate deliberate closing sequences when a user taps a mobile link to ensure the exit feels just as good as the open.
