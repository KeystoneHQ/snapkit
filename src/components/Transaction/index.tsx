import { ReactElement } from 'react'
import { tw } from 'twind'
import { formatAddressDisplay, formatDate } from '../utils'
import styles from './index.module.scss'

export interface TransactionInfoProps {
  icon: ReactElement
  typeText: string
  balance: number
  balanceClassName?: string
  addressPrefix: string
  address: string
  datetime: Date
  className?: string
  bodyClassName?: string
  onClick?: () => void
}

export function TransactionInfo({
  icon,
  typeText,
  balance,
  balanceClassName,
  addressPrefix,
  address,
  datetime,
  onClick,
  className,
  bodyClassName
}: TransactionInfoProps) {
  return (
    <div className={`transaction-info ${tw`flex`} ${className}`} onClick={onClick}>
      <div className={`${tw`flex w-full`} ${bodyClassName}`}>
        <div className={`left-icon ${styles.left}`}>{icon}</div>
        <div className={`right-info ${styles.right}`}>
          <div className={tw`flex justify-between`}>
            <span className="sk-t-body">{typeText}</span>
            <span className={`sk-t-h3 sk-c-n80 ${balanceClassName}`}>{balance}</span>
          </div>
          <div className={`sk-flex sk-justify-between ${styles.rightBottom}`}>
            <div>
              <span className="sk-t-caption sk-c-n50">{addressPrefix}: </span>
              <span className="sk-t-caption sk-c-n60">
                {formatAddressDisplay(address)}
              </span>
            </div>
            <span className="sk-t-caption sk-c-n50">{formatDate(datetime)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
