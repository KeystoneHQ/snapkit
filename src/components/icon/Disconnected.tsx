import { IconProps } from './types'

export function Disconnected ({ className, width = '24', height = '24', color }: IconProps) {
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.75 15.75H19.5V17.25H17.25V19.5H15.75V15.75ZM8.25 8.25H4.5V6.75H6.75V4.5H8.25V8.25ZM16.773 14.652L15.7125 13.59L16.773 12.5295C17.1237 12.1818 17.4023 11.7683 17.5928 11.3127C17.7833 10.8571 17.8819 10.3683 17.883 9.87447C17.8841 9.38064 17.7876 8.89145 17.5991 8.43499C17.4106 7.97854 17.1338 7.56381 16.7846 7.21461C16.4354 6.86541 16.0207 6.58863 15.5643 6.40014C15.1078 6.21166 14.6186 6.11519 14.1248 6.11627C13.6309 6.11735 13.1422 6.21596 12.6866 6.40645C12.2309 6.59693 11.8174 6.87553 11.4698 7.22625L10.4092 8.2875L9.348 7.227L10.41 6.1665C11.3946 5.18188 12.73 4.62873 14.1225 4.62873C15.515 4.62873 16.8504 5.18188 17.835 6.1665C18.8196 7.15112 19.3728 8.48654 19.3728 9.879C19.3728 11.2715 18.8196 12.6069 17.835 13.5915L16.7738 14.652H16.773ZM14.652 16.773L13.5907 17.8335C12.6061 18.8181 11.2707 19.3713 9.87825 19.3713C8.48579 19.3713 7.15037 18.8181 6.16575 17.8335C5.18113 16.8489 4.62798 15.5135 4.62798 14.121C4.62798 12.7285 5.18113 11.3931 6.16575 10.4085L7.227 9.348L8.2875 10.41L7.227 11.4705C6.87628 11.8182 6.59768 12.2317 6.4072 12.6873C6.21671 13.1429 6.1181 13.6317 6.11702 14.1255C6.11594 14.6194 6.21241 15.1086 6.40089 15.565C6.58938 16.0215 6.86616 16.4362 7.21536 16.7854C7.56456 17.1346 7.97929 17.4114 8.43574 17.5999C8.8922 17.7883 9.38139 17.8848 9.87522 17.8837C10.3691 17.8826 10.8578 17.784 11.3134 17.5936C11.7691 17.4031 12.1826 17.1245 12.5302 16.7738L13.5907 15.7133L14.652 16.7738V16.773ZM14.121 8.81775L15.1823 9.879L9.879 15.1815L8.81775 14.121L14.121 8.8185V8.81775Z" fill={color}/>
    </svg>
  )
}
