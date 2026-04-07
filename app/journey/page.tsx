"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { LineReveal } from "@/components/line-reveal"
import { Magnetic } from "@/components/magnetic"
import { Section, Container } from "@/components/ui/section"
import Link from "next/link"

const chapters = [
  {
    number: "01",
    title: "Entering the Shadows",
    preview: [
      "My path was forged amidst the intricate landscape of my rich inner world—a journey marked by intense experiences in my formative years. I delved deep into the shadows of human existence, grappling with existential sorrow and enduring the burden of anxiety, shame, and guilt.",
      "I navigated through confusion and emptiness, feeling adrift like a boat in a storm and as parched as a well in a desert. Loneliness, frustration, rage, and feeling misunderstood were familiar companions.",
    ],
    expanded: [
      "Disconnection with myself and others plagued my relationships, leading to emotional turmoil. I have swum in the ocean of boredom and the lack of meaning and purpose. I have confronted many dark nights of the soul where the notion of ending it all surfaced.",
      "Yet, in reflection, I hold no regrets. These trials, tribulations and challenges were pivotal in guiding me towards a journey of profound inner work, healing, self-discovery, transformation, and spiritual evolution since my mid-twenties.",
    ],
    reveal: "blur" as const,
  },
  {
    number: "02",
    title: "Turning Inward",
    preview: [
      "As the quality of my attention and perception sharpened over the years, I learned to read the book of myself with all its complexity and nuances. Gradually, the darkness of my younger years was naturally washed away.",
      "An overwhelming sense of ease permeated both my inner world and external facets of life. I began to perceive the wholeness and interconnectedness of life, realizing that nothing exists in isolation.",
    ],
    expanded: [
      "I discovered that absolutely everything responds to care and attention. Taking responsibility for my growth, I transcended self-imposed barriers, allowing life to unfold effortlessly in myriad dimensions.",
      "This wasn't about fixing what was broken. It was about discovering what was always whole, buried beneath layers of conditioning and fear.",
    ],
    keyInsight: "Everything responds to care and attention.",
    reveal: "fade" as const,
  },
  {
    number: "03",
    title: "The Body Remembers",
    watermarkOverride: "100",
    stat: "100 pounds. Less than 10 months.",
    subStat: "This was not discipline. This was liberation.",
    preview: [
      "In my early thirties, burdened by being grossly overweight and unhealthy, I embarked on a transformative journey. What unfolded was beyond what I could have imagined—shedding 100 pounds in less than 10 months.",
      "This metamorphosis went beyond the physical. It symbolized emotional and psychological rebirth, granting me uninhibited freedom and boundless vitality to embrace life's dance with grace.",
    ],
    expanded: [
      "The body became a home again, not a prison. This is why movement arts became central to the work I offer—not as exercise, but as embodiment. The body holds wisdom the mind cannot access through thought alone.",
      "Integration happens when we include all of ourselves—mind, heart, and the flesh and bone that carries us through this life.",
    ],
    reveal: "clip" as const,
  },
  {
    number: "04",
    title: "Choosing the Unknown",
    preview: [
      "A Mechanical Engineering graduate from Purdue University by education, and a seasoned SAP Logistics and Supply Chain consultant in the US corporate world for several years by profession—I organically walked away from my successful career in my late thirties.",
      "I chose to wander aimlessly in search of the miraculous. Life was calling me in a certain direction, and I surrendered to this calling as clarity about my life's work and vision began to take shape.",
    ],
    expanded: [
      "Stepping into the unknown, I joyously embraced the path less-traveled, without looking back, in service of my larger vision and purpose.",
      "The unknown has its own intelligence. When we step into it honestly, it meets us with what we need.",
    ],
    keyQuote: "I chose to wander aimlessly in search of the miraculous.",
    reveal: "fade" as const,
  },
  {
    number: "05",
    title: "What Emerged",
    watermarkColor: "text-primary/[0.07]",
    preview: [
      "Since then, my life has unfolded as a symphony of boundless exploration, experimentation, expression, nourishment, and creative transformation. Guided by the invisible thread of grace, I explored the depths of my own shadow and channeled it into a joyful and creative dance with the universe.",
      "Through all my years of self-discovery and feeding my inner spirit, I realized that I am a helper, healer, nurturer, connector, and teacher at heart.",
      "My gifts lie in working with people to bring about joy, harmony, balance, clarity and contentment in life.",
    ],
    keyWords: ["helper", "healer", "nurturer", "connector", "teacher"],
    reveal: "clip" as const,
  },
]

