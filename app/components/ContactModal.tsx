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
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            padding: 40px 20px;
          }

          .modal {
            background: #1a1a1a;
            border: 1px solid #2a2a2a;
            border-radius: 24px;
            padding: 40px 36px 32px;
            max-width: 400px;
            width: 100%;
            position: relative;
            box-shadow: 0 30px 80px rgba(0,0,0,0.8);
            max-height: 90vh;
            overflow-y: auto;
          }

          .close-btn {
            position: absolute;
            top: 14px;
            right: 18px;
            background: none;
            border: none;
            color: #888;
            font-size: 26px;
            cursor: pointer;
            transition: color 0.2s;
            line-height: 1;
            padding: 4px;
          }

          .close-btn:hover {
            color: #fff;
          }

          h2 {
            font-size: 26px;
            font-weight: 700;
            color: #ffffff;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
            margin-bottom: 4px;
          }

          .subtitle {
            font-size: 15px;
            color: #888;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
            margin-bottom: 28px;
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
            .modal-overlay {
              padding: 20px 12px;
            }

            .modal {
              padding: 28px 18px 24px;
              border-radius: 20px;
              max-width: 100%;
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
              font-size: 22px;
              top: 10px;
              right: 14px;
            }
          }

          /* ПЛАНШЕТЫ И БОЛЬШИЕ ЭКРАНЫ */
          @media (min-width: 768px) {
            .modal {
              padding: 44px 40px 36px;
              max-width: 420px;
            }
          }
        `}</style>
      </div>
    </div>
  );
}