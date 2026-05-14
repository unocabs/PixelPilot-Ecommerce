import Link from "next/link";
import { STORE } from "../_lib/store";

export function SiteFooter() {
  return (
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
  );
}
