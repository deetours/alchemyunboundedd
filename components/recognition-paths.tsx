"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

const states = [
  {
    id: "life",
    title: "The Inward Path",
    url: "/offerings/life-coaching",
    lines: [
      "You have built the life you planned.",
      "Yet something sits quietly beneath it.",
      "Not outside.",
      "Within."
    ]
  },
  {
    id: "leadership",
    title: "Leadership",
    url: "/offerings/leadership-coaching",
    lines: [
      "You carry decisions others do not see.",
      "The isolation of the top is real.",
      "Clarity is no longer optional.",
      "It is everything."
    ]
  },
  {
    id: "creativity",
    title: "Expression",
    url: "/offerings/creativity-coaching",
    lines: [
      "There is something inside you...",
      "that has not been expressed yet.",
      "Not a hobby.",
      "A channel."
    ]
  },
  {
    id: "movement",
    title: "The Body",
    url: "/offerings/movement-arts",
    lines: [
      "You have been living in your head.",
      "Carrying tension that does not belong to you.",
      "The body knows the way back."
    ]
  }
]

function RecognitionBlock({ state, index }: { state: typeof states[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "center center", "end 20%"]
  })

  // Smooth cinematic opacity and gentle Y lift
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [40, 0, 0, -40])

  return (
    <div ref={ref} className="min-h-screen flex items-center justify-center py-32 px-6">
      <motion.div style={{ opacity, y }} className="w-full max-w-3xl mx-auto text-center flex flex-col items-center">
        
        <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-foreground/30 mb-16 block font-bold">
          {String(index + 1).padStart(3, "0")} — {state.title}
        </span>

        <div className="space-y-4 mb-20">
          {state.lines.map((line, i) => (
            <p key={i} className="font-serif text-[clamp(1.5rem,4vw,3.5rem)] text-foreground leading-[1.3] tracking-tight text-center italic font-light">
              {line}
            </p>
          ))}
        </div>

        <Link 
          href={state.url}
          className="group flex flex-col items-center gap-4"
        >
          <div className="w-px h-12 bg-primary/20 group-hover:bg-primary transition-colors duration-500" />
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-foreground/40 group-hover:text-foreground transition-colors duration-500 font-bold">
            Explore this path
          </span>
        </Link>
      </motion.div>
    </div>
  )
}

export function RecognitionPaths() {
  return (
    <div className="w-full bg-transparent">
      {/* Intro to the scene */}
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-6">
        <div className="w-px h-24 bg-foreground/10 mb-16" />
        <p className="font-serif text-2xl md:text-4xl text-foreground/60 italic font-light tracking-tight max-w-lg">
          You might already know where you are.
        </p>
      </div>

      {/* The isolated, story-based recognition blocks */}
      <div>
        {states.map((state, index) => (
          <RecognitionBlock key={state.id} state={state} index={index} />
        ))}
      </div>
    </div>
  )
}
