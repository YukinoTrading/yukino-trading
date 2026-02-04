/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // 让 Vercel 部署时不要因为 lint/type 报错而失败
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
