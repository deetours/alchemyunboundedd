# 🔥 ELITE MOBILE FLOATING NAV OUTLINE

## The Diagnosis & The Pivot
The user rightly pointed out that "hamburger" menus (the three lines) introduce friction. They require two taps to navigate (Open → Select), pulling the user out of the cinematic experience into a generic UI drawer.

**The Directive:** 
- Eliminate the hamburger icon completely.
- Eliminate the "drawer" (going inside another page/layer).
- Replicate the exact verbal labels used on the desktop.
- Implement a floating menu that remains visible and interactive *while scrolling*.

## The Architecture: "The Floating iOS Dock"
Since mobile screens lack the absolute width to accommodate 6 words side-by-side without crushing the typography, we will use a **Dynamic Floating Dock** placed at the bottom edge of the screen (in natural thumb reach), inspired by native iOS/visionOS interactions.

### 1. Structural Paradigm
- **Positioning:** The navigation will detach from the top and become a floating "pill" or "dock" pinned to the `bottom-6` of the viewport on mobile only. (On desktop, it remains at the top as usual).
- **Format:** A horizontal scrolling container (with scrollbars completely hidden). Users can smoothly swipe horizontally through the exact desktop words.
- **Glassmorphism:** The dock will have a heavy `backdrop-blur-xl` and a subtle translucent background (`bg-background/80`), ensuring text remains legible no matter what cinematic scene is playing behind it.

### 2. Interaction Design
- **Magnetic Snap:** As the user scrolls the dock left/right, it will utilize smooth scroll-snapping so words lock into the center or edge cleanly.
- **Active State:** The currently active page will be highlighted with a sharp, high-contrast indicator (e.g., pure white text vs greyed out inactive text) within the dock.
- **Scroll Response:** To preserve screen real-estate, the dock will gracefully translate downward and vanish when scrolling *down* (reading intent), and instantly pop back up the moment the user scrolls *up* (navigation intent).

### 3. The Implementation Steps (The Code Overhaul)
**Step 1: Destroy the Hamburger**
- Delete the three-line mobile button and the `<AnimatePresence>` modal completely from `components/navigation.tsx`.

**Step 2: Deploy the Floating Container**
- Build the new `md:hidden` structure: A fixed `div` at `bottom-4` spanning `w-[calc(100%-2rem)]`.
- Apply extreme rounding (`rounded-full`), border (`border-white/10`), and glassmorphism.

**Step 3: Horizontal Overflow & Typography**
- Map the exact `navLinks` list into a horizontal `flex` container featuring `overflow-x-auto` and `hide-scrollbar`.
- Use the identical desktop font (`font-sans tracking-wide text-xs md:text-sm`).

**Step 4: The Scroll Event Listener**
- Modify the existing scroll listener to track scroll *direction* (up vs down) to control the dock's `translateY` visibility state natively via `framer-motion`.

## End State
The site will feel less like a website and more like a compiled native mobile app. The words are always there, always swipable, incredibly fast, and completely frictionless.
