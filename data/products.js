export const products = [
  {
    id: "yirgacheffe-beans-250g",
    name: "Yirgacheffe Washed Beans 250g",
    price: 620,
    category: "Coffee Beans",
    image: "/images/yirgacheffe-beans.png",
    description:
      "Bright and floral washed coffee from the Yirgacheffe highlands, with notes of jasmine, lemon and honey. Whole beans, medium roast.",
    available: true,
  },
  {
    id: "sidamo-beans-250g",
    name: "Sidamo Natural Beans 250g",
    price: 580,
    category: "Coffee Beans",
    image: "/images/sidamo-beans.png",
    description:
      "A sweet natural-process coffee from Sidamo with notes of blueberry, cocoa and brown sugar. Whole beans, medium roast.",
    available: true,
  },
  {
    id: "guji-beans-250g",
    name: "Guji Light Roast Beans 250g",
    price: 650,
    category: "Coffee Beans",
    image: "/images/guji-beans.png",
    description:
      "A fruity, tea-like light roast from Guji with peach and bergamot notes. Best brewed as a filter coffee.",
    available: true,
  },
  {
    id: "harar-ground-500g",
    name: "Harar Ground Coffee 500g",
    price: 940,
    category: "Coffee Beans",
    image: "/images/harar-ground.png",
    description:
      "Bold, wine-like Harar coffee, ground and ready for your jebena or moka pot. A larger 500g bag for everyday drinking.",
    available: false,
  },
  {
    id: "clay-jebena",
    name: "Traditional Clay Jebena",
    price: 1350,
    category: "Brewing Gear",
    image: "/images/clay-jebena.png",
    description:
      "A hand-shaped clay coffee pot used in the traditional Ethiopian coffee ceremony. Holds about 1 litre.",
    available: true,
  },
  {
    id: "pour-over-set",
    name: "Pour-Over Brewing Set",
    price: 1890,
    category: "Brewing Gear",
    image: "/images/pour-over-set.png",
    description:
      "Glass server, ceramic dripper and 40 paper filters. Everything you need to brew a clean cup at home.",
    available: true,
  },
  {
    id: "hand-grinder",
    name: "Manual Coffee Grinder",
    price: 2250,
    category: "Brewing Gear",
    image: "/images/hand-grinder.png",
    description:
      "Compact hand grinder with adjustable burrs, good for travel and small kitchens. Grinds enough for two cups.",
    available: true,
  },
  {
    id: "sini-cups-set",
    name: "Handmade Sini Cup Set (6)",
    price: 780,
    category: "Crafts & Gifts",
    image: "/images/sini-cups.png",
    description:
      "Six small hand-painted ceramic sini cups, made for serving coffee in the traditional style.",
    available: true,
  },
  {
    id: "woven-tray",
    name: "Woven Serving Tray (Mesob Style)",
    price: 1100,
    category: "Crafts & Gifts",
    image: "/images/woven-tray.png",
    description:
      "A colourful hand-woven tray for serving coffee and snacks, inspired by the traditional mesob basket.",
    available: true,
  },
  {
    id: "gift-box",
    name: "Coffee Ceremony Gift Box",
    price: 2950,
    category: "Crafts & Gifts",
    image: "/images/gift-box.png",
    description:
      "A boxed gift set with 250g of Yirgacheffe beans, two sini cups and a small incense burner.",
    available: true,
  },
];

// Ids shown in the "Featured products" section on the home page.
export const featuredIds = [
  "yirgacheffe-beans-250g",
  "clay-jebena",
  "sini-cups-set",
  "gift-box",
];

export const categories = [...new Set(products.map((p) => p.category))];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts() {
  return featuredIds.map(getProductById).filter(Boolean);
}
