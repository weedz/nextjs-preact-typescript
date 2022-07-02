import withPreact from "next-plugin-preact";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withPreact({
    /* regular next.js config options here */
    reactStrictMode: true,
    output: "standalone",
});

export default nextConfig;
