"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { gsap } from "gsap";
import * as Icons from "lucide-react"; // import all icons
import React, { useRef } from "react";

const ServiceCard = ({
  serviceTitle,
  serviceIcon,
  serviceDescription,
  className = "",
  children,
}) => {
  const LucideIcon = Icons[serviceIcon]; // dynamically select icon by string
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
      className={`transition-all hover:text-text-dark hover:bg-accent duration-300 ${className}`}
    >
      <CardHeader className="flex flex-col justify-center items-center text-center">
        {children}

        {LucideIcon && <LucideIcon className="size-16 mb-6" />}
        <CardTitle>{serviceTitle}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p>{serviceDescription}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
