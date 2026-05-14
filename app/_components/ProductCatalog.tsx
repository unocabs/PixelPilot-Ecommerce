"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import {
  ALL_CATEGORIES,
  ALL_COLORS,
  ALL_SIZES,
  PRODUCTS,
  type Category,
  type Product,
  type ProductSize,
} from "../_lib/products";
import { ProductCard } from "./ProductCard";
import { Reveal } from "./Reveal";

type Sort = "featured" | "price-asc" | "price-desc" | "new";

export function ProductCatalog({ initial }: { initial?: Product[] }) {
  const base = initial ?? PRODUCTS;
  const [cats, setCats] = useState<Set<Category>>(new Set());
  const [colors, setColors] = useState<Set<string>>(new Set());
  const [sizes, setSizes] = useState<Set<ProductSize>>(new Set());
  const [maxPrice, setMaxPrice] = useState<number>(5000);
  const [inStockOnly, setInStock] = useState(false);
  const [sort, setSort] = useState<Sort>("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = base.filter((p) => {
      if (cats.size && !cats.has(p.category)) return false;
      if (colors.size && !p.colors.some((c) => colors.has(c.name))) return false;
      if (sizes.size && !p.sizes.some((s) => sizes.has(s))) return false;
      if (p.price > maxPrice) return false;
      if (inStockOnly && !p.inStock) return false;
      return true;
    });
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "new") list = [...list].sort((a, b) => Number(!!b.newArrival) - Number(!!a.newArrival));
    if (sort === "featured")
      list = [...list].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
    return list;
  }, [base, cats, colors, sizes, maxPrice, inStockOnly, sort]);

  const toggle = <T,>(set: Set<T>, value: T): Set<T> => {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    return next;
  };

  const reset = () => {
    setCats(new Set());
    setColors(new Set());
    setSizes(new Set());
    setMaxPrice(5000);
    setInStock(false);
  };

  return (
    <div className="catalog">
      <aside className={clsx("filter-sidebar", mobileFiltersOpen && "is-open")}>
        <div className="filter-head">
          <strong>Filters</strong>
          <div className="filter-head-actions">
            <button type="button" className="filter-clear" onClick={reset}>
              Clear
            </button>
            <button
              type="button"
              className="filter-close"
              onClick={() => setMobileFiltersOpen(false)}
              aria-label="Close filters"
            >
              ×
            </button>
          </div>
        </div>

        <div className="filter-group">
          <span className="filter-label">Category</span>
          <ul>
            {ALL_CATEGORIES.map((c) => (
              <li key={c}>
                <label>
                  <input
                    type="checkbox"
                    checked={cats.has(c)}
                    onChange={() => setCats(toggle(cats, c))}
                  />
                  <span>{c}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="filter-group">
          <span className="filter-label">Color</span>
          <div className="filter-swatches">
            {ALL_COLORS.map((c) => (
              <button
                key={c.name}
                type="button"
                className={clsx("filter-swatch", colors.has(c.name) && "is-active")}
                style={{ background: c.hex }}
                onClick={() => setColors(toggle(colors, c.name))}
                aria-pressed={colors.has(c.name)}
                aria-label={c.name}
              />
            ))}
          </div>
        </div>

        <div className="filter-group">
          <span className="filter-label">Size</span>
          <div className="filter-sizes">
            {ALL_SIZES.map((s) => (
              <button
                key={s}
                type="button"
                className={clsx("size-pill", sizes.has(s) && "size-pill-active")}
                onClick={() => setSizes(toggle(sizes, s))}
                aria-pressed={sizes.has(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <span className="filter-label">
            Max price · ₱{maxPrice.toLocaleString()}
          </span>
          <input
            className="range-input"
            type="range"
            min={500}
            max={5000}
            step={100}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        <div className="filter-group">
          <label className="filter-toggle">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => setInStock(e.target.checked)}
            />
            <span>In stock only</span>
          </label>
        </div>
      </aside>

      <div className="catalog-main">
        <div className="catalog-bar">
          <button
            type="button"
            className="filter-trigger"
            onClick={() => setMobileFiltersOpen(true)}
          >
            Filters
          </button>
          <span className="catalog-count">{filtered.length} items</span>
          <label className="catalog-sort">
            <span className="sr-only">Sort</span>
            <select value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
              <option value="featured">Featured</option>
              <option value="new">New arrivals</option>
              <option value="price-asc">Price · Low to high</option>
              <option value="price-desc">Price · High to low</option>
            </select>
          </label>
        </div>

        {filtered.length === 0 ? (
          <div className="empty-state">
            <p>No products match. Try removing a filter.</p>
            <button type="button" className="button secondary" onClick={reset}>
              Clear filters
            </button>
          </div>
        ) : (
          <div className="productGrid productGrid-3">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.03}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
