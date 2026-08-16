'use client';

import { useEffect, useState } from 'react';
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Показываем загрузку только при первом открытии
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {isLoading ? (
          <div className="loader-fullscreen">
            <div className="loader-ring" />
            <p className="loader-text">Загрузка...</p>
          </div>
        ) : (
          <>
            <Header />
            {children}
          </>
        )}

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
            width: 48px;
            height: 48px;
            border: 3px solid #2a2a2a;
            border-top: 3px solid #c4b5a0;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }

          .loader-text {
            margin-top: 16px;
            color: #b0b0b0;
            font-size: 15px;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          }

          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </body>
    </html>
  );
}