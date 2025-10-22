"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu, X } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/components/cart-provider"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { items, setCartOpen } = useCart()

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 bg-secondary text-secondary-foreground shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">FP</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-balance">Frituur 't Park</h1>
              <p className="text-xs text-secondary-foreground/80">Belgische Frietjes & Snacks</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:text-primary transition-colors font-semibold">
              Menu
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors font-semibold">
              Contact
            </Link>
            <div className="text-sm">
              <p className="font-semibold">Vandaag Open</p>
              <p className="text-xs text-secondary-foreground/80">11:30 - 21:00</p>
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button size="lg" className="hidden sm:flex font-bold" onClick={() => setCartOpen(true)}>
              Bestel Nu
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="relative bg-secondary-foreground/10 border-secondary-foreground/20 hover:bg-secondary-foreground/20"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-secondary-foreground/20">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="hover:text-primary transition-colors font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="/contact"
                className="hover:text-primary transition-colors font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="text-sm pt-2 border-t border-secondary-foreground/20">
                <p className="font-semibold">Openingsuren</p>
                <p className="text-xs text-secondary-foreground/80">Ma-Do: 11:30 - 21:00</p>
                <p className="text-xs text-secondary-foreground/80">Vr-Za: 11:30 - 22:00</p>
                <p className="text-xs text-secondary-foreground/80">Zondag: 12:00 - 21:00</p>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
