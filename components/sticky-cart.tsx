"use client"

import { useCart } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function StickyCart() {
  const { items, cartOpen, setCartOpen, addItem, removeItem, updateQuantity } = useCart()

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <Sheet open={cartOpen} onOpenChange={setCartOpen}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold flex items-center gap-2">
            <ShoppingBag className="w-6 h-6" />
            Uw Bestelling
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground text-lg">Uw winkelmandje is leeg</p>
              <p className="text-sm text-muted-foreground mt-2">Voeg lekkere items toe om te beginnen!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-muted/50 rounded-lg">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold mb-1">{item.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">€{item.price.toFixed(2)} per stuk</p>
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 bg-transparent"
                        onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="font-bold w-8 text-center">{item.quantity}</span>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 bg-transparent"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 ml-auto text-destructive"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="font-bold">€{(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t pt-6 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotaal ({totalItems} items)</span>
                <span className="font-semibold">€{total.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-bold">
                <span>Totaal</span>
                <span className="text-primary">€{total.toFixed(2)}</span>
              </div>
            </div>
            <Button size="lg" className="w-full font-bold text-lg py-6">
              Afrekenen
            </Button>
            <p className="text-xs text-center text-muted-foreground">Afhaling mogelijk binnen 15-20 minuten</p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
