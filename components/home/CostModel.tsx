"use client";

import { useState } from "react";
import { Container, Label } from "@/components/ui";
import { ArrowRight } from "@/components/Icons";
import { site } from "@/lib/site";

/* Formatted by hand rather than with Intl, so the server render and the first
   client render are byte-identical whatever locale the visitor carries. */
function money(n: number, symbol: string) {
  const rounded = Math.round(n / 100) * 100;
  const s = String(rounded);
  let out = "";
  for (let i = 0; i < s.length; i++) {
    if (i > 0 && (s.length - i) % 3 === 0) out += ",";
    out += s[i];
  }
  return `${symbol}${out}`;
}

const CURRENCIES = [
  { code: "EUR", symbol: "€" },
  { code: "GBP", symbol: "£" },
  { code: "USD", symbol: "$" },
] as const;

/* A manager on roughly this, fully loaded. Coaching time is charged against
   it rather than pretended to be free. */
const MANAGER_LOADED = 90_000;

function Slider({
  label,
  hint,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  hint: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  const id = label.toLowerCase().replace(/[^a-z]+/g, "-");
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label
          htmlFor={id}
          className="font-[family-name:var(--font-mono)] text-[0.6875rem] tracking-[0.12em] text-[color:var(--color-sand-300)] uppercase"
        >
          {label}
        </label>
        <span className="num text-[1.0625rem] text-[color:var(--color-gold-300)]">
          {display}
        </span>
      </div>
      <input
        id={id}
        type="range"
        className="slider mt-3"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <p className="mt-2 text-[0.75rem] leading-[1.5] text-[color:var(--color-sand-400)]">
        {hint}
      </p>
    </div>
  );
}

