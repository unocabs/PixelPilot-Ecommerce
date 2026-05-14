import Link from "next/link";
import { STORE } from "../_lib/store";

export function SiteFooter() {
  return (
    <>
      <section className="section other-demos" aria-label="All PixelPilot demo sites">
        <div className="other-demos-head">
          <p className="eyebrow">Compare the tiers</p>
          <h2>See all PixelPilot demos.</h2>
          <p>
            This is the ecommerce storefront tier. Tap through to see the simpler one-page tier or
            the business website tier.
          </p>
        </div>
        <div className="other-demos-grid other-demos-grid-3">
          <a
            className="other-demo-card other-demo-simple"
            href="https://pixel-pilot-simple.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="other-demo-meta">
              <span className="other-demo-tier">Simple</span>
              <span className="other-demo-price">From ₱8,000</span>
            </div>
            <h3>One-page agency pitch</h3>
            <p>
              Static HTML/CSS/JS one-pager. Best for founders, freelancers, and small businesses
              that need a clean online presence quickly.
            </p>
            <ul className="other-demo-tags">
              <li>Single page</li>
              <li>Mobile responsive</li>
              <li>Basic SEO</li>
              <li>Mailto contact</li>
            </ul>
            <span className="other-demo-cta">Visit PixelPilot →</span>
          </a>
          <a
            className="other-demo-card other-demo-business"
            href="https://pixel-pilot-business.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="other-demo-meta">
              <span className="other-demo-tier">Business</span>
              <span className="other-demo-price">From ₱18,000</span>
            </div>
            <h3>Local business website</h3>
            <p>
              Multi-page Next.js site with live open/closed status, validated booking form,
              embedded Google Maps, lightbox gallery, and LocalBusiness SEO schema.
            </p>
            <ul className="other-demo-tags">
              <li>Multi-page</li>
              <li>Booking form</li>
              <li>Google Maps</li>
              <li>LocalBusiness schema</li>
            </ul>
            <span className="other-demo-cta">Visit Harbor Lane Cafe →</span>
          </a>
          <div
            className="other-demo-card other-demo-ecommerce other-demo-card--current"
            aria-current="page"
          >
            <div className="other-demo-meta">
              <span className="other-demo-tier">Ecommerce</span>
              <span className="other-demo-price">From ₱40,000+</span>
            </div>
            <h3>Working storefront</h3>
            <p>
              Persistent cart, product detail pages with size and color variants, filtering,
              search, wishlist, and a click-through mock checkout flow.
            </p>
            <ul className="other-demo-tags">
              <li>Cart with localStorage</li>
              <li>16 product pages</li>
              <li>Variants & filters</li>
              <li>Mock checkout</li>
            </ul>
            <p className="other-demo-note">
              You&apos;re viewing this tier. Tap a sibling card to compare.
            </p>
          </div>
        </div>
      </section>

    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <span className="brand">
            <span className="brandMark">P</span>
            <span>{STORE.shortName}</span>
          </span>
          <p>{STORE.tagline}</p>
          <p className="footer-fineprint">A PixelPilot ecommerce demo.</p>
        </div>
        <div>
          <strong>Shop</strong>
          <ul className="footer-links">
            <li>
              <Link href="/products">All products</Link>
            </li>
            <li>
              <Link href="/collections/new-arrivals">New arrivals</Link>
            </li>
            <li>
              <Link href="/collections/workwear">Workwear</Link>
            </li>
            <li>
              <Link href="/collections/weekend-sets">Weekend sets</Link>
            </li>
            <li>
              <Link href="/collections/accessories">Accessories</Link>
            </li>
          </ul>
        </div>
        <div>
          <strong>Help</strong>
          <ul className="footer-links">
            <li>
              <Link href="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <a href={`mailto:${STORE.email}`}>Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <strong>Stay in touch</strong>
          <p>Follow Northline for new drops and weekend pickups.</p>
          <a href={STORE.social.instagram} target="_blank" rel="noreferrer">
            Instagram →
          </a>
        </div>
      </div>
      <div className="footer-base">
        <span>© {new Date().getFullYear()} PixelPilot demo</span>
        <span>
          Want this for your shop?{" "}
          <a href={`mailto:${STORE.email}?subject=Ecommerce%20Demo`}>Ask PixelPilot</a>
        </span>
      </div>
    </footer>
    </>
  );
}
