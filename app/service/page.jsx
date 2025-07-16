import ParallaxSection from "@/components/effect/ParallaxSection";
import PageTitle from "@/components/PageTitle";
import DiscountSection from "@/components/section/DiscountSection";
import PriceSection from "@/components/section/PriceSection";
import ServiceSection from "@/components/section/ServiceSection";
import TestimonialSection from "@/components/section/TestimonialSection";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Service = () => {
  return (
    <main>
      <ParallaxSection image="/images/contact/2.jpg" />

      <section className="">
        <ServiceSection />
      </section>
      <section className="">
        <PriceSection />
      </section>
      <section className="">
        <TestimonialSection />
      </section>
      <section className="">
        <DiscountSection />
      </section>
    </main>
  );
};

export default Service;
