import type { Metadata } from "next";
import { SearchResults } from "./SearchResults";

export const metadata: Metadata = {
  title: "Search",
  description: "Search the Northline catalog.",
};

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  return (
    <section className="section">
      <div className="page-head">
        <p className="eyebrow">Search</p>
        <h1>{q ? `Results for “${q}”` : "Search the catalog."}</h1>
      </div>
      <SearchResults q={q} />
    </section>
  );
}
