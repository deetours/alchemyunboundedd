"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Magnetic } from "@/components/magnetic"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/section"
import Link from "next/link"

interface CTACeremonyProps {
  label: string
  buttonText: string
  href: string
  variant?: "brand-primary" | "brand-outline" | "ghost"
  size?: "xl" | "lg" | "sm"
  magneticStrength?: number
}

export function CTACeremony({
  label,
  buttonText,
  href,
  variant = "brand-outline",
  size = "xl",
  magneticStrength = 0.4
}: CTACeremonyProps) {
  return (
    <Container width="prose" className="text-center">
      <ScrollReveal variant="fade-scale">
        <div className="flex items-center gap-8 mb-10 justify-center">
          <div className="h-px flex-1 max-w-[80px] bg-foreground/[0.07]" />
          <span className="font-sans text-[9px] tracking-[0.5em] uppercase text-foreground/30">
            {label}
          </span>
          <div className="h-px flex-1 max-w-[80px] bg-foreground/[0.07]" />
        </div>
      </ScrollReveal>
      <ScrollReveal variant="fade-scale" delay={0.15}>
        <Magnetic strength={magneticStrength}>
          <Button variant={variant} size={size} asChild>
            <Link href={href}>{buttonText}</Link>
          </Button>
        </Magnetic>
      </ScrollReveal>
    </Container>
  )
}
