import { Modal } from "semantic-ui-react";
import "./Browser.scss";
import { Icon } from '../icon';
import { CSSProperties, ReactNode } from "react";

export interface BrowserInfo {
  icon: ReactNode
  name: string
  link: string
}

export const BrowsersList: BrowserInfo[] = [
  {
    icon: <Icon.FirefoxBrowser />,
    name: 'firefox',
    link: 'https://www.mozilla.org/en-US/firefox/browsers/'
  },
  {
    icon: <Icon.Chrome />,
    name: 'chrome',
    link: 'https://www.google.com/chrome/'
  },
  {
    icon: <Icon.Brave />,
    name: 'brave',
    link: 'https://brave.com/'
  },
  {
    icon: <Icon.Edge />,
    name: 'edge',
    link: 'https://www.microsoft.com/en-us/edge'
  },
  {
    icon: <Icon.Opera />,
    name: 'opera',
    link: 'https://www.opera.com/'
  },
]

export interface BrowsersProps {
  open: boolean
  list: ('firefox' | 'chrome' | 'brave' | 'edge' | 'opera'  | string & {})[]
  close?: () => void
  className?: string
  style?: CSSProperties
  [k: string]: any
}

export const Browsers = ({open=false, list, close, style, className, ...args }: BrowsersProps) => {
  const renderList: BrowserInfo[] = list.map(name => BrowsersList.find(it => it.name === name)).filter(it => it && it?.name) as BrowserInfo[]

  return (
    <Modal open={open} className={`browsers ${className || ''}`} style={{width: 552, height: 333, borderRadius: '20px', position: "relative", ...style }} {...args}>
      <div className="browsers-close-icon" onClick={close}><Icon.Close /></div>
      <div className="browsers-container">
        {renderList.map(it => {
         return <a href={it.link}>
            {it.icon}
            <div>{it.name}</div>
          </a>
        })}
      </div>
      <div className="browsers-warning">This Browser is not Supported</div>
      <div className="browsers-suggestion">Please use the browsers above we currently supported.</div>
    </Modal>
  )
}
