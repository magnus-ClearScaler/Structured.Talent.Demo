"use client";

import { useState } from "react";
import { Container } from "@/components/ui";
import { site } from "@/lib/site";

const nav = [
  { href: "#candidates", label: "For candidates" },
  { href: "#companies", label: "For companies" },
  { href: "#playbook", label: "The playbook" },
  { href: "#founder", label: "The founder" },
];

export function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span
      className={`font-[family-name:var(--font-serif)] text-[1.375rem] leading-none tracking-[-0.015em] ${
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

/**
 * A masthead rather than a nav bar: wordmark, a rule, and the standing line a
 * journal would carry. It does not float, it does not blur, it does not follow
 * you down the page.
 */
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="rule-b bg-[color:var(--color-paper-50)]">
      <Container>
        <div className="flex items-center justify-between gap-6 py-5">
          <a href="#top" aria-label="Structured Talent, back to top">
            <Wordmark />
          </a>

          <p className="folio hidden text-[color:var(--color-mute)] lg:block">
            Sales hiring &amp; GTM playbooks · Dublin · DACH &amp; EMEA
          </p>

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
              className="meta text-[color:var(--color-ink-900)] lg:hidden"
            >
              {open ? "Close" : "Contents"}
            </button>
          </div>
        </div>
      </Container>

      {/* Standing contents line, the way a masthead carries its sections */}
      <div className="rule-t hidden bg-[color:var(--color-paper-100)]/50 lg:block">
        <Container>
          <nav aria-label="Primary" className="flex items-center gap-10 py-3">
            {nav.map((n, i) => (
              <a
                key={n.href}
                href={n.href}
                className="group flex items-baseline gap-2.5 text-[0.9375rem] text-[color:var(--color-body)] transition-colors hover:text-[color:var(--color-ink-900)]"
              >
                <span className="numeral text-[0.8125rem]">
                  {["I", "II", "III", "IV"][i]}
                </span>
                {n.label}
              </a>
            ))}
          </nav>
        </Container>
      </div>

      {open ? (
        <div id="mobile-nav" className="rule-t bg-[color:var(--color-paper-50)] lg:hidden">
          <Container className="py-3">
            <nav aria-label="Primary, mobile" className="flex flex-col">
              {nav.map((n, i) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rule-b flex items-baseline gap-3 py-3.5 text-[1.0625rem] text-[color:var(--color-ink-900)] last:border-0"
                >
                  <span className="numeral text-[0.8125rem]">
                    {["I", "II", "III", "IV"][i]}
                  </span>
                  {n.label}
                </a>
              ))}
              <a
                href={site.booking.strategy}
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => setOpen(false)}
                className="mt-4 mb-2 bg-[color:var(--color-ink-900)] px-6 py-3.5 text-center text-[1rem] text-[color:var(--color-paper-50)]"
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
