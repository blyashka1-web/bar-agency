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
  description: 'BAR AGENCY — креативное SMM-агентство. Разрабатываем стратегии, создаём вирусный контент и продвигаем бренды в соцсетях.',
  openGraph: {
    title: 'BAR AGENCY — Креативное SMM-агентство',
    url: 'https://bar-agency-srz4.vercel.app',
    siteName: 'BAR AGENCY',
    locale: 'ru_RU',
    type: 'website',
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