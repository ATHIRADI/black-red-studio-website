import VideoBackground from "../effect/VideoBackground";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <VideoBackground />

      {/* Overlay */}
      <div className="absolute inset-0 bg-text-dark/70 z-10" />

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-center px-4">
        <h1 className="h1">
          Black
          <span className="text-red-600"> Red</span> Studios
        </h1>
        <p className=" text-accent">
          World Class Tattoo Studio Based In Karur, Tamil Nadu
        </p>
      </div>
    </section>
  );
}
