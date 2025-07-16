import ParallaxSection from "@/components/effect/ParallaxSection";
import AboutSection from "@/components/section/AboutSection";
import AwardSection from "@/components/section/AwardSection";
import BrandSection from "@/components/section/BrandSection";
import DiscountSection from "@/components/section/DiscountSection";
import MemberSection from "@/components/section/MemberSection";
import StatSection from "@/components/section/StatSection";
import React from "react";

const About = () => {
  return (
    <main>
      <ParallaxSection image="/images/contact/2.jpg" />
      <section>
        <AboutSection />
      </section>
      <section className="bg-accent">
        <StatSection />
      </section>
      <section className="">
        <MemberSection />
      </section>
      <section className="bg-tertiary pb-12">
        <AwardSection />
      </section>

      <section className="">
        <DiscountSection />
      </section>
      <section className="">
        <BrandSection />
      </section>
    </main>
  );
};

export default About;
