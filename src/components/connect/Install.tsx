import React from 'react'
import { Icon } from '../icon'
// import styles from './Install.module.scss'

export function Install () {
  return (
    <>
      <Icon.MetaMask></Icon.MetaMask>
      <h2>Install MetaMask Flask</h2>
      <p className="Connect-install">You will need to install the MetaMask Flask extension in order to use Bitcoin Snap.</p>
      <p className="Connect-flask">Please disable the regular MetaMask extension prior to using flask.</p>
      <a
        href="https://chrome.google.com/webstore/detail/metamask-flask-developmen/ljfoeinjpaedjfecbmggjgodbgkmjkjk"
        className="Connect-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Install MetaMask</span>
      </a>
    </>
  )
}
