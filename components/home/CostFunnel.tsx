"use client";

import { useState } from "react";
import { Container, Action } from "@/components/ui";
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
    <section id="cost" className="paper rule-b">
      <Container className="py-20 sm:py-28">
        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* The argument */}
          <div>
            <p className="folio text-[color:var(--color-gold-700)]">
              An aside · before you write the job ad
            </p>
            <h2 className="display mt-7 max-w-[11ch] text-[clamp(2.25rem,5vw,3.75rem)]">
              The salary is <span className="accent">the small number.</span>
            </h2>
            <p className="mt-8 max-w-[42ch] text-[1.0625rem] leading-[1.8] text-pretty text-[color:var(--color-body)]">
              Most teams budget an SDR by their base salary. The real figure sits
              well above it once employer costs, tooling, ramp, management time
              and the odds of getting it wrong are counted. Three questions, and
              you have the number.
            </p>
          </div>

          {/* The instrument */}
          <div className="rule-t pt-8">
            {!done ? (
              <div>
                <div className="flex items-baseline justify-between gap-6">
                  <p className="folio text-[color:var(--color-mute)]">
                    Question {step + 1} of {questions.length}
                  </p>
                  {step > 0 ? (
                    <button
                      type="button"
                      onClick={back}
                      className="folio text-[color:var(--color-gold-700)] transition-colors hover:text-[color:var(--color-ink-900)]"
                    >
                      ← Back
                    </button>
                  ) : null}
                </div>

                <h3 className="title mt-6 max-w-[20ch] text-[clamp(1.5rem,3vw,2.25rem)]">
                  {questions[step].q}
                </h3>

                <ul className="mt-9">
                  {questions[step].options.map((o) => (
                    <li key={o.label} className="rule-t">
                      <button
                        type="button"
                        onClick={() => pick(o.v)}
                        className="group flex w-full items-baseline justify-between gap-6 py-5 text-left"
                      >
                        <span className="title text-[1.375rem] transition-colors group-hover:text-[color:var(--color-gold-700)]">
                          {o.label}
                        </span>
                        <span className="folio text-[color:var(--color-gold-700)] transition-transform duration-200 group-hover:translate-x-1">
                          Select →
                        </span>
                      </button>
                    </li>
                  ))}
                  <li className="rule-t" />
                </ul>
              </div>
            ) : (
              <div>
                <div className="flex items-baseline justify-between gap-6">
                  <p className="folio text-[color:var(--color-mute)]">
                    True first-year cost, per hire
                  </p>
                  <button
                    type="button"
                    onClick={reset}
                    className="folio text-[color:var(--color-gold-700)] transition-colors hover:text-[color:var(--color-ink-900)]"
                  >
                    Start again
                  </button>
                </div>

                <p className="display tnum mt-6 text-[clamp(3.25rem,10vw,6rem)] text-[color:var(--color-ink-900)]">
                  {money(perHire)}
                </p>
                <p className="mt-4 max-w-[40ch] text-[1.1875rem] leading-[1.6] text-[color:var(--color-body)]">
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
                      className="rule-t flex items-baseline justify-between gap-6 py-2.5"
                    >
                      <dt className="text-[1rem] text-[color:var(--color-body)]">{l.k}</dt>
                      <dd className="tnum text-[1rem] text-[color:var(--color-ink-900)]">
                        {money(l.v)}
                      </dd>
                    </div>
                  ))}
                  <div className="rule-t" />
                </dl>

                <p className="mt-8 max-w-[46ch] text-[1.0625rem] leading-[1.75] text-[color:var(--color-body)]">
                  The biggest cost is not on the list. It is{" "}
                  <span className="accent">the wrong hire</span>. Get the first
                  one right and ramp, management drag and mis-hire risk all shrink
                  at once.
                </p>

                <div className="mt-8">
                  <Action href={site.booking.hiring} tone="ink">
                    Get the first one right
                  </Action>
                </div>

                <p className="mt-8 max-w-[62ch] text-[0.8125rem] leading-[1.75] text-[color:var(--color-mute)]">
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
