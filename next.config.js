const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    removeConsole: {
      exclude: ["error"],
    },
  },
  swcMinify: true,
};

module.exports = nextConfig;
