import { useAppStore } from "@/hooks/useAppStore";
import { Section } from "@/types/Home";
import { FC } from "react";

import s from "./Numbers.module.scss";
import { formatNumber } from "@/utils/formatNumber";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Number } from "./components/Number";

interface NumbersProps {
  data: Section;
}

export const Numbers: FC<NumbersProps> = ({ data }) => {
  const { targetRef, isIntersecting } = useIntersectionObserver();

  return (
    <section ref={targetRef} id={data.id} className={s.container}>
      {data.numbers.map((num, index) => (
        <div key={index} className={s.numberContainer}>
          <span className={s.title}>
            <Number
              active={isIntersecting}
              targetNumber={num.number}
            />
          </span>
          <span className={s.text}>{num.text}</span>
        </div>
      ))}
    </section>
  );
};
