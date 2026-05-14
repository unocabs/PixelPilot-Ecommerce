import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./_state/Providers";
import { SiteHeader } from "./_components/SiteHeader";
import { SiteFooter } from "./_components/SiteFooter";
import { CartDrawer } from "./_components/CartDrawer";
import { PromoStrip } from "./_components/PromoStrip";
import { STORE } from "./_lib/store";

export const metadata: Metadata = {
  metadataBase: new URL(STORE.url),
  title: {
    default: `${STORE.name} | PixelPilot Ecommerce Demo`,
    template: `%s | ${STORE.name}`,
  },
  description: STORE.description,
  openGraph: {
    title: `${STORE.name} | PixelPilot Ecommerce Demo`,
    description: STORE.description,
    type: "website",
    locale: "en_PH",
    siteName: STORE.name,
  },
  twitter: { card: "summary_large_image", title: STORE.name, description: STORE.description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <PromoStrip />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <CartDrawer />
        </Providers>
      </body>
    </html>
  );
}
