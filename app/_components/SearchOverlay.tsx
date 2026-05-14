"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { PRODUCTS } from "../_lib/products";
import { peso } from "../_lib/format";

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) {
      setQ("");
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const t = setTimeout(() => inputRef.current?.focus(), 80);
    return () => {
      window.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [open, onClose]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return PRODUCTS.slice(0, 5);
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term),
    ).slice(0, 8);
  }, [q]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="search-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="search-panel"
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -24, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <input
              ref={inputRef}
              className="search-input"
              type="search"
              placeholder="Search products, categories, colors…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <ul className="search-results">
              {results.length === 0 && (
                <li className="search-empty">No matches. Try a different word.</li>
              )}
              {results.map((p) => (
                <li key={p.id}>
                  <Link href={`/products/${p.slug}`} onClick={onClose}>
                    <span className={`search-art ${p.colors[0].artClass}`} aria-hidden />
                    <span className="search-info">
                      <strong>{p.name}</strong>
                      <span>{p.category}</span>
                    </span>
                    <span className="search-price">{peso(p.price)}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <button type="button" className="search-close" onClick={onClose} aria-label="Close">
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
