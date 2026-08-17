import { Container, Button } from "@/components/ui";
import { site } from "@/lib/site";

/* The same two routes the page opened on, closed. One each, not six. */
const doors = [
  {
    kicker: "If you are hiring",
    title: "Book a hiring call",
    body: "Tell me the markets and the roles. Thirty minutes, no obligation, and an honest read even if the answer is not yet.",
    href: site.booking.hiring,
    meta: "Thirty minutes, founder to founder",
    primary: true,
  },
  {
    kicker: "If you are looking for a role",
    title: "Send your CV",
    body: "One file. You will hear back from me within a business day, with the reason either way.",
    href: site.pages.candidates,
    meta: "Free, and always paid by the employer",
    primary: false,
  },
];

const direct = [
  { k: "Email", v: site.email, href: `mailto:${site.email}` },
  { k: "Call or text", v: site.phone, href: site.phoneHref },
  { k: "LinkedIn", v: "linkedin.com/in/harm-linnecke", href: site.linkedin },
];

export function FinalCta() {
  return (
    <section id="contact" className="bg-[color:var(--color-ink-950)] py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <h2 className="h2 on-dark max-w-[14ch] text-[clamp(2rem,4.4vw,3.25rem)]">
            Let&rsquo;s build your sales engine
          </h2>
          <p className="lead-dark max-w-[46ch] self-end text-pretty">
            No forms and no funnels. I read every message myself and reply within
            one business day. The clearer you are about the market and the role,
            the more useful the first reply will be.
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-[color:var(--color-line-dark)] lg:grid-cols-2">
          {doors.map((d) => (
            <a
              key={d.title}
              href={d.href}
              target="_blank"
              rel="noreferrer noopener"
              className={`group flex flex-col justify-between p-8 transition-colors duration-300 sm:p-10 ${
                d.primary
                  ? "bg-white hover:bg-[color:var(--color-surface-2)]"
                  : "bg-[color:var(--color-ink-900)] hover:bg-[color:var(--color-ink-800)]"
              }`}
            >
              <span>
                <span
                  className={`text-[0.875rem] font-medium ${
                    d.primary
                      ? "text-[color:var(--color-brass-700)]"
                      : "text-[color:var(--color-brass-400)]"
                  }`}
                >
                  {d.kicker}
                </span>
                <span
                  className={`h2 mt-4 block text-[clamp(1.5rem,2.6vw,2rem)] ${
                    d.primary ? "" : "on-dark"
                  }`}
                >
                  {d.title}
                </span>
                <span
                  className={`mt-3 block max-w-[42ch] text-[0.9375rem] leading-[1.7] ${
                    d.primary
                      ? "text-[color:var(--color-body)]"
                      : "text-[color:var(--color-onink-body)]"
                  }`}
                >
                  {d.body}
                </span>
              </span>

              <span className="mt-10 flex items-baseline justify-between gap-6">
                <span
                  className={`text-[0.8125rem] ${
                    d.primary
                      ? "text-[color:var(--color-mute)]"
                      : "text-[color:var(--color-onink-mute)]"
                  }`}
                >
                  {d.meta}
                </span>
                <span
                  aria-hidden="true"
                  className={`text-[1.125rem] transition-transform duration-200 group-hover:translate-x-1.5 ${
                    d.primary ? "text-[color:var(--color-ink)]" : "text-white"
                  }`}
                >
                  →
                </span>
              </span>
            </a>
          ))}
        </div>

        {/* The audit found the LinkedIn printed as unclickable text, so all
            three of these are real links. */}
        <dl className="mt-14 grid gap-8 border-t border-[color:var(--color-line-dark)] pt-10 sm:grid-cols-3">
          {direct.map((d) => (
            <div key={d.k}>
              <dt className="text-[0.875rem] text-[color:var(--color-onink-mute)]">{d.k}</dt>
              <dd className="mt-2">
                <a
                  href={d.href}
                  {...(d.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                  className="text-[1rem] text-white underline decoration-[color:var(--color-brass-500)]/60 underline-offset-4 transition-colors hover:decoration-white"
                >
                  {d.v}
                </a>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10">
          <Button href={site.booking.strategy} tone="outline-dark">
            Or just book thirty minutes
          </Button>
        </div>
      </Container>
    </section>
  );
}
