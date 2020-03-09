import React, { Component } from 'react'
import { SheetBox } from '@/components'

export default class Test extends Component {
  state = {
    isShow: false,
    timeout: 1000
  }

  openSheet = value => {
    this.setState({ isShow: !this.state.isShow })
  }

  getShowState = isShow => {
    this.setState({ isShow })
  }

  render() {
    return (
      <div>
        <span className="iconfont icon-list" onClick={this.openSheet}></span>
        <SheetBox {...this.state} openSheet={this.getShowState}>
          <p>Sheet</p>
          <p>Sheet</p>
          <p>Sheet</p>
          <p>Sheet</p>
          <p>Sheet</p>
          <p>Sheet</p>
          <p>Sheet</p>
          <p>Sheet</p>
          <p>Sheet</p>
          <p>Sheet</p>
          <p>Sheet</p>
          <p>Sheet</p>
          <p>Sheet</p>
          <p>Sheet</p>
          <p>Sheet</p>
        </SheetBox>
      </div>
    )
  }
}
