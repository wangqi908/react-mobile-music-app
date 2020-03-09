import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.less'

class SheetBox extends Component {
  render() {
    const { children, timeout, isShow } = this.props
    return (
      <div className="sheet-box">
        <CSSTransition in={isShow} timeout={timeout} classNames="myfade">
          <div className="sheet-content-box">{children}</div>
        </CSSTransition>
      </div>
    )
  }
}

SheetBox.defaultProps = {
  isShow: false,
  timeout: 600
}

export default SheetBox
