import React from 'react'
import StatsGrid from './StatsGrid'
import RecentActivity from './RecentActivity'

const Dashboard = ({ coffeeStats }) => {
  return (
    <div>
      <StatsGrid coffeeStats={coffeeStats} />
      <RecentActivity />
    </div>
  )
}

export default Dashboard