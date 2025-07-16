"use client";

import { clientTestimonials } from "@/data/siteData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useLayoutEffect, useRef } from "react";
import ReviewCard from "../ReviewCard";
import SectionTitle from "../SectionTitle";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialSection() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 3, spacing: 30 },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 15 },
      },
      "(max-width: 1024px)": {
        slides: { perView: 1, spacing: 20 },
      },
    },
    created(slider) {
      setInterval(() => {
        slider.next();
      }, 5000);
    },
  });

  const reviewRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: reviewRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
      });

      tl.fromTo(
        ".top",
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        }
      );

      tl.fromTo(
        reviewRef.current.querySelectorAll(".below"),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        }
      );
    }, reviewRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={reviewRef} className="bg-tertiary py-12">
      <SectionTitle
        title="CLIENT REVIEWS"
        subtitle="WHAT PEOPLE SAY ABOUT US"
        className="text-text-dark top"
      />

      <div ref={sliderRef} className="keen-slider below px-0 containerBody">
        {clientTestimonials.map((testimonial, index) => (
          <ReviewCard
            key={index}
            className="keen-slider__slide"
            clientImage={testimonial.clientImage}
            clientName={testimonial.clientName}
            testimonialText={testimonial.testimonialText}
          />
        ))}
      </div>
    </section>
  );
}
