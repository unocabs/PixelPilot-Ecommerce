"use client";

import Link from "next/link";
import { peso } from "../../_lib/format";

const STEPS = [
  { title: "Order received", body: "Demo confirmation generated locally.", done: true },
  { title: "Packing", body: "Picked, packed, and quality-checked.", done: false },
  { title: "On the way", body: "Tracking link sent to your email.", done: false },
  { title: "Delivered", body: "Pickup or doorstep — whichever you chose.", done: false },
];

export function SuccessView({ order, total }: { order?: string; total?: string }) {
  const orderId = order ?? "NL-DEMO";
  const totalNumber = total ? Number(total) : 0;
  return (
    <section className="section">
      <div className="success-page">
        <p className="eyebrow">Order received</p>
        <h1>Thanks — your order is in.</h1>
        <p className="lede">
          A confirmation would be sent to your email. Order reference{" "}
          <strong>{orderId}</strong>
          {totalNumber > 0 && (
            <>
              {" "}
              · total <strong>{peso(totalNumber)}</strong>
            </>
          )}
          .
        </p>

        <ol className="timeline">
          {STEPS.map((s) => (
            <li key={s.title} className={s.done ? "timeline-step done" : "timeline-step"}>
              <span className="timeline-dot" aria-hidden />
              <div>
                <strong>{s.title}</strong>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="actions">
          <Link className="button primary" href="/products">
            Continue shopping
          </Link>
          <Link className="button secondary" href="/wishlist">
            View wishlist
          </Link>
        </div>

        <p className="success-note">
          This is a PixelPilot demo. No real payment was taken and no order was actually placed.
        </p>
      </div>
    </section>
  );
}
