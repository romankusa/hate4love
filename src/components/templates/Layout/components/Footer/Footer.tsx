import { useAppStore } from "@/hooks/useAppStore";
import s from "./Footer.module.scss";

export const Footer = () => {
  const { data } = useAppStore.getState();
  const footData = data.layout.footer;

  return (
    <footer className={s.footer}>
      <span>{footData.copyright}</span>
    </footer>
  );
};
