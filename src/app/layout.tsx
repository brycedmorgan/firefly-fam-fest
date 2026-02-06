import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Firefly Fam Fest 2026 | Eagle Mountain Family Festival',
  description: 'Join us Saturday, May 9, 2026 in Eagle Mountain, Utah for an unforgettable day of family fun. Bounce houses, food trucks, live entertainment, and more.',
  keywords: ['Firefly Fam Fest', 'Utah family festival', 'Eagle Mountain events', 'family activities Utah', 'Candlelight Homes'],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Firefly Fam Fest 2026 | Eagle Mountain Family Festival',
    description: 'An unforgettable day of wonder, play, and togetherness at Eagle Mountain\'s newest community.',
    type: 'website',
    images: ['/images/logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Inter', system-ui, sans-serif" }} className="[&_h1]:font-serif [&_h2]:font-serif [&_h3]:font-serif">
        {children}
      </body>
    </html>
  );
}
