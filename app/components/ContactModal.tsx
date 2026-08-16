'use client';

import { useEffect, useRef } from 'react';

export default function ContactModal({ isOpen, onClose }) {
  const modalRef = useRef(null);

  // Закрытие по клику вне модалки
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-wrapper">
      <div className="modal" ref={modalRef}>
        <button className="close-btn" onClick={onClose}>✕</button>

        <h2>Свяжитесь с нами</h2>
        <p className="subtitle">Мы на связи — пишите в любой мессенджер</p>

        <div className="contacts">
          <a href="https://t.me/lawayasha" target="_blank" rel="noopener noreferrer" className="contact-item">
            <span className="contact-icon">📲</span>
            <div>
              <div className="contact-label">Telegram</div>
              <div className="contact-value">@lawayasha</div>
            </div>
          </a>

          <a href="https://instagram.com/agency_bar" target="_blank" rel="noopener noreferrer" className="contact-item">
            <span className="contact-icon">📸</span>
            <div>
              <div className="contact-label">Instagram</div>
              <div className="contact-value">@agency_bar</div>
            </div>
          </a>
        </div>

        <style jsx>{`
          .modal-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 9998;
            pointer-events: none;
          }

          .modal {
            position: absolute;
            top: 68px;
            right: 20px;
            width: 340px;
            max-width: calc(100vw - 40px);
            background: #1a1a1a;
            border: 1px solid #2a2a2a;
            border-radius: 20px;
            padding: 28px 24px 24px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.8);
            pointer-events: auto;
            animation: slideDown 0.25s ease;
            transform-origin: top right;
          }

          @keyframes slideDown {
            from {
              opacity: 0;
              transform: scale(0.95) translateY(-10px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          .close-btn {
            position: absolute;
            top: 12px;
            right: 16px;
            background: none;
            border: none;
            color: #888;
            font-size: 22px;
            cursor: pointer;
            transition: color 0.2s;
            padding: 4px;
            line-height: 1;
          }

          .close-btn:hover {
            color: #fff;
          }

          h2 {
            font-size: 22px;
            font-weight: 700;
            color: #ffffff;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
            margin-bottom: 4px;
            padding-right: 24px;
          }

          .subtitle {
            font-size: 14px;
            color: #888;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
            margin-bottom: 20px;
          }

          .contacts {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .contact-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 16px;
            background: #2a2a2a;
            border-radius: 12px;
            border: 1px solid #2a2a2a;
            text-decoration: none;
            color: #fff;
            transition: all 0.25s ease;
          }

          .contact-item:hover {
            border-color: #c4b5a0;
            background: #333;
          }

          .contact-icon {
            font-size: 22px;
            flex-shrink: 0;
            width: 32px;
            text-align: center;
          }

          .contact-label {
            font-size: 11px;
            font-weight: 500;
            color: #888;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
          }

          .contact-value {
            font-size: 14px;
            font-weight: 500;
            color: #fff;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
          }

          /* МОБИЛЬНЫЕ УСТРОЙСТВА */
          @media (max-width: 480px) {
            .modal {
              top: 60px;
              right: 12px;
              left: 12px;
              width: auto;
              max-width: none;
              padding: 24px 18px 20px;
              border-radius: 16px;
            }

            h2 {
              font-size: 20px;
            }

            .subtitle {
              font-size: 13px;
              margin-bottom: 16px;
            }

            .contact-item {
              padding: 10px 14px;
            }

            .contact-icon {
              font-size: 20px;
              width: 28px;
            }

            .contact-value {
              font-size: 13px;
            }

            .close-btn {
              font-size: 20px;
              top: 10px;
              right: 14px;
            }
          }

          /* ПЛАНШЕТЫ */
          @media (min-width: 768px) {
            .modal {
              top: 76px;
              right: 30px;
              width: 380px;
              padding: 32px 28px 28px;
            }
          }
        `}</style>
      </div>
    </div>
  );
}