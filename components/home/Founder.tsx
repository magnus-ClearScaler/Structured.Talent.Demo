import Image from "next/image";
import { Container, Label } from "@/components/ui";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

/* Every line here is on the client's own about page. It is the strongest proof
   they own and it currently sits two clicks from the front door. */
const track = [
  {
    place: "London",
    detail: "Lexmark, ClickSoftware and UNeek Clothing. UK tech, mostly IT. Top performer.",
  },
  {
    place: "Barcelona",
    detail: "Teleperformance, training team members for Google Cloud. Top performer.",
  },
  {
    place: "Dublin · Quark Software",
    detail: "Best-performing AE in an EMEA team.",
  },
  {
    place: "Dublin · MarketStar",
    detail: "Top performer for Google Chrome, later for Faire.",
  },
  {
    place: "Dublin · ActiveCampaign",
    detail: "Top BDR.",
  },
  {
    place: "Dublin · National Pen, PayPal",
    detail: "Full-cycle sales. Flown to Denver and to Ashburn for US sales training.",
  },
];

export function Founder() {
  return (
    <section id="founder" className="border-b border-[color:var(--color-line)] py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Portrait */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -left-4 hidden h-full w-full border border-[color:var(--color-gold-500)]/35 lg:block"
              />
              <Image
                src="/harm-linnecke.webp"
                alt="Harm Linnecke, founder of Structured Talent, in Dublin"
                width={819}
                height={1024}
                sizes="(min-width: 1024px) 30rem, 100vw"
                className="relative w-full object-cover"
              />
            </div>

            <div className="mt-6 space-y-1">
              <p className="h-section text-[1.25rem]">Harm Linnecke</p>
              <p className="font-[family-name:var(--font-mono)] text-[0.6875rem] tracking-[0.1em] text-[color:var(--color-mute)] uppercase">
                Founder · Dublin 8 · DACH &amp; EMEA
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 border border-[color:var(--color-line)] px-4 py-2.5 text-[0.8125rem] font-medium text-[color:var(--color-ink-900)] transition-colors hover:border-[color:var(--color-gold-500)]"
              >
                16k on LinkedIn
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={site.book}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 border border-[color:var(--color-line)] px-4 py-2.5 text-[0.8125rem] font-medium text-[color:var(--color-ink-900)] transition-colors hover:border-[color:var(--color-gold-500)]"
              >
                The book
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Story */}
          <div>
            <Label>The long way round</Label>
            <h2 className="h-section mt-5 text-[clamp(1.9rem,4vw,2.75rem)] text-balance">
              How fifteen years across Europe{" "}
              <span className="accent">became Structured Talent.</span>
            </h2>

            <div className="mt-7 space-y-5 text-[1.0625rem] leading-[1.75] text-pretty text-[color:var(--color-body)]">
              <p>
                It started with numbers, not sales. I grew up in Uelzen in northern
                Germany and studied statistics, finance, accounting and auditing in
                Halle, in the former East. Not the obvious launchpad for a sales
                career, but it left me something I lean on every day. I look for
                patterns, I test what I think I know, and I treat every word in a
                cold email as a variable that is either pulling its weight or it
                isn&rsquo;t.
              </p>
              <p>
                London taught me pace. Then a year in Barcelona, where the country,
                the language and the buyer were all new at once. The lesson came back
                the same every time: you cannot translate your way into a new market,
                you have to understand it.
              </p>
              <p>
                The last seven years have been Dublin, in full-cycle and frontline
                roles, consistently among the top performers. Twice a company flew me
                to the US for sales training, sitting in rooms full of American reps
                working out how to sell into Europe. I was usually the European in the
                room, which is how I have seen from the inside exactly where a US
                sales motion breaks when it meets a European buyer.
              </p>
            </div>

            <figure className="mt-9 border-l-2 border-[color:var(--color-gold-500)] py-1 pl-6">
              <blockquote className="h-section text-[1.25rem] leading-[1.4]">
                Every word in a cold email is a variable. My job is to know which ones
                move the number.
              </blockquote>
            </figure>

            {/* Where the quota was carried */}
            <Reveal className="mt-12">
              <p className="font-[family-name:var(--font-mono)] text-[0.6875rem] tracking-[0.16em] text-[color:var(--color-gold-700)] uppercase">
                Where the quota was carried
              </p>
              <ul className="mt-5 border-t border-[color:var(--color-line)]">
                {track.map((t) => (
                  <li
                    key={t.place}
                    className="grid gap-1 border-b border-[color:var(--color-line)] py-4 sm:grid-cols-[13rem_1fr] sm:gap-6"
                  >
                    <span className="font-[family-name:var(--font-mono)] text-[0.75rem] tracking-[0.06em] text-[color:var(--color-ink-900)] uppercase">
                      {t.place}
                    </span>
                    <span className="text-[0.9375rem] leading-[1.6] text-[color:var(--color-mute)]">
                      {t.detail}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[0.875rem] leading-[1.7] text-[color:var(--color-mute)]">
                Sectors: SaaS and scaling IT, fintech, outsourcing, gaming, global
                services. Author of{" "}
                <a
                  href={site.book}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[color:var(--color-gold-700)] underline decoration-[color:var(--color-gold-500)]/40 underline-offset-4 hover:decoration-[color:var(--color-gold-500)]"
                >
                  Structured Prospecting
                </a>
                , Amazon #1 in Telemarketing, Ireland 2026.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
