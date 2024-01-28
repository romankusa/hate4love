import clsx from "clsx";
import s from "./Arrows.module.scss";

export const NextArrow = ({ onClick }: any) => {
  return (
    <button className={clsx(s.arrow, s.right)} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none">
        <path
          d="M14.0002 25.6667L23.3335 16.3333L14.0002 7"
          stroke="#DADADA"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export const PrevArrow = ({ onClick }: any) => {
  return (
    <button className={clsx(s.arrow, s.left)} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none">
        <path
          d="M17.9998 25.6667L8.6665 16.3333L17.9998 7"
          stroke="#DADADA"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
