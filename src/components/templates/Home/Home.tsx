import { AppStore, useAppStore } from "@/hooks/useAppStore";
import { getContent } from "@/utils/getContent";
import { FC } from "react";
import { Layout } from "../Layout/Layout";
import { Locale } from "@/utils/constants";
import { Hero } from "@/components/organisms/Hero/Hero";
import { Numbers } from "./components/templates/Numbers/Numbers";

const components = {
  NUMBERS: Numbers,
};

export const Home: FC<{ locale: Locale }> = ({ locale }) => {
  const data = getContent(locale) as AppStore["data"];

  if (data) useAppStore.setState({ data });

  return (
    <Layout>
      <Hero />
      {data.home.sections.map((section, index) => {
        const Component = (components as any)[section.type];

        return <Component key={index} data={section} />;
      })}
    </Layout>
  );
};
