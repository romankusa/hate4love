import { useAppStore } from "@/hooks/useAppStore";
import { getContent } from "@/utils/getContent";
import { FC } from "react";
import { Layout } from "../Layout/Layout";
import { Locale } from "@/utils/constants";
import { Hero } from "@/components/organisms/Hero/Hero";

export const Home: FC<{ locale: Locale }> = ({ locale }) => {
  const data = getContent(locale);

  if (data) useAppStore.setState({ data });

  return (
    <Layout>
      <Hero />
    </Layout>
  );
};
