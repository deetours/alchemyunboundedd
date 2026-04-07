# ELITE HERO IMPLEMENTATION: THE MONOLITHIC BREATH
**Concept:** The environment breathing in. Slowing the user down immediately upon landing.
**Niche Application:** In Transformational Coaching, the biggest barrier is nervous system dysregulation (users are moving too fast, looking for quick fixes). This hero deliberately slows their heart rate and enforces presence before they can even read the copy.

---

## 1. EXACT ANIMATION SEQUENCE (FRAME-BY-FRAME)

### Frame 0 (Initial Load / Mount)
- **Background Image:** Set to `scale: 1.1`, opacity `0`, and an aggressive `blur(15px)`.
- **Primary Typography:** Y-axis offset `y: 40px`, opacity `0`.
- **Hairline / Button / Subhead:** Opacity `0`, no scale yet.

### Frame 1 (0.0s to 1.5s) — *The Intake*
- **Background Image:** Fades in from `opacity: 0` to `opacity: 1`. 
- **Effect:** The screen fills with a heavily blurred, abstract light space. It feels ambiguous but safe.

### Frame 2 (0.0s to 4.0s) — *The Focus & Grounding*
- **Background Image:** The blur slowly reduces from `15px` to `0px` over 4 entire seconds. The scale slowly drops from `1.1` to `1.0`.
- **Effect:** The user's eye physically relaxes as the abstract light resolves into the serene forest space.

### Frame 3 (0.0s to 2.8s) — *The Arrival of Truth*
- **Primary Headline:** While the background is still resolving, the headline *"The Architecture of Life, Body & Creative Freedom"* rises heavily (`y: 40` to `0`) and fades in. The extreme easing (`[0.22, 1, 0.36, 1]`) makes it feel like a heavy stone locking into place.

### Frame 4 (0.8s to 2.6s) — *The Boundary*
- **Hairline Rule:** The thin horizontal rule `scaleX` expands from the center, separating the massive headline from the supportive copy.

### Frame 5 (1.2s to 3.2s) — *The Whisper*
- **Subhead:** *"This is where the alchemy begins."* fades in. Because it is delayed by 1.2s, the user must read the headline first.

### Frame 6 (1.8s to 3.3s) — *The Invitation*
- **CTA Button & Scroll Indicator:** The "Enter the space" button and the vertical scrolling line emerge last. The user is not allowed to click away until they have sat with the primary message.

---

## 2. EXACT LAYOUT & ARCHITECTURE
- **Z-Index Strategy:** The image mask sits at `z-0` beneath everything. The text container is `z-10` and `relative`.
- **Masking:** A massive circular `radial-gradient` mask on the image. Edges fade into pure cream (`oklch(0.98 0.005 85)`), seamlessly blending the photograph's light rays into the page's HTML background.
- **Typography Scale:** `text-4xl md:text-6xl lg:text-[5rem] xl:text-[6.5rem]`. It is huge, unignorable, and highly tracked (`tracking-tight`) to increase the density of the words.

---

## 3. FINAL HERO COPY (LOCKED)
We maintain the exact wording, leaning entirely on the pacing for the emotional shift:

> **Eyebrow (Tiny, max-spaced):** HARISH NARAYAN — COACHING FROM THE INSIDE OUT
> 
> **Headline (Massive, heavy):** The Architecture of Life, Body,
<br/> *& Creative Freedom*
>
> **Subhead (Soft, grounded):** This is where the alchemy begins.
>
> **Action (Quiet):** Enter the space

---

## 4. MOBILE ADAPTATION & RESPONSIVENESS
The cinematic feel often breaks on mobile if text drops awkwardly. 
- **Scale:** The font drops gracefully from `6.5rem` to `4xl` on mobile. The `leading-[1.05]` ensures it remains blocky and tight.
- **Vignette Tightening:** The `radial-gradient` mask on the image must stay centered. Because mobile screens are vertical, the mask feels like a tall "pillar of light" rather than a sweeping horizon, supporting the vertical scroll motion.
- **Scroll Exhaust:** Mobile scrolling is inherently faster. The hardware acceleration (`transform: translateZ(0)`) guarantees that as the user thumbs down, the image blurs smoothly without frame dropping, maintaining the premium illusion.

---

## 5. SCROLL BEHAVIOR (THE EXHAUST)
Instead of just leaving the hero section behind, scrolling acts as a scene transition.
- **Action:** As the user scrolls through the first 50% of the screen height, the background image aggressively blurs again (from `0px` back up to `10px`).
- **Effect:** The image literally dissolves as the user moves into Section 2 ("The Mirror"). It prevents the homepage from feeling like a static collage, and instead makes it feel like an unbroken camera pan through a singular environment.
