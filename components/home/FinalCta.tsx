import { Container, Action } from "@/components/ui";
import { site } from "@/lib/site";

/* The same fork the page opened on, closed. One route each, not six. */
const doors = [
  {
    numeral: "I",
    kicker: "If you are looking for a role",
    title: "Send your CV",
    body: "One file. You will hear back from a person within a business day, with the reason either way.",
    href: site.pages.candidates,
    meta: "Free · always paid by the employer",
  },
  {
    numeral: "II",
    kicker: "If you are hiring",
    title: "Book a hiring call",
    body: "Tell me the markets and the roles. Thirty minutes, no obligation, and an honest read even if the answer is not yet.",
    href: site.booking.hiring,
    meta: "30 minutes · founder to founder",
  },
];

const direct = [
  { k: "Email", v: site.email, href: `mailto:${site.email}` },
  { k: "Call or text", v: site.phone, href: site.phoneHref },
  { k: "LinkedIn", v: "linkedin.com/in/harm-linnecke", href: site.linkedin },
];

export function FinalCta() {
  return (
    <section id="contact" className="bg-[color:var(--color-ink-900)]">
      <Container className="py-20 sm:py-28">
        <div className="rule-b-dark flex items-baseline justify-between gap-6 pb-4">
          <span className="folio text-[color:var(--color-sand-400)]">
            Chapter six · Start a conversation
          </span>
          <span className="folio text-[color:var(--color-sand-400)]">
            Structured Talent
          </span>
        </div>

        <div className="mt-12 grid gap-x-16 gap-y-10 lg:grid-cols-[1.05fr_0.95fr]">
          <h2 className="display max-w-[12ch] text-[clamp(2.5rem,6vw,4.5rem)] text-[color:var(--color-paper-50)]">
            Let&rsquo;s build{" "}
            <span className="accent text-[color:var(--color-gold-300)]">
              your sales engine.
            </span>
          </h2>
          <p className="max-w-[42ch] self-end text-[1.0625rem] leading-[1.8] text-pretty text-[color:var(--color-sand-200)] sm:text-[1.125rem]">
            No forms, no funnels, no chasing. I read every message myself and
            reply within one business day. The clearer you are about the market
            and the role, the more useful the first reply can be.
          </p>
        </div>

        <ol className="mt-16">
          {doors.map((d) => (
            <li key={d.title} className="rule-t-dark">
              <a
                href={d.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group grid gap-x-12 gap-y-4 py-10 sm:grid-cols-[3rem_1fr] lg:grid-cols-[3rem_20rem_1fr_auto]"
              >
                <span className="numeral text-[1.5rem] text-[color:var(--color-gold-400)]">
                  {d.numeral}
                </span>
                <span>
                  <span className="meta-light block">{d.kicker}</span>
                  <span className="title mt-2 block text-[clamp(1.5rem,2.8vw,2rem)] text-[color:var(--color-paper-50)]">
                    {d.title}
                  </span>
                </span>
                <span className="max-w-[50ch] text-[1.0625rem] leading-[1.75] text-[color:var(--color-sand-300)]">
                  {d.body}
                  <span className="meta-light mt-3 block">{d.meta}</span>
                </span>
                <span className="folio self-center text-[color:var(--color-gold-300)] transition-transform duration-200 group-hover:translate-x-1.5">
                  Open →
                </span>
              </a>
            </li>
          ))}
          <li className="rule-t-dark" />
        </ol>

        {/* Direct routes. The audit found the LinkedIn printed as unclickable
            text, so all three of these are real links. */}
        <dl className="mt-14 grid gap-x-14 gap-y-8 sm:grid-cols-3">
          {direct.map((d) => (
            <div key={d.k}>
              <dt className="meta-light">{d.k}</dt>
              <dd className="mt-2">
                <a
                  href={d.href}
                  {...(d.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                  className="text-[1.0625rem] text-[color:var(--color-paper-50)] underline decoration-[color:var(--color-gold-400)]/50 underline-offset-4 transition-colors hover:decoration-[color:var(--color-paper-50)]"
                >
                  {d.v}
                </a>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-14">
          <Action href={site.booking.strategy} tone="paper">
            Or just book thirty minutes
          </Action>
        </div>
      </Container>
    </section>
  );
}
