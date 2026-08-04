export default function Home() {
  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '60px', margin: '0' }}>🚀 Мой первый сайт!</h1>
      <p style={{ fontSize: '24px', color: '#666' }}>Создан на Next.js</p>
      <p style={{ fontSize: '18px', color: '#888', marginTop: '20px' }}>
        Работает на MacBook Air M4
      </p>
    </main>
  );
}