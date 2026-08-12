'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Данные всех кейсов
const casesData = {
  'yandex-food': {
    title: 'Яндекс Еда',
    tag: 'Вирусный контент',
    description: 'Вирусный ролик с суммарным охватом 50+ млн',
    full: 'Мы создали вирусный ролик для сервиса доставки Яндекс Еда. Задача — показать, как быстро и вкусно можно получить заказ, используя юмор и неожиданный поворот. Ролик завирусился в TikTok и Instagram, набрав суммарный охват более 50 миллионов просмотров.',
    stats: [
      '50+ млн суммарный охват',
      '20+ репостов в крупных сообществах'
    ],
    media: [
      { type: 'video', url: '/cases/yandex-food/video.mp4', poster: '/cases/yandex-food/screenshot-1.jpg' },
      { type: 'image', url: '/cases/yandex-food/screenshot-1.jpg' },
      { type: 'image', url: '/cases/yandex-food/screenshot-2.jpg' },
      { type: 'image', url: '/cases/yandex-food/screenshot-3.jpg' },
      { type: 'image', url: '/cases/yandex-food/screenshot-4.jpg' },
      { type: 'image', url: '/cases/yandex-food/screenshot-5.jpg' },
      { type: 'image', url: '/cases/yandex-food/screenshot-6.jpg' },
    ],
    color: 'haki',
  },
  'beauty-story': {
    title: 'Beauty Story',
    tag: 'Косметика',
    description: '+280% продаж за 4 месяца',
    full: 'Разработали SMM‑стратегию для бренда натуральной косметики. Создали контент-план, запустили вирусные форматы, настроили таргетинг. Бренд вышел на новый уровень узнаваемости.',
    stats: ['280% рост продаж', '4 месяца', '1.2 млн охват'],
    media: [],
    color: 'haki',
  },
  'moscow-coffee': {
    title: 'Moscow Coffee',
    tag: 'F&B',
    description: '12 млн просмотров за 7 дней',
    full: 'Запустили вирусный челлендж для сети кофеен. Привлекли блогеров, создали серию коротких видео. Результат — взрывной рост узнаваемости и потока клиентов.',
    stats: ['12 млн просмотров', '7 дней', '800+ новых клиентов'],
    media: [],
    color: 'burgundy',
  },
  'urban-sneakers': {
    title: 'Urban Sneakers',
    tag: 'Одежда',
    description: '5000 заявок с нулевым бюджетом',
    full: 'Создали бренд с нуля: разработали стратегию, айдентику, запустили в Instagram. Без рекламного бюджета получили 5000 заявок за первый месяц.',
    stats: ['5000 заявок', '0 ₽ бюджет', '2 млн охват'],
    media: [],
    color: 'gold',
  },
  'luxe-jewelry': {
    title: 'Luxe Jewelry',
    tag: 'Ювелирка',
    description: '+150% вовлечения, охват х3',
    full: 'Контент‑стратегия с фокусом на эстетику, премиум‑видео и коллаборации с блогерами. Охват вырос в 3 раза, вовлечение увеличилось на 150%.',
    stats: ['+150% вовлечение', '3x охват', '+200% продаж'],
    media: [],
    color: 'haki',
  },
  'wine-people': {
    title: 'Wine & People',
    tag: 'Напитки',
    description: '+200% продаж за 2 месяца',
    full: 'Создали контент-стратегию с сомелье, прямые эфиры с дегустациями. Продажи выросли на 200% за 2 месяца благодаря правильной коммуникации с аудиторией.',
    stats: ['+200% продаж', '2 месяца', '2.5 млн охват'],
    media: [],
    color: 'burgundy',
  },
  'appvision': {
    title: 'AppVision',
    tag: 'IT',
    description: '50 000 установок за месяц',
    full: 'Интеграции с блогерами, обзоры в TikTok и Instagram. Приложение собрало 50 000 установок за месяц с минимальным бюджетом.',
    stats: ['50 000 установок', '1 месяц', '150 тыс. ₽ бюджет'],
    media: [],
    color: 'gold',
  },
};

const colorMap = {
  haki: { accent: '#c4b5a0', bg: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)' },
  burgundy: { accent: '#7a2e2a', bg: 'linear-gradient(145deg, #2a1a1a, #1a0a0a)' },
  gold: { accent: '#d4af37', bg: 'linear-gradient(145deg, #2a2a1a, #1a1a0a)' },
};

