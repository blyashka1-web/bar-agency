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
    // Загрузка показывается ТОЛЬКО при первом открытии сайта
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <html lang="ru">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <div className="loader-fullscreen">
            <div className="loader-ring" />
            <p className="loader-text">BAR AGENCY</p>
          </div>
          <style jsx>{`
            .loader-fullscreen {
              position: fixed;
              inset: 0;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              background: #121212;
              z-index: 99999;
              animation: fadeIn 0.3s ease;
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
              opacity: 0;
              animation: textFade 0.5s ease 0.2s forwards;
            }

            @keyframes spin {
              to { transform: rotate(360deg); }
            }

            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }

            @keyframes textFade {
              from { opacity: 0; transform: translateY(6px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </body>
      </html>
    );
  }

  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}