import Link from "next/link";
import { COLLECTIONS } from "./_lib/collections";
import { getFeaturedProducts } from "./_lib/products";
import { Reveal } from "./_components/Reveal";
import { CollectionTile } from "./_components/CollectionTile";
import { ProductCard } from "./_components/ProductCard";

export default function HomePage() {
  const featured = getFeaturedProducts();
  return (
    <>
      <section className="hero" id="top">
        <Reveal className="heroVisual">
          <div className="campaignCard">
            <span>Summer edit</span>
            <strong>Light layers for city days.</strong>
          </div>
          <Link href="/products" className="floatingCart">
            <span>Shop the edit</span>
            <strong>16 pieces · from ₱550</strong>
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="heroCopy">
          <p className="eyebrow">Working storefront demo</p>
          <h1>A real storefront — cart, variants, checkout, and all.</h1>
          <p className="lede">
            Northline is PixelPilot&apos;s ecommerce demo. Unlike the business tier, this is a
            working shop: live cart with localStorage, product pages with size and color variants,
            filterable catalog, search, wishlist, and a mock checkout that ends in a real
            confirmation page.
          </p>
          <div className="actions">
            <Link className="button primary" href="/products">
              Browse all products
            </Link>
            <Link className="button secondary" href="/collections/new-arrivals">
              See new arrivals
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="section" id="collections">
        <Reveal>
          <div className="sectionHeader">
            <div>
              <p className="eyebrow">Collections</p>
              <h2>Shop by what you&apos;re in the mood for.</h2>
            </div>
          </div>
        </Reveal>
        <div className="collectionGrid">
          {COLLECTIONS.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.06}>
              <CollectionTile collection={c} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" id="products">
        <Reveal>
          <div className="sectionHeader">
            <div>
              <p className="eyebrow">Featured</p>
              <h2>Pieces customers come back for.</h2>
            </div>
            <div>
              <Link href="/products" className="button secondary">
                Full catalog →
              </Link>
            </div>
          </div>
        </Reveal>
        <div className="productGrid">
          {featured.slice(0, 4).map((p, i) => (
            <Reveal key={p.id} delay={i * 0.05}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section story">
        <Reveal>
          <article>
            <p className="eyebrow">Brand story</p>
            <h2>Northline Studio is a fictional clothing shop concept.</h2>
            <p>
              It demonstrates how a product business can look premium while staying scoped to a
              realistic starter ecommerce package. Real cart logic, real product pages, and a
              checkout you can click all the way through.
            </p>
            <Link href="/about" className="story-link">
              More about Northline →
            </Link>
          </article>
        </Reveal>
        <Reveal delay={0.1}>
          <article className="promo">
            <span>Launch offer</span>
            <strong>Free size guide section with every ecommerce setup demo.</strong>
          </article>
        </Reveal>
      </section>

      <section className="section package" id="package">
        <Reveal>
          <div>
            <p className="eyebrow">PixelPilot package</p>
            <h2>Ecommerce setup from ₱40,000+.</h2>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <ul>
            <li>Working cart with persistent state (localStorage)</li>
            <li>Product detail pages with color and size variants</li>
            <li>Filterable catalog with search and wishlist</li>
            <li>Mock checkout with shipping + payment selection</li>
            <li>Product + BreadcrumbList JSON-LD schema</li>
            <li>Dynamic sitemap covering every product and collection</li>
          </ul>
        </Reveal>
      </section>
    </>
  );
}
