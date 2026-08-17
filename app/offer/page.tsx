'use client';

import Link from 'next/link';

export default function OfferPage() {
  return (
    <main className="legal-page">
      <div className="container">
        <Link href="/" className="back-link">← На главную</Link>
        
        <h1>Публичная оферта</h1>
        <p className="last-updated">Последнее обновление: 17 августа 2026 г.</p>

        <div className="legal-content">
          <section>
            <h2>1. Общие положения</h2>
            <p>Настоящий документ является официальной публичной офертой BAR AGENCY (далее — «Исполнитель») и адресован любому лицу, желающему воспользоваться услугами Исполнителя (далее — «Заказчик»).</p>
            <p>Акцептом (принятием) настоящей оферты считается момент оплаты услуг Исполнителя.</p>
          </section>

          <section>
            <h2>2. Предмет оферты</h2>
            <p>Исполнитель обязуется оказать услуги в сфере SMM-маркетинга, а Заказчик обязуется оплатить эти услуги в порядке и на условиях, указанных на Сайте.</p>
            <p>Перечень услуг и их стоимость указаны на странице <a href="/services">«Услуги»</a>.</p>
          </section>

          <section>
            <h2>3. Порядок заказа и оплаты</h2>
            <ul>
              <li>Заказчик оставляет заявку через форму связи на Сайте или в мессенджерах (Telegram, Instagram).</li>
              <li>Исполнитель связывается с Заказчиком для уточнения деталей и формирования индивидуального предложения.</li>
              <li>Оплата производится по реквизитам, предоставленным Исполнителем.</li>
              <li>Услуги считаются оказанными после подписания акта выполненных работ (если иное не оговорено дополнительно).</li>
            </ul>
          </section>

          <section>
            <h2>4. Стоимость услуг</h2>
            <p>Цены на услуги указаны на странице <a href="/services">«Услуги»</a>. Окончательная стоимость фиксируется в счете или коммерческом предложении.</p>
            <p>Исполнитель оставляет за собой право изменять цены без предварительного уведомления, но стоимость согласованного заказа не меняется.</p>
          </section>

          <section>
            <h2>5. Права и обязанности сторон</h2>
            <h3>Исполнитель обязуется:</h3>
            <ul>
              <li>Оказать услуги в соответствии с согласованным техническим заданием.</li>
              <li>Соблюдать конфиденциальность в отношении информации, полученной от Заказчика.</li>
            </ul>
            <h3>Заказчик обязуется:</h3>
            <ul>
              <li>Предоставить все необходимые материалы и доступы для оказания услуг.</li>
              <li>Оплатить услуги в установленный срок.</li>
            </ul>
          </section>

          <section>
            <h2>6. Ответственность сторон</h2>
            <p>Исполнитель несёт ответственность за качественное оказание услуг в соответствии с согласованным техническим заданием.</p>
            <p>Заказчик несёт ответственность за достоверность предоставленных данных и своевременную оплату.</p>
          </section>

          <section>
            <h2>7. Форс-мажор</h2>
            <p>Стороны освобождаются от ответственности за неисполнение обязательств в случае действия обстоятельств непреодолимой силы (стихийные бедствия, войны, изменения законодательства и т.п.).</p>
          </section>

          <section>
            <h2>8. Реквизиты исполнителя</h2>
            <p><strong>Самозанятый</strong></p>
            <p>ИНН: 772456452113</p>
            <p>Статус: Самозанятый</p>
            <p>Чеки выдаются через приложение «Мой налог»</p>
            <p>Контактный телефон: +7 (999) 123-45-67</p>
            <p>Email: <a href="mailto:blyashka1@gmail.com">blyashka1@gmail.com</a></p>
            <p>Telegram: <a href="https://t.me/lawayasha" target="_blank" rel="noopener noreferrer">@lawayasha</a></p>
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

        .legal-content h3 {
          font-size: 18px;
          font-weight: 500;
          color: #b0b0b0;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          margin-top: 12px;
          margin-bottom: 8px;
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

          .legal-content h3 {
            font-size: 16px;
          }
        }
      `}</style>
    </main>
  );
}