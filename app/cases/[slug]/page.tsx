'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

const casesData = {
  'yandex-food': {
    title: 'Яндекс Еда',
    tag: 'Вирусный контент',
    description: 'Вирусный ролик с суммарным охватом 50+ млн',
    full: 'Мы создали вирусный ролик для сервиса доставки Яндекс Еда...',
    stats: ['50+ млн суммарный охват', '20+ репостов в крупных сообществах'],
    media: [],
    color: '#c4b5a0',
  },
  'deportivo': {
    title: 'Deportivo',
    tag: 'Спорт / Lifestyle',
    description: 'Вирусный контент с 10+ млн просмотров',
    full: 'Мы создали вирусную кампанию для спортивного бренда Deportivo...',
    stats: ['10+ млн просмотров', '28% рост продаж', '5 дней до вирала'],
    media: [],
    color: '#d4af37',
  },
};

export default function CasePage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = casesData[slug as keyof typeof casesData];

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
    </div>
  );
}