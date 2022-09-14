import { ComponentMeta, ComponentStory } from '@storybook/react'
import { faker } from '@faker-js/faker'
import { List } from 'semantic-ui-react'
import { TransactionInfo, TransactionInfoProps } from '.'
import { ActionButton } from '../balance/ActionButton'
import { Icon } from '../icon'
import BigNumber from 'bignumber.js'

const Template: ComponentStory<typeof TransactionInfo> = (args: TransactionInfoProps) => (
  <>
    <TransactionInfo {...args} />
  </>
)

export const Example = Template

const icons = [
  <ActionButton
    size="48px"
    borderRadius="16px"
    key={0}
    icon={<Icon.Send className="sk-c-r60" width="24" height="24" />}
  />,
  <ActionButton
    size="48px"
    borderRadius="16px"
    key={0}
    icon={<Icon.Receive className="sk-c-g60" width="24" height="24" />}
  />
]
const types = ['Sent', 'Receive']
const classNames = ['sk-c-r60', '']
const prefixes = ['To', 'From']

export const InList: ComponentStory<typeof TransactionInfo> = (
  args: TransactionInfoProps
) => (
  <>
    <List>
      {Array.from({ length: 10 })
        .fill(0)
        .map((_it, idx) => {
          const type = faker.datatype.number({
            max: 1,
            min: 0
          })
          return {
            icon: icons[type],
            typeText: types[type],
            balance: BigNumber(faker.finance.amount()).toNumber(),
            balanceClassName: classNames[type],
            addressPrefix: prefixes[type],
            address: faker.datatype.hexadecimal({ length: 26 }),
            datetime: faker.datatype.datetime()
          }
        })
        .map((args, idx) => {
          console.log('%c 🍩 args', 'color:#33a5ff', args)
          return <List.Item key={idx}>{<TransactionInfo {...args} />}</List.Item>
        })}
    </List>
  </>
)

export default {
  title: 'TransactionInfo',
  component: TransactionInfo,
  args: {
    icon: (
      <ActionButton
        size="48px"
        borderRadius="16px"
        icon={<Icon.Send className="sk-c-r60" width="24" height="24" />}
      />
    ),
    typeText: 'Sent',
    balance: 1556.25,
    balanceClassName: '',
    addressPrefix: 'To',
    address: 'bcasdfasdfsadfkljwerasdfklasdf',
    datetime: new Date()
  }
} as ComponentMeta<typeof TransactionInfo>
