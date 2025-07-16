import { heroSectionContent } from "@/data/siteData";
import { StyledTitle } from "../StyledTitle";
import VideoBackground from "./VideoBackground";

export default function ParallaxVideo() {
  const { mainTitle, subTitle } = heroSectionContent;
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <VideoBackground />
      <div className="absolute inset-0 z-10 bg-black/60" />
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
        <h1 className="h1">
          <StyledTitle mainTitle={mainTitle} />
        </h1>
        <p className="text-accent">{subTitle}</p>
      </div>
    </section>
  );
}
