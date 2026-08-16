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
    <div className="modal-wrapper">
      <div className="modal" ref={modalRef}>
        <button className="close-btn" onClick={onClose}>✕</button>

        <h2>Свяжитесь с нами</h2>
        <p className="subtitle">Мы на связи — пишите в любой мессенджер</p>

        <div className="contacts">
          <a href="https://t.me/lawayasha" target="_blank" rel="noopener noreferrer" className="contact-item">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#c4b5a0" className="icon-svg">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </div>
            <div>
              <div className="contact-label">Telegram</div>
              <div className="contact-value">@lawayasha</div>
            </div>
          </a>

          <a href="https://instagram.com/agency_bar" target="_blank" rel="noopener noreferrer" className="contact-item">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#c4b5a0" className="icon-svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </div>
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
            border: 1px solid #333;
            border-radius: 20px;
            padding: 28px 24px 24px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.9);
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
            color: #999;
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
            background: #252525;
            border-radius: 12px;
            border: 1px solid #333;
            text-decoration: none;
            color: #fff;
            transition: all 0.25s ease;
          }

          .contact-item:hover {
            border-color: #c4b5a0;
            background: #2a2a2a;
          }

          .contact-icon {
            width: 28px;
            height: 28px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .icon-svg {
            width: 100%;
            height: 100%;
            transition: transform 0.2s ease, fill 0.2s ease;
          }

          .contact-item:hover .icon-svg {
            transform: scale(1.1);
            fill: #d4c5b0;
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
              gap: 12px;
            }

            .contact-icon {
              width: 24px;
              height: 24px;
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