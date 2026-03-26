/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // For static export to GitHub Pages
  images: {
    unoptimized: true,  // Required for static export
  },
  trailingSlash: true,  // Helps with routing
}

module.exports = nextConfig