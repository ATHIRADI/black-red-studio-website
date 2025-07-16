"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const ReviewCard = ({
  clientImage,
  clientName,
  testimonialText,
  className = "",
}) => {
  return (
    <Card
      className={`p-0 shadow-none text-text-dark border-none text-center ${className}`}
    >
      <CardContent className="flex flex-col  items-center space-y-6 ">
        {clientImage ? (
          <Image
            src={clientImage}
            alt={clientName}
            width={96}
            height={96}
            className="rounded-full w-24 h-24 object-cover"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-muted" />
        )}
        <p className="text-center">{testimonialText}</p>
        <p className="text-effect body-small">{clientName}</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
