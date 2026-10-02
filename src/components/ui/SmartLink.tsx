import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type SmartLinkProps = ComponentPropsWithoutRef<"a"> & { href: string };

/**
 * Uses next/link for internal routes and a plain anchor for everything else
 * (tel:, mailto:, external URLs). External http links open in a new tab.
 */
export function SmartLink({ href, ...props }: SmartLinkProps) {
  if (href.startsWith("/")) {
    return <Link href={href} {...props} />;
  }

  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    />
  );
}
