import Image from "next/image";
import { Container, Button } from "@/components/ui";
import { site } from "@/lib/site";

const proof = [
  { k: "15 years", v: "Carrying quota across DACH, the UK, Iberia and Ireland" },
  { k: "Native German", v: "Sold in the language, not through a translator" },
  { k: "Amazon #1", v: "Author of Structured Prospecting, Telemarketing, IE 2026" },
  { k: "EA 5660", v: "Employment agency licensed by the WRC, Dublin" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[color:var(--color-ink-950)]">
      <div aria-hidden="true" className="grid-lines absolute inset-0" />

      <Container className="relative">
        <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:py-24">
          <div>
            <p className="eyebrow-dark">Sales hiring and GTM playbooks · DACH and EMEA</p>

            <h1 className="display mt-6 max-w-[16ch] text-[clamp(2.5rem,5.4vw,4.25rem)] text-white">
              The multilingual sales talent to win in Europe.
            </h1>
            {/* His second clause, kept as its own line rather than folded into
                the body copy where it was disappearing. Same face, same colour,
                one step down in size. */}
            <p className="mt-4 max-w-[22ch] text-[clamp(1.25rem,2.2vw,1.75rem)] leading-[1.2] font-medium tracking-[-0.03em] text-[color:var(--color-onink-body)]">
              And the playbook to make them land.
            </p>

            <p className="lead-dark mt-7 max-w-[52ch] text-pretty">
              I am Harm Linnecke. I spent fifteen years carrying quota in Germany,
              the UK, Spain and Ireland, and I now work on both sides of the same
              problem: finding sales people who can close in the language, and
              writing the playbook that makes them productive once they arrive.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#companies" tone="invert">
                I&rsquo;m hiring
              </Button>
              <Button href="#candidates" tone="outline-dark">
                I&rsquo;m looking for a role
              </Button>
            </div>
          </div>

          {/* The portrait, seated on the dark ground rather than framed on it.
              On a phone it closes the hero rather than opening it, running edge
              to edge and dissolving into the ground so it reads as part of the
              section; on a laptop it takes the right-hand column. */}
          <div className="relative">
            <div className="relative -mx-6 aspect-[4/3] overflow-hidden sm:-mx-10 sm:aspect-[16/9] lg:mx-0 lg:ml-auto lg:aspect-[4/5] lg:max-w-[26rem]">
              <Image
                src="/harm-portrait.webp"
                alt="Harm Linnecke, founder of Structured Talent"
                fill
                sizes="(min-width: 1024px) 26rem, 100vw"
                priority
                className="object-cover object-top lg:object-center"
              />
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[color:var(--color-ink-950)] to-transparent"
              />
            </div>
            <div className="mt-4 flex items-baseline gap-3 lg:justify-end">
              <span className="text-[0.9375rem] font-medium text-white">Harm Linnecke</span>
              <span className="text-[0.875rem] text-[color:var(--color-onink-mute)]">
                Founder, Dublin
              </span>
            </div>
          </div>
        </div>
      </Container>

      {/* Proof strip */}
      <div className="relative border-t border-[color:var(--color-line-dark)]">
        <Container>
          <dl className="grid divide-y divide-[color:var(--color-line-dark)] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {proof.map((p) => (
              <div key={p.k} className="py-6 lg:px-7 lg:first:pl-0 lg:last:pr-0">
                <dt className="text-[1.0625rem] font-medium text-white">{p.k}</dt>
                <dd className="mt-1.5 text-[0.875rem] leading-[1.55] text-[color:var(--color-onink-mute)]">
                  {p.v}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>

      <a href={site.booking.strategy} className="sr-only">
        Book a strategy call
      </a>
    </section>
  );
}
