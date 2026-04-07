"use client"

import { useLenis } from "@studio-freight/react-lenis"
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate, useSpring } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { LineReveal } from "@/components/line-reveal"
import { Section, Container } from "@/components/ui/section"
import { Magnetic } from "@/components/magnetic"
import { Button } from "@/components/ui/button"
import { ProgressiveForm } from "@/components/progressive-form"
import Link from "next/link"

const lifeCoachingTestimonials = [
  {
    quote:
      "Working with Harish has been one of the most transformative experiences of my life. Harish's approach is not formulaic—it's deeply personal, intuitive, and anchored in truth.",
    name: "Kapildev Verma",
    role: "Head - Client Servicing, Marcellus Investment Managers",
    location: "India",
  },
  {
    quote:
      "Harish has a remarkable ability to connect you with your inner wisdom, guiding you to answers you already have within.",
    name: "M.R.",
    role: "Founder, Personal Growth Company",
    location: "US",
  },
  {
    quote:
      "After a year and half of receiving life coaching services from Harish, I found the strength and clarity to completely change my life.",
    name: "Katy Haldiman",
    role: "Health Care Professional & Photographer",
    location: "US",
  },
  {
    quote:
      "Harish helped me identify hidden doubts, their root causes, creating a space to be myself, transforming my personal and professional life.",
    name: "Aashish Agrawal",
    role: "Chief Business Officer, Reddy Realty",
    location: "India",
  },
]

