import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Geist_Mono } from 'next/font/google';

import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GoogleAnalytics } from '@/features/analytics/components/GoogleAnalytics';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Joseph Brummel',
  description: 'Frontend Web Developer based in Manila, Philippines.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} ${geistMono.variable} flex min-h-full flex-col bg-slate-100 font-sans antialiased`}
      >
        <Navbar />
        <main className="mx-auto w-[90%] max-w-6xl flex-1">{children}</main>
        <Footer />
        <GoogleAnalytics />
        <Script
          src="https://ai-chat-widget.monkeystylle.workers.dev/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
