/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/apply',
        destination:
          'https://script.google.com/macros/s/AKfycbxMnpdffvO-BkDIuRx69D4qX3pcGVDo74cbHGFbGCsVpGpSZ4Infhcwjh6URqP98JztEw/exec',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
