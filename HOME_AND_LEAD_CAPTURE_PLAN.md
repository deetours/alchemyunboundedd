# ELITE PRODUCT AUDIT: HOME PAGE PATHS & IMMERSIVE LEAD CAPTURE

## PART 1 — POST-HERO SERVICE DISCOVERY (HOME PAGE)

**CORE CONCEPT:** "The Four Doors" (Paths, not Services)
Instead of a grid or a list of "services", the post-hero section must feel like walking into a quiet room with four doors. The user doesn't choose a product; they recognize their own current state. 

**INTERACTION MODEL: Accordion / Expanding Horizontal Slices**
When the user scrolls past the cinematic hero, they encounter 4 stark vertical/horizontal slices. 
- Default state: Just 4 atmospheric words/titles (e.g., The Mind, The Weight, The Channel, The Body).
- Hover state: The slice expands, revealing a precise, cutting insight. The background color subtly shifts, and a magnetic arrow appears. 
- This replaces the standard "cards." It feels fluid, discovery-led, and physically engaging without being overwhelming.

**SERVICE PRESENTATION:**
1. **Transformational Coaching:**
   - *Trigger:* Life Transitions / Identity Shifts
   - *Micro-copy:* "You are not lost. Just... disconnected."
   - *Action:* "Explore the inward path →"
2. **Leadership Coaching:**
   - *Trigger:* Founders / Pressure
   - *Micro-copy:* "The loneliest position is the one everyone looks to. Pressure. Responsibility. Clarity."
   - *Action:* "Enter the space for leaders →"
3. **Creativity Coaching:**
   - *Trigger:* Blocked / Seeking Expression
   - *Micro-copy:* "Your art is not a chore. It is a channel. What wants to come through you?"
   - *Action:* "Free the expression →"
4. **Movement Arts:**
   - *Trigger:* Tension / Disconnection
   - *Micro-copy:* "The body holds everything the mind refuses to feel. Come back to the physical intelligence."
   - *Action:* "Return to the body →"

**VISUAL & MOTION:**
- Spacing: Massive. Fill the entire viewport so only one decision is on screen.
- Layout: 4 massive typographic bars that expand on hover.
- Motion: GSAP or Framer Motion spring transitions. Smooth expansion. Background color bleed matching the specific path's tone (cream, cold neutral, warm amber, earth tone).

---

## PART 2 — THE FINAL CONVERSION SCENE (EVERY SERVICE PAGE)

**THE FLAW:** Forcing an inspired user to click a CTA, wait for a new page load (`/begin`), and stare at a form kills emotional momentum. 
**THE FIX:** The end of the landing page *becomes* the Begin page. A quiet, progressive lead capture built directly into the bottom of `/offerings/life-coaching`, `/offerings/leadership-coaching`, etc.

**EXPERIENCE CONCEPT:** "The Quiet Landing"
The page ends. A massive hairline. A single statement: *"If something in you knows..."* 
No "Submit your details". No "Contact us for pricing". 
The form is integrated, minimal, conversational, and progressive (one question at a time).

**UX PSYCHOLOGY & INTERACTION:**
- A custom `<ProgressiveLeadCapture />` component.
- Step 1: "What should I call you?" (Name -> press Enter)
- Step 2: "Where can I reach you?" (Email -> press Enter)
- Step 3: "Optional: Your number, if you prefer WhatsApp." (Phone -> press Enter)
- Step 4 (Closure): "This has begun. I will be in touch shortly."
- **Why this works:** It leverages micro-commitments. By asking just for a name first, friction is near zero.

---

## IMPLEMENTATION ROADMAP

**PHASE 1: Lead Capture Component**
- Build a highly refined `InlineBeginForm` component that uses progressive reveal.
- Integrate this component at the bottom of the 4 offering pages, replacing the CTA buttons redirecting to `/begin`.

**PHASE 2: Home Page "Paths" Reconstruction**
- Remove current service list/cards from `app/page.tsx`.
- Implement an accordion/slice-based immersive path selector matching the "Four Doors" concept.
- Ensure perfect scroll physics and color bleeding.
