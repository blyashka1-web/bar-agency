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
    // Загрузка только при первом открытии
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ЗАГРУЗЧИК — ВСЕГДА В HTML, НО СКРЫТ ЧЕРЕЗ КЛАСС */}
        <div className={`loader-fullscreen ${!isLoading ? 'loader-hidden' : ''}`}>
          <div className="loader-ring" />
          <p className="loader-text">BAR AGENCY</p>
        </div>

        {/* КОНТЕНТ ПОЯВЛЯЕТСЯ ПОСЛЕ ЗАГРУЗКИ */}
        <div className={`page-content ${isLoading ? 'page-hidden' : ''}`}>
          <Header />
          {children}
        </div>

        <style jsx global>{`
          /* ЗАГРУЗЧИК — ПО УМОЛЧАНИЮ ВИДЕН */
          .loader-fullscreen {
            position: fixed;
            inset: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #121212;
            z-index: 99999;
            transition: opacity 0.5s ease, visibility 0.5s ease;
            opacity: 1;
            visibility: visible;
          }

          /* КОГДА ЗАГРУЗКА ЗАКОНЧИЛАСЬ — ПЛАВНО СКРЫВАЕМ */
          .loader-hidden {
            opacity: 0 !important;
            visibility: hidden !important;
            pointer-events: none !important;
          }

          /* КОНТЕНТ — СКРЫТ ПОКА ЗАГРУЗКА ИДЁТ */
          .page-content {
            opacity: 1;
            transition: opacity 0.4s ease;
          }

          .page-hidden {
            opacity: 0 !important;
            pointer-events: none !important;
          }

          /* АНИМАЦИЯ КРУГА */
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