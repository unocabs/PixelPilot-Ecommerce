import type { Metadata } from "next";
import { ProductCatalog } from "../_components/ProductCatalog";

export const metadata: Metadata = {
  title: "Shop all",
  description: "Filterable catalog of all Northline Studio pieces.",
};

export default function ProductsPage() {
  return (
    <section className="section">
      <div className="page-head">
        <p className="eyebrow">Shop all</p>
        <h1>Every piece, filterable.</h1>
        <p className="lede">
          Filter by category, color, size, and price. Sort to suit how you shop. State persists in
          this session so you can come back where you left off.
        </p>
      </div>
      <ProductCatalog />
    </section>
  );
}
