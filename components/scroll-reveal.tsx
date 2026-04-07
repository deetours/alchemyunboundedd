"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  variant?: "fade-up" | "fade-left" | "fade-right" | "fade-scale" | "fade-delay"
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  variant = "fade-up"
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduce = useReducedMotion()

  // Define variant-specific animations
  const variantConfig = {
    "fade-up": {
      initial: { opacity: 0, y: 40 },
      animate: { opacity: 1, y: 0 }
    },
    "fade-left": {
      initial: { opacity: 0, x: 40 },
      animate: { opacity: 1, x: 0 }
    },
    "fade-right": {
      initial: { opacity: 0, x: -40 },
      animate: { opacity: 1, x: 0 }
    },
    "fade-scale": {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 }
    },
    "fade-delay": {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 }
    }
  }

  const config = variantConfig[variant]

  return (
    <motion.div
      ref={ref}
      initial={shouldReduce ? { opacity: 1 } : config.initial}
      animate={isInView ? (shouldReduce ? { opacity: 1 } : config.animate) : {}}
      transition={{ duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
