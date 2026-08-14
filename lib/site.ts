/**
 * Every outbound destination on the page, in one place.
 *
 * All of these are the client's own live destinations, read off
 * structuredtalent.com on 14 August 2026. The audit found the LinkedIn
 * address printed as unclickable text and three booking calendars that only
 * existed on the homepage — so they are treated as first-class here.
 */
export const site = {
  name: "Structured Talent",
  url: "https://structured-talent-demo.vercel.app",
  legalName: "Structured Talent",
  founder: "Harm Linnecke",
  email: "office@structuredtalent.com",
  phone: "+353 89 980 0297",
  phoneHref: "tel:+353899800297",
  city: "Dublin 8, Ireland",
  licence: "Licensed by the WRC · Employment Agency Licence EA 5660",
  linkedin: "https://www.linkedin.com/in/harm-linnecke-5b62092a/",
  book: "https://us.amazon.com/Structured-Prospecting-Building-Predictable-Pipeline/dp/B0G7W8ZZF1",

  /* Three intents, three calendars. Very few solo operators separate these. */
  booking: {
    strategy: "https://calendar.app.google/GL2o8mcZ9UhhBmZg8",
    hiring: "https://calendar.app.google/abV2y5kfkVdprxv96",
    fractional: "https://calendar.app.google/n9peon2DbW2NboVY9",
    dach: "https://calendar.app.google/Xxe9tyaQ2SfReSpG7",
  },

  /* Pages that still live on the current site. Absolute, so they resolve
     from this front page rather than 404 inside the rebuild. */
  pages: {
    playbookHub: "https://structuredtalent.com/playbook-hub",
    usPlaybook: "https://structuredtalent.com/usplaybook",
    emeaPlaybook: "https://structuredtalent.com/emea-playbook",
    employers: "https://structuredtalent.com/hiretalent",
    candidates: "https://structuredtalent.com/candidates",
    about: "https://structuredtalent.com/about",
    imprint: "https://structuredtalent.com/imprint",
    privacy: "https://structuredtalent.com/privacy-policy",
  },
} as const;
