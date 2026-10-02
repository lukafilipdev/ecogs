"use client";

import { useEffect, useState } from "react";

const pill =
  "cursor-pointer rounded-full border border-rule-strong px-[18px] py-[11px] text-sm font-semibold text-ink transition-colors hover:border-ink hover:text-ink";

const COPIED_RESET_MS = 1800;

export function ShareLinks({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), COPIED_RESET_MS);
    return () => clearTimeout(timeout);
  }, [copied]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      // Clipboard can be unavailable (insecure context, permissions); fail quietly.
    }
  };

  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const mailUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;

  return (
    <div className="mt-14 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-rule-soft pt-6 text-sm">
      <span className="text-muted">Delite novico</span>
      <div className="flex flex-wrap gap-2.5">
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={pill}
        >
          Facebook
        </a>
        <a href={mailUrl} className={pill}>
          E-pošta
        </a>
        <button type="button" onClick={copyLink} className={pill}>
          <span aria-live="polite">
            {copied ? "Kopirano ✓" : "Kopiraj povezavo"}
          </span>
        </button>
      </div>
    </div>
  );
}
