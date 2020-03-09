import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import './style.less'

class CollectionList extends Component {
  state = { show: true }

  openSheet = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    const { show } = this.state
    return (
      <div>
        <span className="iconfont icon-list" onClick={this.openSheet}></span>
        <CSSTransition
          in={show}
          timeout={500}
          classNames={'fade'}
          unmountOnExit={true}
        >
          <div className="sheet-box">sheet-box</div>
        </CSSTransition>
      </div>
    )
  }
}

const mapState = state => {
  return {
    list: state.player.list
  }
}

export default connect(mapState)(CollectionList)
