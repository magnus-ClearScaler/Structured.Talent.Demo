import { Container } from "@/components/ui";
import { LinkedIn } from "@/components/Icons";
import { Wordmark } from "@/components/Header";
import { site } from "@/lib/site";

const columns = [
  {
    heading: "Services",
    links: [
      { label: "Sales hiring, in-market", href: site.pages.employers },
      { label: "Custom sales playbook", href: site.pages.playbookHub },
      { label: "Fractional recruiter", href: site.booking.fractional },
      { label: "For candidates", href: site.pages.candidates },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: site.pages.about },
      { label: "Sample playbook", href: site.pages.playbookHub },
      { label: "Imprint", href: site.pages.imprint },
      { label: "Privacy policy", href: site.pages.privacy },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: site.email, href: `mailto:${site.email}` },
      { label: site.phone, href: site.phoneHref },
      { label: "Book a strategy call", href: site.booking.strategy },
      { label: "LinkedIn", href: site.linkedin },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[color:var(--color-ink-950)] pt-16 pb-10">
      <Container>
        <div className="grid gap-12 border-b border-[color:var(--color-line-dark)] pb-12 lg:grid-cols-[1.3fr_2fr]">
          <div className="max-w-sm">
            <Wordmark tone="light" />
            <p className="mt-5 text-[0.9375rem] leading-[1.7] text-[color:var(--color-sand-300)]">
              Multilingual sales recruitment, fractional recruiting and GTM advisory
              for companies scaling into DACH and the wider EMEA market.
            </p>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-2.5 border border-[color:var(--color-line-dark)] px-4 py-2.5 text-[0.8125rem] text-[color:var(--color-sand-200)] transition-colors hover:border-[color:var(--color-gold-400)]/60 hover:text-[color:var(--color-gold-300)]"
            >
              <LinkedIn className="h-3.5 w-3.5" />
              Follow the writing on LinkedIn
            </a>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((c) => (
              <div key={c.heading}>
                <p className="font-[family-name:var(--font-mono)] text-[0.6875rem] tracking-[0.16em] text-[color:var(--color-gold-300)] uppercase">
                  {c.heading}
                </p>
                <ul className="mt-5 space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        {...(l.href.startsWith("http")
                          ? { target: "_blank", rel: "noreferrer noopener" }
                          : {})}
                        className="text-[0.875rem] text-[color:var(--color-sand-300)] transition-colors hover:text-[color:var(--color-paper-50)]"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 font-[family-name:var(--font-mono)] text-[0.6875rem] tracking-[0.06em] text-[color:var(--color-sand-400)] sm:flex-row sm:items-center sm:justify-between">
          <p>{site.licence}</p>
          <p>
            © 2026 {site.name} · {site.city}
          </p>
        </div>
      </Container>
    </footer>
  );
}
