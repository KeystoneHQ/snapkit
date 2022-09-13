import { useContext } from 'react';
import { TabsContext } from './helper';
import styles from './Tab.module.scss'

export interface TabProps {
  title: string
  _index?: number
}

export function Tab({ title, _index }: TabProps) {
  const tabsContext = useContext(TabsContext)

  function setActiveIndex() {
    tabsContext.setActivedIndex(_index as number)
    tabsContext.onChange(_index as number)
  }

  return (
    <div className={`sk-tab ${styles.tab}`} onClick={setActiveIndex}>
      <span className={`sk-t-h4 sk-c-n50 ${tabsContext.activedIndex === _index && `actived ${styles.actived}`}`}>{title}</span>
    </div>
  )
}
