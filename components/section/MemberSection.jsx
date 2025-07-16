"use client";
import MemberCard from "@/components/MemberCard";
import { teamMembersContent } from "@/data/siteData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import SectionTitle from "../SectionTitle";

gsap.registerPlugin(ScrollTrigger);

export default function MemberSection() {
  const memberRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: memberRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
      });

      tl.fromTo(
        ".top",
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        }
      );

      tl.fromTo(
        ".below",
        { y: -500, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        }
      );
    }, memberRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={memberRef} className="bg-tertiary pt-2">
      <SectionTitle
        title="OUR EXPERTS"
        subtitle="MEET THE FAMILY"
        className="text-text-dark py-12 top"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 containerBody below">
        {teamMembersContent.map((member, index) => (
          <MemberCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
}
