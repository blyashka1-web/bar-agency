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
    <div className="modal-overlay">
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
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            padding: 20px;
          }

          .modal {
            background: #1a1a1a;
            border: 1px solid #333;
            border-radius: 24px;
            padding: 36px 32px 32px;
            max-width: 420px;
            width: 100%;
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.9);
            position: relative;
            animation: fadeIn 0.25s ease;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.96);
            }
            to {
              opacity: 1;
              transform: scale(1);
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
            transition: color 0.2s;
            line-height: 1;
            padding: 4px;
          }

          .close-btn:hover {
            color: #fff;
          }

          h2 {
            font-size: 24px;
            font-weight: 700;
            color: #ffffff;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
            margin-bottom: 4px;
            padding-right: 24px;
          }

          .subtitle {
            font-size: 15px;
            color: #999;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
            margin-bottom: 24px;
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
            flex-shrink: 0;
            width: 36px;
            text-align: center;
          }

          .contact-label {
            font-size: 12px;
            font-weight: 500;
            color: #888;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
          }

          .contact-value {
            font-size: 15px;
            font-weight: 500;
            color: #fff;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
          }

          @media (max-width: 480px) {
            .modal {
              padding: 28px 20px 24px;
              border-radius: 20px;
              max-width: 95%;
            }

            h2 {
              font-size: 22px;
            }

            .subtitle {
              font-size: 14px;
              margin-bottom: 20px;
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

            .close-btn {
              font-size: 22px;
              top: 12px;
              right: 16px;
            }
          }
        `}</style>
      </div>
    </div>
  );
}