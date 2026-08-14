import { site } from "@/lib/site";

/**
 * The audit noted that AI answer engines and Google are both reading this site
 * through the template's leftovers. Explicit schema tells them what the
 * business is, who runs it, and that the person and the company are the same
 * story — which for a solo, personal-credibility operator is the whole point.
 */
export function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "EmploymentAgency"],
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        email: site.email,
        telephone: site.phone,
        description:
          "Multilingual sales recruitment, fractional recruiting and GTM advisory for companies scaling into DACH and the wider EMEA market.",
        founder: { "@id": `${site.url}/#harm` },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dublin",
          addressRegion: "Dublin 8",
          addressCountry: "IE",
        },
        areaServed: ["DE", "AT", "CH", "IE", "GB", "ES", "US"],
        sameAs: [site.linkedin],
        knowsLanguage: ["de", "en", "es"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: [
            "Sales hiring, in-market",
            "Custom sales playbook",
            "Fractional recruiter, DACH and EMEA",
          ].map((n) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: n },
          })),
        },
      },
      {
        "@type": "Person",
        "@id": `${site.url}/#harm`,
        name: site.founder,
        jobTitle: "Founder, GTM growth partner",
        url: site.linkedin,
        sameAs: [site.linkedin, site.book],
        worksFor: { "@id": `${site.url}/#organization` },
        knowsLanguage: ["de", "en", "es"],
      },
      {
        "@type": "Book",
        name: "Structured Prospecting",
        author: { "@id": `${site.url}/#harm` },
        url: site.book,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
