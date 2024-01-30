import { AppStore, useAppStore } from "@/hooks/useAppStore";
import { getContent } from "@/utils/getContent";
import { FC } from "react";
import { Layout } from "../Layout/Layout";
import { Locale } from "@/utils/constants";
import { Hero } from "@/components/organisms/Hero/Hero";
import { Numbers } from "./components/templates/Numbers/Numbers";
import { Text } from "./components/templates/Text/Text";
import { Youtube } from "./components/templates/Youtube/Youtube";
import { Carousel } from "./components/templates/Carousel/Carousel";
import { Hate4love } from "./components/templates/Hate4love/Hate4love";
import { Partners } from "./components/templates/Partners/Partners";
import Head from "next/head";

const components = {
  NUMBERS: Numbers,
  TEXT: Text,
  YT_VIDEO: Youtube,
  CAROUSEL: Carousel,
  HATE4LOVE: Hate4love,
  PARTNERS: Partners,
};

export const Home: FC<{ locale: Locale }> = ({ locale }) => {
  const data = getContent(locale) as AppStore["data"];

  if (data) useAppStore.setState({ data, locale });

  return (
    <Layout>
      <Head>
        <title>{data.home.metadata.title}</title>
        <meta
          name="description"
          content={data.home.metadata.description}
        />
      </Head>
      <Hero />
      {data.home.sections.map((section, index) => {
        const Component = (components as any)[section.type];

        return <Component key={index} data={section} />;
      })}
    </Layout>
  );
};
