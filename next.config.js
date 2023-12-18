/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ["html", "jsx", "js", "tsx", "ts"],
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    return cfg;
  },
};

module.exports = nextConfig;
