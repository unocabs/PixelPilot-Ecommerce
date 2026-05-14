import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PRODUCTS, getProduct, getRelatedProducts } from "../../_lib/products";
import { STORE } from "../../_lib/store";
import { ProductDetail } from "../../_components/ProductDetail";
import { ProductCard } from "../../_components/ProductCard";
import { JsonLd } from "../../_components/JsonLd";
import { breadcrumbSchema, productSchema } from "../../_lib/schema";

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      type: "website",
    },
  };
}

export default async function ProductPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = getRelatedProducts(product);

  return (
    <section className="section">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden>/</span>
        <Link href="/products">Shop</Link>
        <span aria-hidden>/</span>
        <span>{product.name}</span>
      </nav>

      <ProductDetail product={product} />

      {related.length > 0 && (
        <div className="pdp-related">
          <h2>You might also like</h2>
          <div className="productGrid">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

      <JsonLd data={productSchema(product)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: STORE.url },
          { name: "Shop", url: `${STORE.url}/products` },
          { name: product.name, url: `${STORE.url}/products/${product.slug}` },
        ])}
      />
    </section>
  );
}
