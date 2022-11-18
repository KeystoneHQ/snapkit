import { ReactNode } from 'react'
import { Icon } from '../icon'
import styles from './ActionButton.module.scss'

export interface ActionButtonProps {
  icon: ReactNode
  size?: string
  borderRadius?: string
  onClick?: () => void
  loading?: boolean
}

export function ActionButton({
  icon,
  size = '96px',
  borderRadius = '28px',
  loading,
  onClick
}: ActionButtonProps) {
  const containerStyle = {
    width: size,
    height: size
  }

  return (
    <div style={containerStyle} onClick={onClick}>
      <div className={`${styles.button}`} style={{ borderRadius }}>
        {loading && (
          <Icon.Pending className={`rotate-center-linear-infinite ${styles.pending}`} />
        )}
        {icon}
      </div>
    </div>
  )
}
