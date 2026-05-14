import type { Product } from "../_lib/products";
import { ProductCard } from "./ProductCard";
import { Reveal } from "./Reveal";

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="empty-state">
        <p>No products match your filters.</p>
      </div>
    );
  }
  return (
    <div className="productGrid">
      {products.map((p, i) => (
        <Reveal key={p.id} delay={i * 0.04}>
          <ProductCard product={p} />
        </Reveal>
      ))}
    </div>
  );
}
