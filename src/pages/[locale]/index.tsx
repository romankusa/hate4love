import { Home } from "@/components/templates/Home/Home";

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
