import styles from './OrderSummaryCard.module.scss'
import illustrationHeroUrl from '@/assets/images/illustration-hero.svg'

export default function OrderSummaryCard() {
  return (
    <div className={styles.orderSummaryCard}>
      <img
        src={illustrationHeroUrl}
        alt="Illustration Hero"
      />
      <main className={styles.orderSummaryCardMain}>
        <h1 className={styles.orderSummaryCardHeading}>Order Summary</h1>
      </main>
    </div>
  )
}
