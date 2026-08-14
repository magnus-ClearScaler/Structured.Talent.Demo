import { Container, Label } from "@/components/ui";
import { ArrowRight, Check } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

const services = [
  {
    kicker: "Multilingual recruiting",
    title: "Sales Hiring, In-Market",
    body: "Native-fluency BDRs, SDRs and AEs across the US, UK, Ireland, Spain and Germany, screened the way a sales leader would screen them.",
    cta: "Talk about a role",
    href: site.booking.hiring,
    featured: false,
  },
  {
    kicker: "Sales playbook",
    title: "Custom Sales Playbook",
    body: "Sequences and cadences written for the market in its own language. Not translated from a US template, written for how that buyer reads.",
    cta: "Explore the playbook",
    href: site.pages.playbookHub,
    featured: true,
  },
  {
    kicker: "Fractional recruiting",
    title: "Fractional Recruiter",
    body: "An embedded recruiter one to two days a week, owning sourcing, screening and pipeline for your DACH and EMEA hires. Three-month minimum.",
    cta: "Discuss fractional",
    href: site.booking.fractional,
    featured: false,
  },
];

const models = [
  { t: "Contingency", d: "One role, or to test the fit. You pay only on a successful placement." },
  { t: "Exclusive", d: "For niche language roles. Give me the search and I go deeper than a shared one justifies." },
  { t: "Retained", d: "For building a team rather than filling a seat. Dedicated priority, ongoing." },
];

const mistakes = [
  "A generalist recruiter sends CVs that read well and calls that stall in the first two minutes, in a language nobody on your side can assess.",
  "A US cadence run through a translator reads as pushy to a German buyer. Sie, not Du. Proof, not promises, and the hype turned right down.",
  "A full-time recruiter or an agency retainer, signed before your hiring volume justifies either one.",
];

export function Companies() {
  return (
    <section id="companies" className="relative overflow-hidden bg-[color:var(--color-ink-900)] py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(85% 55% at 20% 0%, rgba(201,162,39,0.14), transparent 62%)",
        }}
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Label tone="light">For companies</Label>
            <h2 className="h-section mt-5 text-[clamp(2rem,4.4vw,3.25rem)] text-[color:var(--color-paper-50)] text-balance">
              Most teams don&rsquo;t lose Europe on product.{" "}
              <span className="accent text-[color:var(--color-gold-300)]">
                They lose it on who they hire and how they sell.
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.7] text-pretty text-[color:var(--color-sand-200)]">
              I work on both. The people first, then the message they carry. And
              I sold in these markets myself, so I am not guessing at either.
            </p>
          </div>

          <ul className="space-y-4 lg:pt-4">
            {mistakes.map((m) => (
              <li key={m} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-px w-6 shrink-0 bg-[color:var(--color-gold-400)]/60"
                />
                <span className="text-[0.9375rem] leading-[1.65] text-[color:var(--color-sand-300)]">
                  {m}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Three routes, three calendars */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80} className="h-full">
              <article
                className={`flex h-full flex-col p-8 transition-colors duration-300 ${
                  s.featured
                    ? "bg-[color:var(--color-gold-400)]"
                    : "border border-[color:var(--color-line-dark)] bg-[color:var(--color-ink-950)]/60 hover:border-[color:var(--color-gold-400)]/50"
                }`}
              >
                <p
                  className={
                    s.featured
                      ? "font-[family-name:var(--font-mono)] text-[0.6875rem] font-medium tracking-[0.18em] text-[color:var(--color-ink-900)]/75 uppercase"
                      : "label-light"
                  }
                >
                  {s.kicker}
                </p>
                <h3
                  className={`h-section mt-4 text-[1.375rem] ${
                    s.featured ? "text-[color:var(--color-ink-950)]" : "text-[color:var(--color-paper-50)]"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`mt-3 flex-1 text-[0.9375rem] leading-[1.65] text-pretty ${
                    s.featured
                      ? "text-[color:var(--color-ink-900)]/85"
                      : "text-[color:var(--color-sand-300)]"
                  }`}
                >
                  {s.body}
                </p>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={`group mt-8 inline-flex items-center gap-2 border-t pt-5 text-[0.9375rem] font-medium ${
                    s.featured
                      ? "border-[color:var(--color-ink-950)]/20 text-[color:var(--color-ink-950)]"
                      : "border-[color:var(--color-line-dark)] text-[color:var(--color-gold-300)]"
                  }`}
                >
                  {s.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        {/* How engagements are structured */}
        <div className="mt-14 border-t border-[color:var(--color-line-dark)] pt-10">
          <p className="label-light">Start light, grow as it earns itself</p>
          <ul className="mt-7 grid gap-8 sm:grid-cols-3">
            {models.map((m) => (
              <li key={m.t} className="flex gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-gold-400)]" />
                <span>
                  <span className="block text-[0.9375rem] font-medium text-[color:var(--color-paper-50)]">
                    {m.t}
                  </span>
                  <span className="mt-1 block text-[0.875rem] leading-[1.6] text-[color:var(--color-sand-400)]">
                    {m.d}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={site.booking.hiring}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center justify-center gap-2.5 bg-[color:var(--color-paper-50)] px-7 py-4 text-[0.9375rem] font-medium text-[color:var(--color-ink-950)] transition-colors hover:bg-white"
            >
              Book a hiring call
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <span className="font-[family-name:var(--font-mono)] text-[0.75rem] tracking-[0.08em] text-[color:var(--color-sand-400)]">
              30 minutes · no obligation · fees set out before anything starts
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
