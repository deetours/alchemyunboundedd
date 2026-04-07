# PRODUCT SPEC: IMMERSIVE HORIZONTAL ROUTING (CONCEPT 1)

## 1. EXACT LAYOUT STRUCTURE
**The Engine (Desktop):**
- A vertical wrapper `div` set to `h-[400vh]` to act as a scroll-jack track.
- Inside the wrapper, a `sticky top-0 h-screen w-full` container acts as the camera viewport.
- Inside the camera, a massive flex container set to `w-[400vw] h-full` holds the 4 service "stages."
- Each stage exactly `100vw`, ensuring only one service is visible at a time.

## 2. EXACT MOTION BEHAVIOR
**The Panning Camera:**
- As the user scrolls down the `400vh` track, the vertical `scrollYProgress` (0 to 1) is interpolated to translate the horizontal stage from `x: "0%"` to `x: "-75%"`.
- This translation is piped through a Framer Motion `useSpring(progress, { stiffness: 100, damping: 30 })` to ensure the movement feels fluid and cinematic, never jittery.

**The Environment Bleed:**
- The background color of the viewport is hooked to the same scroll progress, smoothly cross-fading:
  - 0% (Life Coaching) = Warm Amber `oklch(0.96 0.02 85)`
  - 33% (Leadership) = Cold White `oklch(0.97 0.005 250)`
  - 66% (Creativity) = Ethereal Pink `oklch(0.95 0.03 310)`
  - 100% (Movement) = Earth Green `oklch(0.95 0.02 145)`

## 3. EXACT INTERACTION STATES
- **Hover on Service CTA:** A subtle magnetic expansion via the `Magnetic` component. The target circle fills with the foreground color, and the microscopic "Explore this path" text brightens.
- **Scroll Progression Line:** At the bottom center of the screen, a thin hairline acts as a tracker, scaling horizontally (`scaleX`) from 0 to 1 as the user traverses the four states.

## 4. STORYTELLING LINES (THE EMOTIONAL CUES)
Instead of paragraphs, we deploy highly emotional 1-2 lines in massive `clamp(1.5rem, 3vw, 3rem)` italic typography:

*   **Life Coaching:** "You have held it together long enough. What wants to emerge has been waiting."
*   **Leadership:** "You carry decisions others do not see. Clarity is no longer optional."
*   **Creativity:** "The channel is blocked, not broken. The expression must move."
*   **Movement Arts:** "You have been living in your head. The body knows the way back."

## 5. DESKTOP VS MOBILE BEHAVIOR
**The Problem with Mobile:**
Horizontal scroll-jacking on mobile destroys touch navigation. It traps swiping fingers and breaks native browser physics.
**The Solution (Graceful Downgrade):**
- The component uses a `resize` listener and `isMobile` state flag.
- **If `< 1024px`:** The `400vh` wrapper vanishes. The horizontal track is destroyed. In its place, 4 consecutive `100vh` strictly vertical `flex-col` panels map to the 4 services, hardcoded with their specific background colors.
- Users naturally swipe down through 4 full-screen immersive cards. It achieves the exact same emotional progression without breaking UX.

## 6. TRANSITION INTO NEXT SECTION
- Once the scroll progress hits `1` (Movement Arts), the `400vh` wrapper ends.
- The sticky pin automatically unlatches.
- The user drops cleanly into **Scene 2: Recognition ("The Mirror")** seamlessly.
