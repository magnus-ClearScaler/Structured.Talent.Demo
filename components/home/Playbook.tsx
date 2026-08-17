import { GeistMono } from "geist/font/mono";
import { SectionHead, Container, Button, TextLink } from "@/components/ui";
import { site } from "@/lib/site";

/* The site advertises a fourteen-section custom playbook and names four of the
   sections outright: the native-language sequence, the cadence, the battlecard
   and the culture page. The rest of this contents list is representative and
   should be swapped for Harm's real table of contents before this goes live. */
const contents = [
  "ICP and market map",
  "Buyer personas, per market",
  "Positioning and value narrative",
  "Objection set and battlecards",
  "Cold sequence, native language",
  "Call opener and discovery",
  "LinkedIn touch pattern",
  "Cadence and touch rhythm",
  "Channel mix by market",
  "Culture page: DACH",
  "Culture page: Nordics, Iberia",
  "Qualification framework",
  "Handover to AE, CRM hygiene",
  "First ninety days, ramp plan",
];

export function Playbook() {
  return (
    <section id="playbook" className="bg-[color:var(--color-surface-2)] py-20 sm:py-28">
      <Container>
        <SectionHead
          eyebrow="The playbook"
          title="A look inside the playbook, before you commit"
          lead="A worked sample built around a made-up software client, so you can see how one gets put together: the native-language sequence, the cadence, the battlecard, the culture page. It is the clearest way to judge the structure and the craft before you spend anything."
        />

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          {/* A page out of the thing itself, rather than a photograph of a desk */}
          <figure className="bg-white shadow-[var(--shadow-card)]">
            <figcaption className="flex flex-wrap items-center justify-between gap-3 border-b border-[color:var(--color-line)] px-7 py-4">
              <span className="text-[0.8125rem] font-medium text-[color:var(--color-ink)]">
                Section 05 · Cold sequence, native language
              </span>
              <span className="text-[0.8125rem] text-[color:var(--color-mute)]">
                DACH · Touch 1 of 7
              </span>
            </figcaption>

            <div className={`${GeistMono.className} px-7 py-7 text-[0.875rem] leading-[1.85] text-[color:var(--color-body)]`}>
              <p className="text-[color:var(--color-mute)]">
                Betreff:{" "}
                <span className="text-[color:var(--color-ink)]">
                  Frage zum Aufbau Ihres Vertriebsteams
                </span>
              </p>
              <p className="mt-5">Guten Tag Herr Müller,</p>
              <p className="mt-4">
                Sie bauen gerade ein Vertriebsteam in DACH auf. Die meisten
                US-Anbieter übersetzen dafür ihre Sequenzen und wundern sich
                anschließend über die Antwortquote.
              </p>
              <p className="mt-4">
                Ich habe fünfzehn Jahre in diesem Markt verkauft. Wenn es hilft,
                schicke ich Ihnen die drei Punkte, an denen es meistens scheitert.
              </p>
              <p className="mt-4">
                Beste Grüße
                <br />
                Harm Linnecke
              </p>
            </div>

            <div className="border-t border-[color:var(--color-line)] px-7 py-4">
              <p className="text-[0.8125rem] leading-[1.6] text-[color:var(--color-mute)]">
                Written for the market, not translated into it. Sie, not Du. No
                superlatives, and the ask is a document rather than a meeting.
              </p>
            </div>
          </figure>

          {/* Contents */}
          <div>
            <div className="flex items-baseline justify-between gap-4 border-b border-[color:var(--color-ink)] pb-3">
              <p className="text-[0.9375rem] font-medium text-[color:var(--color-ink)]">
                Contents
              </p>
              <p className="text-[0.8125rem] text-[color:var(--color-mute)]">
                Fourteen sections, built per client
              </p>
            </div>

            <ol className="grid sm:grid-cols-2 sm:gap-x-10">
              {contents.map((c, i) => (
                <li
                  key={c}
                  className="flex items-baseline gap-4 border-b border-[color:var(--color-line)] py-3"
                >
                  <span className="tnum w-5 shrink-0 text-[0.8125rem] text-[color:var(--color-mute)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.9375rem] leading-[1.45] text-[color:var(--color-ink)]">
                    {c}
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button href={site.pages.playbookHub}>See the full sample</Button>
              <span className="text-[0.875rem] text-[color:var(--color-mute)]">
                Free, and no email required
              </span>
            </div>

            <p className="mt-8 max-w-[46ch] text-[0.9375rem] leading-[1.7] text-[color:var(--color-mute)]">
              There are two routes in: one for US teams opening Europe, one for
              European teams scaling across EMEA. Both deliver the same fourteen
              sections, written from scratch around your product, your ICP and
              your target markets.
            </p>
            <div className="mt-4">
              <TextLink href={site.pages.usPlaybook}>Compare the two routes</TextLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
