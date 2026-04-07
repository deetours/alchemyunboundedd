"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { LineReveal } from "@/components/line-reveal"
import { Magnetic } from "@/components/magnetic"
import { Container } from "@/components/ui/section"
import Link from "next/link"

// Avatar Component — placeholder with initials
const Avatar = ({ initials, name, size = "md" }: { initials: string; name: string; size?: "sm" | "md" | "lg" }) => {
  const sizeMap = {
    sm: "w-8 h-8 text-xs",
    md: "w-12 h-12 text-sm",
    lg: "w-16 h-16 text-lg",
  }

  const colors = [
    "bg-blue-100 text-blue-700",
    "bg-purple-100 text-purple-700",
    "bg-pink-100 text-pink-700",
    "bg-green-100 text-green-700",
    "bg-amber-100 text-amber-700",
    "bg-indigo-100 text-indigo-700",
    "bg-rose-100 text-rose-700",
    "bg-cyan-100 text-cyan-700",
  ]

  // Consistent color based on initials hash
  const colorIdx = initials.charCodeAt(0) % colors.length
  const bgColor = colors[colorIdx]

  return (
    <motion.div
      className={`${sizeMap[size]} ${bgColor} rounded-full flex items-center justify-center font-semibold tracking-tight`}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
      title={name}
    >
      {initials}
    </motion.div>
  )
}

