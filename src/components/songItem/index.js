import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { sliceStr } from '@/utils'
import './style.less'

class SongItem extends Component {
  handleSongClick = id => {
    this.props.history.push(`/detail/${id}`)
  }

  addList = item => {
    console.log(item)
  }

  render() {
    const { artists, ar, name, index, id } = this.props
    const artistsArr = ar || artists
    return (
      <div className="song-item">
        <div
          className="song-item-left"
          onClick={() => this.handleSongClick(id)}
        >
          <div className="song-index">{index + 1}</div>
          <div className="song-content">
            <div className="song-title">{name}</div>
            <div className="song-singer">{sliceStr(artistsArr, 'name')}</div>
          </div>
        </div>
        <div
          className="song-item-right"
          onClick={() => this.addList({ id, name })}
        >
          <span className="iconfont icon-jia"></span>
        </div>
      </div>
    )
  }
}

export default withRouter(SongItem)
