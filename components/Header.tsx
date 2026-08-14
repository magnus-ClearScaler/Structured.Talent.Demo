"use client";

import { useState } from "react";
import { Container } from "@/components/ui";
import { ArrowRight } from "@/components/Icons";
import { site } from "@/lib/site";

const nav = [
  { href: "#candidates", label: "For candidates" },
  { href: "#companies", label: "For companies" },
  { href: "#playbook", label: "Playbook" },
  { href: "#founder", label: "Founder" },
];

export function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span
      className={`font-[family-name:var(--font-serif)] text-[1.3rem] leading-none tracking-[-0.02em] ${
        tone === "light"
          ? "text-[color:var(--color-paper-50)]"
          : "text-[color:var(--color-ink-900)]"
      }`}
    >
      Structured{" "}
      <span
        className={
          tone === "light"
            ? "italic text-[color:var(--color-gold-300)]"
            : "italic text-[color:var(--color-gold-600)]"
        }
      >
        Talent
      </span>
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-line)] bg-[color:var(--color-paper-50)]/88 backdrop-blur-md">
      <Container>
        <div className="flex h-[4.5rem] items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-3" aria-label="Structured Talent, back to top">
            <Wordmark />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[0.875rem] font-medium text-[color:var(--color-ink-700)] transition-colors hover:text-[color:var(--color-gold-700)]"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.booking.strategy}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 bg-[color:var(--color-ink-900)] px-4 py-2.5 text-[0.8125rem] font-medium text-[color:var(--color-paper-50)] transition-colors hover:bg-[color:var(--color-ink-800)] sm:px-5 sm:text-[0.875rem]"
            >
              Book a call
              <ArrowRight className="h-3.5 w-3.5" />
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="flex h-10 w-10 items-center justify-center border border-[color:var(--color-line)] text-[color:var(--color-ink-900)] lg:hidden"
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
                {open ? (
                  <path d="m4.5 4.5 11 11m0-11-11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                ) : (
                  <path d="M3 6h14M3 13h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-[color:var(--color-line)] bg-[color:var(--color-paper-50)] lg:hidden">
          <Container className="py-4">
            <nav aria-label="Primary, mobile" className="flex flex-col">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-[color:var(--color-line-soft)] py-3.5 text-[1.0625rem] text-[color:var(--color-ink-900)] last:border-0"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={site.booking.strategy}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-4 inline-flex items-center justify-center gap-2 bg-[color:var(--color-ink-900)] px-6 py-3.5 text-[0.9375rem] font-medium text-[color:var(--color-paper-50)]"
              >
                Book a strategy call
                <ArrowRight className="h-4 w-4" />
              </a>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
