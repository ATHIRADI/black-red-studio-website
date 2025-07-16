"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactPageContent } from "@/data/siteData";
import { zodResolver } from "@hookform/resolvers/zod";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useLayoutEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import SectionTitle from "../SectionTitle";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const { contactInfoSections } = contactPageContent;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Message sent!");
        reset();
      } else {
        toast.error("Failed to send message");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  const contactRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
      });

      tl.fromTo(
        ".left",
        { x: -500, opacitx: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        }
      );

      tl.fromTo(
        ".right",
        { x: 500, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        }
      );
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={contactRef}
      className="containerBody flex justify-center items-center min-h-[50vh] py-12 text-text-dark relative"
    >
      <div className="grid md:grid-cols-2 gap-12 relative z-10  w-full">
        <div className="space-y-8  flex flex-col justify-center items-start left">
          <SectionTitle
            title="come visit us"
            className="text-text-dark text-center md:text-start "
          />
          {contactInfoSections.map((item, index) => (
            <div key={index} className="flex flex-col text-start">
              <h4 className="h5">{item.sectionTitle}</h4>
              {item.detailLines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-dark text-text-dark h-[550px] w-full px-6 md:px-12 shadow-xl right"
        >
          <div className="w-full h-full flex justify-center flex-col space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="body-bold text-tertiary">Full Name</p>
                <Input
                  {...register("name")}
                  placeholder="Your name"
                  className="bg-tertiary text-disabled"
                />
                {errors.name && (
                  <p className="text-effect text-sm">{errors.name.message}</p>
                )}
              </div>
              <div>
                <p className="body-bold text-tertiary">Email Address</p>
                <Input
                  {...register("email")}
                  placeholder="Your email address"
                  className="bg-tertiary text-disabled"
                />
                {errors.email && (
                  <p className="text-effect text-sm">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <p className="body-bold text-tertiary">Subject</p>
              <Input
                {...register("subject")}
                placeholder="Subject"
                className="bg-tertiary text-disabled"
              />
              {errors.subject && (
                <p className="text-effect text-sm">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <p className="body-bold text-tertiary">Message</p>
              <Textarea
                {...register("message")}
                placeholder="Your message"
                className="bg-tertiary text-disabled min-h-[150px]"
              />
              {errors.message && (
                <p className="text-effect text-sm">{errors.message.message}</p>
              )}
            </div>

            <Button variant="outline" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Booking..." : "Book An Appointment"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
