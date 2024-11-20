/** @type {import('next').NextConfig} */
const nextConfig = {
  // Suppress hydration warnings for attributes added by browser extensions
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};

module.exports = nextConfig;
