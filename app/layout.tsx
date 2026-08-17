import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import { site } from "@/lib/site";

/**
 * The audit's first three findings were all metadata: a duplicate title tag, a
 * meta description still carrying the Webflow template's demo copy, and inner
 * pages titled after the template. One title, one description, written for the
 * buyer.
 */
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Structured Talent · Multilingual sales hiring for DACH & EMEA",
  description:
    "Multilingual sales talent and the playbook to make them land. Founder-led hiring and GTM advisory for companies scaling into DACH and EMEA, and native-language BDR, SDR and AE roles for the people who sell there. Dublin based, fifteen years carrying quota across Europe.",
  keywords: [
    "DACH sales recruitment",
    "multilingual SDR hiring",
    "EMEA sales hiring",
    "fractional recruiter DACH",
    "German speaking sales talent",
    "GTM playbook EMEA",
  ],
  authors: [{ name: site.founder, url: site.linkedin }],
  creator: site.founder,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Structured Talent · Multilingual sales hiring for DACH & EMEA",
    description:
      "The multilingual sales talent to win in Europe, and the playbook to make them land. A DACH market sold into for fifteen years, not one researched.",
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_IE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Structured Talent · Multilingual sales hiring for DACH & EMEA",
    description:
      "The multilingual sales talent to win in Europe, and the playbook to make them land.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} h-full`}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-[color:var(--color-ink-900)] focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-[color:var(--color-paper-50)]"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <StructuredData />
      </body>
    </html>
  );
}
