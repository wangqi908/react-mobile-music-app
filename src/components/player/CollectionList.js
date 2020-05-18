import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { SheetBox } from '@/components'
import { getSongUrlAction, getSongLrcAction } from '@/store/actions'
import './style.less'

class CollectionList extends Component {
  state = {
    isShow: false,
    timeout: 1000
  }

  openSheet = () => {
    this.setState({ isShow: !this.state.isShow })
  }

  getShowState = isShow => {
    this.setState({ isShow })
  }

  handleSongClick = item => {
    this.props.history.push(`/detail/${item.id}`)
  }

  render() {
    const { list, activePlaying } = this.props
    return (
      <div className="collection-list">
        <span className="iconfont icon-list" onClick={this.openSheet}></span>
        <SheetBox {...this.state} openSheet={this.getShowState}>
          {list.map(item => {
            return (
              <div
                className={`sheet-song-item ${
                  activePlaying.id === item.id ? 'active-play' : ''
                }`}
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
    list: state.player.list,
    activePlaying: state.player.activePlaying
  }
}

export default withRouter(
  connect(mapState, { getSongUrlAction, getSongLrcAction })(CollectionList)
)
