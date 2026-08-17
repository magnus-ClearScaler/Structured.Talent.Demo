import { Container } from "@/components/ui";
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
      { label: "Book a call", href: site.booking.strategy },
      { label: "LinkedIn", href: site.linkedin },
    ],
  },
];

/* A colophon rather than a footer: who made it, where, under what licence. */
export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-line-dark)] bg-[color:var(--color-ink-950)] pt-16 pb-10">
      <Container>
        <div className="grid gap-12 border-b border-[color:var(--color-line-dark)] pb-12 lg:grid-cols-[1.2fr_2fr]">
          <div className="max-w-[38ch]">
            <Wordmark tone="light" />
            <p className="mt-6 text-[0.9375rem] leading-[1.7] text-[color:var(--color-onink-body)]">
              Multilingual sales recruitment, fractional recruiting and GTM
              advisory for companies scaling into DACH and the wider EMEA market.
            </p>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-block border-b border-[color:var(--color-brass-500)]/60 pb-1 text-[0.9375rem] text-white transition-colors hover:border-white"
            >
              Harm on LinkedIn
            </a>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((c) => (
              <div key={c.heading}>
                <p className="text-[0.875rem] font-medium text-white">{c.heading}</p>
                <ul className="mt-5 space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        {...(l.href.startsWith("http")
                          ? { target: "_blank", rel: "noreferrer noopener" }
                          : {})}
                        className="text-[0.875rem] text-[color:var(--color-onink-mute)] transition-colors hover:text-white"
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

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.8125rem] text-[color:var(--color-onink-mute)]">{site.licence}</p>
          <p className="text-[0.8125rem] text-[color:var(--color-onink-mute)]">
            © 2026 {site.name} · {site.city}
          </p>
        </div>
      </Container>
    </footer>
  );
}
