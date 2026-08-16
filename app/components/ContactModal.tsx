'use client';

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
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
            background: rgba(0, 0, 0, 0.6);
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

          @keyframes slideUp {
            from {
              transform: translateY(100%);
            }
            to {
              transform: translateY(0);
            }
          }

          .modal {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: #1a1a1a;
            border-radius: 24px 24px 0 0;
            padding: 16px 24px 32px;
            z-index: 9999;
            max-width: 500px;
            margin: 0 auto;
            box-shadow: 0 -10px 40px rgba(0,0,0,0.5);
            animation: slideUp 0.35s ease;
          }

          .modal-handle {
            width: 40px;
            height: 4px;
            background: #444;
            border-radius: 4px;
            margin: 0 auto 16px;
          }

          .close-btn {
            position: absolute;
            top: 16px;
            right: 20px;
            background: none;
            border: none;
            color: #888;
            font-size: 24px;
            cursor: pointer;
            transition: color 0.2s;
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
            margin-top: 4px;
          }

          .subtitle {
            font-size: 15px;
            color: #888;
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
            background: #2a2a2a;
            border-radius: 14px;
            border: 1px solid #2a2a2a;
            text-decoration: none;
            color: #fff;
            transition: all 0.3s ease;
          }

          .contact-item:hover {
            border-color: #c4b5a0;
            background: #333;
            transform: translateX(4px);
          }

          .contact-icon {
            font-size: 24px;
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

          /* ТЕЛЕФОНЫ */
          @media (max-width: 480px) {
            .modal {
              padding: 14px 16px 24px;
              border-radius: 20px 20px 0 0;
            }

            .modal-handle {
              width: 36px;
              height: 4px;
              margin-bottom: 12px;
            }

            h2 {
              font-size: 20px;
            }

            .subtitle {
              font-size: 14px;
              margin-bottom: 18px;
            }

            .contact-item {
              padding: 12px 14px;
              gap: 12px;
            }

            .contact-icon {
              font-size: 20px;
              width: 32px;
            }

            .contact-value {
              font-size: 14px;
            }

            .close-btn {
              font-size: 20px;
              top: 12px;
              right: 16px;
            }
          }

          /* ПЛАНШЕТЫ И БОЛЬШИЕ ЭКРАНЫ */
          @media (min-width: 768px) {
            .modal {
              border-radius: 28px 28px 0 0;
              padding: 20px 32px 36px;
              max-width: 480px;
            }

            .modal-handle {
              display: none;
            }
          }
        `}</style>
      </div>
    </div>
  );
}