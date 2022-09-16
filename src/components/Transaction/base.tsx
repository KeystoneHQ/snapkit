import { ReactElement } from 'react'
import { tw } from 'twind'
import { formatAddressDisplay, formatDate } from '../utils'
import styles from './index.module.scss'

export enum TransactionType {
  SEND = 'Send',
  RECEIVED = 'Received'
}

export interface BaseTransactionInfoProps {
  icon: ReactElement
  typeText: string
  amount: number
  amountClassName?: string
  addressPrefix: string
  address: string
  datetime: Date
  className?: string
  bodyClassName?: string
  onClick?: () => void
}

export function BaseTransactionInfo({
  icon,
  typeText,
  amount,
  amountClassName,
  addressPrefix,
  address,
  datetime,
  onClick,
  className,
  bodyClassName
}: BaseTransactionInfoProps) {
  return (
    <div
      className={`transaction-info ${tw`flex w-full`} ${styles.container} ${className}`}
      onClick={onClick}
    >
      <div className={`${tw`flex w-full`} ${styles.body} ${bodyClassName}`}>
        <div className={`left-icon ${styles.left}`}>{icon}</div>
        <div className={`right-info ${styles.right}`}>
          <div className={tw`flex justify-between`}>
            <span className="sk-t-body">{typeText}</span>
            <span className={`sk-t-h3 sk-c-n80 ${amountClassName}`}>{amount}</span>
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
