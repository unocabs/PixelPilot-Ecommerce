import type { Metadata } from "next";
import { Reveal } from "../_components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: "About Northline Studio, a fictional clothing brand used as a PixelPilot demo.",
};

const VALUES = [
  {
    title: "Considered",
    body: "Small drops, simple cuts, sturdy fabrics. Nothing flashy, nothing rushed.",
  },
  {
    title: "Made nearby",
    body: "Production stays in the Philippines — cut, sewn, and finished by partner workshops.",
  },
  {
    title: "Bought to last",
    body: "Pieces are built and priced to be worn for years, not seasons.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="page-head">
          <p className="eyebrow">About</p>
          <h1>Northline Studio.</h1>
          <p className="lede">
            Northline is a fictional clothing brand built by PixelPilot to demo a working
            ecommerce setup. The story below is sample copy — adapt it for a real shop.
          </p>
        </div>
      </section>

      <section className="section story">
        <Reveal>
          <article>
            <p className="eyebrow">The idea</p>
            <h2>Easy pieces, slow seasons.</h2>
            <p>
              Northline started with a question: what would a small Philippine clothing brand look
              like if it focused on twenty pieces a year instead of two hundred? Heavier cottons,
              honest cuts, and stock you can actually buy six months later.
            </p>
            <p>
              The site you&apos;re browsing is the same shape a real shop could ship — cart,
              wishlist, product variants, filters, and checkout. The only thing missing is a real
              payment integration.
            </p>
          </article>
        </Reveal>
        <Reveal delay={0.1}>
          <article className="promo">
            <span>Demo</span>
            <strong>Every interaction here is real — only the order is mock.</strong>
          </article>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <div className="sectionHeader">
            <div>
              <p className="eyebrow">Values</p>
              <h2>Three things we care about.</h2>
            </div>
          </div>
        </Reveal>
        <div className="value-grid">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <article className="value-card">
                <strong>{v.title}</strong>
                <p>{v.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
