import ParallaxSection from "@/components/effect/ParallaxSection";
import DiscountSection from "@/components/section/DiscountSection";
import GallerySection from "@/components/section/GallerySection";
import InstaSection from "@/components/section/InstaSection";
const Gallery = () => {
  return (
    <main>
      <ParallaxSection image="/images/contact/2.jpg" />
      <section className="">
        <GallerySection />
      </section>
      <section>
        <InstaSection />
      </section>
      <section>
        <DiscountSection />
      </section>
    </main>
  );
};

export default Gallery;
