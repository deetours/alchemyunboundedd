"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { LineReveal } from "@/components/line-reveal"
import { Section, Container } from "@/components/ui/section"
import { Magnetic } from "@/components/magnetic"
import { ProgressiveForm } from "@/components/progressive-form"
import { useRef } from "react"
import Link from "next/link"

export default function LeadershipCoachingPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  
  // Smooth scroll progress for the whole page
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Background color interpolation: Start bright/clinical, move to focus charcoal
  const bgColor = useTransform(
    smoothProgress, 
    [0, 0.4, 0.8, 1], 
    ["oklch(0.98 0.005 250)", "oklch(0.98 0.005 250)", "oklch(0.18 0.01 250)", "oklch(0.12 0.01 250)"]
  )
  
  const textColor = useTransform(
    smoothProgress,
    [0, 0.7, 0.8, 1],
    ["oklch(0.2 0.01 250)", "oklch(0.2 0.01 250)", "oklch(0.95 0.01 250)", "oklch(0.98 0.01 250)"]
  )

  return (
    <>
      <Navigation />
      
      <motion.main
        ref={containerRef}
        className="relative min-h-screen transition-colors duration-1000"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <div className="relative z-10">

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* SCENE 1: THE BRIEFING — Sharp. Surgical. Immediate.                */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <section className="min-h-screen flex flex-col items-center justify-center relative px-6 text-center">
            <ScrollReveal>
              <span className="font-sans text-[10px] tracking-[0.5em] uppercase text-primary mb-12 block font-bold">
                Elite Leadership Coaching
              </span>
            </ScrollReveal>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-5xl md:text-7xl lg:text-9xl text-foreground leading-[0.9] tracking-tighter mb-16"
            >
              Clarity Under 
              <br />
              <span className="italic">Pressure.</span>
            </motion.h1>

            <ScrollReveal delay={0.4}>
              <p className="font-sans text-lg md:text-xl text-foreground/60 max-w-xl mx-auto leading-relaxed tracking-wide mb-20">
                A private space for founders and executives navigating the architecture of success and the internal costs of choice.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <Magnetic strength={0.3}>
                <Link href="#briefing" className="group flex flex-col items-center gap-6">
                  <div className="w-px h-16 bg-primary/30 group-hover:bg-primary transition-all duration-700" />
                  <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-foreground/40 font-bold group-hover:text-foreground">
                    Begin the Briefing
                  </span>
                </Link>
              </Magnetic>
            </ScrollReveal>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* SCENE 2: RECOGNITION — The isolation of the top.                    */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <Section id="briefing" size="lg" className="border-t border-foreground/[0.05]">
            <Container width="default" className="grid lg:grid-cols-[1fr_1.5fr] gap-20 lg:gap-32">
              <ScrollReveal>
                <div className="lg:sticky lg:top-40">
                  <h2 className="font-sans text-[10px] text-primary tracking-[0.4em] uppercase font-bold mb-8">
                    The Reality
                  </h2>
                  <p className="font-serif text-4xl text-foreground leading-tight italic">
                    You are not stuck. 
                    <br />
                    You are overloaded.
                  </p>
                </div>
              </ScrollReveal>

              <div className="space-y-32">
                {[
                  {
                    title: "The Isolation",
                    desc: "Responsibility without reciprocity. You carry the weight of decisions that affect thousands, with few to speak the absolute truth with."
                  },
                  {
                    title: "The Performance",
                    desc: "The constant need to be 'on'. You manage external expectations while internal static grows louder, eventually masking your primary intuition."
                  },
                  {
                    title: "The Cost",
                    desc: "Decision fatigue masked as discipline. Success has many metrics, but the one most often ignored is the internal inhabitation of your own life."
                  }
                ].map((item, i) => (
                  <ScrollReveal key={i}>
                    <div className="group">
                      <span className="font-sans text-[11px] tracking-[0.3em] text-foreground/30 uppercase mb-6 block font-bold group-hover:text-primary transition-colors">
                        0{i+1} — {item.title}
                      </span>
                      <p className="font-serif text-2xl md:text-3xl text-foreground/80 leading-relaxed italic">
                        {item.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </Container>
          </Section>

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* SCENE 3: THE REFRAME — What leadership actually is.                */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <Section size="screen" className="flex items-center">
            <Container width="narrow" className="text-center">
              <LineReveal
                as="h2"
                reveal="blur"
                lines={[
                  "You don't need a tool.",
                  "",
                  "You need a lens.",
                ]}
                lineClassName="font-serif text-5xl md:text-7xl lg:text-[7rem] text-foreground leading-none tracking-tighter italic"
              />
              <ScrollReveal delay={0.8}>
                <p className="mt-16 font-sans text-sm text-foreground/40 max-w-sm mx-auto tracking-widest leading-relaxed">
                  CLARITY IS NOT A LUXURY. 
                  <br />
                  IT IS A STRATEGIC REQUIREMENT.
                </p>
              </ScrollReveal>
            </Container>
          </Section>

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* SCENE 4: THE FRAMEWORK — Structured sessions.                      */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <Section size="lg" className="bg-foreground/[0.02] border-y border-foreground/[0.05]">
            <Container width="default">
              <ScrollReveal className="mb-32">
                <h2 className="font-sans text-[10px] text-primary tracking-[0.4em] uppercase font-bold mb-8 text-center">
                  The Protocol
                </h2>
                <h3 className="font-serif text-4xl md:text-6xl text-foreground text-center italic">
                  Deep Structural Conversations.
                </h3>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {[
                  {
                    step: "01",
                    title: "Truth Extraction",
                    desc: "Bypassing the narrative you tell others. Finding the sharp edges of where you actually are."
                  },
                  {
                    step: "02",
                    title: "Pattern Mapping",
                    desc: "Recognizing the recursive behaviors that brought success—and the ones now preventing it."
                  },
                  {
                    step: "03",
                    title: "Integrated Presence",
                    desc: "Returning the leader to the body. Leading from a place of grounded intelligence, not just mental logic."
                  }
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="p-10 border border-foreground/[0.06] rounded-2xl bg-foreground/[0.01] hover:border-primary/20 transition-all duration-700 h-full flex flex-col">
                      <span className="font-sans text-3xl font-bold text-primary/10 mb-8 block">{item.step}</span>
                      <h4 className="font-serif text-2xl text-foreground mb-6 italic">{item.title}</h4>
                      <p className="font-sans text-sm text-foreground/50 leading-relaxed tracking-wide">{item.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </Container>
          </Section>

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* SCENE 5: TESTIMONY — One surgical voice.                           */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <Section size="lg">
            <Container width="narrow" className="text-center">
              <ScrollReveal>
                <div className="w-16 h-px bg-primary/20 mx-auto mb-16" />
                <p className="font-serif text-3xl md:text-5xl text-foreground leading-snug italic mb-16">
                  "Harish cut through my 'executive reasoning' in twenty minutes. He saw the pattern I had been successfully hiding even from myself for a decade."
                </p>
                <p className="font-sans text-xs font-bold text-primary tracking-[0.4em] uppercase">
                  Founder & CEO — Tech Scale-up
                </p>
              </ScrollReveal>
            </Container>
          </Section>

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* SCENE 6: CONVERSION — Private invitation.                          */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <Section size="lg" className="border-t border-foreground/[0.05]">
            <Container width="narrow">
              <ScrollReveal className="text-center mb-32">
                <h2 className="font-sans text-[10px] text-primary tracking-[0.4em] uppercase font-bold mb-12">
                  The Next Decision
                </h2>
                <h3 className="font-serif text-3xl md:text-5xl text-foreground italic">
                  This is a high-trust conversation. 
                  <br />
                  No sales process. No pressure.
                </h3>
              </ScrollReveal>

              <div id="begin" className="w-full">
                <ProgressiveForm />
              </div>
            </Container>
          </Section>

        </div>
      </motion.main>
      
      <Footer />
    </>
  )
}
