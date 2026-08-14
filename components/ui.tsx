import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[78rem] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

/* Buttons are square-cornered on purpose. Pills read as SaaS marketing; this
   business sells rigour to German buyers, and the shape should say so. */
const buttonBase =
  "inline-flex items-center justify-center gap-2.5 text-[0.9375rem] font-medium tracking-[-0.01em] whitespace-nowrap transition-colors duration-200";

const variants = {
  ink: "bg-[color:var(--color-ink-900)] text-[color:var(--color-paper-50)] hover:bg-[color:var(--color-ink-800)]",
  gold: "bg-[color:var(--color-gold-400)] text-[color:var(--color-ink-950)] hover:bg-[color:var(--color-gold-300)]",
  outline:
    "border border-[color:var(--color-ink-900)]/22 text-[color:var(--color-ink-900)] hover:border-[color:var(--color-ink-900)] hover:bg-[color:var(--color-ink-900)]/[0.04]",
  ghostLight:
    "border border-[color:var(--color-gold-300)]/35 text-[color:var(--color-paper-50)] hover:border-[color:var(--color-gold-300)] hover:bg-[color:var(--color-gold-300)]/10",
} as const;

const sizes = {
  sm: "px-4 py-2.5 text-[0.875rem]",
  md: "px-6 py-3.5",
  lg: "px-7 py-4",
} as const;

export function Button({
  href,
  children,
  variant = "ink",
  size = "md",
  external = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  external?: boolean;
  className?: string;
}) {
  const cls = `${buttonBase} ${variants[variant]} ${sizes[size]} ${className}`;
  /* Every real destination on this page is off-site (calendars, LinkedIn,
     mail), so external is the default rather than the exception. */
  const isAnchor = href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:");
  return (
    <a
      href={href}
      className={cls}
      {...(external && !isAnchor ? { target: "_blank", rel: "noreferrer noopener" } : {})}
    >
      {children}
    </a>
  );
}

export function Label({
  children,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p className={`${tone === "light" ? "label-light" : "label"} ${className}`}>
      {children}
    </p>
  );
}

/* A hairline gold rule under a label. Small thing, but it is what makes the
   page read as a printed document rather than a landing page. */
export function Rule({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span
      aria-hidden="true"
      className={`mt-4 block h-px w-10 ${
        tone === "light"
          ? "bg-[color:var(--color-gold-400)]/60"
          : "bg-[color:var(--color-gold-500)]/60"
      }`}
    />
  );
}

export function SectionHead({
  label,
  title,
  intro,
  tone = "dark",
  align = "left",
  className = "",
}: {
  label?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {label ? <Label tone={tone}>{label}</Label> : null}
      <h2
        className={`h-section mt-5 text-[clamp(1.9rem,4vw,2.9rem)] text-balance ${
          tone === "light" ? "text-[color:var(--color-paper-50)]" : ""
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-5 max-w-2xl text-[1.0625rem] leading-[1.65] text-pretty ${
            align === "center" ? "mx-auto" : ""
          } ${tone === "light" ? "text-[color:var(--color-sand-200)]" : "text-[color:var(--color-body)]"}`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
