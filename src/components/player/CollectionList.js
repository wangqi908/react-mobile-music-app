import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { SheetBox } from '@/components'
import './style.less'

class CollectionList extends Component {
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

  handleSongClick = item => {
    this.props.history.push(`/detail/${item.id}`)
  }

  render() {
    const { list } = this.props
    return (
      <div className="collection-list">
        <span className="iconfont icon-list" onClick={this.openSheet}></span>
        <SheetBox {...this.state} openSheet={this.getShowState}>
          {list.map(item => {
            return (
              <div
                className="sheet-song-item"
                key={item.id}
                onClick={() => this.handleSongClick(item)}
              >
                {item.name}
              </div>
            )
          })}
        </SheetBox>
      </div>
    )
  }
}

const mapState = state => {
  return {
    list: state.player.list
  }
}

export default withRouter(connect(mapState)(CollectionList))
