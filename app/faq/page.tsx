'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Сколько стоят ваши услуги?',
      answer: 'Стоимость зависит от объёма работ и конкретных задач. Базовые цены указаны на странице "Услуги". Для точного расчёта свяжитесь с нами через Telegram — мы подготовим индивидуальное предложение.',
    },
    {
      question: 'Как долго вы работаете над проектом?',
      answer: 'Сроки зависят от сложности проекта. В среднем разработка стратегии занимает 3–5 дней, создание контента — от 1 до 14 дней. Все сроки согласовываются с вами до начала работы.',
    },
    {
      question: 'Нужно ли подписывать договор?',
      answer: 'Да, мы работаем по договору. Это гарантирует защиту ваших прав и наших обязательств. Все детали прописываются в договоре до начала работы.',
    },
    {
      question: 'Какие соцсети вы продвигаете?',
      answer: 'Мы работаем со всеми популярными соцсетями: Instagram, Telegram, TikTok, YouTube, VK и другими. Подберём площадки, которые лучше всего подходят для вашего бизнеса.',
    },
    {
      question: 'Как я могу контролировать процесс?',
      answer: 'Мы предоставляем регулярные отчёты (еженедельные или ежемесячные) и всегда на связи в Telegram. Вы всегда будете знать, что происходит на каждом этапе.',
    },
    {
      question: 'Что такое вирусный контент?',
      answer: 'Это контент, который пользователи активно распространяют сами. Мы создаём ролики, мемы, тренды, которые вызывают эмоции и побуждают делиться. Это главный способ быстро набрать охваты.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="faq-page">
      <div className="container">
        <Link href="/" className="back-link">← На главную</Link>

        <h1>Часто задаваемые вопросы</h1>
        <p className="subtitle">Ответы на самые популярные вопросы о работе с BAR AGENCY</p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className={`faq-question ${openIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className={`faq-icon ${openIndex === index ? 'rotate' : ''}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-block">
          <h2>Остались вопросы?</h2>
          <p>Напишите нам в Telegram — мы ответим в течение 15 минут</p>
          <a href="https://t.me/lawayasha" target="_blank" rel="noopener noreferrer" className="cta-button">
            Написать в Telegram
          </a>
        </div>
      </div>

      <style jsx>{`
        .faq-page {
          padding: 60px 20px 80px;
          background: #121212;
          min-height: 100vh;
          color: #fff;
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
        }

        .back-link {
          color: #c4b5a0;
          text-decoration: none;
          font-size: 16px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          display: inline-block;
          margin-bottom: 40px;
          transition: opacity 0.2s;
        }

        .back-link:hover {
          opacity: 0.7;
        }

        h1 {
          font-size: 40px;
          font-weight: 700;
          color: #fff;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          margin-bottom: 8px;
        }

        .subtitle {
          font-size: 18px;
          color: #b0b0b0;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          margin-bottom: 48px;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 60px;
        }

        .faq-item {
          background: #1a1a1a;
          border: 1px solid #2a2a2a;
          border-radius: 16px;
          overflow: hidden;
          transition: border-color 0.2s;
        }

        .faq-item:hover {
          border-color: #c4b5a0;
        }

        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          background: transparent;
          border: none;
          color: #fff;
          font-size: 18px;
          font-weight: 500;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          cursor: pointer;
          text-align: left;
          transition: background 0.2s;
          gap: 16px;
        }

        .faq-question:hover {
          background: rgba(255,255,255,0.02);
        }

        .faq-question span {
          flex: 1;
        }

        .faq-icon {
          flex-shrink: 0;
          color: #c4b5a0;
          transition: transform 0.3s ease;
        }

        .faq-icon.rotate {
          transform: rotate(180deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
          padding: 0 24px;
        }

        .faq-answer.open {
          max-height: 500px;
          padding: 0 24px 20px 24px;
        }

        .faq-answer p {
          font-size: 16px;
          color: #b0b0b0;
          line-height: 1.8;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          margin: 0;
        }

        .cta-block {
          text-align: center;
          padding: 48px 32px;
          background: #1a1a1a;
          border-radius: 24px;
          border: 1px solid #2a2a2a;
        }

        .cta-block h2 {
          font-size: 28px;
          font-weight: 700;
          color: #fff;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          margin-bottom: 8px;
        }

        .cta-block p {
          font-size: 18px;
          color: #b0b0b0;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          margin-bottom: 24px;
        }

        .cta-button {
          display: inline-block;
          background: #c4b5a0;
          color: #121212;
          padding: 16px 44px;
          border-radius: 40px;
          text-decoration: none;
          font-weight: 600;
          font-size: 17px;
          transition: all 0.25s ease;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
        }

        .cta-button:hover {
          background: #d4c5b0;
          transform: scale(1.02);
        }

        @media (max-width: 480px) {
          .faq-page {
            padding: 40px 16px 60px;
          }

          h1 {
            font-size: 28px;
          }

          .subtitle {
            font-size: 16px;
            margin-bottom: 32px;
          }

          .faq-question {
            padding: 16px 18px;
            font-size: 16px;
          }

          .faq-answer.open {
            padding: 0 18px 16px 18px;
          }

          .cta-block {
            padding: 32px 20px;
          }

          .cta-block h2 {
            font-size: 24px;
          }

          .cta-block p {
            font-size: 16px;
          }

          .cta-button {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </main>
  );
}