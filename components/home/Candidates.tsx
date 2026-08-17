import { SectionHead, Container, Button, TextLink, Figure } from "@/components/ui";
import { site } from "@/lib/site";

const markets = [
  { place: "Ireland", hub: "Dublin", note: "EMEA hubs for US software companies, hiring in most European languages." },
  { place: "United Kingdom", hub: "London", note: "Fast markets and full-cycle roles." },
  { place: "Spain", hub: "Barcelona, Madrid", note: "Multilingual sales floors selling across the continent." },
  { place: "Germany", hub: "Berlin, Munich", note: "Where speaking the language natively decides the deal." },
  { place: "Austria, Switzerland", hub: "Vienna, Zurich", note: "DACH proper, where buyers want directness and proof." },
  { place: "United States", hub: "EMEA-facing", note: "US companies opening Europe and hiring for it locally." },
];

const promises = [
  {
    t: "You are read by someone who has sold",
    d: "Fifteen years of carrying quota means I can tell from one call whether you can open in German and hold a discovery. That is what I assess, rather than how the CV is formatted.",
  },
  {
    t: "Honest briefs, and feedback either way",
    d: "You get the actual role, the actual number and the actual manager. If it is a no, you hear why within a day.",
  },
  {
    t: "Seats where your language is the job",
    d: "BDR, SDR and AE roles where native fluency is the reason you were hired, not a line at the bottom of the spec.",
  },
];

const steps = [
  { n: "01", t: "Send your CV", d: "One file. No account, no portal, no form asking for your life story." },
  { n: "02", t: "A call with me", d: "Twenty minutes on what you actually close, which market suits you, and what you want next." },
  { n: "03", t: "Meet the hiring team", d: "I introduce you directly and prepare you properly, including how that buyer expects to be sold to." },
  { n: "04", t: "You start", d: "Offer, contract, start date. I stay reachable through your first weeks in the seat." },
];

export function Candidates() {
  return (
    <section id="candidates" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-16">
          <SectionHead
            eyebrow="For candidates"
            title="Sell in your own language. Land where you will perform."
            lead="I place multilingual BDRs, SDRs and AEs with startups and scaling software companies across Europe and the US. It is free for you: the company pays the fee, never the candidate."
          />
          {/* The cities these roles actually sit in */}
          <Figure src="/img-street.webp" ratio="aspect-[5/4]" />
        </div>

        {/* Where the roles are */}
        <div className="mt-20">
          <p className="eyebrow">Where the roles sit</p>
          {/* Horizontal rules only. Vertical dividers across a wrapping grid
              need nth-child gymnastics that break at one breakpoint or another. */}
          <ul className="mt-6 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {markets.map((m) => (
              <li
                key={m.place}
                className="border-t border-[color:var(--color-line)] pt-5 pb-7"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="h3 text-[1.25rem]">{m.place}</h3>
                  <span className="text-[0.8125rem] text-[color:var(--color-mute)]">
                    {m.hub}
                  </span>
                </div>
                <p className="mt-2 text-[0.9375rem] leading-[1.6] text-[color:var(--color-mute)]">
                  {m.note}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* What you get */}
        <div className="mt-20 grid gap-x-16 gap-y-10 lg:grid-cols-[0.75fr_1.25fr]">
          <h3 className="h2 max-w-[16ch] text-[clamp(1.625rem,2.8vw,2.25rem)]">
            I have sat in the seat you are applying for
          </h3>
          <div className="grid gap-8 sm:grid-cols-3">
            {promises.map((p) => (
              <div key={p.t} className="border-t border-[color:var(--color-ink)] pt-5">
                <h4 className="h3 text-[1.0625rem]">{p.t}</h4>
                <p className="mt-2.5 text-[0.9375rem] leading-[1.65] text-[color:var(--color-body)]">
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Process, on ink */}
      <div className="mt-20 bg-[color:var(--color-ink-950)]">
        <Container className="py-16 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h3 className="h2 on-dark text-[clamp(1.625rem,3vw,2.25rem)]">How it works</h3>
            <TextLink href={site.pages.candidates} tone="dark">
              Start at step one
            </TextLink>
          </div>

          <ol className="mt-12 grid gap-px border-t border-[color:var(--color-line-dark)] sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li
                key={s.n}
                className="border-b border-[color:var(--color-line-dark)] py-7 lg:border-l lg:px-7 lg:first:border-l-0 lg:first:pl-0"
              >
                <span className="tnum text-[0.875rem] font-medium text-[color:var(--color-brass-400)]">
                  {s.n}
                </span>
                <h4 className="h3 on-dark mt-3 text-[1.125rem]">{s.t}</h4>
                <p className="mt-2 text-[0.9375rem] leading-[1.6] text-[color:var(--color-onink-mute)]">
                  {s.d}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <p className="lead-dark max-w-[52ch]">
              Send your CV and you will hear back from me within a business day.
              If you would rather refer someone, there is €500 in it for you once
              they are placed and through the guarantee period.
            </p>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button href={site.pages.candidates} tone="invert">
                Send your CV
              </Button>
              <Button href={site.pages.candidates} tone="outline-dark">
                Refer someone
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