const voicesData = {
  katerina: {
    quote: "Each of our sessions is the discovery of a new location on the map of my own inner world.",
    name: "Katerina Svetkova",
    role: "Creative Director & Dancer",
    location: "Russia",
    initials: "KS",
  },
  kapildev: {
    quote:
      "Working with Harish has been one of the most transformative experiences of my life. His approach is not formulaic—it's deeply personal, intuitive, and anchored in truth. If you're looking for a coach who can help you evolve not just professionally but as a human being, Harish is that guide.",
    name: "Kapildev Verma",
    role: "Head - Client Servicing",
    company: "Marcellus Investment Managers",
    location: "India",
    initials: "KV",
  },
  gallery: [
    {
      quote:
        "After a year and a half of receiving life coaching, I found the strength and clarity to completely change my life.",
      name: "Katy Haldiman",
      role: "Health Care Professional & Photographer",
      location: "US",
      format: "A",
      initials: "KH",
    },
    {
      quote: "He coaches with his heart, life wisdom, and originality in a way you feel completely taken care of.",
      name: "Jill Badonsky",
      role: "Creator & Teacher of Kaizen-Muse Creativity Coaching Training",
      location: "US",
      format: "A",
      initials: "JB",
    },
    {
      quote:
        "Harish has a remarkable ability to connect you with your inner wisdom, guiding you to answers you already have within.",
      name: "M.R.",
      role: "Founder, Personal Growth Company",
      location: "US",
      format: "B",
      initials: "MR",
    },
    {
      quote: "Harish helped me see that I was going through a period of change and I needed patience and trust in my work and myself during this time.",
      name: "Cordula Kagemann",
      role: "Visual Artist & Educator",
      location: "Germany",
      format: "B",
      initials: "CK",
    },
    {
      quote: "Harish helped me embody the quality of a flower – expressing & becoming a channel for my own colourful bloom!",
      name: "Dean Philp",
      role: "AI Researcher, Movement Practitioner & Parkour Instructor",
      location: "Australia",
      format: "B",
      initials: "DP",
    },
    {
      quote: "What I loved the most about Harish's sessions is the way he is able to weave deeper spiritual truths into our discussions.",
      name: "Amy S.",
      role: "Writer",
      location: "US",
      format: "B",
      initials: "AS",
    },
    {
      quote:
        "What stood out was how Harish seamlessly transitioned from a friend to a coach. His exercises were unique and creative.",
      name: "Shilpa Wadhwa",
      role: "Founder, Wishbox Studio",
      location: "India",
      format: "B",
      initials: "SW",
    },
    {
      quote: "It was only when I made the decision to fully embrace a series of coaching sessions with Harish that I began to see profound changes.",
      name: "Aravindh Dorappa",
      role: "Senior Systems Architect, Ushur",
      location: "India",
      format: "B",
      initials: "AD",
    },
    {
      quote: "Working with Harish has helped me make significant strides on all my challenges in an organic way, and boosted my self-confidence.",
      name: "Bianca Alegria",
      role: "Dancer & Yogic Therapist",
      location: "Portugal",
      format: "C",
      initials: "BA",
    },
    {
      quote: "I've been under the guidance of Harish's creativity coaching for over a year now, and the experience has been life-changing.",
      name: "Miguel Viero",
      role: "Movement Educator & Teacher",
      location: "Spain",
      format: "C",
      initials: "MV",
    },
    {
      quote: "Harish is a very intuitive person with deep focus and the ability to draw connections between seemingly random things.",
      name: "Berny Lobo",
      role: "Communication Consultant & Visual Storyteller",
      location: "India",
      format: "C",
      initials: "BL",
    },
  ],
  powerLines: [
    {
      line: "He has an innate ability to see what we could be instead of what we currently are.",
      author: "Emily Rose",
      role: "Health Care Professional",
      location: "US",
      initials: "ER",
    },
    {
      line: "He coaches with his heart, life wisdom, and originality.",
      author: "Jill Badonsky",
      role: "Creator & Teacher",
      location: "US",
      initials: "JB",
    },
    {
      line: "Harish knows how to ask a question that will bring the answer from the depth of your heart.",
      author: "Julia Egorova",
      role: "Dancer & Movement Teacher",
      location: "Belarus",
      initials: "JE",
    },
    {
      line: "Harish gives me little words of wisdom, reminds me that there's joy to be had.",
      author: "Jennigan",
      role: "Small Business Owner",
      location: "US",
      initials: "JN",
    },
    {
      line: "True to his name, Harish embodies the one who removes darkness, illusion, and all obstacles in the path of life.",
      author: "Neha Agarwal",
      role: "Fashion Designer",
      location: "India",
      initials: "NA",
    },
  ],
  whispers: [
    { quote: "I feel heard, seen, and understood.", author: "Lisa Colburn", role: "Writer", location: "US", initials: "LC" },
    { quote: "I've been able to unlock new levels of my vision for my life.", author: "M.R.", role: "Founder", location: "US", initials: "MR" },
    { quote: "creating a safe space for the sessions", author: "Sudipta Dhruva", role: "Storyteller", location: "India", initials: "SD" },
    { quote: "I needed patience and trust in my work and myself during this time", author: "Cordula Kagemann", role: "Visual Artist", location: "Germany", initials: "CK" },
    { quote: "pain-free living", author: "Manisha Shukla", role: "Artist & Healer", location: "India", initials: "MS" },
  ],
  movement: [
    {
      power: "body awareness and self-confidence",
      full: "The physical benefits are undeniable, but more importantly, Harish's approach instilled in me a sense of body awareness and self-confidence.",
      name: "Bharath",
      role: "Movement Practitioner",
      location: "US",
      initials: "B",
    },
    {
      full: "As a teacher, Harish excels. His approach is marked by patience, humility, and a genuine concern for his client's well-being.",
      name: "Sumedha Sharma",
      role: "Country Director, iPartner India",
      location: "India",
      initials: "SS",
    },
    {
      power: "creates a sense of calm while performing the movements",
      full: "Harish is a highly methodical and patient instructor, which creates a sense of calm while performing the movements.",
      name: "Mousumi Mandal",
      role: "Product Development Manager, FIS",
      location: "India",
      initials: "MM",
    },
  ],
  countries: ["India", "Russia", "Germany", "Australia", "Italy", "Spain", "United States", "Belarus", "Portugal"],
}

