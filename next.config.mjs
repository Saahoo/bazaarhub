/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages
  output: 'export',
  distDir: 'docs',
  basePath: '/bazaarhub',
  assetPrefix: '/bazaarhub/',
  
  // Optimize for production
  reactStrictMode: true,
  poweredByHeader: false,
  
  // Disable TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Image optimization disabled for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: '*.supabase.co' },
      { protocol: 'https', hostname: '*.cloudflare.com' },
    ],
  },
};

export default nextConfig;