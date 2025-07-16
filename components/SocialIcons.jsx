"use client";
import { socialMediaIcons } from "@/data/siteData";
import { gsap } from "gsap";
import * as Icons from "lucide-react";
import React from "react";

export default function SocialIcons() {
  const handleMouseEnter = (el) => {
    gsap.to(el, {
      scale: 1.2,
      y: -4,
      duration: 0.2,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = (el) => {
    gsap.to(el, {
      scale: 1,
      y: 0,
      duration: 0.2,
      ease: "power3.out",
    });
  };

  return (
    <div className="flex items-center justify-center my-4 gap-2 ">
      {socialMediaIcons.map(({ iconName, profileUrl }, index) => {
        const LucideIcon = Icons[iconName];
        if (!LucideIcon) return null;

        return (
          <a
            key={index}
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-dark border-none rounded-full bg-accent border  shadow-xl p-2  transition-all duration-300"
            aria-label={iconName}
            ref={(el) => {
              if (el) {
                el.onmouseenter = () => handleMouseEnter(el);
                el.onmouseleave = () => handleMouseLeave(el);
              }
            }}
          >
            <LucideIcon className="size-6 cursor-pointer" />
          </a>
        );
      })}
    </div>
  );
}
