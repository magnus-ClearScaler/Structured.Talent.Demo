/* A quiet, continuously drifting statement of where these roles actually sit.
   Decorative repetition, so the track is hidden from assistive tech and the
   real list is announced once below it. */
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
    <section className="border-b border-[color:var(--color-line)] bg-[color:var(--color-paper-50)] py-8">
      <div className="mx-auto mb-5 w-full max-w-[78rem] px-5 sm:px-8">
        <p className="label text-center">Markets I sold into, and now hire for</p>
      </div>

      <div className="marquee-mask overflow-hidden" aria-hidden="true">
        <div className="marquee-track flex w-max items-center gap-3 sm:gap-4">
          {row.map((m, i) => (
            <span
              key={`${m}-${i}`}
              className="border border-[color:var(--color-line)] bg-[color:var(--color-paper-100)]/50 px-5 py-2.5 font-[family-name:var(--font-serif)] text-[1.0625rem] whitespace-nowrap text-[color:var(--color-ink-900)] sm:text-[1.25rem]"
            >
              {m}
            </span>
          ))}
        </div>
      </div>

      <ul className="sr-only">
        {markets.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
    </section>
  );
}
