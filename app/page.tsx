import { Hero } from "@/components/home/Hero";
import { MarketsBand } from "@/components/home/MarketsBand";
import { Candidates } from "@/components/home/Candidates";
import { Companies } from "@/components/home/Companies";
import { CostFunnel } from "@/components/home/CostFunnel";
import { Playbook } from "@/components/home/Playbook";
import { Founder } from "@/components/home/Founder";
import { Faq } from "@/components/home/Faq";
import { FinalCta } from "@/components/home/FinalCta";

/*
 * Order carries the argument. The page opens on a fork rather than a pitch,
 * because there are two entirely different people arriving here and the old
 * site made them read each other's copy. Candidates go first: they are the
 * scarcer side of this market, and a company reading that section sees exactly
 * what its next hire is being promised. Then the company case, then the number
 * that makes it urgent, then the proof, then the ask.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <MarketsBand />
      <Candidates />
      <Companies />
      <CostFunnel />
      <Playbook />
      <Founder />
      <Faq />
      <FinalCta />
    </>
  );
}
