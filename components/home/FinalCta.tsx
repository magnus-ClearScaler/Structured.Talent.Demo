import { Container, Action } from "@/components/ui";
import { site } from "@/lib/site";

/* The same two routes the page opened on, closed. One each, not six. */
const doors = [
  {
    kicker: "If you are looking for a role",
    title: "Send your CV",
    body: "One file. You will hear back from me within a business day, with the reason either way.",
    href: site.pages.candidates,
    meta: "Free, and always paid by the employer",
  },
  {
    kicker: "If you are hiring",
    title: "Book a hiring call",
    body: "Tell me the markets and the roles. Thirty minutes, no obligation, and an honest read even if the answer is not yet.",
    href: site.booking.hiring,
    meta: "Thirty minutes, founder to founder",
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
      <Container className="py-16 sm:py-20">
        <div className="rule-t-dark grid gap-x-16 gap-y-8 pt-8 lg:grid-cols-[1fr_1fr]">
          <h2 className="title max-w-[16ch] text-[clamp(1.875rem,4vw,3rem)] text-[color:var(--color-paper-50)]">
            Let&rsquo;s build your sales engine
          </h2>
          <p className="max-w-[46ch] self-end text-[1.0625rem] leading-[1.75] text-pretty text-[color:var(--color-sand-200)]">
            No forms and no funnels. I read every message myself and reply within
            one business day. The clearer you are about the market and the role,
            the more useful the first reply will be.
          </p>
        </div>

        <ol className="mt-14">
          {doors.map((d) => (
            <li key={d.title} className="rule-t-dark">
              <a
                href={d.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group grid gap-x-10 gap-y-3 py-8 sm:grid-cols-[18rem_1fr] lg:grid-cols-[18rem_1fr_auto]"
              >
                <span>
                  <span className="label-light block">{d.kicker}</span>
                  <span className="title mt-1.5 block text-[clamp(1.375rem,2.4vw,1.75rem)] text-[color:var(--color-paper-50)]">
                    {d.title}
                  </span>
                </span>
                <span className="max-w-[52ch] text-[1.0625rem] leading-[1.75] text-[color:var(--color-sand-300)]">
                  {d.body}
                  <span className="label-light mt-2 block">{d.meta}</span>
                </span>
                <span className="self-center text-[1rem] text-[color:var(--color-paper-50)] transition-transform duration-200 group-hover:translate-x-1.5">
                  →
                </span>
              </a>
            </li>
          ))}
          <li className="rule-t-dark" />
        </ol>

        {/* The audit found the LinkedIn printed as unclickable text, so all
            three of these are real links. */}
        <dl className="mt-12 grid gap-x-14 gap-y-7 sm:grid-cols-3">
          {direct.map((d) => (
            <div key={d.k}>
              <dt className="label-light">{d.k}</dt>
              <dd className="mt-1.5">
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

        <div className="mt-12">
          <Action href={site.booking.strategy} tone="paper">
            Or just book thirty minutes
          </Action>
        </div>
      </Container>
    </section>
  );
}
