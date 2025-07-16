"use client";
import ParallaxVideo from "@/components/effect/ParallaxVideo";
import AboutSection from "@/components/section/AboutSection";
import BrandSection from "@/components/section/BrandSection";
import DiscountSection from "@/components/section/DiscountSection";
import ServiceSection from "@/components/section/ServiceSection";
import StatSection from "@/components/section/StatSection";
import TestimonialSection from "@/components/section/TestimonialSection";

export default function HomePage() {
  return (
    <main>
      {/* <ParallaxSection image="/images/contact/2.jpg" /> */}
      {/* <HeroSection /> */}
      <ParallaxVideo />

      <section className="bg-dark">
        <AboutSection homePage={true} />
      </section>
      <section className="bg-accent">
        <StatSection className="below" />
      </section>
      {/* <section className="bg-effect">
        <AwardSection />
      </section> */}
      <section className="bg-dark">
        <ServiceSection homePage={true} />
      </section>
      <section className="">
        <TestimonialSection />
      </section>
      <section className="">
        <BrandSection />
      </section>
      <section className="">
        <DiscountSection />
      </section>
    </main>
  );
}
