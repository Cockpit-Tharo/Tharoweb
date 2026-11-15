import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.29.252",
    "192.168.29.*",
    "192.168.*.*",
    "10.*.*.*",
    "*.local",
    "localhost",
    "127.0.0.1",
  ],
};

export default nextConfig;
