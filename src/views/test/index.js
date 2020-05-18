import React, { Component } from 'react'
import Modal from './modal'

export default class Test extends Component {
  state = {
    visible: false
  }

  showModal = () => {
    this.setState({ visible: true })
  }

  getState = () => {
    console.log(this.state)
  }

  render() {
    const { visible } = this.state

    return (
      <div className="app">
        <button onClick={this.showModal}>click here</button>
        <button onClick={this.getState}>state</button>
        <Modal visible={visible} title="这是自定义title">
          children
        </Modal>
      </div>
    )
  }
}
