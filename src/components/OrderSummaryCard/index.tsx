import styles from './index.module.scss'
import illustrationHeroUrl from '@/assets/images/illustration-hero.svg'
import CancelBtn from '@/components/OrderSummaryCard/CancelBtn'
import Content from '@/components/OrderSummaryCard/Content'
import Plan from '@/components/OrderSummaryCard/Plan'
import ProceedBtn from '@/components/OrderSummaryCard/ProceedBtn'

export default function OrderSummaryCard() {
  return (
    <div className={styles.orderSummaryCard}>
      <img
        src={illustrationHeroUrl}
        alt="Illustration Hero"
      />

      <Content>
        <h1 className={styles.heading}>Order Summary</h1>
        <p className={styles.message}>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <Plan />
        <ProceedBtn />
        <CancelBtn />
      </Content>
    </div>
  )
}
