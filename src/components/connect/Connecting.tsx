import { Button } from '../base/Button'
import { Icon } from '../icon'
import styles from './Connecting.module.scss'

interface ConnectingProps {
  name?: string
  loading?: boolean
  onConnect?(): void
}

export function Connecting ({ name, loading, onConnect }: ConnectingProps) {
  return (
    <div className='sk-t-center'>
      <div className={`${styles.logos} sk-flex sk-justify-center sk-items-center`}>
        <div className={`${styles.logo} sk-flex sk-items-center sk-justify-center`}>
          <Icon.Aptos width='40px' height='40px'></Icon.Aptos>
        </div>
        <Icon.Connect className={styles.connect}></Icon.Connect>
        <div className={`${styles.logo} sk-flex sk-items-center sk-justify-center`}>
          <Icon.MetaMask width='40px' height='40px'></Icon.MetaMask>
        </div>
      </div>
      <div className='sk-t-h2 sk-c-n80'>
        <div>Connect to MetaMask</div>
        <div>{name} Snap</div>
      </div>
      <div className={`${styles.help} sk-t-caption sk-c-n60`}>If you do not have {name} Snap installed, you will be prompted to do so.</div>
      <a href="/" className='sk-inline-flex sk-items-center sk-c-pri60 sk-c-hover-pri60'>
        <span>What is Snaps</span>
        <Icon.ArrowRight width='18px' height='18px'></Icon.ArrowRight>
      </a>
      <Button primary className={styles.btn} loading={loading} onClick={onConnect}>
        <Icon.MetaMask solid width='24px' height='24px'></Icon.MetaMask>
        <span style={{marginLeft: '8px'}}>Connect MetaMask</span>
      </Button>
    </div>
  )
}
