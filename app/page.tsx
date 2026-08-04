'use client';

export default function Home() {
  const clients = [
    { name: 'Beauty Story', emoji: '🧴', color: '#d4c5b2' },
    { name: 'Moscow Coffee', emoji: '☕', color: '#c4b5a0' },
    { name: 'Urban Sneakers', emoji: '👟', color: '#b8a99a' },
    { name: 'Luxe Jewelry', emoji: '💎', color: '#d1c4b8' },
    { name: 'Wine & People', emoji: '🍷', color: '#e8d5c4' },
    { name: 'AppVision', emoji: '📱', color: '#d5c4b8' },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <span className="badge">SMM‑агентство</span>
          <h1>Вирусный контент<br />и стратегия</h1>
          <p className="hero-text">
            Не понимаете как устроены соцсети и для чего они —<br />
            мы тоже, давайте это исправлять!
          </p>
          <a href="/cases" className="btn-primary">Наши проекты</a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <div className="container">
          <h2>Что мы делаем</h2>
          <p className="subtitle">
            Стратегия, контент, аналитика — всё, чтобы бренд звучал громко.
          </p>
          <div className="grid">
            <div className="card card-haki">
              <h3>📊 Стратегия</h3>
              <p>Аналитика, позиционирование, план на 12 месяцев.</p>
            </div>
            <div className="card card-burgundy">
              <h3>🔥 Вирусный контент</h3>
              <p>Сценарии, мемы, тренды — только то, что летит.</p>
            </div>
            <div className="card card-gold">
              <h3>🎯 Комьюнити</h3>
              <p>Работаем с аудиторией, создаём лояльность.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="clients">
        <div className="container">
          <h2>Наши клиенты</h2>
          <p className="subtitle">Бренды, которым мы помогли вырасти</p>
          <div className="clients-grid">
            {clients.map((client, index) => (
              <div key={index} className="client-card">
                <div className="client-logo" style={{ background: client.color }}>
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

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', sans-serif;
          background: #121212;
          color: #ffffff;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 30px;
        }

        section {
          padding: 120px 0;
        }

        h1 {
          font-size: clamp(56px, 10vw, 96px);
          font-weight: 700;
          letter-spacing: -0.04em;
          line-height: 1.05;
          margin: 16px 0 24px;
          color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
        }

        h2 {
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 700;
          letter-spacing: -0.03em;
          margin-bottom: 16px;
          color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
        }

        .subtitle {
          font-size: 20px;
          color: #b0b0b0;
          max-width: 600px;
          font-weight: 400;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
        }

        .badge {
          display: inline-block;
          background: #7a2e2a;
          color: #fff;
          padding: 6px 20px;
          border-radius: 40px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
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
          margin-top: 24px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(122, 46, 42, 0.3);
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
        }

        .btn-primary:hover {
          transform: scale(1.02);
          background: #5a2220;
          box-shadow: 0 6px 30px rgba(122, 46, 42, 0.4);
        }

        /* HERO */
        .hero {
          background: #1a1a1a;
          padding: 160px 0 140px;
          text-align: left;
          border-bottom: 1px solid #2a2a2a;
        }

        .hero-text {
          font-size: 22px;
          color: #b0b0b0;
          max-width: 560px;
          font-weight: 400;
          line-height: 1.5;
          margin: 16px 0 8px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
        }

        /* ABOUT */
        .about {
          background: #121212;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 40px;
          margin-top: 56px;
        }

        .card {
          padding: 32px 28px;
          border-radius: 24px;
          transition: all 0.3s ease;
          border: 1px solid #2a2a2a;
          background: #1a1a1a;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          border-color: #c4b5a0;
        }

        .card-haki {
          border-color: #c4b5a0;
        }

        .card-burgundy {
          border-color: #7a2e2a;
        }

        .card-gold {
          border-color: #d4af37;
        }

        .card h3 {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 8px;
          color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
        }

        .card p {
          font-size: 17px;
          color: #b0b0b0;
          line-height: 1.5;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
        }

        /* CLIENTS */
        .clients {
          background: #0a0a0a;
          border-top: 1px solid #2a2a2a;
          border-bottom: 1px solid #2a2a2a;
        }

        .clients-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 32px;
          margin-top: 48px;
        }

        .client-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 24px 16px;
          background: #1a1a1a;
          border-radius: 20px;
          border: 1px solid #2a2a2a;
          transition: all 0.3s ease;
        }

        .client-card:hover {
          transform: translateY(-4px);
          border-color: #c4b5a0;
          box-shadow: 0 12px 32px rgba(0,0,0,0.3);
        }

        .client-logo {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .client-card:hover .client-logo {
          transform: scale(1.05);
        }

        .client-emoji {
          font-size: 36px;
        }

        .client-name {
          font-size: 14px;
          font-weight: 500;
          color: #b0b0b0;
          text-align: center;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
          letter-spacing: 0.02em;
        }

        .client-card:hover .client-name {
          color: #ffffff;
        }

        @media (max-width: 768px) {
          section {
            padding: 60px 0;
          }
          .hero {
            padding: 120px 0 80px;
          }
          h1 {
            font-size: 44px;
          }
          .grid {
            grid-template-columns: 1fr;
          }
          .hero-text {
            font-size: 18px;
          }
          .subtitle {
            font-size: 17px;
          }
          .clients-grid {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 16px;
          }
          .client-logo {
            width: 60px;
            height: 60px;
          }
          .client-emoji {
            font-size: 28px;
          }
          .client-name {
            font-size: 12px;
          }
          .client-card {
            padding: 16px 12px;
          }
        }
      `}</style>
    </main>
  );
}