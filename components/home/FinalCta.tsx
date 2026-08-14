import { Container, Label } from "@/components/ui";
import { ArrowRight, LinkedIn, Mail, Phone } from "@/components/Icons";
import { site } from "@/lib/site";

/* The same fork the page opened on, closed. One route each, not six. */
const doors = [
  {
    kicker: "I'm hiring",
    title: "Book a hiring call",
    body: "Tell me the markets and the roles. Thirty minutes, no obligation, and an honest read even if the answer is not yet.",
    href: site.booking.hiring,
    meta: "30 minutes · founder to founder",
    dark: true,
  },
  {
    kicker: "I'm a seller",
    title: "Send your CV",
    body: "One file. You will hear back from a person within a business day, with the reason either way.",
    href: site.pages.candidates,
    meta: "Free · always paid by the employer",
    dark: false,
  },
];

const direct = [
  { icon: Mail, k: "Email", v: site.email, href: `mailto:${site.email}` },
  { icon: Phone, k: "Call or text", v: site.phone, href: site.phoneHref },
  { icon: LinkedIn, k: "LinkedIn", v: "linkedin.com/in/harm-linnecke", href: site.linkedin },
];

export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[color:var(--color-ink-900)] py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(75% 55% at 50% 0%, rgba(201,162,39,0.15), transparent 62%)",
        }}
      />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <Label tone="light">Start a conversation</Label>
          <h2 className="h-section mt-5 text-[clamp(2rem,4.6vw,3.25rem)] text-[color:var(--color-paper-50)] text-balance">
            Let&rsquo;s build{" "}
            <span className="accent text-[color:var(--color-gold-300)]">your sales engine.</span>
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-[1.7] text-pretty text-[color:var(--color-sand-200)]">
            No forms, no funnels, no chasing. I read every message myself and
            reply within one business day.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {doors.map((d) => (
            <a
              key={d.title}
              href={d.href}
              target="_blank"
              rel="noreferrer noopener"
              className={`group flex flex-col justify-between p-8 transition-colors duration-300 sm:p-10 ${
                d.dark
                  ? "bg-[color:var(--color-gold-400)] hover:bg-[color:var(--color-gold-300)]"
                  : "border border-[color:var(--color-line-dark)] bg-[color:var(--color-ink-950)]/60 hover:border-[color:var(--color-gold-400)]/60"
              }`}
            >
              <span>
                <span
                  className={
                    d.dark
                      ? "font-[family-name:var(--font-mono)] text-[0.6875rem] font-medium tracking-[0.18em] text-[color:var(--color-ink-900)]/70 uppercase"
                      : "label-light"
                  }
                >
                  {d.kicker}
                </span>
                <span
                  className={`h-section mt-5 block text-[clamp(1.5rem,2.6vw,2rem)] ${
                    d.dark ? "text-[color:var(--color-ink-950)]" : "text-[color:var(--color-paper-50)]"
                  }`}
                >
                  {d.title}
                </span>
                <span
                  className={`mt-4 block max-w-md text-[0.9375rem] leading-[1.7] ${
                    d.dark ? "text-[color:var(--color-ink-900)]/85" : "text-[color:var(--color-sand-300)]"
                  }`}
                >
                  {d.body}
                </span>
              </span>

              <span className="mt-9">
                <span
                  className={`inline-flex items-center gap-2.5 text-[0.9375rem] font-medium ${
                    d.dark ? "text-[color:var(--color-ink-950)]" : "text-[color:var(--color-gold-300)]"
                  }`}
                >
                  {d.dark ? "Pick a time" : "Open the form"}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                </span>
                <span
                  className={`mt-2 block font-[family-name:var(--font-mono)] text-[0.6875rem] tracking-[0.08em] ${
                    d.dark ? "text-[color:var(--color-ink-900)]/60" : "text-[color:var(--color-sand-400)]"
                  }`}
                >
                  {d.meta}
                </span>
              </span>
            </a>
          ))}
        </div>

        {/* Direct routes. The audit found the LinkedIn printed as unclickable
            text, so all three of these are real links. */}
        <div className="mt-12 grid gap-px border-t border-[color:var(--color-line-dark)] sm:grid-cols-3">
          {direct.map((d) => {
            const Icon = d.icon;
            return (
              <a
                key={d.k}
                href={d.href}
                {...(d.href.startsWith("http") ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                className="group border-b border-[color:var(--color-line-dark)] py-6 sm:border-b-0 sm:border-l sm:px-8 sm:first:border-l-0 sm:first:pl-0"
              >
                <span className="flex items-center gap-2.5 font-[family-name:var(--font-mono)] text-[0.6875rem] tracking-[0.14em] text-[color:var(--color-sand-400)] uppercase">
                  <Icon className="h-3.5 w-3.5 text-[color:var(--color-gold-400)]" />
                  {d.k}
                </span>
                <span className="mt-2.5 block text-[1.0625rem] text-[color:var(--color-paper-50)] transition-colors group-hover:text-[color:var(--color-gold-300)]">
                  {d.v}
                </span>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
