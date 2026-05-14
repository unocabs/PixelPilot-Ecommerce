import Link from "next/link";
import clsx from "clsx";
import type { Collection } from "../_lib/collections";

export function CollectionTile({ collection, index }: { collection: Collection; index: number }) {
  return (
    <Link href={`/collections/${collection.slug}`} className={clsx("collectionCard", collection.art)}>
      <span>{String(index + 1).padStart(2, "0")}</span>
      <h3>{collection.title}</h3>
      <p>{collection.blurb}</p>
    </Link>
  );
}
