"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const ReviewCard = ({ imageSrc, name, text, className = "" }) => {
  return (
    <Card
      className={`p-4 shadow-none text-text-dark border-none text-center ${className}`}
    >
      <CardContent className="flex flex-col items-center space-y-6">
        <Image
          src={imageSrc}
          alt={name}
          width={96}
          height={96}
          className="rounded-full w-24 h-24 object-cover"
        />
        <p className="text-center ">{text}</p>
        <p className="text-accent ">{name}</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
