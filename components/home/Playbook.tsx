import { Container, Label } from "@/components/ui";
import { ArrowRight } from "@/components/Icons";
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
    <section
      id="playbook"
      className="grain border-b border-[color:var(--color-line)] py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="max-w-[34rem]">
            <Label>See how it&rsquo;s built</Label>
            <h2 className="h-section mt-5 text-[clamp(1.9rem,4vw,2.9rem)] text-balance">
              A look inside the playbook.{" "}
              <span className="accent">Before you commit.</span>
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-[1.7] text-pretty text-[color:var(--color-body)]">
              A worked sample built around a made-up SaaS client, so you can see how
              a playbook gets put together: the native-language sequence, the
              cadence, the battlecard, the culture page. It is not the full asset.
              It is the clearest way to judge the structure and the craft before you
              spend anything.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={site.pages.playbookHub}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center justify-center gap-2.5 bg-[color:var(--color-ink-900)] px-7 py-4 text-[0.9375rem] font-medium text-[color:var(--color-paper-50)] transition-colors hover:bg-[color:var(--color-ink-800)]"
              >
                See the sample
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <span className="font-[family-name:var(--font-mono)] text-[0.75rem] tracking-[0.08em] text-[color:var(--color-mute)]">
                Free · no email required
              </span>
            </div>

            <p className="mt-10 border-l-2 border-[color:var(--color-gold-500)] pl-5 text-[0.9375rem] leading-[1.65] text-[color:var(--color-mute)]">
              Two routes in: one for US teams opening Europe, one for European
              teams scaling across EMEA. Both deliver the same fourteen sections,
              written from scratch.
            </p>
          </div>

          {/* The contents page, set like the document it describes */}
          <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -top-3 -right-3 hidden h-full w-full border border-[color:var(--color-line)] lg:block"
              />
              <div className="relative border border-[color:var(--color-line)] bg-[color:var(--color-paper-50)] p-8 shadow-[var(--shadow-card)] sm:p-10">
                <div className="flex flex-col gap-2 border-b border-[color:var(--color-line)] pb-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <p className="font-[family-name:var(--font-mono)] text-[0.6875rem] tracking-[0.16em] text-[color:var(--color-gold-700)] uppercase">
                    Contents
                  </p>
                  <p className="font-[family-name:var(--font-mono)] text-[0.6875rem] tracking-[0.12em] text-[color:var(--color-mute)] uppercase">
                    14 sections · built per client
                  </p>
                </div>

                <ol className="mt-2">
                  {contents.map((c, i) => (
                    <li
                      key={c}
                      className="flex items-baseline gap-4 border-b border-[color:var(--color-line-soft)] py-3 last:border-0"
                    >
                      <span className="num w-7 shrink-0 text-[0.875rem] text-[color:var(--color-gold-600)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[0.9375rem] text-[color:var(--color-ink-800)]">
                        {c}
                      </span>
                    </li>
                  ))}
                </ol>

                <p className="mt-6 border-t border-[color:var(--color-line)] pt-5 font-[family-name:var(--font-mono)] text-[0.6875rem] leading-[1.7] tracking-[0.04em] text-[color:var(--color-mute)]">
                  Written from scratch around your product, your ICP and your target
                  markets. Sequences in the buyer&rsquo;s own language, not translated
                  from a US template.
                </p>
              </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
