'use client';

import Link from 'next/link';
import ContactForm from '../components/ContactForm';

export default function ServicesPage() {
  const services = [
    {
      title: 'Разработка стратегии',
      price: 'от 110 000 ₽',
      description: 'Анализ рынка, конкурентов и аудитории. Разработка контент-плана и визуальной стратегии.',
    },
    {
      title: 'Создание вирусного контента',
      price: 'от 140 000 ₽',
      description: 'REELS, TikTok, YouTube Shorts. Сценарий, съемка, монтаж — всё, чтобы взорвать соцсети.',
    },
    {
      title: 'SMM-продвижение',
      price: 'от 220 000 ₽',
      description: 'Ведение соцсетей, настройка таргета, работа с блогерами. Рост подписчиков и вовлечения.',
    },
    {
      title: 'Брендбук и айдентика',
      price: 'от 70 000 ₽',
      description: 'Разработка визуального стиля бренда: логотип, цвета, шрифты, гайдлайны.',
    },
    {
      title: 'Медийная стратегия',
      price: 'от 150 000 ₽',
      description: 'Комплексное продвижение в СМИ, работа с инфлюенсерами, создание имиджевых материалов.',
    },
  ];

  return (
    <main className="services-page">
      <div className="container">
        <Link href="/" className="back-link">← На главную</Link>

        <h1>Услуги</h1>
        <p className="subtitle">Что мы предлагаем нашим клиентам</p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p className="price">{service.price}</p>
              <p className="description">{service.description}</p>
            </div>
          ))}
        </div>

        {/* ФОРМА СВЯЗИ */}
        <div className="contact-section">
          <h2>Оставьте заявку</h2>
          <p className="contact-subtitle">Мы свяжемся с вами в ближайшее время</p>
          <ContactForm />
        </div>
      </div>

      <style jsx>{`
        .services-page {
          padding: 60px 20px 80px;
          background: #121212;
          min-height: 100vh;
          color: #fff;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .back-link {
          color: #c4b5a0;
          text-decoration: none;
          font-size: 16px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
          display: inline-block;
          margin-bottom: 40px;
          transition: opacity 0.2s;
        }

        .back-link:hover {
          opacity: 0.7;
        }

        h1 {
          font-size: 56px;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
          margin-bottom: 8px;
        }

        .subtitle {
          font-size: 20px;
          color: #b0b0b0;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
          margin-bottom: 48px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          margin-bottom: 60px;
        }

        .service-card {
          padding: 32px 28px;
          background: #1a1a1a;
          border-radius: 20px;
          border: 1px solid #2a2a2a;
          transition: all 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-4px);
          border-color: #c4b5a0;
          box-shadow: 0 12px 32px rgba(0,0,0,0.3);
        }

        .service-card h3 {
          font-size: 22px;
          font-weight: 600;
          color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
          margin-bottom: 8px;
        }

        .service-card .price {
          font-size: 24px;
          font-weight: 700;
          color: #c4b5a0;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
          margin-bottom: 12px;
        }

        .service-card .description {
          font-size: 16px;
          color: #b0b0b0;
          line-height: 1.6;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
          margin: 0;
        }

        .contact-section {
          padding: 60px 0 20px;
          background: #121212;
          border-top: 1px solid #2a2a2a;
          margin-top: 20px;
        }

        .contact-section h2 {
          font-size: 36px;
          font-weight: 700;
          color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
          text-align: center;
          margin-bottom: 4px;
        }

        .contact-subtitle {
          text-align: center;
          color: #888;
          font-size: 18px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
          margin-bottom: 32px;
        }

        @media (max-width: 768px) {
          .services-page {
            padding: 40px 16px 60px;
          }

          h1 {
            font-size: 40px;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .service-card {
            padding: 24px 20px;
          }

          .service-card h3 {
            font-size: 20px;
          }

          .service-card .price {
            font-size: 20px;
          }

          .contact-section h2 {
            font-size: 28px;
          }

          .contact-subtitle {
            font-size: 16px;
          }
        }
      `}</style>
    </main>
  );
}