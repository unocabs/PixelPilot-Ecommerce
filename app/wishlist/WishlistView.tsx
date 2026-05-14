"use client";

import Link from "next/link";
import { useWishlist } from "../_state/WishlistContext";
import { PRODUCTS } from "../_lib/products";
import { ProductCard } from "../_components/ProductCard";

export function WishlistView() {
  const wishlist = useWishlist();

  if (!wishlist.hydrated) {
    return <p className="muted-note">Loading…</p>;
  }

  const items = PRODUCTS.filter((p) => wishlist.has(p.id));

  if (items.length === 0) {
    return (
      <div className="empty-state">
        <p>No saved items yet. Tap the heart on a product to save it here.</p>
        <Link className="button primary" href="/products">
          Browse products
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="wishlist-actions">
        <span>
          {items.length} item{items.length === 1 ? "" : "s"} saved
        </span>
        <button type="button" className="link-button" onClick={() => wishlist.clear()}>
          Clear all
        </button>
      </div>
      <div className="productGrid">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}
