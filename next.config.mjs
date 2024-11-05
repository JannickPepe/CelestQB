/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  images: {
    remotePatterns: [
        {
            protocol: "https",
            hostname: "cdnb.artstation.com", 
        },
        {
            protocol: "https",
            hostname: "preview.redd.it"
        },
        {
            protocol: "https",
            hostname: "static1.srcdn.com"
        },
        {
          protocol: "https",
          hostname: "platform.polygon.com"
        },
        {
          protocol: "https",
          hostname: "sm.ign.com"
        },
        {
          protocol: "https",
          hostname: "www.google.com"
        }
    ],
  },
};

export default nextConfig;
