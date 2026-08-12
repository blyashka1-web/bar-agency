'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return null;
  }

  const stats = [
    { number: '128', label: 'Публикации' },
    { number: '893K', label: 'Подписчики' },
    { number: '12', label: 'Проекты' },
  ];

  const cards = [
    { id: 1, title: 'Beauty Story', category: 'Косметика', image: '🧴' },
    { id: 2, title: 'Moscow Coffee', category: 'F&B', image: '☕' },
    { id: 3, title: 'Urban Sneakers', category: 'Одежда', image: '👟' },
    { id: 4, title: 'Luxe Jewelry', category: 'Ювелирка', image: '💎' },
    { id: 5, title: 'Wine & People', category: 'Напитки', image: '🍷' },
    { id: 6, title: 'AppVision', category: 'IT', image: '📱' },
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

          <a href="/cases" className="btn-primary">Наши проекты</a>
        </div>
      </section>

      <section className="cards">
        <div className="container">
          <div className="cards-grid">
            {cards.map((card) => (
              <a href={`/cases/${card.title.toLowerCase().replace(/ /g, '-')}`} key={card.id} className="card-item">
                <div className="card-image">{card.image}</div>
                <h3>{card.title}</h3>
                <span className="card-category">{card.category}</span>
              </a>
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
          color: #7a2e2a;
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
          color: #7a2e2a;
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

        .btn-primary {
          display: inline-block;
          background: #7a2e2a;
          color: #fff;
          padding: 16px 44px;
          border-radius: 40px;
          text-decoration: none;
          font-weight: 600;
          font-size: 17px;
          transition: all 0.25s ease;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(122, 46, 42, 0.3);
        }

        .btn-primary:hover {
          transform: scale(1.02);
          background: #5a2220;
          box-shadow: 0 6px 30px rgba(122, 46, 42, 0.4);
        }

        /* CARDS */
        .cards {
          padding: 80px 0;
          background: #121212;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .card-item {
          background: #1a1a1a;
          border-radius: 24px;
          padding: 32px 24px;
          border: 1px solid #2a2a2a;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
          text-align: center;
          display: block;
        }

        .card-item:hover {
          transform: translateY(-6px);
          border-color: #7a2e2a;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .card-image {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .card-item h3 {
          font-size: 20px;
          font-weight: 600;
          color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
          margin-bottom: 4px;
        }

        .card-category {
          font-size: 14px;
          color: #6e6e6e;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
          letter-spacing: 0.04em;
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

          .cards-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .subtitle {
            font-size: 18px;
          }
        }
      `}</style>
    </main>
  );
}