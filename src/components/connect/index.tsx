import React, { useEffect, useState } from 'react'
import { Install } from './Install'
import { Modal } from '../base/Modal'
import styles from './index.module.scss'
import { Browser } from './Browser'
import { Connecting } from './Connecting'
import { StrictModalProps } from 'semantic-ui-react'
import { Address } from './Address'

interface ConnectProps {
  name?: string
  logo?: JSX.Element
  open: boolean
  loading?: boolean
  connected?: boolean
  onConnect?(): void
  onGetAddress?(): void
  onClose(): void
  children?: JSX.Element | JSX.Element[]
}

export function isBrowserSupport (ua: string) {
  let browser = ''
  if (ua.includes('Firefox')) {
    browser = 'Firefox'
  } else if (ua.includes('SamsungBrowser')) {
    browser = 'SamsungBrowser'
  } else if (ua.includes('Opera') || ua.includes('OPR')) {
    browser = 'Opera'
  } else if (ua.includes('Trident')) {
    browser = 'IE'
  } else if (ua.includes('Edge')) {
    browser = 'Edge (Legacy)'
  } else if (ua.includes('Edg')) {
    browser = 'Edge'
  } else if (ua.includes('Chrome')) {
    browser = 'Chrome'
  } else if (ua.includes('Safari')) {
    browser = 'Safari'
  }
  // 由于Brave的UserAgent跟Chrome相同，因此视为Chrome
  return /^(Chrome|Firefox|Edge)/.test(browser)
}

const isBrowserOk = isBrowserSupport(navigator.userAgent)

export function Connect ({ name, logo, open, loading, connected, onConnect, onGetAddress, onClose, children }: ConnectProps) {
  const modalDefaultClass = `sk-t-center ${styles.modal}`
  const [step, setStep] = useState(children)
  const [size, setSize] = useState('mini' as StrictModalProps['size'])
  const [modalClass, setModalClass] = useState(modalDefaultClass)
  
  useEffect(() => {
    if (!children) {
      if (!isBrowserOk) {
        setSize('tiny')
        setModalClass(`${modalDefaultClass} ${styles.browser}`)
        setStep(<Browser list={['chrome', 'firefox', 'brave']}></Browser>)
      } else if (connected) {
        setModalClass(modalDefaultClass)
        const props = {
          name,
          logo,
          loading,
          onGetAddress
        }
        setStep(<Address {...props}></Address>)
      }
      else {
        setModalClass(modalDefaultClass)
        const props = {
          name,
          logo,
          loading,
          onConnect
        }
        setStep(<Connecting {...props} ></Connecting>)
      }
    }
  }, [children, connected, loading])

  return <Modal open={open} onClose={onClose} closeIcon={true} size={size} className={modalClass}>{step}</Modal>
}

Connect.Install = Install
Connect.Connecting = Connecting
Connect.Address = Address
