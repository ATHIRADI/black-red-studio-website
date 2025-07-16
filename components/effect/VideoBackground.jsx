"use client";
import { heroSectionContent } from "@/data/siteData";
import { useEffect, useState } from "react";

export default function VideoBackground() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <video
      className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src={heroSectionContent.heroImage} type="video/mp4" />
    </video>
  );
}
