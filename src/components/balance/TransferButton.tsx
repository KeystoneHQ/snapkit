import styles from './TransferButton.module.scss'

export interface TransferButtonProps {
  icon: JSX.Element
  text: string
}

export function TransferButton({ icon, text }: TransferButtonProps) {
  return (
    <div className={styles.container}>
      <div className={styles.button}>{icon}</div>
      <span className={styles.text}>{text}</span>
    </div>
  )
}
