import React from 'react'

const CaffeineAnimation = () => {
  return (
    <div style={{
      position: 'relative',
      width: '60px',
      height: '60px'
    }}>
      <div style={{
        position: 'absolute',
        width: '8px',
        height: '8px',
        background: '#FF6B35',
        borderRadius: '50%',
        animation: 'float 2s ease-in-out infinite',
        top: '10px',
        left: '10px'
      }}></div>
      <div style={{
        position: 'absolute',
        width: '6px',
        height: '6px',
        background: '#4ECDC4',
        borderRadius: '50%',
        animation: 'float 2s ease-in-out infinite 0.3s',
        top: '20px',
        right: '15px'
      }}></div>
      <div style={{
        position: 'absolute',
        width: '10px',
        height: '10px',
        background: '#45B7D1',
        borderRadius: '50%',
        animation: 'float 2s ease-in-out infinite 0.6s',
        bottom: '10px',
        left: '20px'
      }}></div>
    </div>
  )
}

export default CaffeineAnimation