import { ReactNode } from 'react'
import { css, cx } from '@emotion/css'
import { skeletonCommon } from '../styles'
import styles from './index.module.scss'

export interface BaseTransactionInfoProps {
  icon: ReactNode
  title: ReactNode
  amount: ReactNode
  label?: string
  content?: string
  loading?: boolean
  datetime?: string
  className?: string
  bodyClassName?: string
  onClick?: () => void
}


const skeletonTitle = cx(skeletonCommon, css`
  margin-top: 5px;
  width: 25%;
  height: 12px;
  animation-duration: 7s;
`)

const skeletonDesc = cx(skeletonCommon, css`
  margin-top: 10px;
  width: 25%;
  height: 12px;
  animation-duration: 1.6s;
`)

export function BaseTransactionInfo({
  icon,
  title,
  amount,
  label = '',
  content,
  datetime,
  loading = false,
  onClick,
  className,
  bodyClassName
}: BaseTransactionInfoProps) {
  return (
    <div
      className={`transaction-info ${css`display: flex; width: 100%;`} ${styles.container} ${className}`}
      onClick={onClick}
    >
      <div className={`${css`display: flex; width: 100%;`} ${styles.body} ${bodyClassName}`}>
        <div className={`left-icon ${styles.left}`}>{icon}</div>
        <div className={`right-info ${styles.right}`}>
          <div className={css`display: flex; justify-content: space-between;`}>
            {!loading ? <>
              <span className="sk-t-body">{title}</span>
              <span className={`sk-t-h3 sk-c-n80`}>{amount}</span>
              </>
            : <div className={skeletonTitle}></div>}
          </div>
          <div className={`sk-flex sk-justify-between ${styles.rightBottom}`}>
            {!loading ? <>
              <div>
                <span className="sk-t-caption sk-c-n50">{label}</span>
                <span className="sk-t-caption sk-c-n60">{content}</span>
              </div>
              <span className="sk-t-caption sk-c-n50">{datetime}</span>
              </>
             : <div className={skeletonDesc}></div>}
          </div>
        </div>
      </div>
    </div>
  )
}
