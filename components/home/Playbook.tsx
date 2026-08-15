import { Chapter, Container, Action } from "@/components/ui";
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
  "Culture page: Nordics & Iberia",
  "Qualification framework",
  "Handover to AE, CRM hygiene",
  "First ninety days, ramp plan",
];

export function Playbook() {
  return (
    <section id="playbook" className="rule-b">
      <Container className="py-20 sm:py-28">
        <Chapter
          numeral="III"
          running="Chapter three · The playbook"
          title={
            <>
              A look inside the playbook.{" "}
              <span className="accent">Before you commit.</span>
            </>
          }
          standfirst="A worked sample built around a made-up SaaS client, so you can see how one gets put together: the native-language sequence, the cadence, the battlecard, the culture page. It is the clearest way to judge the structure and the craft before you spend anything."
        />

        <div className="mt-16 grid gap-x-16 gap-y-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <Action href={site.pages.playbookHub} tone="ink">
                See the sample
              </Action>
              <span className="meta">Free · no email required</span>
            </div>

            <p className="mt-10 max-w-[38ch] border-l border-[color:var(--color-gold-500)] pl-5 text-[1rem] leading-[1.7] text-[color:var(--color-mute)]">
              Two routes in: one for US teams opening Europe, one for European
              teams scaling across EMEA. Both deliver the same fourteen sections,
              written from scratch around your product, your ICP and your target
              markets.
            </p>
          </div>

          {/* The contents page, set the way the document sets it */}
          <div>
            <div className="rule-b flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 pb-4">
              <p className="folio text-[color:var(--color-gold-700)]">Contents</p>
              <p className="folio text-[color:var(--color-mute)]">
                Fourteen sections · built per client
              </p>
            </div>

            <ol className="mt-2 sm:columns-2 sm:gap-x-14">
              {contents.map((c, i) => (
                <li
                  key={c}
                  className="flex items-baseline gap-4 break-inside-avoid border-b border-[color:var(--color-rule-soft)] py-3"
                >
                  <span className="numeral tnum w-6 shrink-0 text-[0.875rem]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[1rem] leading-[1.5] text-[color:var(--color-ink-900)]">
                    {c}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
