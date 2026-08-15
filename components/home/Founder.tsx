import Image from "next/image";
import { Container, Label } from "@/components/ui";
import { ArrowRight, Quote } from "@/components/Icons";
import { site } from "@/lib/site";

/* Every line here is on the client's own about page. It is the strongest proof
   they own and it currently sits two clicks from the front door. The portrait
   lives in the hero now, so this section carries the record instead. */
const track = [
  { place: "London", detail: "Lexmark, ClickSoftware and UNeek Clothing. UK tech, mostly IT. Top performer." },
  { place: "Barcelona", detail: "Teleperformance, training team members for Google Cloud. Top performer." },
  { place: "Dublin · Quark Software", detail: "Best-performing AE in an EMEA team." },
  { place: "Dublin · MarketStar", detail: "Top performer for Google Chrome, later for Faire." },
  { place: "Dublin · ActiveCampaign", detail: "Top BDR." },
  { place: "Dublin · National Pen, PayPal", detail: "Full-cycle sales. Flown to Denver and to Ashburn for US sales training." },
];

export function Founder() {
  return (
    <section
      id="founder"
      className="grain border-b border-[color:var(--color-line)] py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* The story */}
          <div>
            <Label>The long way round</Label>
            <h2 className="h-section mt-5 text-[clamp(1.9rem,4vw,2.75rem)] text-balance">
              How fifteen years across Europe{" "}
              <span className="accent">became Structured Talent.</span>
            </h2>

            <div className="mt-7 space-y-5 text-[1.0625rem] leading-[1.75] text-pretty text-[color:var(--color-body)]">
              <p>
                It started with numbers, not sales. I grew up in Uelzen in northern
                Germany and studied statistics and accounting in Halle, in the
                former East. Not the obvious launchpad for a sales career, but it
                left me something I use every day: I look for patterns, and I treat
                every word in a cold email as a variable that is either pulling its
                weight or it isn&rsquo;t.
              </p>
              <p>
                London taught me pace, Barcelona taught me that you cannot translate
                your way into a market, and the last seven years in Dublin put me in
                rooms full of American reps working out how to sell into Europe. I
                was usually the European in the room, which is how I have seen from
                the inside exactly where a US sales motion breaks when it meets a
                European buyer.
              </p>
            </div>

            <figure className="mt-10 border-l-2 border-[color:var(--color-gold-500)] pl-7">
              <Quote className="mb-4 h-6 w-6 text-[color:var(--color-gold-500)]/35" />
              <blockquote className="h-section text-[clamp(1.25rem,2.4vw,1.625rem)] leading-[1.35] text-balance">
                Every word in a cold email is a variable. My job is to know which
                ones move the number.
              </blockquote>
            </figure>

            {/* A signature line, with the face at the size a signature deserves */}
            <div className="mt-10 flex items-center gap-4">
              <Image
                src="/harm-avatar.webp"
                alt=""
                aria-hidden="true"
                width={44}
                height={44}
                className="h-11 w-11 object-cover grayscale-[0.2]"
              />
              <div>
                <p className="font-[family-name:var(--font-serif)] text-[1.0625rem] text-[color:var(--color-ink-900)]">
                  Harm Linnecke
                </p>
                <p className="font-[family-name:var(--font-mono)] text-[0.6875rem] tracking-[0.1em] text-[color:var(--color-mute)] uppercase">
                  Founder · Dublin 8 · DACH &amp; EMEA
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
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

          {/* The record */}
          <div className="lg:pt-4">
            <div className="border border-[color:var(--color-line)] bg-[color:var(--color-paper-50)] p-8 shadow-[var(--shadow-card)] sm:p-9">
              <p className="font-[family-name:var(--font-mono)] text-[0.6875rem] tracking-[0.16em] text-[color:var(--color-gold-700)] uppercase">
                Where the quota was carried
              </p>

              <ul className="mt-6 border-t border-[color:var(--color-line)]">
                {track.map((t) => (
                  <li key={t.place} className="border-b border-[color:var(--color-line)] py-4">
                    <span className="block font-[family-name:var(--font-mono)] text-[0.75rem] tracking-[0.06em] text-[color:var(--color-ink-900)] uppercase">
                      {t.place}
                    </span>
                    <span className="mt-1.5 block text-[0.9375rem] leading-[1.6] text-[color:var(--color-mute)]">
                      {t.detail}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-[0.875rem] leading-[1.7] text-[color:var(--color-mute)]">
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
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
