import type { Metadata } from "next";
import { WishlistView } from "./WishlistView";

export const metadata: Metadata = {
  title: "Wishlist",
  description: "Items saved for later. Stored on this device only.",
};

export default function WishlistPage() {
  return (
    <section className="section">
      <div className="page-head">
        <p className="eyebrow">Saved for later</p>
        <h1>Your wishlist.</h1>
        <p className="lede">
          Stored on this device. Items persist between sessions via localStorage — no account
          needed.
        </p>
      </div>
      <WishlistView />
    </section>
  );
}
