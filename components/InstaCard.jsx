"use client";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

export default function InstaCard({ link = "#", imageSrc }) {
  const instaRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(instaRef.current, {
      scale: 1.05,
      y: -10,
      duration: 0.1,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(instaRef.current, {
      scale: 1,
      y: 0,
      duration: 0.1,
      ease: "power3.out",
    });
  };
  return (
    <a href={link} target="_blank">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={instaRef}
        className="h-64 transition-all cursor-pointer duration-300 shadow-xl w-full bg-accent"
      >
        <Image
          src={imageSrc}
          alt="Tattoo Artist"
          width={500}
          height={500}
          className="w-full h-64 object-cover"
        />
      </div>
    </a>
  );
}
