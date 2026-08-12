export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#121212',
    }}>
      <div style={{
        width: '24px',
        height: '24px',
        border: '2px solid #2a2a2a',
        borderTop: '2px solid #c4b5a0',
        borderRadius: '50%',
        animation: 'spin 0.5s linear infinite',
      }} />
      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}