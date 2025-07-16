"use client";

import { brandContent, trustedPartnerBrands } from "@/data/siteData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import SectionTitle from "../SectionTitle";

gsap.registerPlugin(ScrollTrigger);
export default function BrandSection() {
  const brandRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: brandRef.current,
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
    }, brandRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={brandRef} className="bg-text-dark text-tertiary ">
      <div className="containerBody grid grid-cols-1 lg:grid-cols-2 items-center  py-12 gap-12">
        {/* Left: Title and text */}
        <div className="space-y-5 py-4  flex flex-col justify-center items-center md:items-start  right">
          <SectionTitle title="BRANDS WE CARRY" className="text-start" />
          <p className="max-w-full text-center md:text-start">
            {brandContent.paragraph1}
          </p>
        </div>

        <div className="flex gap-10 items-center left">
          <div className="h-72 w-[2px] bg-accent hidden lg:block"></div>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-5 w-full">
            {trustedPartnerBrands.map((src, i) => (
              <div
                key={i}
                className="w-24 h-auto flex justify-center items-center relative bg-tertiary border border-disabled shadow-xl"
              >
                <Image
                  src={src}
                  alt={`Brand ${i + 1}`}
                  width={100}
                  height={100}
                  className="object-contain w-full "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
