import { FC } from "react";
import { PartnersSection } from "@/types/sections/Partners";

import s from "./Partners.module.scss";
import { Image } from "@/components/atoms/Image/Image";

import useEmblaCarousel from "embla-carousel-react";

interface PartnersProps {
  data?: PartnersSection;
}

export const Partners: FC<PartnersProps> = ({ data }) => {
  const [emblaRef] = useEmblaCarousel({
    align: "center",
    active: data?.partners && data?.partners.length > 1,
  });

  return (
    <section id={data?.id} className={s.partners}>
      <h6>{data?.title.text}</h6>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex justify-center">
          {data?.partners.map((part, idx) => (
            <Image key={idx} src={part.img} alt={part.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};
