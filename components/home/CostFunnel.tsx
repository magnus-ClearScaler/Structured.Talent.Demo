"use client";

import { useState } from "react";
import { Container, Label } from "@/components/ui";
import { ArrowRight } from "@/components/Icons";
import { site } from "@/lib/site";

/**
 * The same argument the seven-slider calculator made, as three taps.
 *
 * Sliders put the work on the visitor and ask them to have opinions about
 * employer on-costs before they have agreed there is a problem. Three choices
 * and one number gets to the point, and every assumption the sliders used to
 * expose is still printed underneath — just as a footnote instead of a task.
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
    const ramp = (loaded / 12) * RAMP_MONTHS * 0.5;
    const mgmt = MANAGER_LOADED * MGMT_SHARE;
    const risk = mishire * (base * 0.75 + ramp);
    perHire = base + onCost + TOOLING + ramp + mgmt + risk;
    lines = [
      { k: "Base salary", v: base },
      { k: "Employer on-costs", v: onCost },
      { k: "Tooling & data", v: TOOLING },
      { k: "Ramp, lost productivity", v: ramp },
      { k: "Management time", v: mgmt },
      { k: "Mis-hire risk, weighted", v: risk },
    ];
  }

  return (
    <section id="cost" className="relative overflow-hidden bg-[color:var(--color-ink-950)] py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 55% at 50% 0%, rgba(201,162,39,0.12), transparent 62%)",
        }}
      />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <Label tone="light">Before you write the job ad</Label>
          <h2 className="h-section mt-5 text-[clamp(2rem,4.4vw,3.25rem)] text-[color:var(--color-paper-50)] text-balance">
            The salary is{" "}
            <span className="accent text-[color:var(--color-gold-300)]">the small number.</span>
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-[1.7] text-pretty text-[color:var(--color-sand-200)]">
            Three questions, one number: what the first year of that hire really
            costs once ramp, management time and the odds of getting it wrong
            are counted.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          {/* Progress */}
          <div className="flex items-center justify-center gap-2.5">
            {questions.map((q, i) => (
              <span
                key={q.key}
                aria-hidden="true"
                className={`h-1 w-12 transition-colors duration-300 ${
                  i < step ? "bg-[color:var(--color-gold-400)]" : "bg-[color:var(--color-line-dark)]"
                }`}
              />
            ))}
          </div>

          {!done ? (
            <div className="mt-10">
              <p className="text-center font-[family-name:var(--font-mono)] text-[0.6875rem] tracking-[0.14em] text-[color:var(--color-sand-400)] uppercase">
                Question {step + 1} of {questions.length}
              </p>
              <h3 className="h-section mt-4 text-center text-[clamp(1.5rem,3vw,2rem)] text-[color:var(--color-paper-50)] text-balance">
                {questions[step].q}
              </h3>

              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                {questions[step].options.map((o) => (
                  <button
                    key={o.label}
                    type="button"
                    onClick={() => pick(o.v)}
                    className="group border border-[color:var(--color-line-dark)] bg-[color:var(--color-ink-900)] px-6 py-6 text-center transition-colors duration-200 hover:border-[color:var(--color-gold-400)] hover:bg-[color:var(--color-ink-800)]"
                  >
                    <span className="block font-[family-name:var(--font-serif)] text-[1.125rem] text-[color:var(--color-paper-50)] transition-colors group-hover:text-[color:var(--color-gold-300)]">
                      {o.label}
                    </span>
                  </button>
                ))}
              </div>

              {step > 0 ? (
                <div className="mt-7 text-center">
                  <button
                    type="button"
                    onClick={back}
                    className="font-[family-name:var(--font-mono)] text-[0.6875rem] tracking-[0.12em] text-[color:var(--color-sand-400)] uppercase transition-colors hover:text-[color:var(--color-gold-300)]"
                  >
                    ← Back
                  </button>
                </div>
              ) : null}
            </div>
          ) : (
            <div className="mt-10">
              <div className="border border-[color:var(--color-line-dark)] bg-[color:var(--color-ink-900)] p-8 sm:p-10">
                <p className="text-center font-[family-name:var(--font-mono)] text-[0.6875rem] tracking-[0.16em] text-[color:var(--color-gold-300)] uppercase">
                  True first-year cost, per hire
                </p>
                <p className="num mt-4 text-center text-[clamp(2.75rem,8vw,4.5rem)] leading-none text-[color:var(--color-gold-300)]">
                  {money(perHire)}
                </p>
                <p className="mt-4 text-center text-[1.0625rem] text-[color:var(--color-sand-200)]">
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

                <dl className="mx-auto mt-9 max-w-md">
                  {lines.map((l) => (
                    <div
                      key={l.k}
                      className="flex items-baseline justify-between gap-4 border-b border-[color:var(--color-line-dark)] py-2.5"
                    >
                      <dt className="text-[0.875rem] text-[color:var(--color-sand-300)]">{l.k}</dt>
                      <dd className="num text-[0.9375rem] text-[color:var(--color-paper-50)]">
                        {money(l.v)}
                      </dd>
                    </div>
                  ))}
                </dl>

                <p className="mx-auto mt-8 max-w-lg text-center text-[0.9375rem] leading-[1.65] text-[color:var(--color-sand-200)]">
                  The biggest cost isn&rsquo;t on the list. It is{" "}
                  <span className="text-[color:var(--color-gold-300)]">the wrong hire</span>.
                  Get the first one right and ramp, management drag and mis-hire
                  risk all shrink at once.
                </p>

                <div className="mt-8 flex flex-col items-center gap-4">
                  <a
                    href={site.booking.hiring}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex w-full items-center justify-center gap-2.5 bg-[color:var(--color-gold-400)] px-7 py-4 text-[0.9375rem] font-medium text-[color:var(--color-ink-950)] transition-colors hover:bg-[color:var(--color-gold-300)] sm:w-auto"
                  >
                    Get the first one right
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                  <button
                    type="button"
                    onClick={reset}
                    className="font-[family-name:var(--font-mono)] text-[0.6875rem] tracking-[0.12em] text-[color:var(--color-sand-400)] uppercase transition-colors hover:text-[color:var(--color-gold-300)]"
                  >
                    Start again
                  </button>
                </div>
              </div>

              <p className="mx-auto mt-6 max-w-2xl text-center text-[0.75rem] leading-[1.7] text-[color:var(--color-sand-400)]">
                Assumes 20% employer on-costs, {money(TOOLING)}{" "}of tooling and data
                per head, a four-month ramp at half productivity, and 15% of a
                manager&rsquo;s week on coaching. The mis-hire line is
                probability-weighted, covering replacement and lost pipeline.
                Illustrative model for planning, not a quote.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
