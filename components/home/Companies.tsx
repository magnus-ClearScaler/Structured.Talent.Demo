import { Chapter, Container, Action } from "@/components/ui";
import { site } from "@/lib/site";

/* Three services as numbered entries in a running list. The three-card row with
   a highlighted middle option is a pricing table borrowed from software, and it
   was telling a buyer this was a product rather than a person. */
const services = [
  {
    n: "01",
    title: "Sales hiring, in-market",
    body: "Native-fluency BDRs, SDRs and AEs across the US, UK, Ireland, Spain and Germany, screened the way a sales leader would screen them, so the shortlist starts stronger.",
    cta: "Talk about a role",
    href: site.booking.hiring,
  },
  {
    n: "02",
    title: "A custom sales playbook",
    body: "Sequences and cadences written for the market in its own language. Not translated from a US template, written for how that buyer actually reads.",
    cta: "Explore the playbook",
    href: site.pages.playbookHub,
  },
  {
    n: "03",
    title: "Fractional recruiter, DACH & EMEA",
    body: "An embedded recruiter one to two days a week, owning sourcing, screening and pipeline as part of your team. Three-month minimum, then rolling.",
    cta: "Discuss fractional",
    href: site.booking.fractional,
  },
];

const mistakes = [
  "A generalist recruiter sends CVs that read well and calls that stall in the first two minutes, in a language nobody on your side can assess.",
  "A US cadence run through a translator reads as pushy to a German buyer. Sie, not Du. Proof, not promises, and the hype turned right down.",
  "A full-time recruiter or an agency retainer, signed long before your hiring volume justifies either one.",
];

const models = [
  { t: "Contingency", d: "One role, or to test the fit. You pay only on a successful placement." },
  { t: "Exclusive", d: "For niche language roles. Give me the search and I go deeper than a shared one justifies." },
  { t: "Retained", d: "For building a team rather than filling a seat. Dedicated priority, ongoing." },
];

export function Companies() {
  return (
    <section id="companies" className="bg-[color:var(--color-ink-900)]">
      <Container className="py-20 sm:py-28">
        <Chapter
          numeral="II"
          running="Chapter two · For companies"
          tone="light"
          title={
            <>
              Most teams don&rsquo;t lose Europe on product.{" "}
              <span className="accent text-[color:var(--color-gold-300)]">
                They lose it on who they hire and how they sell.
              </span>
            </>
          }
          standfirst="I work on both. The people first, then the message they carry. And I sold in these markets myself, so I am not guessing at either."
        />

        {/* The three ways it goes wrong, set as marginalia */}
        <ul className="mt-16 grid gap-x-14 gap-y-0 sm:grid-cols-3">
          {mistakes.map((m, i) => (
            <li key={m} className="rule-t-dark py-6">
              <span className="numeral tnum block text-[0.9375rem] text-[color:var(--color-gold-400)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-[1rem] leading-[1.7] text-[color:var(--color-sand-300)]">
                {m}
              </p>
            </li>
          ))}
        </ul>

        {/* Three services, as a running list */}
        <div className="mt-24">
          <p className="folio text-[color:var(--color-sand-400)]">
            Three ways to work together
          </p>

          <ol className="mt-5">
            {services.map((s) => (
              <li
                key={s.n}
                className="rule-t-dark grid gap-x-12 gap-y-4 py-10 sm:grid-cols-[4rem_1fr] lg:grid-cols-[4rem_20rem_1fr]"
              >
                <span className="numeral tnum text-[1.5rem] text-[color:var(--color-gold-400)]">
                  {s.n}
                </span>
                <h3 className="title text-[clamp(1.5rem,2.6vw,1.875rem)] text-[color:var(--color-paper-50)]">
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
                    className="mt-5 inline-block border-b border-[color:var(--color-gold-400)]/70 pb-1 text-[1rem] text-[color:var(--color-gold-300)] transition-colors hover:border-[color:var(--color-paper-50)] hover:text-[color:var(--color-paper-50)]"
                  >
                    {s.cta} →
                  </a>
                </div>
              </li>
            ))}
          </ol>
          <div className="rule-t-dark" />
        </div>

        {/* How engagements are structured */}
        <div className="mt-20 grid gap-x-14 gap-y-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h3 className="title mark max-w-[16ch] text-[clamp(1.5rem,2.6vw,2rem)] text-[color:var(--color-paper-50)]">
              Start light. Grow it as it earns itself.
            </h3>
          </div>
          <dl className="grid gap-x-12 sm:grid-cols-3">
            {models.map((m) => (
              <div key={m.t} className="rule-t-dark py-6">
                <dt className="title text-[1.125rem] text-[color:var(--color-paper-50)]">
                  {m.t}
                </dt>
                <dd className="mt-2 text-[0.9375rem] leading-[1.65] text-[color:var(--color-sand-400)]">
                  {m.d}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-14 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <Action href={site.booking.hiring} tone="paper">
            Book a hiring call
          </Action>
          <p className="text-[0.9375rem] text-[color:var(--color-sand-400)]">
            Thirty minutes, no obligation. Fees depend on the role and are set out
            in writing before anything starts.
          </p>
        </div>
      </Container>
    </section>
  );
}