export function CostModel() {
  const [currency, setCurrency] = useState(0);
  const [base, setBase] = useState(45_000);
  const [oncost, setOncost] = useState(20);
  const [tooling, setTooling] = useState(4_800);
  const [ramp, setRamp] = useState(4);
  const [mgmt, setMgmt] = useState(15);
  const [mishire, setMishire] = useState(30);
  const [team, setTeam] = useState(1);

  const symbol = CURRENCIES[currency].symbol;

  const onCostCash = base * (oncost / 100);
  const loadedAnnual = base + onCostCash + tooling;
  /* Half output during ramp: you pay the full loaded cost, you get part of
     the number. Conservative, and easy to defend in a room. */
  const rampCash = (loadedAnnual / 12) * ramp * 0.5;
  const mgmtCash = MANAGER_LOADED * (mgmt / 100);
  /* Replacement plus lost pipeline, probability-weighted rather than assumed. */
  const mishireCash = (mishire / 100) * (base * 0.75 + rampCash);

  const perHire = base + onCostCash + tooling + rampCash + mgmtCash + mishireCash;
  const total = perHire * team;
  const multiple = (perHire / base).toFixed(1);

  const lines = [
    { k: "Base salary", v: base },
    { k: "Employer on-costs", v: onCostCash },
    { k: "Tooling & data", v: tooling },
    { k: "Ramp, lost productivity", v: rampCash },
    { k: "Management time", v: mgmtCash },
    { k: "Mis-hire risk, weighted", v: mishireCash },
  ];

  return (
    <section id="cost" className="relative overflow-hidden bg-[color:var(--color-ink-950)] py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 60% at 15% 0%, rgba(201,162,39,0.13), transparent 62%)",
        }}
      />

      <Container className="relative">
        <div className="max-w-3xl">
          <Label tone="light">Hiring cost reality check</Label>
          <h2 className="h-section mt-5 text-[clamp(2rem,4.4vw,3.25rem)] text-[color:var(--color-paper-50)] text-balance">
            The salary is <span className="accent text-[color:var(--color-gold-300)]">the small number.</span>
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-[1.7] text-pretty text-[color:var(--color-sand-200)]">
            Most teams budget an SDR or BDR by their base salary. The real,
            fully-loaded cost sits well above it once employer costs, tooling,
            ramp, management time and the odds of a mis-hire are counted. Move the
            sliders for your own numbers.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* ── Inputs */}
          <div>
            <div className="flex items-center justify-between gap-4 border-b border-[color:var(--color-line-dark)] pb-5">
              <p className="font-[family-name:var(--font-mono)] text-[0.6875rem] tracking-[0.16em] text-[color:var(--color-gold-300)] uppercase">
                Your inputs
              </p>
              <div className="flex" role="group" aria-label="Currency">
                {CURRENCIES.map((c, i) => (
                  <button
                    key={c.code}
                    type="button"
                    onClick={() => setCurrency(i)}
                    aria-pressed={currency === i}
                    className={`border px-3 py-1.5 font-[family-name:var(--font-mono)] text-[0.6875rem] tracking-[0.1em] transition-colors ${
                      currency === i
                        ? "border-[color:var(--color-gold-400)] bg-[color:var(--color-gold-400)] text-[color:var(--color-ink-950)]"
                        : "border-[color:var(--color-line-dark)] text-[color:var(--color-sand-300)] hover:border-[color:var(--color-gold-400)]/50"
                    } ${i > 0 ? "-ml-px" : ""}`}
                  >
                    {c.symbol} {c.code}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              <Slider
                label="SDR / BDR base salary"
                hint="What you'd put in the job ad. SDR and BDR are the same role in most orgs."
                value={base}
                display={money(base, symbol)}
                min={28000}
                max={95000}
                step={1000}
                onChange={setBase}
              />
              <Slider
                label="Ramp to full productivity"
                hint="Months before they hit target. You pay full cost and get partial output."
                value={ramp}
                display={`${ramp} mo`}
                min={0}
                max={12}
                step={1}
                onChange={setRamp}
              />
              <Slider
                label="Mis-hire probability"
                hint="Odds this hire doesn't work out. The line below is risk-weighted, not guaranteed."
                value={mishire}
                display={`${mishire}%`}
                min={0}
                max={70}
                step={5}
                onChange={setMishire}
              />
              <Slider
                label="Team size you're planning"
                hint="Cost scales per head. Set this to the number of reps you intend to run."
                value={team}
                display={String(team)}
                min={1}
                max={12}
                step={1}
                onChange={setTeam}
              />
              <Slider
                label="Employer on-costs"
                hint="Employer taxes, pension and benefits on top of salary. Varies by country."
                value={oncost}
                display={`${oncost}%`}
                min={0}
                max={40}
                step={1}
                onChange={setOncost}
              />
              <Slider
                label="Tooling & data per head"
                hint="CRM seat, dialer, data and intent tools, sales engagement platform."
                value={tooling}
                display={money(tooling, symbol)}
                min={0}
                max={12000}
                step={200}
                onChange={setTooling}
              />
              <Slider
                label="Management time on them"
                hint={`Share of a manager's week spent coaching this hire, manager on ~${symbol}90k loaded.`}
                value={mgmt}
                display={`${mgmt}%`}
                min={0}
                max={40}
                step={1}
                onChange={setMgmt}
              />
            </div>
          </div>

          {/* ── Ledger */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-[color:var(--color-line-dark)] bg-[color:var(--color-ink-900)] p-8 sm:p-9">
              <p className="font-[family-name:var(--font-mono)] text-[0.6875rem] tracking-[0.16em] text-[color:var(--color-gold-300)] uppercase">
                True first-year cost
              </p>

              <dl className="mt-7 space-y-0">
                {lines.map((l) => (
                  <div
                    key={l.k}
                    className="flex items-baseline justify-between gap-4 border-b border-[color:var(--color-line-dark)] py-3"
                  >
                    <dt className="text-[0.875rem] text-[color:var(--color-sand-300)]">{l.k}</dt>
                    <dd className="num text-[1rem] text-[color:var(--color-paper-50)]">
                      {money(l.v, symbol)}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-7">
                <p className="font-[family-name:var(--font-mono)] text-[0.6875rem] tracking-[0.14em] text-[color:var(--color-sand-400)] uppercase">
                  True cost per hire
                </p>
                <p className="num mt-2 text-[clamp(2.25rem,5vw,3rem)] leading-none text-[color:var(--color-gold-300)]">
                  {money(perHire, symbol)}
                </p>
                <p className="mt-3 text-[0.875rem] text-[color:var(--color-sand-300)]">
                  {multiple}× the number in the job ad.
                </p>
              </div>

              {team > 1 ? (
                <div className="mt-6 border-t border-[color:var(--color-line-dark)] pt-6">
                  <p className="font-[family-name:var(--font-mono)] text-[0.6875rem] tracking-[0.14em] text-[color:var(--color-sand-400)] uppercase">
                    Across {team} hires
                  </p>
                  <p className="num mt-2 text-[1.75rem] leading-none text-[color:var(--color-paper-50)]">
                    {money(total, symbol)}
                  </p>
                </div>
              ) : null}

              <p className="mt-7 border-t border-[color:var(--color-line-dark)] pt-6 text-[0.875rem] leading-[1.65] text-[color:var(--color-sand-200)]">
                The biggest hidden cost isn&rsquo;t on the list. It is{" "}
                <em className="text-[color:var(--color-gold-300)] not-italic">the wrong hire</em>.
                Get the first one right and ramp, management drag and mis-hire risk
                all shrink at once.
              </p>

              <a
                href={site.booking.hiring}
                target="_blank"
                rel="noreferrer noopener"
                className="group mt-7 inline-flex w-full items-center justify-center gap-2.5 bg-[color:var(--color-gold-400)] px-6 py-3.5 text-[0.9375rem] font-medium text-[color:var(--color-ink-950)] transition-colors hover:bg-[color:var(--color-gold-300)]"
              >
                Hire the right one
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>

            <p className="mt-5 text-[0.75rem] leading-[1.6] text-[color:var(--color-sand-400)]">
              Illustrative model for planning, not a quote. Figures are estimates and
              vary by market, role and company. The mis-hire line is
              probability-weighted, covering replacement and lost pipeline, and is
              not a guaranteed cost.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
