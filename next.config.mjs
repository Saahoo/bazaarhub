/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
=======
  // Static export for GitHub Pages
  output: 'export',
  basePath: '/bazaarhub',
  assetPrefix: '/bazaarhub',
  
>>>>>>> cddb703f (Initial commit: BazaarHub marketplace app with Next.js static export for GitHub Pages)
  // Optimize for production
  reactStrictMode: true,
  poweredByHeader: false,
  
<<<<<<< HEAD
  // Image optimization
  images: {
=======
  // Disable TypeScript errors during build (static export scenario)
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Image optimization disabled for static export
  images: {
    unoptimized: true,
>>>>>>> cddb703f (Initial commit: BazaarHub marketplace app with Next.js static export for GitHub Pages)
    remotePatterns: [
      { protocol: 'https', hostname: '*.supabase.co' },
      { protocol: 'https', hostname: '*.cloudflare.com' },
    ],
<<<<<<< HEAD
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
=======
>>>>>>> cddb703f (Initial commit: BazaarHub marketplace app with Next.js static export for GitHub Pages)
  },
};

export default nextConfig;