"use client";

import { Card, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"; // import this
import { gsap } from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

const ImageCard = ({ imageSrc, alt, className }) => {
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
    <Dialog>
      <DialogTrigger asChild>
        <Card
          ref={cardRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`border-none transition-all cursor-pointer duration-300 p-0 ${className}`}
        >
          <CardHeader className="p-0">
            <div className="w-full aspect-[5/5] overflow-hidden">
              <Image
                src={imageSrc}
                alt={alt}
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </CardHeader>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-4xl p-0 border-none  shadow-none">
        <DialogTitle>
          <VisuallyHidden>{alt}</VisuallyHidden>
        </DialogTitle>
        <Image
          src={imageSrc}
          alt={alt}
          width={1000}
          height={1000}
          className="w-full h-[95vh] object-contain "
        />
      </DialogContent>
    </Dialog>
  );
};

export default ImageCard;
