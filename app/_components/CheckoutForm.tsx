"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "../_state/CartContext";
import { peso } from "../_lib/format";
import clsx from "clsx";

const PROVINCES = [
  "Metro Manila",
  "Pampanga",
  "Bulacan",
  "Laguna",
  "Cavite",
  "Cebu",
  "Davao del Sur",
  "Iloilo",
];

type Shipping = "pickup" | "standard" | "express";

const shippingCosts: Record<Shipping, number> = { pickup: 0, standard: 150, express: 280 };

export function CheckoutForm() {
  const cart = useCart();
  const router = useRouter();
  const [shipping, setShipping] = useState<Shipping>("standard");
  const [payment, setPayment] = useState<"cod" | "gcash" | "card">("cod");
  const [submitting, setSubmitting] = useState(false);

  const shippingCost = shippingCosts[shipping];
  const total = cart.subtotal + shippingCost;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (cart.items.length === 0) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    const order = `NL-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
    cart.clear();
    router.push(`/checkout/success?order=${order}&total=${total}`);
  };

  return (
    <form className="checkout-grid" onSubmit={onSubmit} noValidate>
      <div className="checkout-form-col">
        <fieldset className="checkout-fieldset">
          <legend>Contact</legend>
          <label className="field">
            <span>Email</span>
            <input type="email" required autoComplete="email" />
          </label>
        </fieldset>

        <fieldset className="checkout-fieldset">
          <legend>Shipping address</legend>
          <div className="form-row form-row-2">
            <label className="field">
              <span>Full name</span>
              <input type="text" required autoComplete="name" />
            </label>
            <label className="field">
              <span>Phone</span>
              <input
                type="tel"
                required
                autoComplete="tel"
                pattern="[0-9+\-\s()]{7,}"
                title="Use digits, spaces, +, -."
              />
            </label>
          </div>
          <label className="field">
            <span>Address line 1</span>
            <input type="text" required autoComplete="address-line1" />
          </label>
          <label className="field">
            <span>Address line 2 (optional)</span>
            <input type="text" autoComplete="address-line2" />
          </label>
          <div className="form-row form-row-3">
            <label className="field">
              <span>City</span>
              <input type="text" required autoComplete="address-level2" />
            </label>
            <label className="field">
              <span>Province</span>
              <select required defaultValue="">
                <option value="" disabled>
                  Select…
                </option>
                {PROVINCES.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>ZIP</span>
              <input type="text" required pattern="[0-9]{4}" title="4-digit ZIP." />
            </label>
          </div>
        </fieldset>

        <fieldset className="checkout-fieldset">
          <legend>Shipping</legend>
          <div className="radio-stack">
            <label className={clsx("radio-row", shipping === "pickup" && "is-active")}>
              <input
                type="radio"
                name="shipping"
                checked={shipping === "pickup"}
                onChange={() => setShipping("pickup")}
              />
              <span>
                <strong>Store pickup</strong>
                <em>Free · ready next day</em>
              </span>
              <span className="radio-price">Free</span>
            </label>
            <label className={clsx("radio-row", shipping === "standard" && "is-active")}>
              <input
                type="radio"
                name="shipping"
                checked={shipping === "standard"}
                onChange={() => setShipping("standard")}
              />
              <span>
                <strong>Standard courier</strong>
                <em>3-5 business days</em>
              </span>
              <span className="radio-price">{peso(150)}</span>
            </label>
            <label className={clsx("radio-row", shipping === "express" && "is-active")}>
              <input
                type="radio"
                name="shipping"
                checked={shipping === "express"}
                onChange={() => setShipping("express")}
              />
              <span>
                <strong>Express</strong>
                <em>1-2 business days</em>
              </span>
              <span className="radio-price">{peso(280)}</span>
            </label>
          </div>
        </fieldset>

        <fieldset className="checkout-fieldset">
          <legend>Payment</legend>
          <div className="radio-stack">
            <label className={clsx("radio-row", payment === "cod" && "is-active")}>
              <input
                type="radio"
                name="payment"
                checked={payment === "cod"}
                onChange={() => setPayment("cod")}
              />
              <span>
                <strong>Cash on delivery</strong>
                <em>Pay when your order arrives.</em>
              </span>
            </label>
            <label className={clsx("radio-row", payment === "gcash" && "is-active")}>
              <input
                type="radio"
                name="payment"
                checked={payment === "gcash"}
                onChange={() => setPayment("gcash")}
              />
              <span>
                <strong>GCash</strong>
                <em>UI only in this demo.</em>
              </span>
            </label>
            <label className={clsx("radio-row", payment === "card" && "is-active")}>
              <input
                type="radio"
                name="payment"
                checked={payment === "card"}
                onChange={() => setPayment("card")}
              />
              <span>
                <strong>Card</strong>
                <em>UI only in this demo.</em>
              </span>
            </label>
          </div>
        </fieldset>

        <label className="field">
          <span>Order notes (optional)</span>
          <textarea rows={3} />
        </label>
      </div>

      <aside className="checkout-summary">
        <strong className="checkout-summary-title">Order summary</strong>
        <ul className="summary-lines">
          {cart.items.map((line) => (
            <li key={line.id}>
              <span className={clsx("summary-art", line.artClass)} aria-hidden />
              <span className="summary-info">
                <strong>{line.name}</strong>
                <span>
                  {line.color} · {line.size} · ×{line.qty}
                </span>
              </span>
              <span>{peso(line.price * line.qty)}</span>
            </li>
          ))}
          {cart.items.length === 0 && <li className="summary-empty">Your cart is empty.</li>}
        </ul>
        <div className="summary-row">
          <span>Subtotal</span>
          <strong>{peso(cart.subtotal)}</strong>
        </div>
        <div className="summary-row">
          <span>Shipping</span>
          <strong>{shippingCost === 0 ? "Free" : peso(shippingCost)}</strong>
        </div>
        <div className="summary-row summary-total">
          <span>Total</span>
          <strong>{peso(total)}</strong>
        </div>
        <button
          type="submit"
          className="button primary checkout-place"
          disabled={cart.items.length === 0 || submitting}
        >
          {submitting ? "Placing order…" : `Place order · ${peso(total)}`}
        </button>
        <p className="checkout-note">
          Demo only — no payment is processed and no order is sent.
        </p>
      </aside>
    </form>
  );
}
