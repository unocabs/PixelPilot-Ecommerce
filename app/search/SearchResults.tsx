"use client";

import { useMemo } from "react";
import { PRODUCTS } from "../_lib/products";
import { ProductCard } from "../_components/ProductCard";

export function SearchResults({ q }: { q: string }) {
  const term = q.trim().toLowerCase();
  const results = useMemo(() => {
    if (!term) return [];
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term),
    );
  }, [term]);

  if (!term) {
    return <p className="muted-note">Use the search icon in the header to search.</p>;
  }
  if (results.length === 0) {
    return <p className="empty-state">No products match “{q}”.</p>;
  }
  return (
    <div className="productGrid">
      {results.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
