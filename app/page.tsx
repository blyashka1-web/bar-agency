'use client';

import Link from 'next/link';

export default function Home() {
  const stats = [
    { number: '128', label: 'Публикации' },
    { number: '893K', label: 'Подписчики' },
    { number: '12', label: 'Проекты' },
  ];

  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="tagline">ВИРУСНЫЙ КОНТЕНТ • РЕАЛЬНЫЙ ОХВАТ</span>
          <h1>BAR AGENCY</h1>
          <p className="subtitle">Viral Content Company</p>

          <div className="stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <p className="description">
            Создаем контент, который взрывает соцсети.<br />
            REELS | TikTok | YOUTUBE | SHORTS
          </p>

          <div className="actions">
            <Link href="/cases" className="btn-primary">Наши проекты</Link>
            <a href="#contact" className="btn-secondary">Написать</a>
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

        .hero {
          padding: 120px 0 100px;
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

        .stats {
          display: flex;
          justify-content: center;
          gap: 60px;
          margin: 48px 0 40px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-number {
          font-size: 44px;
          font-weight: 700;
          color: #c4b5a0;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .stat-label {
          font-size: 14px;
          color: #6e6e6e;
          font-weight: 400;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
          margin-top: 4px;
          letter-spacing: 0.04em;
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

        .btn-primary {
          display: inline-block;
          background: #c4b5a0;
          color: #121212;
          padding: 16px 44px;
          border-radius: 40px;
          text-decoration: none;
          font-weight: 600;
          font-size: 17px;
          transition: all 0.25s ease;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(196, 181, 160, 0.3);
        }

        .btn-primary:hover {
          transform: scale(1.02);
          background: #d4c5b0;
          box-shadow: 0 6px 30px rgba(196, 181, 160, 0.4);
        }

        .btn-secondary {
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

        .btn-secondary:hover {
          border-color: #c4b5a0;
          background: rgba(196, 181, 160, 0.1);
        }

        @media (max-width: 768px) {
          .hero {
            padding: 80px 0 60px;
          }

          h1 {
            font-size: 56px;
          }

          .stats {
            gap: 30px;
            flex-wrap: wrap;
          }

          .stat-number {
            font-size: 32px;
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

          .btn-primary,
          .btn-secondary {
            width: 100%;
            max-width: 280px;
            text-align: center;
          }
        }
      `}</style>
    </main>
  );
}