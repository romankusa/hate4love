import { Home } from "@/components/templates/Home/Home";
import { Layout } from "@/components/templates/Layout/Layout";
import { useAppStore } from "@/hooks/useAppStore";
import { getContent } from "@/utils/getContent";

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          locale: "en",
        },
      },
      {
        params: {
          locale: "es",
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  return { props: { locale: context.params.locale } };
};

export default function LocaleHome(props: any) {
  return <Home locale={props.locale} />;
}
