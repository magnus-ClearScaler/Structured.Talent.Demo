"use client";

import { useState } from "react";
import { Container } from "@/components/ui";
import { site } from "@/lib/site";

const nav = [
  { href: "#candidates", label: "For candidates" },
  { href: "#companies", label: "For companies" },
  { href: "#playbook", label: "Playbook" },
  { href: "#founder", label: "About Harm" },
];

export function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span
      className={`text-[1.3125rem] leading-none tracking-[0.005em] ${
        tone === "light"
          ? "text-[color:var(--color-paper-50)]"
          : "text-[color:var(--color-ink-900)]"
      }`}
    >
      Structured Talent
    </span>
  );
}

/* Wordmark, links, one action. No standing strapline, no roman numerals, and
   it does not follow you down the page. */
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="rule-b bg-[color:var(--color-paper-50)]">
      <Container>
        <div className="flex items-center justify-between gap-8 py-5">
          <a href="#top" aria-label="Structured Talent, back to top">
            <Wordmark />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[1rem] text-[color:var(--color-body)] transition-colors hover:text-[color:var(--color-ink-900)]"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <a
              href={site.booking.strategy}
              target="_blank"
              rel="noreferrer noopener"
              className="hidden border-b border-[color:var(--color-gold-500)] pb-0.5 text-[1rem] text-[color:var(--color-ink-900)] transition-colors hover:border-[color:var(--color-ink-900)] sm:inline-block"
            >
              Book a call
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="text-[1rem] text-[color:var(--color-ink-900)] lg:hidden"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className="rule-t bg-[color:var(--color-paper-50)] lg:hidden">
          <Container className="py-2">
            <nav aria-label="Primary, mobile" className="flex flex-col">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rule-b py-3.5 text-[1.0625rem] text-[color:var(--color-ink-900)] last:border-0"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={site.booking.strategy}
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => setOpen(false)}
                className="mt-4 mb-3 bg-[color:var(--color-ink-900)] px-6 py-3.5 text-center text-[1rem] text-[color:var(--color-paper-50)]"
              >
                Book a call
              </a>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
