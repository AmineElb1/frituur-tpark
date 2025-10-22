import { MenuItemCard } from "@/components/menu-item-card"
import type { MenuCategory as MenuCategoryType } from "@/lib/menu-data"

interface MenuCategoryProps {
  category: MenuCategoryType
}

export function MenuCategory({ category }: MenuCategoryProps) {
  return (
    <div>
      <h3 className="text-3xl font-bold mb-6 text-balance">{category.name}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
