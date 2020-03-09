import React, { Component } from 'react'
import { SheetBox } from '@/components'

export default class Test extends Component {
  state = {
    isShow: false,
    timeout: 1000
  }

  openSheet = () => {
    this.setState({ isShow: !this.state.isShow })
  }
  render() {
    return (
      <div>
        <span className="iconfont icon-list" onClick={this.openSheet}></span>
        <SheetBox {...this.state}>
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
