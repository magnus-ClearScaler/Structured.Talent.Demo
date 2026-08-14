import { Container, Label } from "@/components/ui";
import { ArrowRight } from "@/components/Icons";

/* The whole page is a fork, so the hero is the fork. Two doors, nothing else
   competing with them. Everything that used to crowd this screen — the proof
   list, the credentials, the services — now sits inside whichever door you
   pick, which is what makes the rest of the page feel short. */
const doors = [
  {
    href: "#companies",
    kicker: "I'm hiring",
    title: "Build a sales team that sells in Europe",
    body: "Native-fluency SDRs, BDRs and AEs across DACH and EMEA, screened by someone who carried the quota there.",
    cta: "For companies",
  },
  {
    href: "#candidates",
    kicker: "I'm a seller",
    title: "Find a role where your language is the point",
    body: "Sales roles across Ireland, the UK, Spain and the German-speaking market, where native fluency is the job and not a bonus line.",
    cta: "For candidates",
  },
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
      <Container className="relative">
        <div className="mx-auto max-w-4xl pt-16 pb-14 text-center sm:pt-24 sm:pb-16">
          <Label>GTM growth partner · DACH &amp; EMEA</Label>

          <h1 className="h-display mt-6 text-[clamp(2.5rem,6.4vw,4.5rem)] text-balance">
            The multilingual sales talent to win in Europe.{" "}
            <span className="accent">And the playbook to make them land.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-[1.0625rem] leading-[1.7] text-pretty text-[color:var(--color-body)] sm:text-[1.125rem]">
            Fifteen years carrying quota in Germany, the UK, Spain and Ireland,
            now spent on both sides of the same problem: finding sellers who can
            close in the language, and writing the playbook that makes them
            productive once they arrive.
          </p>
        </div>

        {/* The fork */}
        <div className="grid gap-5 pb-16 sm:pb-20 lg:grid-cols-2 lg:gap-6">
          {doors.map((d, i) => (
            <a
              key={d.href}
              href={d.href}
              className={`group relative flex flex-col justify-between overflow-hidden p-8 transition-colors duration-300 sm:p-10 ${
                i === 0
                  ? "bg-[color:var(--color-ink-900)] hover:bg-[color:var(--color-ink-800)]"
                  : "border border-[color:var(--color-ink-900)]/15 bg-[color:var(--color-paper-50)] hover:border-[color:var(--color-gold-500)]"
              }`}
            >
              {i === 0 ? (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-80"
                  style={{
                    background:
                      "radial-gradient(120% 90% at 90% 0%, rgba(201,162,39,0.18), transparent 62%)",
                  }}
                />
              ) : null}

              <span className="relative">
                <span className={i === 0 ? "label-light" : "label"}>{d.kicker}</span>
                <span
                  className={`h-section mt-5 block text-[clamp(1.5rem,2.6vw,2rem)] text-balance ${
                    i === 0 ? "text-[color:var(--color-paper-50)]" : ""
                  }`}
                >
                  {d.title}
                </span>
                <span
                  className={`mt-4 block max-w-md text-[0.9375rem] leading-[1.7] ${
                    i === 0
                      ? "text-[color:var(--color-sand-200)]"
                      : "text-[color:var(--color-body)]"
                  }`}
                >
                  {d.body}
                </span>
              </span>

              <span
                className={`relative mt-10 inline-flex items-center gap-2.5 text-[0.9375rem] font-medium ${
                  i === 0
                    ? "text-[color:var(--color-gold-300)]"
                    : "text-[color:var(--color-ink-900)]"
                }`}
              >
                {d.cta}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5" />
              </span>
            </a>
          ))}
        </div>
      </Container>

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
