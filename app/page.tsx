'use client';

import { useState } from 'react';
import ContactModal from './components/ContactModal';
import ContactForm from './components/ContactForm';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="container">
            <span className="tagline">АНАЛИЗ → СТРАТЕГИЯ → ПРОДВИЖЕНИЕ</span>
            <h1>
              BAR <span className="logo-accent">AGENCY</span>
            </h1>
            <p className="subtitle">Креативное SMM-агентство</p>

            <p className="description">
              Анализируем бренд и создаём стратегию<br />
              для достижения результатов
            </p>
            <div className="metrics-wrapper">
              <span className="metric-item">ER</span>
              <span className="metric-divider">|</span>
              <span className="metric-item">CTR</span>
              <span className="metric-divider">|</span>
              <span className="metric-item">ROI</span>
              <span className="metric-divider">|</span>
              <span className="metric-item">ROMI</span>
            </div>

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
              <a 
                href="https://rodina-fond.ru/?ysclid=ms3impij0356225184" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="client-card"
              >
                <div className="client-logo">
                  <img src="/rodina-logo.png" alt="Благотворительный фонд Родина" className="client-image" />
                </div>
                <span className="client-name">Благотворительный фонд Родина</span>
              </a>

              <a 
                href="https://t.me/ndahrteam" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="client-card"
              >
                <div className="client-logo">
                  <img src="/nda-hr-team-logo.png" alt="NDA HR TEAM" className="client-image" />
                </div>
                <span className="client-name">NDA HR TEAM</span>
              </a>

              <a 
                href="https://moscu.team" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="client-card"
              >
                <div className="client-logo">
                  <img src="/deportivo-logo.png" alt="DEPORTIVO MOSCÚ" className="client-image" />
                </div>
                <span className="client-name">DEPORTIVO MOSCÚ</span>
              </a>
            </div>
          </div>
        </section>

        {/* ФОРМА СВЯЗИ */}
        <section className="contact-section">
          <div className="container">
            <h2>Оставьте заявку</h2>
            <p className="contact-subtitle">Мы свяжемся с вами в ближайшее время</p>
            <ContactForm />
          </div>
        </section>

        {/* ФУТЕР */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-links">
                <a href="/privacy" className="footer-link">Политика конфиденциальности</a>
                <a href="/offer" className="footer-link">Публичная оферта</a>
                <a href="/faq" className="footer-link">Часто задаваемые вопросы</a>
              </div>
              <div className="footer-legal">
                <span className="self-employed-badge">⚖️ Самозанятый</span>
                <span className="footer-inn">ИНН: 772456452113</span>
              </div>
              <p className="footer-copy">© 2026 BAR AGENCY. Все права защищены.</p>
            </div>
          </div>
        </footer>

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
            letter-spacing: 0.1em;
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

          .logo-accent {
            color: #c4b5a0;
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
            line-height: 1.8;
            max-width: 600px;
            margin: 0 auto 8px;
            letter-spacing: 0.02em;
          }

          .metrics-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 32px;
            max-width: 600px;
            margin: 0 auto 32px;
            flex-wrap: wrap;
          }

          .metric-item {
            font-size: 26px;
            font-weight: 400;
            color: #c4b5a0;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
            letter-spacing: 0.08em;
            padding: 0 4px;
            transition: all 0.3s ease;
          }

          .metric-item:hover {
            transform: scale(1.05);
            color: #d4c5b0;
          }

          .metric-divider {
            color: #c4b5a0;
            font-size: 24px;
            font-weight: 300;
            opacity: 0.4;
            user-select: none;
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
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 32px;
            max-width: 900px;
            margin: 0 auto;
          }

          .client-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 16px;
            padding: 30px 20px;
            background: #1a1a1a;
            border-radius: 20px;
            border: 1px solid #2a2a2a;
            transition: all 0.3s ease;
            text-decoration: none;
            cursor: pointer;
            min-height: 200px;
            width: 100%;
          }

          .client-card:hover {
            transform: translateY(-4px);
            border-color: #c4b5a0;
            box-shadow: 0 12px 32px rgba(0,0,0,0.3);
          }

          .client-logo {
            width: 80px;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255,255,255,0.04);
            border-radius: 16px;
            overflow: hidden;
            padding: 12px;
            flex-shrink: 0;
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
            font-size: 16px;
            font-weight: 500;
            color: #b0b0b0;
            text-align: center;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
            line-height: 1.4;
          }

          .client-card:hover .client-name {
            color: #ffffff;
          }

          /* ФОРМА СВЯЗИ */
          .contact-section {
            padding: 60px 0;
            background: #121212;
            border-bottom: 1px solid #2a2a2a;
          }

          .contact-section h2 {
            font-size: 36px;
            font-weight: 700;
            color: #ffffff;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
            text-align: center;
            margin-bottom: 4px;
          }

          .contact-subtitle {
            text-align: center;
            color: #888;
            font-size: 18px;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
            margin-bottom: 32px;
          }

          /* FOOTER */
          .footer {
            padding: 30px 0 20px;
            background: #121212;
            border-top: 1px solid #2a2a2a;
          }

          .footer-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
          }

          .footer-links {
            display: flex;
            gap: 24px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .footer-link {
            color: #888;
            font-size: 14px;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
            text-decoration: none;
            transition: color 0.2s;
          }

          .footer-link:hover {
            color: #c4b5a0;
          }

          .footer-legal {
            display: flex;
            align-items: center;
            gap: 16px;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 4px;
          }

          .self-employed-badge {
            display: inline-block;
            padding: 4px 14px;
            background: rgba(196, 181, 160, 0.1);
            border: 1px solid rgba(196, 181, 160, 0.2);
            border-radius: 20px;
            font-size: 12px;
            color: #c4b5a0;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          }

          .footer-inn {
            font-size: 12px;
            color: #555;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          }

          .footer-copy {
            color: #555;
            font-size: 13px;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
            margin: 0;
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
              font-size: 15px;
              max-width: 100%;
              padding: 0 10px;
              line-height: 1.5;
            }

            .metrics-wrapper {
              gap: 16px;
              max-width: 100%;
              padding: 0 10px;
            }

            .metric-item {
              font-size: 20px;
              letter-spacing: 0.06em;
            }

            .metric-divider {
              display: none;
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
              grid-template-columns: 1fr;
              gap: 16px;
              max-width: 100%;
            }

            .client-card {
              min-height: 160px;
              padding: 20px 16px;
            }

            .client-logo {
              width: 60px;
              height: 60px;
              padding: 8px;
            }

            .client-name {
              font-size: 14px;
            }

            .contact-section {
              padding: 40px 0;
            }

            .contact-section h2 {
              font-size: 28px;
            }

            .contact-subtitle {
              font-size: 16px;
            }

            .footer-links {
              flex-direction: column;
              align-items: center;
              gap: 8px;
            }
          }
        `}</style>
      </main>
    </>
  );
}