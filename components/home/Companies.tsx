import { SectionHead, Container, Action } from "@/components/ui";
import { site } from "@/lib/site";

const services = [
  {
    n: "1",
    title: "Sales hiring, in-market",
    body: "Native-fluency BDRs, SDRs and AEs across the US, UK, Ireland, Spain and Germany, screened the way a sales leader would screen them.",
    cta: "Talk about a role",
    href: site.booking.hiring,
  },
  {
    n: "2",
    title: "A custom sales playbook",
    body: "Sequences and cadences written for the market in its own language, rather than translated from a US template.",
    cta: "Explore the playbook",
    href: site.pages.playbookHub,
  },
  {
    n: "3",
    title: "Fractional recruiter, DACH and EMEA",
    body: "An embedded recruiter one to two days a week, owning sourcing, screening and pipeline as part of your team. Three-month minimum, then rolling.",
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
    <section id="companies" className="bg-[color:var(--color-ink-900)]">
      <Container className="py-16 sm:py-20">
        <SectionHead
          label="For companies"
          tone="light"
          title="Most teams don't lose Europe on product. They lose it on who they hire and how they sell."
          standfirst="I work on both. The people first, then the message they carry. And I sold in these markets myself, so I am not guessing at either."
        />

        {/* Where it usually goes wrong */}
        <div className="mt-16 grid gap-x-14 sm:grid-cols-3">
          {mistakes.map((m) => (
            <div key={m.t} className="rule-t-dark py-6">
              <h3 className="title text-[1.125rem] text-[color:var(--color-paper-50)]">
                {m.t}
              </h3>
              <p className="mt-2.5 text-[1rem] leading-[1.7] text-[color:var(--color-sand-300)]">
                {m.d}
              </p>
            </div>
          ))}
        </div>

        {/* Three services */}
        <div className="mt-20">
          <p className="label-light rule-b-dark pb-3">Three ways to work together</p>

          <ol>
            {services.map((s) => (
              <li
                key={s.n}
                className="rule-b-dark grid gap-x-10 gap-y-4 py-9 sm:grid-cols-[2rem_1fr] lg:grid-cols-[2rem_19rem_1fr]"
              >
                <span className="tnum text-[1.125rem] text-[color:var(--color-gold-400)]">
                  {s.n}
                </span>
                <h3 className="title text-[clamp(1.375rem,2.4vw,1.75rem)] text-[color:var(--color-paper-50)]">
                  {s.title}
                </h3>
                <div>
                  <p className="max-w-[56ch] text-[1.0625rem] leading-[1.75] text-pretty text-[color:var(--color-sand-300)]">
                    {s.body}
                  </p>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-4 inline-block border-b border-[color:var(--color-gold-400)]/70 pb-1 text-[1rem] text-[color:var(--color-paper-50)] transition-colors hover:border-[color:var(--color-paper-50)]"
                  >
                    {s.cta}
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* How engagements are structured */}
        <div className="mt-16 grid gap-x-14 gap-y-8 lg:grid-cols-[0.75fr_1.25fr]">
          <h3 className="title max-w-[18ch] text-[clamp(1.375rem,2.4vw,1.75rem)] text-[color:var(--color-paper-50)]">
            Most clients start with one role and grow it from there
          </h3>
          <dl className="grid gap-x-12 sm:grid-cols-3">
            {models.map((m) => (
              <div key={m.t} className="rule-t-dark py-5">
                <dt className="title text-[1.0625rem] text-[color:var(--color-paper-50)]">
                  {m.t}
                </dt>
                <dd className="label-light mt-2">{m.d}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Two intents, two calendars. Keeping them apart is unusual and right. */}
        <div className="mt-12 flex flex-col items-start gap-x-10 gap-y-6 sm:flex-row sm:items-center">
          <Action href={site.booking.hiring} tone="paper">
            Book a hiring call
          </Action>
          <Action href={site.booking.dach} tone="quiet-light">
            Or a DACH strategy session
          </Action>
        </div>
        <p className="label-light mt-5 max-w-[62ch]">
          Thirty minutes either way, no obligation. Fees depend on the role and
          are set out in writing before anything starts.
        </p>
      </Container>
    </section>
  );
}
