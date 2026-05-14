export type Collection = {
  slug: string;
  title: string;
  blurb: string;
  art: "art1" | "art2" | "art3" | "art4";
};

export const COLLECTIONS: Collection[] = [
  {
    slug: "new-arrivals",
    title: "New arrivals",
    blurb: "Just-dropped pieces from the latest season.",
    art: "art1",
  },
  {
    slug: "workwear",
    title: "Workwear",
    blurb: "Clean lines, weighty fabrics, all-day cuts.",
    art: "art2",
  },
  {
    slug: "weekend-sets",
    title: "Weekend sets",
    blurb: "Easy pairs for slow mornings and long drives.",
    art: "art3",
  },
  {
    slug: "accessories",
    title: "Accessories",
    blurb: "Bags, belts, and finishing pieces.",
    art: "art4",
  },
];

export function getCollection(slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug);
}
