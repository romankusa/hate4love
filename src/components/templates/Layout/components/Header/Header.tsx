import { Button } from "@/components/atoms/Button/Button";
import { Logo } from "./components/Logo/Logo";
import { Nav } from "./components/Nav/Nav";

import s from "./Header.module.scss";
import { useAppStore } from "@/hooks/useAppStore";

export const Header = () => {
  const { data } = useAppStore.getState();

  return (
    <div className={s.header}>
      <div className="flex-1">
        <Logo />
      </div>
      <Nav />
      <div className="flex-1 flex justify-end">
        <Button>
          <img
            src={data.layout.header.button.icon?.img}
            alt={data.layout.header.button.icon?.alt}
          />
          {data.layout.header.button.title}
        </Button>
      </div>
    </div>
  );
};
