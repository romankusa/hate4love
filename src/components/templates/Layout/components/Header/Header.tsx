import { Button } from "@/components/atoms/Button/Button";
import { Logo } from "./components/Logo/Logo";
import { Nav } from "./components/Nav/Nav";

import s from "./Header.module.scss";
import { useAppStore } from "@/hooks/useAppStore";
import { useDimensions } from "@/hooks/useDimensions";
import { MobileNav } from "./components/MobileNav/MobileNav";

export const Header = () => {
  const { data } = useAppStore.getState();
  const { isDesktop } = useDimensions();

  return (
    <>
      <header className={s.header}>
        <div className="flex-1">
          <Logo />
        </div>
        {isDesktop ? <Nav /> : <div></div>}
        <div className="flex-1 flex justify-end">
          {isDesktop ? (
            <Button href={data.layout.header.button.link}>
              <img
                src={data.layout.header.button.icon?.img}
                alt={data.layout.header.button.icon?.alt}
              />
              {data.layout.header.button.title}
            </Button>
          ) : (
            <MobileNav />
          )}
        </div>
      </header>
    </>
  );
};
