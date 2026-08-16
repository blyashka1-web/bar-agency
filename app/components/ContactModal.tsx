'use client';

import { useEffect, useRef } from 'react';

export default function ContactModal({ isOpen, onClose }) {
  const modalRef = useRef(null);

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
    <>
      {/* Затемнение */}
      <div className="backdrop" onClick={onClose} />

      {/* Модальное окно */}
      <div className="modal-wrapper">
        <div className="modal" ref={modalRef}>
          <button className="close-btn" onClick={onClose}>✕</button>

          <h2>Свяжитесь с нами</h2>
          <p className="subtitle">Мы на связи — пишите в любой мессенджер</p>

          <div className="contacts">
            <a href="https://t.me/lawayasha" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-icon">📲</div>
              <div>
                <div className="contact-label">Telegram</div>
                <div className="contact-value">@lawayasha</div>
              </div>
            </a>

            <a href="https://instagram.com/agency_bar" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-icon">📸</div>
              <div>
                <div className="contact-label">Instagram</div>
                <div className="contact-value">@agency_bar</div>
              </div>
            </a>
          </div>

          <style jsx>{`
            .backdrop {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: rgba(0, 0, 0, 0.7);
              backdrop-filter: blur(6px);
              -webkit-backdrop-filter: blur(6px);
              z-index: 9998;
              animation: fadeIn 0.25s ease;
            }

            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }

            .modal-wrapper {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 9999;
              pointer-events: none;
              padding: 20px;
            }

            .modal {
              background: #1a1a1a;
              border: 1px solid #444;
              border-radius: 24px;
              padding: 32px 28px 28px;
              max-width: 420px;
              width: 100%;
              box-shadow: 0 30px 80px rgba(0, 0, 0, 0.9);
              pointer-events: auto;
              animation: slideUp 0.3s ease;
            }

            @keyframes slideUp {
              from {
                opacity: 0;
                transform: translateY(30px) scale(0.96);
              }
              to {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }

            .close-btn {
              position: absolute;
              top: 14px;
              right: 18px;
              background: none;
              border: none;
              color: #888;
              font-size: 24px;
              cursor: pointer;
              padding: 4px;
              line-height: 1;
              transition: color 0.2s;
            }

            .close-btn:hover {
              color: #fff;
            }

            h2 {
              font-size: 24px;
              font-weight: 700;
              color: #fff;
              margin-bottom: 4px;
              padding-right: 24px;
              font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
            }

            .subtitle {
              font-size: 15px;
              color: #999;
              margin-bottom: 24px;
              font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
            }

            .contacts {
              display: flex;
              flex-direction: column;
              gap: 10px;
            }

            .contact-item {
              display: flex;
              align-items: center;
              gap: 14px;
              padding: 14px 18px;
              background: #252525;
              border-radius: 14px;
              border: 1px solid #333;
              text-decoration: none;
              color: #fff;
              transition: all 0.25s ease;
            }

            .contact-item:hover {
              border-color: #c4b5a0;
              background: #2a2a2a;
              transform: translateX(4px);
            }

            .contact-icon {
              font-size: 26px;
              width: 36px;
              text-align: center;
            }

            .contact-label {
              font-size: 12px;
              font-weight: 500;
              color: #888;
              font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
            }

            .contact-value {
              font-size: 15px;
              font-weight: 500;
              color: #fff;
              font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
            }

            @media (max-width: 480px) {
              .modal {
                padding: 24px 18px 20px;
                border-radius: 20px;
              }

              h2 {
                font-size: 20px;
              }

              .subtitle {
                font-size: 14px;
              }

              .contact-item {
                padding: 12px 14px;
              }

              .contact-icon {
                font-size: 22px;
                width: 32px;
              }

              .contact-value {
                font-size: 14px;
              }
            }
          `}</style>
        </div>
      </div>
    </>
  );
}