const clientExperienceSteps = [
  {
    step: "Before We Begin",
    description: "A quiet reaching out. Perhaps a form filled, perhaps an email sent. No pressure, no expectations. Just a gentle first step toward connection.",
  },
  {
    step: "The First Conversations",
    description: "A discovery call—not to sell, but to listen. To feel into whether there is resonance. To sense if this space is right for you, and you for it.",
  },
  {
    step: "The Ongoing Work",
    description: "Regular sessions held with care and presence. Each conversation building on the last, yet always meeting you exactly where you are in this moment.",
  },
  {
    step: "Integration Into Daily Life",
    description: "What emerges in sessions begins to weave into your everyday. Not through force, but through the natural unfolding of awareness into action.",
  },
  {
    step: "Completion or Continuation",
    description: "There is no prescribed end point. Some journeys complete naturally. Others evolve into new forms. Both are honored equally.",
  },
]

export default function JourneyPage() {
  return (
    <main className="bg-background">
      <Navigation />

      {/* SCENE J1 — OPENING HERO */}
      <Section size="screen" background="transparent" className="relative">
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
              Harish Narayan
            </motion.p>

            <LineReveal
              as="h1"
              reveal="fade"
              lines={["This is the path", "that shaped the work."]}
              lineClassName="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-muted-foreground leading-relaxed max-w-2xl mt-8 text-lg font-light italic"
            >
              A path forged amidst the intricate landscape of a rich inner world
            </motion.p>
          </div>
        </Container>
      </Section>

      {/* SCENE J2 — CHAPTER MAP */}
      <Section size="content" background="transparent" className="relative z-10 py-32">
        <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
          002
        </div>

        <Container width="narrow" className="max-w-3xl">
          <ScrollReveal>
            <p className="font-sans text-[9px] tracking-[0.5em] text-foreground/40 uppercase mb-16 font-bold">
              Five Chapters
            </p>
          </ScrollReveal>

          <div className="relative pl-12">
            {/* Vertical spine */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-foreground/[0.09]" />

            {/* Chapters */}
            <div className="space-y-12">
              {chapters.map((chapter, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.15}>
                  <div className="flex gap-6 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 shrink-0" />
                    <div>
                      <p className="font-sans text-xs tracking-[0.3em] text-muted-foreground/60 uppercase">
                        {chapter.number}
                      </p>
                      <p className="font-serif text-foreground/60 leading-relaxed">{chapter.title}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* SCENES J3-J7 — CHAPTERS */}
      {chapters.map((chapter, idx) => (
        <div key={idx}>
          <Section
            size="lg"
            background={idx % 2 === 0 ? "transparent" : "muted"}
            className="relative z-10"
          >
            <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
              {String(idx + 3).padStart(3, "0")}
            </div>

            {/* Ghost watermark */}
            <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none">
              <span
                className={`font-serif text-[25vw] ${
                  chapter.watermarkColor || "text-foreground/[0.04]"
                } tracking-tighter font-bold leading-none`}
              >
                {chapter.watermarkOverride || chapter.number}
              </span>
            </div>

            <Container
              width="default"
              className={idx === 3 ? "max-w-3xl" : idx === 4 ? "max-w-4xl" : "max-w-3xl"}
            >
              <div className="relative z-10">
                <ScrollReveal>
                  <p className="font-sans text-xs tracking-[0.3em] text-primary uppercase mb-4 font-bold">
                    {chapter.number} — {chapter.title}
                  </p>
                </ScrollReveal>

                {chapter.stat && (
                  <ScrollReveal delay={0.1}>
                    <p className="font-serif text-4xl md:text-5xl text-foreground mb-2 leading-tight">
                      {chapter.stat}
                    </p>
                    <p className="text-muted-foreground italic mb-8">{chapter.subStat}</p>
                  </ScrollReveal>
                )}

                {chapter.keyInsight && (
                  <ScrollReveal delay={0.1}>
                    <p className="font-serif text-2xl md:text-3xl text-foreground italic mb-12">
                      {chapter.keyInsight}
                    </p>
                  </ScrollReveal>
                )}

                {chapter.keyQuote && (
                  <ScrollReveal delay={0.1}>
                    <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed mb-12">
                      "{chapter.keyQuote}"
                    </p>
                  </ScrollReveal>
                )}

                {chapter.keyWords ? (
                  <div className="space-y-6 mb-12">
                    {chapter.keyWords.map((word, widx) => (
                      <motion.div
                        key={widx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: widx * 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <p className="font-serif text-3xl md:text-5xl text-foreground">
                          {word}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                ) : null}

                <LineReveal
                  reveal={chapter.reveal}
                  lines={[...chapter.preview, "", ...(chapter.expanded || [])]}
                  lineClassName="font-serif text-lg md:text-xl text-foreground/80 leading-[1.9]"
                  focus={chapter.number === "04"}
                />
              </div>
            </Container>
          </Section>

          {/* Chapter separator */}
          {idx < chapters.length - 1 && (
            <div className="flex justify-center py-12 px-6">
              <span className="text-foreground/20 text-2xl">◦</span>
            </div>
          )}
        </div>
      ))}

      {/* SCENE J8 — THE QUOTE */}
      <Section size="screen" background="transparent" className="relative z-10 border-t border-foreground/[0.07]">
        <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
          008
        </div>

        {/* Ghost watermark */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
          <span className="font-serif text-[35vw] text-foreground/[0.02] tracking-tighter font-bold leading-none">
            —
          </span>
        </div>

        <Container width="narrow" className="text-center flex flex-col justify-center h-full">
          {/* Top hairline */}
          <div className="flex justify-center mb-16">
            <div className="w-20 h-px bg-foreground/[0.09]" />
          </div>

          <LineReveal
            reveal="blur"
            lines={["I've been there.", "", "I can walk with you."]}
            lineClassName="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-relaxed"
          />

          {/* Bottom hairline */}
          <div className="flex justify-center mt-16">
            <div className="w-20 h-px bg-foreground/[0.09]" />
          </div>
        </Container>
      </Section>

      {/* SCENE J9 — CLIENT EXPERIENCE + CLOSE */}
      <Section size="lg" background="muted" className="relative z-10">
        <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
          009
        </div>

        <Container width="default" className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
          <ScrollReveal>
            <h2 className="font-sans text-[9px] text-primary lg:sticky lg:top-40 tracking-[0.3em] uppercase font-bold">
              What Working Together Looks Like
            </h2>
          </ScrollReveal>

          {/* Client experience flow */}
          <div className="lg:border-l lg:border-foreground/[0.09] lg:pl-16 space-y-16">
            {clientExperienceSteps.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-3">{item.step}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  {idx < clientExperienceSteps.length - 1 && (
                    <p className="text-foreground/20 mt-6 text-center">·</p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>

        {/* Closing quote */}
        <Container width="narrow" className="mt-32 text-center">
          <ScrollReveal>
            <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed italic mb-16">
              "You don't need to have it all figured out."
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground leading-relaxed mb-16">
              Come as you are. With your questions, your doubts, your hopes. This space is designed to meet you there—not to push you somewhere else.
            </p>
          </ScrollReveal>

          {/* Ceremony close */}
          <ScrollReveal delay={0.3}>
            <div className="flex items-center gap-8 justify-center mb-16">
              <div className="h-px flex-1 max-w-[80px] bg-foreground/[0.07]" />
              <span className="font-sans text-[9px] tracking-[0.5em] uppercase text-foreground/30">
                A beginning
              </span>
              <div className="h-px flex-1 max-w-[80px] bg-foreground/[0.07]" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Magnetic strength={0.3}>
                <Link
                  href="/begin"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-700 font-sans text-sm tracking-widest uppercase"
                >
                  Begin
                  <span>→</span>
                </Link>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Link
                  href="/voices"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-700 font-sans text-sm tracking-widest uppercase"
                >
                  Read Reflections
                  <span>→</span>
                </Link>
              </Magnetic>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      <Footer />
    </main>
  )
}
