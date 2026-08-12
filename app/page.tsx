'use client';

import { useState } from 'react';
import ContactModal from './components/ContactModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clients = [
    { name: 'Beauty Story', emoji: '🧴' },
    { name: 'Moscow Coffee', emoji: '☕' },
    { name: 'Urban Sneakers', emoji: '👟' },
    { name: 'Luxe Jewelry', emoji: '💎' },
    { name: 'Wine & People', emoji: '🍷' },
    { name: 'AppVision', emoji: '📱' },
  ];

  return (
    <>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="container">
            <span className="tagline">ВИРУСНЫЙ КОНТЕНТ • РЕАЛЬНЫЙ ОХВАТ</span>
            <h1>BAR AGENCY</h1>
            <p className="subtitle">Viral Content Company</p>

            <p className="description">
              Создаем контент, который взрывает соцсети.<br />
              REELS | TikTok | YOUTUBE | SHORTS
            </p>

            <div className="actions">
              <a href="/cases" className="btn-outline">Наши проекты</a>
              <button onClick={() => setIsModalOpen(true)} className="btn-outline">
                Написать
              </button>
            </div>
          </div>
        </section>

        {/* КЛИЕНТЫ */}
        <section className="clients">
          <div className="container">
            <h2>Наши клиенты</h2>
            <p className="clients-subtitle">Бренды, которым мы помогли вырасти</p>
            <div className="clients-grid">
              {clients.map((client, index) => (
                <div key={index} className="client-card">
                  <div className="client-logo">
                    <span className="client-emoji">{client.emoji}</span>
                  </div>
                  <span className="client-name">{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <style jsx>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 30px;
          }

          /* HERO */
          .hero {
            padding: 120px 0 80px;
            text-align: center;
            background: #121212;
            border-bottom: 1px solid #2a2a2a;
          }

          .tagline {
            display: inline-block;
            color: #c4b5a0;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
            margin-bottom: 16px;
            padding: 6px 20px;
            border: 1px solid #2a2a2a;
            border-radius: 40px;
          }

          h1 {
            font-size: clamp(64px, 12vw, 140px);
            font-weight: 700;
            letter-spacing: -0.04em;
            color: #ffffff;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
            margin: 0;
            line-height: 1.05;
          }

          .subtitle {
            font-size: 22px;
            color: #6e6e6e;
            font-weight: 400;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
            margin-top: 8px;
            letter-spacing: 0.02em;
          }

          .description {
            font-size: 18px;
            color: #b0b0b0;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
            line-height: 1.6;
            max-width: 500px;
            margin: 0 auto 32px;
            letter-spacing: 0.02em;
          }

          .actions {
            display: flex;
            justify-content: center;
            gap: 16px;
            flex-wrap: wrap;
          }

          .btn-outline {
            display: inline-block;
            background: transparent;
            color: #ffffff;
            padding: 16px 44px;
            border-radius: 40px;
            text-decoration: none;
            font-weight: 600;
            font-size: 17px;
            transition: all 0.25s ease;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
            border: 1px solid #2a2a2a;
            cursor: pointer;
          }

          .btn-outline:hover {
            border-color: #c4b5a0;
            background: rgba(196, 181, 160, 0.1);
            color: #ffffff;
          }

          /* CLIENTS */
          .clients {
            padding: 80px 0;
            background: #121212;
            border-bottom: 1px solid #2a2a2a;
          }

          .clients h2 {
            font-size: 36px;
            font-weight: 700;
            color: #ffffff;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
            text-align: center;
            margin-bottom: 8px;
          }

          .clients-subtitle {
            font-size: 18px;
            color: #6e6e6e;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
            text-align: center;
            margin-bottom: 48px;
          }

          .clients-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 32px;
            justify-items: center;
          }

          .client-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            padding: 20px 16px;
            background: #1a1a1a;
            border-radius: 20px;
            border: 1px solid #2a2a2a;
            transition: all 0.3s ease;
            width: 100%;
            max-width: 150px;
          }

          .client-card:hover {
            transform: translateY(-4px);
            border-color: #c4b5a0;
            box-shadow: 0 12px 32px rgba(0,0,0,0.3);
          }

          .client-logo {
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255,255,255,0.04);
            border-radius: 50%;
          }

          .client-emoji {
            font-size: 28px;
          }

          .client-name {
            font-size: 13px;
            font-weight: 500;
            color: #b0b0b0;
            text-align: center;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
          }

          .client-card:hover .client-name {
            color: #ffffff;
          }

          @media (max-width: 768px) {
            .hero {
              padding: 80px 0 60px;
            }

            h1 {
              font-size: 56px;
            }

            .subtitle {
              font-size: 18px;
            }

            .description {
              font-size: 16px;
            }

            .actions {
              flex-direction: column;
              align-items: center;
            }

            .btn-outline {
              width: 100%;
              max-width: 280px;
              text-align: center;
            }

            .clients {
              padding: 60px 0;
            }

            .clients-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 16px;
            }

            .client-card {
              max-width: 100%;
              padding: 16px 12px;
            }

            .client-logo {
              width: 48px;
              height: 48px;
            }

            .client-emoji {
              font-size: 24px;
            }

            .client-name {
              font-size: 11px;
            }
          }

          @media (max-width: 480px) {
            .clients-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
        `}</style>
      </main>
    </>
  );
}