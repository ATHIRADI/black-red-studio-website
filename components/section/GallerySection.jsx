"use client";

import ImageCard from "@/components/ImageCard";
import { fullTattooGalleryImages } from "@/data/siteData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef, useState } from "react";
import SectionTitle from "../SectionTitle";
import { Button } from "../ui/button";

const IMAGES_PER_PAGE = 12;

gsap.registerPlugin(ScrollTrigger);

export default function GallerySection() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(
    fullTattooGalleryImages.length / IMAGES_PER_PAGE
  );

  const paginatedImages = fullTattooGalleryImages.slice(
    (currentPage - 1) * IMAGES_PER_PAGE,
    currentPage * IMAGES_PER_PAGE
  );

  const galleryRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
      });

      tl.fromTo(
        ".top",
        { y: -500, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        }
      );

      tl.fromTo(
        ".below",
        { y: 500, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        }
      );
    }, galleryRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={galleryRef}
      className="py-12 containerBody text-center bg-dark text-tertiary"
    >
      <SectionTitle
        title="GALLERY"
        subtitle="OUR WORKS"
        className="text-accent top"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-12 below">
        {paginatedImages.map((img, i) => (
          <ImageCard key={i} imageSrc={img} alt={`Work ${i + 1}`} />
        ))}
      </div>
      <div className="flex justify-center gap-2">
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <Button
              size="icon"
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-9 h-9 ${
                page === currentPage
                  ? "bg-accent text-black"
                  : "bg-dark border border-accent"
              }`}
            >
              {page}
            </Button>
          );
        })}

        {currentPage < totalPages && (
          <Button
            size="icon"
            onClick={() => setCurrentPage(currentPage + 1)}
            className="w-9 h-9 "
          >
            &gt;
          </Button>
        )}
      </div>
    </section>
  );
}
