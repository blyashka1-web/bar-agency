'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function CasePage() {
  const params = useParams();
  const slug = params.slug;

  // Данные только для двух кейсов
  const casesData = {
    'yandex-food': {
      title: 'Яндекс Еда',
      tag: 'Вирусный контент',
      description: 'Вирусный ролик с суммарным охватом 50+ млн',
      color: '#c4b5a0',
    },
    'deportivo': {
      title: 'Deportivo',
      tag: 'Спорт / Lifestyle',
      description: 'Вирусный контент с 10+ млн просмотров',
      articleUrl: 'https://www.ole.com.ar/informacion-general/anton-nefedechev-primer-gol-ruso-argentina-deportivo-moscu-liga-escobarense_0_APpXWb03bh.html',
      color: '#d4af37',
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

      {data.articleUrl && (
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
        <img
          src="/cases/deportivo/screenshot-1.jpg"
          alt="скрин"
          style={{
            width: '100%',
            maxWidth: '400px',
            borderRadius: '12px',
            border: '1px solid #2a2a2a',
            cursor: 'pointer',
          }}
          onClick={() => window.open(data.articleUrl, '_blank')}
        />
      </div>
    </div>
  );
}