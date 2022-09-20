import { ComponentMeta, ComponentStory } from '@storybook/react'
import { faker } from '@faker-js/faker'
import { css, tw } from 'twind/css'
import { List } from 'semantic-ui-react'
import BigNumber from 'bignumber.js'
import { TransactionInfo, TransactionInfoProps, TransactionType } from '.'

const Template: ComponentStory<typeof TransactionInfo> = (args: TransactionInfoProps) => (
  <>
    <TransactionInfo {...args} />
  </>
)

export const Sent = Template.bind({})

export const Receive = Template.bind({})
Receive.args = { type: TransactionType.RECEIVED }

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
            type: Object.values(TransactionType)[type],
            amount: BigNumber(faker.finance.amount()).toNumber(),
            address: faker.datatype.hexadecimal({ length: 26 }),
            datetime: faker.datatype.datetime()
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
    type: TransactionType.SEND,
    amount: 1556.25,
    address: 'bcasdfasdfsadfkljwerasdfklasdf',
    datetime: new Date(),
    loading: false
  }
} as ComponentMeta<typeof TransactionInfo>
