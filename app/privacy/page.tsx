'use client';

import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <div className="container">
        <Link href="/" className="back-link">← На главную</Link>
        
        <h1>Политика конфиденциальности</h1>
        <p className="last-updated">Последнее обновление: 17 августа 2026 г.</p>

        <div className="legal-content">
          <section>
            <h2>1. Общие положения</h2>
            <p>Настоящая Политика конфиденциальности (далее — «Политика») регулирует порядок сбора, использования и защиты персональных данных пользователей сайта BAR AGENCY (далее — «Сайт»).</p>
            <p>Используя Сайт, вы соглашаетесь с условиями настоящей Политики. Если вы не согласны с этими условиями, пожалуйста, не используйте Сайт.</p>
          </section>

          <section>
            <h2>2. Какие данные мы собираем</h2>
            <ul>
              <li><strong>Личная информация:</strong> имя, фамилия, номер телефона, адрес электронной почты — когда вы оставляете заявку через форму связи или пишете в мессенджеры.</li>
              <li><strong>Техническая информация:</strong> IP-адрес, тип браузера, устройство, время посещения, просмотренные страницы — для анализа работы сайта и улучшения пользовательского опыта.</li>
            </ul>
          </section>

          <section>
            <h2>3. Как мы используем ваши данные</h2>
            <ul>
              <li>Для связи с вами по вопросам, связанным с услугами BAR AGENCY.</li>
              <li>Для улучшения работы сайта и персонализации контента.</li>
              <li>Для отправки информационных и рекламных материалов (только с вашего согласия).</li>
            </ul>
          </section>

          <section>
            <h2>4. Защита данных</h2>
            <p>Мы принимаем все необходимые меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.</p>
          </section>

          <section>
            <h2>5. Передача данных третьим лицам</h2>
            <p>Мы не передаём ваши персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством РФ (например, по запросу суда или правоохранительных органов).</p>
          </section>

          <section>
            <h2>6. Ваши права</h2>
            <ul>
              <li>Вы имеете право запросить копию ваших данных, которые мы храним.</li>
              <li>Вы имеете право потребовать удалить ваши данные.</li>
              <li>Вы имеете право отозвать согласие на обработку данных в любой момент.</li>
            </ul>
            <p>Для реализации этих прав свяжитесь с нами через Telegram: <a href="https://t.me/lawayasha" target="_blank" rel="noopener noreferrer">@lawayasha</a></p>
          </section>

          <section>
            <h2>7. Изменения в Политике</h2>
            <p>Мы оставляем за собой право вносить изменения в настоящую Политику. Актуальная версия всегда доступна на этой странице.</p>
          </section>

          <section>
            <h2>8. Контакты</h2>
            <p>По всем вопросам, связанным с Политикой конфиденциальности, вы можете обратиться к нам:</p>
            <ul>
              <li>Telegram: <a href="https://t.me/lawayasha" target="_blank" rel="noopener noreferrer">@lawayasha</a></li>
              <li>Instagram: <a href="https://instagram.com/agency_bar" target="_blank" rel="noopener noreferrer">@agency_bar</a></li>
            </ul>
          </section>
        </div>
      </div>

      <style jsx>{`
        .legal-page {
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
          margin-bottom: 4px;
        }

        .last-updated {
          font-size: 14px;
          color: #888;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          margin-bottom: 40px;
        }

        .legal-content {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .legal-content h2 {
          font-size: 22px;
          font-weight: 600;
          color: #c4b5a0;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          margin-bottom: 12px;
        }

        .legal-content p {
          font-size: 16px;
          color: #b0b0b0;
          line-height: 1.8;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          margin-bottom: 12px;
        }

        .legal-content ul {
          padding-left: 24px;
          margin-bottom: 12px;
        }

        .legal-content ul li {
          font-size: 16px;
          color: #b0b0b0;
          line-height: 1.8;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          margin-bottom: 6px;
        }

        .legal-content a {
          color: #c4b5a0;
          text-decoration: none;
          border-bottom: 1px solid rgba(196, 181, 160, 0.3);
          transition: border-color 0.2s;
        }

        .legal-content a:hover {
          border-color: #c4b5a0;
        }

        @media (max-width: 480px) {
          .legal-page {
            padding: 40px 16px 60px;
          }

          h1 {
            font-size: 28px;
          }

          .legal-content h2 {
            font-size: 20px;
          }
        }
      `}</style>
    </main>
  );
}