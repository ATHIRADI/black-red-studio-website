"use client";
import { instagramFeedContent } from "@/data/siteData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import InstaCard from "../InstaCard";
import SectionTitle from "../SectionTitle";

gsap.registerPlugin(ScrollTrigger);

export default function InstaSection() {
  const instaRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: instaRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
      });

      tl.fromTo(
        ".left",
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        }
      );

      tl.fromTo(
        ".below",
        { y: 500, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        }
      );
    }, instaRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={instaRef} className="bg-text-dark min-h-[450px] py-6 ">
      <div className="space-y-6 py-4 containerBody">
        <SectionTitle
          title="Follow our Instagram"
          className="text-tertiary text-start left"
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 below">
          {instagramFeedContent.map((item, index) => (
            <InstaCard link={item} imageSrc={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
