import s from "./Logo.module.scss";
import { useAppStore } from "@/hooks/useAppStore";

export const Logo = () => {
  const { data } = useAppStore.getState();
  const logo = data.home.hero.logo;

  return <img className={s.logo} src={logo.img} alt={logo.alt} />;
};
