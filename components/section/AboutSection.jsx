"use client";
import { aboutUsContent } from "@/data/siteData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";
import SectionTitle from "../SectionTitle";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection({ homePage }) {
  const aboutRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
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

      tl.fromTo(
        ".right",
        { x: 500, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        }
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={aboutRef}
      className="py-12 containerBody bg-dark text-tertiary"
    >
      <SectionTitle
        title="About Us"
        subtitle="Who we are?"
        className="text-accent top"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 my-12 gap-4">
        {/* Text Section */}
        <div className="left w-full space-y-6 flex flex-col justify-center">
          <p className="body">{aboutUsContent.paragraph1}</p>
          <div>
            <h5 className="h5 mb-4">Our Story</h5>
            <p>{aboutUsContent.paragraph2}</p>
            {homePage && (
              <Link href="/about">
                <Button className="mt-12" variant="outline">
                  Learn More About Us
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full right order-first md:order-last mb-4 md:mb-0 border-accent border-2">
          <Image
            src={aboutUsContent.aboutImage}
            alt="Tattoo Artist"
            width={800}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
