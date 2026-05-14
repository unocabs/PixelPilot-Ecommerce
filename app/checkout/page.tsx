import type { Metadata } from "next";
import { CheckoutForm } from "../_components/CheckoutForm";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Mock checkout for the Northline Studio storefront demo.",
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return (
    <section className="section">
      <div className="page-head">
        <p className="eyebrow">Checkout</p>
        <h1>One last step.</h1>
        <p className="lede">
          This is a demo checkout. No real payment is taken — submitting clears your cart and
          drops you on a confirmation page with a fake order number.
        </p>
      </div>
      <CheckoutForm />
    </section>
  );
}
