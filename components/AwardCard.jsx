"use client";

import * as Icons from "lucide-react";

import { gsap } from "gsap";

import React, { useRef } from "react";

export default function AwardCard({
  iconName,
  awardTitle,
  awardYear,
  className,
}) {
  const LucideIcon = Icons[iconName] || Icons.Award;

  const awardCard = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(awardCard.current, {
      scale: 1.05,
      y: -10,
      duration: 0.1,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(awardCard.current, {
      scale: 1,
      y: 0,
      duration: 0.1,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={awardCard}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`flex bg-tertiary items-center gap-4 text-text-dark shadow-xl p-4 transition-all  duration-300 ${className}`}
    >
      {/* Icon Circle */}
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-transparent text-effect border-0">
        {LucideIcon && <LucideIcon className="size-12" />}
      </div>

      {/* Award Text */}
      <div className="text-left leading-tight ">
        <p className="body-small font-bold  uppercase text-start text-text-dark">
          {awardTitle}
        </p>
        <p className="body-small font-bold  uppercase text-start text-text-dark">
          {awardYear}
        </p>
      </div>
    </div>
  );
}
