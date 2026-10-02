import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";
import { SmartLink } from "./SmartLink";

const tones = {
  ink: "border-ink text-ink hover:text-plum",
  plum: "border-plum text-plum hover:text-ink",
};

type TextLinkProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
  tone?: keyof typeof tones;
  arrow?: boolean;
};

/** Underlined call-to-action link, e.g. "Vse novice →". */
export function TextLink({
  tone = "ink",
  arrow = true,
  className,
  children,
  ...props
}: TextLinkProps) {
  return (
    <SmartLink
      className={cn(
        "inline-flex items-center gap-2.5 border-b py-3 text-[15px] font-semibold",
        tones[tone],
        className,
      )}
      {...props}
    >
      {children}
      {arrow && <span aria-hidden="true">→</span>}
    </SmartLink>
  );
}
