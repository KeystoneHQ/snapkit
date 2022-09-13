import styles from './ActionButton.module.scss'

export interface ActionButtonProps {
  icon: JSX.Element
}

export function ActionButton({ icon }: ActionButtonProps) {
  return (
    <div className={styles.container}>
      <div className={styles.button}>{icon}</div>
    </div>
  )
}
