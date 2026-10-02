import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/cn";

type ContainerProps<T extends ElementType> = {
  as?: T;
  size?: "wide" | "medium";
} & ComponentPropsWithoutRef<T>;

const sizes = {
  wide: "max-w-[1440px]",
  medium: "max-w-[1100px]",
};

/** Centered page column with the site's fluid side gutter. */
export function Container<T extends ElementType = "div">({
  as,
  size = "wide",
  className,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";
  return (
    <Component
      className={cn(
        "mx-auto w-full px-[clamp(20px,4vw,56px)]",
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
