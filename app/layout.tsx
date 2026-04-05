import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Himanshu - Portfolio',
  description: 'Crafting elegant digital experiences with code',
  openGraph: {
    title: 'Himanshu - Portfolio',
    description: 'Full-stack developer specializing in React, Next.js, and TypeScript',
    url: 'https://yourdomain.com',
    siteName: 'Himanshu Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Himanshu - Portfolio',
    description: 'Full-stack developer portfolio',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}


// Benefits of this refactor:

// Better SEO - Search engines can crawl your content easily
// Faster initial load - Less JavaScript sent to the client
// Metadata support - Can add custom titles, descriptions, OG images
// Better performance - Only the navbar is interactive client-side




// According to the Next.js documentation, generateMetadata and the metadata export are only supported in Server Components. By keeping page.tsx as a Server Component, you get:

// Better SEO with proper metadata
// Faster initial page load
// The ability to use generateMetadata for dynamic titles
// At the same time, all your beautiful animations from framer-motion work because they're in a Client Component that hydrates on the browser.

