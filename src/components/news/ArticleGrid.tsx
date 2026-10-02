import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Responsive auto-filling grid for article cards. */
export function ArticleGrid({
  children,
  minColumnWidth = 330,
  className,
}: {
  children: ReactNode;
  minColumnWidth?: 300 | 330;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-x-[clamp(20px,2.4vw,36px)]",
        minColumnWidth === 330
          ? "grid-cols-[repeat(auto-fill,minmax(min(100%,330px),1fr))] gap-y-[clamp(40px,4vw,56px)]"
          : "grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-y-[clamp(36px,3vw,40px)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
