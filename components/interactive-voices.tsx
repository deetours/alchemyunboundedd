"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion"

export const testimonials = [
  {
    quote: "Working with Harish has been one of the most transformative experiences of my life.",
    name: "Kapildev Verma",
    role: "Head - Client Servicing, Investment Firm",
    location: "India",
  },
  {
    quote: "Each of our sessions is the discovery of a new location on the map of my own inner world.",
    name: "Katerina Svetkova",
    role: "Creative Director & Dancer",
    location: "Russia",
  },
  {
    quote: "After a year and half of receiving life coaching, I found the strength and clarity to completely change my life.",
    name: "Katy Haldiman",
    role: "Healthcare Professional",
    location: "US",
  },
  {
    quote: "He coaches with his heart, life wisdom, and originality in a way you feel completely taken care of.",
    name: "Jill Badonsky",
    role: "Creator, Kaizen-Muse Creativity Coaching",
    location: "US",
  },
  {
    quote: "Harish's approach instilled in me a sense of body awareness and self-confidence.",
    name: "Bharath",
    role: "Movement Practitioner",
    location: "US",
  }
]

function VoiceScene({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  
  // Track scroll exactly when this specific quote enters and leaves the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 10%"]
  })

  // Smoothly fade in and out. Peak opacity in the center.
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.1, 1, 1, 0.1])
  
  // Blur out when it's entering or leaving. Sharp in the center.
  const blurValue = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [15, 0, 0, 15])
  const filter = useMotionTemplate`blur(${blurValue}px)`

  // Slight parallax upward movement as user scrolls down
  const y = useTransform(scrollYProgress, [0, 1], [80, -80])

  // Alternate alignment: Evens on the left, Odds on the right
  const isLeft = index % 2 === 0

  return (
    <div 
      ref={ref} 
      className="min-h-[70vh] flex items-center relative z-10 w-full"
    >
      <motion.div 
        style={{ opacity, filter, y }}
        className={`w-full max-w-[900px] px-6 md:px-12 ${isLeft ? "mr-auto text-left" : "ml-auto text-right md:text-left"}`}
      >
        <p className="font-serif text-[clamp(2rem,5vw,4.5rem)] text-white/95 leading-[1.2] italic tracking-tight mb-12 drop-shadow-xl">
          "{testimonial.quote}"
        </p>

        <div className={`mt-auto flex flex-col ${isLeft ? "items-start" : "items-end md:items-start"}`}>
          <div className="w-12 h-px bg-primary/40 mb-6" />
          <p className="font-sans text-sm md:text-lg font-bold text-primary tracking-[0.2em] uppercase">
            {testimonial.name}
          </p>
          <p className="font-sans text-xs md:text-sm text-white/40 mt-2 uppercase tracking-[0.2em]">
            {testimonial.role} <span className="mx-2 opacity-30">—</span> {testimonial.location}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export function InteractiveVoices() {
  const sectionRef = useRef<HTMLDivElement>(null)

  // Scoped scroll tracking for the entire cinematic wrapper
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 60%", "end 40%"]
  })

  // Dynamic lightswitch transitions to deep cinematic dark green
  const darkOverlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0]
  )

  return (
    <section 
      ref={sectionRef}
      className="w-full relative overflow-hidden"
    >
      {/* 
        LOCAL NIGHTFALL (DARK GREEN): Managed exclusively within the component to avoid global UX leaks.
        Color is deep forest/charcoal green oklch(0.12 0.02 145) to match the cinematic tone of the brand.
      */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{ 
          opacity: darkOverlayOpacity,
          backgroundColor: "oklch(0.12 0.02 145)" 
        }}
      />

      {/* Subtle abstract ambient light blobs in the background to prevent it from looking completely flat */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ 
          opacity: darkOverlayOpacity,
          background: "radial-gradient(ellipse at 80% 20%, oklch(0.2 0.04 145 / 0.3) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, oklch(0.25 0.03 85 / 0.15) 0%, transparent 50%)"
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10 max-w-[1400px] mx-auto py-32 md:py-64">
        
        {/* Intro */}
        <motion.div 
          style={{ opacity: darkOverlayOpacity }}
          className="flex flex-col items-center justify-center text-center mb-64"
        >
          <h2 className="font-sans text-[12vw] md:text-[8vw] text-white/[0.04] tracking-tighter uppercase font-bold select-none whitespace-nowrap leading-none">
            Voices
          </h2>
          <h2 className="absolute font-sans text-xs md:text-sm text-primary tracking-[0.4em] uppercase font-bold">
            Those Who Crossed the Threshold
          </h2>
        </motion.div>

        {/* The Spatial "River" of Voices */}
        <div className="flex flex-col w-full relative z-20">
          {testimonials.map((testimonial, index) => (
            <VoiceScene key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  )
}
