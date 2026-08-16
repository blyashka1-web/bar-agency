'use client';

import { Suspense } from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Компонент загрузки
function Loader() {
  return (
    <div className="loader-fullscreen">
      <div className="loader-ring" />
      <p className="loader-text">BAR AGENCY</p>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Suspense fallback={<Loader />}>
          <Header />
          {children}
        </Suspense>

        <style jsx global>{`
          .loader-fullscreen {
            position: fixed;
            inset: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #121212;
            z-index: 99999;
          }

          .loader-ring {
            width: 56px;
            height: 56px;
            border: 3px solid #2a2a2a;
            border-top: 3px solid #c4b5a0;
            border-radius: 50%;
            animation: spin 0.9s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }

          .loader-text {
            margin-top: 20px;
            color: #c4b5a0;
            font-size: 18px;
            font-weight: 600;
            letter-spacing: 0.15em;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          }

          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }

          body {
            background: #121212;
            margin: 0;
            padding: 0;
            min-height: 100vh;
          }
        `}</style>
      </body>
    </html>
  );
}