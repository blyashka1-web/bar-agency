'use client';

import { useEffect, useRef } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

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

  const contacts = [
    {
      name: 'Telegram',
      url: 'https://t.me/lawayasha',
      username: '@lawayasha',
      color: '#0088cc',
      icon: (
        <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/agency_bar',
      username: '@agency_bar',
      color: '#E4405F',
      icon: (
        <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="modal-overlay">
      <div className="modal" ref={modalRef}>
        <button className="close-btn" onClick={onClose}>✕</button>
        <div className="modal-content">
          <h2>Свяжитесь с нами</h2>
          <p className="modal-subtitle">
            Мы на связи — пишите в любой мессенджер
          </p>

          <div className="contacts-grid">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
                style={{ '--accent': contact.color } as React.CSSProperties}
              >
                <span className="contact-icon">{contact.icon}</span>
                <div className="contact-info">
                  <span className="contact-name">{contact.name}</span>
                  <span className="contact-username">{contact.username}</span>
                </div>
                <span className="contact-arrow">→</span>
              </a>
            ))}
          </div>

          <div className="divider">
            <span>или</span>
          </div>

          <a href="mailto:blyashka1@gmail.com" className="email-link-big">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }}>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            blyashka1@gmail.com
          </a>
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
          max-width: 480px;
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
          text-align: center;
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
          margin-bottom: 32px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
        }

        .contacts-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .contact-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          background: #121212;
          border-radius: 16px;
          border: 1px solid #2a2a2a;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .contact-card:hover {
          transform: translateX(4px);
          border-color: var(--accent);
          box-shadow: 0 0 20px rgba(255,255,255,0.03);
        }

        .contact-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.04);
          border-radius: 12px;
          flex-shrink: 0;
        }

        .contact-icon svg {
          width: 28px;
          height: 28px;
          fill: white;
        }

        .contact-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 2px;
        }

        .contact-name {
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
        }

        .contact-username {
          font-size: 14px;
          color: #6e6e6e;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
        }

        .contact-arrow {
          color: #6e6e6e;
          font-size: 18px;
          transition: 0.2s;
        }

        .contact-card:hover .contact-arrow {
          color: #ffffff;
          transform: translateX(4px);
        }

        .divider {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 20px 0 16px;
        }

        .divider span {
          color: #4a4a4a;
          font-size: 13px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
          padding: 0 16px;
          background: #1a1a1a;
        }

        .email-link-big {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #c4b5a0;
          font-size: 18px;
          font-weight: 500;
          text-decoration: none;
          padding: 12px 24px;
          border: 1px solid #2a2a2a;
          border-radius: 40px;
          transition: all 0.3s ease;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
        }

        .email-link-big:hover {
          border-color: #c4b5a0;
          background: rgba(196, 181, 160, 0.06);
          transform: scale(1.02);
        }

        .email-link-big svg {
          stroke: #c4b5a0;
        }

        @media (max-width: 768px) {
          .modal {
            padding: 32px 24px;
            width: 95%;
          }

          .modal-content h2 {
            font-size: 26px;
          }

          .contact-card {
            padding: 14px 16px;
          }

          .contact-icon {
            width: 38px;
            height: 38px;
          }

          .contact-icon svg {
            width: 24px;
            height: 24px;
          }

          .contact-name {
            font-size: 15px;
          }

          .email-link-big {
            font-size: 16px;
            padding: 10px 20px;
          }
        }
      `}</style>
    </div>
  );
}