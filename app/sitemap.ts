import type { MetadataRoute } from "next";
import { STORE } from "./_lib/store";
import { PRODUCTS } from "./_lib/products";
import { COLLECTIONS } from "./_lib/collections";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = STORE.url;
  const lastModified = new Date();
  const statics = ["", "/products", "/about", "/wishlist"];
  const staticEntries = statics.map((r) => ({
    url: `${base}${r}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: r === "" ? 1 : 0.7,
  }));
  const productEntries = PRODUCTS.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));
  const collectionEntries = COLLECTIONS.map((c) => ({
    url: `${base}/collections/${c.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));
  return [...staticEntries, ...productEntries, ...collectionEntries];
}
