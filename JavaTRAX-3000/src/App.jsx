import React from 'react'

function App() {
  return (
    <div style={{ 
      padding: '40px', 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <h1 style={{ 
        color: '#2563eb',
        fontSize: '3rem',
        marginBottom: '20px'
      }}>
        🚀 JavaTRAX-3000
      </h1>
      
      <p style={{ 
        fontSize: '1.2rem',
        color: '#374151',
        marginBottom: '30px'
      }}>
        Welcome to your React application! ROOUH!!
      </p>
      
      <div style={{
        padding: '20px',
        backgroundColor: '#10b981',
        color: 'white',
        borderRadius: '8px',
        fontSize: '1.1rem'
      }}>
        🎉 Successfully deployed on Netlify!
      </div>
      
      <p style={{ 
        marginTop: '30px',
        color: '#6b7280'
      }}>
        Build completed at: {new Date().toLocaleString()}
      </p>
    </div>
  )
}

export default App