'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function CasePage() {
  const params = useParams();
  const slug = params.slug;
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const casesData = {
    'yandex-food': {
      title: 'Яндекс Еда',
      tag: 'Вирусный контент',
      description: 'Вирусный ролик с суммарным охватом 50+ млн',
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
      isYandex: true,
    },
    'deportivo': {
      title: 'Deportivo',
      tag: 'Спорт / Lifestyle',
      description: 'Вирусный контент с 10+ млн просмотров',
      articleUrl: 'https://www.ole.com.ar/informacion-general/anton-nefedechev-primer-gol-ruso-argentina-deportivo-moscu-liga-escobarense_0_APpXWb03bh.html',
      image: '/cases/deportivo/screenshot-1.jpg',
      color: '#d4af37',
      isYandex: false,
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

  const openLightbox = (url) => {
    setCurrentImage(url);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

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

      {data.isYandex && data.video && (
        <div style={{ marginTop: '40px' }}>
          <h2>🎬 Вирусный видеоролик</h2>
          <video src={data.video} controls style={{ width: '100%', maxWidth: '800px', borderRadius: '12px' }} />
        </div>
      )}

      {!data.isYandex && data.articleUrl && (
        <div style={{ marginTop: '40px' }}>
          <h2>📰 Статья</h2>
          <a
            href={data.articleUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              padding: '16px 20px',
              background: '#2a2a2a',
              borderRadius: '12px',
              border: `1px solid ${data.color}`,
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            Антон Нефедечев — первый русский гол в Аргентине
          </a>
        </div>
      )}

      <div style={{ marginTop: '40px' }}>
        <h2>📢 Репосты в крупных сообществах</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {data.isYandex ? (
            data.images.map((url, i) => (
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
            ))
          ) : (
            <img
              src={data.image}
              alt="скрин"
              style={{
                width: '200px',
                borderRadius: '12px',
                border: '1px solid #2a2a2a',
                cursor: 'pointer',
                transition: 'transform 0.2s',
              }}
              onClick={() => window.open(data.articleUrl, '_blank')}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          )}
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