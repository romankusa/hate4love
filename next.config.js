/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "rc-util",
    "@ant-design",
    "kitchen-flow-editor",
    "@ant-design/pro-editor",
    "zustand",
    "leva",
    "antd",
    "rc-pagination",
    "rc-picker",
  ],
  output: "export",
  pageExtensions: ["html", "jsx", "js", "tsx", "ts"],
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });

    cfg.module.rules.push({
      test: /\.svg$/i,
      loader: "@svgr/webpack",
      options: {
        dimensions: false,
      },
    });

    return cfg;
  },
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
