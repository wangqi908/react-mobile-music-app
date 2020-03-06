import React, { Component } from 'react'
import { connect } from 'react-redux'

class Test extends Component {
  openSheet = () => {
    console.log(this.props.list)
  }

  render() {
    return <span className="iconfont icon-list" onClick={this.openSheet}></span>
  }
}

const mapState = state => {
  return {
    list: state.player.list
  }
}

export default connect(mapState)(Test)
