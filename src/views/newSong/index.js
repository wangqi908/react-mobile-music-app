import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPersonalizedNewSongAction } from '@/store/actions'
import { SongItem } from '@/components'
import './style.less'

class NewSong extends Component {
  componentDidMount() {
    this.props.getPersonalizedNewSongAction()
  }

  render() {
    const { list } = this.props
    return (
      <div className="new-song">
        <div className="new-song-banner">
          <p>新歌推荐</p>
          <p>每日新歌榜</p>
        </div>
        <div className="new-song-list">
          {list.map((item, index) => {
            return <SongItem key={item.song.id} {...item.song} index={index} />
          })}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    list: state.home.personalizedNewSongList
  }
}

export default connect(mapState, { getPersonalizedNewSongAction })(NewSong)
