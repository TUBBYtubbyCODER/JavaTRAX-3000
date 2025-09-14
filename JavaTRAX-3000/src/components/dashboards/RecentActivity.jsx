import React from 'react'

const RecentActivity = () => {
  const activities = [
    '☕ Tubby is BREWIN\' UP',
    '💰 Deal with gregisimo is due in 2 weeks.',
    '🎯 Monthly target: Complete This'
  ]

  return (
    <div style={{
      background: 'rgba(245, 222, 179, 0.95)',
      backdropFilter: 'blur(10px)',
      borderRadius: '15px',
      padding: '25px',
      boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
      border: '3px solid #8B4513',
      flex: 1,
      minHeight: 0
    }}>
      <h3 style={{
        color: '#8B4513',
        fontSize: '1.8rem',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        📈 Recent Brewing Activity
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {activities.map((activity, index) => (
          <div key={index} style={{
            padding: '15px',
            background: 'rgba(139, 69, 19, 0.1)',
            borderRadius: '10px',
            borderLeft: '4px solid #D2691E',
            fontSize: '1.1rem',
            color: '#8B4513'
          }}>
            {activity}
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentActivity