import iconMusicUrl from '@/assets/images/icon-music.svg'
import styles from '@/components/OrderSummaryCard/Plan.module.scss'

export default function Plan() {
  return (
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
  )
}
