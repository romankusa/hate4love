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
  const data = getContent(props.locale);

  return <h1>{data?.home?.hero?.text}</h1>;
}
