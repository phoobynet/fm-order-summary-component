import styles from './index.module.scss'
import CancelBtn from '@/components/OrderSummaryCard/CancelBtn'
import Content from '@/components/OrderSummaryCard/Content'
import Heading from '@/components/OrderSummaryCard/Heading'
import Hero from '@/components/OrderSummaryCard/Hero'
import Message from '@/components/OrderSummaryCard/Message'
import Plan from '@/components/OrderSummaryCard/Plan'
import ProceedBtn from '@/components/OrderSummaryCard/ProceedBtn'

export default function OrderSummaryCard() {
  return (
    <div className={styles.orderSummaryCard}>
      <Hero />
      <Content>
        <div className={styles.headingContainer}>
          <Heading />
        </div>
        <div className={styles.messageContainer}>
          <Message />
        </div>
        <div className={styles.planContainer}>
          <Plan />
        </div>
        <div className={styles.proceedBtnContainer}>
          <ProceedBtn />
        </div>
        <CancelBtn />
      </Content>
    </div>
  )
}
