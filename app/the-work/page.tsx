"use client"

import { useLenis } from "@studio-freight/react-lenis"
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"
import { useRef } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { LineReveal } from "@/components/line-reveal"
import { Button } from "@/components/ui/button"
import { Section, Container } from "@/components/ui/section"
import { Magnetic } from "@/components/magnetic"

export default function TheWorkPage() {
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
    <motion.main
      className="relative min-h-screen overscroll-none"
      style={{ 
        backgroundColor: "oklch(0.98 0.005 85)",
        transform: "translateZ(0)",
      }}
    >
      <Navigation />

      {/* GLOBAL AMBIENT LAYER */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{ 
          background: ambientBg,
          willChange: "background",
          transform: "translateZ(0)",
        }}
      />

      <motion.div className="origin-top relative z-10">

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* SCENE 1: HERO — Monolithic Arrival                                 */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="relative z-10 w-full max-w-[900px] mx-auto px-8 md:px-12 text-center">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 font-sans text-[10px] tracking-[0.45em] uppercase text-primary"
            >
              The Philosophy
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-foreground leading-[1.05] tracking-tight"
            >
              The Work
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-16 h-px bg-primary/25 mx-auto mt-10 origin-left"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-foreground/[0.07]" />
        </section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* SCENE 2: CLARITY — Asymmetric Corridor                              */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <Section size="content" background="transparent" className="relative z-10 border-t border-foreground/[0.07]">
          <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
            001
          </div>

          <Container width="default" className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
            <ScrollReveal>
              <div className="lg:sticky lg:top-40">
                <div className="mb-2 font-sans text-[9px] tracking-[0.5em] text-foreground/25 uppercase">
                  Clarity
                </div>
                <h2 className="font-sans text-[10px] text-primary mb-12 lg:mb-0 tracking-[0.3em] uppercase font-bold">
                  What This Is Not
                </h2>
              </div>
            </ScrollReveal>

            <div className="lg:border-l lg:border-foreground/[0.09] lg:pl-16">
              <ScrollReveal>
                <p className="text-muted-foreground leading-relaxed mb-12 text-xl font-serif italic">
                  Let us begin with what you will not find here.
                </p>
              </ScrollReveal>
              <LineReveal
                lines={[
                  "Not a program with a fixed number of steps.",
                  "Not a set of tools you learn and apply.",
                  "Not motivation dressed as transformation.",
                  "Not someone telling you who to be or how to live.",
                ]}
                className="text-left"
                lineClassName="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-[1.6]"
                focus={true}
              />
              <ScrollReveal delay={0.8}>
                <p className="mt-16 text-muted-foreground leading-relaxed max-w-2xl text-lg font-sans">
                  You know they reach a certain depth — and stop. This work begins where they run out: not strategy, but identity. Not what you should do — but who you actually are.
                </p>
              </ScrollReveal>
            </div>
          </Container>
        </Section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* SCENE 3: PILLARS — Asymmetric + Staggered Editorial Blocks          */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <Section size="content" background="transparent" className="relative z-10 border-t border-foreground/[0.07]">
          <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
            002
          </div>

          <Container width="default" className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
            <ScrollReveal>
              <div className="lg:sticky lg:top-40">
                <div className="mb-2 font-sans text-[9px] tracking-[0.5em] text-foreground/25 uppercase">
                  Foundation
                </div>
                <h2 className="font-sans text-[10px] text-primary mb-12 lg:mb-0 tracking-[0.3em] uppercase font-bold">
                  What This Is
                </h2>
              </div>
            </ScrollReveal>

            <div className="lg:border-l lg:border-foreground/[0.09] lg:pl-16">
              <LineReveal
                lines={[
                  "A space for the deepest kind of meeting.",
                  "Between you — and the truth of you.",
                ]}
                className="text-left mb-16"
                lineClassName="font-serif text-3xl md:text-5xl text-foreground leading-[1.2] tracking-tight"
                focus={true}
              />
              
              <div className="space-y-24 mt-20">
                {[
                  {
                    title: "Journey",
                    description: "Not a destination with a graduation date. A conscious relationship with where you are — moving through it, not past it. Each session is a step taken in real time, with full presence.",
                  },
                  {
                    title: "Unfolding",
                    description: "Nothing is extracted or forced. What is already in you is given the conditions it needs to surface — naturally, at its own pace. That allowance itself is the practice.",
                  },
                  {
                    title: "Alchemy",
                    description: "Lead into gold. Not by removing the lead, but by understanding its nature so completely that it reveals its own luminosity. Struggle does not disappear — it is comprehended at a depth that transforms its meaning.",
                  },
                  {
                    title: "Integration",
                    description: "Insight that remains in the mind is interesting. Insight that moves into the body, into how you lead, create, rest, and relate — that is the difference between knowing and becoming.",
                  },
                ].map((item, index) => (
                  <ScrollReveal key={item.title} delay={0.2 * index}>
                    <div className="group border-t border-foreground/[0.05] pt-12">
                      <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors duration-500">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                        {item.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* SCENE 4: BREAK — Cinematic Vignette                                */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <Section size="screen" background="transparent" className="relative z-10 border-t border-foreground/[0.07] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0">
            <Image 
              src="/golden-light-through-trees-peaceful-transformation.jpg" 
              alt="Transformation" 
              fill 
              className="object-cover opacity-[0.25]" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-60" />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 65% 55% at center, transparent 35%, oklch(0.12 0.02 145 / 0.15) 100%)",
              }}
            />
          </div>
          
          <Container width="wide" className="relative z-10 text-center flex flex-col items-center justify-center h-full">
            <ScrollReveal>
              <span className="font-serif text-[15vw] md:text-[18vw] text-foreground/[0.04] tracking-tighter select-none font-bold">
                Weaving
              </span>
            </ScrollReveal>
          </Container>
        </Section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* SCENE 5: TIMELINE — Sticky Storytelling                             */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <Section size="lg" background="transparent" className="relative z-10 border-t border-foreground/[0.07]">
          <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
            003
          </div>

          <Container width="default" className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
            <ScrollReveal>
              <div className="lg:sticky lg:top-40">
                <div className="mb-2 font-sans text-[9px] tracking-[0.5em] text-foreground/25 uppercase">
                  Method
                </div>
                <h2 className="font-sans text-[10px] text-primary mb-12 lg:mb-0 tracking-[0.3em] uppercase font-bold">
                  How This Work Moves
                </h2>
              </div>
            </ScrollReveal>

            <div className="relative lg:border-l lg:border-foreground/[0.09] lg:pl-16 space-y-32 md:space-y-[50vh] pb-[20vh]">
              <div className="absolute left-0 top-4 bottom-4 w-px bg-foreground/[0.04] hidden lg:block -translate-x-16" />
              
              {[
                {
                  step: "01",
                  title: "Awareness",
                  description: "Not cataloguing your shortcomings — seeing yourself with steady, unjudging attention. From that seeing, everything else becomes possible.",
                },
                {
                  step: "02",
                  title: "Embodiment",
                  description: "The body is not a vehicle for the mind — it is an intelligence in its own right. This work learns to listen to what the body already knows.",
                },
                {
                  step: "03",
                  title: "Inquiry",
                  description: "Questions that do not rush toward answers — designed to hold open what has been kept closed, because no one yet created a space where it was safe enough to look.",
                },
                {
                  step: "04",
                  title: "Integration",
                  description: "What is discovered in session must become how you actually live — woven into how you speak, decide, create, lead, and rest, until it is simply who you are.",
                },
              ].map((item) => (
                <div key={item.step} className="grid lg:grid-cols-[1fr_3fr] gap-8 items-start">
                  <ScrollReveal>
                    <span className="font-sans text-[10px] tracking-[0.3em] text-primary lg:sticky lg:top-40 uppercase block font-bold">
                      {item.step} — {item.title}
                    </span>
                  </ScrollReveal>
                  <ScrollReveal direction="none">
                    <p className="text-foreground text-2xl md:text-4xl lg:text-5xl font-serif leading-[1.3] tracking-tight">
                      {item.description}
                    </p>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* SCENES 7-9: AUDIENCES — Asymmetric Corridors                        */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <Section size="lg" background="transparent" className="relative z-10 border-t border-foreground/[0.07]">
          <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
            004
          </div>

          <Container width="default">
            <ScrollReveal className="mb-24">
              <h2 className="font-sans text-[10px] text-primary tracking-[0.3em] uppercase font-bold text-center">
                Who This Is For
              </h2>
            </ScrollReveal>

            <div className="space-y-48">
              {/* For Creators */}
              <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 border-t border-foreground/[0.05] pt-24">
                <ScrollReveal>
                  <div className="lg:sticky lg:top-40">
                    <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                      For Creators
                    </h3>
                  </div>
                </ScrollReveal>
                <div className="space-y-8 lg:border-l lg:border-foreground/[0.09] lg:pl-16">
                  <p className="text-muted-foreground leading-relaxed text-lg font-sans">
                    You know what it is to create from a place that is genuinely yours. You also know what it is to feel that place become inaccessible — to sit before your work and feel the distance between you and it growing wider.
                  </p>
                  <p className="text-muted-foreground leading-relaxed font-sans">
                    The external world asks you to produce, optimize, be strategic. There is a split — between the part of you that complies and the part that knows that compliance is slowly hollowing out the very thing that made your work worth doing.
                  </p>
                  <p className="font-serif text-xl text-foreground italic border-l-2 border-primary/30 pl-6 py-2">
                    This work is about returning to the source of your creativity — not building more output, but recovering the inner aliveness from which anything worth making actually comes.
                  </p>
                </div>
              </div>

              {/* For Entrepreneurs */}
              <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 border-t border-foreground/[0.05] pt-24">
                <ScrollReveal>
                  <div className="lg:sticky lg:top-40">
                    <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                      For Entrepreneurs
                    </h3>
                  </div>
                </ScrollReveal>
                <div className="space-y-8 lg:border-l lg:border-foreground/[0.09] lg:pl-16">
                  <p className="text-muted-foreground leading-relaxed text-lg font-sans">
                    You did not start this to build a company. You started it because something in you could not not start it. Because a problem needed solving, a possibility needed proving, because a version of the world that did not yet exist felt more real to you than the one that does.
                  </p>
                  <p className="text-muted-foreground leading-relaxed font-sans">
                    What no one prepares you for is the identity vertigo — the way building something external begins to excavate everything internal. The business becomes a mirror. Most entrepreneurs look away from what they see in it.
                  </p>
                  <p className="font-serif text-xl text-foreground italic border-l-2 border-primary/30 pl-6 py-2">
                    This work is about building the internal architecture that your external vision requires. The foundation beneath the foundation.
                  </p>
                </div>
              </div>

              {/* For Changemakers */}
              <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 border-t border-foreground/[0.05] pt-24">
                <ScrollReveal>
                  <div className="lg:sticky lg:top-40">
                    <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                      For Changemakers
                    </h3>
                  </div>
                </ScrollReveal>
                <div className="space-y-8 lg:border-l lg:border-foreground/[0.09] lg:pl-16">
                  <p className="text-muted-foreground leading-relaxed text-lg font-sans">
                    You are in this because you care — not abstractly, but with the specific, costly kind of caring that reorganizes your priorities and does not let you rest.
                  </p>
                  <p className="text-muted-foreground leading-relaxed font-sans">
                    What that caring can quietly do, over time, is deplete the very person doing the caring. You push through your own experience because the cause feels larger than your needs — until the part of you that felt called begins to recede.
                  </p>
                  <p className="font-serif text-xl text-foreground italic border-l-2 border-primary/30 pl-6 py-2">
                    This work is about tending the interior life of the person who tends to everyone else. Depth that sustains. Presence that does not require your depletion.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* SCENE 10: QUOTE — Full-Viewport Isolation                           */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <Section size="screen" background="transparent" className="relative z-10 border-t border-foreground/[0.07] flex items-center justify-center">
          <div className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 65% 55% at center, transparent 35%, oklch(0.12 0.02 145 / 0.04) 100%)",
            }}
          />
          <Container width="default" className="text-center">
            <LineReveal
              as="blockquote"
              reveal="blur"
              lines={[
                '"I began to perceive the wholeness',
                'and interconnectedness of life,',
                'realizing that nothing exists in isolation."'
              ]}
              lineClassName="font-serif text-[7vw] md:text-[5vw] text-foreground leading-[1.2] tracking-tighter italic"
              focus={true}
            />
          </Container>
        </Section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* SCENE 11: CTA — Ceremony Close                                     */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <Section size="default" background="transparent" className="relative z-10 border-t border-foreground/[0.07]">
          <Container width="prose" className="text-center py-20">
            <ScrollReveal>
              <div className="flex items-center gap-8 mb-10 justify-center">
                <div className="h-px flex-1 max-w-[80px] bg-foreground/[0.07]" />
                <span className="font-sans text-[9px] tracking-[0.5em] uppercase text-foreground/30">The first step</span>
                <div className="h-px flex-1 max-w-[80px] bg-foreground/[0.07]" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-12 italic">
                If something in these words has settled quietly inside you —
              </h3>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <Magnetic strength={0.4}>
                <Button variant="brand-outline" size="xl" asChild>
                  <Link href="/offerings">See what working together looks like</Link>
                </Button>
              </Magnetic>
            </ScrollReveal>
          </Container>
        </Section>
      </motion.div>

      <Footer />
    </motion.main>
  )
}
