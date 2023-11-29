import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

export const Metadata = {
  Title: (str?: string) => `${str} | hate4love`,
  openGraph: {
    siteName: "hate4love",
    type: "website",
  } as OpenGraph,
};
