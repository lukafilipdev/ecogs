"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import logoWhite from "@/assets/brand/logo-white.png";
import { contact, mainNav, site } from "@/content/site";
import { cn } from "@/lib/cn";
import { isActivePath } from "./isActivePath";
import { MenuToggle } from "./MenuToggle";
import { MobileMenu } from "./MobileMenu";
import { useScrolledPast } from "./useScrolledPast";

const DESKTOP_QUERY = "(min-width: 860px)";

export function SiteHeader() {
  const pathname = usePathname();
  const scrolled = useScrolledPast(60);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Close the menu on Escape or when the viewport grows to desktop width.
  useEffect(() => {
    if (!menuOpen) return;
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeMenu();

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", closeMenu);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", closeMenu);
    };
  }, [menuOpen, closeMenu]);

  const solid = scrolled && !menuOpen;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter] duration-500",
          solid ? "bg-ink/90 backdrop-blur-[14px]" : "bg-transparent",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-[clamp(20px,4vw,56px)] transition-[padding] duration-500",
            solid ? "py-3" : "py-[18px] nav:py-7",
          )}
        >
          <Link
            href="/"
            aria-label={`${site.name} – domov`}
            className="flex min-h-11 items-center"
            onClick={closeMenu}
          >
            <Image
              src={logoWhite}
              alt="ECOGS Gornji Slaveči"
              preload
              sizes="120px"
              className={cn(
                "w-auto transition-[height] duration-500",
                solid ? "h-[30px]" : "h-8 nav:h-[38px]",
              )}
            />
          </Link>

          <nav
            aria-label="Glavna navigacija"
            className="hidden items-center gap-[clamp(22px,2.8vw,44px)] nav:flex"
          >
            {mainNav.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative py-2.5 text-sm font-medium tracking-[.02em] text-white transition-opacity duration-300 hover:text-white hover:opacity-100",
                    active ? "opacity-100" : "opacity-80",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute bottom-1 left-0 h-px bg-white transition-[width] duration-500 ease-line",
                      active ? "w-full" : "w-0",
                    )}
                  />
                </Link>
              );
            })}
            <a
              href={contact.phoneHref}
              className="inline-flex items-center gap-2.5 rounded-full border border-white px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-ink"
            >
              Pokličite nas
            </a>
          </nav>

          <MenuToggle
            open={menuOpen}
            onToggle={() => setMenuOpen((open) => !open)}
            className="nav:hidden"
          />
        </div>
      </header>

      <MobileMenu open={menuOpen} pathname={pathname} onNavigate={closeMenu} />
    </>
  );
}
