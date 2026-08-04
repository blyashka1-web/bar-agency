'use client';

import { useEffect, useRef } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Закрытие по клику вне модалки
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  // Закрытие по Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal" ref={modalRef}>
        <button className="close-btn" onClick={onClose}>✕</button>
        <div className="modal-content">
          <h2>Свяжитесь с нами</h2>
          <p className="modal-subtitle">
            Обсудим ваш проект за 15 минут
          </p>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Имя</label>
              <input type="text" id="name" placeholder="Алексей" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="alex@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Сообщение</label>
              <textarea id="message" rows={4} placeholder="Расскажите о своём проекте..." required />
            </div>
            <button type="submit" className="submit-btn">Отправить</button>
          </form>
          <p className="footer-text">
            Или напишите нам напрямую:{' '}
            <a href="mailto:hello@bar-agency.ru" className="email-link">
              hello@bar-agency.ru
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .modal {
          background: #1a1a1a;
          border-radius: 32px;
          padding: 48px;
          max-width: 520px;
          width: 90%;
          border: 1px solid #2a2a2a;
          position: relative;
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          max-height: 90vh;
          overflow-y: auto;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .close-btn {
          position: absolute;
          top: 16px;
          right: 20px;
          background: none;
          border: none;
          color: #b0b0b0;
          font-size: 24px;
          cursor: pointer;
          transition: color 0.2s;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          padding: 4px 8px;
          border-radius: 8px;
        }

        .close-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.06);
        }

        .modal-content {
          text-align: left;
        }

        .modal-content h2 {
          font-size: 32px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 4px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
          letter-spacing: -0.02em;
        }

        .modal-subtitle {
          color: #b0b0b0;
          font-size: 16px;
          margin-bottom: 28px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 13px;
          font-weight: 600;
          color: #b0b0b0;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
        }

        .form-group input,
        .form-group textarea {
          background: #121212;
          border: 1px solid #2a2a2a;
          border-radius: 12px;
          padding: 14px 16px;
          font-size: 16px;
          color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
          transition: border-color 0.2s;
          outline: none;
          width: 100%;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #c4b5a0;
          box-shadow: 0 0 0 3px rgba(196, 181, 160, 0.1);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #555;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 80px;
        }

        .submit-btn {
          background: #7a2e2a;
          color: #ffffff;
          padding: 16px 32px;
          border: none;
          border-radius: 40px;
          font-size: 17px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          margin-top: 8px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
          box-shadow: 0 4px 20px rgba(122, 46, 42, 0.3);
        }

        .submit-btn:hover {
          background: #5a2220;
          transform: scale(1.02);
          box-shadow: 0 6px 30px rgba(122, 46, 42, 0.4);
        }

        .footer-text {
          margin-top: 24px;
          font-size: 14px;
          color: #6e6e6e;
          text-align: center;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
        }

        .email-link {
          color: #c4b5a0;
          text-decoration: none;
          transition: color 0.2s;
          font-weight: 500;
        }

        .email-link:hover {
          color: #d4c5b0;
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .modal {
            padding: 32px 24px;
            width: 95%;
          }

          .modal-content h2 {
            font-size: 26px;
          }

          .form-group input,
          .form-group textarea {
            font-size: 15px;
            padding: 12px 14px;
          }

          .submit-btn {
            font-size: 15px;
            padding: 14px 24px;
          }
        }
      `}</style>
    </div>
  );
}