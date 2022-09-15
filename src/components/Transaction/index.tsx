import { BaseTransactionInfo, TransactionType } from './base'
import { ActionButton } from '../balance/ActionButton'
import { Icon } from '../icon'

export { TransactionType } from './base'

export interface TransactionInfoProps {
  type: TransactionType
  balance: number
  address: string
  datetime: Date
  className?: string
  bodyClassName?: string
  onClick?: () => void
}

const icons = {
  [TransactionType.SENT]: (
    <ActionButton
      size="48px"
      borderRadius="16px"
      key={0}
      icon={<Icon.Send className="sk-c-r60" width="24" height="24" />}
    />
  ),
  [TransactionType.RECEIVED]: (
    <ActionButton
      size="48px"
      borderRadius="16px"
      key={0}
      icon={<Icon.Receive className="sk-c-g60" width="24" height="24" />}
    />
  )
}

const typeTexts = {
  [TransactionType.SENT]: 'Sent',
  [TransactionType.RECEIVED]: 'Received'
}

const balanceClassNames = {
  [TransactionType.SENT]: 'sk-c-r60',
  [TransactionType.RECEIVED]: ''
}

const addressPrefixes = {
  [TransactionType.SENT]: 'To',
  [TransactionType.RECEIVED]: 'From'
}

export function TransactionInfo({
  type,
  balance,
  address,
  datetime,
  onClick,
  className,
  bodyClassName
}: TransactionInfoProps) {
  return (
    <BaseTransactionInfo
      icon={icons[type]}
      addressPrefix={addressPrefixes[type]}
      balance={balance}
      typeText={typeTexts[type]}
      bodyClassName={bodyClassName}
      className={className}
      balanceClassName={balanceClassNames[type]}
      address={address}
      datetime={datetime}
      onClick={onClick}
    />
  )
}
