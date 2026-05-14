import type { Metadata } from "next";
import { SuccessView } from "./SuccessView";

export const metadata: Metadata = {
  title: "Order received",
  description: "Mock order confirmation.",
  robots: { index: false, follow: false },
};

type Props = {
  searchParams: Promise<{ order?: string; total?: string }>;
};

export default async function SuccessPage({ searchParams }: Props) {
  const sp = await searchParams;
  return <SuccessView order={sp.order} total={sp.total} />;
}
