import ParallaxSection from "@/components/effect/ParallaxSection";
import ContactSection from "@/components/section/ContactSection";
import MapSection from "@/components/section/MapSection";
import React from "react";

const Contact = () => {
  return (
    <main>
      <ParallaxSection image="/images/contact/2.jpg" />

      <section className="bg-accent py-6 ">
        <ContactSection />
      </section>
      <section>
        <MapSection />
      </section>
    </main>
  );
};

export default Contact;
