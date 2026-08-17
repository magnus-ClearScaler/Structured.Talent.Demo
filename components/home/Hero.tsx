import Image from "next/image";
import { Container } from "@/components/ui";

/* Two routes in. Set as a plain ruled list, because that is what it is. */
const entries = [
  {
    href: "#candidates",
    title: "For candidates",
    line: "Native-language sales roles across Ireland, the UK, Spain and the German-speaking market.",
  },
  {
    href: "#companies",
    title: "For companies",
    line: "Sales hiring, a custom playbook, or an embedded recruiter for DACH and EMEA.",
  },
];

const standing = [
  "Fifteen years carrying quota across EMEA",
  "Native German speaker",
  "Author of Structured Prospecting",
  "WRC licence EA 5660",
];

export function Hero() {
  return (
    <section id="top" className="paper rule-b">
      {/* One asset serves both layouts: a head-and-shoulders crop, tight enough
          that the face still reads at 150px on a phone. The earlier wide crop
          was a portrait photograph letterboxed into a landscape band, which is
          how you end up with a lot of window and a very small head. */}
      <div className="mx-auto grid w-full max-w-[104rem] lg:grid-cols-[1.3fr_0.7fr]">
        <div className="px-6 pt-9 pb-12 sm:px-10 sm:pt-12 lg:order-1 lg:py-16 lg:pr-14 lg:pl-[max(2.5rem,calc((100vw-76rem)/2+1.5rem))]">
          {/* Byline. Phones only: on a laptop the photograph is already there,
              running the full height of the statement. */}
          <div className="mb-9 flex items-center gap-5 lg:hidden">
            <Image
              src="/harm-portrait.webp"
              alt="Harm Linnecke, founder of Structured Talent"
              width={720}
              height={900}
              sizes="(min-width: 640px) 11rem, 9rem"
              priority
              className="w-[9rem] shrink-0 object-cover sm:w-[11rem]"
            />
            <div>
              <p className="title text-[1.1875rem]">Harm Linnecke</p>
              <p className="label mt-1">
                Founder, Structured Talent. Dublin, working across DACH and EMEA.
              </p>
            </div>
          </div>

          <h1 className="display max-w-[19ch] text-[clamp(2rem,4.2vw,3.25rem)]">
            The multilingual sales talent to win in Europe, and the playbook to
            make them land.
          </h1>

          <p className="mt-7 max-w-[54ch] text-[1.0625rem] leading-[1.75] text-pretty text-[color:var(--color-body)]">
            I spent fifteen years carrying quota in Germany, the UK, Spain and
            Ireland, and I now work on both sides of the same problem: finding
            sales people who can close in the language, and writing the playbook
            that makes them productive once they arrive.
          </p>

          <nav aria-label="Where to start" className="mt-10 max-w-[46rem]">
            <ul className="rule-t">
              {entries.map((e) => (
                <li key={e.href} className="rule-b">
                  <a
                    href={e.href}
                    className="group grid items-baseline gap-x-8 gap-y-1.5 py-5 sm:grid-cols-[1fr_auto]"
                  >
                    <span>
                      <span className="title block text-[1.375rem] transition-colors group-hover:text-[color:var(--color-gold-700)] sm:text-[1.5rem]">
                        {e.title}
                      </span>
                      <span className="label mt-1 block max-w-[52ch]">{e.line}</span>
                    </span>
                    <span className="hidden self-center text-[1rem] text-[color:var(--color-gold-700)] transition-transform duration-200 group-hover:translate-x-1 sm:block">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <figure className="relative hidden lg:order-2 lg:block lg:min-h-full">
          <Image
            src="/harm-portrait.webp"
            alt="Harm Linnecke, founder of Structured Talent"
            fill
            sizes="36vw"
            priority
            className="object-cover object-[50%_15%]"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-paper-50 via-transparent to-transparent"
          />
        </figure>
      </div>

      <div className="rule-t bg-[color:var(--color-paper-100)]/60">
        <Container>
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
        </Container>
      </div>
    </section>
  );
}
