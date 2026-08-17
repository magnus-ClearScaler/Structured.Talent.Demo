import type { ReactNode } from "react";
import Image from "next/image";

/**
 * A full-bleed photographic breather.
 *
 * All four photographs on this page are CC0 stock, put through the same
 * duotone so they read as one commissioned set rather than four downloads:
 * greyscale, mild contrast, then mapped between the page's ink and paper.
 * That treatment is doing most of the work — untreated, they look exactly
 * like what they are.
 *
 * They carry no information, so they are hidden from assistive technology.
 */
export function Band({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative h-[12rem] w-full overflow-hidden sm:h-[16rem] lg:h-[21rem] ${className}`}
    >
      <Image src={src} alt="" fill sizes="100vw" className="object-cover" />
    </div>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[76rem] px-6 sm:px-10 ${className}`}>
      {children}
    </div>
  );
}

/**
 * A section opening: a rule, a small plain label, the heading, and the
 * standfirst. No numerals, no running head, no uppercase tracking. The
 * hierarchy comes from size and space, which is all it ever needed.
 */
export function SectionHead({
  label,
  title,
  standfirst,
  tone = "dark",
  className = "",
}: {
  label?: string;
  title: ReactNode;
  standfirst?: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  const light = tone === "light";
  return (
    <header className={`${light ? "rule-t-dark" : "rule-t"} pt-8 ${className}`}>
      {label ? (
        <p className={light ? "label-light" : "label"}>{label}</p>
      ) : null}
      <h2
        className={`title mt-3 max-w-[22ch] text-[clamp(1.875rem,4vw,3rem)] text-balance ${
          light ? "text-[color:var(--color-paper-50)]" : ""
        }`}
      >
        {title}
      </h2>
      {standfirst ? (
        <p
          className={`mt-6 max-w-[56ch] text-[1.0625rem] leading-[1.75] text-pretty ${
            light ? "text-[color:var(--color-sand-200)]" : "text-[color:var(--color-body)]"
          }`}
        >
          {standfirst}
        </p>
      ) : null}
    </header>
  );
}

/* One filled shape for the primary action, a ruled link for everything else. */
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
    ink: "bg-[color:var(--color-ink-900)] text-[color:var(--color-paper-50)] hover:bg-[color:var(--color-ink-800)] px-8 py-3.5",
    paper:
      "bg-[color:var(--color-paper-50)] text-[color:var(--color-ink-950)] hover:bg-white px-8 py-3.5",
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
      className={`inline-flex items-center gap-3 text-[1rem] whitespace-nowrap transition-colors duration-200 ${tones[tone]} ${className}`}
    >
      {children}
    </a>
  );
}
