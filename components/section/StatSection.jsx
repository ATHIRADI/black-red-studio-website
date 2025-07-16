"use client";
import StatCard from "@/components/StatCard";
import { statisticsContent } from "@/data/siteData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const StatSection = () => {
  const statsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
      });

      tl.fromTo(
        statsRef.current.querySelectorAll(".below"),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        }
      );
    }, statsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={statsRef}
      className="grid grid-cols-2 md:grid-cols-4 text-center containerBody gap-4 py-6"
    >
      {statisticsContent.map((stat, i) => (
        <StatCard className="below" key={i} {...stat} />
      ))}
    </div>
  );
};

export default StatSection;
