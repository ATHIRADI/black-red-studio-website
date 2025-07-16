"use client";
import ParallaxSection from "@/components/effect/ParallaxSection";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function NotFound() {
  const notRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: notRef.current,
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
    }, notRef);

    return () => ctx.revert();
  }, []);
  return (
    <main>
      <ParallaxSection image="/images/contact/2.jpg" />
      <section
        ref={notRef}
        className="py-12 h-screen containerBody flex flex-col justify-center items-center  bg-dark text-tertiary"
      >
        <SectionTitle
          title="Page Not Found"
          subtitle="404"
          className="text-accent top"
        />
        <Link href="/">
          <Button className="mt-12 top" variant="outline">
            Visit Home
          </Button>
        </Link>
      </section>
    </main>
  );
}
