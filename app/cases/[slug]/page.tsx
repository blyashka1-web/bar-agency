'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function CasePage() {
  const params = useParams();
  const slug = params.slug;

  if (slug === 'yandex-food') {
    return (
      <div style={{ padding: '40px 20px', background: '#121212', color: '#fff', minHeight: '100vh' }}>
        <Link href="/cases" style={{ color: '#c4b5a0', textDecoration: 'none' }}>← Все кейсы</Link>
        <h1 style={{ fontSize: '48px', marginTop: '40px' }}>Яндекс Еда</h1>
        <p>Вирусный ролик с суммарным охватом 50+ млн</p>
        <video src="/cases/yandex-food/video.mp4" controls style={{ width: '100%', maxWidth: '600px', marginTop: '20px' }} />
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px', flexWrap: 'wrap' }}>
          <img src="/cases/yandex-food/screenshot-1.jpg" alt="скрин" style={{ width: '150px', borderRadius: '8px' }} />
          <img src="/cases/yandex-food/screenshot-2.jpg" alt="скрин" style={{ width: '150px', borderRadius: '8px' }} />
          <img src="/cases/yandex-food/screenshot-3.jpg" alt="скрин" style={{ width: '150px', borderRadius: '8px' }} />
        </div>
      </div>
    );
  }

  if (slug === 'deportivo') {
    return (
      <div style={{ padding: '40px 20px', background: '#121212', color: '#fff', minHeight: '100vh' }}>
        <Link href="/cases" style={{ color: '#c4b5a0', textDecoration: 'none' }}>← Все кейсы</Link>
        <h1 style={{ fontSize: '48px', marginTop: '40px' }}>Deportivo</h1>
        <p>Вирусный контент с 10+ млн просмотров</p>
        <a href="https://www.ole.com.ar/informacion-general/anton-nefedechev-primer-gol-ruso-argentina-deportivo-moscu-liga-escobarense_0_APpXWb03bh.html" target="_blank" style={{ display: 'block', padding: '16px', background: '#2a2a2a', borderRadius: '8px', color: '#fff', textDecoration: 'none', marginTop: '20px' }}>
          Антон Нефедечев — первый русский гол в Аргентине
        </a>
        <img src="/cases/deportivo/screenshot-1.jpg" alt="скрин" style={{ width: '300px', borderRadius: '8px', marginTop: '20px', cursor: 'pointer' }} onClick={() => window.open('https://www.ole.com.ar/informacion-general/anton-nefedechev-primer-gol-ruso-argentina-deportivo-moscu-liga-escobarense_0_APpXWb03bh.html', '_blank')} />
      </div>
    );
  }

  return (
    <div style={{ padding: '40px', background: '#121212', color: '#fff' }}>
      <h1>Кейс не найден</h1>
      <Link href="/cases" style={{ color: '#c4b5a0' }}>← Вернуться</Link>
    </div>
  );
}