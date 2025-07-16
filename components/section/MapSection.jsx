import { contactPageContent } from "@/data/siteData";

export default function MapSection() {
  const { googleMapLocation } = contactPageContent;

  return (
    <section className="">
      <div className="w-full h-[300px] md:h-[60vh] overflow-hidden ">
        <iframe
          src={googleMapLocation.mapEmbedSrc}
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 w-full h-full"
        ></iframe>
      </div>
    </section>
  );
}
