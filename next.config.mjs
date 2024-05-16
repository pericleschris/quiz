/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-quiz-a0cze4f3f0hkdjdu.z03.azurefd.net",
        port: "",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
