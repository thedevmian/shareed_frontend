const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    removeConsole: {
      exclude: ["error"],
    },
  },
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  }
};

module.exports = nextConfig;
