import { ImageResponse } from "next/og";
import { STORE } from "./_lib/store";

export const runtime = "edge";
export const alt = `${STORE.name} — PixelPilot Ecommerce Demo`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #171a21 0%, #0e7c7b 50%, #e66045 100%)",
          color: "#fff",
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, fontWeight: 800 }}>
          <div
            style={{
              width: 56,
              height: 56,
              background: "#0b0d12",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 12,
              fontSize: 32,
            }}
          >
            P
          </div>
          <span>{STORE.shortName}</span>
        </div>
        <div>
          <div style={{ fontSize: 76, fontWeight: 900, lineHeight: 1.02, maxWidth: 980 }}>
            A working storefront — cart, variants, checkout, and all.
          </div>
          <div style={{ marginTop: 28, fontSize: 28, opacity: 0.92 }}>
            PixelPilot ecommerce demo · from ₱40,000+
          </div>
        </div>
      </div>
    ),
    size,
  );
}
