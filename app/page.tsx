import { Hero } from "@/components/home/Hero";
import { Approach } from "@/components/home/Approach";
import { Services } from "@/components/home/Services";
import { Playbook } from "@/components/home/Playbook";
import { CostModel } from "@/components/home/CostModel";
import { Founder } from "@/components/home/Founder";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Approach />
      <Services />
      <Playbook />
      <CostModel />
      <Founder />
      <FinalCta />
    </>
  );
}
