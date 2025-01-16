import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enable static export
    assetPrefix: isProd ? "/" : "", // Use "/" in production for `next/font`
    images: {
        unoptimized: true, // Disable image optimisation for compatibility with static exports
    }
};

export default nextConfig;
