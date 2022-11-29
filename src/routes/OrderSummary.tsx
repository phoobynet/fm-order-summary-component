import styles from './OrderSummary.module.scss'
import OrderSummaryCard from '@/components/OrderSummaryCard'

export default function OrderSummary() {
  return (
    <main className={styles.orderSummary}>
      <OrderSummaryCard />
    </main>
  )
}
