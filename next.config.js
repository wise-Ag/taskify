/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: "/dashboard/:boardid/edit",
        destination: "/404",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
