import React from 'react'

const StatCard = ({ title, value, icon, color }) => {
  return (
    <div style={{
      background: 'rgba(245, 222, 179, 0.95)',
      backdropFilter: 'blur(10px)',
      padding: '25px',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
      border: `3px solid ${color}`,
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '-20px',
        right: '-20px',
        fontSize: '4rem',
        opacity: 0.1,
        transform: 'rotate(15deg)'
      }}>
        {icon}
      </div>
      <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{icon}</div>
      <h3 style={{ 
        color: color, 
        margin: '10px 0 5px 0',
        fontSize: '2rem',
        fontWeight: 'bold'
      }}>
        {value}
      </h3>
      <p style={{ 
        color: '#8B4513', 
        margin: 0,
        fontSize: '1.1rem',
        fontWeight: '500'
      }}>
        {title}
      </p>
    </div>
  )
}

export default StatCard