import React from 'react'

const CustomerTable = ({ customers }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return '#10B981'
      case 'Pending':
        return '#F59E0B'
      case 'Closed':
        return '#EF4444'
      default:
        return '#6B7280'
    }
  }

  return (
    <div style={{ overflowY: 'auto', flex: 1 }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: 'rgba(139, 69, 19, 0.2)' }}>
            {['Company', 'Contact', 'Status', 'Value'].map(header => (
              <th key={header} style={{
                padding: '15px',
                textAlign: 'left',
                color: '#8B4513',
                fontWeight: 'bold',
                fontSize: '1.1rem'
              }}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id} style={{ 
              borderBottom: '1px solid rgba(139, 69, 19, 0.2)',
              transition: 'background-color 0.3s ease'
            }}>
              <td style={{ padding: '15px', color: '#8B4513', fontSize: '1rem' }}>
                ☕ {customer.name}
              </td>
              <td style={{ padding: '15px', color: '#A0522D' }}>{customer.contact}</td>
              <td style={{ padding: '15px' }}>
                <span style={{
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  background: getStatusColor(customer.status),
                  color: 'white'
                }}>
                  {customer.status}
                </span>
              </td>
              <td style={{ 
                padding: '15px', 
                color: '#8B4513', 
                fontWeight: 'bold',
                fontSize: '1.1rem'
              }}>
                {customer.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CustomerTable