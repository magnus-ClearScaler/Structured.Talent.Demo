import { Chapter, Container, Action } from "@/components/ui";
import { site } from "@/lib/site";

/* Country level rather than city level, because that is what he actually
   recruits into. Set as a gazetteer: name, hub, one line, a rule. No cards. */
const markets = [
  { place: "Ireland", hub: "Dublin", note: "EMEA hubs for US SaaS, hiring in most European languages." },
  { place: "United Kingdom", hub: "London", note: "Fast markets, full-cycle roles, the pace to learn in." },
  { place: "Spain", hub: "Barcelona · Madrid", note: "Multilingual sales floors selling across the continent." },
  { place: "Germany", hub: "Berlin · Munich", note: "Where speaking it natively decides the deal." },
  { place: "Austria & Switzerland", hub: "Vienna · Zurich", note: "DACH proper, where directness and proof win." },
  { place: "United States", hub: "EMEA-facing", note: "US companies opening Europe, hiring for it locally." },
];

const promises = [
  {
    label: "The assessment",
    t: "You are read by a seller, not a keyword filter",
    d: "Fifteen years of carrying quota means I can tell from one call whether you can open in German and hold a discovery. That is the assessment. Not how your CV is formatted.",
  },
  {
    label: "The process",
    t: "Honest briefs, and real feedback either way",
    d: "You get the actual role, the actual number, the actual manager. If it is a no, you hear why within a day. Nobody goes quiet on you here.",
  },
  {
    label: "The roles",
    t: "Seats where your language is the job",
    d: "BDR, SDR and AE roles where native fluency is the reason you were hired, not a nice-to-have buried at the bottom of the spec.",
  },
];

const steps = [
  { n: "01", t: "Send your CV", d: "One file, two minutes. No account, no portal, no form asking for your life story." },
  { n: "02", t: "Talk to a seller", d: "Twenty minutes on what you actually close, which market suits you, and what you want next." },
  { n: "03", t: "Meet the hiring team", d: "I introduce you directly and prepare you properly, including how that buyer expects to be sold to." },
  { n: "04", t: "You land", d: "Offer, contract, start date. I stay reachable through your first weeks in the seat." },
];

export function Candidates() {
  return (
    <section id="candidates" className="rule-b">
      <Container className="pt-20 pb-16 sm:pt-28 sm:pb-20">
        <Chapter
          numeral="I"
          running="Chapter one · For candidates"
          title={
            <>
              Sell in your own language.{" "}
              <span className="accent">Land where you&rsquo;ll actually perform.</span>
            </>
          }
          standfirst="Multilingual BDR, SDR and AE roles with startups and scaling IT companies across Europe and the US. Free for you, always: the company pays the fee, never the candidate."
        />

        {/* The gazetteer */}
        <div className="mt-20 grid gap-x-16 gap-y-0 sm:grid-cols-2">
          <p className="folio col-span-full mb-4 text-[color:var(--color-mute)]">
            Where the roles sit
          </p>
          {markets.map((m) => (
            <div key={m.place} className="rule-t py-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="title text-[1.625rem]">{m.place}</h3>
                <span className="meta">{m.hub}</span>
              </div>
              <p className="mt-2 max-w-[44ch] text-[0.9375rem] leading-[1.6] text-[color:var(--color-mute)]">
                {m.note}
              </p>
            </div>
          ))}
          <div className="rule-t col-span-full" />
        </div>

        {/* What you get, as running entries with hanging labels */}
        <div className="mt-24 grid gap-x-16 gap-y-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h3 className="title mark max-w-[16ch] text-[clamp(1.6rem,3vw,2.25rem)]">
              A recruiter who has sat in the seat you&rsquo;re applying for
            </h3>
            <p className="mt-7 max-w-[38ch] text-[1.0625rem] leading-[1.75] text-[color:var(--color-body)]">
              The best sales teams I have worked in pulled from every language
              and background they could find. I hire the same way.
            </p>
          </div>

          <dl>
            {promises.map((p) => (
              <div
                key={p.t}
                className="rule-t grid gap-x-10 gap-y-2 py-7 sm:grid-cols-[9rem_1fr]"
              >
                <dt className="smallcaps">{p.label}</dt>
                <dd>
                  <p className="title text-[1.25rem]">{p.t}</p>
                  <p className="mt-2.5 max-w-[54ch] text-[1rem] leading-[1.7] text-pretty text-[color:var(--color-body)]">
                    {p.d}
                  </p>
                </dd>
              </div>
            ))}
            <div className="rule-t" />
          </dl>
        </div>
      </Container>

      {/* The four steps, on ink, as a single ruled sequence */}
      <div className="bg-[color:var(--color-ink-900)]">
        <Container className="py-16 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6 rule-b-dark pb-5">
            <h3 className="title text-[clamp(1.5rem,3vw,2.125rem)] text-[color:var(--color-paper-50)]">
              Four steps, and a person at every one.
            </h3>
            <span className="folio text-[color:var(--color-sand-400)]">
              From CV to first day
            </span>
          </div>

          <ol className="mt-4">
            {steps.map((s) => (
              <li
                key={s.n}
                className="rule-b-dark grid items-baseline gap-x-10 gap-y-2 py-7 sm:grid-cols-[4rem_16rem_1fr]"
              >
                <span className="numeral tnum text-[1.5rem] text-[color:var(--color-gold-400)]">
                  {s.n}
                </span>
                <span className="title text-[1.375rem] text-[color:var(--color-paper-50)]">
                  {s.t}
                </span>
                <span className="max-w-[52ch] text-[1rem] leading-[1.7] text-[color:var(--color-sand-300)]">
                  {s.d}
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-[46ch] text-[1.0625rem] leading-[1.75] text-[color:var(--color-sand-200)]">
              Send your CV and you will hear back from a person within a business
              day. Know a great seller instead? Refer them, and there is €500 in
              it for you once they are placed and through the guarantee period.
            </p>
            <div className="flex shrink-0 flex-col gap-5 sm:flex-row sm:items-center">
              <Action href={site.pages.candidates} tone="paper">
                Send your CV
              </Action>
              <Action href={site.pages.candidates} tone="quiet-light">
                Refer someone · €500
              </Action>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
