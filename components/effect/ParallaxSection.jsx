import { heroParallaxSectionContent } from "@/data/siteData";
import { StyledTitle } from "../StyledTitle";

export default function ParallaxSection() {
  return (
    <section
      className="bg-fixed relative bg-center flex flex-col justify-center items-center bg-no-repeat bg-cover min-h-screen"
      style={{
        backgroundImage: `url(${heroParallaxSectionContent.parallaxBackgroundImage})`,
      }}
    >
      <div className={`absolute inset-0 z-10 bg-black/70`} />
      <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-center px-4">
        <h1 className="h1">
          <StyledTitle mainTitle={heroParallaxSectionContent.parallaxTitle} />
        </h1>
        <p className=" text-accent">
          {heroParallaxSectionContent.parallaxSubtitle}
        </p>
      </div>
    </section>
  );
}
