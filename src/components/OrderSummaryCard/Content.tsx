import styles from './Content.module.scss'
import { PropsWithChildren } from 'react'

export default function Content({ children }: PropsWithChildren) {
  return <div className={styles.content}>{children}</div>
}
