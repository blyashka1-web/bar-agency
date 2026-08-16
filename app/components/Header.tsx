'use client';

import { useState } from 'react';
import ContactModal from './ContactModal';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="container header-container">
          <a href="/" className="logo">
            <span className="logo-text">BAR</span>
            <span className="logo-accent">AGENCY</span>
          </a>
          <nav className="nav">
            <a href="/" className="nav-link">Главная</a>
            <a href="/services" className="nav-link">Услуги</a>
            <a href="/cases" className="nav-link">Кейсы</a>
            <a href="/faq" className="nav-link">FAQ</a>
            <button onClick={() => setIsModalOpen(true)} className="nav-link contact-btn">
              Контакты
            </button>
          </nav>
        </div>
      </header>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <style jsx>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(18, 18, 18, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding: 14px 0;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 30px;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          text-decoration: none;
          display: flex;
          align-items: baseline;
          gap: 4px;
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 0.04em;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
        }

        .logo-text {
          color: #ffffff;
        }

        .logo-accent {
          color: #c4b5a0;
        }

        .nav {
          display: flex;
          gap: 32px;
          align-items: center;
        }

        .nav-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.02em;
          transition: color 0.3s;
          position: relative;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .nav-link:hover {
          color: #c4b5a0;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #c4b5a0;
          transition: width 0.3s;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .contact-btn {
          color: #c4b5a0;
        }

        .contact-btn:hover {
          color: #d4c5b0;
        }

        @media (max-width: 768px) {
          .logo {
            font-size: 18px;
          }
          .nav {
            gap: 16px;
          }
          .nav-link {
            font-size: 12px;
          }
          .container {
            padding: 0 16px;
          }
        }
      `}</style>
    </>
  );
}