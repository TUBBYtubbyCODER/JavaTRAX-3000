import React, { useState } from 'react'
import OrderGenerator from './components/OrderGenerator'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [customers] = useState([
    { id: 1, name: 'Espresso Enterprises', contact: 'John Brew', status: 'Active', value: '$2,500' },
    { id: 2, name: 'Latte Labs', contact: 'Sarah Bean', status: 'Pending', value: '$1,800' },
    { id: 3, name: 'Mocha Motors', contact: 'Mike Grind', status: 'Active', value: '$3,200' },
    { id: 4, name: 'Cappuccino Corp', contact: 'Emma Roast', status: 'Closed', value: '$950' }
  ])

  const coffeeStats = {
    totalCustomers: 247,
    activeDeals: 18,
    monthlyRevenue: '$47,350',
    caffeineLevel: 89
  }

  return (
    <div style={{
      minHeight: '100vh',
      height: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #8B4513 0%, #D2691E 25%, #CD853F 50%, #F4A460 75%, #DEB887 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Navigation Header */}
      <nav style={{
        background: 'rgba(139, 69, 19, 0.98)',
        backdropFilter: 'blur(15px)',
        padding: '15px 30px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        borderBottom: '3px solid #8B4513',
        flexShrink: 0
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%'
        }}>
          <h1 style={{
            color: '#F5DEB3',
            fontSize: '2.2rem',
            margin: 0,
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            ☕ JavaTRAX - Your FULLY Caffeinated CRM
            <span style={{
              fontSize: '1rem',
              background: '#FF6B35',
              padding: '4px 8px',
              borderRadius: '12px',
              color: 'white'
            }}>
              CAFFEINATED
            </span>
          </h1>
          
          {/* Caffeine Molecule Animation */}
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
        </div>
      </nav>

      {/* Tab Navigation - UPDATED to include orders tab */}
      <div style={{
        background: 'rgba(160, 82, 45, 0.9)',
        padding: '0 30px',
        borderBottom: '2px solid #8B4513',
        flexShrink: 0
      }}>
        {['dashboard', 'customers', 'orders', 'deals', 'analytics'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              background: activeTab === tab ? '#8B4513' : 'transparent',
              color: activeTab === tab ? '#F5DEB3' : '#DEB887',
              border: 'none',
              padding: '12px 24px',
              margin: '0 5px',
              borderRadius: '8px 8px 0 0',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600',
              textTransform: 'capitalize',
              transition: 'all 0.3s ease',
              boxShadow: activeTab === tab ? '0 -2px 10px rgba(0,0,0,0.2)' : 'none'
            }}
          >
            {tab === 'dashboard' && '📊'} 
            {tab === 'customers' && '👥'} 
            {tab === 'orders' && '📋'} 
            {tab === 'deals' && '💰'} 
            {tab === 'analytics' && '📈'} 
            {tab}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        padding: activeTab === 'orders' ? '0' : '20px 30px', // Remove padding for orders tab
        overflowY: 'auto',
        overflowX: 'hidden'
      }}>
        
        {activeTab === 'dashboard' && (
          <div>
            {/* Stats Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
              marginBottom: '25px',
              height: 'fit-content'
            }}>
              {[
                { title: 'Total Customers', value: coffeeStats.totalCustomers, icon: '👥', color: '#8B4513' },
                { title: 'Active Deals', value: coffeeStats.activeDeals, icon: '⚡', color: '#D2691E' },
                { title: 'Monthly Revenue', value: coffeeStats.monthlyRevenue, icon: '💰', color: '#CD853F' },
                { title: 'Caffeine Level', value: `${coffeeStats.caffeineLevel}%`, icon: '☕', color: '#A0522D' }
              ].map((stat, index) => (
                <div key={index} style={{
                  background: 'rgba(245, 222, 179, 0.95)',
                  backdropFilter: 'blur(10px)',
                  padding: '25px',
                  borderRadius: '15px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                  border: `3px solid ${stat.color}`,
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
                    {stat.icon}
                  </div>
                  <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{stat.icon}</div>
                  <h3 style={{ 
                    color: stat.color, 
                    margin: '10px 0 5px 0',
                    fontSize: '2rem',
                    fontWeight: 'bold'
                  }}>
                    {stat.value}
                  </h3>
                  <p style={{ 
                    color: '#8B4513', 
                    margin: 0,
                    fontSize: '1.1rem',
                    fontWeight: '500'
                  }}>
                    {stat.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
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
                {[
                  '☕ New customer "Drip Drop Cafe" added',
                  '💰 Deal with Espresso Enterprises closed - $2,500',
                  '📞 Follow-up call scheduled with Latte Labs',
                  '🎯 Monthly target 73% complete'
                ].map((activity, index) => (
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
          </div>
        )}

        {activeTab === 'customers' && (
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
                          background: customer.status === 'Active' ? '#10B981' : 
                                     customer.status === 'Pending' ? '#F59E0B' : '#EF4444',
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
          </div>
        )}

        {/* NEW ORDERS TAB - This renders the OrderGenerator component */}
        {activeTab === 'orders' && (
          <OrderGenerator />
        )}

        {(activeTab === 'deals' || activeTab === 'analytics') && (
          <div style={{
            background: 'rgba(245, 222, 179, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '15px',
            padding: '40px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
            border: '3px solid #8B4513',
            textAlign: 'center',
            height: 'calc(100vh - 160px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>
              {activeTab === 'deals' ? '💰' : '📊'}
            </div>
            <h3 style={{
              color: '#8B4513',
              fontSize: '2rem',
              marginBottom: '15px'
            }}>
              {activeTab === 'deals' ? 'Deal Pipeline' : 'Advanced Analytics'}
            </h3>
            <p style={{ 
              color: '#A0522D', 
              fontSize: '1.2rem',
              marginBottom: '20px'
            }}>
              ☕ This feature is brewing... Check back soon! ☕
            </p>
            <div style={{
              display: 'inline-block',
              padding: '10px 20px',
              background: '#D2691E',
              color: 'white',
              borderRadius: '25px',
              fontSize: '1rem'
            }}>
              🚧 Under Development
            </div>
          </div>
        )}
      </div>

      {/* Floating Coffee Beans */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: 'flex',
        gap: '10px'
      }}>
        {['☕', '🫘', '☕'].map((bean, index) => (
          <div key={index} style={{
            fontSize: '2rem',
            animation: `float 3s ease-in-out infinite ${index * 0.5}s`,
            opacity: 0.7
          }}>
            {bean}
          </div>
        ))}
      </div>

      {/* CSS Animation Styles */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
        
        #root {
          width: 100vw;
          height: 100vh;
          margin: 0;
          padding: 0;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        table tbody tr:hover {
          background-color: rgba(139, 69, 19, 0.1) !important;
        }
        
        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  )
}

export default App