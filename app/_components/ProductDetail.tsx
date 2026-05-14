"use client";

import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { useState } from "react";
import type { Product, ProductSize } from "../_lib/products";
import { peso } from "../_lib/format";
import { useCart } from "../_state/CartContext";
import { WishlistButton } from "./WishlistButton";

export function ProductDetail({ product }: { product: Product }) {
  const cart = useCart();
  const [color, setColor] = useState(product.colors[0]);
  const [size, setSize] = useState<ProductSize | null>(null);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  const onAdd = () => {
    if (product.sizes.length > 1 && !size) {
      setSizeError(true);
      return;
    }
    const chosenSize = size ?? product.sizes[0];
    cart.addItem(product, { color: color.name, size: chosenSize, artClass: color.artClass }, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <section className="pdp">
      <div className="pdp-gallery">
        <AnimatePresence mode="wait">
          <motion.div
            key={color.name}
            className={clsx("pdp-main", color.artClass)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            aria-label={`${product.name} in ${color.name}`}
          >
            <span>{color.name}</span>
          </motion.div>
        </AnimatePresence>
        <div className="pdp-thumbs">
          {product.colors.map((c) => (
            <button
              key={c.name}
              type="button"
              className={clsx("pdp-thumb", c.artClass, color.name === c.name && "is-active")}
              onClick={() => setColor(c)}
              aria-label={`View ${c.name}`}
            >
              <span>{c.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="pdp-info">
        <p className="eyebrow">{product.category}</p>
        <h1>{product.name}</h1>
        <p className="pdp-price">{peso(product.price)}</p>
        <p className="lede">{product.description}</p>

        <div className="pdp-section">
          <span className="pdp-label">Color · {color.name}</span>
          <div className="swatches">
            {product.colors.map((c) => (
              <button
                key={c.name}
                type="button"
                className={clsx("swatch", color.name === c.name && "swatch-active")}
                style={{ background: c.hex }}
                onClick={() => setColor(c)}
                aria-label={c.name}
                aria-pressed={color.name === c.name}
              />
            ))}
          </div>
        </div>

        {product.sizes.length > 1 && (
          <div className="pdp-section">
            <span className="pdp-label">Size {size && `· ${size}`}</span>
            <div className="size-grid">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={clsx("size-pill", size === s && "size-pill-active")}
                  onClick={() => {
                    setSize(s);
                    setSizeError(false);
                  }}
                  aria-pressed={size === s}
                >
                  {s}
                </button>
              ))}
            </div>
            {sizeError && <em className="field-error">Pick a size to continue.</em>}
          </div>
        )}

        <div className="pdp-section">
          <span className="pdp-label">Quantity</span>
          <div className="qty-stepper qty-stepper-lg">
            <button
              type="button"
              className="qty-btn"
              aria-label="Decrease"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
            >
              −
            </button>
            <span aria-live="polite">{qty}</span>
            <button
              type="button"
              className="qty-btn"
              aria-label="Increase"
              onClick={() => setQty((q) => Math.min(10, q + 1))}
            >
              +
            </button>
          </div>
        </div>

        <div className="pdp-actions">
          <button
            type="button"
            className={clsx("button primary pdp-add", added && "is-added")}
            onClick={onAdd}
            disabled={!product.inStock}
          >
            {!product.inStock
              ? "Sold out"
              : added
                ? "Added ✓"
                : `Add to cart · ${peso(product.price * qty)}`}
          </button>
          <WishlistButton id={product.id} className="pdp-wishlist" />
        </div>

        <ul className="pdp-details">
          {product.details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