export default function LifeCoachingPage() {
  const heroRef = useRef<HTMLElement>(null)
  const heroLenisScroll = useMotionValue(0)

  useLenis(({ scroll }) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    const heroHeight = heroRef.current.offsetHeight
    const progress = Math.min(Math.max(-rect.top / heroHeight, 0), 1)
    heroLenisScroll.set(progress)
  })

  // ── GLOBAL SCROLL PROGRESS (for environmental color bleed) ──
  const { scrollYProgress } = useScroll()

  // Environmental Color Bleed — the page SHIFTS as you descend
  const pageBg = useTransform(
    scrollYProgress,
    [0, 0.12, 0.22, 0.35, 0.50, 0.65, 0.80, 0.95],
    [
      "oklch(0.98 0.005 85)",   // cream — hero
      "oklch(0.96 0.008 85)",   // slightly warmer — essence
      "oklch(0.98 0.005 85)",   // back to cream — breath
      "oklch(0.94 0.015 75)",   // warm sand — journey timeline
      "oklch(0.98 0.005 85)",   // reset
      "oklch(0.93 0.012 80)",   // warm amber — voices  
      "oklch(0.98 0.005 85)",   // cream — pricing
      "oklch(0.96 0.01 85)",    // soft close
    ]
  )

  // Hero scroll dynamics
  const heroBlur = useTransform(heroLenisScroll, [0, 0.5], [0, 12])
  const heroOpacity = useTransform(heroLenisScroll, [0, 0.4], [1, 0])
  const heroScale = useTransform(heroLenisScroll, [0, 0.5], [1, 1.05])
  const heroImageOpacity = useTransform(heroLenisScroll, [0, 0.4], [0.2, 0])
  const scrollIndicatorOpacity = useTransform(heroLenisScroll, [0, 0.12], [1, 0])

  // ── AMBIENT CURSOR (the environment follows you) ──
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
  const ambientBg = useMotionTemplate`radial-gradient(circle at ${mouseX}% ${mouseY}%, oklch(0.45 0.08 145 / 0.07) 0%, transparent 40%)`

  // ── SCROLL PROGRESS BAR ──
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <>
      <Navigation />
      
      <motion.main
        className="relative min-h-screen overscroll-none"
        style={{
          backgroundColor: pageBg,
          color: "oklch(0.25 0.01 60)",
          willChange: "background-color, color",
          transform: "translateZ(0)",
        }}
      >
        {/* ── SCROLL PROGRESS INDICATOR (left edge) ── */}
        <div className="fixed left-0 top-0 bottom-0 w-px z-[100] hidden lg:block">
          <motion.div 
            className="w-full bg-primary/30 origin-top"
            style={{ height: progressHeight }}
          />
        </div>

        {/* ── AMBIENT CURSOR GLOW (follows mouse) ── */}
        <motion.div
          className="fixed inset-0 pointer-events-none z-[1]"
          style={{
            background: ambientBg,
            willChange: "background",
            transform: "translateZ(0)",
          }}
        />

        <div className="relative z-10">
          
          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* SCENE 1: THE DESCENT (Cinematic Hero with Image)                    */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
            
            {/* Text layer */}
            <div className="relative z-10 w-full max-w-[1000px] mx-auto px-8 md:px-12 text-center">
              <motion.div style={{ opacity: heroOpacity }}>
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  <Link
                    href="/offerings"
                    className="text-primary font-sans text-[10px] tracking-[0.4em] uppercase mb-12 inline-flex items-center gap-4 hover:text-foreground transition-colors duration-500"
                  >
                    <span>←</span> Return to Offerings
                  </Link>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  className="font-serif text-5xl md:text-7xl lg:text-[6rem] xl:text-[7rem] text-foreground leading-[1.0] tracking-tight mb-12"
                >
                  Transformational
                  <br />
                  <span className="italic text-primary">Life Coaching</span>
                </motion.h1>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                  className="w-16 h-px bg-primary/25 mx-auto mb-12 origin-left"
                />

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 1.4 }}
                  className="font-sans text-lg md:text-xl text-muted-foreground tracking-wide max-w-xl mx-auto"
                >
                  For those ready to look deeper. For the seekers who sense there is more beneath the surface.
                </motion.p>

                {/* Scroll indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2.2 }}
                  style={{ opacity: scrollIndicatorOpacity }}
                  className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none"
                >
                  <span className="font-sans text-[9px] tracking-[0.45em] uppercase text-foreground/30">Scroll</span>
                  <motion.div
                    animate={{ y: [0, 7, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    className="w-px h-8 bg-gradient-to-b from-foreground/20 to-transparent"
                  />
                </motion.div>

              </motion.div>
            </div>

            {/* Cinematic background image — masked, subtle */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                style={{
                  scale: heroScale,
                  opacity: heroImageOpacity,
                  willChange: "transform, opacity, filter",
                  transform: "translateZ(0)",
                }}
                className="w-full h-full"
              >
                <motion.div
                  initial={{ filter: "blur(20px)", scale: 1.15, opacity: 0 }}
                  animate={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
                  transition={{ duration: 4.5, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full"
                  style={{
                    WebkitMaskImage: "radial-gradient(ellipse 70% 70% at center, black 30%, transparent 70%)",
                    maskImage: "radial-gradient(ellipse 70% 70% at center, black 30%, transparent 70%)",
                  }}
                >
                  <Image
                    src="/golden-light-through-trees-peaceful-transformation.jpg"
                    alt="Golden light through trees"
                    fill
                    priority
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Threshold line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-foreground/[0.07]" />
          </section>

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* SCENE 2: THE CORE (Essence & Recognition)                           */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <Section size="lg" className="border-t border-foreground/[0.07] relative z-10">
            <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
              001
            </div>

            <Container width="narrow" className="space-y-32">
              <div>
                <ScrollReveal>
                  <h3 className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary mb-10 block font-bold">
                    The Essence
                  </h3>
                </ScrollReveal>
                <LineReveal
                  lines={[
                    "Conversations that go beyond goals",
                    "and action plans.",
                    "",
                    "Sessions held in presence,",
                    "where insights emerge naturally",
                    "and lasting change takes root."
                  ]}
                  className="text-left"
                  lineClassName="font-serif text-3xl md:text-5xl text-foreground leading-[1.3] tracking-tight"
                  focus={true}
                />
              </div>

              <div>
                <ScrollReveal>
                  <h3 className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary mb-10 block font-bold">
                    Who This Is For
                  </h3>
                </ScrollReveal>
                <LineReveal
                  lines={[
                    "Those who sense something stirring",
                    "beneath the surface.",
                    "",
                    "Those ready to meet themselves more fully,",
                    "to untangle old patterns,",
                    "and to discover what wants to emerge."
                  ]}
                  className="text-left"
                  lineClassName="font-serif text-3xl md:text-5xl text-foreground leading-[1.3] tracking-tight"
                  focus={true}
                />
              </div>
            </Container>
          </Section>

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* SCENE 3: THE THEATRICAL BREATH (Full-screen interstitial)           */}
          {/* This is the moment that separates "nice page" from "experience"     */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <Section size="screen" background="transparent" className="relative z-10 border-t border-foreground/[0.07]">
            {/* Vignette: darkened edges pull focus to center */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 65% 55% at center, transparent 35%, oklch(0.12 0.02 145 / 0.06) 100%)",
              }}
            />

            {/* Top centered hairline */}
            <div className="absolute top-0 left-0 right-0 flex justify-center">
              <div className="w-20 h-px bg-foreground/[0.09]" />
            </div>

            <Container width="wide" className="text-center overflow-hidden flex flex-col justify-center items-center">
              <LineReveal
                as="h2"
                reveal="blur"
                lines={[
                  "This is not a repair.",
                  "",
                  "It is a return.",
                  "",
                  "You were never broken.",
                  "",
                  "You were never behind.",
                  "",
                  "You are becoming."
                ]}
                lineClassName="font-serif text-[12vw] md:text-[8vw] text-foreground leading-[1.0] tracking-tighter italic"
                focus={true}
              />
            </Container>

            {/* Bottom centered hairline */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              <div className="w-20 h-px bg-foreground/[0.09]" />
            </div>
          </Section>

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* SCENE 4: THE REALITY (Vertical Timeline — deep scroll)             */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <Section size="lg" className="border-t border-foreground/[0.07] relative z-10" background="transparent">
            <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
              002
            </div>

            {/* Ghost watermark for depth */}
            <div className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden">
              <span className="font-serif text-[22vw] text-foreground/[0.02] tracking-tighter font-bold leading-none whitespace-nowrap pl-6">
                Journey
              </span>
            </div>

            <Container width="default" className="grid lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-24">
              <ScrollReveal>
                <h2 className="font-sans text-[10px] text-primary lg:sticky lg:top-40 mb-16 lg:mb-0 tracking-[0.3em] uppercase font-bold">
                  What The Journey Feels Like
                </h2>
              </ScrollReveal>

              <div className="relative lg:border-l lg:border-foreground/[0.09] lg:pl-16 space-y-32 md:space-y-[50vh] pb-[15vh]">
                <div className="absolute left-0 top-4 bottom-4 w-px bg-foreground/[0.04] hidden lg:block -translate-x-16" />

                <div className="grid lg:grid-cols-[100px_1fr] gap-8 items-start">
                  <ScrollReveal>
                    <span className="font-serif text-6xl md:text-8xl text-primary/[0.08] lg:sticky lg:top-40 block italic">01</span>
                  </ScrollReveal>
                  <ScrollReveal variant="fade-scale">
                    <p className="text-foreground text-3xl md:text-5xl lg:text-[3.5rem] font-serif leading-[1.25] tracking-tight">
                      A space where you can finally speak the things you haven't said aloud—without judgment, without fixing.
                    </p>
                  </ScrollReveal>
                </div>

                <div className="grid lg:grid-cols-[100px_1fr] gap-8 items-start">
                  <ScrollReveal>
                    <span className="font-serif text-6xl md:text-8xl text-primary/[0.08] lg:sticky lg:top-40 block italic">02</span>
                  </ScrollReveal>
                  <ScrollReveal variant="fade-scale" delay={0.1}>
                    <p className="text-foreground text-3xl md:text-5xl lg:text-[3.5rem] font-serif leading-[1.25] tracking-tight">
                      Conversations that illuminate blind spots gently, helping you see patterns you've been living unconsciously.
                    </p>
                  </ScrollReveal>
                </div>

                <div className="grid lg:grid-cols-[100px_1fr] gap-8 items-start">
                  <ScrollReveal>
                    <span className="font-serif text-6xl md:text-8xl text-primary/[0.08] lg:sticky lg:top-40 block italic">03</span>
                  </ScrollReveal>
                  <ScrollReveal variant="fade-scale" delay={0.1}>
                    <p className="text-foreground text-3xl md:text-5xl lg:text-[3.5rem] font-serif leading-[1.25] tracking-tight">
                      A reconnection to your own inner wisdom, the quiet knowing that has always been there, waiting.
                    </p>
                  </ScrollReveal>
                </div>
              </div>
            </Container>

            {/* Mid-page CTA — appears naturally after the depth journey */}
            <Container width="prose" className="text-center mt-16 md:mt-0">
              <ScrollReveal>
                <div className="flex items-center gap-8 mb-10 justify-center">
                  <div className="h-px flex-1 max-w-[80px] bg-foreground/[0.07]" />
                  <span className="font-sans text-[9px] tracking-[0.5em] uppercase text-foreground/30">
                    a beginning
                  </span>
                  <div className="h-px flex-1 max-w-[80px] bg-foreground/[0.07]" />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <Magnetic strength={0.3}>
                  <Button variant="brand-outline" size="xl" asChild>
                    <Link href="#begin">Open a conversation</Link>
                  </Button>
                </Magnetic>
              </ScrollReveal>
            </Container>
          </Section>

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* SCENE 5: THE VOICES (Typographic Testimonials)                      */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <Section size="content" className="border-t border-foreground/[0.07] relative z-10" background="transparent">
            <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
              003
            </div>

            <Container width="default">
              <ScrollReveal>
                <div className="relative mb-32 h-48 flex items-center justify-start">
                  <h2 className="absolute font-sans text-[18vw] text-foreground/[0.02] tracking-tighter uppercase font-bold select-none whitespace-nowrap">
                    Voices
                  </h2>
                  <h2 className="relative font-sans text-[10px] text-primary tracking-[0.3em] uppercase font-bold">
                    Voices from This Path
                  </h2>
                </div>
              </ScrollReveal>

              <div className="columns-1 md:columns-2 gap-20 space-y-20 lg:space-y-32">
                {lifeCoachingTestimonials.map((testimonial, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div className="break-inside-avoid flex flex-col group">
                      <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground/80 leading-[1.5] italic mb-10 transition-colors duration-500 group-hover:text-foreground">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-px bg-primary/30" />
                        <div>
                          <p className="font-sans text-[11px] font-bold text-primary tracking-[0.2em] uppercase">
                            {testimonial.name}
                          </p>
                          <p className="font-sans text-[9px] text-muted-foreground/60 mt-1 uppercase tracking-widest">
                            {testimonial.role} — {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </Container>
          </Section>

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* SCENE 6: THE COMMITMENT (Working Together & Pricing)                */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <Section size="lg" className="border-t border-foreground/[0.07] relative z-10">
            <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
              004
            </div>

            <Container width="narrow">
              <ScrollReveal className="text-center mb-24">
                <h2 className="font-sans text-[10px] text-primary tracking-[0.3em] uppercase font-bold mb-8">
                  The Investment
                </h2>
                <h3 className="font-serif text-4xl md:text-6xl text-foreground leading-[1.2] tracking-tight mb-8">
                  Working Together
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto font-sans">
                  This work is offered through carefully held containers of time and presence. Transformational Life Coaching is offered in longer arcs rather than isolated sessions, allowing trust, insight, and real change to unfold over time.
                </p>
              </ScrollReveal>

              <div className="flex flex-col gap-0 border-t border-b border-foreground/[0.07]">
                {[
                  {
                    title: "Short-Term Journey",
                    sessions: "Six 75-minute sessions (weekly)",
                    extras: "Includes one post-coaching check-in",
                    price: "₹62,000 / $750 USD"
                  },
                  {
                    title: "3–6 Month Journey",
                    sessions: "Twelve 75-minute sessions (wkly/bi-wkly)",
                    extras: "Includes three monthly check-ins",
                    price: "₹1,25,000 / $1,500 USD"
                  },
                  {
                    title: "A Year of Coaching",
                    sessions: "Twenty 75-minute sessions (bi-weekly)",
                    extras: "Includes three monthly check-ins",
                    price: "₹2,08,000 / $2,500 USD"
                  }
                ].map((tier, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="grid md:grid-cols-2 gap-8 py-10 md:py-16 border-b border-foreground/[0.04] last:border-0 items-start group">
                      <div>
                        <h4 className="font-serif text-3xl md:text-4xl text-foreground mb-4 transition-colors duration-500 group-hover:text-primary">{tier.title}</h4>
                        <p className="font-serif text-xl text-primary">{tier.price}</p>
                      </div>
                      <div className="md:text-right pt-2 md:pt-0">
                        <p className="font-sans text-sm text-foreground/70 leading-relaxed tracking-wide mb-2">{tier.sessions}</p>
                        <p className="font-sans text-[11px] text-foreground/40 uppercase tracking-widest">{tier.extras}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={0.4}>
                <p className="font-serif text-center text-foreground/40 text-lg leading-relaxed max-w-2xl mx-auto mt-16 italic">
                  "If you feel genuinely drawn to this work but are facing financial constraints, you're welcome to reach out. In select cases, a flexible sliding-scale may be available."
                </p>
              </ScrollReveal>

              {/* Final Immersive Conversion Scene */}
              <ScrollReveal delay={0.5} className="mt-32 border-t border-foreground/[0.04] pt-32">
                <div id="begin" className="w-full">
                  <ProgressiveForm />
                </div>
              </ScrollReveal>
            </Container>
          </Section>

        </div>
        
        {/* Breathing ambient layer */}
        <motion.div
          className="fixed inset-0 pointer-events-none z-0"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ 
            background: "radial-gradient(circle at 50% 50%, oklch(0.45 0.08 145 / 0.05) 0%, transparent 55%)",
            transform: "translateZ(0)",
          }}
        />
      </motion.main>
      
      <Footer />
    </>
  )
}
