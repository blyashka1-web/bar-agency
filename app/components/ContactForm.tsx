'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    agreement: false,
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // ВАШ ТОКЕН И ID (уже вставлены)
  const TELEGRAM_BOT_TOKEN = '8913665812:AAFzBGmD1QArtj-80dZc4RD6iCFMgDJ0SEM';
  const TELEGRAM_CHAT_ID = '905351152';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreement) {
      alert('Пожалуйста, дайте согласие на обработку персональных данных');
      return;
    }

    setStatus('sending');

    try {
      const message = `🔔 *Новая заявка с сайта BAR AGENCY!*\n\n👤 *Имя:* ${formData.name}\n📱 *Телефон:* ${formData.phone}\n📝 *Сообщение:* ${formData.message || 'Не указано'}`;

      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      });

      if (!response.ok) {
        throw new Error('Ошибка отправки');
      }

      setStatus('success');
      setFormData({ name: '', phone: '', message: '', agreement: false });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Ошибка:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Например, Александр"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Телефон или Telegram</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+7 (980) 151-14-88"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Сообщение</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Расскажите о своём проекте"
          rows={4}
        />
      </div>

      <div className="form-group checkbox-group">
        <input
          type="checkbox"
          id="agreement"
          name="agreement"
          checked={formData.agreement}
          onChange={handleChange}
          required
        />
        <label htmlFor="agreement">
          Я даю <a href="/privacy" target="_blank">согласие на обработку персональных данных</a>
        </label>
      </div>

      <button 
        type="submit" 
        className="submit-btn"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Отправка...' : 'Отправить заявку'}
      </button>

      <p className="vpn-note">Включите VPN перед отправкой</p>

      {status === 'success' && (
        <p className="status-message success">✅ Заявка отправлена! Мы свяжемся с вами в ближайшее время.</p>
      )}
      {status === 'error' && (
        <p className="status-message error">❌ Что-то пошло не так. Попробуйте ещё раз или напишите в Telegram.</p>
      )}

      <style jsx>{`
        .contact-form {
          max-width: 500px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 14px;
          font-weight: 500;
          color: #b0b0b0;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
        }

        .form-group input,
        .form-group textarea {
          padding: 12px 16px;
          background: #1a1a1a;
          border: 1px solid #2a2a2a;
          border-radius: 12px;
          color: #fff;
          font-size: 16px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          transition: border-color 0.3s;
          outline: none;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #c4b5a0;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #555;
        }

        .checkbox-group {
          flex-direction: row;
          align-items: center;
          gap: 12px;
        }

        .checkbox-group input[type="checkbox"] {
          width: 18px;
          height: 18px;
          accent-color: #c4b5a0;
          cursor: pointer;
          flex-shrink: 0;
        }

        .checkbox-group label {
          font-size: 14px;
          color: #888;
          cursor: pointer;
        }

        .checkbox-group label a {
          color: #c4b5a0;
          text-decoration: none;
          border-bottom: 1px solid rgba(196, 181, 160, 0.3);
          transition: border-color 0.2s;
        }

        .checkbox-group label a:hover {
          border-color: #c4b5a0;
        }

        .submit-btn {
          padding: 14px 32px;
          background: #c4b5a0;
          color: #121212;
          border: none;
          border-radius: 40px;
          font-size: 17px;
          font-weight: 600;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .submit-btn:hover {
          background: #d4c5b0;
          transform: scale(1.02);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .vpn-note {
          text-align: center;
          font-size: 12px;
          color: #666;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          margin-top: -8px;
          margin-bottom: 0;
        }

        .status-message {
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 15px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          text-align: center;
        }

        .status-message.success {
          background: rgba(46, 160, 67, 0.15);
          color: #2ea043;
          border: 1px solid rgba(46, 160, 67, 0.3);
        }

        .status-message.error {
          background: rgba(218, 54, 51, 0.15);
          color: #da3633;
          border: 1px solid rgba(218, 54, 51, 0.3);
        }

        @media (max-width: 480px) {
          .contact-form {
            max-width: 100%;
            padding: 0 10px;
          }
        }
      `}</style>
    </form>
  );
}