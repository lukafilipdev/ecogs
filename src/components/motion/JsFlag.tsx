"use client";

/**
 * Adds `js` to <html> synchronously during HTML parsing, before first paint.
 * Reveal animations only hide content under `.js`, so the site stays fully
 * readable without JavaScript.
 *
 * The type swap avoids React's dev warning about rendering <script> on the
 * client; see "Preventing flash before hydration" in the Next.js docs.
 */
export function JsFlag() {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: "document.documentElement.classList.add('js')",
      }}
    />
  );
}
