/* A quiet, continuously drifting statement of where these roles sit. Set as
   plain type separated by a mark, not as a row of chips. Decorative repetition,
   so the track is hidden from assistive tech and the real list is announced
   once, below it. */
const markets = [
  "Germany",
  "Austria",
  "Switzerland",
  "Ireland",
  "United Kingdom",
  "Spain",
  "United States",
];

export function MarketsBand() {
  const row = [...markets, ...markets, ...markets, ...markets];

  return (
    <section className="rule-b bg-[color:var(--color-paper-100)]/60 py-6">
      <div className="relative overflow-hidden" aria-hidden="true">
        <div className="marquee-track flex w-max items-baseline">
          {row.map((m, i) => (
            <span key={`${m}-${i}`} className="flex items-baseline whitespace-nowrap">
              <span className="font-[family-name:var(--font-serif)] text-[1.375rem] text-[color:var(--color-ink-900)] sm:text-[1.625rem]">
                {m}
              </span>
              <span className="mx-7 text-[0.9375rem] text-[color:var(--color-sand-400)] sm:mx-9">
                ·
              </span>
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper-100 to-transparent sm:w-48" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper-100 to-transparent sm:w-48" />
      </div>

      <ul className="sr-only">
        {markets.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
    </section>
  );
}
