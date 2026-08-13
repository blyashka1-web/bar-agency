'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function CasePage() {
  const params = useParams();
  const slug = params.slug;

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const yandexImages = [
    '/cases/yandex-food/screenshot-1.jpg',
    '/cases/yandex-food/screenshot-2.jpg',
    '/cases/yandex-food/screenshot-3.jpg',
    '/cases/yandex-food/screenshot-4.jpg',
    '/cases/yandex-food/screenshot-5.jpg',
    '/cases/yandex-food/screenshot-6.jpg',
  ];

  const openLightbox = (url) => {
    setCurrentImage(url);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImage('');
    document.body.style.overflow = 'auto';
  };

  // --- YANDEX-FOOD ---
  if (slug === 'yandex-food') {
    return (
      <div style={{ padding: '40px 20px', background: '#121212', color: '#fff', minHeight: '100vh' }}>
        <Link href="/cases" style={{ color: '#c4b5a0', textDecoration: 'none' }}>← Все кейсы</Link>

        <div style={{ marginTop: '40px' }}>
          <span style={{ display: 'inline-block', background: '#c4b5a0', color: '#fff', padding: '4px 16px', borderRadius: '40px', fontSize: '13px', fontWeight: 600 }}>
            Вирусный контент
          </span>
          <h1 style={{ fontSize: '48px', marginTop: '12px', marginBottom: '8px' }}>Яндекс Еда</h1>
          <p style={{ fontSize: '20px', color: '#b0b0b0' }}>Вирусный ролик с суммарным охватом 50+ млн</p>
        </div>

        <div style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 600 }}>🎬 Вирусный видеоролик</h2>
          <div style={{ borderRadius: '16px', overflow: 'hidden', background: '#0a0a0a', maxWidth: '600px', border: '1px solid #2a2a2a' }}>
            <video src="/cases/yandex-food/video.mp4" controls style={{ width: '100%', display: 'block' }} autoPlay={false} />
          </div>
        </div>

        <div style={{ marginTop: '48px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 600 }}>📢 Репосты в крупных сообществах</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {yandexImages.map((url, i) => (
              <img
                key={i}
                src={url}
                alt={'скрин ' + (i + 1)}
                style={{ width: '200px', height: '125px', borderRadius: '12px', border: '1px solid #2a2a2a', cursor: 'pointer', objectFit: 'cover' }}
                onClick={() => openLightbox(url)}
              />
            ))}
          </div>
        </div>

        {isOpen && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.92)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              padding: '20px',
            }}
            onClick={closeLightbox}
          >
            <div style={{ position: 'relative', maxWidth: '95vw', maxHeight: '95vh' }} onClick={(e) => e.stopPropagation()}>
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
              <img src={currentImage} alt="скриншот" style={{ maxWidth: '90vw', maxHeight: '85vh', borderRadius: '12px', objectFit: 'contain' }} />
            </div>
          </div>
        )}
      </div>
    );
  }

  // --- DEPORTIVO (С ТРЕМЯ СТАТЬЯМИ И ТРЕМЯ ВИДЕО) ---
  if (slug === 'deportivo') {
    const articles = [
      {
        title: 'Антон Нефедечев — первый русский гол в Аргентине',
        url: 'https://www.ole.com.ar/informacion-general/anton-nefedechev-primer-gol-ruso-argentina-deportivo-moscu-liga-escobarense_0_APpXWb03bh.html',
      },
      {
        title: 'Deportivo Moscú — история клуба на CNN',
        url: 'https://cnnespanol.cnn.com/2025/08/07/argentina/video/club-rusos-argentina-moscu-cafe-tv',
      },
      {
        title: 'Под своим флагом. Как российский футбол покоряет Аргентину',
        url: 'https://tass.ru/sport/25485173',
      },
    ];

    return (
      <div style={{ padding: '40px 20px', background: '#121212', color: '#fff', minHeight: '100vh' }}>
        <Link href="/cases" style={{ color: '#c4b5a0', textDecoration: 'none' }}>← Все кейсы</Link>

        <div style={{ marginTop: '40px' }}>
          <span style={{ display: 'inline-block', background: '#d4af37', color: '#fff', padding: '4px 16px', borderRadius: '40px', fontSize: '13px', fontWeight: 600 }}>
            Спорт / Lifestyle
          </span>
          <h1 style={{ fontSize: '48px', marginTop: '12px', marginBottom: '8px' }}>Deportivo</h1>
          <p style={{ fontSize: '20px', color: '#b0b0b0' }}>Вирусный контент с 10+ млн просмотров</p>
        </div>

        <div style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>📰 Статьи</h2>
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                padding: '16px 20px',
                background: '#2a2a2a',
                borderRadius: '12px',
                border: '1px solid #d4af37',
                color: '#fff',
                textDecoration: 'none',
                marginBottom: '12px',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#3a3a3a')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#2a2a2a')}
            >
              {article.title}
            </a>
          ))}
        </div>

        <div style={{ marginTop: '48px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>📰 Репортажи о клубе</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <video
              src="/cases/deportivo/video-1.mp4"
              controls
              style={{
                width: '200px',
                height: '125px',
                borderRadius: '12px',
                border: '1px solid #2a2a2a',
                objectFit: 'cover',
                background: '#0a0a0a',
              }}
            />
            <video
              src="/cases/deportivo/video-2-compressed.mp4"
              controls
              style={{
                width: '200px',
                height: '125px',
                borderRadius: '12px',
                border: '1px solid #2a2a2a',
                objectFit: 'cover',
                background: '#0a0a0a',
              }}
            />
            <video
              src="/cases/deportivo/video-3.mp4"
              controls
              style={{
                width: '200px',
                height: '125px',
                borderRadius: '12px',
                border: '1px solid #2a2a2a',
                objectFit: 'cover',
                background: '#0a0a0a',
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  // --- КЕЙС НЕ НАЙДЕН ---
  return (
    <div style={{ padding: '40px', background: '#121212', color: '#fff' }}>
      <h1>Кейс не найден</h1>
      <Link href="/cases" style={{ color: '#c4b5a0' }}>← Вернуться</Link>
    </div>
  );
}