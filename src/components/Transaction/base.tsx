import { ReactElement, ReactNode } from 'react'
import { tw } from 'twind'
import { css } from 'twind/css'
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


const skeletonTitle = tw(skeletonCommon, tw`
  mt-[5px]
  w-1/4 h-[12px]
`)

const skeletonDesc = tw(skeletonCommon, tw`
  mt-[10px]
  w-1/4 h-[12px]
`, css`
  animation-duration: 2s;
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
      className={`transaction-info ${tw`flex w-full`} ${styles.container} ${className}`}
      onClick={onClick}
    >
      <div className={`${tw`flex w-full`} ${styles.body} ${bodyClassName}`}>
        <div className={`left-icon ${styles.left}`}>{icon}</div>
        <div className={`right-info ${styles.right}`}>
          <div className={tw`flex justify-between`}>
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
