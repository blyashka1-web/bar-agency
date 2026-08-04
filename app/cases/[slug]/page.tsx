'use client';

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <span className="badge">SMM‑агентство</span>
          <h1>Вирусный контент<br />и стратегия</h1>
          <p className="hero-text">
            Не понимаете как устроены соцсети —<br />
            мы тоже, давайте это исправлять.
          </p>
          <a href="/cases" className="btn">Наши проекты</a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <div className="container">
          <h2>Что мы делаем</h2>
          <p className="subtitle">
            Стратегия, контент, аналитика — всё, чтобы бренд звучал громко.
          </p>
          <div className="grid">
            <div className="card">
              <h3>📊 Стратегия</h3>
              <p>Аналитика, позиционирование, план на 12 месяцев.</p>
            </div>
            <div className="card">
              <h3>🔥 Вирусный контент</h3>
              <p>Сценарии, мемы, тренды — только то, что летит.</p>
            </div>
            <div className="card">
              <h3>🎯 Комьюнити</h3>
              <p>Работаем с аудиторией, создаём лояльность.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Начнём?</h2>
          <p>Расскажите о своём бренде — сделаем стратегию.</p>
          <a href="mailto:hello@bar-agency.ru" className="btn">Написать нам</a>
        </div>
      </section>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
          background: #ffffff;
          color: #1a1a1a;
          -webkit-font-smoothing: antialiased;
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
          color: #1a1a1a;
        }

        h2 {
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 700;
          letter-spacing: -0.03em;
          margin-bottom: 16px;
          color: #1a1a1a;
        }

        .subtitle {
          font-size: 20px;
          color: #6e6e6e;
          max-width: 600px;
          font-weight: 400;
        }

        .badge {
          display: inline-block;
          background: #1a1a1a;
          color: #fff;
          padding: 6px 20px;
          border-radius: 40px;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .btn {
          display: inline-block;
          background: #1a1a1a;
          color: #fff;
          padding: 16px 44px;
          border-radius: 40px;
          text-decoration: none;
          font-weight: 500;
          font-size: 17px;
          transition: all 0.25s ease;
          margin-top: 24px;
          border: none;
          cursor: pointer;
        }

        .btn:hover {
          background: #3a3a3a;
          transform: scale(1.02);
        }

        /* HERO */
        .hero {
          background: #f5f0eb;
          padding: 140px 0 160px;
          text-align: left;
        }

        .hero-text {
          font-size: 22px;
          color: #3a3a3a;
          max-width: 560px;
          font-weight: 400;
          line-height: 1.5;
          margin: 16px 0 8px;
        }

        /* ABOUT */
        .about {
          background: #ffffff;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 40px;
          margin-top: 56px;
        }

        .card {
          padding: 0;
        }

        .card h3 {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 8px;
          color: #1a1a1a;
        }

        .card p {
          font-size: 17px;
          color: #6e6e6e;
          line-height: 1.5;
        }

        /* CONTACT */
        .contact {
          background: #1a1a1a;
          color: #ffffff;
          text-align: center;
          border-radius: 40px 40px 0 0;
        }

        .contact h2 {
          color: #ffffff;
        }

        .contact p {
          font-size: 20px;
          color: #b0b0b0;
          margin-bottom: 8px;
        }

        .contact .btn {
          background: #ffffff;
          color: #1a1a1a;
        }

        .contact .btn:hover {
          background: #e0e0e0;
        }

        @media (max-width: 768px) {
          section {
            padding: 60px 0;
          }
          .hero {
            padding: 80px 0 100px;
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
        }
      `}</style>
    </main>
  );
}