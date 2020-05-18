import React, { Component } from 'react'
import './style.less'
class Modal extends Component {
  closeModal = () => {
    // this.setState({ visible: false })
  }

  render() {
    const { visible, title, children } = this.props
    return (
      visible && (
        <div className="modal-wrapper">
          <div className="modal">
            {/* 这里使用父组件的title*/}
            <div className="modal-title">{title}</div>
            {/* 这里的content使用父组件的children*/}
            <div className="modal-content">{children}</div>
            <div className="modal-operator">
              <button className="modal-operator-close">取消</button>
              <button
                className="modal-operator-confirm"
                onClick={this.closeModal}
              >
                确认
              </button>
            </div>
          </div>
          <div className="mask"></div>
        </div>
      )
    )
  }
}
export default Modal
