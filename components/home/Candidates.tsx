import { Container, SectionHead, Label } from "@/components/ui";
import { ArrowRight, Check } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

/* Country level rather than city level, because that is what he actually
   recruits into. The cities are named underneath as the hubs they are. */
const markets = [
  { place: "Ireland", hub: "Dublin", note: "EMEA hubs for US SaaS, hiring in most European languages." },
  { place: "United Kingdom", hub: "London", note: "Fast markets, full-cycle roles, the pace to learn in." },
  { place: "Spain", hub: "Barcelona · Madrid", note: "Multilingual sales floors selling across the continent." },
  { place: "Germany", hub: "Berlin · Munich", note: "The market where speaking it natively decides the deal." },
  { place: "Austria & Switzerland", hub: "Vienna · Zurich", note: "DACH proper, where directness and proof win." },
  { place: "United States", hub: "EMEA-facing", note: "US companies opening Europe and hiring for it locally." },
];

const promises = [
  {
    t: "You are read by a seller, not a keyword filter",
    d: "Fifteen years of carrying quota means I can tell from one call whether you can open in German and hold a discovery. That is the assessment. Not how your CV is formatted.",
  },
  {
    t: "Honest briefs, and real feedback either way",
    d: "You get the actual role, the actual number, the actual manager. If it is a no, you hear why within a day. Nobody goes quiet on you here.",
  },
  {
    t: "Roles where your language is the job",
    d: "BDR, SDR and AE seats where native fluency is the reason you were hired, not a nice-to-have buried at the bottom of the spec.",
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
    <section id="candidates" className="border-b border-[color:var(--color-line)] py-20 sm:py-28">
      <Container>
        <SectionHead
          label="For candidates"
          title={
            <>
              Sell in your own language.{" "}
              <span className="accent">Land where you&rsquo;ll actually perform.</span>
            </>
          }
          intro="Multilingual BDR, SDR and AE roles with startups and scaling IT companies across Europe and the US. Free for you, always: the company pays the fee, never the candidate."
          align="center"
        />

        {/* Where the roles are */}
        <Reveal className="mt-16">
          <ul className="grid gap-px border-t border-l border-[color:var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
            {markets.map((m) => (
              <li
                key={m.place}
                className="group border-r border-b border-[color:var(--color-line)] bg-[color:var(--color-paper-50)] p-7 transition-colors duration-300 hover:bg-[color:var(--color-paper-100)]/70"
              >
                <p className="font-[family-name:var(--font-mono)] text-[0.6875rem] tracking-[0.14em] text-[color:var(--color-gold-700)] uppercase">
                  {m.hub}
                </p>
                <p className="h-section mt-3 text-[1.5rem]">{m.place}</p>
                <p className="mt-3 text-[0.875rem] leading-[1.6] text-[color:var(--color-mute)]">
                  {m.note}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* What you get */}
        <div className="mt-20 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <Label>What you get from me</Label>
            <h3 className="h-section mt-5 text-[clamp(1.6rem,3vw,2.25rem)] text-balance">
              A recruiter who has sat in the seat you&rsquo;re applying for.
            </h3>
            <p className="mt-5 text-[0.9375rem] leading-[1.7] text-[color:var(--color-body)]">
              The best sales teams I have worked in pulled from every language
              and background they could find. I hire the same way.
            </p>
          </div>

          <ul className="space-y-5">
            {promises.map((p, i) => (
              <Reveal key={p.t} delay={i * 80}>
                <li className="flex gap-5 border-b border-[color:var(--color-line)] pb-5">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-[color:var(--color-gold-600)]" />
                  <div>
                    <p className="h-section text-[1.125rem]">{p.t}</p>
                    <p className="mt-2 text-[0.9375rem] leading-[1.65] text-pretty text-[color:var(--color-body)]">
                      {p.d}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Four steps */}
        <div className="mt-20">
          <Label>How it works</Label>
          <ol className="mt-8 grid gap-px border-t border-l border-[color:var(--color-line)] sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 70}>
                <li className="h-full border-r border-b border-[color:var(--color-line)] bg-[color:var(--color-paper-100)]/40 p-7">
                  <span className="num text-[2rem] leading-none text-[color:var(--color-gold-500)]/50">
                    {s.n}
                  </span>
                  <p className="h-section mt-4 text-[1.125rem]">{s.t}</p>
                  <p className="mt-2.5 text-[0.875rem] leading-[1.65] text-[color:var(--color-mute)]">
                    {s.d}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Candidate CTA */}
        <Reveal className="mt-14">
          <div className="flex flex-col items-start justify-between gap-8 border border-[color:var(--color-line)] bg-[color:var(--color-paper-50)] p-8 sm:p-10 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <p className="h-section text-[clamp(1.375rem,2.4vw,1.75rem)] text-balance">
                Send your CV. You&rsquo;ll hear back from a person, within a day.
              </p>
              <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[color:var(--color-body)]">
                Know a great seller instead? Refer them. If they are placed and
                stay through the guarantee period, there is €500 in it for you.
              </p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={site.pages.candidates}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center justify-center gap-2.5 bg-[color:var(--color-ink-900)] px-7 py-4 text-[0.9375rem] font-medium text-[color:var(--color-paper-50)] transition-colors hover:bg-[color:var(--color-ink-800)]"
              >
                Send your CV
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href={site.pages.candidates}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2.5 border border-[color:var(--color-ink-900)]/22 px-7 py-4 text-[0.9375rem] font-medium text-[color:var(--color-ink-900)] transition-colors hover:border-[color:var(--color-ink-900)]"
              >
                Refer someone · €500
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
