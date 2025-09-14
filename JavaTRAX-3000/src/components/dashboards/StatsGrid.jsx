import React from 'react'
import StatCard from './StatCard'

const StatsGrid = ({ coffeeStats }) => {
  const stats = [
    { title: 'Total Customers', value: coffeeStats.totalCustomers, icon: '👥', color: '#8B4513' },
    { title: 'Active Deals', value: coffeeStats.activeDeals, icon: '⚡', color: '#D2691E' },
    { title: 'Monthly Revenue', value: coffeeStats.monthlyRevenue, icon: '💰', color: '#CD853F' },
    { title: 'Caffeine Level', value: `${coffeeStats.caffeineLevel}%`, icon: '☕', color: '#A0522D' }
  ]

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px',
      marginBottom: '25px',
      height: 'fit-content'
    }}>
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  )
}

export default StatsGrid