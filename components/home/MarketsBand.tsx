/* Where he sells and hires, stated once and moving quietly. Decorative
   repetition, so the track is hidden from assistive technology and the real
   list is announced once below it. */
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
    <section className="border-b border-[color:var(--color-line)] bg-white py-7">
      <div className="mx-auto mb-4 w-full max-w-[80rem] px-6 sm:px-10">
        <p className="text-[0.875rem] text-[color:var(--color-mute)]">
          Markets I sold into, and now hire for
        </p>
      </div>
      <div className="relative overflow-hidden" aria-hidden="true">
        <div className="marquee-track flex w-max items-center">
          {row.map((m, i) => (
            <span key={`${m}-${i}`} className="flex items-center whitespace-nowrap">
              <span className="text-[1.25rem] font-medium tracking-[-0.02em] text-[color:var(--color-ink)] sm:text-[1.5rem]">
                {m}
              </span>
              <span
                className="mx-6 h-1 w-1 shrink-0 bg-[color:var(--color-brass-500)] sm:mx-8"
                aria-hidden="true"
              />
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent sm:w-40" />
      </div>
      <ul className="sr-only">
        {markets.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
    </section>
  );
}