export default function CasePage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = casesData[slug as keyof typeof casesData];
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<{ type: string; url: string; poster?: string } | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Принудительная задержка 500 мс для показа лоадера
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: '#121212',
        gap: '20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif',
      }}>
        <div style={{
          width: '44px',
          height: '44px',
          border: '3px solid #2a2a2a',
          borderTop: '3px solid #c4b5a0',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }} />
        <p style={{
          color: '#b0b0b0',
          fontSize: '15px',
          fontWeight: 400,
          margin: 0,
        }}>
          Загрузка...
        </p>
        <style jsx>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (!data) {
    return (
      <div style={{ 
        padding: '80px 24px', 
        textAlign: 'center', 
        background: '#121212', 
        color: '#fff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>Кейс не найден</h1>
        <Link href="/cases" style={{ color: '#c4b5a0', fontSize: '18px' }}>← Вернуться к кейсам</Link>
      </div>
    );
  }

  const colors = colorMap[data.color as keyof typeof colorMap];
  const hasMedia = data.media && data.media.length > 0;

  const openLightbox = (item: typeof data.media[0]) => {
    setSelectedMedia(item);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setSelectedMedia(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <main>
      <section className="case-detail" style={{ background: colors.bg }}>
        <div className="container">
          <Link href="/cases" className="back-link">← Все кейсы</Link>

          <div className="case-header">
            <span className="badge" style={{ background: colors.accent }}>{data.tag}</span>
            <h1>{data.title}</h1>
            <p className="subtitle">{data.description}</p>
          </div>

          {/* Горизонтальная лента */}
          {hasMedia && (
            <>
              <div className="carousel-wrapper">
                <div 
                  className="horiz-scroll"
                  onScroll={(e) => {
                    const scrollLeft = e.currentTarget.scrollLeft;
                    const itemWidth = e.currentTarget.querySelector('.scroll-item')?.clientWidth || 0;
                    const gap = 16;
                    const newIndex = Math.round(scrollLeft / (itemWidth + gap));
                    if (newIndex !== activeIndex) {
                      setActiveIndex(newIndex);
                    }
                  }}
                >
                  {data.media.map((item, index) => (
                    <div 
                      key={index} 
                      className="scroll-item"
                      onClick={() => openLightbox(item)}
                    >
                      {item.type === 'video' ? (
                        <video
                          src={item.url}
                          poster={item.poster}
                          className="scroll-video"
                          playsInline
                          preload="metadata"
                        />
                      ) : (
                        <img src={item.url} alt={`${data.title} - ${index + 1}`} className="scroll-image" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Индикатор пролистывания */}
              {data.media.length > 1 && (
                <div className="scroll-indicator">
                  {data.media.map((_, index) => (
                    <span
                      key={index}
                      className={`dot ${index === activeIndex ? 'active' : ''}`}
                    />
                  ))}
                </div>
              )}

              {/* Подпись о репостах */}
              <div className="reposts-info">
                <p className="reposts-text">
                  📢 Репосты в крупных сообществах
                </p>
              </div>
            </>
          )}

          <div className="description-block">
            <div className="description-text">
              <h2>О проекте</h2>
              <p>{data.full}</p>
            </div>
            <div className="stats-block">
              <h2>Результаты</h2>
              <div className="stats-grid">
                {data.stats.map((stat, index) => (
                  <div key={index} className="stat-item" style={{ borderColor: colors.accent }}>
                    <span className="stat-number">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="cta-block" style={{ borderColor: colors.accent }}>
            <h3>Хотите так же?</h3>
            <p>Расскажите о своём проекте — сделаем вирусный контент.</p>
            <button 
              className="btn-primary"
              onClick={() => window.open('https://t.me/lawayasha', '_blank')}
              style={{ background: colors.accent }}
            >
              Написать в Telegram
            </button>
          </div>
        </div>
      </section>

      {/* ЛАЙТБОКС */}
      {isOpen && selectedMedia && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>✕</button>
            {selectedMedia.type === 'video' ? (
              <video
                controls
                autoPlay
                src={selectedMedia.url}
                poster={selectedMedia.poster}
                className="lightbox-video"
              />
            ) : (
              <img src={selectedMedia.url} alt="Увеличенный скриншот" className="lightbox-image" />
            )}
          </div>
        </div>
      )}

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

        .case-detail {
          padding: 60px 0 100px;
          min-height: 100vh;
        }

        .back-link {
          display: inline-block;
          color: #b0b0b0;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          margin-bottom: 40px;
          transition: color 0.2s;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
        }

        .back-link:hover {
          color: #ffffff;
        }

        .case-header {
          margin-bottom: 40px;
        }

        .badge {
          display: inline-block;
          color: #fff;
          padding: 6px 20px;
          border-radius: 40px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          margin-bottom: 12px;
        }

        h1 {
          font-size: 56px;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin-bottom: 8px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
        }

        .subtitle {
          font-size: 20px;
          color: #b0b0b0;
          font-weight: 400;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          max-width: 600px;
        }

        /* ГОРИЗОНТАЛЬНАЯ ЛЕНТА */
        .carousel-wrapper {
          margin: 24px 0 8px 0;
          border-radius: 20px;
          background: #1a1a1a;
          border: 1px solid #2a2a2a;
          padding: 16px 0;
          overflow: hidden;
        }

        .horiz-scroll {
          display: flex;
          flex-direction: row;
          gap: 16px;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 0 20px 12px 20px;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }

        .horiz-scroll::-webkit-scrollbar {
          display: none;
        }

        .scroll-item {
          flex: 0 0 auto;
          width: 75%;
          max-width: 320px;
          scroll-snap-align: start;
          border-radius: 16px;
          overflow: hidden;
          background: #0a0a0a;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .scroll-item:hover {
          transform: scale(1.02);
        }

        .scroll-image,
        .scroll-video {
          width: 100%;
          height: auto;
          display: block;
          aspect-ratio: 16 / 10;
          object-fit: cover;
          border-radius: 12px;
          pointer-events: none;
        }

        /* ИНДИКАТОР ПРОЛИСТЫВАНИЯ */
        .scroll-indicator {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin: 8px 0 24px 0;
          padding: 0 16px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #2a2a2a;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .dot.active {
          background: #c4b5a0;
          width: 24px;
          border-radius: 4px;
        }

        /* ПОДПИСЬ О РЕПОСТАХ */
        .reposts-info {
          margin: -4px 0 40px 0;
          padding: 0 4px;
        }

        .reposts-text {
          font-size: 14px;
          color: #b0b0b0;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
          letter-spacing: 0.02em;
          opacity: 0.7;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .reposts-text::before {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, transparent, #2a2a2a);
        }

        .reposts-text::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(to left, transparent, #2a2a2a);
        }

        /* ЛАЙТБОКС */
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.25s ease;
          padding: 24px;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .lightbox-content {
          max-width: 90vw;
          max-height: 90vh;
          position: relative;
          animation: zoomIn 0.3s ease;
        }

        @keyframes zoomIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .lightbox-close {
          position: absolute;
          top: -48px;
          right: 0;
          background: none;
          border: none;
          color: #fff;
          font-size: 32px;
          cursor: pointer;
          padding: 8px;
          transition: color 0.2s;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          line-height: 1;
        }

        .lightbox-close:hover {
          color: #c4b5a0;
        }

        .lightbox-image {
          max-width: 100%;
          max-height: 80vh;
          border-radius: 16px;
          display: block;
          object-fit: contain;
          background: #0a0a0a;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }

        .lightbox-video {
          max-width: 100%;
          max-height: 80vh;
          border-radius: 16px;
          display: block;
          aspect-ratio: 16 / 9;
          background: #0a0a0a;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }

        .description-block {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          margin-bottom: 60px;
        }

        h2 {
          font-size: 24px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 12px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
        }

        .description-text p {
          font-size: 18px;
          color: #b0b0b0;
          line-height: 1.7;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
        }

        .stats-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .stat-item {
          background: rgba(255,255,255,0.04);
          padding: 16px 20px;
          border-radius: 16px;
          border: 1px solid;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .stat-number {
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          text-align: center;
        }

        .cta-block {
          background: rgba(255,255,255,0.03);
          border: 1px solid;
          border-radius: 32px;
          padding: 48px;
          text-align: center;
        }

        .cta-block h3 {
          font-size: 28px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 4px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
        }

        .cta-block p {
          font-size: 18px;
          color: #b0b0b0;
          margin-bottom: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
        }

        .btn-primary {
          color: #fff;
          padding: 16px 44px;
          border: none;
          border-radius: 40px;
          font-size: 17px;
          font-weight: 600;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 20px rgba(122, 46, 42, 0.3);
        }

        .btn-primary:hover {
          transform: scale(1.02);
          box-shadow: 0 6px 30px rgba(122, 46, 42, 0.4);
          opacity: 0.85;
        }

        @media (max-width: 768px) {
          .case-detail {
            padding: 40px 0 60px;
          }

          h1 {
            font-size: 36px;
          }

          .description-block {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .cta-block {
            padding: 32px 24px;
          }

          .container {
            padding: 0 16px;
          }

          .carousel-wrapper {
            padding: 12px 0;
            margin: 16px 0 4px 0;
          }

          .scroll-item {
            width: 80%;
            max-width: 280px;
          }

          .lightbox-content {
            max-width: 95vw;
          }

          .lightbox-close {
            top: -40px;
            font-size: 28px;
          }

          .reposts-info {
            margin: 0px 0 28px 0;
          }

          .reposts-text {
            font-size: 12px;
            opacity: 0.6;
          }

          .scroll-indicator {
            gap: 6px;
            margin: 4px 0 16px 0;
          }

          .dot {
            width: 6px;
            height: 6px;
          }

          .dot.active {
            width: 18px;
          }
        }

        @media (max-width: 480px) {
          .scroll-item {
            width: 85%;
            max-width: 240px;
          }

          .scroll-image,
          .scroll-video {
            aspect-ratio: 16 / 12;
          }
        }
      `}</style>
    </main>
  );
}     