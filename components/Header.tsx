"use client";

import { useState } from "react";
import { Container, Button } from "@/components/ui";
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
      className={`flex items-center gap-2.5 text-[1.0625rem] font-semibold tracking-[-0.03em] ${
        tone === "light" ? "text-white" : "text-[color:var(--color-ink)]"
      }`}
    >
      <span
        aria-hidden="true"
        className="flex h-6 w-6 items-center justify-center bg-[color:var(--color-brass-500)] text-[0.75rem] font-bold text-[color:var(--color-ink-950)]"
      >
        ST
      </span>
      Structured Talent
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-line-dark)] bg-[color:var(--color-ink-950)]/92 backdrop-blur-md">
      <Container>
        <div className="flex h-[4.25rem] items-center justify-between gap-8">
          <a href="#top" aria-label="Structured Talent, back to top">
            <Wordmark tone="light" />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[0.9375rem] text-[color:var(--color-onink-body)] transition-colors hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <Button href={site.booking.strategy} tone="invert" className="px-5 py-2.5">
                Book a call
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="text-[0.9375rem] text-white lg:hidden"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-[color:var(--color-line-dark)] bg-[color:var(--color-ink-950)] lg:hidden"
        >
          <Container className="py-2">
            <nav aria-label="Primary, mobile" className="flex flex-col">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-[color:var(--color-line-dark)] py-3.5 text-[1rem] text-white last:border-0"
                >
                  {n.label}
                </a>
              ))}
              <Button
                href={site.booking.strategy}
                tone="invert"
                className="my-4 w-full"
              >
                Book a call
              </Button>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
