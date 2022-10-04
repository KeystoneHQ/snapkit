import React from "react";
import { Modal } from "semantic-ui-react";
import "./Browser.scss";
import { Icon } from '../icon';

interface BrowsersProps {
  open: boolean
  close?: () => void
}

export const Browsers = ({open=false, close}: BrowsersProps) => {

  return (
    <Modal open={open} className="browsers" style={{width: 552, height: 333, borderRadius: '20px', position: "relative"}}>
      <div className="browsers-close-icon" onClick={close}><Icon.Close /></div>
      <div className="browsers-container">
        <a href='https://www.google.com/chrome/'>
          <Icon.Chrome />
          <div>Chrome</div>
        </a>
        <a href='https://www.mozilla.org/'>
          <Icon.Firefox />
          <div>Firefox</div>
        </a>
        <a href='https://brave.com/'>
          <Icon.Brave />
          <div>Brave</div>
        </a>
        <a href='https://www.microsoft.com/en-us/edge'>
          <Icon.Edge />
          <div>Edge</div>
        </a>
      </div>
      <div className="browsers-warning">This Browser is not Supported</div>
      <div className="browsers-suggestion">Please use the browsers above we currently supported.</div>
    </Modal>
  )
}
