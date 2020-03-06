import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { sliceStr } from '@/utils'
import './style.less'
import { addSongAction } from '@/store/actions'

class SongItem extends Component {
  handleSongClick = item => {
    this.props.history.push(`/detail/${item.id}`)
    this.props.addSongAction(item)
  }

  addList = item => {
    this.props.addSongAction(item)
  }

  render() {
    const { artists, ar, name, index, id } = this.props
    const artistsArr = ar || artists
    return (
      <div className="song-item">
        <div
          className="song-item-left"
          onClick={() => this.handleSongClick({ id, name })}
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

const mapState = state => ({})
export default withRouter(connect(mapState, { addSongAction })(SongItem))
