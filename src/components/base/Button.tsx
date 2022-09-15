import React, { ReactNode } from 'react'
import { css, tw } from 'twind/css'
import styles from './Button.module.scss'
import { Loading } from './Loading'

export interface ButtonProps {
  primary?: boolean
  disabled?: boolean
  size?: 'large' | 'medium' | 'small' | null
  tagName?: string
  className?: string
  loading?: boolean
  children?: string | JSX.Element | JSX.Element[]
  icon?: ReactNode
  suffix?: ReactNode
  [propName: string]: unknown
}

export function Button({
  primary,
  disabled,
  size,
  tagName,
  className,
  loading,
  children,
  icon,
  suffix,
  ...args
}: ButtonProps) {
  const sizeStyles = {
    large: styles.large,
    medium: styles.medium,
    small: styles.small
  }
  const style = `${styles.btn} ${primary ? styles.primary : styles.default} ${
    size ? sizeStyles[size] : ''
  } ${loading ? styles.loading : ''} ${className}`
  const CustomTag = tagName || ('button' as keyof JSX.IntrinsicElements)

  return React.createElement(
    CustomTag,
    {
      className: style,
      disabled: disabled,
      ...args
    },
    loading ? (
      <Loading></Loading>
    ) : (
      <div
        className={tw(css`
          display: flex;
          padding: 0 8px;
          .icon-prefix + .button-content {
            margin-left: 8px;
          }
        `)}
      >
        {icon && <div className="icon-prefix">{icon}</div>}
        {children && <div className={`button-content`}>{children}</div>}
        {suffix && <div className={`suffix-content`}>{suffix}</div>}
      </div>
    )
  )
}
