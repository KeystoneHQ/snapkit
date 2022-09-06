import { Icon } from '.'

export default {
  title: 'Icon',
  component: Icon
}

export const All = () => {
  const icons = Object.keys(Icon).map(k => {
    const Item = (Icon as unknown as {[propName: string]: typeof Icon.Chrome})[k]
    return (
      <div className='sk-t-center' style={{padding: '20px'}} key={k}>
        <Item width='24px' height='24px' />
        <div className='title'>{k}</div>
      </div>
    )
  })
  return (
    <div className='sk-flex sk-items-end sk-flex-wrap'>
      {icons}
    </div>
  )
}
