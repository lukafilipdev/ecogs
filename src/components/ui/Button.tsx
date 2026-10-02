import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";
import { SmartLink } from "./SmartLink";

const variants = {
  /** White pill on dark backgrounds */
  light: "bg-white text-ink hover:bg-lavender hover:text-ink",
  /** Outlined pill on dark backgrounds */
  "light-outline":
    "border border-white text-white hover:bg-white hover:text-ink",
  /** Brand pill */
  plum: "bg-plum text-white hover:bg-plum-dark hover:text-white",
  /** Outlined pill on light backgrounds */
  outline: "border border-ink text-ink hover:text-ink",
};

const sizes = {
  md: "px-[22px] py-4",
  lg: "px-[26px] py-4",
};

export type ButtonVariant = keyof typeof variants;

interface StyleProps {
  variant?: ButtonVariant;
  size?: keyof typeof sizes;
}

export function buttonClasses({
  variant = "plum",
  size = "md",
}: StyleProps = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2.5 rounded-full text-[15px] font-semibold transition-colors duration-300",
    variants[variant],
    sizes[size],
  );
}

type ButtonLinkProps = ComponentPropsWithoutRef<"a"> &
  StyleProps & {
    href: string;
  };

export function ButtonLink({
  variant,
  size,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <SmartLink
      className={cn(buttonClasses({ variant, size }), className)}
      {...props}
    />
  );
}

type ButtonProps = ComponentPropsWithoutRef<"button"> & StyleProps;

export function Button({
  variant,
  size,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        buttonClasses({ variant, size }),
        "cursor-pointer disabled:cursor-wait disabled:opacity-70",
        className,
      )}
      {...props}
    />
  );
}
