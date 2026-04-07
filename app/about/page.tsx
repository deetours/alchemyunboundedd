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

export default function AboutPage() {
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
        className="relative min-h-screen"
        style={{ backgroundColor: "oklch(0.98 0.005 85)" }}
      >
        {/* GLOBAL AMBIENT LAYER */}
        <motion.div
          className="fixed inset-0 pointer-events-none z-0"
          style={{ background: ambientBg }}
        />

        <motion.div className="origin-top relative z-10">

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* SCENE 1: CHARACTER REVEAL — Cinematic Aperture                      */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="relative z-10 w-full max-w-[1000px] mx-auto px-8 md:px-12 text-center mt-20">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 font-sans text-[10px] tracking-[0.45em] uppercase text-primary"
            >
              The Story Behind the Work
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-6xl md:text-[7rem] lg:text-[10rem] text-foreground leading-[0.9] tracking-tighter"
            >
              I have been
              <br />
              <span className="text-primary italic">where you are.</span>
            </motion.h1>
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.4, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-20 h-px bg-primary/30 mx-auto mt-20 origin-left"
            />
          </div>
          
          {/* Background Cinematic Aperture */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.28 }}
                transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ 
                    WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 75%)",
                    maskImage: "radial-gradient(circle at center, black 40%, transparent 75%)"
                }}
                className="w-full h-full"
            >
                <Image
                    src="/contemplative-man-in-natural-light-peaceful-portra.jpeg"
                    alt="Harish"
                    fill
                    priority
                    className="object-cover"
                />
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-foreground/[0.07]" />
        </section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* SCENE 2: STAND AGAINST — Asymmetric Corridor                       */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <Section size="content" background="transparent" className="relative z-10 border-t border-foreground/[0.07]">
          <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
            001
          </div>

          <Container width="default" className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
            <ScrollReveal>
              <div className="lg:sticky lg:top-40">
                <div className="mb-2 font-sans text-[9px] tracking-[0.5em] text-foreground/25 uppercase">
                  Belief
                </div>
                <h2 className="font-sans text-[10px] text-primary mb-12 lg:mb-0 tracking-[0.3em] uppercase font-bold">
                  What I Stand Against
                </h2>
              </div>
            </ScrollReveal>

            <div className="lg:border-l lg:border-foreground/[0.09] lg:pl-16">
              <LineReveal
                lines={[
                  "I do not believe in fixing people.",
                  "",
                  "I do not believe transformation should feel like more achievement.",
                  "",
                  "I do not believe the work should feel like more work.",
                  "",
                  "What I believe in is something far more ancient:",
                  "the alchemy of returning to yourself.",
                ]}
                className="text-left"
                lineClassName="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-[1.6]"
                focus={true}
              />
              <ScrollReveal delay={0.8}>
                <p className="mt-16 text-muted-foreground leading-relaxed max-w-2xl text-lg font-sans">
                  Every person who sits across from me already carries what they are looking for. My work is to create the conditions in which their own knowing can finally speak.
                </p>
              </ScrollReveal>
            </div>
          </Container>
        </Section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* SCENE 3: ESSENCE — Full-Viewport Isolation                           */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <Section size="screen" background="transparent" className="relative z-10 border-t border-foreground/[0.07] flex items-center justify-center">
          <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
            002
          </div>
          <div className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 65% 55% at center, transparent 35%, oklch(0.12 0.02 145 / 0.04) 100%)",
            }}
          />
          <Container width="default" className="text-center">
            <LineReveal
              reveal="blur"
              lines={[
                  "Someone who listens past the words.",
                  "Someone who sees what you cannot yet name.",
                  "Someone who will not flinch at the full truth of you.",
                  "Someone who holds steady when you cannot.",
                  "Someone who has walked the same fire.",
                ]}
              className="mb-16"
              lineClassName="font-serif text-[8vw] md:text-[6vw] text-foreground leading-[1.1] tracking-tighter"
              focus={true}
            />
            <ScrollReveal delay={1.2}>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-lg italic border-t border-foreground/[0.05] pt-12">
                Not titles I chose — what the work called out of me, through years of unraveling, and the joy of what lay on the other side.
              </p>
            </ScrollReveal>
          </Container>
        </Section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* SCENE 4: INNER JOURNEY — Asymmetric Corridor                       */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <Section size="content" background="transparent" className="relative z-10 border-t border-foreground/[0.07]">
          <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
            003
          </div>

          <Container width="default" className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
            <ScrollReveal>
              <div className="lg:sticky lg:top-40">
                <div className="mb-2 font-sans text-[9px] tracking-[0.5em] text-foreground/25 uppercase">
                  History
                </div>
                <h2 className="font-sans text-[10px] text-primary mb-12 lg:mb-0 tracking-[0.3em] uppercase font-bold">
                  The Inner Journey
                </h2>
              </div>
            </ScrollReveal>

            <div className="lg:border-l lg:border-foreground/[0.09] lg:pl-16">
              <LineReveal
                lines={[
                  "I was trained as an engineer.",
                  "I learned to think in systems, in logic,",
                  "in what can be measured and solved.",
                  "",
                  "Then life gave me problems",
                  "that could not be solved — only inhabited.",
                  "",
                  "I turned inward.",
                  "That turn changed everything.",
                ]}
                className="text-left"
                lineClassName="font-serif text-3xl md:text-5xl text-foreground leading-[1.2] tracking-tight"
                focus={true}
              />
              <ScrollReveal delay={0.8}>
                <p className="mt-16 text-muted-foreground leading-relaxed max-w-2xl text-lg font-sans">
                  The path was not clean. Years of leaving behind what I had built — of learning to trust a different kind of knowing. I found what I was looking for. And found that others were searching for the same thing. That is why Alchemy Unbounded exists.
                </p>
              </ScrollReveal>
            </div>
          </Container>
        </Section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* SCENE 5: BREAK — Cinematic Vignette                                */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <Section size="screen" background="transparent" className="relative z-10 border-t border-foreground/[0.07] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0">
            <Image 
              src="/misty-mountain-path-journey-peaceful-nature-dawn.jpeg" 
              alt="Misty Mountain" 
              fill 
              className="object-cover opacity-[0.25]" 
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 65% 55% at center, transparent 35%, oklch(0.12 0.02 145 / 0.12) 100%)",
              }}
            />
          </div>
          
          <Container width="wide" className="relative z-10 text-center flex flex-col items-center justify-center h-full">
            <ScrollReveal>
              <span className="font-serif text-[15vw] md:text-[18vw] text-foreground/[0.04] tracking-tighter select-none font-bold italic">
                Return
              </span>
            </ScrollReveal>
          </Container>
        </Section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* SCENE 6: FRAMEWORK — Sticky Timeline                               */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <Section size="lg" background="transparent" className="relative z-10 border-t border-foreground/[0.07]">
          <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
            004
          </div>

          <Container width="default" className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
            <ScrollReveal>
              <div className="lg:sticky lg:top-40">
                <div className="mb-2 font-sans text-[9px] tracking-[0.5em] text-foreground/25 uppercase">
                  Mechanism
                </div>
                <h2 className="font-sans text-[10px] text-primary mb-12 lg:mb-0 tracking-[0.3em] uppercase font-bold">
                  The Alchemy Becoming Path
                </h2>
                <div className="mt-12">
                     <p className="text-muted-foreground text-sm max-w-[240px] leading-relaxed">
                        This is not a method with steps. This is a living arc that unfolds uniquely for every person.
                    </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="relative lg:border-l lg:border-foreground/[0.09] lg:pl-16 space-y-32 md:space-y-[50vh] pb-[20vh]">
              <div className="absolute left-0 top-4 bottom-4 w-px bg-foreground/[0.04] hidden lg:block -translate-x-16" />
              
              {[
                { stage: "01", title: "Awakening", description: "The moment when the familiar story begins to feel like a borrowed coat — recognizably not yours. You see the gap between who you have been performing and who you actually are. You cannot un-see it." },
                { stage: "02", title: "Dissolution", description: "Meeting the architecture you built to survive — with compassion, not judgment. The structures that once protected you begin to lose their authority." },
                { stage: "03", title: "Embodied Integration", description: "Understanding moves from the mind into the body. You do not just know differently. You stand differently. The shift is cellular — and irreversible." },
                { stage: "04", title: "Authentic Expression", description: "What was hidden begins to surface without apology. The voice that was carefully managed becomes the voice that leads." },
                { stage: "05", title: "Embodied Leadership", description: "Your inner coherence becomes visible. You carry authority rather than project it. Your presence becomes its own form of communication." },
              ].map((item) => (
                <div key={item.stage} className="grid lg:grid-cols-[1fr_3fr] gap-8 items-start">
                  <ScrollReveal>
                    <span className="font-sans text-[10px] tracking-[0.3em] text-primary lg:sticky lg:top-40 uppercase block font-bold">
                      {item.stage} — {item.title}
                    </span>
                  </ScrollReveal>
                  <ScrollReveal variant="fade-scale">
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
        {/* SCENE 7: THE CALLING — Reversed Asymmetric Corridor                 */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <Section size="content" background="transparent" className="relative z-10 border-t border-foreground/[0.07]">
          <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
            005
          </div>

          <Container width="default" className="grid lg:grid-cols-[2fr_1fr] gap-12 lg:gap-24">
            <div>
              <ScrollReveal>
                <div className="mb-2 font-sans text-[9px] tracking-[0.5em] text-foreground/25 uppercase">
                  Service
                </div>
                <h2 className="font-sans text-[10px] text-primary mb-12 tracking-[0.3em] uppercase font-bold">
                  The Calling
                </h2>
              </ScrollReveal>
              <LineReveal
                lines={[
                  "There was a moment when I understood",
                  "that the life I had built",
                  "was an extraordinary container —",
                  "for the wrong contents.",
                ]}
                className="text-left mb-12"
                lineClassName="font-serif text-3xl md:text-5xl text-foreground leading-[1.2] tracking-tight"
                focus={true}
              />
              <ScrollReveal delay={0.6}>
                <p className="text-muted-foreground leading-relaxed max-w-2xl text-xl font-serif italic">
                  I did not plan what came next. I listened. And then I moved toward what I heard — without the guarantee of a map, and with more aliveness than I had felt in years.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:border-l lg:border-foreground/[0.09] lg:pl-12 flex flex-col justify-end">
              <ScrollReveal delay={0.8}>
                <div className="space-y-4">
                    <p className="font-serif text-lg md:text-xl text-foreground italic border-l-2 border-primary/30 pl-4 py-1">
                        "Leaving the known was not a loss."
                    </p>
                    <p className="font-serif text-lg md:text-xl text-foreground italic border-l-2 border-primary/30 pl-4 py-1">
                        "It was the first honest thing I had done in years."
                    </p>
                    <p className="font-serif text-lg md:text-xl text-foreground italic border-l-2 border-primary/30 pl-4 py-1">
                        "What I found on the other side of that threshold"
                    </p>
                    <p className="font-serif text-lg md:text-xl text-foreground italic border-l-2 border-primary/30 pl-4 py-1">
                        "became the foundation of everything I now offer."
                    </p>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </Section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* SCENE 8: LINEAGE — Editorial Ledger                                 */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <Section size="content" background="transparent" className="relative z-10 border-t border-foreground/[0.07]">
          <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
            006
          </div>

          <Container width="default">
            <ScrollReveal className="mb-20">
              <div className="flex items-center gap-8 mb-10 justify-center">
                <div className="h-px flex-1 max-w-[80px] bg-foreground/[0.07]" />
                <span className="font-sans text-[9px] tracking-[0.5em] uppercase text-foreground/30">Lineage</span>
                <div className="h-px flex-1 max-w-[80px] bg-foreground/[0.07]" />
              </div>
              <h2 className="font-serif text-5xl md:text-6xl text-foreground text-center mb-16">
                Training & Lineage
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-center text-lg font-sans">
                The work I offer is not mine alone. It has been shaped by teachers who modeled depth, integrity, and the courage to work at the level of the soul:
              </p>
            </ScrollReveal>

            <div className="border-b border-foreground/[0.05]">
                {[
                { name: "Eric Maisel", focus: "Creativity coaching, meaning-centered work" },
                { name: "Jill Badonsky", focus: "Certified Master Kaizen-Muse Creativity Coach" },
                { name: "Leon VanderPol", focus: "Deep Transformational Coaching" },
                { name: "Stevie Kent", focus: "Mind Shifting methodology" },
                { name: "Jozef Frucek & Linda Kapetanea", focus: "Fighting Monkey practice — movement as human development" },
                ].map((teacher, index) => (
                    <ScrollReveal key={teacher.name} delay={0.1 * index}>
                        <div className="grid grid-cols-[1fr_2fr] py-10 border-t border-foreground/[0.05] group">
                            <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors duration-500">{teacher.name}</h3>
                            <p className="text-muted-foreground text-sm tracking-wide uppercase italic">{teacher.focus}</p>
                        </div>
                    </ScrollReveal>
                ))}
            </div>

            <ScrollReveal delay={0.7} className="mt-12 mb-4">
                <p className="text-muted-foreground leading-relaxed max-w-2xl text-lg font-sans italic">
                  What emerged is not a method I learned. It is a practice I have lived.
                </p>
            </ScrollReveal>

            <ScrollReveal delay={0.8} className="mt-8">
                <div className="p-12 border border-foreground/[0.07] bg-foreground/[0.02] relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
                        <span className="font-serif text-[10vw]">"</span>
                    </div>
                    <p className="font-serif text-2xl md:text-3xl text-foreground italic leading-relaxed mb-8 relative z-10">
                        "He coaches with his heart, life wisdom, and originality in a way you feel completely taken care of."
                    </p>
                    <p className="text-xs font-sans uppercase tracking-[0.3em] text-primary">
                        — Jill Badonsky, Creator & Teacher of Kaizen-Muse Creativity Coaching Training
                    </p>
                </div>
            </ScrollReveal>
          </Container>
        </Section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* SCENE 9: CREDENTIALS — Premium Authority Bar                         */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <Section size="sm" background="transparent" className="relative z-10 border-t border-foreground/[0.07]">
            <Container width="default">
                <ScrollReveal>
                    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-40">
                        {[
                        "Mechanical Engineering, Purdue University",
                        "SAP Logistics & Supply Chain Consultant",
                        "Years in the US corporate world",
                        "Until the call became undeniable.",
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-12 group">
                                <span className="font-sans text-[10px] tracking-[0.4em] uppercase whitespace-nowrap hover:text-primary transition-colors">
                                    {item}
                                </span>
                                {index < 3 && <div className="w-1 h-1 rounded-full bg-primary/40" />}
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </Container>
        </Section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* SCENE 10: CTA — Ceremony Close                                     */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <Section size="default" background="transparent" className="relative z-10 border-t border-foreground/[0.07]">
          <Container width="prose" className="text-center py-20">
            <ScrollReveal>
              <div className="flex items-center gap-8 mb-10 justify-center">
                <div className="h-px flex-1 max-w-[80px] bg-foreground/[0.07]" />
                <span className="font-sans text-[9px] tracking-[0.5em] uppercase text-foreground/30">The Work</span>
                <div className="h-px flex-1 max-w-[80px] bg-foreground/[0.07]" />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-12 italic">
                Curious about what the work actually looks like?
              </h3>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <Magnetic strength={0.4}>
                <Button variant="brand-outline" size="xl" asChild>
                  <Link href="/the-work">Explore the work</Link>
                </Button>
              </Magnetic>
            </ScrollReveal>
          </Container>
        </Section>
      </motion.div>

      <Footer />
    </motion.main>
    </>
  )
}
