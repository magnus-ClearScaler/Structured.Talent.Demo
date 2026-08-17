import Image from "next/image";
import { SectionHead, Container, Band } from "@/components/ui";
import { site } from "@/lib/site";

/* Every line here is on the client's own about page. It is the strongest proof
   they own and it currently sits two clicks from the front door. */
const track = [
  { place: "London", years: "UK tech", detail: "Lexmark, ClickSoftware and UNeek Clothing, mostly IT. Top performer." },
  { place: "Barcelona", years: "Outsourcing", detail: "Teleperformance, training team members for Google Cloud. Top performer." },
  { place: "Quark Software", years: "Dublin", detail: "Best-performing AE in an EMEA team." },
  { place: "MarketStar", years: "Dublin", detail: "Top performer for Google Chrome, later for Faire." },
  { place: "ActiveCampaign", years: "Dublin", detail: "Top BDR." },
  { place: "National Pen, PayPal", years: "Dublin", detail: "Full-cycle sales. Flown to Denver and to Ashburn for US sales training." },
];

export function Founder() {
  return (
    <section id="founder" className="paper rule-b">
      <Container className="py-20 sm:py-28">
        <SectionHead
          label="About Harm"
          title="How fifteen years across Europe became Structured Talent"
        />

        <div className="mt-16 grid gap-x-16 gap-y-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Running text, set at a book measure */}
          <div>
            <div className="max-w-[62ch] space-y-6 text-[1.0625rem] leading-[1.8] text-pretty text-[color:var(--color-body)] sm:text-[1.125rem]">
              <p>
                It started with numbers, not sales. I grew up in Uelzen in northern
                Germany and studied statistics and accounting in Halle, in the
                former East. Not the obvious launchpad for a sales career, but it
                left me something I use every day: I look for patterns, and I
                treat every word in a cold email as a variable that is either
                pulling its weight or it isn&rsquo;t.
              </p>
              <p>
                London taught me pace. Barcelona taught me that you cannot
                translate your way into a market. And the last seven years in
                Dublin put me in rooms full of American reps working out how to
                sell into Europe. I was usually the European in the room, which is
                how I have seen from the inside exactly where a US sales motion
                breaks when it meets a European buyer.
              </p>
            </div>

            <figure className="mt-10 max-w-[38ch] border-l border-[color:var(--color-gold-500)] pl-5">
              <blockquote className="text-[1.1875rem] leading-[1.6] text-[color:var(--color-body)]">
                Every word in a cold email is a variable. My job is to know which
                ones move the number.
              </blockquote>
            </figure>

            <div className="rule-t mt-12 flex flex-wrap items-center gap-x-8 gap-y-5 pt-7">
              <div className="flex items-center gap-4">
                <Image
                  src="/harm-avatar.webp"
                  alt=""
                  aria-hidden="true"
                  width={44}
                  height={44}
                  className="h-11 w-11 object-cover grayscale-[0.2]"
                />
                <div>
                  <p className="text-[1.0625rem] text-[color:var(--color-ink-900)]">
                    Harm Linnecke
                  </p>
                  <p className="label">Dublin 8 · DACH and EMEA</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-7 gap-y-3">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link text-[1rem]"
                >
                  16k on LinkedIn
                </a>
                <a
                  href={site.book}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link text-[1rem]"
                >
                  Structured Prospecting
                </a>
              </div>
            </div>
          </div>

          {/* The record */}
          <div>
            <p className="label rule-b pb-3">Track record</p>

            <dl className="mt-2">
              {track.map((t) => (
                <div
                  key={t.place}
                  className="border-b border-[color:var(--color-rule-soft)] py-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <dt className="title text-[1.1875rem]">{t.place}</dt>
                    <span className="label">{t.years}</span>
                  </div>
                  <dd className="mt-1.5 max-w-[46ch] text-[0.9375rem] leading-[1.6] text-[color:var(--color-mute)]">
                    {t.detail}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 max-w-[46ch] text-[0.9375rem] leading-[1.7] text-[color:var(--color-mute)]">
              Sectors: SaaS and scaling IT, fintech, outsourcing, gaming, global
              services. Author of{" "}
              <a
                href={site.book}
                target="_blank"
                rel="noreferrer noopener"
                className="link"
              >
                Structured Prospecting
              </a>
              , Amazon #1 in Telemarketing, Ireland 2026.
            </p>
          </div>
        </div>
      </Container>

      <Band src="/img-terrace.webp" />
    </section>
  );
}
