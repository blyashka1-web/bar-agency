'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function CasePage() {
  const params = useParams();
  const slug = params.slug;

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesList, setImagesList] = useState([]);

  const openLightbox = (url, list, index) => {
    setImagesList(list);
    setCurrentIndex(index);
    setCurrentImage(url);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImage('');
    setImagesList([]);
    document.body.style.overflow = 'auto';
  };

  const goToPrev = () => {
    if (imagesList.length === 0) return;
    const newIndex = (currentIndex - 1 + imagesList.length) % imagesList.length;
    setCurrentIndex(newIndex);
    setCurrentImage(imagesList[newIndex]);
  };

  const goToNext = () => {
    if (imagesList.length === 0) return;
    const newIndex = (currentIndex + 1) % imagesList.length;
    setCurrentIndex(newIndex);
    setCurrentImage(imagesList[newIndex]);
  };

  // --- YANDEX-FOOD ---
  if (slug === 'yandex-food') {
    const yandexImages = [
      '/cases/yandex-food/screenshot-1.jpg',
      '/cases/yandex-food/screenshot-2.jpg',
      '/cases/yandex-food/screenshot-3.jpg',
      '/cases/yandex-food/screenshot-4.jpg',
      '/cases/yandex-food/screenshot-5.jpg',
      '/cases/yandex-food/screenshot-6.jpg',
    ];

    return (
      <div style={{ padding: '40px 20px', background: '#121212', color: '#fff', minHeight: '100vh' }}>
        <div className="case-content">
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
              IT / Платформа
            </span>
            <h1 style={{ fontSize: '48px', marginTop: '12px', marginBottom: '8px' }}>Яндекс Еда</h1>
            <p style={{ fontSize: '20px', color: '#b0b0b0' }}>Вирусный ролик с суммарным охватом 50+ млн</p>
          </div>

          <div style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600 }}>🎬 Вирусный видеоролик</h2>
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                background: '#0a0a0a',
                maxWidth: '400px',
                border: '1px solid #2a2a2a',
              }}
            >
              <video
                src="/cases/yandex-food/video.mp4"
                controls
                style={{
                  width: '100%',
                  display: 'block',
                  aspectRatio: '16/9',
                  objectFit: 'cover',
                }}
                autoPlay={false}
              />
            </div>
          </div>

          <div style={{ marginTop: '48px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600 }}>📢 Репосты в крупных сообществах</h2>
            <div
              style={{
                display: 'flex',
                flexWrap: 'nowrap',
                gap: '12px',
                overflowX: 'auto',
                paddingBottom: '8px',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {yandexImages.map((url, i) => (
                <div key={i} style={{ flex: '0 0 auto' }}>
                  <img
                    src={url}
                    alt={'скрин ' + (i + 1)}
                    style={{
                      width: '200px',
                      height: '125px',
                      borderRadius: '12px',
                      border: '1px solid #2a2a2a',
                      cursor: 'pointer',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                    onClick={() => openLightbox(url, yandexImages, i)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '60px', padding: '40px 20px', background: '#2a2a2a', borderRadius: '24px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '28px', fontWeight: 600, color: '#fff' }}>Хотите так же?</h3>
            <p style={{ fontSize: '18px', color: '#b0b0b0', marginBottom: '16px' }}>
              Расскажите о своём проекте — разработаем стратегию!
            </p>
            <button
              style={{ background: '#c4b5a0', color: '#fff', padding: '14px 40px', border: 'none', borderRadius: '40px', fontSize: '17px', fontWeight: 600, cursor: 'pointer' }}
              onClick={() => window.open('https://t.me/lawayasha', '_blank')}
            >
              Написать в Telegram
            </button>
          </div>
        </div>

        <style jsx>{`
          .case-content {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 20px;
          }
        `}</style>

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
              padding: '10px',
            }}
            onClick={closeLightbox}
          >
            <div
              style={{ position: 'relative', maxWidth: '95vw', maxHeight: '95vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
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
                  fontSize: '24px',
                  cursor: 'pointer',
                  padding: '8px 14px',
                  borderRadius: '50%',
                  zIndex: 10,
                }}
              >
                ✕
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                style={{
                  position: 'absolute',
                  left: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#fff',
                  fontSize: '28px',
                  cursor: 'pointer',
                  padding: '8px 14px',
                  borderRadius: '50%',
                  zIndex: 10,
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.5)')}
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
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#fff',
                  fontSize: '28px',
                  cursor: 'pointer',
                  padding: '8px 14px',
                  borderRadius: '50%',
                  zIndex: 10,
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.5)')}
              >
                ›
              </button>

              <img
                src={currentImage}
                alt="скриншот"
                style={{
                  maxWidth: '90vw',
                  maxHeight: '85vh',
                  borderRadius: '12px',
                  objectFit: 'contain',
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  bottom: '-40px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '14px',
                  fontFamily: 'sans-serif',
                }}
              >
                {currentIndex + 1} / {imagesList.length}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // --- URENT ---
  if (slug === 'urent') {
    const urentImages = [
      '/cases/urent/screenshot-1.jpg',
    ];

    const urentVideos = [
      '/cases/urent/video-1.mp4',
      '/cases/urent/video-2.mp4',
    ];

    return (
      <div style={{ padding: '40px 20px', background: '#121212', color: '#fff', minHeight: '100vh' }}>
        <div className="case-content">
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
              Шеринг / Технологии
            </span>
            <h1 style={{ fontSize: '48px', marginTop: '12px', marginBottom: '8px' }}>
              Urent
            </h1>
            <p style={{ fontSize: '20px', color: '#b0b0b0' }}>
              Создание и продвижение маскота Юрентик
            </p>
          </div>

          <div style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>
              📱 О проекте
            </h2>
            <div
              style={{
                padding: '20px',
                background: '#2a2a2a',
                borderRadius: '12px',
                border: `1px solid #c4b5a0`,
              }}
            >
              <p style={{ color: '#b0b0b0', fontSize: '16px', marginBottom: '12px' }}>
                Мы создали маскота <strong>Юрентика</strong> для компании и сняли вирусные видео:
              </p>
              <ul style={{ color: '#b0b0b0', fontSize: '15px', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '6px' }}>🔹 Разработка персонажа и его характера</li>
                <li style={{ marginBottom: '6px' }}>🔹 Создание вирусных видеороликов</li>
                <li style={{ marginBottom: '6px' }}>🔹 Интеграция в соцсети и рекламные кампании</li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>
              🎬 Видеокреативы
            </h2>
            <div
              style={{
                display: 'flex',
                flexWrap: 'nowrap',
                gap: '12px',
                overflowX: 'auto',
                paddingBottom: '8px',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {urentVideos.map((url, i) => (
                <div key={i} style={{ flex: '0 0 auto' }}>
                  <video
                    src={url}
                    controls
                    style={{
                      width: '200px',
                      height: '125px',
                      borderRadius: '12px',
                      border: '1px solid #2a2a2a',
                      objectFit: 'cover',
                      background: '#0a0a0a',
                      display: 'block',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '48px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600 }}>📢 Репосты в крупных сообществах</h2>
            <div
              style={{
                display: 'flex',
                flexWrap: 'nowrap',
                gap: '12px',
                overflowX: 'auto',
                paddingBottom: '8px',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {urentImages.map((url, i) => (
                <div key={i} style={{ flex: '0 0 auto' }}>
                  <img
                    src={url}
                    alt={'скрин ' + (i + 1)}
                    style={{
                      width: '200px',
                      height: '125px',
                      borderRadius: '12px',
                      border: '1px solid #2a2a2a',
                      cursor: 'pointer',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                    onClick={() => openLightbox(url, urentImages, i)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '60px', padding: '40px 20px', background: '#2a2a2a', borderRadius: '24px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '28px', fontWeight: 600, color: '#fff' }}>Хотите так же?</h3>
            <p style={{ fontSize: '18px', color: '#b0b0b0', marginBottom: '16px' }}>
              Расскажите о своём проекте — разработаем стратегию!
            </p>
            <button
              style={{ background: '#c4b5a0', color: '#fff', padding: '14px 40px', border: 'none', borderRadius: '40px', fontSize: '17px', fontWeight: 600, cursor: 'pointer' }}
              onClick={() => window.open('https://t.me/lawayasha', '_blank')}
            >
              Написать в Telegram
            </button>
          </div>
        </div>

        <style jsx>{`
          .case-content {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 20px;
          }
        `}</style>

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
              padding: '10px',
            }}
            onClick={closeLightbox}
          >
            <div
              style={{ position: 'relative', maxWidth: '95vw', maxHeight: '95vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
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
                  fontSize: '24px',
                  cursor: 'pointer',
                  padding: '8px 14px',
                  borderRadius: '50%',
                  zIndex: 10,
                }}
              >
                ✕
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                style={{
                  position: 'absolute',
                  left: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#fff',
                  fontSize: '28px',
                  cursor: 'pointer',
                  padding: '8px 14px',
                  borderRadius: '50%',
                  zIndex: 10,
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.5)')}
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
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#fff',
                  fontSize: '28px',
                  cursor: 'pointer',
                  padding: '8px 14px',
                  borderRadius: '50%',
                  zIndex: 10,
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.5)')}
              >
                ›
              </button>

              <img
                src={currentImage}
                alt="скриншот"
                style={{
                  maxWidth: '90vw',
                  maxHeight: '85vh',
                  borderRadius: '12px',
                  objectFit: 'contain',
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  bottom: '-40px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '14px',
                  fontFamily: 'sans-serif',
                }}
              >
                {currentIndex + 1} / {imagesList.length}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // --- DEPORTIVO ---
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
      {
        title: 'Deportivo Moscú: клуб русских, играющий в Аргентине',
        url: 'https://www.ole.com.ar/informacion-general/deportivo-moscu-equipo-rusos-juega-argentina-quiere-jugador-torneos-afa-vodka_0_Mz7khgWkyc.html',
      },
    ];

    return (
      <div style={{ padding: '40px 20px', background: '#121212', color: '#fff', minHeight: '100vh' }}>
        <div className="case-content">
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
              Спорт / Lifestyle
            </span>
            <h1 style={{ fontSize: '48px', marginTop: '12px', marginBottom: '8px' }}>
              DEPORTIVO MOSCÚ
            </h1>
            <p style={{ fontSize: '20px', color: '#b0b0b0' }}>
              Российский футбольный клуб в Аргентине
            </p>
          </div>

          <div style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>
              📰 Статьи
            </h2>
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
                  border: `1px solid #c4b5a0`,
                  color: '#fff',
                  textDecoration: 'none',
                  marginBottom: '12px',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = '#3a3a3a')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = '#2a2a2a')
                }
              >
                {article.title}
              </a>
            ))}
          </div>

          <div style={{ marginTop: '48px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>
              📰 Репортажи о клубе
            </h2>
            <div
              style={{
                display: 'flex',
                flexWrap: 'nowrap',
                gap: '12px',
                overflowX: 'auto',
                paddingBottom: '8px',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              <div style={{ flex: '0 0 auto' }}>
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
                    display: 'block',
                  }}
                />
              </div>
              <div style={{ flex: '0 0 auto' }}>
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
                    display: 'block',
                  }}
                />
              </div>
              <div style={{ flex: '0 0 auto' }}>
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
                    display: 'block',
                  }}
                />
              </div>
            </div>
          </div>

          <div style={{ marginTop: '60px', padding: '40px 20px', background: '#2a2a2a', borderRadius: '24px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '28px', fontWeight: 600, color: '#fff' }}>Хотите так же?</h3>
            <p style={{ fontSize: '18px', color: '#b0b0b0', marginBottom: '16px' }}>
              Расскажите о своём проекте — разработаем стратегию!
            </p>
            <button
              style={{ background: '#c4b5a0', color: '#fff', padding: '14px 40px', border: 'none', borderRadius: '40px', fontSize: '17px', fontWeight: 600, cursor: 'pointer' }}
              onClick={() => window.open('https://t.me/lawayasha', '_blank')}
            >
              Написать в Telegram
            </button>
          </div>
        </div>

        <style jsx>{`
          .case-content {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 20px;
          }
        `}</style>
      </div>
    );
  }

  // --- PROMINNER ---
  if (slug === 'promminer') {
    const articles = [
      {
        title: 'РБК о запуске майнинг-пула с автоматической отчетностью для ФНС',
        url: 'https://www.rbc.ru/crypto/news/69d7ab019a79478e24c7a27b',
      },
    ];

    return (
      <div style={{ padding: '40px 20px', background: '#121212', color: '#fff', minHeight: '100vh' }}>
        <div className="case-content">
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
              IT / Майнинг
            </span>
            <h1 style={{ fontSize: '48px', marginTop: '12px', marginBottom: '8px' }}>
              Promminer
            </h1>
            <p style={{ fontSize: '20px', color: '#b0b0b0' }}>
              Разработка и реализация стратегии для соцсетей
            </p>
          </div>

          <div style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>
              📰 Статьи
            </h2>
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
                  border: `1px solid #c4b5a0`,
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

          <div style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>
              🎬 Сюжет РБК
            </h2>
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                background: '#0a0a0a',
                maxWidth: '600px',
                border: '1px solid #2a2a2a',
              }}
            >
              <video
                src="/cases/promminer/video-rbk.mp4"
                controls
                style={{
                  width: '100%',
                  display: 'block',
                  aspectRatio: '16/9',
                  objectFit: 'cover',
                }}
                autoPlay={false}
              />
            </div>
          </div>

          <div style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>
              📄 Стратегия развития бренда
            </h2>
            <a
              href="/cases/promminer/presentation.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                padding: '16px 20px',
                background: '#2a2a2a',
                borderRadius: '12px',
                border: `1px solid #c4b5a0`,
                color: '#fff',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#3a3a3a')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#2a2a2a')}
            >
              📄 Открыть стратегию (PDF)
            </a>
          </div>

          <div style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>
              🚀 Результаты
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ background: '#2a2a2a', padding: '16px 20px', borderRadius: '12px', border: `1px solid #c4b5a0` }}>
                <span style={{ fontSize: '18px', fontWeight: 600, color: '#fff' }}>📈 Рост вовлечения</span>
                <p style={{ color: '#b0b0b0', margin: '4px 0 0 0' }}>Увеличение активности на 150% за 3 месяца</p>
              </div>
              <div style={{ background: '#2a2a2a', padding: '16px 20px', borderRadius: '12px', border: `1px solid #c4b5a0` }}>
                <span style={{ fontSize: '18px', fontWeight: 600, color: '#fff' }}>👥 Охват аудитории</span>
                <p style={{ color: '#b0b0b0', margin: '4px 0 0 0' }}>Рост подписчиков с 2K до 12K</p>
              </div>
              <div style={{ background: '#2a2a2a', padding: '16px 20px', borderRadius: '12px', border: `1px solid #c4b5a0` }}>
                <span style={{ fontSize: '18px', fontWeight: 600, color: '#fff' }}>💼 Заявки</span>
                <p style={{ color: '#b0b0b0', margin: '4px 0 0 0' }}>Более 150 коммерческих запросов за месяц</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '60px', padding: '40px 20px', background: '#2a2a2a', borderRadius: '24px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '28px', fontWeight: 600, color: '#fff' }}>Хотите так же?</h3>
            <p style={{ fontSize: '18px', color: '#b0b0b0', marginBottom: '16px' }}>
              Расскажите о своём проекте — разработаем стратегию!
            </p>
            <button
              style={{ background: '#c4b5a0', color: '#fff', padding: '14px 40px', border: 'none', borderRadius: '40px', fontSize: '17px', fontWeight: 600, cursor: 'pointer' }}
              onClick={() => window.open('https://t.me/lawayasha', '_blank')}
            >
              Написать в Telegram
            </button>
          </div>
        </div>

        <style jsx>{`
          .case-content {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 20px;
          }
        `}</style>
      </div>
    );
  }

  // --- FULL HOUSE ---
  if (slug === 'fullhouse') {
    return (
      <div style={{ padding: '40px 20px', background: '#121212', color: '#fff', minHeight: '100vh' }}>
        <div className="case-content">
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
              iGaming / SMM
            </span>
            <h1 style={{ fontSize: '48px', marginTop: '12px', marginBottom: '8px' }}>
              Клуб «Фулл Хаус»
            </h1>
            <p style={{ fontSize: '20px', color: '#b0b0b0' }}>
              Ведение Telegram-канала и создание YouTube Shorts
            </p>
          </div>

          <div style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>
              📱 О проекте
            </h2>
            <div
              style={{
                padding: '20px',
                background: '#2a2a2a',
                borderRadius: '12px',
                border: `1px solid #c4b5a0`,
              }}
            >
              <p style={{ color: '#b0b0b0', fontSize: '16px', marginBottom: '12px' }}>
                Разработана стратегия ведения Telegram-канала и создание видео для YouTube Shorts:
              </p>
              <ul style={{ color: '#b0b0b0', fontSize: '15px', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '6px' }}>🔹 Разработка контент-стратегии для Telegram</li>
                <li style={{ marginBottom: '6px' }}>🔹 Создание визуального стиля и структуры постов</li>
                <li style={{ marginBottom: '6px' }}>🔹 Съемка и монтаж видео для YouTube Shorts</li>
                <li style={{ marginBottom: '6px' }}>🔹 Интеграция контента в общую стратегию продвижения</li>
              </ul>
              <p style={{ color: '#b0b0b0', fontSize: '15px', marginTop: '16px' }}>
                📲 Результат: Telegram-канал <a href="https://t.me/clubfullhouse" target="_blank" rel="noopener noreferrer" style={{ color: '#c4b5a0', textDecoration: 'none', borderBottom: '1px solid rgba(196, 181, 160, 0.3)' }}>@clubfullhouse</a> — 1 700+ подписчиков
              </p>
            </div>
          </div>

          <div style={{ marginTop: '60px', padding: '40px 20px', background: '#2a2a2a', borderRadius: '24px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '28px', fontWeight: 600, color: '#fff' }}>Хотите так же?</h3>
            <p style={{ fontSize: '18px', color: '#b0b0b0', marginBottom: '16px' }}>
              Расскажите о своём проекте — разработаем стратегию!
            </p>
            <button
              style={{ background: '#c4b5a0', color: '#fff', padding: '14px 40px', border: 'none', borderRadius: '40px', fontSize: '17px', fontWeight: 600, cursor: 'pointer' }}
              onClick={() => window.open('https://t.me/lawayasha', '_blank')}
            >
              Написать в Telegram
            </button>
          </div>
        </div>

        <style jsx>{`
          .case-content {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 20px;
          }
        `}</style>
      </div>
    );
  }

  // --- NDA HR TEAM ---
  if (slug === 'nda-hr-team') {
    const creatives = [
      '/cases/nda-hr-team/creative-1.jpg',
      '/cases/nda-hr-team/creative-2.jpg',
      '/cases/nda-hr-team/creative-3.jpg',
      '/cases/nda-hr-team/creative-4.jpg',
      '/cases/nda-hr-team/creative-5.jpg',
    ];

    return (
      <div style={{ padding: '40px 20px', background: '#121212', color: '#fff', minHeight: '100vh' }}>
        <div className="case-content">
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
              HR / IGaming
            </span>
            <h1 style={{ fontSize: '48px', marginTop: '12px', marginBottom: '8px' }}>
              NDA HR TEAM
            </h1>
            <p style={{ fontSize: '20px', color: '#b0b0b0' }}>
              Креативы для HR-бренда
            </p>
          </div>

          <div style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>
              🎨 Примеры креативов
            </h2>
            <div
              style={{
                display: 'flex',
                flexWrap: 'nowrap',
                gap: '12px',
                overflowX: 'auto',
                paddingBottom: '8px',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {creatives.map((url, i) => (
                <div key={i} style={{ flex: '0 0 auto' }}>
                  <img
                    src={url}
                    alt={`Креатив ${i + 1}`}
                    style={{
                      width: '200px',
                      height: '125px',
                      borderRadius: '12px',
                      border: '1px solid #2a2a2a',
                      cursor: 'pointer',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                    onClick={() => openLightbox(url, creatives, i)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '50px', textAlign: 'center' }}>
            <a
              href="https://t.me/ndahrteam"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#c4b5a0',
                fontSize: '18px',
                textDecoration: 'none',
                borderBottom: `2px solid #c4b5a0`,
                paddingBottom: '6px',
                transition: 'border-color 0.2s',
                fontFamily: 'sans-serif',
                fontWeight: 500,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#d4c5b0')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#c4b5a0')}
            >
              📲 Телеграм канал NDA HR TEAM
            </a>
          </div>

          <div style={{ marginTop: '40px', padding: '40px 20px', background: '#2a2a2a', borderRadius: '24px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '28px', fontWeight: 600, color: '#fff' }}>Хотите так же?</h3>
            <p style={{ fontSize: '18px', color: '#b0b0b0', marginBottom: '16px' }}>
              Расскажите о своём проекте — разработаем стратегию!
            </p>
            <button
              style={{ background: '#c4b5a0', color: '#fff', padding: '14px 40px', border: 'none', borderRadius: '40px', fontSize: '17px', fontWeight: 600, cursor: 'pointer' }}
              onClick={() => window.open('https://t.me/lawayasha', '_blank')}
            >
              Написать в Telegram
            </button>
          </div>
        </div>

        <style jsx>{`
          .case-content {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 20px;
          }
        `}</style>

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
              padding: '10px',
            }}
            onClick={closeLightbox}
          >
            <div
              style={{ position: 'relative', maxWidth: '95vw', maxHeight: '95vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
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
                  fontSize: '24px',
                  cursor: 'pointer',
                  padding: '8px 14px',
                  borderRadius: '50%',
                  zIndex: 10,
                }}
              >
                ✕
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                style={{
                  position: 'absolute',
                  left: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#fff',
                  fontSize: '28px',
                  cursor: 'pointer',
                  padding: '8px 14px',
                  borderRadius: '50%',
                  zIndex: 10,
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.5)')}
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
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#fff',
                  fontSize: '28px',
                  cursor: 'pointer',
                  padding: '8px 14px',
                  borderRadius: '50%',
                  zIndex: 10,
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.5)')}
              >
                ›
              </button>

              <img
                src={currentImage}
                alt="креатив"
                style={{
                  maxWidth: '90vw',
                  maxHeight: '85vh',
                  borderRadius: '12px',
                  objectFit: 'contain',
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  bottom: '-40px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '14px',
                  fontFamily: 'sans-serif',
                }}
              >
                {currentIndex + 1} / {imagesList.length}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // --- IGAMING COMPANY (NDA) ---
  if (slug === 'spinbetter') {
    return (
      <div style={{ padding: '40px 20px', background: '#121212', color: '#fff', minHeight: '100vh' }}>
        <div className="case-content">
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
              Беттинг / Маркетинг
            </span>
            <h1 style={{ fontSize: '48px', marginTop: '12px', marginBottom: '8px' }}>
              iGaming Company (NDA)
            </h1>
            <p style={{ fontSize: '20px', color: '#b0b0b0' }}>
              Букмекерская компания
            </p>
          </div>

          <div style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>
              📄 Стратегия развития бренда в социальных сетях
            </h2>
            <div
              style={{
                padding: '20px',
                background: '#2a2a2a',
                borderRadius: '12px',
                border: `1px solid #c4b5a0`,
              }}
            >
              <p style={{ color: '#b0b0b0', fontSize: '16px', marginBottom: '12px' }}>
                Разработана комплексная стратегия присутствия бренда в социальных сетях:
              </p>
              <ul style={{ color: '#b0b0b0', fontSize: '15px', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '6px' }}>🔹 Анализ целевой аудитории и конкурентов</li>
                <li style={{ marginBottom: '6px' }}>🔹 Контент-план и визуальная стратегия</li>
                <li style={{ marginBottom: '6px' }}>🔹 Система вовлечения и удержания подписчиков</li>
              </ul>

              <div style={{ marginTop: '16px' }}>
                <a
                  href="/cases/spinbetter/strategy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '12px 28px',
                    background: '#c4b5a0',
                    color: '#fff',
                    borderRadius: '40px',
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontWeight: 500,
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#d4c5b0')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#c4b5a0')}
                >
                  📄 Открыть стратегию (PDF)
                </a>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>
              📊 Воронка для депозитов
            </h2>
            <div
              style={{
                padding: '20px',
                background: '#2a2a2a',
                borderRadius: '12px',
                border: `1px solid #c4b5a0`,
              }}
            >
              <p style={{ color: '#b0b0b0', fontSize: '16px', marginBottom: '12px' }}>
                Разработана эффективная воронка для привлечения и удержания депозитов:
              </p>
              <ul style={{ color: '#b0b0b0', fontSize: '15px', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '6px' }}>🔹 Привлечение трафика через соцсети</li>
                <li style={{ marginBottom: '6px' }}>🔹 Лендинги и регистрация</li>
                <li style={{ marginBottom: '6px' }}>🔹 Система бонусов и удержания</li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: '48px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600 }}>🎨 Креативы для соцсетей</h2>
            <div
              style={{
                padding: '40px 20px',
                background: '#1a1a1a',
                borderRadius: '16px',
                border: '1px solid #2a2a2a',
                textAlign: 'center',
                color: '#666',
                fontSize: '16px',
                fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Text, sans-serif',
              }}
            >
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>🔒</div>
              <p style={{ margin: 0 }}>Контент доступен по NDA</p>
              <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#444' }}>
                Обратитесь за деталями
              </p>
            </div>
          </div>

          <div style={{ marginTop: '60px', padding: '40px 20px', background: '#2a2a2a', borderRadius: '24px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '28px', fontWeight: 600, color: '#fff' }}>Хотите так же?</h3>
            <p style={{ fontSize: '18px', color: '#b0b0b0', marginBottom: '16px' }}>
              Расскажите о своём проекте — разработаем стратегию!
            </p>
            <button
              style={{ background: '#c4b5a0', color: '#fff', padding: '14px 40px', border: 'none', borderRadius: '40px', fontSize: '17px', fontWeight: 600, cursor: 'pointer' }}
              onClick={() => window.open('https://t.me/lawayasha', '_blank')}
            >
              Написать в Telegram
            </button>
          </div>
        </div>

        <style jsx>{`
          .case-content {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 20px;
          }
        `}</style>
      </div>
    );
  }

  // --- КЕЙС НЕ НАЙДЕН ---
  return (
    <div style={{ padding: '40px', background: '#121212', color: '#fff' }}>
      <div className="case-content">
        <h1>Кейс не найден</h1>
        <Link href="/cases" style={{ color: '#c4b5a0' }}>← Вернуться</Link>
      </div>
      <style jsx>{`
        .case-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }
      `}</style>
    </div>
  );
}