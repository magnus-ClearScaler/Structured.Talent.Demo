import { Container, SectionHead } from "@/components/ui";
import { Quote } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";

const mistakes = [
  {
    n: "01",
    t: "The generalist shortlist",
    d: "A recruiter with no sales background screens on keywords. What arrives is CVs that read well and calls that stall in the first two minutes, in a language nobody on your side can assess.",
  },
  {
    n: "02",
    t: "The translated sequence",
    d: "A US cadence put through a translator reads as pushy to a German buyer. The words are right and the register is wrong. Sie, not Du. Proof, not promises, and the hype turned right down.",
  },
  {
    n: "03",
    t: "The premature retainer",
    d: "A full-time recruiter or an agency retainer signed before hiring volume justifies either. A fractional pair of hands in the seat costs you only the days you actually need.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="border-b border-[color:var(--color-line)] py-20 sm:py-28">
      <Container>
        <SectionHead
          label="The problem we solve"
          title={
            <>
              Most teams don&rsquo;t lose Europe on product.{" "}
              <span className="accent">They lose it on who they hire and how they sell.</span>
            </>
          }
          intro="I work on both. The people first, then the message they carry. And I sold in these markets myself, so I am not guessing at either."
        />

        {/* The index decides the rules and the gutters. `first:`/`last:` would
            not work here: each column sits inside its own Reveal wrapper, so
            every column is simultaneously the first and the last child. */}
        <div className="mt-16 grid border-t border-[color:var(--color-line)] md:grid-cols-3 md:gap-x-12 md:border-t-0">
          {mistakes.map((m, i) => (
            <Reveal key={m.n} delay={i * 90}>
              <div
                className={`h-full border-b border-[color:var(--color-line)] py-9 md:border-b-0 md:py-0 ${
                  i > 0 ? "md:border-l md:border-[color:var(--color-line)] md:pl-12" : ""
                }`}
              >
                <span className="font-[family-name:var(--font-mono)] text-[0.75rem] tracking-[0.16em] text-[color:var(--color-gold-600)]">
                  {m.n}
                </span>
                <h3 className="h-section mt-4 text-[1.375rem]">{m.t}</h3>
                <p className="mt-4 text-[0.9375rem] leading-[1.7] text-pretty text-[color:var(--color-body)]">
                  {m.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* The DACH line, given the room it earns */}
        <Reveal className="mt-20">
          <figure className="mx-auto max-w-4xl border-l-2 border-[color:var(--color-gold-500)] pl-8 sm:pl-12">
            <Quote className="mb-5 h-7 w-7 text-[color:var(--color-gold-500)]/35" />
            <blockquote className="h-section text-[clamp(1.5rem,3vw,2.125rem)] leading-[1.25] text-balance">
              Selling into Germany isn&rsquo;t selling into the US. DACH buyers want
              directness. They want proof, not promises. And they want the hype
              turned right down.
            </blockquote>
            <figcaption className="mt-6 font-[family-name:var(--font-mono)] text-[0.6875rem] tracking-[0.14em] text-[color:var(--color-mute)] uppercase">
              Harm Linnecke · fifteen years selling into that culture
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
