const collections = ["New arrivals", "Workwear", "Weekend sets", "Accessories"];

const products = [
  {
    name: "Linen Utility Overshirt",
    category: "Workwear",
    price: "₱2,450",
    color: "Sage",
  },
  {
    name: "Everyday Wide Trousers",
    category: "Essentials",
    price: "₱2,100",
    color: "Charcoal",
  },
  {
    name: "Boxy Cotton Tee",
    category: "New arrivals",
    price: "₱950",
    color: "Bone",
  },
  {
    name: "Soft Structure Tote",
    category: "Accessories",
    price: "₱1,750",
    color: "Cocoa",
  },
];

export default function EcommerceDemoPage() {
  return (
    <main>
      <div className="announcement">
        <span>PixelPilot ecommerce sample</span>
        <span>Storefront setup from ₱40,000+</span>
        <span>Catalog, shipping, payment guidance, and launch training</span>
      </div>

      <header className="nav">
        <a className="brand" href="#top" aria-label="Northline Studio home">
          <span className="brandMark">P</span>
          <span>Northline Studio</span>
        </a>
        <nav aria-label="Storefront navigation">
          <a href="#collections">Collections</a>
          <a href="#products">Products</a>
          <a href="#checkout">Checkout plan</a>
          <a className="cartButton" href="mailto:hello@pixelpilot.ph?subject=Ecommerce%20Setup%20Demo">
            Ask PixelPilot
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="heroVisual">
          <div className="campaignCard">
            <span>Summer edit</span>
            <strong>Light layers for city days.</strong>
          </div>
          <div className="floatingCart">
            <span>Cart preview</span>
            <strong>3 items · ₱5,500</strong>
          </div>
        </div>

        <div className="heroCopy">
          <p className="eyebrow">Clothing ecommerce demo</p>
          <h1>A polished storefront without pretending to be a full platform.</h1>
          <p className="lede">
            This demo shows the design grade and catalog structure PixelPilot can prepare for
            a starter ecommerce setup: collections, products, promos, and checkout guidance.
          </p>
          <div className="actions">
            <a className="button primary" href="#products">
              Browse products
            </a>
            <a className="button secondary" href="#package">
              View package
            </a>
          </div>
        </div>
      </section>

      <section className="section collections" id="collections">
        <div className="sectionHeader">
          <p className="eyebrow">Collections</p>
          <h2>Category tiles make the store feel organized from the first scroll.</h2>
        </div>
        <div className="collectionGrid">
          {collections.map((collection, index) => (
            <article className="collectionCard" key={collection}>
              <span>0{index + 1}</span>
              <h3>{collection}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section productSection" id="products">
        <div className="sectionHeader">
          <p className="eyebrow">Featured products</p>
          <h2>Local product data gives the demo real storefront structure.</h2>
        </div>
        <div className="productGrid">
          {products.map((product, index) => (
            <article className="productCard" key={product.name}>
              <div className={`productArt art${index + 1}`}>
                <span>{product.color}</span>
              </div>
              <div className="productInfo">
                <span>{product.category}</span>
                <h3>{product.name}</h3>
                <div>
                  <strong>{product.price}</strong>
                  <button type="button">Preview</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section checkout" id="checkout">
        <div>
          <p className="eyebrow">Checkout readiness</p>
          <h2>Enough ecommerce detail to sell the setup, without fake payment flows.</h2>
        </div>
        <div className="checkoutPanel">
          <div className="checkoutRow">
            <span>Catalog</span>
            <strong>Products, categories, variants</strong>
          </div>
          <div className="checkoutRow">
            <span>Payments</span>
            <strong>Guidance for Shopify or provider setup</strong>
          </div>
          <div className="checkoutRow">
            <span>Shipping</span>
            <strong>Pickup, courier, and local delivery notes</strong>
          </div>
        </div>
      </section>

      <section className="section story">
        <article>
          <p className="eyebrow">Brand story</p>
          <h2>Northline Studio is a fictional clothing shop concept.</h2>
          <p>
            It demonstrates how a product business can look premium while staying scoped to a
            realistic starter ecommerce package.
          </p>
        </article>
        <article className="promo">
          <span>Launch offer</span>
          <strong>Free size guide section with every ecommerce setup demo.</strong>
        </article>
      </section>

      <section className="section package" id="package">
        <div>
          <p className="eyebrow">PixelPilot package</p>
          <h2>Ecommerce setup from ₱40,000+.</h2>
        </div>
        <ul>
          <li>Storefront structure and product catalog setup</li>
          <li>Shopify or practical custom storefront direction</li>
          <li>Payment and shipping setup guidance</li>
          <li>Launch training, with backend systems scoped separately</li>
        </ul>
      </section>
    </main>
  );
}
