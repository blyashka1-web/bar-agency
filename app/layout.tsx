'use client';

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
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Содержимое появится только после загрузки страницы */}
        <div className="page-content">
          <Header />
          {children}
        </div>

        <style jsx global>{`
          /* Скрываем контент до полной загрузки */
          .page-content {
            opacity: 0;
            animation: pageFadeIn 0.6s ease 0.3s forwards;
          }

          @keyframes pageFadeIn {
            from {
              opacity: 0;
              transform: translateY(12px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Стили для фона */
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