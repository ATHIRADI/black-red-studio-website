"use client";

import AwardCard from "@/components/AwardCard";
import ParallaxSection from "@/components/effect/ParallaxSection";
import SectionWithBackground from "@/components/effect/SectionWithBackground";
import ImageCard from "@/components/ImageCard";
import MemberCard from "@/components/MemberCard";
import PageTitle from "@/components/PageTitle";
import AboutSection from "@/components/section/AboutSection";
import AwardSection from "@/components/section/AwardSection";
import BrandSection from "@/components/section/BrandSection";
import ContactSection from "@/components/section/ContactSection";
import DiscountSection from "@/components/section/DiscountSection";
import GallerySection from "@/components/section/GallerySection";
import HeroSection from "@/components/section/HeroSection";
import InstaSection from "@/components/section/InstaSection";
import MapSection from "@/components/section/MapSection";
import MemberSection from "@/components/section/MemberSection";
import PriceSection from "@/components/section/PriceSection";
import ServiceSection from "@/components/section/ServiceSection";
import StatSection from "@/components/section/StatSection";
import TestimonialSection from "@/components/section/TestimonialSection";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import SocialIcons from "@/components/SocialIcons";
import { StyledTitle } from "@/components/StyledTitle";
import { Button } from "@/components/ui/button";
import {
  awardsRecognitionContent,
  serviceCardsContent,
  teamMembersContent,
} from "@/data/siteData";
import { ChevronRight } from "lucide-react";

export default function TestPage() {
  const images = [
    {
      imageSrc: "/images/1.jpg",
      alt: "Lead Tattoo Artist",
    },
    {
      imageSrc: "/images/2.jpg",

      alt: "Piercing Specialist",
    },
    {
      imageSrc: "/images/3.jpg",
      alt: "Black & Grey Specialist",
    },
  ];

  return (
    <div>
      <PageTitle title="Style Guide" />
      <section className="mt-12 space-y-24">
        <div className="flex flex-col gap-4 mt-4 containerBody ">
          <SectionTitle
            title="Typography"
            subtitle="Style Guide For Texts"
            className="text-tertiary"
          />
          <div className="containerBody ">
            <h1 className="h1">Heading Font</h1>
            <h2 className="h2">Heading Font</h2>
            <h3 className="h3">Heading Font</h3>
            <h4 className="h4">Heading Font</h4>
            <h5 className="h5">Heading Font</h5>
            <p className="body-bold">Body Bold</p>
            <p className="">Body Regular</p>
            <p className="body-small">Body small</p>
            <p className="body-disabled">Body disabled</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4 containerBody ">
          <SectionTitle
            title="Colors"
            subtitle="Style Guide For Colors"
            className="text-tertiary"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5 containerBody ">
            <div className="bg-dark shadow-2xl h-52"></div>
            <div className="bg-accent shadow-2xl h-52"></div>
            <div className="bg-tertiary shadow-2xl h-52"></div>
            <div className="bg-text-dark shadow-2xl h-52"></div>
            <div className="bg-disabled shadow-2xl h-52"></div>
            <div className="bg-hover-primary shadow-2xl h-52"></div>
            <div className="bg-hover-secondary shadow-2xl h-52"></div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4 containerBody">
          <SectionTitle
            title="Buttons"
            subtitle="Style Guide For Buttons"
            className="text-tertiary"
          />
          <div className="flex flex-row items-center gap-4 mt-4 containerBody">
            <Button>Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="link">Link</Button>
            <Button variant="secondary">Secondary</Button>
            <Button size="icon">
              <ChevronRight />
            </Button>

            <SocialIcons />
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-4 containerBody bottom">
          <SectionTitle
            title="Social Icons"
            subtitle="Style Guide For Social Icons"
            className="text-tertiary"
          />
          <SocialIcons />
        </div>

        <div className="flex flex-col gap-4 mt-4 containerBody ">
          <SectionTitle
            title="Styled Title"
            subtitle="Style Guide For Styled Title"
            className="text-tertiary"
          />
          <h1 className="h1 text-center my-12">
            <StyledTitle mainTitle="Black Red Studios" />
          </h1>
        </div>

        <div className="flex flex-col gap-4 mt-4 containerBody ">
          <SectionTitle
            title="Service Cards"
            subtitle="Style Guide For Service Cards"
            className="text-tertiary"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 containerBody ">
            {serviceCardsContent.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4 containerBody">
          <SectionTitle
            title="Award Cards"
            subtitle="Style Guide For Award Cards"
            className="text-tertiary"
          />
          <section className="grid grid-cols-2 md:grid-cols-4 containerBody gap-2 py-12">
            {awardsRecognitionContent.map((award, index) => (
              <AwardCard key={index} {...award} />
            ))}
          </section>
        </div>
        <div className="flex flex-col gap-4 mt-4 containerBody">
          <SectionTitle
            title="Member Cards"
            subtitle="Style Guide For Member Cards"
            className="text-tertiary"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 containerBody">
            {teamMembersContent.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4 containerBody">
          <SectionTitle
            title="Image Cards"
            subtitle="Style Guide For Image Cards"
            className="text-tertiary"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 containerBody">
            {images.map((image, index) => (
              <ImageCard
                key={index}
                imageSrc={image.imageSrc}
                alt={image.alt}
              />
            ))}
          </div>
        </div>
        <div>
          <ServiceSection />
          <MemberSection />
          <StatSection />
          <TestimonialSection />
          <BrandSection />
          <DiscountSection />
          <PriceSection />
          <GallerySection />
          <section className="bg-accent">
            <ContactSection />
          </section>
          <MapSection />
          {/* <HeroSection /> */}
          <AboutSection />
          <AwardSection />
          <InstaSection />
          <SectionWithBackground image="images/4.jpg">
            <section className="h-[40vh]  containerBody">
              <div className="h-65 w-64 bg-accent"></div>
            </section>
          </SectionWithBackground>
          <ParallaxSection image="/images/contact/2.jpg" />
        </div>
      </section>
    </div>
  );
}
