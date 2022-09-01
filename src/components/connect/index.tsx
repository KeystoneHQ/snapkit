import React from 'react'
import { Install } from './Install'
import { Modal } from './Modal'

interface ConnectProps {
  open: boolean
  children: JSX.Element | JSX.Element[]
}

// const Connect = ({ open, children }: ConnectProps) => (<Modal open={open}>{children}</Modal>)

// class Connect extends React.Component {
//   constructor(props: ConnectProps) {
//     super(props)
//   }
//   render() {
//     return <Modal open={this.props.open}>{this.props.children}</Modal>
//   }

//   static Install () {
//     return Install
//   }
// }

export function Connect ({ open, children }: ConnectProps) {
  return <Modal open={open}>{children}</Modal>
}

Connect.Install = Install
