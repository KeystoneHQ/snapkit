import { BaseTransactionInfo, TransactionType } from './base'
import { ActionButton } from '../balance/ActionButton'
import { Icon } from '../icon'

export { TransactionType } from './base'

export interface TransactionInfoProps {
  type: TransactionType
  amount: number
  address: string
  datetime: Date
  className?: string
  bodyClassName?: string
  loading?: boolean
  onClick?: () => void
}

const icons = (props: { loading: boolean }) => {
  return {
    [TransactionType.SEND]: (
      <ActionButton
        size="48px"
        borderRadius="16px"
        key={0}
        loading={props.loading}
        icon={<Icon.Send className="sk-c-r60" width="24" height="24" />}
      />
    ),
    [TransactionType.RECEIVED]: (
      <ActionButton
        size="48px"
        borderRadius="16px"
        key={0}
        loading={props.loading}
        icon={<Icon.Receive className="sk-c-g60" width="24" height="24" />}
      />
    )
  }
}

const typeTexts = {
  [TransactionType.SEND]: 'Sent',
  [TransactionType.RECEIVED]: 'Received'
}

const amountClassNames = {
  [TransactionType.SEND]: 'sk-c-r60',
  [TransactionType.RECEIVED]: ''
}

const addressPrefixes = {
  [TransactionType.SEND]: 'To',
  [TransactionType.RECEIVED]: 'From'
}

export function TransactionInfo({
  type,
  amount,
  address,
  datetime,
  onClick,
  className,
  bodyClassName,
  loading
}: TransactionInfoProps) {
  return (
    <BaseTransactionInfo
      icon={icons({ loading: !!loading })[type]}
      addressPrefix={addressPrefixes[type]}
      amount={amount}
      typeText={typeTexts[type]}
      bodyClassName={bodyClassName}
      className={className}
      amountClassName={amountClassNames[type]}
      address={address}
      datetime={datetime}
      onClick={onClick}
    />
  )
}
