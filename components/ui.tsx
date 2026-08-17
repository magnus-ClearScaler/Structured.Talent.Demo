import type { ReactNode } from "react";
import Image from "next/image";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[80rem] px-6 sm:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  tone = "light",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <header className={`max-w-[46rem] ${className}`}>
      {eyebrow ? (
        <p className={dark ? "eyebrow-dark" : "eyebrow"}>{eyebrow}</p>
      ) : null}
      <h2
        className={`h2 mt-4 text-[clamp(2rem,4.2vw,3.25rem)] text-balance ${dark ? "on-dark" : ""}`}
      >
        {title}
      </h2>
      {lead ? (
        <p className={`mt-6 max-w-[42rem] text-pretty ${dark ? "lead-dark" : "lead"}`}>
          {lead}
        </p>
      ) : null}
    </header>
  );
}

/* Sharp corners, no gradients, no glow. Three tones and that is all. */
const tones = {
  primary:
    "bg-[color:var(--color-ink-900)] text-white hover:bg-[color:var(--color-ink-700)]",
  invert:
    "bg-white text-[color:var(--color-ink-950)] hover:bg-[color:var(--color-surface-2)]",
  outline:
    "border border-[color:var(--color-line)] text-[color:var(--color-ink)] hover:border-[color:var(--color-ink)]",
  "outline-dark":
    "border border-[color:var(--color-line-dark)] text-[color:var(--color-onink)] hover:border-[color:var(--color-brass-400)]",
} as const;

export function Button({
  href,
  children,
  tone = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: keyof typeof tones;
  className?: string;
}) {
  const isAnchor =
    href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:");
  return (
    <a
      href={href}
      {...(!isAnchor ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className={`inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-[0.9375rem] font-medium tracking-[-0.01em] whitespace-nowrap transition-colors duration-200 ${tones[tone]} ${className}`}
    >
      {children}
    </a>
  );
}

/* An arrow-tail link, used everywhere a section needs a way onward. */
export function TextLink({
  href,
  children,
  tone = "light",
}: {
  href: string;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={`group inline-flex items-center gap-2 text-[0.9375rem] font-medium transition-colors ${
        tone === "dark"
          ? "text-[color:var(--color-brass-400)] hover:text-[color:var(--color-brass-300)]"
          : "text-[color:var(--color-ink)] hover:text-[color:var(--color-brass-700)]"
      }`}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  );
}

/**
 * Photographs ship pre-graded to a cool near-monochrome, so a section can
 * drop one in without it fighting the palette. They carry no information and
 * are hidden from assistive technology.
 */
export function Figure({
  src,
  className = "",
  ratio = "aspect-[16/9]",
  priority = false,
}: {
  src: string;
  className?: string;
  ratio?: string;
  priority?: boolean;
}) {
  return (
    <div aria-hidden="true" className={`relative overflow-hidden ${ratio} ${className}`}>
      <Image
        src={src}
        alt=""
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
