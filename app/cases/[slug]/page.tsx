'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function CasePage() {
  const params = useParams();
  const slug = params.slug;
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Все скрины для Яндекс Еды
  const yandexImages = [
    '/cases/yandex-food/screenshot-1.jpg',
    '/cases/yandex-food/screenshot-2.jpg',
    '/cases/yandex-food/screenshot-3.jpg',
    '/cases/yandex-food/screenshot-4.jpg',
    '/cases/yandex-food/screenshot-5.jpg',
    '/cases/yandex-food/screenshot-6.jpg',
  ];

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
    setCurrentIndex((prev) => (prev === 0 ? yandexImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === yandexImages.length - 1 ? 0 : prev + 1));
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

  // Яндекс Еда
  if (slug === 'yandex-food') {
    return (
      <div style={{ padding: '40px 20px', background: '#121212', color: '#fff', minHeight: '100vh' }}>
        <Link href="/cases" style={{ color: '#c4b5a0', textDecoration: 'none' }}>
          ← Все кейсы
        </Link>

        <div style={{ marginTop: '40px' }}>
          <span
            style={{
              display: 'inline-block',
              background: '#c4b5a0',
              color: '#fff',
              padding: '4px 16px',
              borderRadius: '40px',
              fontSize: '13px',
              fontWeight: 600,
            }}
          >
            Вирусный контент
          </span>
          <h1 style={{ fontSize: '48px', marginTop: '12px', marginBottom: '8px' }}>Яндекс Еда</h1>
          <p style={{ fontSize: '20px', color: '#b0b0b0' }}>
            Вирусный ролик с суммарным охватом 50+ млн
          </p>
        </div>

        <div style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>
            🎬 Вирусный видеоролик
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {/* ВИДЕО КАК СКРИН */}
            <div
              style={{
                width: '200px',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #2a2a2a',
                position: 'relative',
                background: '#0a0a0a',
                aspectRatio: '16/10',
                cursor: 'pointer',
              }}
              onClick={() => {
                const video = document.getElementById('yandex-video') as HTMLVideoElement | null;
                if (video) {
                  if (video.paused) {
                    video.play();
                  } else {
                    video.pause();
                  }
                }
              }}
            >
              <video
                id="yandex-video"
                src="/cases/yandex-food/video.mp4"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
                playsInline
              />
              {/* Плей-иконка поверх видео */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '48px',
                  height: '48px',
                  background: 'rgba(0,0,0,0.6)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none',
                  border: '2px solid rgba(255,255,255,0.8)',
                }}
              >
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: '10px solid transparent',
                    borderBottom: '10px solid transparent',
                    borderLeft: '16px solid white',
                    marginLeft: '4px',
                  }}
                />
              </div>
            </div>

            {/* ВСЕ СКРИНЫ */}
            {yandexImages.map((url, i) => (
              <img
                key={i}
                src={url}
                alt={`скрин ${i + 1}`}
                style={{
                  width: '200px',
                  height: '125px',
                  borderRadius: '12px',
                  border: '1px solid #2a2a2a',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  objectFit: 'cover',
                }}
                onClick={() => openLightbox(i)}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = 'scale(1.05)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = 'scale(1)')
                }
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
                {currentIndex + 1} / {yandexImages.length}
              </div>

              <img
                src={yandexImages[currentIndex]}
                alt="скриншот"
                style={{
                  maxWidth: '90vw',
                  maxHeight: '85vh',
                  borderRadius: '12px',
                  objectFit: 'contain',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                }}
              />

              {yandexImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToPrev();
                    }}
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
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = 'rgba(0,0,0,0.4)')
                    }
                  >
                    ‹
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToNext();
                    }}
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
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = 'rgba(0,0,0,0.4)')
                    }
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

  // Deportivo
  if (slug === 'deportivo') {
    const articleUrl =
      'https://www.ole.com.ar/informacion-general/anton-nefedechev-primer-gol-ruso-argentina-deportivo-moscu-liga-escobarense_0_APpXWb03bh.html';
    return (
      <div style={{ padding: '40px 20px', background: '#121212', color: '#fff', minHeight: '100vh' }}>
        <Link href="/cases" style={{ color: '#c4b5a0', textDecoration: 'none' }}>
          ← Все кейсы
        </Link>

        <div style={{ marginTop: '40px' }}>
          <span
            style={{
              display: 'inline-block',
              background: '#d4af37',
              color: '#fff',
              padding: '4px 16px',
              borderRadius: '40px',
              fontSize: '13px',
              fontWeight: 600,
            }}
          >
            Спорт / Lifestyle
          </span>
          <h1 style={{ fontSize: '48px', marginTop: '12px', marginBottom: '8px' }}>
            Deportivo
          </h1>
          <p style={{ fontSize: '20px', color: '#b0b0b0' }}>
            Вирусный контент с 10+ млн просмотров
          </p>
        </div>

        <div style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>
            📰 Статья
          </h2>
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
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = '#3a3a3a')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = '#2a2a2a')
            }
          >
            Антон Нефедечев — первый русский гол в Аргентине
          </a>
        </div>

        <div style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>
            📢 Репосты в крупных сообществах
          </h2>
          <img
            src="/cases/deportivo/screenshot-1.jpg"
            alt="скрин"
            style={{
              width: '200px',
              height: '125px',
              borderRadius: '12px',
              border: '1px solid #2a2a2a',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              objectFit: 'cover',
            }}
            onClick={() => window.open(articleUrl, '_blank')}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = 'scale(1.05)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = 'scale(1)')
            }
          />
        </div>
      </div>
    );
  }

  // Кейс не найден
  return (
    <div style={{ padding: '40px', background: '#121212', color: '#fff' }}>
      <h1>Кейс не найден</h1>
      <Link href="/cases" style={{ color: '#c4b5a0' }}>
        ← Вернуться
      </Link>
    </div>
  );
}