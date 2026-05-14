"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { useCart } from "../_state/CartContext";
import { peso } from "../_lib/format";

export function CartDrawer() {
  const cart = useCart();

  return (
    <AnimatePresence>
      {cart.isOpen && (
        <motion.div
          className="cart-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={cart.closeDrawer}
        >
          <motion.aside
            className="cart-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            aria-label="Cart"
          >
            <header className="cart-head">
              <strong>Your cart</strong>
              <button type="button" onClick={cart.closeDrawer} aria-label="Close cart">
                ×
              </button>
            </header>

            {cart.items.length === 0 ? (
              <div className="cart-empty">
                <p>Your cart is empty.</p>
                <Link className="button primary" href="/products" onClick={cart.closeDrawer}>
                  Browse products
                </Link>
              </div>
            ) : (
              <ul className="cart-lines">
                {cart.items.map((line) => (
                  <li key={line.id} className="cart-line">
                    <span className={clsx("cart-art", line.artClass)} aria-hidden />
                    <div className="cart-info">
                      <Link href={`/products/${line.slug}`} onClick={cart.closeDrawer}>
                        <strong>{line.name}</strong>
                      </Link>
                      <span className="cart-meta">
                        {line.color} · {line.size}
                      </span>
                      <div className="cart-controls">
                        <div className="qty-stepper">
                          <button
                            type="button"
                            className="qty-btn"
                            aria-label="Decrease"
                            onClick={() => cart.updateQty(line.id, line.qty - 1)}
                          >
                            −
                          </button>
                          <span aria-live="polite">{line.qty}</span>
                          <button
                            type="button"
                            className="qty-btn"
                            aria-label="Increase"
                            onClick={() => cart.updateQty(line.id, line.qty + 1)}
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          className="cart-remove"
                          onClick={() => cart.removeItem(line.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <span className="cart-price">{peso(line.price * line.qty)}</span>
                  </li>
                ))}
              </ul>
            )}

            {cart.items.length > 0 && (
              <footer className="cart-foot">
                <div className="cart-row">
                  <span>Subtotal</span>
                  <strong>{peso(cart.subtotal)}</strong>
                </div>
                <div className="cart-row">
                  <span>Shipping est.</span>
                  <strong>{cart.shippingEst === 0 ? "Free" : peso(cart.shippingEst)}</strong>
                </div>
                <Link className="button primary cart-checkout" href="/checkout" onClick={cart.closeDrawer}>
                  Checkout · {peso(cart.total)}
                </Link>
                <Link className="cart-view" href="/cart" onClick={cart.closeDrawer}>
                  View full cart →
                </Link>
              </footer>
            )}
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
