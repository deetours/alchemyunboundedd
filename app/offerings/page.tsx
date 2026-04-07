"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { LineReveal } from "@/components/line-reveal"
import { Magnetic } from "@/components/magnetic"
import { Section, Container } from "@/components/ui/section"
import Link from "next/link"

const offerings = [
  {
    name: "Transformational Life Coaching",
    slug: "life-coaching",
    statement: "You are not broken. You are mid-transformation.",
    description:
      "For people navigating identity shifts, life transitions, emotional complexity, or purpose evolution. This is deep inner architecture work.",
    we_explore: [
      "Patterns shaping your choices",
      "Emotional and psychological loops",
      "The tension between who you are and who you are becoming",
      "How to live and build from inner clarity instead of pressure",
    ],
    note: "This is not advice. This is guided self-discovery, structured reflection, and realignment.",
  },
  {
    name: "Creativity Coaching",
    slug: "creativity-coaching",
    statement: "Your work is not content. It is signal.",
    description:
      "For creators who want to build meaningful creative lives without losing themselves to algorithms, performance pressure, or identity distortion.",
    we_explore: [
      "Creative identity clarity",
      "Authentic audience resonance",
      "Monetization that respects your nervous system",
      "Sustainable visibility and expression",
    ],
    note: "This is not a content strategy. This is embodied creative alignment.",
  },
  {
    name: "Movement Arts Training",
    slug: "movement-arts",
    statement: "The body holds everything the mind refuses to feel.",
    description:
      "For people who want to build strength, awareness, resilience, and intelligence through movement. The body stores emotional memory, stress, and survival patterns.",
    we_explore: [
      "Coordination",
      "Presence",
      "Nervous system strength",
      "Emotional processing through physical intelligence",
    ],
    note: "This is not fitness. This is embodiment training.",
  },
]

