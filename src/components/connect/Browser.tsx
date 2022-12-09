import { BrowserInfo, BrowsersList, BrowsersProps } from '../Browsers/Browser'
import styles from './Browser.module.scss'

interface Props {
  list: BrowsersProps['list']
}

export function Browser ({ list }: Props) {
  const renderList: BrowserInfo[] = list.map(name => BrowsersList.find(it => it.name === name)).filter(it => it && it?.name) as BrowserInfo[]
  return (
    <div className='sk-t-center'>
      <div className={`sk-flex sk-justify-center ${styles.browsers}`}>
        {renderList.map(it => {
          return <a className='sk-bg-hover-ntd04 sk-a-transition' href={it.link}>
            {it.icon}
            <div className='sk-t-h5 sk-c-n60'>{it.name}</div>
          </a>
        })}
      </div>
      <div className={`sk-t-h2 sk-c-n80 ${styles.msg}`}>This Browser is not Supported</div>
      <div className={`sk-t-caption sk-c-n60 ${styles.desc}`}>Please use the browsers above we currently supported.</div>
    </div>
  )
}
