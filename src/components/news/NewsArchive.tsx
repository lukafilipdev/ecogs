"use client";

import { useSearchParams } from "next/navigation";
import type { ComponentProps } from "react";
import { CATEGORY_PARAM, NewsArchiveView } from "./NewsArchiveView";

type NewsArchiveProps = Omit<
  ComponentProps<typeof NewsArchiveView>,
  "activeSlug"
>;

/** Reads the category filter from the URL so filtered views are shareable. */
export function NewsArchive(props: NewsArchiveProps) {
  const activeSlug = useSearchParams().get(CATEGORY_PARAM);
  return <NewsArchiveView {...props} activeSlug={activeSlug} />;
}
