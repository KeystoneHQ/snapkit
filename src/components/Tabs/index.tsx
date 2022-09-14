import { cloneElement, ReactElement, useState } from 'react'
import { TabsContext } from './helper'
import styles from './index.module.scss'
import { TabProps } from './Tab'

export interface TabsProps {
  children: ReactElement<TabProps>[]
  defaultActivedIndex?: number
  onChange?: (index: number) => void
}

export function Tabs({ defaultActivedIndex, children,  onChange }: TabsProps) {
  const [activedIndex, setActivedIndex] = useState(defaultActivedIndex ?? 0)

  // set default onChange return activedIndex
  if (!onChange) onChange = () => activedIndex

  return (
    <TabsContext.Provider value={{ activedIndex, setActivedIndex: setActivedIndex, onChange: onChange }}>
      <div className={`sk-tabs ${styles.container}`}>
        {children.map((tab, idx) => cloneElement(tab, {
          _index: idx,
        }))}
      </div>
    </TabsContext.Provider>
  )
}
