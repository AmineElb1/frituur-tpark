export interface MenuItem {
  id: string
  name: string
  description?: string
  price: number
  image: string
}

export interface MenuCategory {
  id: string
  name: string
  items: MenuItem[]
}

export const menuData: MenuCategory[] = [
  {
    id: "fries",
    name: "Frietjes",
    items: [
      {
        id: "fries-small",
        name: "Kleine Friet",
        description: "Krokante goudgele Belgische frietjes",
        price: 3.5,
        image: "/golden-belgian-fries-in-paper-cone.jpg",
      },
      {
        id: "fries-medium",
        name: "Medium Friet",
        description: "Perfecte portie krokante frietjes",
        price: 4.5,
        image: "/medium-portion-belgian-fries.jpg",
      },
      {
        id: "fries-large",
        name: "Grote Friet",
        description: "Extra grote portie voor grote honger",
        price: 5.5,
        image: "/large-portion-belgian-fries.jpg",
      },
      {
        id: "fries-special",
        name: "Speciale Friet",
        description: "Met saus en toppings naar keuze",
        price: 7.5,
        image: "/loaded-fries-with-toppings-and-sauce.jpg",
      },
    ],
  },
  {
    id: "snacks",
    name: "Snacks",
    items: [
      {
        id: "frikandel",
        name: "Frikandel",
        description: "Klassieke Nederlandse gefrituurde worst",
        price: 2.5,
        image: "/frikandel-dutch-sausage.jpg",
      },
      {
        id: "kroket",
        name: "Kroket",
        description: "Krokante gepaneerde vleeskroket",
        price: 2.8,
        image: "/dutch-kroket-croquette.jpg",
      },
      {
        id: "bitterbal",
        name: "Bitterballen (6 stuks)",
        description: "Traditionele Nederlandse vleessnack",
        price: 5.5,
        image: "/bitterballen-dutch-snack.jpg",
      },
      {
        id: "chicken-nuggets",
        name: "Chicken Nuggets (8 stuks)",
        description: "Krokante goudgele kippennuggets",
        price: 6.0,
        image: "/crispy-chicken-nuggets.jpg",
      },
      {
        id: "kaassoufle",
        name: "Kaassoufflé",
        description: "Gesmolten kaas in krokant deeg",
        price: 2.8,
        image: "/kaassouffle-cheese-snack.jpg",
      },
      {
        id: "kipcorn",
        name: "Kipcorn",
        description: "Pittige kippensnack",
        price: 2.5,
        image: "/kipcorn-spicy-chicken-snack.jpg",
      },
    ],
  },
  {
    id: "sauces",
    name: "Sauzen",
    items: [
      {
        id: "mayonnaise",
        name: "Mayonaise",
        description: "Klassieke Belgische mayo",
        price: 0.8,
        image: "/mayonnaise-sauce-cup.jpg",
      },
      {
        id: "ketchup",
        name: "Ketchup",
        description: "Tomatenketchup",
        price: 0.8,
        image: "/ketchup-sauce-cup.jpg",
      },
      {
        id: "andalouse",
        name: "Andalouse",
        description: "Pittige mayonaise-saus",
        price: 1.0,
        image: "/andalouse-sauce.jpg",
      },
      {
        id: "curry",
        name: "Currysaus",
        description: "Milde curry ketchup",
        price: 1.0,
        image: "/creamy-yellow-curry-sauce.png",
      },
      {
        id: "samurai",
        name: "Samurai",
        description: "Pittige samuraisaus",
        price: 1.0,
        image: "/samurai-sauce.jpg",
      },
      {
        id: "tartare",
        name: "Tartaar",
        description: "Romige tartaarsaus",
        price: 1.0,
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    id: "drinks",
    name: "Dranken",
    items: [
      {
        id: "cola",
        name: "Coca-Cola",
        description: "330ml blikje",
        price: 2.0,
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: "cola-zero",
        name: "Coca-Cola Zero",
        description: "330ml blikje",
        price: 2.0,
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: "fanta",
        name: "Fanta Orange",
        description: "330ml blikje",
        price: 2.0,
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: "sprite",
        name: "Sprite",
        description: "330ml blikje",
        price: 2.0,
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: "water",
        name: "Water",
        description: "500ml fles",
        price: 1.5,
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: "ice-tea",
        name: "Ice Tea",
        description: "330ml blikje",
        price: 2.0,
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
]
