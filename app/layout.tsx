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
  description: 'BAR AGENCY — креативное SMM-агентство. Создаём вирусный контент и продвигаем бренды в соцсетях.',
  applicationName: 'BAR AGENCY',
  authors: [{ name: 'BAR AGENCY' }],
  generator: 'Next.js',
  keywords: ['SMM', 'маркетинг', 'вирусный контент', 'продвижение', 'соцсети'],
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'BAR AGENCY — Креативное SMM-агентство',
    description: 'BAR AGENCY — креативное SMM-агентство. Создаём вирусный контент и продвигаем бренды в соцсетях.',
    url: 'https://bar-agency-srz4.vercel.app',
    siteName: 'BAR AGENCY',
    locale: 'ru_RU',
    type: 'website',
    // Принудительно добавляем параметр, чтобы сбросить кэш
    determiner: 'auto',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true, // ← важно для сброса кэша
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'ваш-код-верификации', // если есть
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