'use client';

import { useState } from 'react';
import ContactModal from './components/ContactModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clients = [
    { name: 'Благотворительный фонд Родина', logo: '/rodina-logo.png' },
    { name: 'NDA HR TEAM', logo: '/nda-hr-team-logo.png' },
  ];

  return (
    <>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <main>
        {/* АНИМИРОВАННЫЙ ФОН */}
        <div className="animated-bg" />

        {/* HERO */}
        <section className="hero">
          <div className="container">
            <span className="tagline">ВИРУСНЫЙ КОНТЕНТ • СТРАТЕГИЯ • ПРОДВИЖЕНИЕ</span>
            <h1>BAR AGENCY</h1>
            <p className="subtitle">Креативное SMM-агентство</p>

            <p className="description">
              Разрабатываем стратегии, создаём контент и продвигаем бренды в соцсетях.<br />
              REELS | TikTok | YOUTUBE | SHORTS
            </p>

            <div className="actions">
              <a href="/services" className="btn-outline">Услуги</a>
              <a href="/cases" className="btn-outline">Наши проекты</a>
              <button onClick={() => window.open('https://t.me/lawayasha', '_blank')} className="btn-outline">
                Написать
              </button>
            </div>
          </div>
        </section>

        {/* КЛИЕНТЫ */}
        <section className="clients">
          <div className="container">
            <h2>Наши текущие партнеры</h2>
            <p className="clients-subtitle">Компании, с которыми мы работаем на данный момент</p>
            <div className="clients-grid">
              {clients.map((client, index) => (
                <div key={index} className="client-card">
                  <div className="client-logo">
                    <img src={client.logo} alt={client.name} className="client-image" />
                  </div>
                  <span className="client-name">{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <style jsx>{`
          /* === АНИМИРОВАННЫЙ ФОН === */
          .animated-bg {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 0;
            pointer-events: none;
            background: 
              radial-gradient(ellipse at 20% 50%, rgba(196, 181, 160, 0.06) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 20%, rgba(196, 181, 160, 0.04) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 80%, rgba(122, 46, 42, 0.05) 0%, transparent 50%),
              radial-gradient(ellipse at 10% 80%, rgba(212, 175, 55, 0.03) 0%, transparent 40%),
              radial-gradient(ellipse at 90% 70%, rgba(196, 181, 160, 0.04) 0%, transparent 40%);
            background-blend-mode: overlay;
            animation: backgroundMove 20s ease-in-out infinite alternate;
          }

          @keyframes backgroundMove {
            0% {
              transform: scale(1) rotate(0deg);
            }
            25% {
              transform: scale(1.02) rotate(0.5deg);
            }
            50% {
              transform: scale(1.04) rotate(-0.5deg);
            }
            75% {
              transform: scale(1.02) rotate(0.3deg);
            }
            100% {
              transform: scale(1) rotate(0deg);
            }
          }

          /* === ТОЧКИ === */
          .animated-bg::after {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
            background-image: 
              radial-gradient(circle at 10% 20%, rgba(196, 181, 160, 0.08) 1px, transparent 1px),
              radial-gradient(circle at 30% 70%, rgba(196, 181, 160, 0.05) 1px, transparent 1px),
              radial-gradient(circle at 50% 30%, rgba(212, 175, 55, 0.04) 1px, transparent 1px),
              radial-gradient(circle at 70% 80%, rgba(196, 181, 160, 0.06) 1px, transparent 1px),
              radial-gradient(circle at 90% 40%, rgba(122, 46, 42, 0.05) 1px, transparent 1px);
            background-size: 200px 200px;
            animation: dotsMove 30s linear infinite;
            opacity: 0.5;
          }

          @keyframes dotsMove {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(30px, 30px);
            }
          }

          .container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 30px;
          }

          /* HERO */
          .hero {
            position: relative;
            z-index: 1;
            padding: 120px 0 80px;
            text-align: center;
            background: transparent;
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
            max-width: 600px;
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
            position: relative;
            z-index: 1;
            padding: 80px 0;
            background: transparent;
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
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 32px;
          }

          .client-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            padding: 40px 50px;
            background: #1a1a1a;
            border-radius: 20px;
            border: 1px solid #2a2a2a;
            transition: all 0.3s ease;
            max-width: 320px;
            width: 100%;
          }

          .client-card:hover {
            transform: translateY(-4px);
            border-color: #c4b5a0;
            box-shadow: 0 12px 32px rgba(0,0,0,0.3);
          }

          .client-logo {
            width: 120px;
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255,255,255,0.04);
            border-radius: 16px;
            overflow: hidden;
            padding: 16px;
          }

          .client-image {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            filter: brightness(1);
            transition: filter 0.3s ease;
          }

          .client-card:hover .client-image {
            filter: brightness(1.1);
          }

          .client-name {
            font-size: 18px;
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
              max-width: 100%;
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
              flex-direction: column;
              gap: 20px;
            }

            .client-card {
              max-width: 100%;
              padding: 30px 20px;
            }

            .client-logo {
              width: 100px;
              height: 100px;
            }

            .client-name {
              font-size: 16px;
            }
          }
        `}</style>
      </main>
    </>
  );
}