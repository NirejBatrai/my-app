import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.sweetwater.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
