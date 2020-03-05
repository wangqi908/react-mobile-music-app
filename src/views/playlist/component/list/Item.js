import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { sliceStr } from '@/utils'
import './style.less'

class Item extends Component {
  handleSongClick = id => {
    this.props.history.push(`/detail/${id}`)
  }

  render() {
    const { ar, name, index, id } = this.props
    return (
      <div className="song-item">
        <div
          className="song-item-left"
          onClick={() => this.handleSongClick(id)}
        >
          <div className="song-index">{index}</div>
          <div className="song-content">
            <div className="song-title">{name}</div>
            <div className="song-singer">{sliceStr(ar, 'name')}</div>
          </div>
        </div>
        <div className="song-item-right">
          <span className="iconfont icon-jia"></span>
        </div>
      </div>
    )
  }
}

export default withRouter(Item)
