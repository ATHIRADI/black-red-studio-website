"use client";

import { Button } from "@/components/ui/button";
import { discountOfferContent } from "@/data/siteData";
import Image from "next/image";
import SectionTitle from "../SectionTitle";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function DiscountSection() {
  const discountRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: discountRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
      });

      tl.fromTo(
        ".left",
        { x: 500, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        }
      );

      tl.fromTo(
        ".right",
        { x: -500, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        }
      );
    }, discountRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={discountRef} className="bg-accent min-h-[400px] py-6 lg:py-0">
      <div className="py-0 grid grid-cols-1 lg:grid-cols-2 items-center containerBody">
        <div className="space-y-6 py-4 right flex flex-col justify-center items-center md:items-start">
          <SectionTitle
            title="25% DISCOUNT"
            className="text-effect text-center md:text-start"
          />
          <p className="max-w-md text-text-dark text-center md:text-start">
            {discountOfferContent.offerParagraph}
          </p>
          <Button variant="secondary">
            {discountOfferContent.callToActionButton}
          </Button>
        </div>

        <div className="left w-full h-full order-first md:order-last md:pl-5">
          <Image
            src={discountOfferContent.offerImage}
            alt="Tattoo Artist"
            width={800}
            height={500}
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
