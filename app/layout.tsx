'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (isLoading) {
    return (
      <html lang="ru">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <div className="loader-container">
            <div className="loader-spinner" />
            <p>Загрузка...</p>
          </div>
          <style jsx>{`
            .loader-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              background: #121212;
              gap: 20px;
              font-family: -apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif;
            }
            .loader-spinner {
              width: 44px;
              height: 44px;
              border: 3px solid #2a2a2a;
              border-top: 3px solid #c4b5a0;
              border-radius: 50%;
              animation: spin 0.8s linear infinite;
            }
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
            .loader-container p {
              color: #b0b0b0;
              font-size: 15px;
              font-weight: 400;
              margin: 0;
            }
          `}</style>
        </body>
      </html>
    );
  }

  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* АНИМИРОВАННЫЙ ФОН */}
        <div className="animated-bg" />
        
        <Header />
        {children}
      </body>
    </html>
  );
}