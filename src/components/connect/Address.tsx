import { Button } from '../base/Button'
import { Icon } from '../icon'
import ConnectingStyles from './Connecting.module.scss'
import styles from './Address.module.scss'

interface ConnectingProps {
  name?: string
  loading?: boolean
  onGetAddress?(): void
}

export function Address ({ name, loading, onGetAddress }: ConnectingProps) {
  return (
    <div className='sk-t-center'>
      <div className={`${ConnectingStyles.logos} sk-flex sk-justify-center sk-items-center`}>
        <div className={`${ConnectingStyles.logo} sk-flex sk-items-center sk-justify-center`}>
          <Icon.Aptos width='40px' height='40px'></Icon.Aptos>
        </div>
        <Icon.Connect className={ConnectingStyles.connect}></Icon.Connect>
        <div className={`${ConnectingStyles.logo} sk-flex sk-items-center sk-justify-center`}>
          <Icon.MetaMask width='40px' height='40px'></Icon.MetaMask>
        </div>
      </div>
      <div className='sk-t-h2 sk-c-n80'>
        <div>Get Addresses for</div>
        <div>{name} Snap</div>
      </div>
      <div className={`${styles.help} sk-t-caption sk-c-n60`}>Your Aptos account addresses will be created along with your MetaMask public key.</div>
      <Button primary className={styles.btn} loading={loading} onClick={onGetAddress}>
        <Icon.Reveal width='24px' height='24px'></Icon.Reveal>
        <span style={{marginLeft: '8px'}}>Get Addresses</span>
      </Button>
    </div>
  )
}
