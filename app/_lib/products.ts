export type ArtClass = "art1" | "art2" | "art3" | "art4";

export type Category = "Workwear" | "Essentials" | "New arrivals" | "Accessories";

export type ProductColor = {
  name: string;
  hex: string;
  artClass: ArtClass;
};

export type ProductSize = "XS" | "S" | "M" | "L" | "XL";

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: Category;
  collections: string[];
  colors: ProductColor[];
  sizes: ProductSize[];
  description: string;
  details: string[];
  inStock: boolean;
  featured?: boolean;
  newArrival?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    slug: "linen-utility-overshirt",
    name: "Linen Utility Overshirt",
    price: 2450,
    category: "Workwear",
    collections: ["workwear", "new-arrivals"],
    colors: [
      { name: "Sage", hex: "#8ea7a2", artClass: "art2" },
      { name: "Bone", hex: "#e6dfd2", artClass: "art3" },
      { name: "Cocoa", hex: "#5c4033", artClass: "art4" },
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A boxy, mid-weight linen overshirt with two chest pockets and horn buttons. Cut to layer over a tee or under a coat.",
    details: ["100% Philippine linen", "Horn buttons", "Side vents", "Boxy fit, true to size"],
    inStock: true,
    featured: true,
    newArrival: true,
  },
  {
    id: "p2",
    slug: "everyday-wide-trousers",
    name: "Everyday Wide Trousers",
    price: 2100,
    category: "Essentials",
    collections: ["workwear"],
    colors: [
      { name: "Charcoal", hex: "#2d2f33", artClass: "art2" },
      { name: "Bone", hex: "#e6dfd2", artClass: "art3" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Soft pleated trousers cut from a textured cotton blend. High rise, wide leg, drapes cleanly.",
    details: ["Cotton/linen blend", "Side pockets", "Hidden hook closure", "Machine wash cold"],
    inStock: true,
    featured: true,
  },
  {
    id: "p3",
    slug: "boxy-cotton-tee",
    name: "Boxy Cotton Tee",
    price: 950,
    category: "Essentials",
    collections: ["new-arrivals", "weekend-sets"],
    colors: [
      { name: "Bone", hex: "#e6dfd2", artClass: "art3" },
      { name: "Sage", hex: "#8ea7a2", artClass: "art1" },
      { name: "Charcoal", hex: "#2d2f33", artClass: "art2" },
      { name: "Coral", hex: "#e66045", artClass: "art4" },
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "Heavyweight 240gsm cotton, ribbed neck, dropped shoulders. Pre-washed for a settled fit.",
    details: ["240gsm cotton", "Pre-washed", "Ribbed crew neck", "Boxy, true to size"],
    inStock: true,
    featured: true,
    newArrival: true,
  },
  {
    id: "p4",
    slug: "soft-structure-tote",
    name: "Soft Structure Tote",
    price: 1750,
    category: "Accessories",
    collections: ["accessories", "weekend-sets"],
    colors: [
      { name: "Cocoa", hex: "#5c4033", artClass: "art4" },
      { name: "Bone", hex: "#e6dfd2", artClass: "art3" },
    ],
    sizes: ["M"],
    description:
      "A roomy everyday tote in waxed canvas with a leather strap. Holds a laptop, book, and coffee.",
    details: ["Waxed canvas", "Leather strap", "Interior pocket", "Wipe-clean"],
    inStock: true,
    featured: true,
  },
  {
    id: "p5",
    slug: "weekend-knit-cardigan",
    name: "Weekend Knit Cardigan",
    price: 2850,
    category: "New arrivals",
    collections: ["new-arrivals", "weekend-sets"],
    colors: [
      { name: "Bone", hex: "#e6dfd2", artClass: "art3" },
      { name: "Sage", hex: "#8ea7a2", artClass: "art1" },
    ],
    sizes: ["S", "M", "L"],
    description:
      "Mid-weight cotton knit with a relaxed shoulder, ribbed cuffs, and corozo buttons.",
    details: ["100% cotton", "Corozo buttons", "Ribbed cuffs", "Hand wash"],
    inStock: true,
    newArrival: true,
  },
  {
    id: "p6",
    slug: "drawstring-trousers",
    name: "Drawstring Trousers",
    price: 1850,
    category: "Essentials",
    collections: ["weekend-sets"],
    colors: [
      { name: "Charcoal", hex: "#2d2f33", artClass: "art2" },
      { name: "Cocoa", hex: "#5c4033", artClass: "art4" },
    ],
    sizes: ["S", "M", "L"],
    description: "Easy-on trousers with a drawstring waist and tapered leg.",
    details: ["Cotton twill", "Drawstring waist", "Side seam pockets"],
    inStock: true,
  },
  {
    id: "p7",
    slug: "long-sleeve-henley",
    name: "Long Sleeve Henley",
    price: 1150,
    category: "Essentials",
    collections: ["weekend-sets"],
    colors: [
      { name: "Bone", hex: "#e6dfd2", artClass: "art3" },
      { name: "Sage", hex: "#8ea7a2", artClass: "art1" },
    ],
    sizes: ["XS", "S", "M", "L"],
    description: "A soft cotton henley with a three-button placket and a longer body.",
    details: ["Combed cotton", "3-button placket", "Pre-shrunk"],
    inStock: true,
  },
  {
    id: "p8",
    slug: "structured-blazer",
    name: "Structured Blazer",
    price: 4250,
    category: "Workwear",
    collections: ["workwear"],
    colors: [
      { name: "Charcoal", hex: "#2d2f33", artClass: "art2" },
      { name: "Cocoa", hex: "#5c4033", artClass: "art4" },
    ],
    sizes: ["S", "M", "L"],
    description: "An unstructured blazer with a soft canvas, notched lapel, and patch pockets.",
    details: ["Wool blend", "Soft canvas", "Two-button front", "Half lined"],
    inStock: true,
    featured: true,
  },
  {
    id: "p9",
    slug: "wide-belt",
    name: "Wide Belt",
    price: 950,
    category: "Accessories",
    collections: ["accessories"],
    colors: [
      { name: "Cocoa", hex: "#5c4033", artClass: "art4" },
      { name: "Charcoal", hex: "#2d2f33", artClass: "art2" },
    ],
    sizes: ["M", "L"],
    description: "A vegetable-tanned leather belt with an antique-brass buckle.",
    details: ["Veg-tanned leather", "Antique brass buckle"],
    inStock: true,
  },
  {
    id: "p10",
    slug: "canvas-cap",
    name: "Canvas Cap",
    price: 650,
    category: "Accessories",
    collections: ["accessories", "weekend-sets"],
    colors: [
      { name: "Bone", hex: "#e6dfd2", artClass: "art3" },
      { name: "Charcoal", hex: "#2d2f33", artClass: "art2" },
      { name: "Coral", hex: "#e66045", artClass: "art4" },
    ],
    sizes: ["M"],
    description: "A washed cotton canvas cap with a soft brim and adjustable strap.",
    details: ["Washed canvas", "Adjustable strap"],
    inStock: true,
  },
  {
    id: "p11",
    slug: "oversized-poplin-shirt",
    name: "Oversized Poplin Shirt",
    price: 2250,
    category: "New arrivals",
    collections: ["new-arrivals", "workwear"],
    colors: [
      { name: "Bone", hex: "#e6dfd2", artClass: "art3" },
      { name: "Sage", hex: "#8ea7a2", artClass: "art1" },
    ],
    sizes: ["S", "M", "L"],
    description: "Crisp cotton poplin shirt with a dropped shoulder and full button front.",
    details: ["Cotton poplin", "Mother-of-pearl buttons"],
    inStock: true,
    newArrival: true,
  },
  {
    id: "p12",
    slug: "knit-vest",
    name: "Knit Vest",
    price: 1550,
    category: "New arrivals",
    collections: ["new-arrivals", "weekend-sets"],
    colors: [
      { name: "Sage", hex: "#8ea7a2", artClass: "art1" },
      { name: "Bone", hex: "#e6dfd2", artClass: "art3" },
    ],
    sizes: ["S", "M", "L"],
    description: "Cotton knit vest with a V-neck and a clean rib trim.",
    details: ["Cotton knit", "V-neck", "Rib trim"],
    inStock: true,
    newArrival: true,
  },
  {
    id: "p13",
    slug: "wool-overshirt",
    name: "Wool Overshirt",
    price: 3650,
    category: "Workwear",
    collections: ["workwear"],
    colors: [
      { name: "Charcoal", hex: "#2d2f33", artClass: "art2" },
      { name: "Cocoa", hex: "#5c4033", artClass: "art4" },
    ],
    sizes: ["M", "L", "XL"],
    description: "Heavy wool overshirt with a flannel-style cut and chest pockets.",
    details: ["Wool blend", "Two chest pockets"],
    inStock: false,
  },
  {
    id: "p14",
    slug: "everyday-socks-3-pack",
    name: "Everyday Socks (3-pack)",
    price: 550,
    category: "Accessories",
    collections: ["accessories"],
    colors: [{ name: "Bone", hex: "#e6dfd2", artClass: "art3" }],
    sizes: ["M"],
    description: "Soft ribbed cotton socks. Sold in a pack of three.",
    details: ["Combed cotton", "Reinforced heel"],
    inStock: true,
  },
  {
    id: "p15",
    slug: "linen-shorts",
    name: "Linen Shorts",
    price: 1450,
    category: "Essentials",
    collections: ["weekend-sets"],
    colors: [
      { name: "Bone", hex: "#e6dfd2", artClass: "art3" },
      { name: "Sage", hex: "#8ea7a2", artClass: "art1" },
    ],
    sizes: ["S", "M", "L"],
    description: "Mid-rise linen shorts with side pockets and a button waist.",
    details: ["100% linen", "Side pockets"],
    inStock: true,
  },
  {
    id: "p16",
    slug: "leather-card-holder",
    name: "Leather Card Holder",
    price: 850,
    category: "Accessories",
    collections: ["accessories"],
    colors: [
      { name: "Cocoa", hex: "#5c4033", artClass: "art4" },
      { name: "Charcoal", hex: "#2d2f33", artClass: "art2" },
    ],
    sizes: ["M"],
    description: "A simple leather card holder with four slots and a center pocket.",
    details: ["Veg-tanned leather", "4 card slots"],
    inStock: true,
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCollection(slug: string): Product[] {
  return PRODUCTS.filter((p) => p.collections.includes(slug));
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return PRODUCTS.filter(
    (p) => p.id !== product.id && p.collections.some((c) => product.collections.includes(c)),
  ).slice(0, limit);
}

export const ALL_COLORS = Array.from(
  new Map(
    PRODUCTS.flatMap((p) => p.colors).map((c) => [c.name, c]),
  ).values(),
);

export const ALL_SIZES: ProductSize[] = ["XS", "S", "M", "L", "XL"];
export const ALL_CATEGORIES: Category[] = ["Workwear", "Essentials", "New arrivals", "Accessories"];
