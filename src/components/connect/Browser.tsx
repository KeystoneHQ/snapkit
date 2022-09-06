import React from 'react'
import { Icon } from '../icon'
import styles from './Browser.module.scss'

export function Browser () {
  return (
    <div className='sk-t-center'>
      <div className={`sk-flex sk-justify-center ${styles.browsers}`}>
        <a className='sk-bg-hover-ntd04 sk-a-transition' href='https://www.google.com/chrome/'>
          <Icon.Chrome></Icon.Chrome>
          <div className='sk-t-h5 sk-c-n60'>Chrome</div>
        </a>
        <a className='sk-bg-hover-ntd04 sk-a-transition' href='https://www.mozilla.org/'>
          <Icon.Firefox></Icon.Firefox>
          <div className='sk-t-h5 sk-c-n60'>Firefox</div>
        </a>
        <a className='sk-bg-hover-ntd04 sk-a-transition' href='https://brave.com/'>
          <Icon.Brave></Icon.Brave>
          <div className='sk-t-h5 sk-c-n60'>Brave</div>
        </a>
        <a className='sk-bg-hover-ntd04 sk-a-transition' href='https://www.microsoft.com/en-us/edge'>
          <Icon.Edge></Icon.Edge>
          <div className='sk-t-h5 sk-c-n60'>Edge</div>
        </a>
      </div>
      <div className={`sk-t-h2 sk-c-n80 ${styles.msg}`}>This Browser is not Supported</div>
      <div className={`sk-t-caption sk-c-n60 ${styles.desc}`}>Please use the browsers above we currently supported.</div>
    </div>
  )
}
