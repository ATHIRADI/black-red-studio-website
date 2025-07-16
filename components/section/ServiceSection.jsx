"use client";
import ServiceCard from "@/components/ServiceCard";
import { serviceCardsContent } from "@/data/siteData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import SectionTitle from "../SectionTitle";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollTrigger);

const ServiceSection = ({ homePage }) => {
  const serviceRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: serviceRef.current,
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
        serviceRef.current.querySelectorAll(".below"),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        }
      );
    }, serviceRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={serviceRef}
      className="py-12 containerBody bg-dark text-tertiary flex flex-col justify-center items-center"
    >
      <SectionTitle
        title="Services"
        subtitle="Explore Our"
        className="text-accent top"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 my-12 gap-2">
        {serviceCardsContent.map((service, index) => (
          <ServiceCard key={index} {...service} className="below" />
        ))}
      </div>
      {homePage ? (
        <Link href="/service">
          <Button className="below" variant="outline">
            Explore More
          </Button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default ServiceSection;
