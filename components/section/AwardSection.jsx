"use client";
import { awardsRecognitionContent } from "@/data/siteData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import AwardCard from "../AwardCard";

gsap.registerPlugin(ScrollTrigger);

export default function AwardSection() {
  const awardRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: awardRef.current,
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
    }, awardRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={awardRef}
      className="grid grid-cols-1 md:grid-cols-4 containerBody gap-2 md:py-12"
    >
      {awardsRecognitionContent.map((award, index) => (
        <AwardCard key={index} className="left" {...award} />
      ))}
    </section>
  );
}
