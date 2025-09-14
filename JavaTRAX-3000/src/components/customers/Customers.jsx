import React from 'react'
import CustomerTable from './CustomerTable'

const Customers = ({ customers }) => {
  return (
    <div style={{
      background: 'rgba(245, 222, 179, 0.95)',
      backdropFilter: 'blur(10px)',
      borderRadius: '15px',
      padding: '25px',
      boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
      border: '3px solid #8B4513',
      height: 'calc(100vh - 160px)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <h3 style={{
        color: '#8B4513',
        fontSize: '1.8rem',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        👥 Customer Database (Brew Roster)
      </h3>
      <CustomerTable customers={customers} />
    </div>
  )
}

export default Customers