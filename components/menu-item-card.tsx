"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import type { MenuItem } from "@/lib/menu-data"

interface MenuItemCardProps {
  item: MenuItem
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  const { addItem } = useCart()

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video bg-muted relative overflow-hidden">
        <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-bold text-lg text-balance">{item.name}</h4>
          <span className="font-bold text-lg text-primary">€{item.price.toFixed(2)}</span>
        </div>
        {item.description && <p className="text-sm text-muted-foreground mb-4 text-pretty">{item.description}</p>}
        <Button className="w-full font-bold" size="lg" onClick={() => addItem(item)}>
          <Plus className="w-5 h-5 mr-2" />
          Toevoegen aan Winkelmandje
        </Button>
      </div>
    </Card>
  )
}
