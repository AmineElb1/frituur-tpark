"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-secondary text-secondary-foreground py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/golden-crispy-belgian-fries.jpg')] bg-cover bg-center opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Authentieke Belgische Frietjes</h2>
          <p className="text-xl md:text-2xl mb-8 text-secondary-foreground/90 text-pretty">
            Krokant, goudgeel en met liefde gemaakt. Proef de beste frietjes van de stad!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg font-bold px-8 py-6"
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            >
              Bekijk Menu
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg font-bold px-8 py-6 bg-secondary-foreground/10 border-secondary-foreground/30 hover:bg-secondary-foreground/20"
            >
              Bel om te Bestellen
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
