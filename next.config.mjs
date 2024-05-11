/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "venda-imoveis.caixa.gov.br",
        port: "",
        pathname: "**/*",
      },
    ],
  },
};

export default nextConfig;
