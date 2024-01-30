import { AppStore, useAppStore } from "@/hooks/useAppStore";
import { Locale } from "@/utils/constants";
import { getContent } from "@/utils/getContent";
import { FC } from "react";
import { Layout } from "../Layout/Layout";
import { Hero } from "./components/Hero/Hero";
import { Content } from "./components/Content/Content";
import Head from "next/head";

export const Mision: FC<{ locale: Locale }> = ({ locale }) => {
  const data = getContent(locale) as AppStore["data"];

  if (data) useAppStore.setState({ data, locale });

  return (
    <Layout>
      <Head>
        <title>{data.mision.metadata.title}</title>
        <meta
          name="description"
          content={data.mision.metadata.description}
        />
      </Head>
      {data.mision?.content && (
        <>
          <Hero />
          <Content />
        </>
      )}
    </Layout>
  );
};
