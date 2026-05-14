"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useCart } from "../_state/CartContext";
import { useWishlist } from "../_state/WishlistContext";
import { STORE } from "../_lib/store";
import { SearchOverlay } from "./SearchOverlay";

const NAV = [
  { href: "/products", label: "Shop" },
  { href: "/collections/new-arrivals", label: "New" },
  { href: "/collections/workwear", label: "Workwear" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const cart = useCart();
  const wishlist = useWishlist();
  const [search, setSearch] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSearch(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={clsx("nav site-nav", scrolled && "nav-scrolled")}>
        <Link className="brand" href="/" aria-label={`${STORE.name} home`}>
          <span className="brandMark">P</span>
          <span>{STORE.shortName}</span>
        </Link>

        <nav aria-label="Primary" className="nav-desktop">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(pathname === item.href && "nav-link-active")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-btn"
            aria-label="Search"
            onClick={() => setSearch(true)}
          >
            <SearchIcon />
          </button>
          <Link href="/wishlist" className="icon-btn" aria-label="Wishlist">
            <HeartIcon />
            {wishlist.hydrated && wishlist.count > 0 && (
              <span className="icon-badge">{wishlist.count}</span>
            )}
          </Link>
          <button
            type="button"
            className="icon-btn"
            aria-label="Open cart"
            onClick={cart.openDrawer}
          >
            <BagIcon />
            {cart.hydrated && cart.count > 0 && <span className="icon-badge">{cart.count}</span>}
          </button>
          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {open && <div className="drawer-backdrop" onClick={() => setOpen(false)} aria-hidden />}
      <aside className={clsx("drawer", open && "drawer-open")} aria-hidden={!open}>
        <div className="drawer-head">
          <span className="brand">
            <span className="brandMark">P</span>
            <span>{STORE.shortName}</span>
          </span>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close menu">
            ×
          </button>
        </div>
        <nav aria-label="Mobile">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/wishlist">Wishlist</Link>
          <Link href="/cart">Cart</Link>
        </nav>
      </aside>

      <SearchOverlay open={search} onClose={() => setSearch(false)} />
    </>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}
