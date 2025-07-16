"use client";

import React from "react";

export default function SectionWithBackground({
  children,
  image,
  overlayColor = "bg-black/60",
  className = "",
}) {
  return (
    <section className={`relative py-12 ${className}`}>
      {/* Background Image */}
      {image && (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center will-change-transform"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}

      {/* Overlay */}
      {image && <div className={`absolute inset-0 z-10 ${overlayColor}`} />}

      {/* Content */}
      <div className="relative z-20">{children}</div>
    </section>
  );
}
