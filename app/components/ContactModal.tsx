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
          <a href="https://t.me/bar_agency_smm_bot" target="_blank" rel="noopener noreferrer" className="contact-item">
            <span className="contact-icon">📲</span>
            <div>
              <div className="contact-label">Telegram</div>
              <div className="contact-value">@bar_agency_smm_bot</div>
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
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(12px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            padding: 20px;
          }

          .modal {
            background: #1a1a1a;
            border: 1px solid #2a2a2a;
            border-radius: 28px;
            padding: 48px 40px 40px;
            max-width: 480px;
            width: 100%;
            position: relative;
            box-shadow: 0 20px 60px rgba(0,0,0,0.6);
            max-height: 90vh;
            overflow-y: auto;
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
          }

          .close-btn:hover {
            color: #fff;
          }

          h2 {
            font-size: 28px;
            font-weight: 700;
            color: #ffffff;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
            margin-bottom: 4px;
          }

          .subtitle {
            font-size: 16px;
            color: #888;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
            margin-bottom: 32px;
          }

          .contacts {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .contact-item {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 16px 20px;
            background: #2a2a2a;
            border-radius: 16px;
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
            font-size: 28px;
            flex-shrink: 0;
          }

          .contact-label {
            font-size: 13px;
            font-weight: 500;
            color: #888;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
          }

          .contact-value {
            font-size: 16px;
            font-weight: 500;
            color: #fff;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
          }

          @media (max-width: 480px) {
            .modal {
              padding: 32px 20px 28px;
              max-width: 95%;
              border-radius: 20px;
            }

            h2 {
              font-size: 24px;
            }

            .contact-item {
              padding: 14px 16px;
            }

            .contact-icon {
              font-size: 24px;
            }

            .contact-value {
              font-size: 14px;
            }
          }
        `}</style>
      </div>
    </div>
  );
}