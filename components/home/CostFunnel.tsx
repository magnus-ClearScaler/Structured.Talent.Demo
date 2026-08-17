"use client";

import { useState } from "react";
import { Container, Button } from "@/components/ui";
import { site } from "@/lib/site";

/**
 * The same argument the seven-slider calculator made, as three taps.
 *
 * Sliders put the work on the visitor and ask them to have opinions about
 * employer on-costs before they have agreed there is a problem. Three choices
 * and one number gets to the point, and every assumption the sliders used to
 * expose is still printed underneath — as a footnote instead of a task.
 */

const SALARY = [
  { label: "Around €40k", v: 40_000 },
  { label: "Around €55k", v: 55_000 },
  { label: "Around €70k", v: 70_000 },
];

const TEAM = [
  { label: "One hire", v: 1 },
  { label: "Two or three", v: 3 },
  { label: "Five or more", v: 5 },
];

const RISK = [
  { label: "First hire there", v: 0.4 },
  { label: "Once or twice before", v: 0.3 },
  { label: "We hire there regularly", v: 0.2 },
];

/* Fixed, and stated. These were the four sliders nobody wanted to move. */
const ON_COST = 0.2;
const TOOLING = 4_800;
const RAMP_MONTHS = 4;
const MGMT_SHARE = 0.15;
const MANAGER_LOADED = 90_000;

function money(n: number) {
  const rounded = Math.round(n / 100) * 100;
  const s = String(rounded);
  let out = "";
  for (let i = 0; i < s.length; i++) {
    if (i > 0 && (s.length - i) % 3 === 0) out += ",";
    out += s[i];
  }
  return `€${out}`;
}

const questions = [
  { key: "salary", q: "What are you budgeting as base salary?", options: SALARY },
  { key: "team", q: "How many sellers are you hiring?", options: TEAM },
  { key: "risk", q: "Have you hired into this market before?", options: RISK },
] as const;

