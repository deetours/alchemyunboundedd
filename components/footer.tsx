"use client"

import Link from "next/link"
import { ScrollReveal } from "./scroll-reveal"

export function Footer() {
  return (
    <footer className="bg-card py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <Link href="/" className="inline-block mb-6">
                <span className="font-serif text-2xl text-foreground">Alchemy</span>
                <span className="font-serif text-2xl text-primary ml-1">Unbounded</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                A space for creative, conscious, embodied transformation.
              </p>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-6 text-foreground">Explore</h4>
              <nav className="flex flex-col gap-3">
                {["About", "The Work", "Offerings", "The Journey", "Voices"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-500"
                  >
                    {item}
                  </Link>
                ))}
                <Link
                  href="/offerings/life-coaching#investment"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-500"
                >
                  Investment
                </Link>
              </nav>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-6 text-foreground">Connect</h4>
              <Link
                href="/begin"
                className="inline-block text-sm text-muted-foreground hover:text-foreground transition-colors duration-500"
              >
                Begin a conversation
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              © {new Date().getFullYear()} Alchemy Unbounded. All rights reserved.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
