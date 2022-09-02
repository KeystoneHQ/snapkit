import React from 'react'
import { Button } from '../base/Button'
import { Icon } from '../icon'
import styles from './Install.module.scss'

export function Install () {
  return (
    <>
      <div className={`sk-t-center ${styles.content}`}>
        <Icon.MetaMask></Icon.MetaMask>
        <h2 className='sk-t-h2 sk-c-n80'>Install MetaMask Flask</h2>
        <p className='sk-t-caption sk-c-n60'>You will need to install the MetaMask extension in order to use Aptos Snap.</p>
        <p>
          <a href='/' className='sk-t-h4 sk-c-pri60 sk-c-hover-pri60 sk-inline-flex sk-items-center'>
            <span>Learn More</span>
            <Icon.ArrowRight></Icon.ArrowRight>
          </a>
        </p>
      </div>
      <Button
        tagName='a'
        primary
        size='large'
        href='https://chrome.google.com/webstore/detail/metamask-flask-developmen/ljfoeinjpaedjfecbmggjgodbgkmjkjk'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Icon.Install className={styles.install}></Icon.Install>
        <span>Install MetaMask</span>
      </Button>
    </>
  )
}
