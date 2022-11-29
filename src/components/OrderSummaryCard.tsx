import styles from './OrderSummaryCard.module.scss'
import iconMusicUrl from '@/assets/images/icon-music.svg'
import illustrationHeroUrl from '@/assets/images/illustration-hero.svg'
import ShiftBy from '@/components/ShiftBy'

export default function OrderSummaryCard() {
  return (
    <div className={styles.orderSummaryCard}>
      <img
        src={illustrationHeroUrl}
        alt="Illustration Hero"
      />
      <main className={styles.main}>
        <h1 className={styles.heading}>Order Summary</h1>
        <p className={styles.message}>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className={styles.plan}>
          <img
            src={iconMusicUrl}
            alt="Music icon"
            className={styles.planIcon}
          ></img>
          <div className={styles.planPeriod}>
            <h2 className={styles.planPeriodFreq}>Annual Plan</h2>
            <p className={styles.planPeriodPrice}>$59.99/year</p>
          </div>
          <div className={styles.planChange}>Change</div>
        </div>
        <button className={styles.proceedBtn}>
          <ShiftBy
            x={0}
            y={2}
          >
            Proceed to Payment
          </ShiftBy>
        </button>
        <button className={styles.cancelBtn}>Cancel Order</button>
      </main>
    </div>
  )
}
