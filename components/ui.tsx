import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[82rem] px-6 sm:px-10 ${className}`}>
      {children}
    </div>
  );
}

/**
 * A chapter opening. Rule across the full measure, the roman numeral hung in
 * the left margin, the title set large against it. This is the device the page
 * is built on, and it is why nothing here needs a coloured eyebrow chip.
 */
export function Chapter({
  numeral,
  running,
  title,
  standfirst,
  tone = "dark",
  className = "",
}: {
  numeral: string;
  running: string;
  title: ReactNode;
  standfirst?: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  const light = tone === "light";
  return (
    <header className={className}>
      <div
        className={`flex items-baseline justify-between gap-6 pb-4 ${
          light ? "rule-b-dark" : "rule-b"
        }`}
      >
        <span className={light ? "folio text-[color:var(--color-sand-400)]" : "folio text-[color:var(--color-mute)]"}>
          {running}
        </span>
        <span
          className={`hidden sm:block ${
            light ? "folio text-[color:var(--color-sand-400)]" : "folio text-[color:var(--color-mute)]"
          }`}
        >
          Structured Talent
        </span>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-[4rem_1fr] sm:gap-10">
        <span
          className={`numeral text-[2rem] leading-none sm:text-[2.5rem] ${
            light ? "text-[color:var(--color-gold-400)]" : ""
          }`}
        >
          {numeral}
        </span>
        <div>
          <h2
            className={`title max-w-[24ch] text-[clamp(2rem,4.6vw,3.5rem)] text-balance ${
              light ? "text-[color:var(--color-paper-50)]" : ""
            }`}
          >
            {title}
          </h2>
          {standfirst ? (
            <p
              className={`mt-7 max-w-[42ch] text-[1.0625rem] leading-[1.75] text-pretty sm:text-[1.125rem] ${
                light ? "text-[color:var(--color-sand-200)]" : "text-[color:var(--color-body)]"
              }`}
            >
              {standfirst}
            </p>
          ) : null}
        </div>
      </div>
    </header>
  );
}

/* Buttons are rules and type, not filled pills. The one filled shape on the
   page is the primary action, and it is square. */
export function Action({
  href,
  children,
  tone = "ink",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "ink" | "paper" | "quiet" | "quiet-light";
  className?: string;
}) {
  const tones = {
    ink: "bg-[color:var(--color-ink-900)] text-[color:var(--color-paper-50)] hover:bg-[color:var(--color-ink-800)] px-8 py-4",
    paper:
      "bg-[color:var(--color-paper-50)] text-[color:var(--color-ink-950)] hover:bg-white px-8 py-4",
    quiet:
      "border-b border-[color:var(--color-gold-500)] pb-1 text-[color:var(--color-ink-900)] hover:border-[color:var(--color-ink-900)]",
    "quiet-light":
      "border-b border-[color:var(--color-gold-400)]/70 pb-1 text-[color:var(--color-paper-50)] hover:border-[color:var(--color-paper-50)]",
  } as const;

  const isAnchor =
    href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:");

  return (
    <a
      href={href}
      {...(!isAnchor ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className={`inline-flex items-center gap-3 text-[1rem] tracking-[-0.01em] whitespace-nowrap transition-colors duration-200 ${tones[tone]} ${className}`}
    >
      {children}
    </a>
  );
}
