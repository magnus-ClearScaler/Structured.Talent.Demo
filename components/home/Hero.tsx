import Image from "next/image";
import { site } from "@/lib/site";

/* The fork, set as a contents page. Two entries, roman numerals, leaders and a
   rule between them — the device a book uses, doing the job a pair of hero
   buttons was doing badly. */
const entries = [
  {
    numeral: "I",
    href: "#candidates",
    title: "For candidates",
    line: "Native-language sales roles across Ireland, the UK, Spain and the German-speaking market.",
  },
  {
    numeral: "II",
    href: "#companies",
    title: "For companies",
    line: "Sales hiring, a custom playbook, or an embedded recruiter for DACH and EMEA.",
  },
];

const standing = [
  "Fifteen years carrying quota across EMEA",
  "Native German",
  "Author, Structured Prospecting",
  "WRC licence EA 5660",
];

export function Hero() {
  return (
    <section id="top" className="paper rule-b relative">
      <div className="mx-auto grid w-full max-w-[110rem] lg:grid-cols-[1.25fr_0.75fr]">
        {/* Left: the statement */}
        {/* Sized so the fork clears the fold on a laptop. The statement is
            still the largest thing on the page, just not a screen and a half
            of it. */}
        <div className="px-6 pt-10 pb-10 sm:px-10 sm:pt-14 lg:py-14 lg:pr-14 lg:pl-[max(2.5rem,calc((100vw-82rem)/2+1.5rem))]">
          <p className="folio text-[color:var(--color-gold-700)]">
            Dublin · Est. 2026 · No. 01
          </p>

          <h1 className="display mt-6 max-w-[14ch] text-[clamp(2.125rem,4.6vw,3.5rem)]">
            The multilingual sales talent to win in Europe.
          </h1>
          <p className="display accent mt-2 max-w-[17ch] text-[clamp(1.625rem,3.4vw,2.5rem)]">
            And the playbook to make them land.
          </p>

          <p className="mt-7 max-w-[52ch] text-[1.0625rem] leading-[1.75] text-pretty text-[color:var(--color-body)]">
            Fifteen years carrying quota in Germany, the UK, Spain and Ireland,
            now spent on both sides of the same problem: finding sellers who can
            close in the language, and writing the playbook that makes them
            productive once they arrive.
          </p>

          {/* Contents */}
          <nav aria-label="Where to start" className="mt-9 max-w-[46rem]">
            <p className="folio text-[color:var(--color-mute)]">Where to start</p>
            <ul className="mt-3 rule-t">
              {entries.map((e) => (
                <li key={e.href} className="rule-b">
                  <a
                    href={e.href}
                    className="group grid items-baseline gap-x-6 gap-y-1.5 py-4 sm:grid-cols-[2.5rem_1fr_auto]"
                  >
                    <span className="numeral text-[1.125rem]">{e.numeral}</span>
                    <span>
                      <span className="title block text-[1.375rem] transition-colors group-hover:text-[color:var(--color-gold-700)] sm:text-[1.5rem]">
                        {e.title}
                      </span>
                      <span className="mt-1 block max-w-[52ch] text-[0.9375rem] leading-[1.55] text-[color:var(--color-mute)]">
                        {e.line}
                      </span>
                    </span>
                    <span className="folio hidden self-center text-[color:var(--color-gold-700)] transition-transform duration-200 group-hover:translate-x-1 sm:block">
                      Read →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right: the founder, bleeding off the edge of the page */}
        <figure className="relative min-h-[18rem] sm:min-h-[22rem] lg:min-h-full">
          <Image
            src="/harm-linnecke.webp"
            alt="Harm Linnecke, founder of Structured Talent, in Dublin"
            fill
            sizes="(min-width: 1024px) 38vw, 100vw"
            priority
            className="object-cover object-[50%_22%] grayscale-[0.12] contrast-[1.02]"
          />
          {/* A wash of the paper colour into the left edge, so the photograph
              joins the page rather than sitting in a frame on top of it. */}
          <span
            aria-hidden="true"
            className="absolute inset-0 hidden bg-gradient-to-r from-paper-50 via-transparent to-transparent lg:block"
          />
          <figcaption className="absolute right-0 bottom-0 left-0 bg-[color:var(--color-ink-900)]/86 px-6 py-4 sm:px-8">
            <span className="block font-[family-name:var(--font-serif)] text-[1.0625rem] text-[color:var(--color-paper-50)]">
              Harm Linnecke
            </span>
            <span className="meta-light mt-0.5 block">
              Every search and every playbook, run by me
            </span>
          </figcaption>
        </figure>
      </div>

      {/* Standing credentials, set as a single ruled line */}
      <div className="rule-t bg-[color:var(--color-paper-100)]/60">
        <div className="mx-auto w-full max-w-[82rem] px-6 sm:px-10">
          <ul className="flex flex-col divide-y divide-[color:var(--color-rule-soft)] lg:flex-row lg:divide-x lg:divide-y-0">
            {standing.map((s) => (
              <li
                key={s}
                className="py-3.5 text-[0.9375rem] text-[color:var(--color-body)] lg:px-7 lg:first:pl-0 lg:last:pr-0"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a href={site.booking.strategy} className="sr-only">
        Book a strategy call
      </a>
    </section>
  );
}
