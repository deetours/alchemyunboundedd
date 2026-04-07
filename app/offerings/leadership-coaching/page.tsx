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

export default function LeadershipElitePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // THE PRECISION ENVIRONMENT: 
  // No random color shifts. No emotional gradients. 
  // Stark, clinical off-white for maximum legibility and authority.
  const bgColor = "oklch(0.99 0 0)"
  const textColor = "oklch(0.15 0 0)"
  const borderColor = "oklch(0.15 0 0 / 0.08)"

  return (
    <>
      <Navigation />
      
      <main
        ref={containerRef}
        className="relative min-h-screen font-sans selection:bg-primary/20 selection:text-primary"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <div className="relative z-10">

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* SCENE 1: THE BRIEFING — Surgical. Immediate. Apple Standard.       */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <section className="min-h-screen flex flex-col items-center justify-center relative px-6 text-center border-b" style={{ borderColor }}>
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <span className="font-sans text-[10px] tracking-[0.6em] uppercase text-primary mb-16 block font-bold">
                  Dossier: Leadership Elite
                </span>
              </ScrollReveal>

              <motion.h1 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.85] tracking-tighter mb-16 font-medium"
              >
                Clarity Under 
                <br />
                <span className="italic font-light">Pressure.</span>
              </motion.h1>

              <ScrollReveal delay={0.3}>
                <div className="w-16 h-px bg-primary/40 mx-auto mb-16" />
                <p className="font-sans text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto leading-relaxed tracking-tight mb-20 font-light">
                  A high-intelligence sounding board for those navigating the architecture of success and the internal costs of ultimate choice.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.5}>
                <Magnetic strength={0.2}>
                  <Link href="#briefing" className="group flex flex-col items-center gap-8">
                    <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-foreground/40 font-bold group-hover:text-primary transition-colors">
                      Enter the Space
                    </span>
                    <div className="w-px h-12 bg-primary/20 group-hover:h-20 group-hover:bg-primary transition-all duration-700" />
                  </Link>
                </Magnetic>
              </ScrollReveal>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* SCENE 2: AUDIT — Brutalist recognition. No emotional fluff.          */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <Section id="briefing" size="lg" className="border-b" style={{ borderColor }}>
            <Container width="default" className="grid lg:grid-cols-[1fr_2fr] gap-20 lg:gap-32">
              <ScrollReveal>
                <div className="lg:sticky lg:top-40">
                  <h2 className="font-sans text-[10px] text-primary tracking-[0.5em] uppercase font-bold mb-10">
                    The Reality
                  </h2>
                  <p className="font-serif text-5xl text-foreground leading-[1.1] italic font-medium">
                    The higher you climb, 
                    <br />
                    the thinner the air.
                  </p>
                </div>
              </ScrollReveal>

              <div className="space-y-40">
                {[
                  {
                    title: "Strategic Isolation",
                    desc: "Responsibility without reciprocity. You carry the weight of decisions that affect many, often without a private space for the absolute, unfiltered truth."
                  },
                  {
                    title: "The Performance Gap",
                    desc: "The constant need to be 'on'. You manage external expectations while internal static masquerades as clarity, eventually masking your primary intuition."
                  },
                  {
                    title: "Decision Fatigue",
                    desc: "Success has many metrics, but the one most often ignored is the internal inhabitation of your own life. Leading requires grounded intelligence, not just mental logic."
                  }
                ].map((item, i) => (
                  <ScrollReveal key={i}>
                    <div className="group border-l border-primary/10 pl-12 py-4 hover:border-primary transition-colors duration-700">
                      <span className="font-sans text-[11px] tracking-[0.4em] text-foreground/30 uppercase mb-8 block font-bold group-hover:text-primary">
                        Component 0{i+1} — {item.title}
                      </span>
                      <p className="font-sans text-2xl md:text-3xl text-foreground/80 leading-relaxed font-light tracking-tight">
                        {item.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </Container>
          </Section>

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* SCENE 3: THE FRAMEWORK — Structured, data-driven intelligence.      */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <Section size="lg" className="border-b" style={{ borderColor }}>
            <Container width="default">
              <ScrollReveal className="mb-40">
                <h2 className="font-sans text-[10px] text-primary tracking-[0.5em] uppercase font-bold mb-10 text-center">
                  Executive Protocol
                </h2>
                <h3 className="font-serif text-5xl md:text-7xl text-foreground text-center italic font-medium">
                  Deep Structural Extraction.
                </h3>
              </ScrollReveal>

              <div className="grid md:grid-cols-3 gap-1px bg-foreground/10 border border-foreground/10">
                {[
                  {
                    title: "Truth Extraction",
                    desc: "Bypassing the narrative you tell others. Finding the sharp edges of where you actually are."
                  },
                  {
                    title: "Pattern Mapping",
                    desc: "Recognizing the recursive behaviors that brought success—and the ones now preventing it."
                  },
                  {
                    title: "Internal Authority",
                    desc: "Returning the leader to the body. Leading from a place of grounded presence, not just reactiveness."
                  }
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="p-16 bg-white hover:bg-foreground/[0.01] transition-all duration-700 h-full">
                      <span className="font-sans text-xs tracking-[0.3em] font-bold text-primary mb-12 block uppercase">Stage {i+1}</span>
                      <h4 className="font-serif text-3xl text-foreground mb-8 italic font-medium">{item.title}</h4>
                      <p className="font-sans text-base text-foreground/50 leading-relaxed tracking-wide font-light">
                        {item.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </Container>
          </Section>

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* SCENE 4: TESTIMONY — Single surgical authority quote.              */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <Section size="lg" className="border-b" style={{ borderColor }}>
            <Container width="narrow" className="text-center">
              <ScrollReveal>
                <p className="font-serif text-4xl md:text-5xl text-foreground/80 leading-[1.3] italic mb-16 font-light">
                  "Harish saw the pattern I had been successfully hiding—even from myself—for a decade. He cut through my executive reasoning in twenty minutes. This is surgery, not coaching."
                </p>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-8 h-px bg-primary/40" />
                  <p className="font-sans text-xs font-bold text-primary tracking-[0.5em] uppercase">
                    CEO — Global Tech Scale-up
                  </p>
                </div>
              </ScrollReveal>
            </Container>
          </Section>

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* SCENE 5: THE THRESHOLD — Secure, private invitation.                */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <Section size="lg">
            <Container width="narrow">
              <ScrollReveal className="text-center mb-32">
                <h2 className="font-sans text-[10px] text-primary tracking-[0.6em] uppercase font-bold mb-12">
                  Initiate Strategic Partnership
                </h2>
                <h3 className="font-serif text-4xl md:text-6xl text-foreground italic font-medium">
                  This is a high-trust conversation.
                </h3>
                <p className="mt-8 font-sans text-lg text-foreground/50 font-light">
                  No sales process. Just a private channel to begin the work.
                </p>
              </ScrollReveal>

              <div id="begin" className="w-full">
                <ProgressiveForm />
              </div>
            </Container>
          </Section>

        </div>
      </main>
      
      <Footer />
    </>
  )
}
