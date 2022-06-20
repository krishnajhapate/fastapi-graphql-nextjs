/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/graphql",
          destination: "http://localhost:8000/graphql",
        },
      ],
    };
  },
}

module.exports = nextConfig
