const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  compiler: {
    styledComponents: true,
    removeConsole: {
      exclude: ["error"],
    },
  },
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    BACKEND_URL: process.env.BACKEND_URL,
    BACKEND_API_URL: process.env.BACKEND_API_URL,
  },
};

module.exports = nextConfig;
