import { Mision } from "@/components/templates/Mision/Mision";

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
  return <Mision locale={props.locale} />;
}
