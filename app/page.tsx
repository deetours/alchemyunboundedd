"use client"

import { useLenis } from "@studio-freight/react-lenis"
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"
import { useRef } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { LineReveal } from "@/components/line-reveal"
import { Button } from "@/components/ui/button"
import { ImmersiveRouting } from "@/components/immersive-routing"
import { InteractiveVoices } from "@/components/interactive-voices"
import { Section, Container } from "@/components/ui/section"
import { Magnetic } from "@/components/magnetic"

const homeTestimonials = [
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
    quote:
      "After a year and half of receiving life coaching, I found the strength and clarity to completely change my life.",
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
  },
]

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const heroLenisScroll = useMotionValue(0)

  useLenis(({ scroll }) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    const heroHeight = heroRef.current.offsetHeight
    const progress = Math.min(Math.max(-rect.top / heroHeight, 0), 1)
    heroLenisScroll.set(progress)
  })

  const { scrollYProgress } = useScroll()
  const pageScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0.98])
  const pageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0.9])

  // Environmental Color Bleed
  const pageBg = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      "oklch(0.98 0.005 85)",
      "oklch(0.95 0.01 85)",
      "oklch(0.98 0.005 85)",
      "oklch(0.95 0.01 85)",
      "oklch(0.98 0.005 85)",
    ]
  )

  const pageTextColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["oklch(0.25 0.01 60)", "oklch(0.25 0.01 60)"]
  )

  const heroBlur = useTransform(heroLenisScroll, [0, 0.5], [0, 10])
  const heroOpacity = useTransform(heroLenisScroll, [0, 0.5], [1, 0])
  const heroScale = useTransform(heroLenisScroll, [0, 0.5], [1, 1.05])
  // Pre-computed hero image opacity (0 → 0.28 on scroll out)
  const heroImageOpacity = useTransform(heroLenisScroll, [0, 0.4], [0.28, 0])
  // Scroll indicator fades out early
  const scrollIndicatorOpacity = useTransform(heroLenisScroll, [0, 0.12], [1, 0])

  // Ambient Cursor
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
  const ambientBg = useMotionTemplate`radial-gradient(circle at ${mouseX}% ${mouseY}%, oklch(0.45 0.08 145 / 0.08) 0%, transparent 40%)`

  return (
    <>
      <Navigation />
      <motion.main
        className="relative min-h-screen overscroll-none"
        style={{
          backgroundColor: pageBg,
          color: pageTextColor,
          willChange: "background-color, color",
          transform: "translateZ(0)", // Force GPU layer
        }}
      >

      <motion.div style={{ scale: pageScale, opacity: pageOpacity }} className="origin-top">

        {/* GLOBAL AMBIENT LAYER */}
        <motion.div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background: ambientBg,
            willChange: "background",
            transform: "translateZ(0)",
          }}
        />

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* SCENE 1: ARRIVAL — Monolithic aperture, text dominates the viewport */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">

          {/* Text — uncapped so it breathes at full width */}
          <div className="relative z-10 w-full max-w-[1000px] mx-auto px-8 md:px-12 text-center">
            <motion.div style={{ opacity: heroOpacity }}>

              {/* Eyebrow label — positions Harish above the headline */}
                <span className="mb-8 font-sans text-[10px] tracking-[0.45em] uppercase text-primary">
                  Harish Narayan — Coaching from the inside out
                </span>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-4xl md:text-6xl lg:text-[5rem] xl:text-[6.5rem] text-foreground leading-[1.05] tracking-tight"
              >
                The Architecture of Life, Body,
                <br />
                <span className="text-primary italic">& Creative Freedom</span>
              </motion.h1>

              {/* Hairline separator under headline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-16 h-px bg-primary/25 mx-auto mt-10 mb-10 origin-left"
              />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.2 }}
                className="font-sans text-lg md:text-xl text-muted-foreground tracking-wide max-w-lg mx-auto"
              >
                This is where the alchemy begins.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.8 }}
                className="mt-12"
              >
                <Magnetic strength={0.3}>
                  <Button variant="brand-primary" size="xl" asChild>
                    <Link href="/begin">Enter the space</Link>
                  </Button>
                </Magnetic>
              </motion.div>

              {/* Scroll indicator — fades out once scrolled */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.8 }}
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

          {/* Cinematic Aperture Image — 'The Monolithic Breath' */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              style={{
                scale: heroScale,
                opacity: heroImageOpacity,
                filter: useMotionTemplate`blur(${heroBlur}px)`,
                WebkitMaskImage: "radial-gradient(circle at center, black 45%, transparent 75%)",
                maskImage: "radial-gradient(circle at center, black 45%, transparent 75%)",
                willChange: "transform, opacity, filter",
                transform: "translateZ(0)",
              }}
              className="w-full h-full"
            >
              {/* Load Animation applied here to separate from Scroll Animation */}
              <motion.div
                initial={{ filter: "blur(15px)", scale: 1.1, opacity: 0 }}
                animate={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
                transition={{ duration: 4, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full"
              >
                <Image
                  src="/serene-nature-forest-light-rays-peaceful-morning-m.jpeg"
                  alt="Serene Forest Background"
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Threshold line at base of hero */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-foreground/[0.07]" />
        </section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* SCENE 1.5: THE DISCOVERY — Pinned Horizontal Cinematic Routing      */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <ImmersiveRouting />

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* SCENE 2: RECOGNITION — Asymmetric corridor with visible hairlines   */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <Section size="content" background="transparent" className="relative z-10">
          {/* Section number — editorial micro-detail */}
          <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
            001
          </div>

          <Container width="default" className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
            <ScrollReveal>
              <div className="lg:sticky lg:top-40">
                <div className="mb-2 font-sans text-[9px] tracking-[0.5em] text-foreground/25 uppercase">
                  Recognition
                </div>
                <h2 className="font-sans text-[10px] text-primary mb-12 lg:mb-0 tracking-[0.3em] uppercase font-bold">
                  The Mirror
                </h2>
              </div>
            </ScrollReveal>

            <div className="lg:border-l lg:border-foreground/[0.09] lg:pl-16">
              <LineReveal
                lines={[
                  "You are accomplished.",
                  "",
                  "And yet something sits quietly beneath all of it.",
                  "Not loud. Not dramatic.",
                  "Just present.",
                  "",
                  "That quiet thing is not a problem to solve.",
                  "",
                  "It is the most important part of you — asking to be known.",
                ]}
                className="text-left"
                lineClassName="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-[1.6]"
                focus={true}
              />
            </div>
          </Container>
        </Section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* SCENE 3: THE WORLD — GRID BROKEN. Full-bleed dramatic typography.  */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <Section size="content" className="relative z-10 border-t border-foreground/[0.07] overflow-hidden">
          {/* Section number */}
          <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
            002
          </div>

          {/* Ghost watermark — adds depth plane behind the text */}
          <div className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden">
            <span className="font-serif text-[22vw] text-foreground/[0.025] tracking-tighter font-bold leading-none whitespace-nowrap pl-6">
              Depth
            </span>
          </div>

          {/* Section label — full-width container */}
          <Container width="default">
            <ScrollReveal>
              <span className="font-sans text-[10px] text-primary tracking-[0.3em] uppercase font-bold block mb-16">
                The World We Live In
              </span>
            </ScrollReveal>
          </Container>

          {/* Text breaks out of the standard container — wider than default */}
          <div className="relative mt-4 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
            <LineReveal
              reveal="clip"
              lines={[
                "The world asks you to perform.",
                "To produce. To optimize. To keep pace.",
                "",
                "Most people comply.",
                "",
                "A few refuse.",
                "",
                "Not from arrogance.",
                "From a deeper knowing —",
                "",
                "that the life worth living",
                "is the one most fully inhabited.",
              ]}
              className="text-left"
              lineClassName="font-serif text-[clamp(2rem,5vw,5.5rem)] text-foreground leading-[1.2] tracking-tight"
              focus={true}
            />
          </div>
        </Section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* SCENE 4: BREATH — Theatrical. Vignette. Isolated. Forces a pause.  */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <Section size="screen" background="transparent" className="relative z-10 border-t border-foreground/[0.07]">
          {/* Vignette: dark edges pull focus to center text */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 65% 55% at center, transparent 35%, oklch(0.12 0.02 145 / 0.055) 100%)",
            }}
          />

          {/* Top centered hairline — scene boundary */}
          <div className="absolute top-0 left-0 right-0 flex justify-center">
            <div className="w-20 h-px bg-foreground/[0.09]" />
          </div>

          {/* Section number */}
          <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
            003
          </div>

          <Container width="wide" className="text-center overflow-hidden flex flex-col justify-center items-center">
            <LineReveal
              as="h2"
              reveal="blur"
              lines={["This is not a repair.", "", "It is a return.", "", "You were never broken.", "You were never behind.", "", "You are becoming.", "", "That has always been enough."]}
              lineClassName="font-serif text-[12vw] md:text-[8vw] text-foreground leading-[1.0] tracking-tighter italic"
              focus={true}
            />
          </Container>

          {/* Bottom centered hairline */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center">
            <div className="w-20 h-px bg-foreground/[0.09]" />
          </div>
        </Section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* SCENE 5: THIS SPACE — Flipped [2fr_1fr]. Quote anchored right.     */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <Section size="content" className="relative z-10 border-t border-foreground/[0.07]">
          {/* Section number */}
          <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
            004
          </div>

          <Container width="default" className="grid lg:grid-cols-[2fr_1fr] gap-12 lg:gap-20">
            {/* Left — primary content */}
            <div>
              <ScrollReveal>
                <h2 className="font-sans text-[10px] text-primary mb-12 tracking-[0.3em] uppercase font-bold">
                  This Space
                </h2>
              </ScrollReveal>

              <LineReveal
                lines={[
                  "This is a space for the kind of listening",
                  "you cannot do alone.",
                  "",
                  "For the truth you have been moving",
                  "too fast to hear.",
                  "",
                  "For the return to the self",
                  "that has been waiting — patiently, completely —",
                  "beneath everything you have built.",
                ]}
                className="text-left"
                lineClassName="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-[1.6]"
                focus={true}
              />

              <ScrollReveal delay={0.4}>
                <p className="mt-16 text-muted-foreground leading-relaxed max-w-2xl text-lg font-sans">
                  Nothing is forced. Nothing is rushed. The conditions are created for you to be fully known — not the version that performs, but the one beneath it.
                </p>
              </ScrollReveal>
            </div>

            {/* Right — quote anchored with visible border */}
            <div className="lg:pt-28 lg:border-l lg:border-foreground/[0.09] lg:pl-12 flex flex-col justify-start">
              <ScrollReveal delay={0.5}>
                <p className="font-serif text-xl md:text-2xl lg:text-[1.6rem] text-primary italic leading-relaxed">
                  "Stillness as the most courageous act.
                  <br />
                  Body as the first place truth speaks.
                  <br />
                  Slowness as the intelligence the mind cannot reach alone."
                </p>
              </ScrollReveal>
            </div>
          </Container>
        </Section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* SCENE 6: TRANSFORMATION — Timeline with left progress indicator    */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <Section size="lg" background="transparent" className="relative z-10 border-t border-foreground/[0.07]">
          {/* Section number */}
          <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
            005
          </div>

          <Container width="default" className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
            <ScrollReveal>
              <h2 className="font-sans text-[10px] text-primary lg:sticky lg:top-40 mb-16 lg:mb-0 tracking-[0.3em] uppercase font-bold">
                The Moment of Return
              </h2>
            </ScrollReveal>

            {/* Timeline content — relative so progress line can be positioned */}
            <div className="relative lg:border-l lg:border-foreground/[0.09] lg:pl-16 space-y-32 md:space-y-[60vh] pb-[20vh]">
              {/* Vertical progress track — thin line running full column height */}
              <div className="absolute left-0 top-4 bottom-4 w-px bg-foreground/[0.04] hidden lg:block -translate-x-16" />

              {/* Entry 01 */}
              <div className="grid lg:grid-cols-[1fr_3fr] gap-8 items-start">
                <ScrollReveal>
                  <span className="font-sans text-[10px] tracking-[0.3em] text-primary lg:sticky lg:top-40 uppercase block font-bold">
                    01 — The Architecture of Success
                  </span>
                </ScrollReveal>
                <ScrollReveal direction="none">
                  <p className="text-foreground text-2xl md:text-4xl lg:text-5xl font-serif leading-[1.3] tracking-tight">
                    "A degree from Purdue. A career in consulting. Competence that was visible, legible, rewarded. And inside — a silence that echoed. Not depression. Something more precise: the feeling of being completely present to my own absence."
                  </p>
                </ScrollReveal>
              </div>

              {/* Entry 02 */}
              <div className="grid lg:grid-cols-[1fr_3fr] gap-8 items-start">
                <ScrollReveal>
                  <span className="font-sans text-[10px] tracking-[0.3em] text-primary lg:sticky lg:top-40 uppercase block font-bold">
                    02 — The Body Spoke First
                  </span>
                </ScrollReveal>
                <ScrollReveal direction="none" delay={0.1}>
                  <p className="text-foreground text-2xl md:text-4xl lg:text-5xl font-serif leading-[1.3] tracking-tight">
                    "Anxiety arrived not as thought but as physical fact. A voice — not loud, not dramatic — that said: you are surviving this. I had not yet learned to listen to what my body already knew."
                  </p>
                </ScrollReveal>
              </div>

              {/* Entry 03 */}
              <div className="grid lg:grid-cols-[1fr_3fr] gap-8 items-start">
                <ScrollReveal>
                  <span className="font-sans text-[10px] tracking-[0.3em] text-primary lg:sticky lg:top-40 uppercase block font-bold">
                    03 — The Weight of Pretending
                  </span>
                </ScrollReveal>
                <ScrollReveal direction="none" delay={0.1}>
                  <p className="text-foreground text-2xl md:text-4xl lg:text-5xl font-serif leading-[1.3] tracking-tight">
                    "I left the career. In the ten months that followed, I released a hundred pounds — not through discipline or plan, but through something stranger and more true: I stopped carrying the weight of a life that wasn't mine. The body holds everything we haven't yet had the courage to set down."
                  </p>
                </ScrollReveal>
              </div>
            </div>

            <ScrollReveal delay={0.8} className="mt-24 flex justify-center">
              <Magnetic strength={0.2}>
                <Button variant="brand-outline" size="lg" asChild>
                  <Link href="/journey">Read the full story</Link>
                </Button>
              </Magnetic>
            </ScrollReveal>
          </Container>
        </Section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* MID-PAGE CTA — Ceremony: horizontal rules + eyebrow label          */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <Section size="default" className="relative z-10 border-t border-foreground/[0.07]">
          <Container width="prose" className="text-center">
            <ScrollReveal>
              <div className="flex items-center gap-8 mb-10 justify-center">
                <div className="h-px flex-1 max-w-[80px] bg-foreground/[0.07]" />
                <span className="font-sans text-[9px] tracking-[0.5em] uppercase text-foreground/30">
                  A beginning
                </span>
                <div className="h-px flex-1 max-w-[80px] bg-foreground/[0.07]" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <Magnetic strength={0.4}>
                <Button variant="brand-outline" size="xl" asChild>
                  <Link href="/begin">Open a conversation</Link>
                </Button>
              </Magnetic>
            </ScrollReveal>
          </Container>
        </Section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* SCENE 7: VOICES — Dark cinematic. Interactive focus isolation.       */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <section className="relative z-20">
          <InteractiveVoices />
          <div className="relative bg-black/0 pb-32 flex justify-center mt-[-4rem] z-20">
            <Magnetic strength={0.2}>
              <Button variant="ghost" size="sm" asChild className="tracking-[0.3em] text-white/50 hover:text-white">
                <Link href="/voices">Read more stories of return →</Link>
              </Button>
            </Magnetic>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* SCENE 8: THRESHOLD — Final invitation                              */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <Section size="lg" background="transparent" className="text-center relative z-10">
          {/* Top rule ceremony */}
          <div className="absolute top-0 left-0 right-0 flex justify-center">
            <div className="w-20 h-px bg-foreground/[0.09]" />
          </div>

          <Container width="narrow">
            <ScrollReveal>
              <p className="font-serif text-3xl md:text-4xl text-muted-foreground mb-16 italic font-light">
                You did not find this page by accident.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <Magnetic strength={0.3}>
                  <Button variant="brand-primary" size="xl" asChild>
                    <Link href="/begin">Take the first step</Link>
                  </Button>
                </Magnetic>

                <Magnetic strength={0.2}>
                  <Button variant="ghost" size="lg" asChild className="text-muted-foreground hover:text-foreground">
                    <Link href="/about">Learn about Harish</Link>
                  </Button>
                </Magnetic>
              </div>
            </ScrollReveal>
          </Container>
        </Section>

      </motion.div>
      <Footer />
    </motion.main>
    </>
  )
}
