import { cn } from "@/lib/cn";

interface MenuToggleProps {
  open: boolean;
  onToggle: () => void;
  className?: string;
}

const bar =
  "absolute inset-x-0 h-[1.5px] bg-white transition-all duration-500 ease-line";

export function MenuToggle({ open, onToggle, className }: MenuToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls="mobile-menu"
      aria-label={open ? "Zapri meni" : "Odpri meni"}
      className={cn(
        "flex min-h-11 cursor-pointer items-center gap-3 py-2.5 text-sm font-semibold tracking-[.08em] text-white uppercase",
        className,
      )}
    >
      <span>{open ? "Zapri" : "Meni"}</span>
      <span className="relative block h-3 w-[26px]" aria-hidden="true">
        <span className={cn(bar, open ? "top-[5px] rotate-45" : "top-0")} />
        <span
          className={cn(bar, open ? "top-[5px] -rotate-45" : "top-[10px]")}
        />
      </span>
    </button>
  );
}
