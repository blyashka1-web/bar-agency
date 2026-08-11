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
      icon: '✈️',
      url: 'https://t.me/lawayasha',
      username: '@lawayasha',
      color: '#0088cc',
    },
    {
      name: 'Instagram',
      icon: '📸',
      url: 'https://www.instagram.com/agency_bar?igsh=MTRlZDB6cmFqdXh1bw==',
      username: '@agency_bar',
      color: '#E4405F',
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
            📧 blyashka1@gmail.com
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
          font-size: 28px;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.04);
          border-radius: 12px;
          flex-shrink: 0;
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
          display: inline-block;
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
            font-size: 24px;
            width: 38px;
            height: 38px;
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