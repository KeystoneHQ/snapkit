import { ReactElement, ReactNode } from 'react'
import { tw } from 'twind'
import { formatAddressDisplay, formatDate } from '../utils'
import styles from './index.module.scss'

export interface BaseTransactionInfoProps {
  icon: ReactNode
  title: ReactNode
  amount: ReactNode
  label?: string
  content?: string
  datetime?: string
  className?: string
  bodyClassName?: string
  onClick?: () => void
}

export function BaseTransactionInfo({
  icon,
  title,
  amount,
  label = '',
  content,
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
            <span className="sk-t-body">{title}</span>
            <span className={`sk-t-h3 sk-c-n80`}>{amount}</span>
          </div>
          <div className={`sk-flex sk-justify-between ${styles.rightBottom}`}>
            <div>
              <span className="sk-t-caption sk-c-n50">{label}</span>
              <span className="sk-t-caption sk-c-n60">{content}</span>
            </div>
            <span className="sk-t-caption sk-c-n50">{datetime}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
