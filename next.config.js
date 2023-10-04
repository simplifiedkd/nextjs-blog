/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return {
          beforeFiles: [
            // {
            //   source: '/templates/search/:keyword',
            //   destination: '/templates?search=:keyword'
            // },
          ],
          fallback: [
            {
              source: "/:path*",
              destination: `https://web.simplified.com/:path*`,
            },
          ],
        };
      },
}

module.exports = nextConfig
