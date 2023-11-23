declare module "*.svg" {
  import React = require("react");

  // eslint-disable-next-line @typescript-eslint/naming-convention
  export const ReactComponent: React.SFC<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.webp";
declare module "*.woff2";
declare module "*.woff";
declare module "*.ttf";
declare module "react-plx";
declare module "*.mp3";
declare module "*.md";
declare module "fake-progress";
