import React, { Component, createRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.less'

class SheetBox extends Component {
  sheetBox = createRef()

  hideSheetBox = event => {
    let sheetBox = this.sheetBox.current
    let openSheet = this.props.openSheet
    if (sheetBox !== event.target) return
    openSheet(false)
  }

  render() {
    const { children, timeout, isShow } = this.props
    return (
      <div
        className={isShow ? 'sheet-box add-bg' : 'sheet-box'}
        onClick={this.hideSheetBox}
        ref={this.sheetBox}
      >
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
