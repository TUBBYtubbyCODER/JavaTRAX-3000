import React, { useState } from 'react'
import Navigation from './components/Navigation'
import TabNavigation from './components/TabNavigation'
import Dashboard from './components/Dashboard'
import Customers from './components/Customers'
import OrderGenerator from './components/OrderGenerator'
import UnderDevelopment from './components/UnderDevelopment'
import FloatingElements from './components/FloatingElements'
import GlobalStyles from './components/GlobalStyles'

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

  const tabs = [
    { id: 'dashboard', icon: '📊', label: 'dashboard' },
    { id: 'customers', icon: '👥', label: 'customers' },
    { id: 'orders', icon: '📋', label: 'orders' },
    { id: 'deals', icon: '💰', label: 'deals' },
    { id: 'analytics', icon: '📈', label: 'analytics' }
  ]

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard coffeeStats={coffeeStats} />
      case 'customers':
        return <Customers customers={customers} />
      case 'orders':
        return <OrderGenerator />
      case 'deals':
        return <UnderDevelopment type="deals" />
      case 'analytics':
        return <UnderDevelopment type="analytics" />
      default:
        return <Dashboard coffeeStats={coffeeStats} />
    }
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
      <Navigation />
      <TabNavigation 
        tabs={tabs} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      
      <div style={{
        flex: 1,
        padding: activeTab === 'orders' ? '0' : '20px 30px',
        overflowY: 'auto',
        overflowX: 'hidden'
      }}>
        {renderActiveTabContent()}
      </div>

      <FloatingElements />
      <GlobalStyles />
    </div>
  )
}

export default App