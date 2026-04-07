"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from "framer-motion"
import Link from "next/link"
import { Magnetic } from "@/components/magnetic"

// Mobile immersive card component with parallax and blur effects
function MobileServiceCard({ service, index }: { service: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"]
  })

  // Parallax upward motion as user scrolls
  const y = useTransform(scrollYProgress, [0, 1], [80, -80])

  // Blur in/out effect
  const blurValue = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [8, 0, 0, 8])
  const filter = useMotionTemplate`blur(${blurValue}px)`

  // Opacity fade
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3])

  // Scale effect
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85])

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        filter,
        y,
        scale,
        backgroundColor: service.color
      }}
      className="min-h-screen flex flex-col justify-center items-center text-center p-8 border-t border-foreground/[0.05] relative"
    >
      <motion.div className="flex flex-col items-center w-full">
        <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-foreground/40 mb-12 block font-bold">
          0{index + 1} — {service.subtitle}
        </span>

        <h2 className="font-serif text-4xl md:text-5xl text-foreground tracking-tight mb-8 leading-tight">
          {service.title}
        </h2>

        <div className="space-y-3 mb-16 max-w-md">
          {service.lines.map((line: string, idx: number) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="font-serif text-lg md:text-xl text-foreground/80 italic leading-relaxed"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <Magnetic strength={0.2}>
          <Link
            href={service.url}
            className="group flex flex-col items-center gap-4"
          >
            <div className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500">
              <span className="font-sans text-xs">→</span>
            </div>
            <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-foreground/50 group-hover:text-foreground transition-colors duration-500 font-bold">
              {service.cta}
            </span>
          </Link>
        </Magnetic>
      </motion.div>
    </motion.div>
  )
}

const services = [
  {
    id: "life",
    title: "The Inward Path",
    subtitle: "Transformational Life Coaching",
    url: "/offerings/life-coaching",
    lines: ["You have held it together long enough.", "What wants to emerge has been waiting."],
    cta: "Enter the inward path",
    color: "oklch(0.96 0.02 85)", // Warm amber tint
  },
  {
    id: "leadership",
    title: "The Burden",
    subtitle: "Leadership Coaching",
    url: "/offerings/leadership-coaching",
    lines: ["You carry decisions others do not see.", "Clarity is no longer optional."],
    cta: "Step into clarity",
    color: "oklch(0.97 0.005 250)", // Cold crisp white/blue
  },
  {
    id: "creativity",
    title: "The Channel",
    subtitle: "Creativity Coaching",
    url: "/offerings/creativity-coaching",
    lines: ["The channel is blocked, not broken.", "The expression must move."],
    cta: "Free the channel",
    color: "oklch(0.95 0.03 310)", // Ethereal purple/pink
  },
  {
    id: "movement",
    title: "The Return",
    subtitle: "Movement Arts",
    url: "/offerings/movement-arts",
    lines: ["You have been living in your head.", "The body knows the way back."],
    cta: "Return to the physical",
    color: "oklch(0.95 0.02 145)", // Earthy green
  }
]

export function ImmersiveRouting() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Apply a smooth spring to the scroll progress so the horizontal pan feels fluid, not rigid
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Translate X for the horizontal pan (only used on Desktop)
  const xTranslate = useTransform(smoothProgress, [0, 1], ["0%", "-75%"])
  
  // Background color interpolation based on scroll position
  const backgroundColor = useTransform(
    smoothProgress,
    [0, 0.33, 0.66, 1],
    services.map(s => s.color)
  )

  return (
    <>
      {/* ═ MOBILE PARADIGM (Vertical Immersive) ═ */}
      <div className="w-full bg-background relative z-20 lg:hidden">
        <div className="py-24 text-center px-6">
          <p className="font-serif text-2xl text-foreground/50 italic">Where are you right now?</p>
        </div>

        {services.map((service, i) => (
          <MobileServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>

      {/* ═ DESKTOP PARADIGM (Horizontal pinned stage) ═ */}
      <section ref={containerRef} className="relative z-20 h-[400vh] w-full bg-background hidden lg:block">
        
        {/* Sticky container that holds the viewport */}
        <motion.div 
          className="sticky top-0 h-screen w-full overflow-hidden flex items-center"
          style={{ backgroundColor, transition: 'background-color 0.5s ease' }}
        >
          
          {/* Intro overlay text that fades out as you start scrolling through */}
          <motion.div 
            style={{ opacity: useTransform(smoothProgress, [0, 0.05], [1, 0]) }}
            className="absolute top-12 left-12 font-serif text-2xl text-foreground/30 italic pointer-events-none z-50"
          >
            You might already know where you are.
          </motion.div>

          {/* The 400vw wide sliding track */}
          <motion.div 
            className="flex h-full w-[400vw] relative"
            style={{ x: xTranslate }}
          >
            {services.map((service, index) => {
              
              // Calculate local progress for this specific slide to drive inner animations
              const slideStart = index * 0.33 - 0.2
              const slideEnd = index * 0.33 + 0.2
              const localOpacity = useTransform(smoothProgress, [slideStart, index * 0.33, slideEnd], [0, 1, 0])
              
              return (
                <div 
                  key={service.id} 
                  className="w-screen h-full flex flex-col justify-center items-center relative px-20 border-r border-foreground/[0.03] last:border-0"
                >
                  <motion.div style={{ opacity: localOpacity }} className="flex flex-col items-center w-full max-w-[1200px]">
                    
                    <div className="flex flex-col items-center mb-16">
                      <span className="w-px h-16 bg-foreground/10 mb-8" />
                      <span className="font-sans text-[11px] tracking-[0.5em] uppercase text-foreground/40 font-bold">
                        0{index + 1} — {service.subtitle}
                      </span>
                    </div>

                    <h2 className="font-serif text-[clamp(4rem,8vw,8rem)] text-foreground leading-[0.9] tracking-tighter mb-16 relative text-center">
                      {service.title}
                    </h2>

                    <div className="space-y-4 text-center mb-24 max-w-2xl">
                      {service.lines.map((line, i) => (
                        <p key={i} className="font-serif text-[clamp(1.5rem,3vw,3rem)] text-foreground/80 italic font-light leading-snug">
                          {line}
                        </p>
                      ))}
                    </div>

                    <Magnetic strength={0.3}>
                      <Link 
                        href={service.url}
                        className="group flex flex-col items-center gap-6"
                      >
                        <div className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                          <span className="font-sans text-xs">→</span>
                        </div>
                        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-foreground/50 group-hover:text-foreground transition-colors duration-500 font-bold">
                          {service.cta}
                        </span>
                      </Link>
                    </Magnetic>
                    
                  </motion.div>
                </div>
              )
            })}
          </motion.div>
          
          {/* Progress indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[200px] h-px bg-foreground/10 flex items-center">
            <motion.div 
              className="h-[2px] bg-foreground/50"
              style={{ 
                width: "100%",
                scaleX: smoothProgress,
                transformOrigin: "left"
              }}
            />
          </div>
          
        </motion.div>
      </section>
    </>
  )
}
