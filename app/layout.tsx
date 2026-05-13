import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Northline Studio | PixelPilot Ecommerce Setup Demo",
  description:
    "A premium clothing ecommerce demo by PixelPilot, showing storefront structure, product cards, and ecommerce package positioning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
