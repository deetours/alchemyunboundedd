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
import { PricingCTA } from "@/components/pricing-card"
import Link from "next/link"

const movementTestimonials = [
  {
    quote:
      "The physical benefits are undeniable, but more importantly, Harish's approach instilled in me a sense of body awareness and self-confidence.",
    name: "Bharath",
    role: "Movement Practitioner",
    location: "US",
  },
  {
    quote:
      "As a teacher, Harish excels. His approach is marked by patience, humility, and a genuine concern for his client's well-being.",
    name: "Sumedha Sharma",
    role: "Country Director, iPartner India",
    location: "India",
  },
  {
    quote:
      "Harish is a highly methodical and patient instructor, which creates a sense of calm while performing the movements. His techniques not only enhance present well-being but also help in preparing for a healthier and more balanced future.",
    name: "Mousumi Mandal",
    role: "Product Development Manager, FIS",
    location: "India",
  },
]

export default function MovementArtsPage() {
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

  const pageBg = useTransform(
    scrollYProgress,
    [0, 0.12, 0.22, 0.35, 0.50, 0.65, 0.80, 0.95],
    [
      "oklch(0.98 0.005 85)",   
      "oklch(0.96 0.008 85)",   
      "oklch(0.98 0.005 85)",   
      "oklch(0.94 0.015 75)",   
      "oklch(0.98 0.005 85)",   
      "oklch(0.93 0.012 80)",  
      "oklch(0.98 0.005 85)",   
      "oklch(0.96 0.01 85)",    
    ]
  )

  const heroBlur = useTransform(heroLenisScroll, [0, 0.5], [0, 12])
  const heroOpacity = useTransform(heroLenisScroll, [0, 0.4], [1, 0])
  const heroScale = useTransform(heroLenisScroll, [0, 0.5], [1, 1.05])
  const heroImageOpacity = useTransform(heroLenisScroll, [0, 0.4], [0.2, 0])
  const scrollIndicatorOpacity = useTransform(heroLenisScroll, [0, 0.12], [1, 0])

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
        <div className="fixed left-0 top-0 bottom-0 w-px z-[100] hidden lg:block">
          <motion.div 
            className="w-full bg-primary/30 origin-top"
            style={{ height: progressHeight }}
          />
        </div>

        <motion.div
          className="fixed inset-0 pointer-events-none z-[1]"
          style={{
            background: ambientBg,
            willChange: "background",
            transform: "translateZ(0)",
          }}
        />

        <div className="relative z-10">
          <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
                  className="font-serif text-5xl md:text-7xl lg:text-[6rem] xl:text-[7.5rem] text-foreground leading-[0.95] tracking-tighter mb-12"
                >
                  Movement
                  <br />
                  <span className="italic text-primary">Arts Training</span>
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
                  For those disconnected from their bodies. For anyone ready to remember that wisdom lives in the flesh.
                </motion.p>
              </motion.div>
            </div>

            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                style={{
                  scale: heroScale,
                  opacity: heroImageOpacity,
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
                    src="/contemplative-man-in-natural-light-peaceful-portra.jpeg"
                    alt="Movement practitioner"
                    fill
                    priority
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
          </section>

          <Section size="lg" className="border-t border-foreground/[0.07] relative z-10">
            <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
              001
            </div>
            <Container width="narrow" className="space-y-32">
              <div>
                <ScrollReveal>
                  <h3 className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary mb-10 block font-bold">
                    The Practice
                  </h3>
                </ScrollReveal>
                <LineReveal
                  lines={[
                    "Movement Arts Training is a",
                    "psycho-physical practice rooted",
                    "in awareness, adaptability, and",
                    "embodied intelligence.",
                    "",
                    "No choreography, no performance.",
                    "Simply returning home to the body."
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
                    "Those seeking greater body awareness.",
                    "Those ready to release what's",
                    "been held in the tissues.",
                    "",
                    "Anyone who desires a felt sense",
                    "of being at home in their own skin."
                  ]}
                  className="text-left"
                  lineClassName="font-serif text-3xl md:text-5xl text-foreground leading-[1.3] tracking-tight"
                  focus={true}
                />
              </div>
            </Container>
          </Section>

          <Section size="screen" background="transparent" className="relative z-10 border-t border-foreground/[0.07]">
            <Container width="wide" className="text-center overflow-hidden flex flex-col justify-center items-center">
              <LineReveal
                as="h2"
                reveal="blur"
                lines={[
                  "The body is not a machine.",
                  "",
                  "It is a wisdom center.",
                  "",
                  "The tension is not an error.",
                  "",
                  "It is a doorway.",
                  "",
                  "Step in."
                ]}
                lineClassName="font-serif text-[12vw] md:text-[8vw] text-foreground leading-[1.0] tracking-tighter italic"
                focus={true}
              />
            </Container>
          </Section>

          <Section size="lg" className="border-t border-foreground/[0.07] relative z-10" background="transparent">
            <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
              002
            </div>
            <Container width="default" className="grid lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-24">
              <ScrollReveal>
                <h2 className="font-sans text-[10px] text-primary lg:sticky lg:top-40 mb-16 lg:mb-0 tracking-[0.3em] uppercase font-bold">
                  What The Practice Offers
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
                      Greater body awareness through gentle, exploratory movement sessions that honor your body's natural wisdom.
                    </p>
                  </ScrollReveal>
                </div>

                <div className="grid lg:grid-cols-[100px_1fr] gap-8 items-start">
                  <ScrollReveal>
                    <span className="font-serif text-6xl md:text-8xl text-primary/[0.08] lg:sticky lg:top-40 block italic">02</span>
                  </ScrollReveal>
                  <ScrollReveal variant="fade-scale" delay={0.1}>
                    <p className="text-foreground text-3xl md:text-5xl lg:text-[3.5rem] font-serif leading-[1.25] tracking-tight">
                      Emotional release held in tissues. Space for the body to speak what words cannot express.
                    </p>
                  </ScrollReveal>
                </div>

                <div className="grid lg:grid-cols-[100px_1fr] gap-8 items-start">
                  <ScrollReveal>
                    <span className="font-serif text-6xl md:text-8xl text-primary/[0.08] lg:sticky lg:top-40 block italic">03</span>
                  </ScrollReveal>
                  <ScrollReveal variant="fade-scale" delay={0.1}>
                    <p className="text-foreground text-3xl md:text-5xl lg:text-[3.5rem] font-serif leading-[1.25] tracking-tight">
                      A felt sense of being at home in your own skin. Presence that grounds you in the here and now.
                    </p>
                  </ScrollReveal>
                </div>
              </div>
            </Container>
          </Section>

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
                    Voices from This Practice
                  </h2>
                </div>
              </ScrollReveal>
              <div className="columns-1 md:columns-2 gap-20 space-y-20 lg:space-y-32">
                {movementTestimonials.map((testimonial, index) => (
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
                  Training Cycles
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto font-sans">
                  Movement Arts Training is offered in cycles that build upon each other, allowing the body to integrate new patterns of awareness and expression over time.
                </p>
              </ScrollReveal>

              <div className="flex flex-col gap-0 border-t border-b border-foreground/[0.07]">
                {[
                  {
                    title: "Short-Term Cycle",
                    sessions: "10 × 60-minute sessions",
                    extras: "Ideal for foundational reset",
                    price: "₹3,750 / $45 USD per session"
                  },
                  {
                    title: "6-Month Cycle",
                    sessions: "25–50 sessions over six months",
                    extras: "For deeper neuro-muscular integration",
                    price: "₹3,300 / $40 USD per session"
                  },
                  {
                    title: "Long-Term Training",
                    sessions: "Ongoing practice, flexible scheduling",
                    extras: "Commitment to mastery",
                    price: "₹3,300 / $40 USD per session"
                  }
                ].map((tier, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="grid md:grid-cols-2 gap-8 py-10 md:py-16 border-b border-foreground/[0.04] last:border-0 items-start group transition-colors hover:bg-foreground/[0.01] -mx-4 px-4">
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

              <ScrollReveal delay={0.6} className="mt-32 border-t border-foreground/[0.04] pt-32">
                <div id="begin" className="w-full">
                  <ProgressiveForm />
                </div>
              </ScrollReveal>
            </Container>
          </Section>
        </div>
        
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
