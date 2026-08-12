'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function CasePage() {
  const params = useParams();
  const slug = params.slug;
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const casesData = {
    'yandex-food': {
      title: 'Яндекс Еда',
      tag: 'Вирусный контент',
      description: 'Вирусный ролик с суммарным охватом 50+ млн',
      full: 'Мы создали вирусный ролик для сервиса доставки Яндекс Еда. Задача — показать, как быстро и вкусно можно получить заказ, используя юмор и неожиданный поворот. Ролик завирусился в TikTok и Instagram, набрав суммарный охват более 50 миллионов просмотров.',
      stats: ['50+ млн суммарный охват', '20+ репостов в крупных сообществах'],
      video: '/cases/yandex-food/video.mp4',
      images: [
        '/cases/yandex-food/screenshot-1.jpg',
        '/cases/yandex-food/screenshot-2.jpg',
        '/cases/yandex-food/screenshot-3.jpg',
        '/cases/yandex-food/screenshot-4.jpg',
        '/cases/yandex-food/screenshot-5.jpg',
        '/cases/yandex-food/screenshot-6.jpg',
      ],
      color: '#c4b5a0',
      isArticle: false,
    },
    'deportivo': {
      title: 'Deportivo',
      tag: 'Спорт / Lifestyle',
      description: 'Вирусный контент с 10+ млн просмотров',
      full: 'Мы создали вирусную кампанию для спортивного бренда Deportivo. Задача — показать энергию и стиль бренда через динамичный контент. Ролики завирусились в TikTok и Instagram, набрав суммарный охват более 10 миллионов просмотров.',
      stats: ['10+ млн просмотров', '28% рост продаж', '5 дней до вирала'],
      video: null,
      articles: [
        { title: 'Антон Нефедечев — первый русский гол в Аргентине', url: 'https://www.ole.com.ar/informacion-general/anton-nefedechev-primer-gol-ruso-argentina-deportivo-moscu-liga-escobarense_0_APpXWb03bh.html' },
        { title: 'Интервью с основателем Deportivo', url: 'https://example.com/2' },
        { title: 'Deportivo: путь к миллионам', url: 'https://example.com/3' },
      ],
      images: [
        { 
          src: '/cases/deportivo/screenshot-1.jpg', 
          url: 'https://www.ole.com.ar/informacion-general/anton-nefedechev-primer-gol-ruso-argentina-deportivo-moscu-liga-escobarense_0_APpXWb03bh.html' 
        },
      ],
      color: '#d4af37',
      isArticle: true,
    },
  };

  const data = casesData[slug];

  if (!data) {
    return (
      <div style={{ padding: '40px', background: '#121212', color: '#fff' }}>
        <h1>Кейс не найден</h1>
        <Link href="/cases" style={{ color: '#c4b5a0' }}>← Вернуться</Link>
      </div>
    );
  }

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === data.images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div style={{ padding: '40px 20px', background: '#121212', color: '#fff', minHeight: '100vh' }}>
      <Link href="/cases" style={{ color: '#c4b5a0', textDecoration: 'none' }}>← Все кейсы</Link>

      <div style={{ marginTop: '40px' }}>
        <span style={{ display: 'inline-block', background: data.color, color: '#fff', padding: '4px 16px', borderRadius: '40px', fontSize: '13px', fontWeight: 600 }}>
          {data.tag}
        </span>
        <h1 style={{ fontSize: '48px', marginTop: '12px', marginBottom: '8px' }}>{data.title}</h1>
        <p style={{ fontSize: '20px', color: '#b0b0b0' }}>{data.description}</p>
      </div>

      {data.video && (
        <div style={{ marginTop: '40px' }}>
          <h2>🎬 Вирусный видеоролик</h2>
          <video src={data.video} controls style={{ width: '100%', maxWidth: '800px', borderRadius: '12px' }} />
        </div>
      )}

      {data.articles && data.articles.length > 0 && (
        <div style={{ marginTop: '40px' }}>
          <h2>📰 Ссылки на статьи</h2>
          {data.articles.map((a, i) => (
            <a key={i} href={a.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '12px', background: '#2a2a2a', borderRadius: '8px', color: '#fff', textDecoration: 'none', marginBottom: '8px', border: `1px solid ${data.color}` }}>
              {a.title}
            </a>
          ))}
        </div>
      )}

      {data.images && data.images.length > 0 && (
        <div style={{ marginTop: '40px' }}>
          <h2>📢 Репосты в крупных сообществах</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {data.images.map((item, i) => {
              const src = item.src || item;
              const url = item.url || null;
              const isArticle = data.isArticle && url;

              return (
                <div
                  key={i}
                  style={{
                    width: '200px',
                    borderRadius: '12px',
                    border: '1px solid #2a2a2a',
                    overflow: 'hidden',
                    cursor: isArticle ? 'pointer' : 'default',
                    transition: 'transform 0.2s',
                  }}
                  onClick={() => {
                    if (isArticle) {
                      window.open(url, '_blank');
                    } else {
                      openLightbox(i);
                    }
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <img
                    src={src}
                    alt="скрин"
                    style={{
                      width: '100%',
                      display: 'block',
                      aspectRatio: '16/10',
                      objectFit: 'cover',
                    }}
                  />
                  {isArticle && (
                    <div style={{
                      padding: '8px 12px',
                      background: '#1a1a1a',
                      fontSize: '12px',
                      color: '#c4b5a0',
                      textAlign: 'center',
                      borderTop: '1px solid #2a2a2a',
                    }}>
                      🔗 Открыть статью
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div style={{ marginTop: '40px' }}>
        <h2>О проекте</h2>
        <p style={{ fontSize: '18px', color: '#b0b0b0' }}>{data.full}</p>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h2>Результаты</h2>
        {data.stats.map((s, i) => (
          <div key={i} style={{ background: '#2a2a2a', padding: '16px', borderRadius: '12px', border: `1px solid ${data.color}`, marginBottom: '8px' }}>
            {s}
          </div>
        ))}
      </div>

      {isOpen && !data.isArticle && data.images.length > 0 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.92)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px',
          }}
          onClick={closeLightbox}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '95vw',
              maxHeight: '95vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'rgba(0,0,0,0.5)',
                border: 'none',
                color: '#fff',
                fontSize: '30px',
                cursor: 'pointer',
                padding: '10px 16px',
                borderRadius: '50%',
                zIndex: 10,
              }}
            >
              ✕
            </button>

            <div
              style={{
                position: 'absolute',
                bottom: '-40px',
                left: '50%',
                transform: 'translateX(-50%)',
                color: '#888',
                fontSize: '14px',
              }}
            >
              {currentIndex + 1} / {data.images.length}
            </div>

            <img
              src={data.images[currentIndex].src || data.images[currentIndex]}
              alt="скриншот"
              style={{
                maxWidth: '90vw',
                maxHeight: '85vh',
                borderRadius: '12px',
                objectFit: 'contain',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              }}
            />

            {data.images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.4)',
                    border: 'none',
                    color: '#fff',
                    fontSize: '40px',
                    cursor: 'pointer',
                    padding: '15px 20px',
                    borderRadius: '50%',
                    zIndex: 5,
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.4)'}
                >
                  ‹
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); goToNext(); }}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.4)',
                    border: 'none',
                    color: '#fff',
                    fontSize: '40px',
                    cursor: 'pointer',
                    padding: '15px 20px',
                    borderRadius: '50%',
                    zIndex: 5,
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.4)'}
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}