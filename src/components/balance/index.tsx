import BigNumber from 'bignumber.js'
import styles from './index.module.scss'

export interface BalanceProps {
  value: number
}

export function Balance({ value }: BalanceProps) {
  const balance = new BigNumber(value).toFixed(2)
  return (
    <div className={`balance`}>
      <span className="sk-t-huge sk-c-n80">{balance}</span>
      <span className={`sk-c-n50 sk-t-h4 ${styles.suffix}`}>USD</span>
    </div>
  )
}
