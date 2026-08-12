'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const casesData = {
  'yandex-food': {
    title: 'Яндекс Еда',
    tag: 'Вирусный контент',
    description: 'Вирусный ролик с суммарным охватом 50+ млн',
    full: 'Мы создали вирусный ролик для сервиса доставки Яндекс Еда...',
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
  },
  'deportivo': {
    title: 'Deportivo',
    tag: 'Спорт / Lifestyle',
    description: 'Вирусный контент с 10+ млн просмотров',
    full: 'Мы создали вирусную кампанию для спортивного бренда Deportivo...',
    stats: ['10+ млн просмотров', '28% рост продаж', '5 дней до вирала'],
    video: null,
    images: ['/cases/deportivo/screenshot-1.jpg'],
    color: '#d4af37',
  },
  'beauty-story': {
    title: 'Beauty Story',
    tag: 'Косметика',
    description: '+280% продаж за 4 месяца',
    full: 'Разработали SMM‑стратегию для бренда натуральной косметики...',
    stats: ['280% рост продаж', '4 месяца', '1.2 млн охват'],
    video: null,
    images: [],
    color: '#c4b5a0',
  },
  'moscow-coffee': {
    title: 'Moscow Coffee',
    tag: 'F&B',
    description: '12 млн просмотров за 7 дней',
    full: 'Запустили вирусный челлендж для сети кофеен...',
    stats: ['12 млн просмотров', '7 дней', '800+ новых клиентов'],
    video: null,
    images: [],
    color: '#7a2e2a',
  },
  'urban-sneakers': {
    title: 'Urban Sneakers',
    tag: 'Одежда',
    description: '5000 заявок с нулевым бюджетом',
    full: 'Создали бренд с нуля: стратегия, айдентика...',
    stats: ['5000 заявок', '0 ₽ бюджет', '2 млн охват'],
    video: null,
    images: [],
    color: '#d4af37',
  },
  'luxe-jewelry': {
    title: 'Luxe Jewelry',
    tag: 'Ювелирка',
    description: '+150% вовлечения, охват х3',
    full: 'Контент‑стратегия с фокусом на эстетику...',
    stats: ['+150% вовлечение', '3x охват', '+200% продаж'],
    video: null,
    images: [],
    color: '#c4b5a0',
  },
  'wine-people': {
    title: 'Wine & People',
    tag: 'Напитки',
    description: '+200% продаж за 2 месяца',
    full: 'Создали контент-стратегию с сомелье...',
    stats: ['+200% продаж', '2 месяца', '2.5 млн охват'],
    video: null,
    images: [],
    color: '#7a2e2a',
  },
  'appvision': {
    title: 'AppVision',
    tag: 'IT',
    description: '50 000 установок за месяц',
    full: 'Интеграции с блогерами, обзоры в TikTok...',
    stats: ['50 000 установок', '1 месяц', '150 тыс. ₽ бюджет'],
    video: null,
    images: [],
    color: '#d4af37',
  },
};

