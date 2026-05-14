"use client";

import { nanoid } from "nanoid";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product, ProductSize } from "../_lib/products";

export type CartLine = {
  id: string;
  productId: string;
  slug: string;
  name: string;
  price: number;
  color: string;
  artClass: string;
  size: ProductSize;
  qty: number;
};

type CartCtx = {
  items: CartLine[];
  count: number;
  subtotal: number;
  shippingEst: number;
  total: number;
  isOpen: boolean;
  hydrated: boolean;
  addItem: (
    product: Product,
    variant: { color: string; size: ProductSize; artClass: string },
    qty?: number,
  ) => void;
  updateQty: (lineId: string, qty: number) => void;
  removeItem: (lineId: string) => void;
  clear: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
};

const CartContext = createContext<CartCtx | null>(null);

const STORAGE_KEY = "northline_cart_v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartLine[];
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {
      // ignore corrupt storage
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore quota errors
    }
  }, [items, hydrated]);

  const addItem = useCallback<CartCtx["addItem"]>((product, variant, qty = 1) => {
    setItems((prev) => {
      const idx = prev.findIndex(
        (l) =>
          l.productId === product.id && l.color === variant.color && l.size === variant.size,
      );
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + qty };
        return next;
      }
      return [
        ...prev,
        {
          id: nanoid(8),
          productId: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          color: variant.color,
          artClass: variant.artClass,
          size: variant.size,
          qty,
        },
      ];
    });
    setOpen(true);
  }, []);

  const updateQty = useCallback<CartCtx["updateQty"]>((lineId, qty) => {
    setItems((prev) =>
      prev
        .map((l) => (l.id === lineId ? { ...l, qty: Math.max(0, qty) } : l))
        .filter((l) => l.qty > 0),
    );
  }, []);

  const removeItem = useCallback<CartCtx["removeItem"]>((lineId) => {
    setItems((prev) => prev.filter((l) => l.id !== lineId));
  }, []);

  const clear = useCallback(() => setItems([]), []);
  const openDrawer = useCallback(() => setOpen(true), []);
  const closeDrawer = useCallback(() => setOpen(false), []);

  const value = useMemo<CartCtx>(() => {
    const subtotal = items.reduce((s, l) => s + l.price * l.qty, 0);
    const count = items.reduce((s, l) => s + l.qty, 0);
    const shippingEst = subtotal === 0 ? 0 : subtotal > 5000 ? 0 : 150;
    return {
      items,
      count,
      subtotal,
      shippingEst,
      total: subtotal + shippingEst,
      isOpen,
      hydrated,
      addItem,
      updateQty,
      removeItem,
      clear,
      openDrawer,
      closeDrawer,
    };
  }, [items, isOpen, hydrated, addItem, updateQty, removeItem, clear, openDrawer, closeDrawer]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
}
