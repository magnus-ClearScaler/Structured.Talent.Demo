import { Container, SectionHead } from "@/components/ui";
import { ArrowRight, Check } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

const services = [
  {
    kicker: "Multilingual recruiting",
    title: "Sales Hiring, In-Market",
    body:
      "Native-fluency sales hires for scaling startups across the US, UK, Ireland, Spain and Germany. BDRs, SDRs, AEs. Screened the way a sales leader would screen them, so your shortlist starts stronger.",
    points: [
      "Matched to the market, not just the CV",
      "Contingency, exclusive or retained",
      "From a first hire to a full team",
    ],
    cta: "Talk about a role",
    href: site.booking.hiring,
    featured: false,
  },
  {
    kicker: "Sales playbook",
    title: "Custom Sales Playbook",
    body:
      "A playbook built around your product, with sequences and cadences written for the market in its own language. Not translated from a US template. Written for how the buyer there actually reads.",
    points: [
      "Fourteen sections, written from scratch",
      "Market-native sequences and cadences",
      "Battlecards and culture pages per market",
    ],
    cta: "Explore the playbook",
    href: site.pages.playbookHub,
    featured: true,
  },
  {
    kicker: "Fractional recruiting",
    title: "Fractional Recruiter, DACH & EMEA",
    body:
      "An embedded recruiter for your sales team without the full-time headcount. I own the sourcing, screening and pipeline for your DACH and EMEA hires, working as part of your team on a rolling basis.",
    points: [
      "One to two days a week",
      "Three-month minimum, then rolling",
      "A sales-native recruiter in the seat",
    ],
    cta: "Discuss fractional",
    href: site.booking.fractional,
    featured: false,
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="grain border-b border-[color:var(--color-line)] bg-[color:var(--color-paper-100)]/50 py-20 sm:py-28"
    >
      <Container>
        <SectionHead
          label="Three ways to work together"
          title={
            <>
              Staffed, equipped, or <span className="accent">both.</span>
            </>
          }
          intro="Most clients start light and grow the relationship as it earns itself. Each route has its own calendar, so you book the conversation you actually want."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90} className="h-full">
              <article
                className={`flex h-full flex-col p-8 transition-shadow duration-300 sm:p-9 ${
                  s.featured
                    ? "bg-[color:var(--color-ink-900)] shadow-[var(--shadow-lift)]"
                    : "border border-[color:var(--color-line)] bg-[color:var(--color-paper-50)] hover:shadow-[var(--shadow-card)]"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <p className={s.featured ? "label-light" : "label"}>{s.kicker}</p>
                  {s.featured ? (
                    <span className="shrink-0 border border-[color:var(--color-gold-400)]/45 px-2.5 py-1 font-[family-name:var(--font-mono)] text-[0.625rem] tracking-[0.14em] text-[color:var(--color-gold-300)] uppercase">
                      Most popular
                    </span>
                  ) : null}
                </div>

                <h3
                  className={`h-section mt-5 text-[1.5rem] ${
                    s.featured ? "text-[color:var(--color-paper-50)]" : ""
                  }`}
                >
                  {s.title}
                </h3>

                <p
                  className={`mt-4 text-[0.9375rem] leading-[1.7] text-pretty ${
                    s.featured
                      ? "text-[color:var(--color-sand-200)]"
                      : "text-[color:var(--color-body)]"
                  }`}
                >
                  {s.body}
                </p>

                <ul className="mt-7 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          s.featured
                            ? "text-[color:var(--color-gold-400)]"
                            : "text-[color:var(--color-gold-600)]"
                        }`}
                      />
                      <span
                        className={`text-[0.875rem] leading-[1.5] ${
                          s.featured
                            ? "text-[color:var(--color-sand-300)]"
                            : "text-[color:var(--color-mute)]"
                        }`}
                      >
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={`group mt-9 inline-flex items-center gap-2 border-t pt-6 text-[0.9375rem] font-medium transition-colors ${
                    s.featured
                      ? "border-[color:var(--color-line-dark)] text-[color:var(--color-gold-300)] hover:text-[color:var(--color-gold-200)]"
                      : "border-[color:var(--color-line)] text-[color:var(--color-ink-900)] hover:text-[color:var(--color-gold-700)]"
                  }`}
                >
                  {s.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-[0.875rem] leading-[1.7] text-[color:var(--color-mute)]">
          Fees depend on the role and the structure. I walk you through them on the
          first call, and everything is set out in the Terms of Business before
          anything starts. No surprises.
        </p>
      </Container>
    </section>
  );
}
