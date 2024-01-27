import { useAppStore } from "@/hooks/useAppStore";
import s from "./Texts.module.scss";

export const Texts = () => {
  const { data } = useAppStore.getState();
  const { title, text } = data.home.hero;

  return (
    <div className={s.container}>
      <h5 className={s.title}>{title}</h5>
      <p className={s.text}>{text}</p>
    </div>
  );
};
