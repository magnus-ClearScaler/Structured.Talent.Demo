import { Container, Label } from "@/components/ui";
import { ArrowRight, Calendar, LinkedIn, Mail, Phone } from "@/components/Icons";
import { site } from "@/lib/site";

const routes = [
  {
    tag: "Hiring multilingual talent",
    title: "Build your multilingual sales team",
    body:
      "Tell me the markets you are covering and the roles you are filling. I find people who sell the way those buyers expect to be sold to.",
    href: site.booking.hiring,
    meta: "30 minutes · no obligation",
  },
  {
    tag: "US company entering DACH",
    title: "A DACH sales strategy session",
    body:
      "A native German speaker's read on why the US motion stalls in the German-speaking market, and what works instead. An honest answer, even if it is not yet.",
    href: site.booking.dach,
    meta: "Free · 30 minutes · founder to founder",
  },
  {
    tag: "Fractional recruiting",
    title: "A recruiter in your seat",
    body:
      "One to two days a week, owning sourcing, screening and pipeline for your DACH and EMEA hires as part of your team.",
    href: site.booking.fractional,
    meta: "Rolling · three-month minimum",
  },
];

const direct = [
  {
    icon: Mail,
    k: "Email me directly",
    v: site.email,
    href: `mailto:${site.email}`,
    note: "The fastest way to reach me",
  },
  {
    icon: Phone,
    k: "Call or text",
    v: site.phone,
    href: site.phoneHref,
    note: "Ireland · Mon to Fri",
  },
  {
    icon: LinkedIn,
    k: "Connect on LinkedIn",
    v: "linkedin.com/in/harm-linnecke",
    href: site.linkedin,
    note: "Where the writing goes first",
  },
];

export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[color:var(--color-ink-900)] py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 55% at 80% 0%, rgba(201,162,39,0.14), transparent 60%)",
        }}
      />

      <Container className="relative">
        <div className="max-w-3xl">
          <Label tone="light">Start a conversation</Label>
          <h2 className="h-section mt-5 text-[clamp(2rem,4.6vw,3.25rem)] text-[color:var(--color-paper-50)] text-balance">
            Let&rsquo;s build{" "}
            <span className="accent text-[color:var(--color-gold-300)]">your sales engine.</span>
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-[1.7] text-pretty text-[color:var(--color-sand-200)]">
            Whether you need multilingual sales talent or a playbook the market will
            actually respond to, the fastest route is a short call. No forms, no
            funnels. Pick the conversation that fits, or write to me directly.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {routes.map((r) => (
            <a
              key={r.href}
              href={r.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex flex-col border border-[color:var(--color-line-dark)] bg-[color:var(--color-ink-950)]/60 p-8 transition-colors hover:border-[color:var(--color-gold-400)]/55"
            >
              <p className="label-light">{r.tag}</p>
              <h3 className="h-section mt-4 text-[1.25rem] text-[color:var(--color-paper-50)]">
                {r.title}
              </h3>
              <p className="mt-3 flex-1 text-[0.9375rem] leading-[1.65] text-[color:var(--color-sand-300)]">
                {r.body}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-[color:var(--color-gold-300)]">
                <Calendar className="h-4 w-4" />
                Book a time
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
              <span className="mt-2 font-[family-name:var(--font-mono)] text-[0.6875rem] tracking-[0.08em] text-[color:var(--color-sand-400)]">
                {r.meta}
              </span>
            </a>
          ))}
        </div>

        {/* Direct routes. The audit found the LinkedIn printed as unclickable
            text, so all three of these are real links here. */}
        <div className="mt-14 grid gap-px border-t border-[color:var(--color-line-dark)] sm:grid-cols-3">
          {direct.map((d) => {
            const Icon = d.icon;
            return (
              <a
                key={d.k}
                href={d.href}
                {...(d.href.startsWith("http")
                  ? { target: "_blank", rel: "noreferrer noopener" }
                  : {})}
                className="group border-b border-[color:var(--color-line-dark)] py-7 sm:border-b-0 sm:border-l sm:px-8 sm:first:border-l-0 sm:first:pl-0"
              >
                <span className="flex items-center gap-2.5 font-[family-name:var(--font-mono)] text-[0.6875rem] tracking-[0.14em] text-[color:var(--color-sand-400)] uppercase">
                  <Icon className="h-3.5 w-3.5 text-[color:var(--color-gold-400)]" />
                  {d.k}
                </span>
                <span className="mt-3 block text-[1.0625rem] text-[color:var(--color-paper-50)] transition-colors group-hover:text-[color:var(--color-gold-300)]">
                  {d.v}
                </span>
                <span className="mt-1 block text-[0.8125rem] text-[color:var(--color-sand-400)]">
                  {d.note}
                </span>
              </a>
            );
          })}
        </div>

        <p className="mt-10 max-w-2xl text-[0.9375rem] leading-[1.7] text-[color:var(--color-sand-300)]">
          I read every message myself. Author-led from the first email, same as
          everything else here. Expect a reply within one business day, and the
          clearer you are about your product and target markets, the more useful the
          first reply can be.
        </p>
      </Container>
    </section>
  );
}
