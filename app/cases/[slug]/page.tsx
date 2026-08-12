'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function CasePage() {
  const params = useParams();
  const slug = params.slug;
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  // Все скрины для Яндекс Еды
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
    document.body.style.overflow = 'auto';
  };

  // Яндекс Еда
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
          <h2>🎬 Вирусный видеоролик</h2>
          <video src="/cases/yandex-food/video.mp4" controls style={{ width: '100%', maxWidth: '800px', borderRadius: '12px' }} />
        </div>

        <div style={{ marginTop: '40px' }}>
          <h2>📢 Репосты в крупных сообществах</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {yandexImages.map((url, i) => (
              <img
                key={i}
                src={url}
                alt={`скрин ${i + 1}`}
                style={{
                  width: '200px',
                  borderRadius: '12px',
                  border: '1px solid #2a2a2a',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                }}
                onClick={() => openLightbox(url)}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
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
              <img
                src={currentImage}
                alt="скриншот"
                style={{
                  maxWidth: '90vw',
                  maxHeight: '85vh',
                  borderRadius: '12px',
                  objectFit: 'contain',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                }}
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  // Deportivo
  if (slug === 'deportivo') {
    const articleUrl = 'https://www.ole.com.ar/informacion-general/anton-nefedechev-primer-gol-ruso-argentina-deportivo-moscu-liga-escobarense_0_APpXWb03bh.html';
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
          <h2>📰 Статья</h2>
          <a
            href={articleUrl}
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
            }}
          >
            Антон Нефедечев — первый русский гол в Аргентине
          </a>
        </div>

        <div style={{ marginTop: '40px' }}>
          <h2>📢 Репосты в крупных сообществах</h2>
          <img
            src="/cases/deportivo/screenshot-1.jpg"
            alt="скрин"
            style={{
              width: '200px',
              borderRadius: '12px',
              border: '1px solid #2a2a2a',
              cursor: 'pointer',
              transition: 'transform 0.2s',
            }}
            onClick={() => window.open(articleUrl, '_blank')}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>
      </div>
    );
  }

  // Кейс не найден
  return (
    <div style={{ padding: '40px', background: '#121212', color: '#fff' }}>
      <h1>Кейс не найден</h1>
      <Link href="/cases" style={{ color: '#c4b5a0' }}>← Вернуться</Link>
    </div>
  );
}