export default function VoicesPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const [hoveredPowerLine, setHoveredPowerLine] = useState<number | null>(null)

  // Dark to light to dark color journey
  const pageBg = useTransform(scrollYProgress, [0, 0.08, 0.16, 0.24, 0.42, 0.56, 0.64, 0.74, 0.84, 0.92, 1.0], [
    "oklch(0.08 0.01 145)",  // V1: Deep black
    "oklch(0.08 0.01 145)",  // V2: Black colossal
    "oklch(0.12 0.02 145)",  // V3: Forest breath
    "oklch(0.98 0.005 85)",  // V4: Cream gallery
    "oklch(0.98 0.005 85)",  // V4: Cream holds
    "oklch(0.12 0.02 145)",  // V5: Dark power wall
    "oklch(0.98 0.005 85)",  // V6: Cream long form
    "oklch(0.98 0.005 85)",  // V7: Cream whispers
    "oklch(0.97 0.01 80)",   // V8: Warm cream body
    "oklch(0.97 0.01 80)",   // V9: Warm cream geographic
    "oklch(0.08 0.01 145)",  // V10: Deep black close
  ])

  const pageText = useTransform(scrollYProgress, [0, 0.22, 0.25, 0.55, 0.58, 0.84, 0.91], [
    "oklch(0.98 0.005 85)",  // white on black
    "oklch(0.98 0.005 85)",  // white on forest
    "oklch(0.25 0.01 60)",   // dark on cream
    "oklch(0.25 0.01 60)",   // dark on cream
    "oklch(0.98 0.005 85)",  // white on dark
    "oklch(0.25 0.01 60)",   // dark on cream
    "oklch(0.98 0.005 85)",  // white on black close
  ])

  return (
    <motion.main
      ref={containerRef}
      style={{ backgroundColor: pageBg, color: pageText, willChange: "background-color, color" }}
      className="relative min-h-screen"
    >
      <Navigation />

      {/* SCENE V1 — DARK ENTRY */}
      <section className="min-h-screen flex items-center justify-center overflow-hidden relative">
        <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-white/[0.15] select-none pointer-events-none">
          001
        </div>

        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
          <span className="font-serif text-[25vw] text-white/[0.03] tracking-tighter font-bold leading-none">
            Voices
          </span>
        </div>

        <Container width="narrow" className="relative z-10 text-center">
          <LineReveal
            reveal="blur"
            lines={["Not reviews.", "", "Voices.", "", "From people who crossed a threshold."]}
            lineClassName="font-serif text-2xl md:text-3xl text-white/90 leading-relaxed"
          />
        </Container>
      </section>

      {/* SCENE V2 — THE COLOSSAL VOICE */}
      <section className="min-h-screen flex items-center overflow-hidden relative">
        <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-white/[0.15] select-none pointer-events-none">
          002
        </div>

        <div className="absolute inset-0 flex items-end justify-end overflow-hidden pointer-events-none select-none pr-8 pb-8">
          <span className="font-serif text-[8vw] text-white/[0.03] tracking-tighter font-bold leading-none whitespace-nowrap">
            Katerina Svetkova
          </span>
        </div>

        <Container width="default" className="relative z-10">
          <div className="max-w-6xl">
            <LineReveal
              reveal="blur"
              lines={[
                "Each of our sessions",
                "is the discovery of a new location",
                "on the map of my own inner world.",
              ]}
              lineClassName="font-serif text-[clamp(2rem,4.5vw,5.5rem)] text-white/95 leading-[1.15] tracking-tight"
            />

            <ScrollReveal delay={0.8}>
              <div className="mt-16 pt-8 border-t border-white/[0.09] flex items-start gap-4">
                <Avatar initials={voicesData.katerina.initials} name={voicesData.katerina.name} size="lg" />
                <div>
                  <p className="font-sans text-xs text-white/50 tracking-[0.3em] uppercase font-bold">Katerina Svetkova</p>
                  <p className="font-sans text-[10px] text-white/30 mt-1 uppercase tracking-widest">
                    Creative Director & Dancer — Russia
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>

        {/* Bottom hairline */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <div className="w-20 h-px bg-white/[0.09]" />
        </div>
      </section>

      {/* SCENE V3 — FOREST BREATH */}
      <section className="py-32 flex items-center justify-center relative">
        <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-white/[0.15] select-none pointer-events-none">
          003
        </div>

        <Container width="narrow" className="relative z-10 text-center">
          <ScrollReveal>
            <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-white/40 font-bold">In their own words.</p>
          </ScrollReveal>
        </Container>
      </section>

      {/* SCENE V4 — EDITORIAL GALLERY */}
      <section className="py-32 px-6 relative z-10">
        <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
          004
        </div>

        <Container width="default">
          <div className="space-y-24">
            {voicesData.gallery.map((voice, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} direction="none">
                <div
                  className={`${
                    voice.format === "A"
                      ? "max-w-4xl"
                      : voice.format === "B"
                        ? "max-w-xl"
                        : voice.format === "C"
                          ? "max-w-sm"
                          : "max-w-3xl"
                  } ${idx % 2 === 1 && voice.format === "B" ? "ml-auto" : ""}`}
                >
                  <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                    "{voice.quote}"
                  </p>
                  <div className="border-t border-border/50 pt-6 flex items-start gap-3">
                    <Avatar initials={voice.initials} name={voice.name} size="sm" />
                    <div>
                      <p className="font-sans text-xs font-bold text-primary tracking-[0.2em] uppercase">{voice.name}</p>
                      <p className="font-sans text-[10px] text-foreground/40 mt-1 uppercase tracking-widest">
                        {voice.role} — {voice.location}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* SCENE V5 — POWER WALL */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-white/[0.15] select-none pointer-events-none">
          005
        </div>

        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
          <span className="font-serif text-[20vw] text-white/[0.03] tracking-tighter font-bold leading-none">
            Truth
          </span>
        </div>

        <Container width="default" className="relative z-10">
          <div className="space-y-20 max-w-3xl">
            {voicesData.powerLines.map((voice, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredPowerLine(idx)}
                onMouseLeave={() => setHoveredPowerLine(null)}
              >
                <LineReveal
                  reveal="clip"
                  lines={[voice.line]}
                  lineClassName="font-serif text-2xl md:text-3xl text-white/90 leading-relaxed"
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredPowerLine === idx ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 flex items-center gap-2 font-sans text-xs text-white/30 tracking-[0.2em] uppercase"
                >
                  <Avatar initials={voice.initials} name={voice.author} size="sm" />
                  <span>
                    {voice.author}, {voice.role}, {voice.location}
                  </span>
                </motion.div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SCENE V6 — LONG FORM VOICE */}
      <section className="py-32 px-6 relative z-10">
        <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
          006
        </div>

        <Container width="default" className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
          <ScrollReveal>
            <div className="lg:sticky lg:top-40">
              <div className="flex items-start gap-3 mb-4">
                <Avatar initials={voicesData.kapildev.initials} name={voicesData.kapildev.name} size="md" />
                <div>
                  <p className="font-serif text-sm text-foreground">{voicesData.kapildev.name}</p>
                  <p className="font-sans text-[10px] text-foreground/40 mt-1 tracking-widest uppercase">
                    {voicesData.kapildev.role}
                  </p>
                  <p className="font-sans text-[10px] text-foreground/30 mt-1 tracking-widest uppercase">
                    {voicesData.kapildev.company}
                  </p>
                  <p className="font-sans text-[10px] text-primary/70 mt-1 uppercase tracking-widest">
                    {voicesData.kapildev.location}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="lg:border-l lg:border-foreground/[0.09] lg:pl-16">
            <LineReveal
              reveal="fade"
              focus={true}
              lines={voicesData.kapildev.quote.split("\n")}
              lineClassName="font-serif text-xl md:text-2xl text-foreground leading-[1.8]"
            />
          </div>
        </Container>
      </section>

      {/* SCENE V7 — WHISPER VOICES */}
      <section className="py-32 px-6 relative z-10">
        <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
          007
        </div>

        <div className="text-center mb-16">
          <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-foreground/30 font-bold">Fragments</p>
        </div>

        <div className="space-y-16 max-w-3xl mx-auto">
          {voicesData.whispers.map((voice, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.2} direction="none">
              <div className={`${[0, 2, 4].includes(idx) ? "text-left" : "text-right ml-auto"}`}>
                <p className="font-serif text-lg md:text-xl text-foreground/60 leading-relaxed italic mb-3">
                  "{voice.quote}"
                </p>
                <div className={`flex items-center gap-2 font-sans text-[10px] text-foreground/30 uppercase tracking-widest ${[0, 2, 4].includes(idx) ? "flex-row" : "flex-row-reverse justify-end"}`}>
                  <Avatar initials={voice.initials} name={voice.author} size="sm" />
                  <span>
                    {voice.author}, {voice.role}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* SCENE V8 — THROUGH THE BODY */}
      <section className="py-32 px-6 relative z-10">
        <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
          008
        </div>

        <Container width="default" className="text-center mb-24">
          <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-foreground/40 font-bold">
            Through the body, everything changes.
          </p>
        </Container>

        <Container width="default" className="space-y-24">
          {voicesData.movement.map((voice, idx) => (
            <ScrollReveal key={idx} direction="none" delay={idx * 0.1}>
              <div className="max-w-3xl">
                {voice.power && idx === 0 && (
                  <p className="font-serif text-4xl md:text-6xl text-foreground leading-tight mb-6 italic">
                    "{voice.power}"
                  </p>
                )}
                {!voice.power || idx !== 0 ? (
                  <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed italic mb-6">
                    "{voice.full}"
                  </p>
                ) : (
                  <p className="font-serif text-lg md:text-xl text-foreground/80 leading-relaxed italic mb-6">
                    "{voice.full}"
                  </p>
                )}
                <div className="border-t border-border/50 pt-6 flex items-start gap-3">
                  <Avatar initials={voice.initials} name={voice.name} size="sm" />
                  <div>
                    <p className="font-sans text-xs font-bold text-primary tracking-[0.2em] uppercase">{voice.name}</p>
                    <p className="font-sans text-[10px] text-foreground/40 mt-1 uppercase tracking-widest">
                      {voice.role} — {voice.location}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </Container>
      </section>

      {/* SCENE V9 — GEOGRAPHIC TAPESTRY */}
      <section className="py-32 px-6 relative z-10">
        <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-foreground/[0.12] select-none pointer-events-none">
          009
        </div>

        <Container width="default" className="text-center">
          <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-foreground/30 font-bold mb-12">
            Voices from nine countries
          </p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
            {voicesData.countries.map((country, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08} direction="none">
                <p
                  className={`font-serif text-foreground/${
                    [0, 2, 4, 6].includes(idx) ? "70" : "50"
                  } ${[1, 3, 5].includes(idx) ? "text-xl md:text-2xl" : "text-lg md:text-xl"}`}
                >
                  {country}
                </p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.8}>
            <p className="font-serif text-xl text-foreground italic">One transformation.</p>
          </ScrollReveal>
        </Container>
      </section>

      {/* SCENE V10 — CEREMONY CLOSE */}
      <section className="min-h-screen flex items-center justify-center overflow-hidden relative text-center">
        <div className="absolute top-8 right-8 font-sans text-[9px] tracking-[0.5em] text-white/[0.15] select-none pointer-events-none">
          010
        </div>

        {/* Top hairline */}
        <div className="absolute top-0 left-0 right-0 flex justify-center">
          <div className="w-20 h-px bg-white/[0.09]" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
          <span className="font-serif text-[40vw] text-white/[0.02] tracking-tighter font-bold leading-none">—</span>
        </div>

        <Container width="narrow" className="relative z-10">
          <LineReveal
            reveal="blur"
            lines={["Somewhere in this,", "you may find yourself."]}
            lineClassName="font-serif text-2xl md:text-3xl text-white/90 leading-relaxed"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-white/30 font-bold mb-8">When you're ready —</p>

            <Magnetic strength={0.4}>
              <Link
                href="/begin"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white/70 hover:border-white/60 hover:text-white transition-all duration-700 font-sans text-sm tracking-widest uppercase"
              >
                Take the first step
                <span>→</span>
              </Link>
            </Magnetic>

            <div className="mt-12">
              <Link
                href="/offerings"
                className="inline-flex items-center gap-2 text-white/20 hover:text-white/40 transition-colors duration-500 font-sans text-xs tracking-[0.2em] uppercase"
              >
                Learn about the work →
              </Link>
            </div>
          </motion.div>
        </Container>

        {/* Bottom hairline */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <div className="w-20 h-px bg-white/[0.09]" />
        </div>
      </section>

      <Footer />
    </motion.main>
  )
}
