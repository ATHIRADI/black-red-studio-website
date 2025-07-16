"use client";
import { servicePricingContent } from "@/data/siteData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function PriceSection() {
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
      });

      tl.fromTo(
        ".left",
        { x: -500, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={footerRef}
      className="bg-text-dark py-12 text-tertiary flex justify-center items-center flex-col"
    >
      <div className="left grid grid-cols-1 md:grid-cols-2 gap-10 containerBody shadow-xl ">
        {servicePricingContent.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-center h5 text-tertiary">
              <span>{item.priceItemTitle}</span>
              <div className="flex-1 h-px bg-gradient-to-r from-accent via-accent to-transparent mx-4" />
              <span>{item.itemPrice}</span>
            </div>
            <p className="mt-3 max-w-md">{item.priceDescription}</p>
          </div>
        ))}
      </div>
      <Button className="mt-12 left" variant="outline">
        Book an Appoinment
      </Button>
    </section>
  );
}
