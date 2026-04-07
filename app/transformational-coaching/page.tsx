"use client"

import { useLenis } from "@studio-freight/react-lenis"
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { LineReveal } from "@/components/line-reveal"
import { Button } from "@/components/ui/button"
import { Section, Container } from "@/components/ui/section"
import { Magnetic } from "@/components/magnetic"
import { Mail, MessageCircle, Calendar } from "lucide-react"

export default function TransformationalCoachingPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

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

  const pageBg = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "oklch(0.98 0.005 85)", 
      "oklch(0.18 0.01 60)", // Deep Diagnosis
      "oklch(0.98 0.005 85)", // True Work
      "oklch(0.95 0.01 85)", // Archetypes
      "oklch(0.12 0.02 145)", // Deep Waters
      "oklch(0.98 0.005 85)", // CTA
    ]
  )

  const pageTextColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.35, 0.55, 0.75, 0.85],
    [
      "oklch(0.25 0.01 60)",
      "oklch(0.95 0.005 85)", // Diagnosis text
      "oklch(0.95 0.005 85)",
      "oklch(0.25 0.01 60)", // True Work text
      "oklch(0.25 0.01 60)",
      "oklch(0.95 0.005 85)", // Deep Waters text
      "oklch(0.25 0.01 60)", // CTA text
    ]
  )

  return (
    <>
      <Navigation />
      <motion.main 
        ref={containerRef}
        className="relative min-h-screen overscroll-none"
        style={{ 
          backgroundColor: pageBg, 
          color: pageTextColor,
          willChange: "background-color, color",
          transform: "translateZ(0)",
        }}
      >
        {/* GLOBAL AMBIENT LAYER */}
        <motion.div
           className="fixed inset-0 pointer-events-none z-0"
           style={{ 
             background: ambientBg,
             willChange: "background",
             transform: "translateZ(0)",
           }}
        />

        <div className="relative z-10">
          {/* SCENE 1: THE MONOLITH (Hero) */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
               <Image 
                  src="/serene-nature-forest-light-rays-peaceful-morning-m.jpeg" 
                  alt="Cinematic Background" 
                  fill 
                  className="object-cover opacity-20 grayscale brightness-125"
                  priority
               />
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
            </div>
            
            <Container width="narrow" className="relative z-10 text-center">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-8 font-sans text-[10px] tracking-[0.45em] uppercase text-primary"
              >
                Transformational Alchemy
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-8"
              >
                The ordinary transcends. <br />
                <span className="italic text-primary">The mundane becomes magic.</span>
              </motion.h1>
              <ScrollReveal delay={0.8}>
                  <p className="font-sans text-lg md:text-xl text-muted-foreground tracking-wide max-w-lg mx-auto">
                      A space for deep transformation, creative alchemy, and the return to the self.
                  </p>
              </ScrollReveal>
            </Container>
            
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none">
              <span className="font-sans text-[9px] tracking-[0.45em] uppercase opacity-30">Scroll Down</span>
              <div className="w-px h-8 bg-gradient-to-b from-primary/40 to-transparent" />
            </div>
          </section>

          {/* SCENE 2: THE DIAGNOSIS (The Gap) */}
          <Section size="lg" background="transparent" className="relative">
            <div className="absolute top-10 right-10 opacity-10 font-sans text-[10px] tracking-[0.5em] uppercase">01 / Threshold</div>
            <Container width="default" className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
              <ScrollReveal>
                <div className="lg:sticky lg:top-40">
                  <span className="font-sans text-[10px] text-primary tracking-[0.3em] uppercase font-bold block mb-4">The Threshold</span>
                  <h2 className="font-serif text-3xl md:text-4xl italic">The Silence Beneath.</h2>
                </div>
              </ScrollReveal>
              
              <div className="lg:border-l lg:border-white/10 lg:pl-16">
                <LineReveal 
                  lines={[
                    "You are accomplished. You are capable.",
                    "By every visible measure, you are moving forward.",
                    "",
                    "But beneath the momentum, there is a quiet question.",
                    "Simmering tension. An inner conflict.",
                    "A sense that you are performing a life",
                    "rather than inhabiting it."
                  ]}
                  lineClassName="font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.6]"
                  focus={true}
                />
              </div>
            </Container>
          </Section>

          {/* SCENE 3: THE PHILOSOPHY (True Work) */}
          <Section size="lg" background="transparent" className="border-t border-foreground/[0.05]">
             <Container width="default">
                <ScrollReveal>
                    <div className="max-w-3xl mb-24">
                        <span className="font-sans text-[10px] text-primary tracking-[0.3em] uppercase font-bold block mb-4">The Alchemy</span>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1]">Transformational coaching <br /> is not a repair. <span className="italic text-primary">It is a return.</span></h2>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-start">
                    <ScrollReveal>
                        <p className="font-sans text-xl text-muted-foreground leading-relaxed">
                            Most coaching optimizes the machine. We dissolve the machine to find the human. We navigate the layer between the roles you play and the essence you are.
                        </p>
                    </ScrollReveal>
                    <div className="space-y-12">
                        <ScrollReveal delay={0.2}>
                            <h3 className="font-serif text-2xl mb-4 italic">The Architecture of Freedom.</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Together, we move toward a life overflowing with joy, fulfilment, authenticity, clarity, balance, meaning and purpose.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
             </Container>
          </Section>

          {/* SCENE 4: ARCHETYPES (Modern Wisdom) */}
          <Section size="lg" background="transparent" className="border-t border-foreground/[0.05]">
            <Container width="default">
                <div className="flex flex-col md:flex-row gap-12 justify-between items-end mb-24">
                   <ScrollReveal>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">A Holistic Resonance.</h2>
                   </ScrollReveal>
                   <ScrollReveal delay={0.2}>
                        <p className="font-sans text-[10px] tracking-[0.5em] uppercase opacity-40">03 / Resonance</p>
                   </ScrollReveal>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Life", desc: "Unlock the power within to consciously shape your dreams." },
                        { title: "Creativity", desc: "Life as your greatest creative work. Every act is an art." },
                        { title: "Movement", desc: "Embodied presence. The physical as a channel for truth." }
                    ].map((item, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                           <div className="p-12 border border-foreground/10 bg-background/50 hover:bg-background transition-all duration-700 min-h-[300px] flex flex-col group">
                               <h4 className="font-sans text-[9px] tracking-[0.4em] uppercase text-primary mb-8 font-bold">{item.title}</h4>
                               <p className="font-serif text-xl md:text-2xl leading-relaxed italic group-hover:text-foreground transition-colors">{item.desc}</p>
                           </div>
                        </ScrollReveal>
                    ))}
                </div>
            </Container>
          </Section>

          {/* SCENE 5: THE DEEP DESCENT (Shadow & Truth) */}
          <Section size="screen" className="flex items-center overflow-hidden">
             <Container width="narrow" className="text-center">
                <LineReveal 
                    lines={[
                      "The journey is not always linear.",
                      "There are deep waters.",
                      "There are shadowed valleys.",
                      "",
                      "We enter them with courage.",
                      "We stay there with presence.",
                      "Until the truth emerges —",
                      "luminous and undeniable."
                    ]}
                    lineClassName="font-serif text-[ clamp(2rem,5vw,5rem)] leading-[1.2] italic"
                    focus={true}
                />
             </Container>
          </Section>

          {/* SCENE 6: MODALITIES (Tools of Alchemy) */}
          <Section size="lg" background="transparent" className="border-t border-foreground/[0.05]">
            <Container width="default">
                <div className="grid lg:grid-cols-2 gap-24">
                   <ScrollReveal>
                      <div className="lg:sticky lg:top-40">
                         <span className="font-sans text-[10px] text-primary tracking-[0.3em] uppercase font-bold block mb-4">The Work</span>
                         <h2 className="font-serif text-4xl md:text-5xl mb-12 italic">Deep Listening. <br/> Intentional Presence.</h2>
                         <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                            I am committed to helping you navigate the challenges of the transformational journey, tap into your own resonant potential, and unveil the essence of your true self.
                         </p>
                      </div>
                   </ScrollReveal>
                   
                   <div className="space-y-32">
                      {[
                        { tip: "Deep Presence", text: "Together we create a space where your own wisdom can be heard above the noise." },
                        { tip: "Shadow Integration", text: "We welcome the full spectrum of your being, finding gold in the places we often hide." },
                        { tip: "Creative Flow", text: "We dissolve the blocks that prevent your natural expression from surfacing." },
                        { tip: "Conscious Manifestation", text: "We align your inner world with your outer actions to create a life of purpose." }
                      ].map((mod, i) => (
                        <ScrollReveal key={i} delay={0.1}>
                           <div className="border-b border-foreground/10 pb-12">
                              <h4 className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary mb-6 font-bold">{mod.tip}</h4>
                              <p className="font-serif text-2xl md:text-3xl leading-snug">{mod.text}</p>
                           </div>
                        </ScrollReveal>
                      ))}
                   </div>
                </div>
            </Container>
          </Section>

          {/* SCENE 7: THE THRESHOLD (Final CTA) */}
          <Section size="lg" className="relative overflow-hidden bg-background">
            <Container width="narrow" className="text-center">
                <ScrollReveal>
                    <h2 className="font-serif text-4xl md:text-6xl mb-12">Are you ready to cross?</h2>
                </ScrollReveal>
                
                <ScrollReveal delay={0.2}>
                    <p className="font-sans text-xl text-muted-foreground mb-20 max-w-xl mx-auto leading-relaxed">
                        The realm of transformative life coaching awaits. Where the ordinary transcends and the mundane transforms into magic.
                    </p>
                </ScrollReveal>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                    <ScrollReveal delay={0.4}>
                        <Magnetic strength={0.3}>
                            <Button variant="brand-primary" size="xl" asChild className="min-w-[280px]">
                                <Link href="https://wa.me/919900000000" className="flex items-center justify-center gap-4 group">
                                   <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                   <div className="text-left">
                                      <span className="block text-xs uppercase tracking-widest mb-1">WhatsApp</span>
                                      <span className="text-[10px] opacity-40 font-normal normal-case">Immediate Connection</span>
                                   </div>
                                </Link>
                            </Button>
                        </Magnetic>
                    </ScrollReveal>

                    <ScrollReveal delay={0.6}>
                        <Magnetic strength={0.3}>
                            <Button variant="brand-outline" size="xl" asChild className="min-w-[280px]">
                                <Link href="https://calendly.com/harish/discovery" className="flex items-center justify-center gap-4 group">
                                   <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                   <div className="text-left">
                                      <span className="block text-xs uppercase tracking-widest mb-1">Schedule</span>
                                      <span className="text-[10px] opacity-40 font-normal normal-case">Private Discovery Call</span>
                                   </div>
                                </Link>
                            </Button>
                        </Magnetic>
                    </ScrollReveal>
                </div>
            </Container>
          </Section>

          <Footer />
        </div>
      </motion.main>
    </>
  )
}
