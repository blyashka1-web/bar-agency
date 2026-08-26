'use client';

export default function CasesPage() {
  const cases = [
    {
      slug: 'yandex-food',
      logo: '/cases/yandex-food/logo.png',
      tag: 'IT / Платформа',
      title: 'Яндекс Еда',
      desc: 'Вирусный ролик с суммарным охватом 50+ млн',
      bg: '#2a2a2a',
    },
    {
      slug: 'urent',
      logo: '/cases/urent/logo.png',
      tag: 'Шеринг / Технологии',
      title: 'Urent',
      desc: 'Создание и продвижение маскота Юрентик',
      bg: '#1a3a2a',
    },
    {
      slug: 'deportivo',
      logo: '/cases/deportivo/logo.png',
      tag: 'Спорт / Lifestyle',
      title: 'DEPORTIVO MOSCÚ',
      desc: 'Публикации в мировых СМИ и репортажи',
      bg: '#2a2a1a',
    },
    {
      slug: 'fullhouse',
      logo: '/cases/fullhouse/logo.png',
      tag: 'iGaming / SMM',
      title: 'Клуб «Фулл Хаус»',
      desc: 'Ведение Telegram-канала и создание YouTube Shorts для гемблинг-проекта',
      bg: '#1a2a2a',
    },
    {
      slug: 'promminer',
      logo: '/cases/promminer/logo.png',
      tag: 'IT / Майнинг',
      title: 'Promminer',
      desc: 'Разработка и реализация стратегии для соцсетей',
      bg: '#2a2a2a',
    },
    {
      slug: 'nda-hr-team',
      logo: '/cases/nda-hr-team/logo.png',
      tag: 'HR / IGaming',
      title: 'NDA HR TEAM',
      desc: 'Построение HR-бренда с нуля: стратегия, контент, коммуникация',
      bg: '#2a1a1a',
    },
    {
      slug: 'spinbetter',
      logo: '',
      tag: 'Беттинг / Маркетинг',
      title: 'iGaming Company (NDA)',
      desc: 'Разработка стратегии для букмекерской компании',
      bg: '#1a2a2a',
    },
  ];

  return (
    <main>
      <section className="cases-page">
        <div className="container">
          <h1>Кейсы</h1>
          <p className="subtitle">Все проекты, которыми мы гордимся</p>
          <div className="cases-grid">
            {cases.map((c) => (
              <a href={`/cases/${c.slug}`} key={c.slug} className="case-card" style={{ background: c.bg }}>
                {c.logo ? (
                  <img src={c.logo} alt={c.title} className="case-logo-thumb" />
                ) : (
                  <span className="case-emoji">📁</span>
                )}
                <span className="case-tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <span className="case-link">Подробнее →</span>
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

        .cases-page {
          padding: 120px 0 100px;
          background: #121212;
          min-height: 100vh;
        }

        h1 {
          font-size: 64px;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
        }

        .subtitle {
          font-size: 20px;
          color: #b0b0b0;
          margin-bottom: 48px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
        }

        .cases-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 32px;
        }

        .case-card {
          padding: 32px 24px;
          border-radius: 28px;
          border: 1px solid #2a2a2a;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
          display: block;
        }

        .case-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          border-color: #c4b5a0;
        }

        .case-emoji {
          font-size: 44px;
          display: block;
          margin-bottom: 12px;
        }

        .case-logo-thumb {
          max-width: 80px;
          height: auto;
          margin-bottom: 12px;
          display: block;
        }

        .case-tag {
          display: inline-block;
          background: rgba(255, 255, 255, 0.06);
          padding: 4px 14px;
          border-radius: 40px;
          font-size: 12px;
          font-weight: 500;
          color: #b0b0b0;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 8px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
        }

        .case-card h3 {
          font-size: 22px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 4px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
        }

        .case-card p {
          font-size: 16px;
          color: #b0b0b0;
          margin-bottom: 16px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
        }

        .case-link {
          font-weight: 500;
          color: #c4b5a0;
          border-bottom: 2px solid #2a2a2a;
          padding-bottom: 2px;
          transition: 0.2s;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
          font-size: 14px;
          letter-spacing: 0.02em;
        }

        .case-link:hover {
          border-bottom-color: #c4b5a0;
        }

        @media (max-width: 768px) {
          .cases-page {
            padding: 80px 0 60px;
          }
          h1 {
            font-size: 40px;
          }
          .cases-grid {
            grid-template-columns: 1fr;
          }
          .subtitle {
            font-size: 17px;
          }
          .case-logo-thumb {
            max-width: 60px;
          }
        }
      `}</style>
    </main>
  );
}