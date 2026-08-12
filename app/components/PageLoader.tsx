'use client';

import { useEffect, useState } from 'react';

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: '#121212',
        gap: '16px',
        flexDirection: 'column',
      }}>
        <div style={{
          width: '32px',
          height: '32px',
          border: '3px solid #2a2a2a',
          borderTop: '3px solid #c4b5a0',
          borderRadius: '50%',
          animation: 'spin 0.6s linear infinite',
        }} />
        <style jsx>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return <>{children}</>;
}