export default function CasePage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = casesData[slug as keyof typeof casesData];
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasVideo = data?.video !== null && data?.video !== '';
  const hasImages = data?.images && data.images.length > 0;

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrev = () => {
    if (!data || !data.images) return;
    setCurrentIndex((prev) => (prev === 0 ? data.images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    if (!data || !data.images) return;
    setCurrentIndex((prev) => (prev === data.images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!data) {
    return (
      <div style={{ padding: '40px 20px', background: '#121212', color: '#fff', minHeight: '100vh' }}>
        <h1>Кейс не найден</h1>
        <Link href="/cases" style={{ color: '#c4b5a0' }}>← Вернуться</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px 20px', background: '#121212', color: '#fff', minHeight: '100vh' }}>
      <Link href="/cases" style={{ color: '#c4b5a0', textDecoration: 'none' }}>
        ← Все кейсы
      </Link>
      
      <div style={{ marginTop: '40px' }}>
        <span style={{ display: 'inline-block', background: data.color, color: '#fff', padding: '4px 16px', borderRadius: '40px', fontSize: '13px', fontWeight: 600 }}>
          {data.tag}
        </span>
        <h1 style={{ fontSize: '48px', marginTop: '12px', marginBottom: '8px' }}>{data.title}</h1>
        <p style={{ fontSize: '20px', color: '#b0b0b0' }}>{data.description}</p>
      </div>

      {hasVideo && (
        <div style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '8px' }}>🎬 Вирусный видеоролик</h2>
          <p style={{ fontSize: '14px', color: '#888', marginBottom: '16px' }}>
            Основной вирусный ролик, который набрал суммарный охват 50+ млн
          </p>
          <div style={{ 
            borderRadius: '16px', 
            overflow: 'hidden', 
            background: '#0a0a0a',
            maxWidth: '800px',
            border: '1px solid #2a2a2a',
          }}>
            <video 
              src={data.video} 
              controls 
              style={{ width: '100%', display: 'block', aspectRatio: '16/9', objectFit: 'cover' }}
              autoPlay={false}
            />
          </div>
        </div>
      )}

      {hasImages && (
        <div style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>📢 Репосты в крупных сообществах</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {data.images.map((url, index) => (
              <div 
                key={index} 
                style={{ 
                  flex: '1 1 200px', 
                  maxWidth: '300px', 
                  borderRadius: '16px', 
                  overflow: 'hidden', 
                  background: '#2a2a2a',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease',
                  border: '1px solid #2a2a2a',
                }}
                onClick={() => openLightbox(index)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <img 
                  src={url} 
                  alt={`Скриншот ${index + 1}`} 
                  style={{ width: '100%', display: 'block', aspectRatio: '16/10', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 600 }}>О проекте</h2>
        <p style={{ fontSize: '18px', color: '#b0b0b0', lineHeight: 1.7 }}>{data.full}</p>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 600 }}>Результаты</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
          {data.stats.map((stat, i) => (
            <div key={i} style={{ background: '#2a2a2a', padding: '16px 20px', borderRadius: '12px', border: `1px solid ${data.color}` }}>
              <span style={{ fontSize: '18px', fontWeight: 600 }}>{stat}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '60px', padding: '40px 20px', background: '#2a2a2a', borderRadius: '24px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '28px', fontWeight: 600 }}>Хотите так же?</h3>
        <p style={{ fontSize: '18px', color: '#b0b0b0', marginBottom: '16px' }}>Расскажите о своём проекте</p>
        <button 
          style={{ background: data.color, color: '#fff', padding: '14px 40px', border: 'none', borderRadius: '40px', fontSize: '17px', fontWeight: 600, cursor: 'pointer' }}
          onClick={() => window.open('https://t.me/lawayasha', '_blank')}
        >
          Написать в Telegram
        </button>
      </div>

      {isOpen && hasImages && (
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
            padding: '16px',
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
              width: '100%',
              height: '100%',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                background: 'rgba(0,0,0,0.5)',
                border: 'none',
                color: '#fff',
                fontSize: '24px',
                cursor: 'pointer',
                padding: '8px 14px',
                borderRadius: '8px',
                lineHeight: 1,
                zIndex: 10,
              }}
            >
              ✕
            </button>

            <div style={{
              position: 'absolute',
              bottom: '-36px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: '#888',
              fontSize: '14px',
              fontFamily: 'SF Pro Display, sans-serif',
              background: 'rgba(0,0,0,0.5)',
              padding: '4px 16px',
              borderRadius: '20px',
            }}>
              {currentIndex + 1} / {data.images.length}
            </div>

            <img 
              src={data.images[currentIndex]} 
              alt={`Скриншот ${currentIndex + 1}`} 
              style={{
                maxWidth: '100%',
                maxHeight: '85vh',
                borderRadius: '12px',
                display: 'block',
                objectFit: 'contain',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            />

            {data.images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                  style={{
                    position: 'absolute',
                    left: '4px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.4)',
                    border: 'none',
                    color: '#fff',
                    fontSize: '32px',
                    cursor: 'pointer',
                    padding: '12px 8px',
                    borderRadius: '8px',
                    lineHeight: 1,
                    opacity: 0.9,
                    transition: 'opacity 0.2s',
                    touchAction: 'manipulation',
                    zIndex: 5,
                    minWidth: '40px',
                    minHeight: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}
                >
                  ‹
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); goToNext(); }}
                  style={{
                    position: 'absolute',
                    right: '4px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.4)',
                    border: 'none',
                    color: '#fff',
                    fontSize: '32px',
                    cursor: 'pointer',
                    padding: '12px 8px',
                    borderRadius: '8px',
                    lineHeight: 1,
                    opacity: 0.9,
                    transition: 'opacity 0.2s',
                    touchAction: 'manipulation',
                    zIndex: 5,
                    minWidth: '40px',
                    minHeight: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}
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