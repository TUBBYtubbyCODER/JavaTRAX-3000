import React from 'react'

const FloatingElements = () => {
  const elements = ['☕', '🫘', '☕']

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      display: 'flex',
      gap: '10px'
    }}>
      {elements.map((element, index) => (
        <div key={index} style={{
          fontSize: '2rem',
          animation: `float 3s ease-in-out infinite ${index * 0.5}s`,
          opacity: 0.7
        }}>
          {element}
        </div>
      ))}
    </div>
  )
}

export default FloatingElements