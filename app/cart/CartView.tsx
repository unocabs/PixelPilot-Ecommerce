"use client";

import Link from "next/link";
import clsx from "clsx";
import { useCart } from "../_state/CartContext";
import { peso } from "../_lib/format";

export function CartView() {
  const cart = useCart();

  if (!cart.hydrated) return <p className="muted-note">Loading…</p>;

  if (cart.items.length === 0) {
    return (
      <div className="empty-state">
        <p>Your cart is empty.</p>
        <Link className="button primary" href="/products">
          Browse products
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page-grid">
      <ul className="cart-page-lines">
        {cart.items.map((line) => (
          <li key={line.id} className="cart-page-line">
            <span className={clsx("cart-page-art", line.artClass)} aria-hidden />
            <div className="cart-page-info">
              <Link href={`/products/${line.slug}`}>
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
                  <span>{line.qty}</span>
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
            <span className="cart-page-price">{peso(line.price * line.qty)}</span>
          </li>
        ))}
      </ul>

      <aside className="checkout-summary">
        <strong className="checkout-summary-title">Cart summary</strong>
        <div className="summary-row">
          <span>Subtotal</span>
          <strong>{peso(cart.subtotal)}</strong>
        </div>
        <div className="summary-row">
          <span>Shipping est.</span>
          <strong>{cart.shippingEst === 0 ? "Free" : peso(cart.shippingEst)}</strong>
        </div>
        <div className="summary-row summary-total">
          <span>Total</span>
          <strong>{peso(cart.total)}</strong>
        </div>
        <Link className="button primary checkout-place" href="/checkout">
          Go to checkout
        </Link>
        <Link className="cart-view" href="/products">
          Keep shopping →
        </Link>
      </aside>
    </div>
  );
}
