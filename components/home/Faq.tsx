import { Container, Label, SectionHead } from "@/components/ui";

/* Native <details>, so the accordion costs nothing to ship and still works
   with the keyboard and with a screen reader. */
const companyFaq = [
  {
    q: "How fast is a shortlist?",
    a: "It depends on the language and the seniority, and I will tell you honestly on the first call. What I will not do is send you five CVs on day two to look busy. Every profile you see has been on a call with me first.",
  },
  {
    q: "What does it cost?",
    a: "Contingency, exclusive or retained, and the fee depends on the role and the structure. I walk you through it on the first call and it is set out in the Terms of Business before anything starts. No surprises.",
  },
  {
    q: "We already have a recruiter. Why you?",
    a: "Because a generalist screens on keywords. I carried quota in these markets for fifteen years, so I can hear in twenty minutes whether someone can open in German and hold a discovery. That is the whole difference.",
  },
  {
    q: "Can I get the playbook without hiring anyone?",
    a: "Yes. The playbook is a separate engagement and plenty of teams take it on its own, usually when they have the people but the message is not landing.",
  },
];

const candidateFaq = [
  {
    q: "Does this cost me anything?",
    a: "No. The company pays the fee when you are hired, so there is nothing to pay at any stage. If a recruiter ever asks you to pay for a placement, walk away.",
  },
  {
    q: "Do I need to speak the local language?",
    a: "You need to sell natively in the language of the market you are covering. Whether you also speak the local one matters much less than employers think, and I will tell you when it genuinely does.",
  },
  {
    q: "What if I have no formal sales background?",
    a: "Send it anyway. What I screen for is whether you can open a conversation and hold it under pressure. Plenty of good sellers came in from hospitality, support or teaching.",
  },
  {
    q: "Will I actually hear back?",
    a: "Yes, either way, and normally within a business day. If it is a no, you get the reason. Going quiet on candidates is how the rest of this industry earned its reputation.",
  },
];

function List({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="border-t border-[color:var(--color-line)]">
      {items.map((f) => (
        <details key={f.q} className="group border-b border-[color:var(--color-line)]">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-[1.0625rem] leading-[1.5] text-[color:var(--color-ink-900)] [&::-webkit-details-marker]:hidden">
            {f.q}
            <span
              aria-hidden="true"
              className="relative mt-2 h-[9px] w-[9px] shrink-0 text-[color:var(--color-gold-600)]"
            >
              <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
              <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-current transition-transform duration-200 group-open:scale-y-0" />
            </span>
          </summary>
          <p className="pb-5 pr-10 text-[0.9375rem] leading-[1.7] text-pretty text-[color:var(--color-body)]">
            {f.a}
          </p>
        </details>
      ))}
    </div>
  );
}

export function Faq() {
  return (
    <section className="grain border-b border-[color:var(--color-line)] py-20 sm:py-28">
      <Container>
        <SectionHead
          label="Questions"
          title={
            <>
              The things people ask <span className="accent">first.</span>
            </>
          }
          align="center"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Label>If you&rsquo;re hiring</Label>
            <div className="mt-6">
              <List items={companyFaq} />
            </div>
          </div>
          <div>
            <Label>If you&rsquo;re looking for a role</Label>
            <div className="mt-6">
              <List items={candidateFaq} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export const faqItems = [...companyFaq, ...candidateFaq];
