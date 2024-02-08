import { Helmet } from 'react-helmet-async'

import { MonthOrdersAmountCard } from './day-orders-amount-card'
import { MonthCancelledOrdersAmountCard } from './month-cancelled-orders-amount-card'
import { DayOrdersAmountCard } from './month-orders-amount-card'
import { MonthRenevueCard } from './month-revenue-card'
import { PopularProductsChart } from './popular-products-chart'
import { RevenueChart } from './revenue-charts'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRenevueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCancelledOrdersAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}