"use client";

import { footerSectionContent, heroSectionContent } from "@/data/siteData";
import { Clock9, Mail, MapPin, Phone } from "lucide-react";
import SocialIcons from "../SocialIcons";
import { StyledTitle } from "../StyledTitle";

export default function Footer() {
  const icons = {
    Mail,
    Phone,
    Clock9,
    MapPin,
  };

  const { mainTitle } = heroSectionContent;

  return (
    <footer className="bg-tertiary relative">
      <section className="containerBody relative z-10 space-y-12 text-text-dark">
        {/* Contact Title + Description */}
        <div className="">
          <SocialIcons />
          <h1 className="h1 text-center">
            <StyledTitle mainTitle={mainTitle} />
          </h1>
        </div>

        {/* Contact Sections */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-4">
          {footerSectionContent.footerInfoSections.map((section, index) => {
            const Icon = icons[section.icon] ?? (() => null); // ✅ fixed here
            return (
              <div
                key={index}
                className=" flex flex-col justify-start items-center text-center space-y-2 shadow-md p-5 bg-tertiary"
              >
                <Icon className="size-6 text-effect" />
                <h5 className="h5">{section.title}</h5>
                {section.lines?.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            );
          })}
        </div>

        {/* Copyright */}
        <div className="text-center space-y-4">
          <hr className="text-accent" />
          <p className="text-disabled body-small">
            {footerSectionContent.copyrightInfo.copyrightText}
          </p>
        </div>
      </section>
    </footer>
  );
}
