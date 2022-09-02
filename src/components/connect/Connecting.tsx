import { Button } from '../base/Button'
import { Icon } from '../icon'
import styles from './Connecting.module.scss'

interface ConnectingProps {
  name: string
}

export function Connecting ({ name }: ConnectingProps) {
  return (
    <div className='sk-t-center'>
      <div className='sk-flex sk-justify-center sk-items-center'>
        <div className={`${styles.logo} sk-flex sk-items-center sk-justify-center`}>
          <Icon.Aptos width='40px' height='40px'></Icon.Aptos>
        </div>
        <Icon.Connect className={styles.connect}></Icon.Connect>
        <div className={`${styles.logo} sk-flex sk-items-center sk-justify-center`}>
          <Icon.MetaMask width='40px' height='40px'></Icon.MetaMask>
        </div>
      </div>
      <div className='sk-t-h2 sk-c-n80'>Connect to MetaMask {name} Snap</div>
      <div className='sk-t-caption sk-c-n60'>If you do not have Aptos Snap installed, you will be prompted to do so.</div>
      <a href="/" className='sk-inline-flex sk-items-center sk-c-pri60 sk-c-hover-pri60'>
        <span>What is Snaps</span>
        <Icon.ArrowRight width='18px' height='18px'></Icon.ArrowRight>
      </a>
      <Button primary>
        <Icon.MetaMask solid width='24px' height='24px'></Icon.MetaMask>
        <span style={{marginLeft: '8px'}}>Connect MetaMask</span>
      </Button>
    </div>
  )
}
