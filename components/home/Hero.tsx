import Image from "next/image";
import { Button, Container, Label } from "@/components/ui";
import { ArrowRight, Check } from "@/components/Icons";
import { site } from "@/lib/site";

/* Straight off the live site. It is the sharpest thing on it and the audit
   named it the single best trust line in the whole batch, so it keeps the
   position of honour: beside the headline, not three screens down. */
const proof = [
  "I speak German as a native and know when a buyer expects Sie, not Du. The kind of thing a translation tool gets wrong.",
  "I rewrote my own outbound cadences daily for years until they worked. That habit is the service.",
  "Fifteen years carrying quota in B2B SaaS. Germany, the UK, Spain, Ireland.",
  "Author of Structured Prospecting. Amazon #1, Telemarketing, Ireland 2026.",
];

const credentials = [
  "15 years selling across EMEA",
  "Native German speaker",
  "Amazon #1 · Telemarketing 2026",
  "WRC licence EA 5660",
];

export function Hero() {
  return (
    <section id="top" className="grain relative overflow-hidden border-b border-[color:var(--color-line)]">
      {/* A single hairline column grid, drawn in CSS. It gives the paper a
          measure and costs nothing to ship. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden opacity-[0.5] lg:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, transparent 0, transparent calc(50% - 1px), var(--color-line-soft) calc(50% - 1px), var(--color-line-soft) 50%, transparent 50%)",
        }}
      />

      <Container className="relative">
        <div className="grid gap-14 pt-16 pb-16 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-24 lg:pb-24">
          {/* ── Left: the promise */}
          <div className="max-w-[36rem]">
            <Label>GTM growth partner · DACH &amp; EMEA</Label>

            <h1 className="h-display mt-6 text-[clamp(2.5rem,6vw,4.25rem)] text-balance">
              The multilingual sales talent to win in Europe.{" "}
              <span className="accent">And the playbook to make them land.</span>
            </h1>

            <p className="mt-7 max-w-[34rem] text-[1.0625rem] leading-[1.7] text-pretty text-[color:var(--color-body)]">
              I help startups and scale-ups hire sales people who actually sell in
              DACH and the wider EMEA. My own background runs across SaaS, fintech,
              outsourcing and gaming, so I screen for these markets the way someone
              who sold in them would, not from a job spec. Once the people are in
              place, I build the playbook that makes them productive.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={site.booking.strategy} variant="ink" size="lg">
                Book a strategy call
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#playbook" variant="outline" size="lg" external={false}>
                See a sample playbook
              </Button>
            </div>

            <p className="mt-4 font-[family-name:var(--font-mono)] text-[0.75rem] tracking-[0.04em] text-[color:var(--color-mute)]">
              30 minutes · founder to founder · no deck
            </p>
          </div>

          {/* ── Right: the reason to believe it */}
          <div className="relative">
            <div className="relative bg-[color:var(--color-ink-900)] p-8 shadow-[var(--shadow-lift)] sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                  background:
                    "radial-gradient(120% 80% at 85% 0%, rgba(201,162,39,0.16), transparent 60%)",
                }}
              />
              <div className="relative">
                <Label tone="light">Why Structured Talent</Label>

                <p className="h-section mt-5 text-[clamp(1.4rem,2.4vw,1.75rem)] text-[color:var(--color-paper-50)] text-balance">
                  A DACH market I sold into for fifteen years, not one I researched.
                </p>

                <ul className="mt-8 space-y-5">
                  {proof.map((p) => (
                    <li key={p} className="flex gap-4">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-[color:var(--color-gold-400)]" />
                      <span className="text-[0.9375rem] leading-[1.6] text-[color:var(--color-sand-200)]">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-center gap-4 border-t border-[color:var(--color-line-dark)] pt-6">
                  <Image
                    src="/harm-avatar.webp"
                    alt="Harm Linnecke, founder of Structured Talent"
                    width={48}
                    height={48}
                    priority
                    className="h-12 w-12 object-cover grayscale-[0.15]"
                  />
                  <div>
                    <p className="text-[0.9375rem] font-medium text-[color:var(--color-paper-50)]">
                      Harm Linnecke
                    </p>
                    <p className="font-[family-name:var(--font-mono)] text-[0.6875rem] tracking-[0.08em] text-[color:var(--color-sand-400)]">
                      Founder · Dublin · 15 years quota-carrying
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Credential strip */}
      <div className="border-t border-[color:var(--color-line)] bg-[color:var(--color-paper-100)]/60">
        <Container>
          <ul className="grid divide-y divide-[color:var(--color-line)] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {credentials.map((c) => (
              <li
                key={c}
                className="py-4 font-[family-name:var(--font-mono)] text-[0.6875rem] tracking-[0.12em] text-[color:var(--color-ink-700)] uppercase lg:px-6 lg:first:pl-0 lg:last:pr-0"
              >
                {c}
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
