'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

const casesData = {
  'yandex-food': {
    title: 'Яндекс Еда',
    tag: 'Вирусный контент',
    description: 'Вирусный ролик с суммарным охватом 50+ млн',
    full: 'Мы создали вирусный ролик для сервиса доставки Яндекс Еда. Задача — показать, как быстро и вкусно можно получить заказ, используя юмор и неожиданный поворот. Ролик завирусился в TikTok и Instagram, набрав суммарный охват более 50 миллионов просмотров.',
    stats: ['50+ млн суммарный охват', '20+ репостов в крупных сообществах'],
    media: [
      { type: 'image', url: '/cases/yandex-food/screenshot-1.jpg' },
      { type: 'image', url: '/cases/yandex-food/screenshot-2.jpg' },
      { type: 'image', url: '/cases/yandex-food/screenshot-3.jpg' },
      { type: 'image', url: '/cases/yandex-food/screenshot-4.jpg' },
      { type: 'image', url: '/cases/yandex-food/screenshot-5.jpg' },
      { type: 'image', url: '/cases/yandex-food/screenshot-6.jpg' },
    ],
    color: '#c4b5a0',
  },
  'deportivo': {
    title: 'Deportivo',
    tag: 'Спорт / Lifestyle',
    description: 'Вирусный контент с 10+ млн просмотров',
    full: 'Мы создали вирусную кампанию для спортивного бренда Deportivo. Задача — показать энергию и стиль бренда через динамичный контент. Ролики завирусились в TikTok и Instagram, набрав суммарный охват более 10 миллионов просмотров.',
    stats: ['10+ млн просмотров', '28% рост продаж', '5 дней до вирала'],
    media: [
      { type: 'image', url: '/cases/deportivo/screenshot-1.jpg' },
    ],
    color: '#d4af37',
  },
  'beauty-story': {
    title: 'Beauty Story',
    tag: 'Косметика',
    description: '+280% продаж за 4 месяца',
    full: 'Разработали SMM‑стратегию для бренда натуральной косметики...',
    stats: ['280% рост продаж', '4 месяца', '1.2 млн охват'],
    media: [],
    color: '#c4b5a0',
  },
  'moscow-coffee': {
    title: 'Moscow Coffee',
    tag: 'F&B',
    description: '12 млн просмотров за 7 дней',
    full: 'Запустили вирусный челлендж для сети кофеен...',
    stats: ['12 млн просмотров', '7 дней', '800+ новых клиентов'],
    media: [],
    color: '#7a2e2a',
  },
  'urban-sneakers': {
    title: 'Urban Sneakers',
    tag: 'Одежда',
    description: '5000 заявок с нулевым бюджетом',
    full: 'Создали бренд с нуля: стратегия, айдентика...',
    stats: ['5000 заявок', '0 ₽ бюджет', '2 млн охват'],
    media: [],
    color: '#d4af37',
  },
  'luxe-jewelry': {
    title: 'Luxe Jewelry',
    tag: 'Ювелирка',
    description: '+150% вовлечения, охват х3',
    full: 'Контент‑стратегия с фокусом на эстетику...',
    stats: ['+150% вовлечение', '3x охват', '+200% продаж'],
    media: [],
    color: '#c4b5a0',
  },
  'wine-people': {
    title: 'Wine & People',
    tag: 'Напитки',
    description: '+200% продаж за 2 месяца',
    full: 'Создали контент-стратегию с сомелье...',
    stats: ['+200% продаж', '2 месяца', '2.5 млн охват'],
    media: [],
    color: '#7a2e2a',
  },
  'appvision': {
    title: 'AppVision',
    tag: 'IT',
    description: '50 000 установок за месяц',
    full: 'Интеграции с блогерами, обзоры в TikTok...',
    stats: ['50 000 установок', '1 месяц', '150 тыс. ₽ бюджет'],
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

      {/* МЕДИА — СКРИНЫ И ВИДЕО */}
      {data.media && data.media.length > 0 && (
        <div style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>Репосты в крупных сообществах</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {data.media.map((item, index) => (
              <div key={index} style={{ flex: '1 1 200px', maxWidth: '300px', borderRadius: '16px', overflow: 'hidden', background: '#2a2a2a' }}>
                {item.type === 'video' ? (
                  <video 
                    src={item.url} 
                    controls 
                    style={{ width: '100%', display: 'block', aspectRatio: '16/10', objectFit: 'cover' }}
                  />
                ) : (
                  <img 
                    src={item.url} 
                    alt={`${data.title} - ${index + 1}`} 
                    style={{ width: '100%', display: 'block', aspectRatio: '16/10', objectFit: 'cover' }}
                  />
                )}
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
    </div>
  );
}