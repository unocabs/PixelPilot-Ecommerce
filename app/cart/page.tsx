import type { Metadata } from "next";
import { CartView } from "./CartView";

export const metadata: Metadata = {
  title: "Cart",
  description: "Your shopping cart.",
};

export default function CartPage() {
  return (
    <section className="section">
      <div className="page-head">
        <p className="eyebrow">Cart</p>
        <h1>Review your bag.</h1>
      </div>
      <CartView />
    </section>
  );
}
