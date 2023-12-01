import axios from "axios";

declare module "axios" {
  export interface AxiosInstance {
    request<T = any>(config: AxiosRequestConfig): Promise<T>;
    get<T = any>(
      url: string,
      config?: AxiosRequestConfig
    ): Promise<T>;
    delete<T = any>(
      url: string,
      config?: AxiosRequestConfig
    ): Promise<T>;
    head<T = any>(
      url: string,
      config?: AxiosRequestConfig
    ): Promise<T>;
    post<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>;
    put<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>;
    patch<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>;
  }
}

declare module "*.svg" {
  import React = require("react");

  // eslint-disable-next-line @typescript-eslint/naming-convention
  export const ReactComponent: React.SFC<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}

declare module "*.eot";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.webp";
declare module "*.woff2";
declare module "*.woff";
declare module "*.ttf";
declare module "react-plx";
declare module "*.mp3";
