'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function CasePage() {
  const params = useParams();
  const slug = params.slug;

  // Данные для Яндекс Еды
  if (slug === 'yandex-food') {
    return (
      <div style={{ padding: '40px 20px', background: '#121212', color: '#fff', minHeight: '100vh' }}>
        <Link href="/cases" style={{ color: '#c4b5a0', textDecoration: 'none' }}>← Все кейсы</Link>
        <h1 style={{ fontSize: '48px', marginTop: '40px' }}>Яндекс Еда</h1>
        <p>Вирусный ролик с суммарным охватом 50+ млн</p>
        <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <img src="/cases/yandex-food/screenshot-1.jpg" alt="скрин" style={{ width: '200px', borderRadius: '8px' }} />
          <img src="/cases/yandex-food/screenshot-2.jpg" alt="скрин" style={{ width: '200px', borderRadius: '8px' }} />
          <img src="/cases/yandex-food/screenshot-3.jpg" alt="скрин" style={{ width: '200px', borderRadius: '8px' }} />
        </div>
      </div>
    );
  }

  // Данные для Deportivo
  if (slug === 'deportivo') {
    return (
      <div style={{ padding: '40px 20px', background: '#121212', color: '#fff', minHeight: '100vh' }}>
        <Link href="/cases" style={{ color: '#c4b5a0', textDecoration: 'none' }}>← Все кейсы</Link>
        <h1 style={{ fontSize: '48px', marginTop: '40px' }}>DEPORTIVO MOSCÚ</h1>
        <p>Российский футбольный клуб в Аргентине</p>
        <div style={{ marginTop: '20px' }}>
          <a href="https://www.ole.com.ar/informacion-general/anton-nefedechev-primer-gol-ruso-argentina-deportivo-moscu-liga-escobarense_0_APpXWb03bh.html" target="_blank" style={{ display: 'block', padding: '12px', background: '#2a2a2a', borderRadius: '8px', color: '#fff', textDecoration: 'none', marginBottom: '8px' }}>
            Антон Нефедечев — первый русский гол в Аргентине
          </a>
          <a href="https://cnnespanol.cnn.com/2025/08/07/argentina/video/club-rusos-argentina-moscu-cafe-tv" target="_blank" style={{ display: 'block', padding: '12px', background: '#2a2a2a', borderRadius: '8px', color: '#fff', textDecoration: 'none', marginBottom: '8px' }}>
            Deportivo Moscú — история клуба на CNN
          </a>
          <a href="https://tass.ru/sport/25485173" target="_blank" style={{ display: 'block', padding: '12px', background: '#2a2a2a', borderRadius: '8px', color: '#fff', textDecoration: 'none', marginBottom: '8px' }}>
            Под своим флагом. Как российский футбол покоряет Аргентину
          </a>
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