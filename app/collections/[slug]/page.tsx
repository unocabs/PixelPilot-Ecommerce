import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { COLLECTIONS, getCollection } from "../../_lib/collections";
import { getProductsByCollection } from "../../_lib/products";
import { ProductCatalog } from "../../_components/ProductCatalog";
import { JsonLd } from "../../_components/JsonLd";
import { breadcrumbSchema } from "../../_lib/schema";
import { STORE } from "../../_lib/store";

export async function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const c = getCollection(slug);
  if (!c) return { title: "Collection not found" };
  return { title: c.title, description: c.blurb };
}

export default async function CollectionPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const c = getCollection(slug);
  if (!c) notFound();
  const products = getProductsByCollection(slug);

  return (
    <section className="section">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden>/</span>
        <span>Collections</span>
        <span aria-hidden>/</span>
        <span>{c.title}</span>
      </nav>

      <div className="page-head">
        <p className="eyebrow">Collection</p>
        <h1>{c.title}</h1>
        <p className="lede">{c.blurb}</p>
      </div>

      <ProductCatalog initial={products} />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: STORE.url },
          { name: c.title, url: `${STORE.url}/collections/${c.slug}` },
        ])}
      />
    </section>
  );
}
