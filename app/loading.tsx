'use client';

export default function Loader({ size = 44, text = 'Загрузка...' }: { size?: number; text?: string }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif',
    }}>
      <div style={{
        width: size,
        height: size,
        border: '3px solid #2a2a2a',
        borderTop: '3px solid #c4b5a0',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }} />
      {text && (
        <p style={{
          color: '#b0b0b0',
          fontSize: '15px',
          fontWeight: 400,
          margin: 0,
        }}>
          {text}
        </p>
      )}
      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}