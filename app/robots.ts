import type { MetadataRoute } from "next";
import { STORE } from "./_lib/store";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/cart", "/checkout", "/checkout/success", "/wishlist"],
    },
    sitemap: `${STORE.url}/sitemap.xml`,
  };
}