export function CostFunnel() {
  const [answers, setAnswers] = useState<number[]>([]);
  const step = answers.length;
  const done = step === questions.length;

  const pick = (v: number) => setAnswers((a) => [...a, v]);
  const back = () => setAnswers((a) => a.slice(0, -1));
  const reset = () => setAnswers([]);

  const [base, team, mishire] = answers;

  let perHire = 0;
  let lines: { k: string; v: number }[] = [];
  if (done) {
    const onCost = base * ON_COST;
    const loaded = base + onCost + TOOLING;
    /* Half output during ramp: you pay the full loaded cost and get part of
       the number. Conservative, and easy to defend in a room. */
    const ramp = (loaded / 12) * RAMP_MONTHS * 0.5;
    const mgmt = MANAGER_LOADED * MGMT_SHARE;
    const risk = mishire * (base * 0.75 + ramp);
    perHire = base + onCost + TOOLING + ramp + mgmt + risk;
    lines = [
      { k: "Base salary", v: base },
      { k: "Employer on-costs", v: onCost },
      { k: "Tooling and data", v: TOOLING },
      { k: "Ramp, lost productivity", v: ramp },
      { k: "Management time", v: mgmt },
      { k: "Mis-hire risk, weighted", v: risk },
    ];
  }

  return (
    <section id="cost" className="bg-[color:var(--color-surface-2)] py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* The argument */}
          <div>
            <p className="eyebrow">Before you write the job ad</p>
            <h2 className="h2 mt-4 max-w-[13ch] text-[clamp(2rem,4.2vw,3.25rem)]">
              The salary is the small number.
            </h2>
            <p className="lead mt-6 max-w-[44ch] text-pretty">
              Most teams budget an SDR by their base salary. The real figure sits
              well above it once employer costs, tooling, ramp, management time
              and the odds of getting it wrong are counted. Three questions, and
              you have the number.
            </p>
          </div>

          {/* The instrument */}
          <div className="border-t border-[color:var(--color-ink)] bg-white p-8 shadow-[var(--shadow-card)] sm:p-10">
            {!done ? (
              <div>
                <div className="flex items-baseline justify-between gap-6">
                  <p className="text-[0.875rem] text-[color:var(--color-mute)]">Question {step + 1} of {questions.length}</p>
                  {step > 0 ? (
                    <button
                      type="button"
                      onClick={back}
                      className="text-[0.875rem] font-medium text-[color:var(--color-brass-700)] transition-colors hover:text-[color:var(--color-ink)]"
                    >
                      Back
                    </button>
                  ) : null}
                </div>

                <h3 className="h3 mt-5 max-w-[22ch] text-[clamp(1.375rem,2.6vw,1.875rem)]">
                  {questions[step].q}
                </h3>

                <ul className="mt-9">
                  {questions[step].options.map((o) => (
                    <li key={o.label} className="border-t border-[color:var(--color-line)]">
                      <button
                        type="button"
                        onClick={() => pick(o.v)}
                        className="group flex w-full items-baseline justify-between gap-6 py-5 text-left"
                      >
                        <span className="text-[1.0625rem] font-medium text-[color:var(--color-ink)] transition-colors group-hover:text-[color:var(--color-brass-700)]">
                          {o.label}
                        </span>
                        <span className="text-[1rem] text-[color:var(--color-brass-600)] transition-transform duration-200 group-hover:translate-x-1">
                          →
                        </span>
                      </button>
                    </li>
                  ))}
                  <li className="border-t border-[color:var(--color-line)]" />
                </ul>
              </div>
            ) : (
              <div>
                <div className="flex items-baseline justify-between gap-6">
                  <p className="text-[0.875rem] text-[color:var(--color-mute)]">True first-year cost, per hire</p>
                  <button
                    type="button"
                    onClick={reset}
                    className="text-[0.875rem] font-medium text-[color:var(--color-brass-700)] transition-colors hover:text-[color:var(--color-ink)]"
                  >
                    Start again
                  </button>
                </div>

                <p className="display tnum mt-5 text-[clamp(3rem,9vw,5rem)]">
                  {money(perHire)}
                </p>
                <p className="mt-4 max-w-[42ch] text-[1.0625rem] leading-[1.6] text-[color:var(--color-body)]">
                  {(perHire / base).toFixed(1)}× the number you were going to put
                  in the job ad
                  {team > 1 ? (
                    <>
                      , and {money(perHire * team)} across{" "}
                      {team === 3 ? "three" : "five"} of them
                    </>
                  ) : null}
                  .
                </p>

                <dl className="mt-10 max-w-[34rem]">
                  {lines.map((l) => (
                    <div
                      key={l.k}
                      className="flex items-baseline justify-between gap-6 border-t border-[color:var(--color-line)] py-2.5"
                    >
                      <dt className="text-[1rem] text-[color:var(--color-body)]">{l.k}</dt>
                      <dd className="tnum text-[1rem] text-[color:var(--color-ink-900)]">
                        {money(l.v)}
                      </dd>
                    </div>
                  ))}
                  <div className="border-t border-[color:var(--color-line)]" />
                </dl>

                <p className="mt-8 max-w-[48ch] text-[1rem] leading-[1.7] text-[color:var(--color-body)]">
                  The biggest cost is not on the list. It is{" "}
                  the wrong hire. Get the first
                  one right and ramp, management drag and mis-hire risk all shrink
                  at once.
                </p>

                <div className="mt-8">
                  <Button href={site.booking.hiring}>Get the first one right</Button>
                </div>

                <p className="mt-8 max-w-[64ch] text-[0.8125rem] leading-[1.7] text-[color:var(--color-mute)]">
                  Assumes 20% employer on-costs, {money(TOOLING)}{" "}of tooling and
                  data per head, a four-month ramp at half productivity, and 15%
                  of a manager&rsquo;s week on coaching. The mis-hire line is
                  probability-weighted, covering replacement and lost pipeline.
                  Illustrative model for planning, not a quote.
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
