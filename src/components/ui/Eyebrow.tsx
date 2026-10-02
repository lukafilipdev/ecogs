import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

const tones = {
  plum: "text-plum",
  lilac: "text-lilac",
  white: "text-white",
};

type EyebrowProps = ComponentPropsWithoutRef<"div"> & {
  tone?: keyof typeof tones;
};

/** Small uppercase label that sits above headings. */
export function Eyebrow({ tone = "plum", className, ...props }: EyebrowProps) {
  return (
    <div
      className={cn(
        "text-xs font-semibold tracking-[.2em] uppercase",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
