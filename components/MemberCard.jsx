"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { gsap } from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

const MemberCard = ({ memberImage, memberName, memberRole, className }) => {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      scale: 1.05,
      y: -10,
      duration: 0.1,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      scale: 1,
      y: 0,
      duration: 0.1,
      ease: "power3.out",
    });
  };

  return (
    <Card
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`border-none transition-all bg-dark duration-300 p-0 ${className}`}
    >
      <CardHeader className="p-0">
        <div className="w-full aspect-[5/5] overflow-hidden">
          {memberImage ? (
            <Image
              src={memberImage}
              alt={memberName || "Team member"}
              width={300}
              height={300}
              className="object-cover w-full h-auto"
            />
          ) : null}
        </div>
      </CardHeader>
      <CardContent className="text-center pb-5">
        <h5 className="h5 text-tertiary">{memberName}</h5>
        <p className="text-accent">{memberRole}</p>
      </CardContent>
    </Card>
  );
};

export default MemberCard;
