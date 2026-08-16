import { SectionHead, Container, Action } from "@/components/ui";
import { site } from "@/lib/site";

/* Country level rather than city level, because that is what he actually
   recruits into. The cities are named as the hubs they are. */
const markets = [
  { place: "Ireland", hub: "Dublin", note: "EMEA hubs for US software companies, hiring in most European languages." },
  { place: "United Kingdom", hub: "London", note: "Fast markets and full-cycle roles." },
  { place: "Spain", hub: "Barcelona and Madrid", note: "Multilingual sales floors selling across the continent." },
  { place: "Germany", hub: "Berlin and Munich", note: "Where speaking the language natively decides the deal." },
  { place: "Austria and Switzerland", hub: "Vienna and Zurich", note: "DACH proper, where buyers want directness and proof." },
  { place: "United States", hub: "EMEA-facing roles", note: "US companies opening Europe and hiring for it locally." },
];

const promises = [
  {
    label: "The assessment",
    t: "You are read by someone who has sold",
    d: "Fifteen years of carrying quota means I can tell from one call whether you can open in German and hold a discovery. That is what I assess, rather than how the CV is formatted.",
  },
  {
    label: "The process",
    t: "Honest briefs, and feedback either way",
    d: "You get the actual role, the actual number and the actual manager. If it is a no, you hear why within a day.",
  },
  {
    label: "The roles",
    t: "Seats where your language is the job",
    d: "BDR, SDR and AE roles where native fluency is the reason you were hired, not a line at the bottom of the spec.",
  },
];

const steps = [
  { n: "1", t: "Send your CV", d: "One file. No account, no portal, no form asking for your life story." },
  { n: "2", t: "A call with me", d: "Twenty minutes on what you actually close, which market suits you, and what you want next." },
  { n: "3", t: "Meet the hiring team", d: "I introduce you directly and prepare you properly, including how that buyer expects to be sold to." },
  { n: "4", t: "You start", d: "Offer, contract, start date. I stay reachable through your first weeks in the seat." },
];

export function Candidates() {
  return (
    <section id="candidates" className="rule-b">
      <Container className="pt-16 pb-16 sm:pt-20 sm:pb-20">
        <SectionHead
          label="For candidates"
          title="Sell in your own language. Land where you will perform."
          standfirst="I place multilingual BDRs, SDRs and AEs with startups and scaling software companies across Europe and the US. It is free for you: the company pays the fee, never the candidate."
        />

        {/* Where the roles are */}
        <div className="mt-16">
          <p className="label rule-b pb-3">Where the roles sit</p>
          <div className="grid gap-x-16 sm:grid-cols-2">
            {markets.map((m) => (
              <div key={m.place} className="rule-b py-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="title text-[1.4375rem]">{m.place}</h3>
                  <span className="label">{m.hub}</span>
                </div>
                <p className="label mt-2 max-w-[44ch]">{m.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What you get */}
        <div className="mt-20 grid gap-x-16 gap-y-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h3 className="title max-w-[18ch] text-[clamp(1.5rem,2.8vw,2.125rem)]">
              I have sat in the seat you are applying for
            </h3>
            <p className="mt-6 max-w-[38ch] text-[1.0625rem] leading-[1.75] text-[color:var(--color-body)]">
              The best sales teams I worked in pulled from every language and
              background they could find. I hire the same way.
            </p>
          </div>

          <dl>
            {promises.map((p) => (
              <div
                key={p.t}
                className="rule-t grid gap-x-10 gap-y-2 py-7 sm:grid-cols-[9rem_1fr]"
              >
                <dt className="label">{p.label}</dt>
                <dd>
                  <p className="title text-[1.1875rem]">{p.t}</p>
                  <p className="mt-2.5 max-w-[56ch] text-[1rem] leading-[1.7] text-pretty text-[color:var(--color-body)]">
                    {p.d}
                  </p>
                </dd>
              </div>
            ))}
            <div className="rule-t" />
          </dl>
        </div>
      </Container>

      {/* The four steps, on ink */}
      <div className="bg-[color:var(--color-ink-900)]">
        <Container className="py-16 sm:py-20">
          <h3 className="title rule-b-dark pb-5 text-[clamp(1.5rem,3vw,2rem)] text-[color:var(--color-paper-50)]">
            How it works
          </h3>

          <ol className="mt-2">
            {steps.map((s) => (
              <li
                key={s.n}
                className="rule-b-dark grid items-baseline gap-x-10 gap-y-2 py-6 sm:grid-cols-[2rem_15rem_1fr]"
              >
                <span className="tnum text-[1.125rem] text-[color:var(--color-gold-400)]">
                  {s.n}
                </span>
                <span className="title text-[1.3125rem] text-[color:var(--color-paper-50)]">
                  {s.t}
                </span>
                <span className="max-w-[54ch] text-[1rem] leading-[1.7] text-[color:var(--color-sand-300)]">
                  {s.d}
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-[50ch] text-[1.0625rem] leading-[1.75] text-[color:var(--color-sand-200)]">
              Send your CV and you will hear back from me within a business day.
              If you would rather refer someone, there is €500 in it for you once
              they are placed and through the guarantee period.
            </p>
            <div className="flex shrink-0 flex-col gap-5 sm:flex-row sm:items-center">
              <Action href={site.pages.candidates} tone="paper">
                Send your CV
              </Action>
              <Action href={site.pages.candidates} tone="quiet-light">
                Refer someone
              </Action>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
