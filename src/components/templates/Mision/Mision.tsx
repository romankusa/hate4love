import { AppStore, useAppStore } from "@/hooks/useAppStore";
import { Locale } from "@/utils/constants";
import { getContent } from "@/utils/getContent";
import { FC } from "react";
import { Layout } from "../Layout/Layout";
import { Hero } from "./components/Hero/Hero";
import { Content } from "./components/Content/Content";

export const Mision: FC<{ locale: Locale }> = ({ locale }) => {
  const data = getContent(locale) as AppStore["data"];

  if (data) useAppStore.setState({ data });

  return (
    <Layout>
      {data.mision?.content && (
        <>
          <Hero />
          <Content />
        </>
      )}
    </Layout>
  );
};