export default function OfferingsPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  // Color temperature shift: neutral → forest green → amber → earth ochre
  const pageBg = useTransform(scrollYProgress, [0.38, 0.48, 0.56, 0.66, 0.74, 0.84], [
    "oklch(0.98 0.005 85)", // neutral approaching
    "oklch(0.95 0.03 145)", // forest green: Life Coaching
    "oklch(0.95 0.03 145)", // forest holds
    "oklch(0.97 0.025 65)", // warm amber: Creativity
    "oklch(0.97 0.025 65)", // amber holds
    "oklch(0.96 0.02 45)", // earth ochre: Movement Arts
  ])

  return (
    <main ref={containerRef} className="bg-background">
      <Navigation />

      {/* SCENE O1 — THRESHOLD HERO */}
      <Section size="screen" background="transparent" className="relative overflow-hidden">
        <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
          001
        </div>

        <Container width="default" className="flex flex-col justify-center h-full">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-primary font-sans text-sm tracking-widest uppercase mb-6"
            >
              The Work
            </motion.p>

            <LineReveal
              as="h1"
              reveal="clip"
              lines={["This is not a service.", "It is a space."]}
              lineClassName="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.0 }}
              className="text-muted-foreground leading-relaxed max-w-xl mt-8 text-lg"
            >
              Transformational Life Coaching · Creativity · Movement Arts
            </motion.p>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none"
            >
              <span className="font-sans text-[9px] tracking-[0.45em] uppercase text-foreground/30">Scroll</span>
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-px h-8 bg-gradient-to-b from-foreground/20 to-transparent"
              />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* SCENE O2 — THE BEFORE (Contrast) */}
      <Section size="lg" background="transparent" className="relative z-10">
        <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
          002
        </div>

        <Container
          width="default"
          className="grid lg:grid-cols-[1fr_1fr] gap-0 lg:border-x lg:border-foreground/[0.07]"
        >
          {/* Left — Now */}
          <div className="px-6 md:px-8 lg:px-16 py-24">
            <ScrollReveal>
              <p className="font-sans text-[9px] tracking-[0.5em] text-muted-foreground uppercase mb-12 font-bold">
                Now
              </p>
            </ScrollReveal>

            <LineReveal
              reveal="fade"
              lines={[
                "Decisions made from pressure.",
                "Success that feels hollow.",
                "Creating to be seen, not felt.",
                "The body as burden.",
                "Performing your own life.",
              ]}
              lineClassName="font-serif text-lg md:text-xl text-foreground/40 leading-[1.8]"
            />
          </div>

          {/* Right — After */}
          <div className="px-6 md:px-8 lg:px-16 py-24 lg:border-l lg:border-foreground/[0.07]">
            <ScrollReveal delay={0.2}>
              <p className="font-sans text-[9px] tracking-[0.5em] text-primary uppercase mb-12 font-bold">
                After
              </p>
            </ScrollReveal>

            <LineReveal
              reveal="clip"
              lines={[
                "Choices from clarity.",
                "Work that reflects your soul.",
                "Presence over performance.",
                "The body as intelligence.",
                "Living from the inside out.",
              ]}
              lineClassName="font-serif text-lg md:text-xl text-foreground leading-[1.8]"
            />
          </div>
        </Container>
      </Section>

      {/* SCENE O3 — THREE LIVING FOUNDATIONS */}
      <Section size="lg" background="muted" className="relative z-10">
        <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
          003
        </div>

        <Container width="default" className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
          <ScrollReveal>
            <h2 className="font-sans text-[9px] text-primary lg:sticky lg:top-40 tracking-[0.3em] uppercase font-bold">
              The Foundation
            </h2>
          </ScrollReveal>

          <div className="lg:border-l lg:border-foreground/[0.09] lg:pl-16 space-y-40">
            {/* Clarity */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none">
                <span className="font-serif text-[15vw] text-foreground/[0.025] tracking-tighter font-bold leading-none whitespace-nowrap">
                  CLARITY
                </span>
              </div>
              <ScrollReveal variant="fade-scale">
                <h3 className="font-serif text-3xl text-foreground mb-4">Clarity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Understanding what is true before trying to fix or optimize anything.
                </p>
              </ScrollReveal>
            </div>

            {/* Structure */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none">
                <span className="font-serif text-[15vw] text-foreground/[0.025] tracking-tighter font-bold leading-none whitespace-nowrap">
                  STRUCTURE
                </span>
              </div>
              <ScrollReveal variant="fade-scale" delay={0.1}>
                <h3 className="font-serif text-3xl text-foreground mb-4">Structure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Building systems that support your growth without fragmenting who you are.
                </p>
              </ScrollReveal>
            </div>

            {/* Embodiment */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none">
                <span className="font-serif text-[15vw] text-foreground/[0.025] tracking-tighter font-bold leading-none whitespace-nowrap">
                  EMBODIMENT
                </span>
              </div>
              <ScrollReveal variant="fade-scale" delay={0.2}>
                <h3 className="font-serif text-3xl text-foreground mb-4">Embodiment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transformation must live in the body, nervous system, and daily lived experience.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* SCENE O4 — THE THREE PATHS (Color Environment) */}
      <motion.div style={{ backgroundColor: pageBg }}>
        <Section size="lg" background="transparent" className="relative z-10">
          {offerings.map((offering, index) => (
            <div key={offering.slug} className="relative">
              <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
                {String(index + 4).padStart(3, "0")}
              </div>

              {/* Ghost watermark */}
              <div className="absolute inset-0 flex items-end justify-end overflow-hidden pointer-events-none select-none pr-8 pb-8">
                <span className="font-serif text-[12vw] text-foreground/[0.03] tracking-tighter font-bold leading-none whitespace-nowrap">
                  {offering.name.split(" ")[0]}
                </span>
              </div>

              <Container width="default" className="relative z-10 py-48">
                <div className="max-w-3xl">
                  <ScrollReveal>
                    <p className="font-sans text-xs tracking-[0.3em] text-primary uppercase mb-6 font-bold">
                      {offering.name}
                    </p>
                  </ScrollReveal>

                  <ScrollReveal delay={0.1}>
                    <p className="font-serif text-3xl md:text-4xl text-foreground mb-8 leading-relaxed italic">
                      {offering.statement}
                    </p>
                  </ScrollReveal>

                  <ScrollReveal delay={0.2}>
                    <p className="text-muted-foreground leading-relaxed mb-12 text-lg">{offering.description}</p>
                  </ScrollReveal>

                  <ScrollReveal delay={0.3}>
                    <div className="mb-12">
                      <p className="font-sans text-xs tracking-[0.3em] text-primary uppercase mb-6 font-bold">
                        We Explore
                      </p>
                      <p className="font-serif text-lg text-muted-foreground leading-relaxed">
                        {offering.we_explore.join(" · ")}
                      </p>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.4}>
                    <LineReveal
                      as="p"
                      reveal="blur"
                      lines={[offering.note]}
                      lineClassName="font-serif text-lg text-foreground italic pt-8 border-t border-border/50"
                    />
                  </ScrollReveal>

                  <ScrollReveal delay={0.5}>
                    <div className="mt-12">
                      <Magnetic strength={0.3}>
                        <Link
                          href={`/offerings/${offering.slug}`}
                          className="inline-flex items-center gap-3 text-primary hover:text-foreground transition-colors duration-500 font-sans text-sm tracking-widest uppercase"
                        >
                          Explore This Path
                          <span>→</span>
                        </Link>
                      </Magnetic>
                    </div>
                  </ScrollReveal>
                </div>
              </Container>

              {/* Between paths hairline */}
              {index < offerings.length - 1 && (
                <div className="border-t border-foreground/[0.07]" />
              )}
            </div>
          ))}
        </Section>
      </motion.div>

      {/* SCENE O5 — A VOICE (Dark Cinema) */}
      <Section
        size="screen"
        background="transparent"
        className="relative z-10 flex items-center justify-center"
        style={{ backgroundColor: "oklch(0.12 0.02 145)" }}
      >
        <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-white/[0.3] select-none pointer-events-none">
          004
        </div>

        {/* Ghost watermark */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
          <span className="font-serif text-[18vw] text-white/[0.04] tracking-tighter font-bold leading-none">
            Voices
          </span>
        </div>

        <Container width="narrow" className="relative z-10 text-center">
          <LineReveal
            reveal="blur"
            lines={[
              "After a year and a half,",
              "I found the strength and clarity",
              "to completely change my life.",
            ]}
            lineClassName="font-serif text-2xl md:text-4xl text-white/90 leading-relaxed italic"
          />

          <ScrollReveal delay={0.6}>
            <div className="mt-16 pt-8 border-t border-white/[0.08]">
              <p className="font-sans text-xs font-bold text-primary tracking-[0.2em] uppercase">
                Katy Haldiman
              </p>
              <p className="font-sans text-[10px] text-white/40 mt-1 uppercase tracking-widest">
                Healthcare Professional — US
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.7}>
            <Link
              href="/voices"
              className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors duration-500 font-sans text-xs tracking-[0.2em] uppercase mt-12"
            >
              Read more voices →
            </Link>
          </ScrollReveal>
        </Container>
      </Section>

      {/* SCENE O6 — HOW WE BEGIN */}
      <Section size="lg" background="muted" className="relative z-10">
        <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
          005
        </div>

        <Container width="default" className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
          <ScrollReveal>
            <h2 className="font-sans text-[9px] text-primary lg:sticky lg:top-40 tracking-[0.3em] uppercase font-bold">
              How It Begins
            </h2>
          </ScrollReveal>

          <div className="lg:border-l lg:border-foreground/[0.09] lg:pl-16">
            <LineReveal
              reveal="fade"
              focus={true}
              lines={[
                "A quiet reaching out.",
                "A conversation that doesn't try to sell you anything.",
                "A listening that most people have never experienced.",
                "From there — together — we find the right container.",
                "No templates. No programs. Just this.",
              ]}
              lineClassName="font-serif text-lg md:text-xl text-foreground leading-[1.8]"
            />

            <ScrollReveal delay={0.6}>
              <p className="font-serif italic text-foreground/60 mt-12 pt-8 border-t border-border/50">
                This work is intentionally personal. Not mass program based.
              </p>
            </ScrollReveal>
          </div>
        </Container>

        {/* Ceremony close */}
        <Container width="narrow" className="mt-20 text-center">
          <ScrollReveal delay={0.7}>
            <div className="flex items-center gap-8 justify-center mb-12">
              <div className="h-px flex-1 max-w-[80px] bg-foreground/[0.07]" />
              <span className="font-sans text-[9px] tracking-[0.5em] uppercase text-foreground/30">
                A beginning
              </span>
              <div className="h-px flex-1 max-w-[80px] bg-foreground/[0.07]" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.8}>
            <Magnetic strength={0.4}>
              <Link
                href="/begin"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-700 font-sans text-sm tracking-widest uppercase"
              >
                Begin the Conversation
                <span>→</span>
              </Link>
            </Magnetic>
          </ScrollReveal>
        </Container>
      </Section>

      {/* SCENE O7 — THE THRESHOLD CLOSE */}
      <Section size="screen" background="transparent" className="relative z-10 flex items-center justify-center text-center border-t border-foreground/[0.07]">
        <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
          006
        </div>

        {/* Top ceremony */}
        <div className="absolute top-0 left-0 right-0 flex justify-center">
          <div className="w-20 h-px bg-foreground/[0.09]" />
        </div>

        <Container width="narrow">
          <LineReveal
            reveal="clip"
            lines={[
              "You did not find this by accident.",
              "",
              "Something in you is already ready.",
              "",
              "The question is simply —",
              "Are you willing to listen?",
            ]}
            lineClassName="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-relaxed"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Magnetic strength={0.4}>
                <Link
                  href="/begin"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-700 font-sans text-sm tracking-widest uppercase"
                >
                  Take the First Step
                  <span>→</span>
                </Link>
              </Magnetic>

              <Magnetic strength={0.2}>
                <Link
                  href="/voices"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-700 font-sans text-sm tracking-widest uppercase"
                >
                  Read Voices from Those Who Have
                  <span>→</span>
                </Link>
              </Magnetic>
            </div>
          </motion.div>
        </Container>

        {/* Bottom ceremony */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <div className="w-20 h-px bg-foreground/[0.09]" />
        </div>
      </Section>

      <Footer />
    </main>
  )
}
