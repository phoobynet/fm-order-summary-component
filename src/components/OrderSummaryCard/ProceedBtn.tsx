import styles from './ProceedBtn.module.scss'
import ShiftBy from '@/components/ShiftBy'

export default function ProceedBtn() {
  return (
    <button className={styles.proceedBtn}>
      <ShiftBy
        x={0}
        y={2}
      >
        Proceed to Payment
      </ShiftBy>
    </button>
  )
}
