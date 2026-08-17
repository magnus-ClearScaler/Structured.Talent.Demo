import { SectionHead, Container, Button, TextLink, Figure } from "@/components/ui";
import { site } from "@/lib/site";

const services = [
  {
    n: "01",
    title: "Sales hiring, in-market",
    body: "Native-fluency BDRs, SDRs and AEs across the US, UK, Ireland, Spain and Germany, screened the way a sales leader would screen them.",
    points: [
      "Matched to the market, not just the CV",
      "Contingency, exclusive or retained",
      "From a first hire to a full team",
    ],
    cta: "Talk about a role",
    href: site.booking.hiring,
  },
  {
    n: "02",
    title: "A custom sales playbook",
    body: "Sequences and cadences written for the market in its own language, rather than translated from a US template.",
    points: [
      "Fourteen sections, written from scratch",
      "Market-native sequences and cadences",
      "Battlecards and culture pages per market",
    ],
    cta: "Explore the playbook",
    href: site.pages.playbookHub,
  },
  {
    n: "03",
    title: "Fractional recruiter",
    body: "An embedded recruiter one to two days a week, owning sourcing, screening and pipeline as part of your team.",
    points: [
      "One to two days a week",
      "Three-month minimum, then rolling",
      "A sales-native recruiter in the seat",
    ],
    cta: "Discuss fractional",
    href: site.booking.fractional,
  },
];

const mistakes = [
  {
    t: "The generalist shortlist",
    d: "A recruiter with no sales background screens on keywords. What arrives is CVs that read well and calls that stall in the first two minutes, in a language nobody on your side can assess.",
  },
  {
    t: "The translated sequence",
    d: "A US cadence run through a translator reads as pushy to a German buyer. The words are right and the register is wrong. Sie, not Du. Proof rather than promises.",
  },
  {
    t: "The early retainer",
    d: "A full-time recruiter or an agency retainer, signed long before your hiring volume justifies either one.",
  },
];

const models = [
  { t: "Contingency", d: "One role, or to test the fit. You pay only on a successful placement." },
  { t: "Exclusive", d: "For niche language roles. Give me the search and I go deeper than a shared one justifies." },
  { t: "Retained", d: "For building a team rather than filling a seat. Dedicated priority, ongoing." },
];

export function Companies() {
  return (
    <section id="companies" className="bg-[color:var(--color-ink-900)] py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-16">
          <SectionHead
            eyebrow="For companies"
            tone="dark"
            title="Most teams don't lose Europe on product. They lose it on who they hire and how they sell."
            lead="I work on both. The people first, then the message they carry. And I sold in these markets myself, so I am not guessing at either."
          />
          {/* Where their next European team will actually sit */}
          <Figure src="/img-glass.webp" ratio="aspect-[5/4]" />
        </div>

        <div className="mt-20 grid gap-x-12 gap-y-8 border-t border-[color:var(--color-line-dark)] pt-10 sm:grid-cols-3">
          {mistakes.map((m) => (
            <div key={m.t}>
              <h3 className="h3 on-dark text-[1.0625rem]">{m.t}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-[1.65] text-[color:var(--color-onink-mute)]">
                {m.d}
              </p>
            </div>
          ))}
        </div>

        {/* Three services */}
        <div className="mt-20">
          <p className="eyebrow-dark">Three ways to work together</p>
          <div className="mt-8 grid gap-px bg-[color:var(--color-line-dark)] lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.n}
                className="flex flex-col bg-[color:var(--color-ink-900)] p-8 transition-colors duration-300 hover:bg-[color:var(--color-ink-800)] sm:p-9"
              >
                <span className="tnum text-[0.875rem] font-medium text-[color:var(--color-brass-400)]">
                  {s.n}
                </span>
                <h3 className="h3 on-dark mt-4 text-[1.375rem]">{s.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-[1.7] text-[color:var(--color-onink-body)]">
                  {s.body}
                </p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {s.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex gap-3 text-[0.875rem] text-[color:var(--color-onink-mute)]"
                    >
                      <span aria-hidden="true" className="text-[color:var(--color-brass-400)]">
                        —
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <TextLink href={s.href} tone="dark">
                    {s.cta}
                  </TextLink>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Engagement models */}
        <div className="mt-16 grid gap-x-14 gap-y-8 border-t border-[color:var(--color-line-dark)] pt-10 lg:grid-cols-[0.75fr_1.25fr]">
          <h3 className="h3 on-dark max-w-[18ch] text-[1.375rem]">
            Most clients start with one role and grow it from there
          </h3>
          <dl className="grid gap-8 sm:grid-cols-3">
            {models.map((m) => (
              <div key={m.t}>
                <dt className="text-[0.9375rem] font-medium text-white">{m.t}</dt>
                <dd className="mt-2 text-[0.875rem] leading-[1.6] text-[color:var(--color-onink-mute)]">
                  {m.d}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-12 flex flex-col items-start gap-x-8 gap-y-5 sm:flex-row sm:items-center">
          <Button href={site.booking.hiring} tone="invert">
            Book a hiring call
          </Button>
          <Button href={site.booking.dach} tone="outline-dark">
            Or a DACH strategy session
          </Button>
          <p className="text-[0.875rem] text-[color:var(--color-onink-mute)]">
            Thirty minutes either way. Fees are set out in writing before anything
            starts.
          </p>
        </div>
      </Container>
    </section>
  );
}
