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

export const metadata = {
  title: 'BAR AGENCY — Креативное SMM-агентство',
  description: 'Разрабатываем стратегии, создаём вирусный контент и продвигаем бренды в соцсетях. REELS | TikTok | YouTube | SHORTS',
  openGraph: {
    title: 'BAR AGENCY — Креативное SMM-агентство',
    description: 'Разрабатываем стратегии, создаём вирусный контент и продвигаем бренды в соцсетях.',
    url: 'https://bar-agency-srz4.vercel.app',
    siteName: 'BAR AGENCY',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BAR AGENCY — Креативное SMM-агентство',
    description: 'Разрабатываем стратегии, создаём вирусный контент и продвигаем бренды в соцсетях.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}