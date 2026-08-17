import { SectionHead, Container, TextLink, Figure } from "@/components/ui";
import { site } from "@/lib/site";

/* Every line here is on the client's own about page. It is the strongest proof
   they own and it currently sits two clicks from the front door. */
const track = [
  { place: "Lexmark, ClickSoftware, UNeek", where: "London", detail: "UK tech, mostly IT. Top performer." },
  { place: "Teleperformance", where: "Barcelona", detail: "Training team members for Google Cloud. Top performer." },
  { place: "Quark Software", where: "Dublin", detail: "Best-performing AE in an EMEA team." },
  { place: "MarketStar", where: "Dublin", detail: "Top performer for Google Chrome, later for Faire." },
  { place: "ActiveCampaign", where: "Dublin", detail: "Top BDR." },
  { place: "National Pen, PayPal", where: "Dublin", detail: "Full-cycle sales. Flown to Denver and Ashburn for US sales training." },
];

export function Founder() {
  return (
    <section id="founder" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            {/* Dublin, where the business is registered and run from */}
            <Figure src="/img-terrace.webp" ratio="aspect-[4/3]" />
            <p className="mt-4 text-[0.875rem] leading-[1.6] text-[color:var(--color-mute)]">
              Structured Talent is run from Dublin 8, licensed by the WRC under
              employment agency licence EA 5660.
            </p>
          </div>

          <div>
            <SectionHead
              eyebrow="About Harm"
              title="How fifteen years across Europe became Structured Talent"
            />

            <div className="mt-7 max-w-[60ch] space-y-5 text-[1.0625rem] leading-[1.75] text-pretty text-[color:var(--color-body)]">
              <p>
                It started with numbers, not sales. I grew up in Uelzen in
                northern Germany and studied statistics and accounting in Halle,
                in the former East. Not the obvious launchpad for a sales career,
                but it left me something I use every day: I look for patterns, and
                I treat every word in a cold email as a variable that is either
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

            <blockquote className="mt-8 border-l-2 border-[color:var(--color-brass-500)] pl-5 text-[1.125rem] leading-[1.6] text-[color:var(--color-ink)]">
              Every word in a cold email is a variable. My job is to know which
              ones move the number.
            </blockquote>

            <div className="mt-10">
              <p className="eyebrow">Track record</p>
              <dl className="mt-5 border-t border-[color:var(--color-line)]">
                {track.map((t) => (
                  <div
                    key={t.place}
                    className="grid gap-x-6 gap-y-1 border-b border-[color:var(--color-line)] py-4 sm:grid-cols-[1fr_auto]"
                  >
                    <div>
                      <dt className="text-[0.9375rem] font-medium text-[color:var(--color-ink)]">
                        {t.place}
                      </dt>
                      <dd className="mt-1 text-[0.875rem] leading-[1.55] text-[color:var(--color-mute)]">
                        {t.detail}
                      </dd>
                    </div>
                    <span className="text-[0.8125rem] text-[color:var(--color-mute)] sm:text-right">
                      {t.where}
                    </span>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <TextLink href={site.linkedin}>16k followers on LinkedIn</TextLink>
              <TextLink href={site.book}>Structured Prospecting, Amazon #1</TextLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
