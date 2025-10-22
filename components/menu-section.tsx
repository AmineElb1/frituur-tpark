"use client"

import { useState } from "react"
import { MenuCategory } from "@/components/menu-category"
import { Button } from "@/components/ui/button"
import { menuData } from "@/lib/menu-data"

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", label: "All" },
    { id: "fries", label: "Fries" },
    { id: "snacks", label: "Snacks" },
    { id: "sauces", label: "Sauces" },
    { id: "drinks", label: "Drinks" },
  ]

  const filteredMenu =
    activeCategory === "all" ? menuData : menuData.filter((category) => category.id === activeCategory)

  return (
    <section id="menu" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance">Our Menu</h2>
        <p className="text-center text-muted-foreground mb-8 text-lg">Fresh, delicious, and made to order</p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveCategory(category.id)}
              className="font-bold"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="space-y-16">
          {filteredMenu.map((category) => (
            <MenuCategory key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
