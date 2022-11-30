import { ComponentMeta, ComponentStory } from '@storybook/react'
import { faker } from '@faker-js/faker'
import { css, tw } from 'twind/css'
import { List } from 'semantic-ui-react'
import BigNumber from 'bignumber.js'
import { TransactionInfo, TransactionInfoProps } from '.'
import { Icon } from '../icon'

const Template: ComponentStory<typeof TransactionInfo> = (args: TransactionInfoProps) => (
  <>
    <TransactionInfo {...args} />
  </>
)

export const Sent = Template.bind({})
Sent.args = {
  icon: <Icon.Send color="var(--sk-color-y50)" />
}

export const Receive = Template.bind({})
Receive.args = { icon: <Icon.Receive color="var(--sk-color-g60)" /> }

export const Expired = Template.bind({})
Expired.args = {
  icon: <Icon.Expired color="var(--sk-color-n50)" />,
  title: <span style={{ color: 'var(--sk-color-n50)' }}>Expired</span>,
  content: 'This is the description',
  amount: <span style={{ color: 'var(--sk-color-n50)' }}>+123</span>
}

export const Loading = Template.bind({})
Loading.args = {
  loading: true,
}

export const OnChain = Template.bind({})
OnChain.args = {
  icon: <Icon.OnChain color="var(--sk-color-b60)" />,
  title: 'On-Chain Transaction',
  content: 'This is the description',
  amount: <span style={{ color: 'var(--sk-color-n50)' }}>+123</span>
}

export const InList: ComponentStory<typeof TransactionInfo> = (
  args: TransactionInfoProps
) => (
  <>
    <List>
      {Array.from({ length: 10 })
        .fill(0)
        .map((_it, idx) => {
          return {
            icon: faker.helpers.arrayElement([
              <Icon.Send key="1" color="var(--sk-color-y50)" />,
              <Icon.Receive key="2" color="var(--sk-color-g60)" />,
              <Icon.BackCard key="3" color="var(--sk-color-b60)" />,
              <Icon.OnChain key="3" color="var(--sk-color-b60)" />
            ]),
            title: <span>asdfafds</span>,
            label: 'asdf: ',
            content: 'asdfasdfasdf',
            amount: BigNumber(faker.finance.amount()).toNumber(),
            address: faker.datatype.hexadecimal({ length: 26 }),
            datetime: faker.datatype.datetime().toString()
          }
        })
        .map((args, idx) => {
          return (
            <List.Item className={tw`!p-0`} key={idx}>
              {
                <TransactionInfo
                  {...args}
                  className={tw(css`
                    cursor: pointer;
                    transition: var(--sk-transition);
                    &:hover {
                      background-color: var(--sk-color-ntd04);
                      transition: var(--sk-transition);
                    }
                  `)}
                  bodyClassName={tw(css`
                    position: relative;
                    ${idx === 0
                      ? 0
                      : css`
                          &::after {
                            content: '';
                            position: absolute;
                            width: 100%;
                            height: 1px;
                            top: -0.5px;
                            background: var(--sk-color-ntd04);
                          }
                        `}
                  `)}
                />
              }
            </List.Item>
          )
        })}
    </List>
  </>
)

export default {
  title: 'TransactionInfo',
  component: TransactionInfo,
  args: {
    title: 'Sent',
    icon: <Icon.Aptos />,
    label: '1156561',
    content: 'laladfsladfslfsadkfdsaklafsdladfs',
    amount: 1556.25,
    iconLoading: false,
    address: 'bcasdfasdfsadfkljwerasdfklasdf',
    datetime: Intl.DateTimeFormat('fr-CA', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(Date.now())
  }
} as ComponentMeta<typeof TransactionInfo>
