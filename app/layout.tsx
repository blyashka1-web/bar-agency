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
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <html lang="ru">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <div className="loader-fullscreen">
            <div className="loader-ring" />
          </div>
          <style jsx>{`
            .loader-fullscreen {
              position: fixed;
              inset: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              background: #121212;
              z-index: 99999;
              animation: fadeIn 0.2s ease;
            }

            .loader-ring {
              width: 48px;
              height: 48px;
              border: 3px solid #2a2a2a;
              border-top: 3px solid #c4b5a0;
              border-radius: 50%;
              animation: spin 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            }

            @keyframes spin {
              to { transform: rotate(360deg); }
            }

            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
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