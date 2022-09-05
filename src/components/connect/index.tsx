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
  open: boolean
  loading?: boolean
  connected?: boolean
  onConnect?(): void
  onGetAddress?(): void
  onClose(): void
  children?: JSX.Element | JSX.Element[]
}

function isBrowserSupport () {
  return true
}

export function Connect ({ name, open, loading, connected, onConnect, onGetAddress, onClose, children }: ConnectProps) {
  const modalDefaultClass = `sk-t-center ${styles.modal}`
  const [step, setStep] = useState(children)
  const [size, setSize] = useState('mini' as StrictModalProps['size'])
  const [modalClass, setModalClass] = useState(modalDefaultClass)
  
  useEffect(() => {
    if (!children) {
      if (!isBrowserSupport()) {
        setSize('tiny')
        setModalClass(`${modalDefaultClass} ${styles.browser}`)
        setStep(<Browser></Browser>)
      } else if (connected) {
        setModalClass(modalDefaultClass)
        const props = {
          name,
          loading,
          onGetAddress
        }
        setStep(<Address {...props}></Address>)
      }
      else {
        setModalClass(modalDefaultClass)
        const props = {
          name,
          loading,
          onConnect
        }
        setStep(<Connecting {...props} ></Connecting>)
      }
    }
  }, [children])

  return <Modal open={open} onClose={onClose} closeIcon={true} size={size} className={modalClass}>{step}</Modal>
}

Connect.Install = Install
Connect.Connecting = Connecting
Connect.Address = Address
