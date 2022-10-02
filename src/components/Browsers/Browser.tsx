import React from "react";
import "./Browser.scss";
import { Icon } from '../icon';

interface BrowsersProps {
  click?: () => void
}

export const Browsers = ({click}:BrowsersProps) => {
  return (
    <div className="browsers">
      <div className="browsers-close-icon" onClick={click}><Icon.Close /></div>
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
    </div>
  )
}
