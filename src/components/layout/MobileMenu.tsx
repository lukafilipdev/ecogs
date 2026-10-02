import Link from "next/link";
import { contact, mainNav } from "@/content/site";
import { cn } from "@/lib/cn";
import { isActivePath } from "./isActivePath";

interface MobileMenuProps {
  open: boolean;
  pathname: string;
  onNavigate: () => void;
}

export function MobileMenu({ open, pathname, onNavigate }: MobileMenuProps) {
  return (
    <div
      id="mobile-menu"
      aria-hidden={!open}
      inert={!open}
      className={cn(
        "fixed inset-0 z-49 flex flex-col justify-between overflow-y-auto bg-ink px-6 pt-28 pb-[calc(28px+env(safe-area-inset-bottom))] text-white transition-[clip-path] duration-800 ease-menu nav:hidden",
        open ? "[clip-path:inset(0_0_0_0)]" : "[clip-path:inset(0_0_100%_0)]",
      )}
    >
      <nav aria-label="Mobilna navigacija" className="flex flex-col">
        {mainNav.map((item, index) => {
          const active = isActivePath(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex items-baseline gap-4 border-b border-night-line py-3 text-white transition-[opacity,transform] duration-[600ms,800ms] ease-[ease,var(--ease-out-soft)] hover:text-white",
                open ? "translate-y-0 opacity-100" : "translate-y-9 opacity-0",
              )}
              style={{
                transitionDelay: open ? `${0.28 + index * 0.06}s` : "0s",
              }}
            >
              <span className="w-6 text-xs font-semibold tracking-[.14em] text-muted-light">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className={cn(
                  "font-serif text-[46px] leading-[1.05]",
                  active && "italic",
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      <div
        className={cn(
          "mt-10 flex flex-col gap-[18px] transition-opacity delay-500 duration-600",
          open ? "opacity-100" : "opacity-0",
        )}
      >
        <p className="text-sm leading-relaxed text-muted-light">
          Bogoslužje vsako nedeljo in ob praznikih ob{" "}
          <span className="text-white">{contact.serviceTime}</span>
          <br />
          {contact.street}, {contact.postalCode} {contact.city}
        </p>
        <div className="flex gap-2.5">
          <a
            href={contact.phoneHref}
            className="flex-1 rounded-full bg-white p-4 text-center text-[15px] font-semibold text-ink hover:text-ink"
          >
            Pokličite
          </a>
          <a
            href={contact.emailHref}
            className="flex-1 rounded-full border border-white p-4 text-center text-[15px] font-semibold text-white hover:text-white"
          >
            E-pošta
          </a>
        </div>
      </div>
    </div>
  );
}
