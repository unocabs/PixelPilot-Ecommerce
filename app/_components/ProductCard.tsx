import Link from "next/link";
import clsx from "clsx";
import type { Product } from "../_lib/products";
import { peso } from "../_lib/format";
import { WishlistButton } from "./WishlistButton";

export function ProductCard({ product }: { product: Product }) {
  const primary = product.colors[0];
  return (
    <article className="productCard">
      <Link href={`/products/${product.slug}`} className="productCard-link">
        <div className={clsx("productArt", primary.artClass)}>
          {product.newArrival && <span className="badge-pill">New</span>}
          {!product.inStock && <span className="badge-pill badge-out">Sold out</span>}
          <span className="productArt-color">{primary.name}</span>
        </div>
        <div className="productInfo">
          <span>{product.category}</span>
          <h3>{product.name}</h3>
          <div className="productInfo-foot">
            <strong>{peso(product.price)}</strong>
            <div className="productInfo-swatches" aria-label="Available colors">
              {product.colors.slice(0, 4).map((c) => (
                <span key={c.name} className="swatch-dot" style={{ background: c.hex }} title={c.name} />
              ))}
            </div>
          </div>
        </div>
      </Link>
      <WishlistButton id={product.id} className="productCard-wishlist" />
    </article>
  );
}
