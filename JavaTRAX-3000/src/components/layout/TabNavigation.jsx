import React from 'react'

const TabNavigation = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div style={{
      background: 'rgba(160, 82, 45, 0.9)',
      padding: '0 30px',
      borderBottom: '2px solid #8B4513',
      flexShrink: 0
    }}>
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          style={{
            background: activeTab === tab.id ? '#8B4513' : 'transparent',
            color: activeTab === tab.id ? '#F5DEB3' : '#DEB887',
            border: 'none',
            padding: '12px 24px',
            margin: '0 5px',
            borderRadius: '8px 8px 0 0',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '600',
            textTransform: 'capitalize',
            transition: 'all 0.3s ease',
            boxShadow: activeTab === tab.id ? '0 -2px 10px rgba(0,0,0,0.2)' : 'none'
          }}
        >
          {tab.icon} {tab.label}
        </button>
      ))}
    </div>
  )
}

export default TabNavigation