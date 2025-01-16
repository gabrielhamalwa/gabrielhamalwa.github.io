import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables static export
    assetPrefix: isProd ? "https://gabrielhamalwa.github.io/" : "", // Full URL for GitHub Pages
    basePath: isProd ? "/gabrielhamalwa.github.io" : "", // Base path for GitHub Pages
    images: {
        unoptimized: true, // Disable image optimization for static export
    },
};

export default nextConfig;
