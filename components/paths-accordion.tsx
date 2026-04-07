"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const paths = [
  {
    id: "life",
    title: "Life Transition",
    url: "/offerings/life-coaching",
    state: "You are not lost. Just... disconnected.",
    action: "Explore the inward path →",
    color: "oklch(0.96 0.01 90)", // warm cream
    hoverColor: "oklch(0.92 0.02 85)",
  },
  {
    id: "leadership",
    title: "Leadership",
    url: "/offerings/leadership-coaching",
    state: "Pressure. Responsibility. Clarity.",
    action: "Enter the space for leaders →",
    color: "oklch(0.98 0.003 85)", // cold clinical
    hoverColor: "oklch(0.90 0.005 85)",
  },
  {
    id: "creativity",
    title: "Expression",
    url: "/offerings/creativity-coaching",
    state: "What wants to come through you?",
    action: "Free the expression →",
    color: "oklch(0.95 0.03 70)", // amber warm
    hoverColor: "oklch(0.88 0.04 65)",
  },
  {
    id: "movement",
    title: "The Body",
    url: "/offerings/movement-arts",
    state: "Come back to the physical intelligence.",
    action: "Return to the body →",
    color: "oklch(0.94 0.01 140)", // earth green
    hoverColor: "oklch(0.87 0.015 140)",
  }
]

export function PathsAccordion() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-stretch bg-background transition-colors duration-1000 ease-in-out" 
         style={{ backgroundColor: hoveredIndex !== null ? paths[hoveredIndex].hoverColor : undefined }}>
      
      <div className="text-center pt-32 pb-20 px-6">
        <span className="font-sans text-[10px] tracking-[0.45em] uppercase text-foreground/40 mb-8 block">
          The Four Doors
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-foreground italic font-light tracking-tight">
          Where are you right now?
        </h2>
      </div>

      <div className="w-full flex-1 flex flex-col md:flex-row pb-32 max-w-[1400px] mx-auto px-4 md:px-8 gap-2">
        {paths.map((path, index) => {
          const isHovered = hoveredIndex === index
          const isAnotherHovered = hoveredIndex !== null && hoveredIndex !== index

          return (
            <motion.div
              key={path.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{ 
                flex: isHovered ? 3 : isAnotherHovered ? 0.7 : 1,
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden flex-1 h-[25vh] md:h-[60vh] border border-foreground/[0.08] flex items-center justify-center group cursor-pointer"
              style={{ backgroundColor: path.color }}
            >
              <Link href={path.url} className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 text-center">
                <motion.h3 
                  className="font-serif text-3xl md:text-4xl text-foreground whitespace-nowrap"
                  animate={{ 
                    scale: isHovered ? 1.2 : 1,
                    y: isHovered ? -20 : 0
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {path.title}
                </motion.h3>

                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="absolute bottom-1/4 left-0 right-0 px-8"
                    >
                      <p className="font-sans text-lg md:text-xl text-foreground/70 mb-8 italic">
                        {path.state}
                      </p>
                      <span className="font-sans text-[10px] tracking-[0.2em] font-bold uppercase text-primary block">
                        {path.action}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
